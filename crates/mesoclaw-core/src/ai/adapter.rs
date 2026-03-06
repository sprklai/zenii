use std::sync::Arc;

use rig::completion::ToolDefinition;
use rig::tool::{ToolDyn, ToolError};
use rig::wasm_compat::WasmBoxedFuture;

use crate::tools::Tool;

/// Bridges a MesoClaw `Tool` trait object to rig-core's `ToolDyn` trait,
/// allowing MesoClaw tools to be used with rig agents.
pub struct RigToolAdapter {
    tool: Arc<dyn Tool>,
}

impl RigToolAdapter {
    pub fn new(tool: Arc<dyn Tool>) -> Self {
        Self { tool }
    }

    /// Convert a list of MesoClaw tools into boxed rig ToolDyn objects.
    pub fn from_tools(tools: &[Arc<dyn Tool>]) -> Vec<Box<dyn ToolDyn>> {
        tools
            .iter()
            .map(|t| Box::new(Self::new(Arc::clone(t))) as Box<dyn ToolDyn>)
            .collect()
    }
}

impl ToolDyn for RigToolAdapter {
    fn name(&self) -> String {
        self.tool.name().to_string()
    }

    fn definition<'a>(&'a self, _prompt: String) -> WasmBoxedFuture<'a, ToolDefinition> {
        Box::pin(async move {
            ToolDefinition {
                name: self.tool.name().to_string(),
                description: self.tool.description().to_string(),
                parameters: self.tool.parameters_schema(),
            }
        })
    }

    fn call<'a>(&'a self, args: String) -> WasmBoxedFuture<'a, Result<String, ToolError>> {
        Box::pin(async move {
            let args_value: serde_json::Value =
                serde_json::from_str(&args).map_err(ToolError::JsonError)?;

            let result = self
                .tool
                .execute(args_value)
                .await
                .map_err(|e| ToolError::ToolCallError(Box::new(e)))?;

            serde_json::to_string(&result).map_err(ToolError::JsonError)
        })
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::tools::ToolResult;
    use async_trait::async_trait;
    use serde_json::json;

    struct MockTool {
        name: &'static str,
    }

    #[async_trait]
    impl Tool for MockTool {
        fn name(&self) -> &str {
            self.name
        }
        fn description(&self) -> &str {
            "A mock tool for testing"
        }
        fn parameters_schema(&self) -> serde_json::Value {
            json!({
                "type": "object",
                "properties": {
                    "input": { "type": "string" }
                }
            })
        }
        async fn execute(&self, args: serde_json::Value) -> crate::Result<ToolResult> {
            let input = args.get("input").and_then(|v| v.as_str()).unwrap_or("none");
            Ok(ToolResult::ok(format!("processed: {input}")))
        }
    }

    struct FailingTool;

    #[async_trait]
    impl Tool for FailingTool {
        fn name(&self) -> &str {
            "failing"
        }
        fn description(&self) -> &str {
            "Always fails"
        }
        fn parameters_schema(&self) -> serde_json::Value {
            json!({})
        }
        async fn execute(&self, _args: serde_json::Value) -> crate::Result<ToolResult> {
            Err(crate::MesoError::Tool("tool failed".into()))
        }
    }

    // 1.1.1 — adapter name matches tool
    #[test]
    fn adapter_name_matches_tool() {
        let tool: Arc<dyn Tool> = Arc::new(MockTool { name: "test_tool" });
        let adapter = RigToolAdapter::new(tool);
        assert_eq!(ToolDyn::name(&adapter), "test_tool");
    }

    // 1.1.2 — adapter definition matches schema
    #[tokio::test]
    async fn adapter_definition_matches_schema() {
        let tool: Arc<dyn Tool> = Arc::new(MockTool { name: "test_tool" });
        let adapter = RigToolAdapter::new(tool);
        let def = adapter.definition("".to_string()).await;

        assert_eq!(def.name, "test_tool");
        assert_eq!(def.description, "A mock tool for testing");
        assert!(def.parameters.get("properties").is_some());
    }

    // 1.1.3 — adapter call delegates to tool
    #[tokio::test]
    async fn adapter_call_delegates_to_tool() {
        let tool: Arc<dyn Tool> = Arc::new(MockTool { name: "test_tool" });
        let adapter = RigToolAdapter::new(tool);
        let result = adapter
            .call(json!({"input": "hello"}).to_string())
            .await
            .unwrap();

        let parsed: ToolResult = serde_json::from_str(&result).unwrap();
        assert!(parsed.success);
        assert_eq!(parsed.output, "processed: hello");
    }

    // 1.1.4 — adapter call error propagates
    #[tokio::test]
    async fn adapter_call_error_propagates() {
        let tool: Arc<dyn Tool> = Arc::new(FailingTool);
        let adapter = RigToolAdapter::new(tool);
        let result = adapter.call("{}".to_string()).await;

        assert!(result.is_err());
    }

    // 1.1.5 — adapter from multiple tools
    #[test]
    fn adapter_from_multiple_tools() {
        let tools: Vec<Arc<dyn Tool>> = vec![
            Arc::new(MockTool { name: "tool_a" }),
            Arc::new(MockTool { name: "tool_b" }),
        ];
        let rig_tools = RigToolAdapter::from_tools(&tools);

        assert_eq!(rig_tools.len(), 2);
        assert_eq!(rig_tools[0].name(), "tool_a");
        assert_eq!(rig_tools[1].name(), "tool_b");
    }
}
