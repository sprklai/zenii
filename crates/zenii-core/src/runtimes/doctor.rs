//! Runtime doctor: aggregates runtime reports and assists install.
//!
//! Scope: PAR.1 — see `plans/2026-05-31_polyglot_agent_runtime.md`.

use std::sync::Arc;

use super::{RuntimeConstraint, RuntimeManager, RuntimeReport};
use crate::Result;
use crate::error::ZeniiError;

/// Surfaces runtime status and drives consent-gated installs.
pub struct Doctor {
    manager: Arc<RuntimeManager>,
}

impl Doctor {
    pub fn new(manager: Arc<RuntimeManager>) -> Self {
        Self { manager }
    }

    /// Probe each named runtime and return its report.
    pub fn status(&self, names: &[&str]) -> Vec<RuntimeReport> {
        names.iter().map(|n| self.manager.detect(n)).collect()
    }

    /// Explicit, user-consented install (always attempts; ignores the auto-install default).
    pub async fn install(&self, name: &str) -> Result<RuntimeReport> {
        self.manager.install_consented(name).await
    }

    /// Ensure a `required_runtime` constraint is satisfied; errors if missing/unsatisfied.
    /// Used by the plugin installer (PAR.3).
    pub async fn ensure(&self, required: &str) -> Result<()> {
        let constraint = RuntimeConstraint::parse(required)?;
        let report = self.manager.detect(&constraint.name);
        if !report.present {
            return Err(ZeniiError::Runtime(format!(
                "required runtime `{}` not available. {}",
                constraint.name,
                super::install_instructions(&constraint.name)
            )));
        }
        if let Some(version) = &report.version
            && !constraint.satisfies(version)
        {
            return Err(ZeniiError::Runtime(format!(
                "runtime `{}` version {version} does not satisfy `{required}`",
                constraint.name
            )));
        }
        Ok(())
    }
}

/// De-duplicate runtime names from a set of `required_runtime` specs, preserving order.
pub fn aggregate_required(specs: &[String]) -> Vec<String> {
    let mut names: Vec<String> = Vec::new();
    for spec in specs {
        if let Ok(constraint) = RuntimeConstraint::parse(spec)
            && !names.contains(&constraint.name)
        {
            names.push(constraint.name);
        }
    }
    names
}

#[cfg(test)]
mod tests {
    use std::path::{Path, PathBuf};
    use std::sync::Arc;
    use std::sync::atomic::{AtomicBool, Ordering};

    use async_trait::async_trait;

    use super::*;
    use crate::runtimes::{InstallMethod, RuntimeInstaller, RuntimeProbe};

    struct ToggleProbe {
        installed: Arc<AtomicBool>,
    }
    impl RuntimeProbe for ToggleProbe {
        fn which(&self, _name: &str) -> Option<PathBuf> {
            if self.installed.load(Ordering::SeqCst) {
                Some(PathBuf::from("/usr/bin/uv"))
            } else {
                None
            }
        }
        fn version(&self, _path: &Path) -> Option<String> {
            Some("0.5.1".into())
        }
    }

    struct NoopInstaller;
    #[async_trait]
    impl RuntimeInstaller for NoopInstaller {
        async fn install(&self, _name: &str, dest: &Path) -> Result<PathBuf> {
            Ok(dest.join("uv"))
        }
    }

    fn doctor(installed: Arc<AtomicBool>, dir: &Path) -> Doctor {
        let mgr = RuntimeManager::new(
            dir.join("runtimes"),
            dir.join("cache"),
            true,
            Arc::new(ToggleProbe { installed }),
            Arc::new(NoopInstaller),
        );
        Doctor::new(Arc::new(mgr))
    }

    #[test]
    fn doctor_report_serializes_expected_shape() {
        let report = RuntimeReport {
            name: "uv".into(),
            present: false,
            version: None,
            path: None,
            install_method: InstallMethod::Manual,
            instructions: Some("curl ...".into()),
        };
        let json = serde_json::to_value(&report).unwrap();
        assert_eq!(json["name"], "uv");
        assert_eq!(json["present"], false);
        assert_eq!(json["install_method"], "manual");
        assert_eq!(json["instructions"], "curl ...");
    }

    #[test]
    fn doctor_aggregates_required_runtimes_from_manifests() {
        let specs = vec![
            "python>=3.11".to_string(),
            "node".to_string(),
            "python".to_string(),
        ];
        let names = aggregate_required(&specs);
        assert_eq!(names, vec!["python".to_string(), "node".to_string()]);
    }

    #[test]
    fn doctor_recheck_flips_missing_to_present() {
        let dir = tempfile::TempDir::new().unwrap();
        let installed = Arc::new(AtomicBool::new(false));
        let doc = doctor(installed.clone(), dir.path());

        let before = doc.status(&["uv"]);
        assert!(!before[0].present);

        installed.store(true, Ordering::SeqCst);
        let after = doc.status(&["uv"]);
        assert!(after[0].present);
    }
}
