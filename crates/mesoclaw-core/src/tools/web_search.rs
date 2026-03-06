use async_trait::async_trait;

use crate::{MesoError, Result};

use super::traits::{Tool, ToolResult};

pub struct WebSearchTool;

impl WebSearchTool {
    pub fn new() -> Self {
        Self
    }
}

impl Default for WebSearchTool {
    fn default() -> Self {
        Self::new()
    }
}

#[async_trait]
impl Tool for WebSearchTool {
    fn name(&self) -> &str {
        "web_search"
    }

    fn description(&self) -> &str {
        "Search the web"
    }

    fn parameters_schema(&self) -> serde_json::Value {
        serde_json::json!({
            "type": "object",
            "properties": {
                "query": { "type": "string", "description": "Search query" },
                "num_results": { "type": "integer", "description": "Number of results", "default": 5 }
            },
            "required": ["query"]
        })
    }

    async fn execute(&self, args: serde_json::Value) -> Result<ToolResult> {
        let _query = args
            .get("query")
            .and_then(|v| v.as_str())
            .ok_or_else(|| MesoError::Tool("missing 'query' argument".into()))?;

        // STUB: actual web search requires API keys — will be implemented in Phase 3
        Ok(ToolResult::ok(
            "Web search is not yet configured. Please set up API keys.",
        ))
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn schema_is_valid() {
        let tool = WebSearchTool::new();
        let schema = tool.parameters_schema();
        assert!(schema.is_object());
        assert!(schema["properties"]["query"].is_object());
    }

    #[tokio::test]
    async fn missing_query_errors() {
        let tool = WebSearchTool::new();
        let result = tool.execute(serde_json::json!({})).await;
        assert!(result.is_err());
    }

    #[test]
    fn name_is_web_search() {
        let tool = WebSearchTool::new();
        assert_eq!(tool.name(), "web_search");
    }
}
