//! PAR runtime bootstrap + management.
//!
//! Detects, installs, and resolves external language runtimes (`uv`/`uvx`, `node`/`npx`, …)
//! used to run polyglot agents. Manages two isolation layers: runtime version (never touch the
//! system interpreter) and a shared, content-addressed dependency cache.
//!
//! Scope: PAR.1 — see `plans/2026-05-31_polyglot_agent_runtime.md`.

pub mod doctor;

use std::path::{Path, PathBuf};
use std::sync::Arc;

use std::cmp::Ordering;

use async_trait::async_trait;
use serde::{Deserialize, Serialize};

use crate::Result;
use crate::error::ZeniiError;

/// Canonical runner names PAR is aware of by default.
pub const DEFAULT_RUNNERS: &[&str] = &["uv", "uvx", "node", "npx"];

/// How a missing runtime can be installed.
#[derive(Debug, Clone, Copy, PartialEq, Eq, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub enum InstallMethod {
    /// The app can download/install it automatically (consent permitting).
    AutoInstall,
    /// The user must install it manually following the instructions.
    Manual,
}

/// A single runtime's probe result, surfaced by the doctor / gateway.
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub struct RuntimeReport {
    pub name: String,
    pub present: bool,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub version: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub path: Option<String>,
    pub install_method: InstallMethod,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub instructions: Option<String>,
}

/// Comparison operator in a runtime constraint (e.g. `python>=3.11`).
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum ConstraintOp {
    Any,
    Eq,
    Gt,
    Gte,
    Lt,
    Lte,
}

/// A parsed `required_runtime` constraint such as `python>=3.11`, `node>18`, or bare `python`.
#[derive(Debug, Clone, PartialEq, Eq)]
pub struct RuntimeConstraint {
    pub name: String,
    pub op: ConstraintOp,
    /// Dotted version components (e.g. `[3, 11]`), or `None` for a bare name.
    pub version: Option<Vec<u64>>,
}

impl RuntimeConstraint {
    /// Parse a constraint string like `python>=3.11`, `node>18`, or bare `python`.
    ///
    /// Errors on an empty name (e.g. `>=3.11`) or an unparseable version.
    pub fn parse(spec: &str) -> Result<Self> {
        let spec = spec.trim();
        if spec.is_empty() {
            return Err(ZeniiError::Validation("empty runtime constraint".into()));
        }
        // `>=`/`<=` must be checked before `>`/`<`.
        const OPS: &[(&str, ConstraintOp)] = &[
            (">=", ConstraintOp::Gte),
            ("<=", ConstraintOp::Lte),
            (">", ConstraintOp::Gt),
            ("<", ConstraintOp::Lt),
            ("=", ConstraintOp::Eq),
        ];
        for (sym, op) in OPS {
            if let Some(idx) = spec.find(sym) {
                let name = spec[..idx].trim().to_string();
                if name.is_empty() {
                    return Err(ZeniiError::Validation(format!(
                        "runtime constraint missing name: {spec}"
                    )));
                }
                let version = parse_version(spec[idx + sym.len()..].trim())?;
                return Ok(Self {
                    name,
                    op: *op,
                    version: Some(version),
                });
            }
        }
        Ok(Self {
            name: spec.to_string(),
            op: ConstraintOp::Any,
            version: None,
        })
    }

    /// Whether a concrete dotted version string (e.g. `3.11.2`) satisfies this constraint.
    pub fn satisfies(&self, version: &str) -> bool {
        let Some(req) = &self.version else {
            return true;
        };
        let Ok(have) = parse_version(version) else {
            return false;
        };
        let ord = cmp_versions(&have, req);
        match self.op {
            ConstraintOp::Any => true,
            ConstraintOp::Eq => ord == Ordering::Equal,
            ConstraintOp::Gt => ord == Ordering::Greater,
            ConstraintOp::Gte => ord != Ordering::Less,
            ConstraintOp::Lt => ord == Ordering::Less,
            ConstraintOp::Lte => ord != Ordering::Greater,
        }
    }
}

/// Parse a dotted version (`3.11.2`) into components, tolerating trailing suffixes (`3.11rc1`).
fn parse_version(s: &str) -> Result<Vec<u64>> {
    if s.is_empty() {
        return Err(ZeniiError::Validation("empty version".into()));
    }
    let parts = s
        .split('.')
        .map(|p| {
            let digits: String = p.chars().take_while(|c| c.is_ascii_digit()).collect();
            digits
                .parse::<u64>()
                .map_err(|_| ZeniiError::Validation(format!("invalid version component: {s}")))
        })
        .collect::<Result<Vec<u64>>>()?;
    Ok(parts)
}

/// Compare two dotted versions, padding the shorter with zeros.
fn cmp_versions(a: &[u64], b: &[u64]) -> Ordering {
    let len = a.len().max(b.len());
    for i in 0..len {
        let x = a.get(i).copied().unwrap_or(0);
        let y = b.get(i).copied().unwrap_or(0);
        match x.cmp(&y) {
            Ordering::Equal => continue,
            other => return other,
        }
    }
    Ordering::Equal
}

/// Probes the host for runtimes (PATH lookup + version exec). Injectable for tests.
pub trait RuntimeProbe: Send + Sync {
    /// Locate a tool by name on the system PATH.
    fn which(&self, name: &str) -> Option<PathBuf>;
    /// Run `<path> --version` and return the parsed version string.
    fn version(&self, path: &Path) -> Option<String>;
}

/// Installs a missing runtime into `dest`, returning the installed binary path.
#[async_trait]
pub trait RuntimeInstaller: Send + Sync {
    async fn install(&self, name: &str, dest: &Path) -> Result<PathBuf>;
}

/// Canonical, copy-pasteable install instructions for a known runtime.
pub fn install_instructions(name: &str) -> String {
    match name {
        "uv" | "uvx" => {
            "Install uv (provides uvx): `curl -LsSf https://astral.sh/uv/install.sh | sh` \
             (Windows: `powershell -ExecutionPolicy ByPass -c \"irm https://astral.sh/uv/install.ps1 | iex\"`)"
                .to_string()
        }
        "node" | "npx" | "bunx" => {
            "Install Node.js from https://nodejs.org, or via fnm: \
             `curl -fsSL https://fnm.vercel.app/install | bash`"
                .to_string()
        }
        other => format!("Install `{other}` and ensure it is available on your PATH."),
    }
}

/// Manages runtime detection, resolution, and installation.
pub struct RuntimeManager {
    runtimes_dir: PathBuf,
    cache_dir: PathBuf,
    auto_install: bool,
    probe: Arc<dyn RuntimeProbe>,
    installer: Arc<dyn RuntimeInstaller>,
}

impl RuntimeManager {
    pub fn new(
        runtimes_dir: PathBuf,
        cache_dir: PathBuf,
        auto_install: bool,
        probe: Arc<dyn RuntimeProbe>,
        installer: Arc<dyn RuntimeInstaller>,
    ) -> Self {
        Self {
            runtimes_dir,
            cache_dir,
            auto_install,
            probe,
            installer,
        }
    }

    /// Build a production manager (system probe + default installer) from resolved paths.
    pub fn from_config(runtimes_dir: PathBuf, cache_dir: PathBuf, auto_install: bool) -> Self {
        Self::new(
            runtimes_dir,
            cache_dir,
            auto_install,
            Arc::new(SystemRuntimeProbe),
            Arc::new(DefaultRuntimeInstaller),
        )
    }

    /// Shared dependency cache directory.
    pub fn cache_dir(&self) -> &Path {
        &self.cache_dir
    }

    /// Whether automatic (no-prompt) install is enabled.
    pub fn auto_install(&self) -> bool {
        self.auto_install
    }

    /// Resolve a runner's path, preferring the app-managed copy over the system PATH.
    pub fn resolve_runner_path(&self, name: &str) -> Option<PathBuf> {
        let managed = self.runtimes_dir.join(name);
        if managed.exists() {
            return Some(managed);
        }
        self.probe.which(name)
    }

    fn install_method(&self) -> InstallMethod {
        if self.auto_install {
            InstallMethod::AutoInstall
        } else {
            InstallMethod::Manual
        }
    }

    fn missing(&self, name: &str, path: Option<PathBuf>) -> RuntimeReport {
        RuntimeReport {
            name: name.to_string(),
            present: false,
            version: None,
            path: path.map(|p| p.display().to_string()),
            install_method: self.install_method(),
            instructions: Some(install_instructions(name)),
        }
    }

    /// Probe a single runtime and build its report.
    pub fn detect(&self, name: &str) -> RuntimeReport {
        match self.resolve_runner_path(name) {
            Some(path) => match self.probe.version(&path) {
                Some(version) => RuntimeReport {
                    name: name.to_string(),
                    present: true,
                    version: Some(version),
                    path: Some(path.display().to_string()),
                    install_method: self.install_method(),
                    instructions: None,
                },
                None => self.missing(name, Some(path)),
            },
            None => self.missing(name, None),
        }
    }

    /// Automatic install path: installs only when auto-install is enabled, otherwise returns
    /// the Missing report with manual instructions WITHOUT invoking the installer.
    pub async fn install(&self, name: &str) -> Result<RuntimeReport> {
        if !self.auto_install {
            return Ok(RuntimeReport {
                name: name.to_string(),
                present: false,
                version: None,
                path: None,
                install_method: InstallMethod::Manual,
                instructions: Some(install_instructions(name)),
            });
        }
        self.install_consented(name).await
    }

    /// Explicit, user-consented install: always attempts installation regardless of the
    /// auto-install default. Used by the `POST /runtimes/{name}/install` endpoint.
    pub async fn install_consented(&self, name: &str) -> Result<RuntimeReport> {
        self.installer.install(name, &self.runtimes_dir).await?;
        Ok(self.detect(name))
    }
}

/// Production probe: PATH lookup + `--version` execution.
pub struct SystemRuntimeProbe;

impl RuntimeProbe for SystemRuntimeProbe {
    fn which(&self, name: &str) -> Option<PathBuf> {
        #[cfg(unix)]
        let finder = "which";
        #[cfg(windows)]
        let finder = "where";

        let out = std::process::Command::new(finder).arg(name).output().ok()?;
        if !out.status.success() {
            return None;
        }
        String::from_utf8_lossy(&out.stdout)
            .lines()
            .next()
            .map(|l| PathBuf::from(l.trim()))
            .filter(|p| !p.as_os_str().is_empty())
    }

    fn version(&self, path: &Path) -> Option<String> {
        let out = std::process::Command::new(path)
            .arg("--version")
            .output()
            .ok()?;
        if !out.status.success() {
            return None;
        }
        let stdout = String::from_utf8_lossy(&out.stdout);
        parse_version_token(&stdout)
    }
}

/// Extract the first version-looking token (e.g. `0.5.1` from `uv 0.5.1`).
fn parse_version_token(s: &str) -> Option<String> {
    s.split_whitespace()
        .find(|t| t.chars().next().is_some_and(|c| c.is_ascii_digit()))
        .map(|t| t.trim_start_matches('v').to_string())
        .or_else(|| {
            let t = s.trim();
            (!t.is_empty()).then(|| t.to_string())
        })
}

/// Production installer. Currently supports `uv`/`uvx` via the official installer script,
/// targeting the app-managed runtimes dir. Other runtimes degrade to manual instructions.
pub struct DefaultRuntimeInstaller;

#[async_trait]
impl RuntimeInstaller for DefaultRuntimeInstaller {
    async fn install(&self, name: &str, dest: &Path) -> Result<PathBuf> {
        match name {
            "uv" | "uvx" => install_uv(name, dest).await,
            other => Err(ZeniiError::Runtime(format!(
                "automatic install of `{other}` is not supported yet. {}",
                install_instructions(other)
            ))),
        }
    }
}

async fn install_uv(name: &str, dest: &Path) -> Result<PathBuf> {
    tokio::fs::create_dir_all(dest).await?;

    #[cfg(windows)]
    let (shell, flag, script) = (
        "cmd",
        "/C",
        "powershell -ExecutionPolicy ByPass -c \"irm https://astral.sh/uv/install.ps1 | iex\"",
    );
    #[cfg(unix)]
    let (shell, flag, script) = (
        "sh",
        "-c",
        "curl -LsSf https://astral.sh/uv/install.sh | sh",
    );

    let status = tokio::process::Command::new(shell)
        .arg(flag)
        .arg(script)
        .env("UV_INSTALL_DIR", dest)
        .env("UV_NO_MODIFY_PATH", "1")
        .status()
        .await?;
    if !status.success() {
        return Err(ZeniiError::Runtime("uv install script failed".into()));
    }

    let exe = if cfg!(windows) {
        format!("{name}.exe")
    } else {
        name.to_string()
    };
    let bin = dest.join(&exe);
    if bin.exists() {
        Ok(bin)
    } else {
        Err(ZeniiError::Runtime(format!(
            "uv installed but `{exe}` not found in {}",
            dest.display()
        )))
    }
}

#[cfg(test)]
mod tests {
    use std::sync::Arc;
    use std::sync::atomic::{AtomicBool, AtomicUsize, Ordering};

    use super::*;

    /// Mock probe with toggleable presence + a fixed version string.
    struct MockProbe {
        which_path: Option<PathBuf>,
        version: Option<String>,
        installed: Arc<AtomicBool>,
    }

    impl MockProbe {
        fn present(path: &str, version: &str) -> Self {
            Self {
                which_path: Some(PathBuf::from(path)),
                version: Some(version.into()),
                installed: Arc::new(AtomicBool::new(true)),
            }
        }
        fn absent() -> Self {
            Self {
                which_path: None,
                version: None,
                installed: Arc::new(AtomicBool::new(false)),
            }
        }
    }

    impl RuntimeProbe for MockProbe {
        fn which(&self, _name: &str) -> Option<PathBuf> {
            if self.installed.load(Ordering::SeqCst) {
                self.which_path.clone()
            } else {
                None
            }
        }
        fn version(&self, _path: &Path) -> Option<String> {
            self.version.clone()
        }
    }

    /// Mock installer that records call count and either creates the dest file or fails.
    struct MockInstaller {
        succeed: bool,
        calls: Arc<AtomicUsize>,
    }

    #[async_trait]
    impl RuntimeInstaller for MockInstaller {
        async fn install(&self, name: &str, dest: &Path) -> Result<PathBuf> {
            self.calls.fetch_add(1, Ordering::SeqCst);
            if !self.succeed {
                return Err(crate::error::ZeniiError::Runtime("network failure".into()));
            }
            std::fs::create_dir_all(dest).ok();
            let bin = dest.join(name);
            std::fs::write(&bin, b"#!/bin/sh\n").unwrap();
            Ok(bin)
        }
    }

    fn manager(
        dir: &Path,
        auto_install: bool,
        probe: Arc<dyn RuntimeProbe>,
        installer: Arc<dyn RuntimeInstaller>,
    ) -> RuntimeManager {
        RuntimeManager::new(
            dir.join("runtimes"),
            dir.join("cache"),
            auto_install,
            probe,
            installer,
        )
    }

    // PAR.1: detection -------------------------------------------------------

    #[test]
    fn detect_present_returns_version() {
        let dir = tempfile::TempDir::new().unwrap();
        let mgr = manager(
            dir.path(),
            false,
            Arc::new(MockProbe::present("/usr/bin/uv", "0.5.1")),
            Arc::new(MockInstaller {
                succeed: true,
                calls: Arc::new(AtomicUsize::new(0)),
            }),
        );
        let report = mgr.detect("uv");
        assert!(report.present);
        assert_eq!(report.version.as_deref(), Some("0.5.1"));
    }

    #[test]
    fn detect_absent_returns_missing_with_instructions() {
        let dir = tempfile::TempDir::new().unwrap();
        let mgr = manager(
            dir.path(),
            false,
            Arc::new(MockProbe::absent()),
            Arc::new(MockInstaller {
                succeed: true,
                calls: Arc::new(AtomicUsize::new(0)),
            }),
        );
        let report = mgr.detect("uv");
        assert!(!report.present);
        assert_eq!(report.install_method, InstallMethod::Manual);
        assert!(report.instructions.is_some());
    }

    #[test]
    fn runner_path_prefers_app_managed_over_system() {
        let dir = tempfile::TempDir::new().unwrap();
        let runtimes_dir = dir.path().join("runtimes");
        std::fs::create_dir_all(&runtimes_dir).unwrap();
        std::fs::write(runtimes_dir.join("uv"), b"#!/bin/sh\n").unwrap();

        let mgr = manager(
            dir.path(),
            false,
            Arc::new(MockProbe::present("/usr/bin/uv", "0.5.1")),
            Arc::new(MockInstaller {
                succeed: true,
                calls: Arc::new(AtomicUsize::new(0)),
            }),
        );
        let resolved = mgr.resolve_runner_path("uv").unwrap();
        assert_eq!(resolved, runtimes_dir.join("uv"));
    }

    // PAR.1: constraint parsing ---------------------------------------------

    #[test]
    fn required_runtime_constraint_parsed() {
        let c = RuntimeConstraint::parse("python>=3.11").unwrap();
        assert_eq!(c.name, "python");
        assert_eq!(c.op, ConstraintOp::Gte);
        assert_eq!(c.version, Some(vec![3, 11]));

        let bare = RuntimeConstraint::parse("python").unwrap();
        assert_eq!(bare.op, ConstraintOp::Any);
        assert!(bare.version.is_none());

        assert!(RuntimeConstraint::parse(">=3.11").is_err());
    }

    #[test]
    fn version_satisfies_constraint_true_false() {
        let c = RuntimeConstraint::parse("python>=3.11").unwrap();
        assert!(c.satisfies("3.11.2"));
        assert!(c.satisfies("3.12.0"));
        assert!(!c.satisfies("3.10.9"));

        let any = RuntimeConstraint::parse("node").unwrap();
        assert!(any.satisfies("18.0.0"));
    }

    // PAR.1: install --------------------------------------------------------

    #[tokio::test]
    async fn install_success_marks_present_and_caches_path() {
        let dir = tempfile::TempDir::new().unwrap();
        let calls = Arc::new(AtomicUsize::new(0));
        let mgr = manager(
            dir.path(),
            true,
            Arc::new(MockProbe::present("/usr/bin/uv", "0.5.1")),
            Arc::new(MockInstaller {
                succeed: true,
                calls: calls.clone(),
            }),
        );
        let report = mgr.install("uv").await.unwrap();
        assert!(report.present);
        assert_eq!(calls.load(Ordering::SeqCst), 1);
        // installed under the app-managed runtimes dir
        let resolved = mgr.resolve_runner_path("uv").unwrap();
        assert!(resolved.starts_with(dir.path().join("runtimes")));
    }

    #[tokio::test]
    async fn install_failure_surfaces_zenii_error_not_panic() {
        let dir = tempfile::TempDir::new().unwrap();
        let mgr = manager(
            dir.path(),
            true,
            Arc::new(MockProbe::absent()),
            Arc::new(MockInstaller {
                succeed: false,
                calls: Arc::new(AtomicUsize::new(0)),
            }),
        );
        let err = mgr.install("uv").await.unwrap_err();
        assert!(matches!(err, crate::error::ZeniiError::Runtime(_)));
    }

    #[tokio::test]
    async fn auto_install_disabled_returns_instructions_not_install() {
        let dir = tempfile::TempDir::new().unwrap();
        let calls = Arc::new(AtomicUsize::new(0));
        let mgr = manager(
            dir.path(),
            false,
            Arc::new(MockProbe::absent()),
            Arc::new(MockInstaller {
                succeed: true,
                calls: calls.clone(),
            }),
        );
        let report = mgr.install("uv").await.unwrap();
        assert!(!report.present);
        assert_eq!(report.install_method, InstallMethod::Manual);
        assert!(report.instructions.is_some());
        assert_eq!(calls.load(Ordering::SeqCst), 0, "installer must not run");
    }
}
