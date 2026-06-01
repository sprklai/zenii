use std::path::PathBuf;
use std::sync::atomic::{AtomicU64, Ordering};
use std::time::Duration;

use serde::{Deserialize, Serialize};
use serde_json::Value;
use tokio::io::{AsyncBufReadExt, AsyncWriteExt, BufReader};
use tokio::process::{Child, ChildStdin, ChildStdout, Command};
use tracing::{debug, warn};

use crate::tools::ToolResult;
use crate::{Result, ZeniiError};

#[derive(Debug, Clone, Serialize, Deserialize)]
struct JsonRpcRequest {
    jsonrpc: String,
    method: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    params: Option<Value>,
    id: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
struct JsonRpcResponse {
    jsonrpc: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    result: Option<Value>,
    #[serde(skip_serializing_if = "Option::is_none")]
    error: Option<JsonRpcError>,
    id: u64,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
struct JsonRpcError {
    code: i64,
    message: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    data: Option<Value>,
}

/// Info returned by the `info` JSON-RPC method.
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PluginToolInfo {
    pub name: String,
    pub description: String,
    pub version: String,
    pub parameters_schema: Value,
}

/// Manages an external plugin process lifecycle + JSON-RPC communication.
pub struct PluginProcess {
    name: String,
    binary_path: PathBuf,
    child: Option<Child>,
    stdin: Option<ChildStdin>,
    stdout_reader: Option<BufReader<ChildStdout>>,
    request_id: AtomicU64,
    execute_timeout: Duration,
    restart_attempts: u32,
    max_restart_attempts: u32,
    // PAR: runner-based execution + isolation
    runner: Option<String>,
    package: Option<String>,
    /// App-managed runner binary path (preferred over a bare PATH lookup), if resolved.
    runner_path: Option<PathBuf>,
    /// Secrets injected into the child's environment (never passed on argv).
    secrets: std::collections::HashMap<String, String>,
    /// Per-agent scratch dir, exported to the child as `ZENII_AGENT_SCRATCH`.
    scratch_dir: Option<PathBuf>,
    /// Ephemeral extra dependencies injected via `uv --with` (self-heal dependency fixes).
    extra_deps: Vec<String>,
}

/// Env var name for the per-agent scratch directory passed to runner-based plugins.
pub const SCRATCH_ENV: &str = "ZENII_AGENT_SCRATCH";

impl PluginProcess {
    pub fn new(
        name: &str,
        binary_path: PathBuf,
        execute_timeout_secs: u64,
        max_restart_attempts: u32,
    ) -> Self {
        Self {
            name: name.to_string(),
            binary_path,
            child: None,
            stdin: None,
            stdout_reader: None,
            request_id: AtomicU64::new(1),
            execute_timeout: Duration::from_secs(execute_timeout_secs),
            restart_attempts: 0,
            max_restart_attempts,
            runner: None,
            package: None,
            runner_path: None,
            secrets: std::collections::HashMap::new(),
            scratch_dir: None,
            extra_deps: Vec::new(),
        }
    }

    /// Configure runner-based execution (uvx/npx/uv-run/node) with an optional resolved
    /// runner binary path (preferred over a bare PATH name).
    pub fn with_runner(
        mut self,
        runner: Option<String>,
        package: Option<String>,
        runner_path: Option<PathBuf>,
    ) -> Self {
        self.runner = runner;
        self.package = package;
        self.runner_path = runner_path;
        self
    }

    /// Provide secrets to inject into the child's environment.
    pub fn with_secrets(mut self, secrets: std::collections::HashMap<String, String>) -> Self {
        self.secrets = secrets;
        self
    }

    /// Provide a scratch directory exported to the child.
    pub fn with_scratch_dir(mut self, scratch_dir: Option<PathBuf>) -> Self {
        self.scratch_dir = scratch_dir;
        self
    }

    /// Inject ephemeral extra dependencies (uv `--with`) for uv-based runners.
    pub fn with_extra_deps(mut self, extra_deps: Vec<String>) -> Self {
        self.extra_deps = extra_deps;
        self
    }

    /// Build the `(program, args)` used to spawn this plugin. Secrets are NOT included here
    /// (they go via env — see [`Self::env_vars`]).
    pub fn command_parts(&self) -> (PathBuf, Vec<String>) {
        let entry = self.binary_path.to_string_lossy().to_string();
        // Prefer the app-managed runner path over a bare PATH name.
        let program = |default: &str| -> PathBuf {
            self.runner_path
                .clone()
                .unwrap_or_else(|| PathBuf::from(default))
        };
        // For package-based runners, append the package spec (when present) then the entry.
        let with_pkg = |mut args: Vec<String>| -> Vec<String> {
            if let Some(pkg) = &self.package {
                args.push(pkg.clone());
            }
            args.push(entry.clone());
            args
        };
        // `--with <dep>` pairs for uv-based runners (ephemeral isolated dependency fixes).
        let with_deps = || -> Vec<String> {
            self.extra_deps
                .iter()
                .flat_map(|d| ["--with".to_string(), d.clone()])
                .collect()
        };

        match self.runner.as_deref() {
            None => (self.binary_path.clone(), Vec::new()),
            Some("uvx") => {
                let mut args = with_deps();
                args.push("--from".to_string());
                (program("uvx"), with_pkg(args))
            }
            Some("npx") => (program("npx"), with_pkg(vec!["-y".to_string()])),
            Some("bunx") => (program("bunx"), with_pkg(Vec::new())),
            Some("uv-run") => {
                let mut args = vec!["run".to_string()];
                args.extend(with_deps());
                args.push(entry);
                (program("uv"), args)
            }
            Some("node") => (program("node"), vec![entry]),
            // Unknown runner is rejected at manifest validation; fall back to bare invocation.
            Some(other) => (program(other), vec![entry]),
        }
    }

    /// Environment variables to set on the child: secrets + scratch dir.
    pub fn env_vars(&self) -> std::collections::HashMap<String, String> {
        let mut env = self.secrets.clone();
        if let Some(scratch) = &self.scratch_dir {
            env.insert(SCRATCH_ENV.to_string(), scratch.to_string_lossy().to_string());
        }
        env
    }

    /// Spawn the plugin process.
    pub async fn spawn(&mut self) -> Result<()> {
        if self.is_running() {
            return Ok(());
        }

        // Create the per-agent scratch dir before spawning, if configured.
        if let Some(scratch) = &self.scratch_dir {
            std::fs::create_dir_all(scratch).map_err(|e| {
                ZeniiError::Plugin(format!(
                    "failed to create scratch dir for plugin '{}': {e}",
                    self.name
                ))
            })?;
        }

        let (program, args) = self.command_parts();
        debug!(
            "Spawning plugin process: {} ({} {})",
            self.name,
            program.display(),
            args.join(" ")
        );

        let mut command = Command::new(&program);
        command.args(&args);
        for (key, value) in self.env_vars() {
            command.env(key, value);
        }
        let mut child = command
            .stdin(std::process::Stdio::piped())
            .stdout(std::process::Stdio::piped())
            .stderr(std::process::Stdio::null())
            .kill_on_drop(true)
            .spawn()
            .map_err(|e| {
                ZeniiError::Plugin(format!("failed to spawn plugin '{}': {e}", self.name))
            })?;

        let stdin = child.stdin.take().ok_or_else(|| {
            ZeniiError::Plugin(format!("plugin '{}' stdin not available", self.name))
        })?;
        let stdout = child.stdout.take().ok_or_else(|| {
            ZeniiError::Plugin(format!("plugin '{}' stdout not available", self.name))
        })?;

        self.child = Some(child);
        self.stdin = Some(stdin);
        self.stdout_reader = Some(BufReader::new(stdout));
        self.restart_attempts = 0;

        debug!("Plugin '{}' spawned successfully", self.name);
        Ok(())
    }

    /// Check if the process is running.
    pub fn is_running(&mut self) -> bool {
        if let Some(ref mut child) = self.child {
            matches!(child.try_wait(), Ok(None))
        } else {
            false
        }
    }

    /// Send a JSON-RPC call and wait for the response.
    async fn call(&mut self, method: &str, params: Option<Value>) -> Result<Value> {
        if !self.is_running() {
            self.try_restart().await?;
        }

        let id = self.request_id.fetch_add(1, Ordering::Relaxed);
        let request = JsonRpcRequest {
            jsonrpc: "2.0".into(),
            method: method.into(),
            params,
            id,
        };

        let mut request_line = serde_json::to_string(&request)
            .map_err(|e| ZeniiError::Plugin(format!("failed to serialize request: {e}")))?;
        request_line.push('\n');

        let stdin = self.stdin.as_mut().ok_or_else(|| {
            ZeniiError::Plugin(format!("plugin '{}' stdin not available", self.name))
        })?;
        let reader = self.stdout_reader.as_mut().ok_or_else(|| {
            ZeniiError::Plugin(format!("plugin '{}' stdout not available", self.name))
        })?;

        // Write request
        stdin
            .write_all(request_line.as_bytes())
            .await
            .map_err(|e| {
                ZeniiError::Plugin(format!("failed to write to plugin '{}': {e}", self.name))
            })?;
        stdin.flush().await.map_err(|e| {
            ZeniiError::Plugin(format!("failed to flush plugin '{}': {e}", self.name))
        })?;

        // Read response with timeout
        let mut response_line = String::new();
        let read_result =
            tokio::time::timeout(self.execute_timeout, reader.read_line(&mut response_line)).await;

        match read_result {
            Ok(Ok(0)) => {
                // Process closed stdout — it crashed
                self.cleanup();
                Err(ZeniiError::Plugin(format!(
                    "plugin '{}' closed unexpectedly",
                    self.name
                )))
            }
            Ok(Ok(_)) => {
                let response: JsonRpcResponse = serde_json::from_str(response_line.trim())
                    .map_err(|e| {
                        ZeniiError::Plugin(format!(
                            "plugin '{}' invalid JSON-RPC response: {e}",
                            self.name
                        ))
                    })?;

                if let Some(error) = response.error {
                    Err(ZeniiError::Plugin(format!(
                        "plugin '{}' error ({}): {}",
                        self.name, error.code, error.message
                    )))
                } else {
                    Ok(response.result.unwrap_or(Value::Null))
                }
            }
            Ok(Err(e)) => {
                self.cleanup();
                Err(ZeniiError::Plugin(format!(
                    "plugin '{}' read error: {e}",
                    self.name
                )))
            }
            Err(_) => {
                // Timeout
                self.cleanup();
                Err(ZeniiError::Plugin(format!(
                    "plugin '{}' execute timed out after {}s",
                    self.name,
                    self.execute_timeout.as_secs()
                )))
            }
        }
    }

    /// Call the `info` JSON-RPC method.
    pub async fn info(&mut self) -> Result<PluginToolInfo> {
        let result = self.call("info", None).await?;
        serde_json::from_value(result).map_err(|e| {
            ZeniiError::Plugin(format!("plugin '{}' invalid info response: {e}", self.name))
        })
    }

    /// Call the `execute` JSON-RPC method.
    pub async fn execute(&mut self, args: Value) -> Result<ToolResult> {
        let result = self.call("execute", Some(args)).await?;

        let output = result
            .get("output")
            .and_then(|v| v.as_str())
            .unwrap_or("")
            .to_string();
        let success = result
            .get("success")
            .and_then(|v| v.as_bool())
            .unwrap_or(false);
        let metadata = result.get("metadata").cloned();

        Ok(ToolResult {
            output,
            success,
            metadata,
        })
    }

    /// Send a shutdown request and wait for exit.
    pub async fn shutdown(&mut self) -> Result<()> {
        if !self.is_running() {
            return Ok(());
        }

        // Try graceful shutdown
        let _ = self.call("shutdown", None).await;

        // Wait briefly for process to exit
        if let Some(ref mut child) = self.child {
            let _ = tokio::time::timeout(Duration::from_secs(5), child.wait()).await;
        }

        self.cleanup();
        debug!("Plugin '{}' shut down", self.name);
        Ok(())
    }

    /// Try to restart after crash, with exponential backoff.
    async fn try_restart(&mut self) -> Result<()> {
        if self.restart_attempts >= self.max_restart_attempts {
            return Err(ZeniiError::Plugin(format!(
                "plugin '{}' exceeded max restart attempts ({})",
                self.name, self.max_restart_attempts
            )));
        }

        self.restart_attempts += 1;
        let backoff_ms = 100 * (1u64 << self.restart_attempts.min(10));
        warn!(
            "Plugin '{}' restarting (attempt {}/{}), backoff {}ms",
            self.name, self.restart_attempts, self.max_restart_attempts, backoff_ms
        );

        tokio::time::sleep(Duration::from_millis(backoff_ms)).await;
        self.cleanup();
        self.spawn().await
    }

    fn cleanup(&mut self) {
        if let Some(mut child) = self.child.take() {
            let _ = child.start_kill();
        }
        self.stdin = None;
        self.stdout_reader = None;
    }
}

impl Drop for PluginProcess {
    fn drop(&mut self) {
        self.cleanup();
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    // --- PAR.2: runner command construction ---

    fn proc_with(
        binary: &str,
        runner: Option<&str>,
        package: Option<&str>,
        runner_path: Option<&str>,
    ) -> PluginProcess {
        PluginProcess::new("t", PathBuf::from(binary), 60, 3).with_runner(
            runner.map(String::from),
            package.map(String::from),
            runner_path.map(PathBuf::from),
        )
    }

    #[test]
    fn command_none_is_direct_binary() {
        let p = proc_with("tool.sh", None, None, None);
        let (program, args) = p.command_parts();
        assert_eq!(program, PathBuf::from("tool.sh"));
        assert!(args.is_empty());
    }

    #[test]
    fn command_uvx_from_git() {
        let p = proc_with(
            "main.py",
            Some("uvx"),
            Some("git+https://github.com/u/r@v1"),
            None,
        );
        let (program, args) = p.command_parts();
        assert_eq!(program, PathBuf::from("uvx"));
        assert_eq!(
            args,
            vec![
                "--from".to_string(),
                "git+https://github.com/u/r@v1".to_string(),
                "main.py".to_string()
            ]
        );
    }

    #[test]
    fn command_npx_package() {
        let p = proc_with("cli.js", Some("npx"), Some("@scope/pkg@1.2"), None);
        let (program, args) = p.command_parts();
        assert_eq!(program, PathBuf::from("npx"));
        assert_eq!(
            args,
            vec![
                "-y".to_string(),
                "@scope/pkg@1.2".to_string(),
                "cli.js".to_string()
            ]
        );
    }

    #[test]
    fn command_uv_run_script() {
        let p = proc_with("main.py", Some("uv-run"), None, None);
        let (program, args) = p.command_parts();
        assert_eq!(program, PathBuf::from("uv"));
        assert_eq!(args, vec!["run".to_string(), "main.py".to_string()]);
    }

    #[test]
    fn command_node_script() {
        let p = proc_with("server.js", Some("node"), None, None);
        let (program, args) = p.command_parts();
        assert_eq!(program, PathBuf::from("node"));
        assert_eq!(args, vec!["server.js".to_string()]);
    }

    #[test]
    fn command_uv_run_injects_extra_deps() {
        let p = proc_with("main.py", Some("uv-run"), None, None)
            .with_extra_deps(vec!["rich".to_string(), "httpx".to_string()]);
        let (program, args) = p.command_parts();
        assert_eq!(program, PathBuf::from("uv"));
        assert_eq!(
            args,
            vec![
                "run".to_string(),
                "--with".to_string(),
                "rich".to_string(),
                "--with".to_string(),
                "httpx".to_string(),
                "main.py".to_string()
            ]
        );
    }

    #[test]
    fn command_uvx_injects_extra_deps_before_from() {
        let p = proc_with("main.py", Some("uvx"), Some("pkg@1"), None)
            .with_extra_deps(vec!["rich".to_string()]);
        let (_program, args) = p.command_parts();
        assert_eq!(
            args,
            vec![
                "--with".to_string(),
                "rich".to_string(),
                "--from".to_string(),
                "pkg@1".to_string(),
                "main.py".to_string()
            ]
        );
    }

    #[test]
    fn command_uses_app_managed_runner_path() {
        let p = proc_with("main.py", Some("uv-run"), None, Some("/data/runtimes/uv"));
        let (program, _args) = p.command_parts();
        assert_eq!(program, PathBuf::from("/data/runtimes/uv"));
    }

    #[test]
    fn secrets_injected_as_env_absent_from_argv() {
        let mut secrets = std::collections::HashMap::new();
        secrets.insert("API_KEY".to_string(), "super-secret".to_string());
        let p = proc_with("main.py", Some("uv-run"), None, None).with_secrets(secrets);

        let (_program, args) = p.command_parts();
        assert!(
            !args.iter().any(|a| a.contains("super-secret")),
            "secret leaked into argv"
        );
        assert_eq!(p.env_vars().get("API_KEY").map(String::as_str), Some("super-secret"));
    }

    #[test]
    fn scratch_env_set_when_configured() {
        let p = proc_with("main.py", Some("uv-run"), None, None)
            .with_scratch_dir(Some(PathBuf::from("/data/plugins/x/.scratch")));
        let env = p.env_vars();
        assert_eq!(
            env.get(SCRATCH_ENV).map(String::as_str),
            Some("/data/plugins/x/.scratch")
        );
    }

    fn mock_plugin_script() -> (tempfile::TempDir, PathBuf) {
        let dir = tempfile::TempDir::new().unwrap();
        let script_path = dir.path().join("mock-plugin.sh");
        // A simple bash script that acts as a JSON-RPC plugin
        std::fs::write(
            &script_path,
            r#"#!/bin/bash
while IFS= read -r line; do
    method=$(echo "$line" | python3 -c "import sys,json; print(json.loads(sys.stdin.read())['method'])" 2>/dev/null || echo "unknown")
    id=$(echo "$line" | python3 -c "import sys,json; print(json.loads(sys.stdin.read())['id'])" 2>/dev/null || echo "0")

    # Re-parse since stdin was consumed
    id=$(echo "$line" | grep -o '"id":[0-9]*' | head -1 | cut -d: -f2)
    method=$(echo "$line" | grep -o '"method":"[^"]*"' | head -1 | cut -d'"' -f4)

    case "$method" in
        info)
            echo "{\"jsonrpc\":\"2.0\",\"result\":{\"name\":\"mock\",\"description\":\"Mock plugin\",\"version\":\"1.0.0\",\"parameters_schema\":{}},\"id\":$id}"
            ;;
        execute)
            echo "{\"jsonrpc\":\"2.0\",\"result\":{\"output\":\"executed\",\"success\":true},\"id\":$id}"
            ;;
        shutdown)
            echo "{\"jsonrpc\":\"2.0\",\"result\":null,\"id\":$id}"
            exit 0
            ;;
        *)
            echo "{\"jsonrpc\":\"2.0\",\"error\":{\"code\":-32601,\"message\":\"Method not found\"},\"id\":$id}"
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

        // Sync to avoid "Text file busy" race on Linux
        let f = std::fs::File::open(&script_path).unwrap();
        f.sync_all().unwrap();

        (dir, script_path)
    }

    // 9.0.6 — Spawn mock plugin process
    #[cfg(unix)]
    #[tokio::test]
    async fn spawn_mock_plugin_process() {
        let (_dir, script_path) = mock_plugin_script();
        let mut process = PluginProcess::new("mock", script_path, 10, 3);
        assert!(!process.is_running());
        process.spawn().await.unwrap();
        assert!(process.is_running());
        process.shutdown().await.unwrap();
    }

    // 9.0.7 — JSON-RPC info call
    #[cfg(unix)]
    #[tokio::test]
    async fn jsonrpc_info_call() {
        let (_dir, script_path) = mock_plugin_script();
        let mut process = PluginProcess::new("mock", script_path, 10, 3);
        process.spawn().await.unwrap();
        let info = process.info().await.unwrap();
        assert_eq!(info.name, "mock");
        assert_eq!(info.version, "1.0.0");
        process.shutdown().await.unwrap();
    }

    // 9.0.8 — JSON-RPC execute call
    #[cfg(unix)]
    #[tokio::test]
    async fn jsonrpc_execute_call() {
        let (_dir, script_path) = mock_plugin_script();
        let mut process = PluginProcess::new("mock", script_path, 10, 3);
        process.spawn().await.unwrap();
        let result = process
            .execute(serde_json::json!({"action": "test"}))
            .await
            .unwrap();
        assert!(result.success);
        assert_eq!(result.output, "executed");
        process.shutdown().await.unwrap();
    }

    // 9.0.9 — Process timeout handling
    #[cfg(unix)]
    #[tokio::test]
    async fn process_timeout_handling() {
        let dir = tempfile::TempDir::new().unwrap();
        let script_path = dir.path().join("slow-plugin.sh");
        std::fs::write(
            &script_path,
            "#!/bin/bash\nwhile IFS= read -r line; do\nsleep 10\ndone\n",
        )
        .unwrap();

        #[cfg(unix)]
        {
            use std::os::unix::fs::PermissionsExt;
            std::fs::set_permissions(&script_path, std::fs::Permissions::from_mode(0o755)).unwrap();
        }

        // Brief yield to avoid "Text file busy" race on Linux
        tokio::time::sleep(std::time::Duration::from_millis(50)).await;

        let mut process = PluginProcess::new("slow", script_path, 1, 0);
        process.spawn().await.unwrap();
        let result = process.execute(serde_json::json!({})).await;
        assert!(result.is_err());
        assert!(result.unwrap_err().to_string().contains("timed out"));
    }

    // 9.0.10 — Process crash recovery
    #[cfg(unix)]
    #[tokio::test]
    async fn process_crash_recovery() {
        let dir = tempfile::TempDir::new().unwrap();
        let script_path = dir.path().join("crash-plugin.sh");
        // This script exits immediately, simulating a crash
        std::fs::write(&script_path, "#!/bin/bash\nexit 1\n").unwrap();

        #[cfg(unix)]
        {
            use std::os::unix::fs::PermissionsExt;
            std::fs::set_permissions(&script_path, std::fs::Permissions::from_mode(0o755)).unwrap();
        }

        // Brief yield to avoid "Text file busy" race on Linux
        tokio::time::sleep(std::time::Duration::from_millis(50)).await;

        let mut process = PluginProcess::new("crash", script_path, 2, 2);
        process.spawn().await.unwrap();

        // Process should have exited, so next call triggers restart attempts
        // Eventually it should exhaust restart attempts
        let result = process.execute(serde_json::json!({})).await;
        // Could succeed on restart or fail with max attempts
        // The point is it doesn't panic
        if result.is_err() {
            let err = result.unwrap_err().to_string();
            assert!(
                err.contains("exceeded max restart") || err.contains("closed unexpectedly"),
                "Unexpected error: {err}"
            );
        }
    }

    // ── Group D: Real plugin integration tests (9.1.21–9.1.30) ──

    use crate::plugins::test_helpers::{has_interpreter, real_plugins_path};

    // 9.1.21 — real_word_count_info
    #[tokio::test]
    async fn real_word_count_info() {
        let Some(plugins) = real_plugins_path() else {
            eprintln!("SKIP: real plugins path not available");
            return;
        };
        if !has_interpreter("python3") {
            eprintln!("SKIP: python3 interpreter not available");
            return;
        }
        let binary = plugins.join("word-count/word-count.py");
        let mut proc = PluginProcess::new("word-count", binary, 30, 1);
        proc.spawn().await.unwrap();
        let info = proc.info().await.unwrap();
        assert_eq!(info.name, "word-count");
        assert_eq!(info.version, "1.0.0");
        assert!(info.parameters_schema.get("properties").is_some());
        proc.shutdown().await.unwrap();
    }

    // 9.1.22 — real_word_count_execute
    #[tokio::test]
    async fn real_word_count_execute() {
        let Some(plugins) = real_plugins_path() else {
            eprintln!("SKIP: real plugins path not available");
            return;
        };
        if !has_interpreter("python3") {
            eprintln!("SKIP: python3 interpreter not available");
            return;
        }
        let binary = plugins.join("word-count/word-count.py");
        let mut proc = PluginProcess::new("word-count", binary, 30, 1);
        proc.spawn().await.unwrap();
        let result = proc
            .execute(serde_json::json!({"action": "count", "text": "hello world"}))
            .await
            .unwrap();
        assert!(result.success);
        assert!(
            result.output.contains("Words: 2"),
            "Expected output to contain 'Words: 2', got: {}",
            result.output
        );
        proc.shutdown().await.unwrap();
    }

    // 9.1.23 — real_json_formatter_info
    #[tokio::test]
    async fn real_json_formatter_info() {
        let Some(plugins) = real_plugins_path() else {
            eprintln!("SKIP: real plugins path not available");
            return;
        };
        if !has_interpreter("node") {
            eprintln!("SKIP: node interpreter not available");
            return;
        }
        let binary = plugins.join("json-formatter/json-formatter.js");
        let mut proc = PluginProcess::new("json-formatter", binary, 30, 1);
        proc.spawn().await.unwrap();
        let info = proc.info().await.unwrap();
        assert_eq!(info.name, "json-formatter");
        assert_eq!(info.version, "1.0.0");
        proc.shutdown().await.unwrap();
    }

    // 9.1.24 — real_json_formatter_execute
    #[tokio::test]
    async fn real_json_formatter_execute() {
        let Some(plugins) = real_plugins_path() else {
            eprintln!("SKIP: real plugins path not available");
            return;
        };
        if !has_interpreter("node") {
            eprintln!("SKIP: node interpreter not available");
            return;
        }
        let binary = plugins.join("json-formatter/json-formatter.js");
        let mut proc = PluginProcess::new("json-formatter", binary, 30, 1);
        proc.spawn().await.unwrap();
        let result = proc
            .execute(serde_json::json!({"action": "validate", "json": "{\"a\":1}"}))
            .await
            .unwrap();
        assert!(result.success);
        assert!(
            result.output.to_lowercase().contains("valid"),
            "Expected output to contain 'valid' (case-insensitive), got: {}",
            result.output
        );
        proc.shutdown().await.unwrap();
    }

    // 9.1.25 — real_uuid_gen_info
    #[tokio::test]
    async fn real_uuid_gen_info() {
        let Some(plugins) = real_plugins_path() else {
            eprintln!("SKIP: real plugins path not available");
            return;
        };
        if !has_interpreter("bash") {
            eprintln!("SKIP: bash interpreter not available");
            return;
        }
        let binary = plugins.join("uuid-gen/uuid-gen.sh");
        let mut proc = PluginProcess::new("uuid-gen", binary, 30, 1);
        proc.spawn().await.unwrap();
        let info = proc.info().await.unwrap();
        assert_eq!(info.name, "uuid-gen");
        assert_eq!(info.version, "1.0.0");
        proc.shutdown().await.unwrap();
    }

    // 9.1.26 — real_uuid_gen_execute
    #[tokio::test]
    async fn real_uuid_gen_execute() {
        let Some(plugins) = real_plugins_path() else {
            eprintln!("SKIP: real plugins path not available");
            return;
        };
        if !has_interpreter("bash") {
            eprintln!("SKIP: bash interpreter not available");
            return;
        }
        let binary = plugins.join("uuid-gen/uuid-gen.sh");
        let mut proc = PluginProcess::new("uuid-gen", binary, 30, 1);
        proc.spawn().await.unwrap();
        let result = proc
            .execute(serde_json::json!({"action": "generate", "count": 1}))
            .await
            .unwrap();
        assert!(result.success);
        // Check for UUID v4 pattern (8-4-4-4-12 hex format) using simple string validation
        let output_lower = result.output.to_lowercase();
        let has_uuid = output_lower.split_whitespace().any(|word| {
            let word = word.trim_matches(|c: char| !c.is_ascii_hexdigit() && c != '-');
            let parts: Vec<&str> = word.split('-').collect();
            parts.len() == 5
                && parts[0].len() == 8
                && parts[1].len() == 4
                && parts[2].len() == 4
                && parts[2].starts_with('4')
                && parts[3].len() == 4
                && parts[4].len() == 12
                && word.chars().all(|c| c.is_ascii_hexdigit() || c == '-')
        });
        assert!(
            has_uuid,
            "Expected output to contain a UUID v4, got: {}",
            result.output
        );
        proc.shutdown().await.unwrap();
    }

    // 9.1.27 — real_timestamp_info
    #[tokio::test]
    async fn real_timestamp_info() {
        let Some(plugins) = real_plugins_path() else {
            eprintln!("SKIP: real plugins path not available");
            return;
        };
        if !has_interpreter("node") {
            eprintln!("SKIP: node interpreter not available");
            return;
        }
        let binary = plugins.join("timestamp/timestamp.js");
        let mut proc = PluginProcess::new("timestamp", binary, 30, 1);
        proc.spawn().await.unwrap();
        let info = proc.info().await.unwrap();
        assert_eq!(info.name, "timestamp");
        assert_eq!(info.version, "1.0.0");
        proc.shutdown().await.unwrap();
    }

    // 9.1.28 — real_timestamp_execute
    #[tokio::test]
    async fn real_timestamp_execute() {
        let Some(plugins) = real_plugins_path() else {
            eprintln!("SKIP: real plugins path not available");
            return;
        };
        if !has_interpreter("node") {
            eprintln!("SKIP: node interpreter not available");
            return;
        }
        let binary = plugins.join("timestamp/timestamp.js");
        let mut proc = PluginProcess::new("timestamp", binary, 30, 1);
        proc.spawn().await.unwrap();
        let result = proc
            .execute(serde_json::json!({"action": "now"}))
            .await
            .unwrap();
        assert!(result.success);
        assert!(
            result.output.to_lowercase().contains("epoch"),
            "Expected output to contain 'epoch' (case-insensitive), got: {}",
            result.output
        );
        proc.shutdown().await.unwrap();
    }

    // 9.1.29 — real_base64_info
    #[tokio::test]
    async fn real_base64_info() {
        let Some(plugins) = real_plugins_path() else {
            eprintln!("SKIP: real plugins path not available");
            return;
        };
        let base64_bin = plugins.join("base64-tool/base64-tool");
        if !base64_bin.exists() {
            eprintln!("SKIP: base64-tool binary not built");
            return;
        }
        let mut proc = PluginProcess::new("base64-tool", base64_bin, 30, 1);
        proc.spawn().await.unwrap();
        let info = proc.info().await.unwrap();
        assert_eq!(info.name, "base64-tool");
        proc.shutdown().await.unwrap();
    }

    // 9.1.30 — real_base64_execute
    #[tokio::test]
    async fn real_base64_execute() {
        let Some(plugins) = real_plugins_path() else {
            eprintln!("SKIP: real plugins path not available");
            return;
        };
        let base64_bin = plugins.join("base64-tool/base64-tool");
        if !base64_bin.exists() {
            eprintln!("SKIP: base64-tool binary not built");
            return;
        }
        let mut proc = PluginProcess::new("base64-tool", base64_bin, 30, 1);
        proc.spawn().await.unwrap();
        let result = proc
            .execute(serde_json::json!({"action": "encode", "input": "hello"}))
            .await
            .unwrap();
        assert!(result.success);
        assert!(
            result.output.contains("aGVsbG8"),
            "Expected output to contain 'aGVsbG8' (base64 of 'hello'), got: {}",
            result.output
        );
        proc.shutdown().await.unwrap();
    }
}
