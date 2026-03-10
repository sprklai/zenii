use std::path::Path;
use std::sync::Arc;

use tokio::sync::Mutex;
use tracing::info;

use super::adapter::PluginToolAdapter;
use super::manifest::PluginManifest;
use super::process::PluginProcess;
use super::registry::{InstalledPlugin, PluginRegistry, PluginSource};
use crate::skills::SkillRegistry;
use crate::tools::ToolRegistry;
use crate::{MesoError, Result};

/// Handles plugin install/update/remove operations.
pub struct PluginInstaller {
    registry: Arc<PluginRegistry>,
    tool_registry: Arc<ToolRegistry>,
    skill_registry: Arc<SkillRegistry>,
    execute_timeout_secs: u64,
    max_restart_attempts: u32,
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
        }
    }

    /// Install a plugin from a git URL.
    pub async fn install_from_git(&self, url: &str) -> Result<InstalledPlugin> {
        let plugins_dir = self.registry.plugins_dir();

        // Clone to temp dir first
        let temp_path = std::env::temp_dir().join(format!(
            "mesoclaw-plugin-install-{}-{}",
            std::process::id(),
            std::time::SystemTime::now()
                .duration_since(std::time::UNIX_EPOCH)
                .unwrap_or_default()
                .as_nanos()
        ));
        std::fs::create_dir_all(&temp_path)
            .map_err(|e| MesoError::Plugin(format!("temp dir failed: {e}")))?;

        let status = tokio::process::Command::new("git")
            .args([
                "clone",
                "--depth",
                "1",
                url,
                temp_path.to_str().unwrap_or("."),
            ])
            .status()
            .await
            .map_err(|e| MesoError::Plugin(format!("git clone failed: {e}")))?;

        if !status.success() {
            let _ = std::fs::remove_dir_all(&temp_path);
            return Err(MesoError::Plugin(format!(
                "git clone failed with status {status}"
            )));
        }

        // Parse manifest
        let manifest = PluginManifest::from_file(&temp_path.join("mesoclaw-plugin.toml"))?;
        let name = manifest.plugin.name.clone();

        // Check not already installed
        if self.registry.get(&name).is_some() {
            let _ = std::fs::remove_dir_all(&temp_path);
            return Err(MesoError::Plugin(format!(
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
                .map_err(|e| MesoError::Plugin(format!("remove old dir failed: {e}")))?;
        }
        Self::copy_dir_recursive(&temp_path, &dest)?;
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
        self.register_plugin_assets(&installed)?;
        self.registry.register(installed.clone())?;

        info!("Installed plugin '{}' from git", name);
        Ok(installed)
    }

    /// Install a plugin from a local directory.
    pub async fn install_from_local(&self, path: &Path) -> Result<InstalledPlugin> {
        let plugins_dir = self.registry.plugins_dir();

        // Parse manifest from source
        let manifest = PluginManifest::from_file(&path.join("mesoclaw-plugin.toml"))?;
        let name = manifest.plugin.name.clone();

        // Check not already installed
        if self.registry.get(&name).is_some() {
            return Err(MesoError::Plugin(format!(
                "plugin '{name}' is already installed"
            )));
        }

        // Copy to plugins dir
        let dest = plugins_dir.join(&name);
        if dest.exists() {
            std::fs::remove_dir_all(&dest)
                .map_err(|e| MesoError::Plugin(format!("remove old dir failed: {e}")))?;
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

        self.register_plugin_assets(&installed)?;
        self.registry.register(installed.clone())?;

        info!("Installed plugin '{}' from local path", name);
        Ok(installed)
    }

    /// Update a plugin to the latest version (git only).
    pub async fn update(&self, name: &str) -> Result<InstalledPlugin> {
        let plugin = self
            .registry
            .get(name)
            .ok_or_else(|| MesoError::PluginNotFound(format!("plugin '{name}' not found")))?;

        let url = match &plugin.source {
            PluginSource::Git { url, .. } => url.clone(),
            _ => {
                return Err(MesoError::Plugin(format!(
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
            .ok_or_else(|| MesoError::PluginNotFound(format!("plugin '{name}' not found")))?;

        // Remove plugin directory
        if plugin.install_path.exists() {
            std::fs::remove_dir_all(&plugin.install_path)
                .map_err(|e| MesoError::Plugin(format!("remove dir failed: {e}")))?;
        }

        self.registry.unregister(name)?;
        info!("Removed plugin '{}'", name);
        Ok(())
    }

    /// Register plugin tools and skills into their respective registries.
    fn register_plugin_assets(&self, plugin: &InstalledPlugin) -> Result<()> {
        // Register tools
        for tool_def in &plugin.manifest.tools {
            let binary = plugin.install_path.join(&tool_def.binary);
            let process = PluginProcess::new(
                &tool_def.name,
                binary,
                self.execute_timeout_secs,
                self.max_restart_attempts,
            );
            let adapter = PluginToolAdapter::new(
                tool_def.name.clone(),
                tool_def.description.clone(),
                serde_json::json!({}),
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
            if let Ok(content) = std::fs::read_to_string(&skill_path) {
                let rt = tokio::runtime::Handle::try_current();
                if let Ok(handle) = rt {
                    let sr = self.skill_registry.clone();
                    let name = skill_def.name.clone();
                    handle.spawn(async move {
                        if let Err(e) = sr.register_external(&name, content).await {
                            tracing::warn!("Failed to register skill '{name}': {e}");
                        }
                    });
                }
            }
        }

        Ok(())
    }

    /// Recursively copy a directory.
    fn copy_dir_recursive(src: &Path, dst: &Path) -> Result<()> {
        std::fs::create_dir_all(dst)
            .map_err(|e| MesoError::Plugin(format!("create dir failed: {e}")))?;

        for entry in std::fs::read_dir(src)
            .map_err(|e| MesoError::Plugin(format!("read dir failed: {e}")))?
        {
            let entry = entry.map_err(|e| MesoError::Plugin(format!("dir entry error: {e}")))?;
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
                    .map_err(|e| MesoError::Plugin(format!("copy file failed: {e}")))?;
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
        std::fs::write(plugin_dir.join("mesoclaw-plugin.toml"), manifest).unwrap();

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
                .join("local-test/mesoclaw-plugin.toml")
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
            bad_dir.join("mesoclaw-plugin.toml"),
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
}
