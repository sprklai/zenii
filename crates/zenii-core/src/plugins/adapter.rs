use std::sync::Arc;

use async_trait::async_trait;
use serde_json::Value;
use tokio::sync::Mutex;

use super::process::PluginProcess;
use crate::Result;
use crate::tools::{Tool, ToolResult};

/// Wraps a PluginProcess to implement the Tool trait.
/// This makes plugin tools indistinguishable from built-in tools.
pub struct PluginToolAdapter {
    name: String,
    description: String,
    parameters_schema: Value,
    process: Arc<Mutex<PluginProcess>>,
}

impl PluginToolAdapter {
    pub fn new(
        name: String,
        description: String,
        parameters_schema: Value,
        process: Arc<Mutex<PluginProcess>>,
    ) -> Self {
        Self {
            name,
            description,
            parameters_schema,
            process,
        }
    }
}

#[async_trait]
impl Tool for PluginToolAdapter {
    fn name(&self) -> &str {
        &self.name
    }

    fn description(&self) -> &str {
        &self.description
    }

    fn parameters_schema(&self) -> Value {
        self.parameters_schema.clone()
    }

    async fn execute(&self, args: Value) -> Result<ToolResult> {
        let mut proc = self.process.lock().await;
        if !proc.is_running() {
            proc.spawn().await?;
        }
        proc.execute(args).await
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use std::path::PathBuf;

    fn mock_plugin_script() -> (tempfile::TempDir, PathBuf) {
        let dir = tempfile::TempDir::new().unwrap();
        let script_path = dir.path().join("mock-adapter.sh");
        std::fs::write(
            &script_path,
            r#"#!/bin/bash
while IFS= read -r line; do
    id=$(echo "$line" | grep -o '"id":[0-9]*' | head -1 | cut -d: -f2)
    method=$(echo "$line" | grep -o '"method":"[^"]*"' | head -1 | cut -d'"' -f4)
    case "$method" in
        info)
            echo "{\"jsonrpc\":\"2.0\",\"result\":{\"name\":\"adapter-test\",\"description\":\"Test\",\"version\":\"1.0.0\",\"parameters_schema\":{}},\"id\":$id}"
            ;;
        execute)
            echo "{\"jsonrpc\":\"2.0\",\"result\":{\"output\":\"adapter executed\",\"success\":true},\"id\":$id}"
            ;;
        shutdown)
            echo "{\"jsonrpc\":\"2.0\",\"result\":null,\"id\":$id}"
            exit 0
            ;;
    esac
done
"#,
        )
        .unwrap();

        #[cfg(unix)]
        {
            use std::os::unix::fs::PermissionsExt;
            std::fs::set_permissions(&script_path, std::fs::Permissions::from_mode(0o755)).unwrap();
        }

        (dir, script_path)
    }

    // 9.0.11 — Adapter implements Tool trait
    #[tokio::test]
    async fn adapter_implements_tool_trait() {
        let (_dir, script_path) = mock_plugin_script();
        let process = PluginProcess::new("adapter-test", script_path, 10, 3);
        let process = Arc::new(Mutex::new(process));

        let adapter = PluginToolAdapter::new(
            "adapter-test".into(),
            "Test adapter".into(),
            serde_json::json!({}),
            process,
        );

        assert_eq!(adapter.name(), "adapter-test");
        assert_eq!(adapter.description(), "Test adapter");

        let result = adapter
            .execute(serde_json::json!({"action": "test"}))
            .await
            .unwrap();
        assert!(result.success);
        assert_eq!(result.output, "adapter executed");
    }

    // 9.0.12 — Adapter lazy-starts process
    #[tokio::test]
    async fn adapter_lazy_starts_process() {
        let (_dir, script_path) = mock_plugin_script();
        let process = PluginProcess::new("lazy-test", script_path, 10, 3);
        // Process is NOT spawned yet
        let process = Arc::new(Mutex::new(process));

        let adapter = PluginToolAdapter::new(
            "lazy-test".into(),
            "Test lazy start".into(),
            serde_json::json!({}),
            process.clone(),
        );

        // Verify not running
        {
            let mut proc = process.lock().await;
            assert!(!proc.is_running());
        }

        // Execute should auto-spawn
        let result = adapter
            .execute(serde_json::json!({"action": "test"}))
            .await
            .unwrap();
        assert!(result.success);

        // Now it should be running
        {
            let mut proc = process.lock().await;
            assert!(proc.is_running());
        }
    }
}
