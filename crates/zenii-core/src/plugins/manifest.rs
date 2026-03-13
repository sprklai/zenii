use std::collections::HashMap;
use std::path::Path;

use serde::{Deserialize, Serialize};

use crate::{Result, ZeniiError};

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PluginManifest {
    pub plugin: PluginMeta,
    #[serde(default)]
    pub tools: Vec<PluginToolDef>,
    #[serde(default)]
    pub skills: Vec<PluginSkillDef>,
    #[serde(default)]
    pub config: HashMap<String, PluginConfigField>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PluginMeta {
    pub name: String,
    pub version: String,
    pub description: String,
    pub author: Option<String>,
    pub license: Option<String>,
    pub homepage: Option<String>,
    pub min_zenii: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PluginToolDef {
    pub name: String,
    pub description: String,
    pub binary: String,
    #[serde(default)]
    pub permissions: PluginPermissions,
}

#[derive(Debug, Clone, Serialize, Deserialize, Default)]
pub struct PluginPermissions {
    #[serde(default)]
    pub network: Vec<String>,
    #[serde(default)]
    pub filesystem: Vec<String>,
    #[serde(default)]
    pub shell: bool,
    #[serde(default)]
    pub credentials: Vec<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PluginSkillDef {
    pub name: String,
    pub file: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PluginConfigField {
    #[serde(rename = "type")]
    pub field_type: String,
    pub default: Option<toml::Value>,
    pub description: Option<String>,
    #[serde(default)]
    pub secret: bool,
}

impl PluginManifest {
    /// Parse a manifest from a TOML string.
    pub fn parse(content: &str) -> Result<Self> {
        let manifest: Self = toml::from_str(content)
            .map_err(|e| ZeniiError::Plugin(format!("invalid manifest: {e}")))?;
        manifest.validate()?;
        Ok(manifest)
    }

    /// Parse a manifest from a file path.
    pub fn from_file(path: &Path) -> Result<Self> {
        let content = std::fs::read_to_string(path)
            .map_err(|e| ZeniiError::Plugin(format!("cannot read manifest: {e}")))?;
        Self::parse(&content)
    }

    /// Validate required fields and constraints.
    fn validate(&self) -> Result<()> {
        if self.plugin.name.is_empty() {
            return Err(ZeniiError::Plugin("plugin name is required".into()));
        }
        if self.plugin.version.is_empty() {
            return Err(ZeniiError::Plugin("plugin version is required".into()));
        }
        // Validate name: alphanumeric, hyphens, underscores only
        if !self
            .plugin
            .name
            .chars()
            .all(|c| c.is_alphanumeric() || c == '-' || c == '_')
        {
            return Err(ZeniiError::Plugin(
                "plugin name must be alphanumeric with hyphens/underscores only".into(),
            ));
        }
        // Validate tool binary paths are relative
        for tool in &self.tools {
            if Path::new(&tool.binary).is_absolute() {
                return Err(ZeniiError::Plugin(format!(
                    "tool '{}' binary path must be relative",
                    tool.name
                )));
            }
        }
        // Validate skill file paths are relative
        for skill in &self.skills {
            if Path::new(&skill.file).is_absolute() {
                return Err(ZeniiError::Plugin(format!(
                    "skill '{}' file path must be relative",
                    skill.name
                )));
            }
        }
        Ok(())
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    // 9.0.1 — Parse valid manifest
    #[test]
    fn parse_valid_manifest() {
        let toml = r#"
[plugin]
name = "weather"
version = "1.0.0"
description = "Weather information tool"
author = "Test Author"

[[tools]]
name = "weather"
description = "Get current weather"
binary = "weather-tool"

[tools.permissions]
network = ["api.open-meteo.com"]

[[skills]]
name = "weather-briefing"
file = "skills/weather-briefing.md"

[config.default_latitude]
type = "float"
default = 37.7749
description = "Default latitude"
"#;
        let manifest = PluginManifest::parse(toml).unwrap();
        assert_eq!(manifest.plugin.name, "weather");
        assert_eq!(manifest.plugin.version, "1.0.0");
        assert_eq!(manifest.tools.len(), 1);
        assert_eq!(
            manifest.tools[0].permissions.network,
            vec!["api.open-meteo.com"]
        );
        assert_eq!(manifest.skills.len(), 1);
        assert_eq!(manifest.config.len(), 1);
    }

    // 9.0.2 — Reject manifest missing name
    #[test]
    fn reject_manifest_missing_name() {
        let toml = r#"
[plugin]
name = ""
version = "1.0.0"
description = "Test"
"#;
        let result = PluginManifest::parse(toml);
        assert!(result.is_err());
        assert!(result.unwrap_err().to_string().contains("name is required"));
    }

    // 9.0.3 — Reject manifest missing version
    #[test]
    fn reject_manifest_missing_version() {
        let toml = r#"
[plugin]
name = "test"
version = ""
description = "Test"
"#;
        let result = PluginManifest::parse(toml);
        assert!(result.is_err());
        assert!(
            result
                .unwrap_err()
                .to_string()
                .contains("version is required")
        );
    }

    // 9.0.4 — Parse manifest with permissions
    #[test]
    fn parse_manifest_with_permissions() {
        let toml = r#"
[plugin]
name = "docker"
version = "0.1.0"
description = "Docker management"

[[tools]]
name = "docker"
description = "Manage Docker containers"
binary = "docker-tool"

[tools.permissions]
network = ["localhost:2375"]
filesystem = ["/var/run/docker.sock"]
shell = true
credentials = ["docker_token"]
"#;
        let manifest = PluginManifest::parse(toml).unwrap();
        let perms = &manifest.tools[0].permissions;
        assert!(perms.shell);
        assert_eq!(perms.filesystem, vec!["/var/run/docker.sock"]);
        assert_eq!(perms.credentials, vec!["docker_token"]);
    }

    // 9.0.5 — Parse manifest with config fields
    #[test]
    fn parse_manifest_with_config_fields() {
        let toml = r#"
[plugin]
name = "rss"
version = "1.0.0"
description = "RSS reader"

[config.max_feeds]
type = "int"
default = 50
description = "Maximum feeds to track"

[config.api_key]
type = "string"
description = "API key for premium feeds"
secret = true
"#;
        let manifest = PluginManifest::parse(toml).unwrap();
        assert_eq!(manifest.config.len(), 2);
        let max_feeds = manifest.config.get("max_feeds").unwrap();
        assert_eq!(max_feeds.field_type, "int");
        assert!(manifest.config.get("api_key").unwrap().secret);
    }

    #[test]
    fn reject_invalid_plugin_name() {
        let toml = r#"
[plugin]
name = "bad name!"
version = "1.0.0"
description = "Test"
"#;
        let result = PluginManifest::parse(toml);
        assert!(result.is_err());
        assert!(result.unwrap_err().to_string().contains("alphanumeric"));
    }

    #[test]
    fn reject_absolute_binary_path() {
        let toml = r#"
[plugin]
name = "test"
version = "1.0.0"
description = "Test"

[[tools]]
name = "test-tool"
description = "Test"
binary = "/usr/bin/test"
"#;
        let result = PluginManifest::parse(toml);
        assert!(result.is_err());
        assert!(result.unwrap_err().to_string().contains("relative"));
    }
}
