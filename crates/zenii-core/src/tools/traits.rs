use async_trait::async_trait;
use serde::{Deserialize, Serialize};

use crate::Result;
use crate::security::RiskLevel;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ToolResult {
    pub output: String,
    pub success: bool,
    pub metadata: Option<serde_json::Value>,
}

impl ToolResult {
    pub fn ok(output: impl Into<String>) -> Self {
        Self {
            output: output.into(),
            success: true,
            metadata: None,
        }
    }

    pub fn err(output: impl Into<String>) -> Self {
        Self {
            output: output.into(),
            success: false,
            metadata: None,
        }
    }
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ToolInfo {
    pub name: String,
    pub description: String,
    pub parameters: serde_json::Value,
    pub risk_level: RiskLevel,
}

#[async_trait]
pub trait Tool: Send + Sync {
    fn name(&self) -> &str;
    fn description(&self) -> &str;
    fn parameters_schema(&self) -> serde_json::Value;
    async fn execute(&self, args: serde_json::Value) -> Result<ToolResult>;

    /// Risk classification for this tool. Default: Low (safe for all surfaces).
    fn risk_level(&self) -> RiskLevel {
        RiskLevel::Low
    }

    /// Check if this tool call needs user approval before execution.
    /// Returns `Some(reason)` if approval is needed, `None` if the tool can proceed.
    /// Default: no approval needed.
    fn needs_approval(&self, _args: &serde_json::Value) -> Option<String> {
        None
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn tool_result_ok_is_success() {
        let r = ToolResult::ok("output");
        assert!(r.success);
        assert_eq!(r.output, "output");
    }

    #[test]
    fn tool_result_err_is_not_success() {
        let r = ToolResult::err("error");
        assert!(!r.success);
        assert_eq!(r.output, "error");
    }

    // TA.8 — Default needs_approval returns None
    #[test]
    fn default_needs_approval_returns_none() {
        use async_trait::async_trait;

        struct DummyTool;

        #[async_trait]
        impl Tool for DummyTool {
            fn name(&self) -> &str {
                "dummy"
            }
            fn description(&self) -> &str {
                "A dummy tool"
            }
            fn parameters_schema(&self) -> serde_json::Value {
                serde_json::json!({})
            }
            async fn execute(&self, _args: serde_json::Value) -> crate::Result<ToolResult> {
                Ok(ToolResult::ok("ok"))
            }
        }

        let tool = DummyTool;
        let args = serde_json::json!({"command": "echo hello"});
        assert!(tool.needs_approval(&args).is_none());
    }
}
