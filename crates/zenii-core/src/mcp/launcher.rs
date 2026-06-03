//! PAR.4 — build MCP server configs that launch external GitHub code via ephemeral
//! runners (`uvx` for Python, `npx` for Node). The existing `McpClientManager` already
//! spawns `McpTransport::Stdio { command, args, env }`, so registering an MCP-shaped
//! GitHub agent reduces to constructing the right stdio command.

use std::collections::HashMap;

use crate::config::{McpServerConfig, McpTransport};
use crate::{Result, ZeniiError};

/// Runners supported for launching MCP servers.
const MCP_RUNNERS: &[&str] = &["uvx", "npx"];

/// Spec describing how to launch an external MCP server via a runner.
#[derive(Debug, Clone)]
pub struct McpLaunchSpec {
    /// Stable server id (used as the MCP server key + tool routing).
    pub id: String,
    /// Runner: `uvx` (Python) or `npx` (Node).
    pub runner: String,
    /// Source/package spec: a `git+https://…` URL or a published package name.
    pub source: String,
    /// Entry/console-script name to run after the package is resolved (optional).
    pub entry: Option<String>,
    /// Git ref/tag to pin; appended as `@ref` to `source` if not already pinned.
    pub git_ref: Option<String>,
    /// Secrets injected into the server's environment (never placed on argv).
    pub secrets: HashMap<String, String>,
    /// App-managed runner binary path (preferred over a bare PATH name), if resolved.
    pub runner_path: Option<String>,
}

/// Build an [`McpServerConfig`] (stdio transport) from a runner launch spec.
///
/// Errors on an empty source or an unsupported runner.
pub fn build_mcp_stdio_config(spec: &McpLaunchSpec) -> Result<McpServerConfig> {
    if spec.source.trim().is_empty() {
        return Err(ZeniiError::Mcp("MCP launch source is empty".into()));
    }
    if !MCP_RUNNERS.contains(&spec.runner.as_str()) {
        return Err(ZeniiError::Mcp(format!(
            "unsupported MCP runner '{}' (supported: {})",
            spec.runner,
            MCP_RUNNERS.join(", ")
        )));
    }

    // Pin the git ref if provided and not already pinned.
    let source = match &spec.git_ref {
        Some(git_ref) if !spec.source.contains('@') => format!("{}@{git_ref}", spec.source),
        _ => spec.source.clone(),
    };

    let program = |default: &str| -> String {
        spec.runner_path
            .clone()
            .unwrap_or_else(|| default.to_string())
    };

    let (command, mut args) = match spec.runner.as_str() {
        "uvx" => (program("uvx"), vec!["--from".to_string(), source]),
        "npx" => (program("npx"), vec!["-y".to_string(), source]),
        // Guarded above.
        other => return Err(ZeniiError::Mcp(format!("unsupported MCP runner '{other}'"))),
    };
    if let Some(entry) = &spec.entry {
        args.push(entry.clone());
    }

    Ok(McpServerConfig {
        id: spec.id.clone(),
        transport: McpTransport::Stdio {
            command,
            args,
            env: spec.secrets.clone(),
        },
        tools_prefix: None,
        enabled: true,
    })
}

#[cfg(test)]
mod tests {
    use super::*;

    fn spec(runner: &str, source: &str, entry: Option<&str>) -> McpLaunchSpec {
        McpLaunchSpec {
            id: "ext".into(),
            runner: runner.into(),
            source: source.into(),
            entry: entry.map(String::from),
            git_ref: None,
            secrets: HashMap::new(),
            runner_path: None,
        }
    }

    fn stdio(config: &McpServerConfig) -> (&str, &[String], &HashMap<String, String>) {
        match &config.transport {
            McpTransport::Stdio { command, args, env } => (command.as_str(), args, env),
            _ => panic!("expected stdio transport"),
        }
    }

    #[test]
    fn manifest_to_mcp_stdio_config_python_uvx() {
        let s = spec("uvx", "git+https://github.com/u/r", Some("server"));
        let cfg = build_mcp_stdio_config(&s).unwrap();
        let (command, args, _env) = stdio(&cfg);
        assert_eq!(command, "uvx");
        assert_eq!(
            args,
            &[
                "--from".to_string(),
                "git+https://github.com/u/r".to_string(),
                "server".to_string()
            ]
        );
    }

    #[test]
    fn manifest_to_mcp_stdio_config_node_npx() {
        let s = spec("npx", "@scope/mcp-server", None);
        let cfg = build_mcp_stdio_config(&s).unwrap();
        let (command, args, _env) = stdio(&cfg);
        assert_eq!(command, "npx");
        assert_eq!(args, &["-y".to_string(), "@scope/mcp-server".to_string()]);
    }

    #[test]
    fn mcp_config_pins_ref_in_args() {
        let mut s = spec("uvx", "git+https://github.com/u/r", Some("server"));
        s.git_ref = Some("v1.2.0".into());
        let cfg = build_mcp_stdio_config(&s).unwrap();
        let (_c, args, _e) = stdio(&cfg);
        assert!(
            args.iter()
                .any(|a| a == "git+https://github.com/u/r@v1.2.0"),
            "ref not pinned in args: {args:?}"
        );
    }

    #[test]
    fn mcp_config_secrets_in_env_not_args() {
        let mut s = spec("uvx", "git+https://github.com/u/r", Some("server"));
        s.secrets.insert("API_KEY".into(), "super-secret".into());
        let cfg = build_mcp_stdio_config(&s).unwrap();
        let (_c, args, env) = stdio(&cfg);
        assert_eq!(env.get("API_KEY").map(String::as_str), Some("super-secret"));
        assert!(!args.iter().any(|a| a.contains("super-secret")));
    }

    #[test]
    fn invalid_source_url_rejected() {
        let s = spec("uvx", "   ", Some("server"));
        assert!(build_mcp_stdio_config(&s).is_err());
        let bad_runner = spec("frobnicate", "pkg", None);
        assert!(build_mcp_stdio_config(&bad_runner).is_err());
    }

    #[test]
    fn app_managed_runner_path_used_as_command() {
        let mut s = spec("uvx", "git+https://github.com/u/r", Some("server"));
        s.runner_path = Some("/data/runtimes/uvx".into());
        let cfg = build_mcp_stdio_config(&s).unwrap();
        let (command, _a, _e) = stdio(&cfg);
        assert_eq!(command, "/data/runtimes/uvx");
    }

    /// Minimal MCP stdio server (Python stdlib only) for end-to-end discovery tests.
    /// Echoes the client's protocolVersion and exposes one `ping` tool.
    #[cfg(feature = "mcp-client")]
    const FIXTURE_PY: &str = r#"
import sys, json
def send(obj):
    sys.stdout.write(json.dumps(obj) + "\n"); sys.stdout.flush()
for line in sys.stdin:
    line = line.strip()
    if not line:
        continue
    try:
        msg = json.loads(line)
    except Exception:
        continue
    method = msg.get("method"); mid = msg.get("id")
    if method == "initialize":
        pv = msg.get("params", {}).get("protocolVersion", "2024-11-05")
        send({"jsonrpc":"2.0","id":mid,"result":{"protocolVersion":pv,"capabilities":{"tools":{}},"serverInfo":{"name":"fixture","version":"0.1.0"}}})
    elif method == "notifications/initialized":
        pass
    elif method == "tools/list":
        send({"jsonrpc":"2.0","id":mid,"result":{"tools":[{"name":"ping","description":"ping tool","inputSchema":{"type":"object","properties":{}}}]}})
    elif method == "tools/call":
        send({"jsonrpc":"2.0","id":mid,"result":{"content":[{"type":"text","text":"pong"}],"isError":False}})
    elif mid is not None:
        send({"jsonrpc":"2.0","id":mid,"result":{}})
"#;

    #[cfg(feature = "mcp-client")]
    fn has_python() -> bool {
        let finder = if cfg!(windows) { "where" } else { "which" };
        std::process::Command::new(finder)
            .arg("python3")
            .output()
            .map(|o| o.status.success())
            .unwrap_or(false)
    }

    // End-to-end: a real (Python stdlib) MCP server is spawned via stdio, and
    // McpClientManager discovers its `ping` tool. Gated on python3 (no network).
    #[cfg(feature = "mcp-client")]
    #[tokio::test]
    async fn fixture_mcp_server_tools_discovered() {
        if !has_python() {
            eprintln!("skip fixture_mcp_server_tools_discovered: python3 not available");
            return;
        }
        let dir = tempfile::TempDir::new().unwrap();
        let script = dir.path().join("mcp_fixture_server.py");
        std::fs::write(&script, FIXTURE_PY).unwrap();

        let cfg = McpServerConfig {
            id: "fixture".into(),
            transport: McpTransport::Stdio {
                command: "python3".into(),
                args: vec![script.display().to_string()],
                env: HashMap::new(),
            },
            tools_prefix: None,
            enabled: true,
        };
        let manager = crate::mcp::McpClientManager::connect_all(&[cfg])
            .await
            .expect("connect_all");
        let tools = manager.tools_for("fixture");
        assert!(
            tools.iter().any(|t| t.name == "ping"),
            "expected 'ping' discovered, got {:?}",
            tools.iter().map(|t| &t.name).collect::<Vec<_>>()
        );
    }

    // Wiring: a launcher-built config flows into McpClientManager and a spawn failure
    // is tolerated gracefully (no panic, no tools). Deterministic — points the runner
    // at a nonexistent path so it fails immediately regardless of host toolchain.
    #[cfg(feature = "mcp-client")]
    #[tokio::test]
    async fn launcher_config_connects_via_mcp_client_manager() {
        let mut s = spec(
            "uvx",
            "git+https://github.com/u/does-not-exist",
            Some("server"),
        );
        s.id = "ext-fixture".into();
        s.runner_path = Some("/nonexistent/uvx".into());
        let cfg = build_mcp_stdio_config(&s).unwrap();

        let manager = crate::mcp::McpClientManager::connect_all(&[cfg])
            .await
            .expect("connect_all tolerates a failed server");
        assert!(
            manager.tools_for("ext-fixture").is_empty(),
            "failed spawn must yield no tools, not panic"
        );
    }
}
