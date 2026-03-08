use async_trait::async_trait;

use crate::{MesoError, Result};

use super::traits::{Tool, ToolResult};

pub struct SystemInfoTool;

impl SystemInfoTool {
    pub fn new() -> Self {
        Self
    }
}

impl Default for SystemInfoTool {
    fn default() -> Self {
        Self::new()
    }
}

#[async_trait]
impl Tool for SystemInfoTool {
    fn name(&self) -> &str {
        "system_info"
    }

    fn description(&self) -> &str {
        "Get system information. Date/time, OS, hostname, and architecture are already in your context — only use this for cpu_count, memory, or env queries."
    }

    fn parameters_schema(&self) -> serde_json::Value {
        serde_json::json!({
            "type": "object",
            "properties": {
                "action": {
                    "type": "string",
                    "enum": ["os", "cpu_count", "hostname", "memory", "time", "env"],
                    "description": "What system info to retrieve"
                },
                "key": {
                    "type": "string",
                    "description": "Environment variable name (for 'env' action)"
                }
            },
            "required": ["action"]
        })
    }

    async fn execute(&self, args: serde_json::Value) -> Result<ToolResult> {
        let action = args
            .get("action")
            .and_then(|v| v.as_str())
            .ok_or_else(|| MesoError::Tool("missing 'action' argument".into()))?;

        match action {
            "os" => Ok(ToolResult::ok(format!(
                "{} {}",
                sysinfo::System::name().unwrap_or_default(),
                sysinfo::System::os_version().unwrap_or_default()
            ))),
            "cpu_count" => {
                let sys = sysinfo::System::new_with_specifics(
                    sysinfo::RefreshKind::nothing().with_cpu(sysinfo::CpuRefreshKind::nothing()),
                );
                Ok(ToolResult::ok(sys.cpus().len().to_string()))
            }
            "hostname" => Ok(ToolResult::ok(
                sysinfo::System::host_name().unwrap_or_default(),
            )),
            "memory" => {
                let sys = sysinfo::System::new_with_specifics(
                    sysinfo::RefreshKind::nothing()
                        .with_memory(sysinfo::MemoryRefreshKind::everything()),
                );
                Ok(ToolResult::ok(
                    serde_json::json!({
                        "total_bytes": sys.total_memory(),
                        "used_bytes": sys.used_memory(),
                        "available_bytes": sys.available_memory()
                    })
                    .to_string(),
                ))
            }
            "time" => Ok(ToolResult::ok(chrono::Utc::now().to_rfc3339())),
            "env" => {
                let env_var = args.get("key").and_then(|v| v.as_str()).unwrap_or("PATH");
                Ok(ToolResult::ok(std::env::var(env_var).unwrap_or_default()))
            }
            unknown => Ok(ToolResult::err(format!("Unknown action: {unknown}"))),
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[tokio::test]
    async fn os_returns_known_os() {
        let tool = SystemInfoTool::new();
        let result = tool
            .execute(serde_json::json!({"action": "os"}))
            .await
            .unwrap();
        assert!(result.success);
        assert!(!result.output.is_empty());
    }

    #[tokio::test]
    async fn cpu_count_is_positive() {
        let tool = SystemInfoTool::new();
        let result = tool
            .execute(serde_json::json!({"action": "cpu_count"}))
            .await
            .unwrap();
        assert!(result.success);
        let count: usize = result.output.parse().unwrap();
        assert!(count > 0);
    }

    #[tokio::test]
    async fn hostname_returns_non_empty() {
        let tool = SystemInfoTool::new();
        let result = tool
            .execute(serde_json::json!({"action": "hostname"}))
            .await
            .unwrap();
        assert!(result.success);
        assert!(!result.output.is_empty());
    }

    #[tokio::test]
    async fn memory_returns_valid_values() {
        let tool = SystemInfoTool::new();
        let result = tool
            .execute(serde_json::json!({"action": "memory"}))
            .await
            .unwrap();
        assert!(result.success);
        let parsed: serde_json::Value = serde_json::from_str(&result.output).unwrap();
        assert!(parsed["total_bytes"].as_u64().unwrap() > 0);
    }

    #[tokio::test]
    async fn missing_action_errors() {
        let tool = SystemInfoTool::new();
        let result = tool.execute(serde_json::json!({})).await;
        assert!(result.is_err());
    }

    #[tokio::test]
    async fn unknown_action_errors() {
        let tool = SystemInfoTool::new();
        let result = tool
            .execute(serde_json::json!({"action": "foobar"}))
            .await
            .unwrap();
        assert!(!result.success);
    }
}
