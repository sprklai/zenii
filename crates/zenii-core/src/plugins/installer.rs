use std::path::{Path, PathBuf};
use std::sync::Arc;

use tokio::sync::Mutex;
use tracing::info;

use std::time::Duration;

use super::adapter::{PluginToolAdapter, RepairContext};
use super::heal::evaluator::RunnerEvaluator;
use super::heal::memory_store::MemoryFixStore;
use super::heal::trigger::Healer;
use super::heal::{FixMemory, HealConfig, Reflector};
use super::manifest::{PluginManifest, PluginToolDef};
use super::process::PluginProcess;
use super::registry::{InstalledPlugin, PluginRegistry, PluginSource};
use crate::memory::traits::Memory;
use crate::runtimes::RuntimeManager;
use crate::runtimes::doctor::Doctor;
use crate::skills::SkillRegistry;
use crate::tools::ToolRegistry;
use crate::tools::skill_proposal::SkillProposalTool;
use crate::{Result, ZeniiError};

/// Prepares dependencies for a runner-based plugin tool into an isolated env / shared cache.
/// Injectable so installs can be unit-tested without network or real toolchains.
#[async_trait::async_trait]
pub trait DependencyInstaller: Send + Sync {
    async fn prepare(
        &self,
        runner: &str,
        package: Option<&str>,
        plugin_dir: &Path,
        cache_dir: &Path,
    ) -> Result<()>;
}

/// Resolve a runner tool's entry. File-based runners (`uv-run`/`node`) take a local script and
/// must resolve it against the install dir (the child is not spawned with that cwd); package
/// runners (`uvx`/`npx`/`bunx`) take a package-provided command name and use it as-is.
pub(crate) fn resolve_runner_entry(runner: &str, install_path: &Path, binary: &str) -> PathBuf {
    match runner {
        "uv-run" | "node" => install_path.join(binary),
        _ => PathBuf::from(binary),
    }
}

/// Map a runner name to its program (e.g. `uv-run` runs via the `uv` binary).
pub fn runner_program_name(runner: &str) -> &str {
    match runner {
        "uv-run" => "uv",
        other => other,
    }
}

/// Derive a stable cache-entry name from a package spec (best-effort, for pruning).
fn cache_entry_name(pkg: &str) -> String {
    pkg.chars()
        .map(|c| if c.is_alphanumeric() { c } else { '_' })
        .collect()
}

/// Production dependency installer: primes/installs deps via uv/npm into the isolated env.
pub struct DefaultDependencyInstaller;

#[async_trait::async_trait]
impl DependencyInstaller for DefaultDependencyInstaller {
    async fn prepare(
        &self,
        runner: &str,
        package: Option<&str>,
        plugin_dir: &Path,
        cache_dir: &Path,
    ) -> Result<()> {
        use tokio::process::Command;
        match runner {
            "uvx" => {
                // Prime the shared uv cache by resolving the package once.
                let Some(pkg) = package else { return Ok(()) };
                let _ = Command::new("uvx")
                    .env("UV_CACHE_DIR", cache_dir)
                    .args(["--from", pkg, "--help"])
                    .status()
                    .await;
            }
            "uv-run" => {
                // Sync the project's deps into an isolated env if it declares any.
                let _ = Command::new("uv")
                    .env("UV_CACHE_DIR", cache_dir)
                    .current_dir(plugin_dir)
                    .arg("sync")
                    .status()
                    .await;
            }
            "npx" | "bunx" | "node" => {
                if !plugin_dir.join("package.json").exists() {
                    return Ok(());
                }
                let _ = Command::new("npm")
                    .current_dir(plugin_dir)
                    .arg("install")
                    .status()
                    .await;
            }
            _ => {}
        }
        Ok(())
    }
}

/// Handles plugin install/update/remove operations.
pub struct PluginInstaller {
    registry: Arc<PluginRegistry>,
    tool_registry: Arc<ToolRegistry>,
    skill_registry: Arc<SkillRegistry>,
    execute_timeout_secs: u64,
    max_restart_attempts: u32,
    /// PAR: runtime doctor for `required_runtime` checks + runner-path resolution.
    runtime_manager: Option<Arc<RuntimeManager>>,
    /// PAR: dependency preparation for runner-based tools.
    dep_installer: Arc<dyn DependencyInstaller>,
    /// PAR.7d: self-heal wiring (absent → no auto-repair).
    reflector: Option<Arc<dyn Reflector>>,
    heal_memory: Option<Arc<dyn Memory>>,
    heal_skill_sink: Option<Arc<SkillProposalTool>>,
    auto_repair_enabled: bool,
    heal_max_attempts: u32,
    heal_wall_clock_secs: u64,
}

impl PluginInstaller {
    pub fn new(
        registry: Arc<PluginRegistry>,
        tool_registry: Arc<ToolRegistry>,
        skill_registry: Arc<SkillRegistry>,
        execute_timeout_secs: u64,
        max_restart_attempts: u32,
    ) -> Self {
        Self {
            registry,
            tool_registry,
            skill_registry,
            execute_timeout_secs,
            max_restart_attempts,
            runtime_manager: None,
            dep_installer: Arc::new(DefaultDependencyInstaller),
            reflector: None,
            heal_memory: None,
            heal_skill_sink: None,
            auto_repair_enabled: false,
            heal_max_attempts: 3,
            heal_wall_clock_secs: 120,
        }
    }

    /// Wire the runtime manager + dependency installer (enables runner-based plugins).
    pub fn with_runtime(
        mut self,
        runtime_manager: Arc<RuntimeManager>,
        dep_installer: Arc<dyn DependencyInstaller>,
    ) -> Self {
        self.runtime_manager = Some(runtime_manager);
        self.dep_installer = dep_installer;
        self
    }

    /// Wire self-heal (PAR.7d): runner tools with declared `tests` auto-repair on failure.
    #[allow(clippy::too_many_arguments)]
    pub fn with_self_heal(
        mut self,
        reflector: Arc<dyn Reflector>,
        memory: Arc<dyn Memory>,
        skill_sink: Arc<SkillProposalTool>,
        auto_repair_enabled: bool,
        max_attempts: u32,
        wall_clock_secs: u64,
    ) -> Self {
        self.reflector = Some(reflector);
        self.heal_memory = Some(memory);
        self.heal_skill_sink = Some(skill_sink);
        self.auto_repair_enabled = auto_repair_enabled;
        self.heal_max_attempts = max_attempts;
        self.heal_wall_clock_secs = wall_clock_secs;
        self
    }

    /// Build a self-heal [`RepairContext`] for a runner tool, when auto-repair is enabled,
    /// the tool declares test cases, and all heal dependencies are wired.
    fn build_repair_context(
        &self,
        plugin: &InstalledPlugin,
        tool_def: &PluginToolDef,
    ) -> Option<RepairContext> {
        if !self.auto_repair_enabled || tool_def.tests.is_empty() {
            return None;
        }
        let (reflector, memory, skill_sink, runtime_manager) = match (
            &self.reflector,
            &self.heal_memory,
            &self.heal_skill_sink,
            &self.runtime_manager,
        ) {
            (Some(r), Some(m), Some(s), Some(rt)) => (r.clone(), m.clone(), s.clone(), rt.clone()),
            _ => return None,
        };
        let evaluator = Arc::new(RunnerEvaluator::new(
            plugin.install_path.clone(),
            tool_def.clone(),
            runtime_manager,
            self.resolve_cache_dir(plugin),
            self.execute_timeout_secs,
            0,
        ));
        let memfix: Arc<Mutex<dyn FixMemory>> =
            Arc::new(Mutex::new(MemoryFixStore::new(memory, skill_sink)));
        let healer = Arc::new(Healer::new(
            reflector,
            evaluator,
            memfix,
            tool_def.tests.len(),
            HealConfig {
                max_attempts: self.heal_max_attempts,
            },
            Duration::from_secs(self.heal_wall_clock_secs),
        ));
        Some(RepairContext {
            healer,
            plugin_dir: plugin.install_path.clone(),
            entry: tool_def.binary.clone(),
            has_tests: true,
        })
    }

    /// Re-resolve dependencies for an installed plugin's runner-based tools.
    pub async fn refresh(&self, name: &str) -> Result<()> {
        let plugin = self
            .registry
            .get(name)
            .ok_or_else(|| ZeniiError::PluginNotFound(name.to_string()))?;
        let cache_dir = self.resolve_cache_dir(&plugin);
        for tool_def in &plugin.manifest.tools {
            if let Some(runner) = &tool_def.runner {
                self.dep_installer
                    .prepare(
                        runner,
                        tool_def.package.as_deref(),
                        &plugin.install_path,
                        &cache_dir,
                    )
                    .await?;
            }
        }
        Ok(())
    }

    /// Remove cache entries not referenced by any installed plugin. Returns count removed.
    pub fn prune(&self, cache_dir: &Path) -> Result<usize> {
        if !cache_dir.exists() {
            return Ok(0);
        }
        let referenced: std::collections::HashSet<String> = self
            .registry
            .list()
            .iter()
            .flat_map(|p| p.manifest.tools.iter().filter_map(|t| t.package.clone()))
            .map(|pkg| cache_entry_name(&pkg))
            .collect();
        let mut removed = 0;
        for entry in std::fs::read_dir(cache_dir)
            .map_err(|e| ZeniiError::Plugin(format!("read cache dir failed: {e}")))?
        {
            let entry = entry.map_err(|e| ZeniiError::Plugin(format!("cache entry error: {e}")))?;
            if !entry.path().is_dir() {
                continue;
            }
            let name = entry.file_name().to_string_lossy().to_string();
            if !referenced.contains(&name) {
                std::fs::remove_dir_all(entry.path())
                    .map_err(|e| ZeniiError::Plugin(format!("prune remove failed: {e}")))?;
                removed += 1;
            }
        }
        Ok(removed)
    }

    /// Resolve the dependency cache dir (shared runtime cache, else a per-plugin fallback).
    fn resolve_cache_dir(&self, plugin: &InstalledPlugin) -> std::path::PathBuf {
        self.runtime_manager
            .as_ref()
            .map(|m| m.cache_dir().to_path_buf())
            .unwrap_or_else(|| plugin.install_path.join(".cache"))
    }

    /// Install a plugin from a git URL.
    ///
    /// Supports monorepo subdirectories via URL fragment:
    /// `https://github.com/org/plugins#plugins/weather` installs only the
    /// `plugins/weather` subdirectory. Without a fragment, the entire repo
    /// is treated as one plugin.
    pub async fn install_from_git(&self, url: &str) -> Result<InstalledPlugin> {
        let plugins_dir = self.registry.plugins_dir();

        // Parse optional subdirectory from URL fragment
        let (git_url, subdir) = match url.rsplit_once('#') {
            Some((base, path)) if !path.is_empty() => (base, Some(path)),
            _ => (url, None),
        };

        // Clone to temp dir first
        let temp_path = std::env::temp_dir().join(format!(
            "zenii-plugin-install-{}-{}",
            std::process::id(),
            std::time::SystemTime::now()
                .duration_since(std::time::UNIX_EPOCH)
                .unwrap_or_default()
                .as_nanos()
        ));
        std::fs::create_dir_all(&temp_path)
            .map_err(|e| ZeniiError::Plugin(format!("temp dir failed: {e}")))?;

        let output = tokio::process::Command::new("git")
            .args([
                "clone",
                "--depth",
                "1",
                git_url,
                temp_path.to_str().unwrap_or("."),
            ])
            .output()
            .await
            .map_err(|e| ZeniiError::Plugin(format!("git clone failed: {e}")))?;

        if !output.status.success() {
            let stderr = String::from_utf8_lossy(&output.stderr);
            let _ = std::fs::remove_dir_all(&temp_path);
            return Err(ZeniiError::Plugin(format!("git clone failed: {stderr}")));
        }

        // Resolve plugin root (subdirectory or repo root)
        let plugin_root = match &subdir {
            Some(path) => {
                let sub = temp_path.join(path);
                if !sub.exists() {
                    let _ = std::fs::remove_dir_all(&temp_path);
                    return Err(ZeniiError::Plugin(format!(
                        "subdirectory '{path}' not found in repository"
                    )));
                }
                sub
            }
            None => temp_path.clone(),
        };

        // Parse manifest
        let manifest = PluginManifest::from_file(&plugin_root.join("zenii-plugin.toml"))?;
        let name = manifest.plugin.name.clone();

        // Check not already installed
        if self.registry.get(&name).is_some() {
            let _ = std::fs::remove_dir_all(&temp_path);
            return Err(ZeniiError::Plugin(format!(
                "plugin '{name}' is already installed"
            )));
        }

        // Get commit hash
        let commit_output = tokio::process::Command::new("git")
            .args(["rev-parse", "HEAD"])
            .current_dir(&temp_path)
            .output()
            .await
            .ok()
            .and_then(|o| String::from_utf8(o.stdout).ok())
            .map(|s| s.trim().to_string());

        // Move to plugins dir
        let dest = plugins_dir.join(&name);
        if dest.exists() {
            std::fs::remove_dir_all(&dest)
                .map_err(|e| ZeniiError::Plugin(format!("remove old dir failed: {e}")))?;
        }
        Self::copy_dir_recursive(&plugin_root, &dest)?;
        let _ = std::fs::remove_dir_all(&temp_path);

        let installed = InstalledPlugin {
            manifest,
            install_path: dest,
            enabled: true,
            installed_at: chrono::Utc::now().to_rfc3339(),
            source: PluginSource::Git {
                url: url.to_string(),
                commit: commit_output,
            },
        };

        // Register plugin, tools, and skills
        self.register_plugin_assets(&installed).await?;
        self.registry.register(installed.clone())?;

        info!("Installed plugin '{}' from git", name);
        Ok(installed)
    }

    /// Install a plugin from a local directory.
    pub async fn install_from_local(&self, path: &Path) -> Result<InstalledPlugin> {
        let plugins_dir = self.registry.plugins_dir();

        // Parse manifest from source
        let manifest = PluginManifest::from_file(&path.join("zenii-plugin.toml"))?;
        let name = manifest.plugin.name.clone();

        // Check not already installed
        if self.registry.get(&name).is_some() {
            return Err(ZeniiError::Plugin(format!(
                "plugin '{name}' is already installed"
            )));
        }

        // Copy to plugins dir
        let dest = plugins_dir.join(&name);
        if dest.exists() {
            std::fs::remove_dir_all(&dest)
                .map_err(|e| ZeniiError::Plugin(format!("remove old dir failed: {e}")))?;
        }
        Self::copy_dir_recursive(path, &dest)?;

        let installed = InstalledPlugin {
            manifest,
            install_path: dest,
            enabled: true,
            installed_at: chrono::Utc::now().to_rfc3339(),
            source: PluginSource::Local {
                path: path.to_path_buf(),
            },
        };

        self.register_plugin_assets(&installed).await?;
        self.registry.register(installed.clone())?;

        info!("Installed plugin '{}' from local path", name);
        Ok(installed)
    }

    /// Install all plugins found in a local directory.
    ///
    /// Scans immediate subdirectories for `zenii-plugin.toml` manifests and
    /// installs each one. If the directory itself contains a manifest, it is
    /// installed as a single plugin instead.
    ///
    /// Returns the list of successfully installed plugins. Errors for
    /// individual plugins are logged but do not abort the batch.
    pub async fn install_all_from_local(&self, path: &Path) -> Result<Vec<InstalledPlugin>> {
        // If the directory itself is a plugin, install it directly
        if path.join("zenii-plugin.toml").exists() {
            let installed = self.install_from_local(path).await?;
            return Ok(vec![installed]);
        }

        // Scan subdirectories for plugins
        let entries = std::fs::read_dir(path)
            .map_err(|e| ZeniiError::Plugin(format!("read dir failed: {e}")))?;

        let mut installed = Vec::new();
        for entry in entries {
            let entry = entry.map_err(|e| ZeniiError::Plugin(format!("dir entry error: {e}")))?;
            let sub = entry.path();
            if sub.is_dir() && sub.join("zenii-plugin.toml").exists() {
                match self.install_from_local(&sub).await {
                    Ok(plugin) => installed.push(plugin),
                    Err(e) => {
                        tracing::warn!("Skipping plugin in '{}': {e}", sub.display());
                    }
                }
            }
        }

        if installed.is_empty() {
            return Err(ZeniiError::Plugin(format!(
                "no plugins found in '{}'",
                path.display()
            )));
        }

        Ok(installed)
    }

    /// Update a plugin to the latest version (git only).
    pub async fn update(&self, name: &str) -> Result<InstalledPlugin> {
        let plugin = self
            .registry
            .get(name)
            .ok_or_else(|| ZeniiError::PluginNotFound(format!("plugin '{name}' not found")))?;

        let url = match &plugin.source {
            PluginSource::Git { url, .. } => url.clone(),
            _ => {
                return Err(ZeniiError::Plugin(format!(
                    "plugin '{name}' was not installed from git, cannot update"
                )));
            }
        };

        // Remove old, install new
        self.remove(name).await?;
        self.install_from_git(&url).await
    }

    /// Remove an installed plugin.
    pub async fn remove(&self, name: &str) -> Result<()> {
        let plugin = self
            .registry
            .get(name)
            .ok_or_else(|| ZeniiError::PluginNotFound(format!("plugin '{name}' not found")))?;

        // Remove plugin directory
        if plugin.install_path.exists() {
            std::fs::remove_dir_all(&plugin.install_path)
                .map_err(|e| ZeniiError::Plugin(format!("remove dir failed: {e}")))?;
        }

        self.registry.unregister(name)?;
        info!("Removed plugin '{}'", name);
        Ok(())
    }

    /// Register plugin tools and skills into their respective registries.
    async fn register_plugin_assets(&self, plugin: &InstalledPlugin) -> Result<()> {
        // Register tools
        for tool_def in &plugin.manifest.tools {
            // PAR: runner-based tools take a different install/registration path.
            if tool_def.runner.is_some() {
                self.register_runner_tool(plugin, tool_def).await?;
                continue;
            }

            let binary = plugin.install_path.join(&tool_def.binary);

            // Fetch real schema from the plugin's info() JSON-RPC method
            let schema = super::fetch_plugin_schema(
                &binary,
                &tool_def.name,
                self.execute_timeout_secs,
                self.max_restart_attempts,
            )
            .await;

            // Create a fresh process for the adapter (the one used for schema fetch is consumed)
            let process = PluginProcess::new(
                &tool_def.name,
                binary,
                self.execute_timeout_secs,
                self.max_restart_attempts,
            );
            let adapter = PluginToolAdapter::new(
                tool_def.name.clone(),
                tool_def.description.clone(),
                schema,
                Arc::new(Mutex::new(process)),
            );
            self.tool_registry
                .register(Arc::new(adapter))
                .unwrap_or_else(|e| {
                    tracing::warn!(
                        "Failed to register tool '{}' from plugin '{}': {e}",
                        tool_def.name,
                        plugin.manifest.plugin.name
                    );
                });
        }

        // Register skills
        for skill_def in &plugin.manifest.skills {
            let skill_path = plugin.install_path.join(&skill_def.file);
            if let Ok(content) = std::fs::read_to_string(&skill_path)
                && let Err(e) = self
                    .skill_registry
                    .register_external(&skill_def.name, content)
                    .await
            {
                tracing::warn!("Failed to register skill '{}': {e}", skill_def.name);
            }
        }

        Ok(())
    }

    /// Install deps + register a single runner-based tool (PAR.3).
    async fn register_runner_tool(
        &self,
        plugin: &InstalledPlugin,
        tool_def: &PluginToolDef,
    ) -> Result<()> {
        let runner = tool_def.runner.as_deref().unwrap_or_default();

        // 1. Ensure the required runtime is present (abort if missing/unsatisfied).
        if let Some(required) = &tool_def.required_runtime {
            let manager = self.runtime_manager.clone().ok_or_else(|| {
                ZeniiError::Plugin(format!(
                    "plugin '{}' tool '{}' requires runtime '{required}' but no runtime manager is configured",
                    plugin.manifest.plugin.name, tool_def.name
                ))
            })?;
            Doctor::new(manager).ensure(required).await?;
        }

        // 2. Prepare dependencies into the isolated env / shared cache.
        let cache_dir = self.resolve_cache_dir(plugin);
        self.dep_installer
            .prepare(
                runner,
                tool_def.package.as_deref(),
                &plugin.install_path,
                &cache_dir,
            )
            .await?;

        // 3. Register a runner-based process (lazy spawn; entry = the manifest `binary`).
        let runner_path = self
            .runtime_manager
            .as_ref()
            .and_then(|m| m.resolve_runner_path(runner_program_name(runner)));
        let process = PluginProcess::new(
            &tool_def.name,
            resolve_runner_entry(runner, &plugin.install_path, &tool_def.binary),
            self.execute_timeout_secs,
            self.max_restart_attempts,
        )
        .with_runner(Some(runner.to_string()), tool_def.package.clone(), runner_path)
        .with_scratch_dir(Some(plugin.install_path.join(".scratch")));

        let adapter = PluginToolAdapter::new(
            tool_def.name.clone(),
            tool_def.description.clone(),
            serde_json::json!({}),
            Arc::new(Mutex::new(process)),
        );
        // PAR.7d: attach the self-heal trigger when configured + the tool has test cases.
        let adapter = match self.build_repair_context(plugin, tool_def) {
            Some(ctx) => adapter.with_repair(ctx),
            None => adapter,
        };
        self.tool_registry
            .register(Arc::new(adapter))
            .unwrap_or_else(|e| {
                tracing::warn!(
                    "Failed to register runner tool '{}' from plugin '{}': {e}",
                    tool_def.name,
                    plugin.manifest.plugin.name
                );
            });
        Ok(())
    }

    /// Recursively copy a directory.
    fn copy_dir_recursive(src: &Path, dst: &Path) -> Result<()> {
        std::fs::create_dir_all(dst)
            .map_err(|e| ZeniiError::Plugin(format!("create dir failed: {e}")))?;

        for entry in std::fs::read_dir(src)
            .map_err(|e| ZeniiError::Plugin(format!("read dir failed: {e}")))?
        {
            let entry = entry.map_err(|e| ZeniiError::Plugin(format!("dir entry error: {e}")))?;
            let path = entry.path();
            let dest = dst.join(entry.file_name());

            if path.is_dir() {
                // Skip .git directory
                if path.file_name().is_some_and(|n| n == ".git") {
                    continue;
                }
                Self::copy_dir_recursive(&path, &dest)?;
            } else {
                std::fs::copy(&path, &dest)
                    .map_err(|e| ZeniiError::Plugin(format!("copy file failed: {e}")))?;
            }
        }

        Ok(())
    }
}

#[cfg(test)]
mod tests {
    use std::path::PathBuf;

    use super::*;
    use tempfile::TempDir;

    fn setup_test_env() -> (
        TempDir,
        TempDir,
        Arc<PluginRegistry>,
        Arc<ToolRegistry>,
        Arc<SkillRegistry>,
    ) {
        let plugins_dir = TempDir::new().unwrap();
        let skills_dir = TempDir::new().unwrap();
        let registry = Arc::new(PluginRegistry::new(plugins_dir.path().to_path_buf()).unwrap());
        let tool_registry = Arc::new(ToolRegistry::new());
        let skill_registry = Arc::new(SkillRegistry::new(skills_dir.path(), 100_000).unwrap());
        (
            plugins_dir,
            skills_dir,
            registry,
            tool_registry,
            skill_registry,
        )
    }

    fn create_local_plugin(dir: &TempDir, name: &str) -> PathBuf {
        let plugin_dir = dir.path().join(format!("source-{name}"));
        std::fs::create_dir_all(&plugin_dir).unwrap();
        let manifest = format!(
            r#"[plugin]
name = "{name}"
version = "1.0.0"
description = "Test plugin {name}"

[[tools]]
name = "{name}-tool"
description = "Test tool"
binary = "{name}-tool"
"#
        );
        std::fs::write(plugin_dir.join("zenii-plugin.toml"), manifest).unwrap();

        // Create a dummy binary
        std::fs::write(plugin_dir.join(format!("{name}-tool")), "#!/bin/bash\n").unwrap();
        #[cfg(unix)]
        {
            use std::os::unix::fs::PermissionsExt;
            std::fs::set_permissions(
                plugin_dir.join(format!("{name}-tool")),
                std::fs::Permissions::from_mode(0o755),
            )
            .unwrap();
        }

        plugin_dir
    }

    // --- PAR.3: runner dependency lifecycle ---

    use std::sync::Mutex as StdMutex;
    use std::sync::atomic::{AtomicUsize, Ordering};

    use crate::runtimes::{RuntimeInstaller, RuntimeProbe};

    struct MockProbe {
        present: bool,
    }
    impl RuntimeProbe for MockProbe {
        fn which(&self, _name: &str) -> Option<PathBuf> {
            self.present.then(|| PathBuf::from("/usr/bin/python"))
        }
        fn version(&self, _path: &Path) -> Option<String> {
            self.present.then(|| "3.11.5".to_string())
        }
    }

    struct NoopRtInstaller;
    #[async_trait::async_trait]
    impl RuntimeInstaller for NoopRtInstaller {
        async fn install(&self, _name: &str, dest: &Path) -> Result<PathBuf> {
            Ok(dest.join("x"))
        }
    }

    fn mock_runtime(present: bool, auto_install: bool, dir: &Path) -> Arc<RuntimeManager> {
        Arc::new(RuntimeManager::new(
            dir.join("rt"),
            dir.join("cache"),
            auto_install,
            Arc::new(MockProbe { present }),
            Arc::new(NoopRtInstaller),
        ))
    }

    #[derive(Default)]
    struct SpyDep {
        calls: AtomicUsize,
        last_pkg: StdMutex<Option<String>>,
    }
    #[async_trait::async_trait]
    impl DependencyInstaller for SpyDep {
        async fn prepare(
            &self,
            _runner: &str,
            package: Option<&str>,
            _plugin_dir: &Path,
            _cache_dir: &Path,
        ) -> Result<()> {
            self.calls.fetch_add(1, Ordering::SeqCst);
            *self.last_pkg.lock().unwrap() = package.map(String::from);
            Ok(())
        }
    }

    fn create_runner_plugin(dir: &TempDir, name: &str, required_runtime: Option<&str>) -> PathBuf {
        let plugin_dir = dir.path().join(format!("source-{name}"));
        std::fs::create_dir_all(&plugin_dir).unwrap();
        let req_line = required_runtime
            .map(|r| format!("required_runtime = \"{r}\"\n"))
            .unwrap_or_default();
        let manifest = format!(
            r#"[plugin]
name = "{name}"
version = "1.0.0"
description = "runner plugin {name}"

[[tools]]
name = "{name}-tool"
description = "runner tool"
binary = "main.py"
runner = "uvx"
package = "git+https://github.com/u/{name}@v1"
{req_line}"#
        );
        std::fs::write(plugin_dir.join("zenii-plugin.toml"), manifest).unwrap();
        plugin_dir
    }

    #[tokio::test]
    async fn install_runner_tool_invokes_doctor_for_required_runtime() {
        let (plugins_dir, _s, registry, tools, skills) = setup_test_env();
        let src = TempDir::new().unwrap();
        let path = create_runner_plugin(&src, "rt-present", Some("python>=3.11"));
        let dep = Arc::new(SpyDep::default());
        let installer = PluginInstaller::new(registry, tools, skills, 60, 3)
            .with_runtime(mock_runtime(true, false, plugins_dir.path()), dep.clone());
        let res = installer.install_from_local(&path).await;
        assert!(res.is_ok(), "present runtime should install: {res:?}");
        assert_eq!(dep.calls.load(Ordering::SeqCst), 1);
    }

    #[tokio::test]
    async fn install_aborts_when_required_runtime_missing_and_autoinstall_off() {
        let (plugins_dir, _s, registry, tools, skills) = setup_test_env();
        let src = TempDir::new().unwrap();
        let path = create_runner_plugin(&src, "rt-missing", Some("python>=3.11"));
        let dep = Arc::new(SpyDep::default());
        let installer = PluginInstaller::new(registry, tools, skills, 60, 3)
            .with_runtime(mock_runtime(false, false, plugins_dir.path()), dep.clone());
        let res = installer.install_from_local(&path).await;
        assert!(res.is_err(), "missing runtime + auto-install off must abort");
        assert_eq!(
            dep.calls.load(Ordering::SeqCst),
            0,
            "deps must not be prepared when runtime missing"
        );
    }

    #[tokio::test]
    async fn install_primes_dependency_cache_for_runner() {
        let (plugins_dir, _s, registry, tools, skills) = setup_test_env();
        let src = TempDir::new().unwrap();
        let path = create_runner_plugin(&src, "rt-prime", None);
        let dep = Arc::new(SpyDep::default());
        let installer = PluginInstaller::new(registry, tools, skills, 60, 3)
            .with_runtime(mock_runtime(true, false, plugins_dir.path()), dep.clone());
        installer.install_from_local(&path).await.unwrap();
        assert_eq!(dep.calls.load(Ordering::SeqCst), 1);
        assert_eq!(
            dep.last_pkg.lock().unwrap().as_deref(),
            Some("git+https://github.com/u/rt-prime@v1")
        );
    }

    #[tokio::test]
    async fn install_direct_binary_path_unchanged() {
        let (plugins_dir, _s, registry, tools, skills) = setup_test_env();
        let src = TempDir::new().unwrap();
        let path = create_local_plugin(&src, "direct");
        let dep = Arc::new(SpyDep::default());
        let installer = PluginInstaller::new(registry.clone(), tools, skills, 60, 3)
            .with_runtime(mock_runtime(true, false, plugins_dir.path()), dep.clone());
        installer.install_from_local(&path).await.unwrap();
        assert_eq!(
            dep.calls.load(Ordering::SeqCst),
            0,
            "direct-binary plugins must not invoke dep installer"
        );
        assert!(registry.get("direct").is_some());
    }

    #[tokio::test]
    async fn refresh_invokes_dependency_resolver() {
        let (plugins_dir, _s, registry, tools, skills) = setup_test_env();
        let src = TempDir::new().unwrap();
        let path = create_runner_plugin(&src, "rt-refresh", None);
        let dep = Arc::new(SpyDep::default());
        let installer = PluginInstaller::new(registry, tools, skills, 60, 3)
            .with_runtime(mock_runtime(true, false, plugins_dir.path()), dep.clone());
        installer.install_from_local(&path).await.unwrap();
        let before = dep.calls.load(Ordering::SeqCst);
        installer.refresh("rt-refresh").await.unwrap();
        assert!(dep.calls.load(Ordering::SeqCst) > before);
    }

    #[tokio::test]
    async fn prune_removes_unreferenced_cache_entries() {
        let (plugins_dir, _s, registry, tools, skills) = setup_test_env();
        let cache = plugins_dir.path().join("cache");
        std::fs::create_dir_all(cache.join("stray-entry")).unwrap();
        let installer = PluginInstaller::new(registry, tools, skills, 60, 3);
        let removed = installer.prune(&cache).unwrap();
        assert_eq!(removed, 1);
        assert!(!cache.join("stray-entry").exists());
    }

    // PAR.6 — a runner-based external agent lands in ToolRegistry, the single propagation
    // point every consumer (main agent, delegation sub-agents, workflows, CLI, TUI, gateway
    // `GET /tools`) reads. Resolvable by name + listed ⇒ usable everywhere.
    #[tokio::test]
    async fn runner_tool_registered_and_resolvable() {
        let (plugins_dir, _s, registry, tools, skills) = setup_test_env();
        let src = TempDir::new().unwrap();
        let path = create_runner_plugin(&src, "rt-visible", None);
        let dep = Arc::new(SpyDep::default());
        let installer = PluginInstaller::new(registry, tools.clone(), skills, 60, 3)
            .with_runtime(mock_runtime(true, false, plugins_dir.path()), dep);
        installer.install_from_local(&path).await.unwrap();

        assert!(
            tools.get("rt-visible-tool").is_some(),
            "runner tool resolvable by name (delegation/workflow lookup)"
        );
        assert!(
            tools.list().iter().any(|t| t.name == "rt-visible-tool"),
            "runner tool listed (GET /tools discovery)"
        );
    }

    // --- PAR.7d: self-heal injection at registration ---

    use crate::memory::in_memory_store::InMemoryStore;
    use crate::plugins::heal::{Candidate, FailureTrace, Patch};
    use crate::plugins::manifest::{PluginPermissions, PluginToolTest};
    use std::sync::atomic::AtomicBool;

    struct NoReflector;
    #[async_trait::async_trait]
    impl Reflector for NoReflector {
        async fn reflect(&self, _t: &FailureTrace, _p: &[Candidate]) -> Result<Patch> {
            Ok(Patch::Retry)
        }
    }

    fn installed_plugin(install_path: PathBuf) -> InstalledPlugin {
        let manifest = PluginManifest::parse(
            "[plugin]\nname = \"p\"\nversion = \"1.0.0\"\ndescription = \"d\"\n",
        )
        .unwrap();
        InstalledPlugin {
            manifest,
            install_path,
            enabled: true,
            installed_at: "now".into(),
            source: PluginSource::Bundled,
        }
    }

    fn runner_tool(tests: Vec<PluginToolTest>) -> PluginToolDef {
        PluginToolDef {
            name: "a".into(),
            description: "d".into(),
            binary: "main.py".into(),
            permissions: PluginPermissions::default(),
            runner: Some("uv-run".into()),
            package: None,
            required_runtime: None,
            tests,
        }
    }

    fn installer_with_self_heal(enabled: bool) -> (TempDir, PluginInstaller) {
        let (plugins_dir, _s, registry, tools, skills) = setup_test_env();
        let pool = crate::db::init_pool(&plugins_dir.path().join("t.db")).unwrap();
        let skill = Arc::new(SkillProposalTool::new(pool, Arc::new(AtomicBool::new(true))));
        let memory: Arc<dyn Memory> = Arc::new(InMemoryStore::new());
        let rt = mock_runtime(true, false, plugins_dir.path());
        let installer = PluginInstaller::new(registry, tools, skills, 60, 0)
            .with_runtime(rt, Arc::new(DefaultDependencyInstaller))
            .with_self_heal(Arc::new(NoReflector), memory, skill, enabled, 3, 120);
        (plugins_dir, installer)
    }

    fn one_test_case() -> Vec<PluginToolTest> {
        vec![PluginToolTest {
            input: toml::from_str("x = 1").unwrap(),
            expect: None,
        }]
    }

    #[test]
    fn repair_context_built_when_configured_and_tests_present() {
        let (_dir, installer) = installer_with_self_heal(true);
        let pdir = TempDir::new().unwrap();
        let plugin = installed_plugin(pdir.path().to_path_buf());
        assert!(
            installer
                .build_repair_context(&plugin, &runner_tool(one_test_case()))
                .is_some()
        );
    }

    #[test]
    fn repair_context_none_without_tests() {
        let (_dir, installer) = installer_with_self_heal(true);
        let pdir = TempDir::new().unwrap();
        let plugin = installed_plugin(pdir.path().to_path_buf());
        assert!(
            installer
                .build_repair_context(&plugin, &runner_tool(vec![]))
                .is_none()
        );
    }

    #[test]
    fn repair_context_none_when_auto_repair_disabled() {
        let (_dir, installer) = installer_with_self_heal(false);
        let pdir = TempDir::new().unwrap();
        let plugin = installed_plugin(pdir.path().to_path_buf());
        assert!(
            installer
                .build_repair_context(&plugin, &runner_tool(one_test_case()))
                .is_none()
        );
    }

    // PAR.7d follow-up — runner entry resolution.
    #[test]
    fn runner_entry_file_based_resolves_against_install_dir() {
        let base = Path::new("/data/plugins/x");
        assert_eq!(
            resolve_runner_entry("uv-run", base, "main.py"),
            PathBuf::from("/data/plugins/x/main.py")
        );
        assert_eq!(
            resolve_runner_entry("node", base, "server.js"),
            PathBuf::from("/data/plugins/x/server.js")
        );
    }

    #[test]
    fn runner_entry_package_runner_stays_bare() {
        let base = Path::new("/data/plugins/x");
        assert_eq!(resolve_runner_entry("uvx", base, "tool-cmd"), PathBuf::from("tool-cmd"));
        assert_eq!(resolve_runner_entry("npx", base, "cli"), PathBuf::from("cli"));
        assert_eq!(resolve_runner_entry("bunx", base, "cli"), PathBuf::from("cli"));
    }

    // 9.0.17 — Install from local path
    #[tokio::test]
    async fn install_from_local_path() {
        let (plugins_dir, _skills_dir, registry, tool_registry, skill_registry) = setup_test_env();
        let source_dir = TempDir::new().unwrap();
        let plugin_path = create_local_plugin(&source_dir, "local-test");

        let installer = PluginInstaller::new(
            registry.clone(),
            tool_registry.clone(),
            skill_registry,
            60,
            3,
        );

        let installed = installer.install_from_local(&plugin_path).await.unwrap();
        assert_eq!(installed.manifest.plugin.name, "local-test");
        assert!(installed.enabled);

        // Verify it's in the registry
        assert!(registry.get("local-test").is_some());

        // Verify files were copied
        assert!(
            plugins_dir
                .path()
                .join("local-test/zenii-plugin.toml")
                .exists()
        );
    }

    // 9.0.18 — Install validates manifest
    #[tokio::test]
    async fn install_validates_manifest() {
        let (_plugins_dir, _skills_dir, registry, tool_registry, skill_registry) = setup_test_env();
        let source_dir = TempDir::new().unwrap();

        // Create a plugin with an invalid manifest (missing name)
        let bad_dir = source_dir.path().join("bad-plugin");
        std::fs::create_dir_all(&bad_dir).unwrap();
        std::fs::write(
            bad_dir.join("zenii-plugin.toml"),
            r#"[plugin]
name = ""
version = "1.0.0"
description = "Bad"
"#,
        )
        .unwrap();

        let installer = PluginInstaller::new(registry, tool_registry, skill_registry, 60, 3);

        let result = installer.install_from_local(&bad_dir).await;
        assert!(result.is_err());
        assert!(result.unwrap_err().to_string().contains("name is required"));
    }

    // 9.0.19 — Remove cleans up files
    #[tokio::test]
    async fn remove_cleans_up_files() {
        let (plugins_dir, _skills_dir, registry, tool_registry, skill_registry) = setup_test_env();
        let source_dir = TempDir::new().unwrap();
        let plugin_path = create_local_plugin(&source_dir, "removable");

        let installer =
            PluginInstaller::new(registry.clone(), tool_registry, skill_registry, 60, 3);

        installer.install_from_local(&plugin_path).await.unwrap();
        assert!(plugins_dir.path().join("removable").exists());

        installer.remove("removable").await.unwrap();
        assert!(!plugins_dir.path().join("removable").exists());
        assert!(registry.get("removable").is_none());
    }

    #[tokio::test]
    async fn install_rejects_duplicate() {
        let (_plugins_dir, _skills_dir, registry, tool_registry, skill_registry) = setup_test_env();
        let source_dir = TempDir::new().unwrap();
        let plugin_path = create_local_plugin(&source_dir, "dupe-install");

        let installer = PluginInstaller::new(registry, tool_registry, skill_registry, 60, 3);

        installer.install_from_local(&plugin_path).await.unwrap();
        let result = installer.install_from_local(&plugin_path).await;
        assert!(result.is_err());
        assert!(
            result
                .unwrap_err()
                .to_string()
                .contains("already installed")
        );
    }

    // --- Phase 9.1: Real plugin installer tests ---

    use crate::plugins::test_helpers::real_plugins_path;

    // 9.1.13 — Install real word-count plugin
    #[tokio::test]
    async fn install_real_word_count() {
        let Some(plugins) = real_plugins_path() else {
            eprintln!("SKIP: real plugins path not available");
            return;
        };
        let (plugins_dir, _skills_dir, registry, tool_registry, skill_registry) = setup_test_env();
        let installer = PluginInstaller::new(
            registry.clone(),
            tool_registry.clone(),
            skill_registry,
            60,
            3,
        );

        let installed = installer
            .install_from_local(&plugins.join("word-count"))
            .await
            .unwrap();
        assert_eq!(installed.manifest.plugin.name, "word-count");
        assert!(installed.enabled);

        // Verify manifest copied
        assert!(
            plugins_dir
                .path()
                .join("word-count/zenii-plugin.toml")
                .exists()
        );
        // Verify binary copied
        assert!(plugins_dir.path().join("word-count/word-count.py").exists());
        // Verify skill file copied
        assert!(
            plugins_dir
                .path()
                .join("word-count/skills/writing-tips.md")
                .exists()
        );
        // Verify registry has entry
        assert!(registry.get("word-count").is_some());
        // Verify tool_registry has the tool
        assert!(tool_registry.get("word-count").is_some());
    }

    // 9.1.14 — Install real json-formatter plugin
    #[tokio::test]
    async fn install_real_json_formatter() {
        let Some(plugins) = real_plugins_path() else {
            eprintln!("SKIP: real plugins path not available");
            return;
        };
        let (plugins_dir, _skills_dir, registry, tool_registry, skill_registry) = setup_test_env();
        let installer = PluginInstaller::new(
            registry.clone(),
            tool_registry.clone(),
            skill_registry,
            60,
            3,
        );

        let installed = installer
            .install_from_local(&plugins.join("json-formatter"))
            .await
            .unwrap();
        assert_eq!(installed.manifest.plugin.name, "json-formatter");
        assert!(
            plugins_dir
                .path()
                .join("json-formatter/json-formatter.js")
                .exists()
        );
        assert!(registry.get("json-formatter").is_some());
        assert!(tool_registry.get("json-formatter").is_some());
    }

    // 9.1.15 — Install all real plugins at once
    #[tokio::test]
    async fn install_all_real_plugins() {
        let Some(plugins) = real_plugins_path() else {
            eprintln!("SKIP: real plugins path not available");
            return;
        };
        let (_plugins_dir, _skills_dir, registry, tool_registry, skill_registry) = setup_test_env();
        let installer =
            PluginInstaller::new(registry.clone(), tool_registry, skill_registry, 60, 3);

        let installed = installer.install_all_from_local(&plugins).await.unwrap();
        assert_eq!(installed.len(), 10);

        // Verify registry has all 10
        let all = registry.list();
        assert_eq!(all.len(), 10);

        // Verify each has correct name
        let names: std::collections::HashSet<String> =
            all.iter().map(|p| p.manifest.plugin.name.clone()).collect();
        assert!(names.contains("word-count"));
        assert!(names.contains("json-formatter"));
        assert!(names.contains("uuid-gen"));
        assert!(names.contains("timestamp"));
        assert!(names.contains("http-client"));
        assert!(names.contains("hash-tool"));
        assert!(names.contains("base64-tool"));
        assert!(names.contains("regex-tester"));
        assert!(names.contains("csv-analyzer"));
        assert!(names.contains("color-converter"));
    }

    // 9.1.16 — Install preserves permissions metadata
    #[tokio::test]
    async fn install_real_plugin_preserves_permissions() {
        let Some(plugins) = real_plugins_path() else {
            eprintln!("SKIP: real plugins path not available");
            return;
        };
        let (_plugins_dir, _skills_dir, registry, tool_registry, skill_registry) = setup_test_env();
        let installer = PluginInstaller::new(registry, tool_registry, skill_registry, 60, 3);

        let installed = installer
            .install_from_local(&plugins.join("csv-analyzer"))
            .await
            .unwrap();
        assert_eq!(
            installed.manifest.tools[0].permissions.filesystem,
            vec!["*"]
        );
    }

    // 9.1.17 — Install preserves config metadata
    #[tokio::test]
    async fn install_real_plugin_preserves_config() {
        let Some(plugins) = real_plugins_path() else {
            eprintln!("SKIP: real plugins path not available");
            return;
        };
        let (_plugins_dir, _skills_dir, registry, tool_registry, skill_registry) = setup_test_env();
        let installer = PluginInstaller::new(registry, tool_registry, skill_registry, 60, 3);

        let installed = installer
            .install_from_local(&plugins.join("regex-tester"))
            .await
            .unwrap();
        let cfg = installed
            .manifest
            .config
            .get("default_timeout_ms")
            .expect("config field missing");
        assert_eq!(cfg.field_type, "int");
        assert_eq!(cfg.default, Some(toml::Value::Integer(5000)));
    }
}
