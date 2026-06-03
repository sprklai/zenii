use std::path::PathBuf;
use std::sync::Arc;

use async_trait::async_trait;
use serde_json::Value;
use tokio::sync::Mutex;

use super::heal::evaluator::apply_code_patch;
use super::heal::trigger::{Healer, build_trace};
use super::heal::{HealStatus, Patch};
use super::process::PluginProcess;
use crate::Result;
use crate::tools::{Tool, ToolResult};

/// Self-heal wiring attached to a runner-based tool (PAR.7d).
pub struct RepairContext {
    pub healer: Arc<Healer>,
    /// Installed plugin directory (where accepted code patches are applied).
    pub plugin_dir: PathBuf,
    /// Tool entry relative to `plugin_dir` (the manifest `binary`).
    pub entry: String,
    /// Whether the tool declares test cases (heal target). No tests → no auto-repair.
    pub has_tests: bool,
}

/// Wraps a PluginProcess to implement the Tool trait.
/// This makes plugin tools indistinguishable from built-in tools.
pub struct PluginToolAdapter {
    name: String,
    description: String,
    parameters_schema: Value,
    process: Arc<Mutex<PluginProcess>>,
    /// Optional self-heal trigger (PAR.7d). Absent → no auto-repair (legacy behavior).
    repair: Option<RepairContext>,
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
            repair: None,
        }
    }

    /// Attach a self-heal trigger (PAR.7d).
    pub fn with_repair(mut self, repair: RepairContext) -> Self {
        self.repair = Some(repair);
        self
    }

    /// Spawn-if-needed then execute once.
    async fn run_once(&self, args: Value) -> Result<ToolResult> {
        let mut proc = self.process.lock().await;
        if !proc.is_running() {
            proc.spawn().await?;
        }
        proc.execute(args).await
    }

    /// Apply an accepted patch to the live plugin, then force a fresh process so the fix
    /// (new deps / patched code) takes effect on the retry.
    async fn apply_live(&self, ctx: &RepairContext, patch: &Patch) -> Result<()> {
        let mut proc = self.process.lock().await;
        apply_patch(patch, ctx, &mut proc)?;
        let _ = proc.shutdown().await;
        Ok(())
    }
}

/// Whether a result should trigger self-heal (an error or an unsuccessful result).
fn should_repair(result: &Result<ToolResult>) -> bool {
    match result {
        Err(_) => true,
        Ok(r) => !r.success,
    }
}

/// Apply a patch to the live plugin: dependency fixes update the process's `--with` deps;
/// code fixes patch the installed entry file.
pub(crate) fn apply_patch(
    patch: &Patch,
    ctx: &RepairContext,
    proc: &mut PluginProcess,
) -> Result<()> {
    match patch {
        Patch::Dependency { add } => proc.add_extra_deps(add.clone()),
        Patch::Code { diff } => apply_code_patch(&ctx.plugin_dir, diff, &ctx.entry)?,
        Patch::Composite(parts) => {
            for p in parts {
                apply_patch(p, ctx, proc)?;
            }
        }
        Patch::Retry => {}
    }
    Ok(())
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
        let result = self.run_once(args.clone()).await;

        // Self-heal trigger (PAR.7d): this is the same Tool::execute path used by the main
        // agent, delegation sub-agents, and workflow steps, so repair is available to all.
        let Some(ctx) = self.repair.as_ref() else {
            return result;
        };
        if !ctx.has_tests || !should_repair(&result) {
            return result;
        }

        let (stderr, exit) = {
            let proc = self.process.lock().await;
            (proc.last_stderr().await, proc.last_exit_code())
        };
        let fallback = match &result {
            Err(e) => e.to_string(),
            Ok(r) => r.output.clone(),
        };
        let stderr = if stderr.trim().is_empty() {
            fallback
        } else {
            stderr
        };

        match ctx
            .healer
            .repair(build_trace(String::new(), stderr, exit))
            .await
        {
            Ok(outcome) if outcome.status == HealStatus::Fixed => {
                if let Some(patch) = &outcome.patch
                    && let Err(e) = self.apply_live(ctx, patch).await
                {
                    tracing::warn!("self-heal: applying fix for '{}' failed: {e}", self.name);
                    return result;
                }
                tracing::info!(
                    "self-heal: repaired '{}' ({}); retrying",
                    self.name,
                    outcome.report
                );
                self.run_once(args).await
            }
            Ok(outcome) => {
                tracing::info!(
                    "self-heal: could not repair '{}': {} ({:?})",
                    self.name,
                    outcome.report,
                    outcome.status
                );
                result
            }
            Err(e) => {
                tracing::warn!("self-heal error for '{}': {e}", self.name);
                result
            }
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::plugins::test_helpers::{has_interpreter, real_plugins_path};
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

        // Sync to avoid "Text file busy" race on Linux
        let f = std::fs::File::open(&script_path).unwrap();
        f.sync_all().unwrap();

        (dir, script_path)
    }

    // 9.0.11 — Adapter implements Tool trait
    #[cfg(unix)]
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
    #[cfg(unix)]
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

    // 9.1.31 — Adapter end-to-end: real word-count plugin
    #[tokio::test]
    async fn adapter_real_word_count() {
        let Some(plugins_path) = real_plugins_path() else {
            eprintln!("SKIP: real plugins path not available");
            return;
        };
        if !has_interpreter("python3") {
            eprintln!("SKIP: python3 interpreter not available");
            return;
        }

        let binary = plugins_path.join("word-count/word-count.py");
        let process = PluginProcess::new("word-count", binary, 30, 1);
        let process_arc = Arc::new(Mutex::new(process));

        // Spawn first
        {
            let mut proc = process_arc.lock().await;
            proc.spawn().await.unwrap();
        }

        let adapter = PluginToolAdapter::new(
            "word-count".into(),
            "Count words".into(),
            serde_json::json!({}),
            process_arc,
        );

        let result = adapter
            .execute(serde_json::json!({"action": "count", "text": "hello world"}))
            .await
            .unwrap();
        assert!(result.success, "expected success=true, got: {:?}", result);
        assert!(
            result.output.contains("Words: 2"),
            "expected output to contain 'Words: 2', got: {}",
            result.output
        );
    }

    // 9.1.32 — Adapter end-to-end: real json-formatter plugin
    #[tokio::test]
    async fn adapter_real_json_formatter() {
        let Some(plugins_path) = real_plugins_path() else {
            eprintln!("SKIP: real plugins path not available");
            return;
        };
        if !has_interpreter("node") {
            eprintln!("SKIP: node interpreter not available");
            return;
        }

        let binary = plugins_path.join("json-formatter/json-formatter.js");
        let process = PluginProcess::new("json-formatter", binary, 30, 1);
        let process_arc = Arc::new(Mutex::new(process));

        {
            let mut proc = process_arc.lock().await;
            proc.spawn().await.unwrap();
        }

        let adapter = PluginToolAdapter::new(
            "json-formatter".into(),
            "Format JSON".into(),
            serde_json::json!({}),
            process_arc,
        );

        let result = adapter
            .execute(serde_json::json!({"action": "validate", "json": "{\"a\":1}"}))
            .await
            .unwrap();
        assert!(result.success, "expected success=true, got: {:?}", result);
        assert!(
            result.output.to_lowercase().contains("valid"),
            "expected output to contain 'valid', got: {}",
            result.output
        );
    }

    // 9.1.33 — Adapter end-to-end: real uuid-gen plugin
    #[tokio::test]
    async fn adapter_real_uuid_gen() {
        let Some(plugins_path) = real_plugins_path() else {
            eprintln!("SKIP: real plugins path not available");
            return;
        };
        if !has_interpreter("bash") {
            eprintln!("SKIP: bash interpreter not available");
            return;
        }

        let binary = plugins_path.join("uuid-gen/uuid-gen.sh");
        let process = PluginProcess::new("uuid-gen", binary, 30, 1);
        let process_arc = Arc::new(Mutex::new(process));

        {
            let mut proc = process_arc.lock().await;
            proc.spawn().await.unwrap();
        }

        let adapter = PluginToolAdapter::new(
            "uuid-gen".into(),
            "Generate UUIDs".into(),
            serde_json::json!({}),
            process_arc,
        );

        let result = adapter
            .execute(serde_json::json!({"action": "generate", "count": 1}))
            .await
            .unwrap();
        assert!(result.success, "expected success=true, got: {:?}", result);
        assert!(
            result.output.contains('-') && result.output.len() > 10,
            "expected hyphenated UUID string, got: {}",
            result.output
        );
    }

    // 9.1.34 — Adapter end-to-end: real timestamp plugin
    #[tokio::test]
    async fn adapter_real_timestamp() {
        let Some(plugins_path) = real_plugins_path() else {
            eprintln!("SKIP: real plugins path not available");
            return;
        };
        if !has_interpreter("node") {
            eprintln!("SKIP: node interpreter not available");
            return;
        }

        let binary = plugins_path.join("timestamp/timestamp.js");
        let process = PluginProcess::new("timestamp", binary, 30, 1);
        let process_arc = Arc::new(Mutex::new(process));

        {
            let mut proc = process_arc.lock().await;
            proc.spawn().await.unwrap();
        }

        let adapter = PluginToolAdapter::new(
            "timestamp".into(),
            "Get timestamps".into(),
            serde_json::json!({}),
            process_arc,
        );

        let result = adapter
            .execute(serde_json::json!({"action": "now"}))
            .await
            .unwrap();
        assert!(result.success, "expected success=true, got: {:?}", result);
    }

    // 9.1.35 — Adapter end-to-end: lazy-start with real plugin
    #[tokio::test]
    async fn adapter_real_lazy_start() {
        let Some(plugins_path) = real_plugins_path() else {
            eprintln!("SKIP: real plugins path not available");
            return;
        };
        if !has_interpreter("python3") {
            eprintln!("SKIP: python3 interpreter not available");
            return;
        }

        let binary = plugins_path.join("word-count/word-count.py");
        let process = PluginProcess::new("word-count", binary, 30, 1);
        // Do NOT spawn — adapter should lazy-start
        let process_arc = Arc::new(Mutex::new(process));

        let adapter = PluginToolAdapter::new(
            "word-count".into(),
            "Count words".into(),
            serde_json::json!({}),
            process_arc,
        );

        let result = adapter
            .execute(serde_json::json!({"action": "count", "text": "one two three"}))
            .await
            .unwrap();
        assert!(result.success, "expected success=true, got: {:?}", result);
        assert!(
            result.output.contains("Words"),
            "expected output to contain 'Words', got: {}",
            result.output
        );
    }

    // --- PAR.7d: self-heal trigger ---

    use crate::plugins::heal::evaluator::RunnerEvaluator;
    use crate::plugins::heal::trigger::Healer;
    use crate::plugins::heal::{
        Candidate, Evaluator, FailureTrace, FixMemory, HealConfig, Reflector,
    };
    use crate::plugins::manifest::{PluginPermissions, PluginToolDef, PluginToolTest};
    use crate::runtimes::RuntimeManager;
    use async_trait::async_trait as par_async_trait;
    use std::collections::BTreeSet;
    use std::path::Path;
    use std::time::Duration;

    fn dummy_healer() -> Arc<Healer> {
        struct R;
        #[par_async_trait]
        impl Reflector for R {
            async fn reflect(&self, _t: &FailureTrace, _p: &[Candidate]) -> Result<Patch> {
                Ok(Patch::Retry)
            }
        }
        struct E;
        #[par_async_trait]
        impl Evaluator for E {
            async fn evaluate(&self, _p: &Patch) -> Result<BTreeSet<String>> {
                Ok(BTreeSet::new())
            }
        }
        struct M;
        #[par_async_trait]
        impl FixMemory for M {
            async fn recall(&self, _s: &str) -> Option<Patch> {
                None
            }
            async fn record(&mut self, _s: &str, _p: &Patch) {}
            async fn distill_skill(&mut self, _t: &FailureTrace, _p: &Patch) {}
        }
        Arc::new(Healer::new(
            Arc::new(R),
            Arc::new(E),
            Arc::new(Mutex::new(M)),
            1,
            HealConfig { max_attempts: 1 },
            Duration::from_secs(5),
        ))
    }

    #[test]
    fn should_repair_classifies_results() {
        assert!(should_repair(&Err(crate::ZeniiError::Plugin("x".into()))));
        assert!(should_repair(&Ok(ToolResult {
            output: String::new(),
            success: false,
            metadata: None
        })));
        assert!(!should_repair(&Ok(ToolResult {
            output: String::new(),
            success: true,
            metadata: None
        })));
    }

    #[test]
    fn apply_patch_dependency_adds_extra_deps() {
        let dir = tempfile::TempDir::new().unwrap();
        let ctx = RepairContext {
            healer: dummy_healer(),
            plugin_dir: dir.path().to_path_buf(),
            entry: "main.py".into(),
            has_tests: true,
        };
        let mut proc = PluginProcess::new("t", dir.path().join("main.py"), 5, 0).with_runner(
            Some("uv-run".into()),
            None,
            None,
        );
        apply_patch(
            &Patch::Dependency {
                add: vec!["cowsay".into()],
            },
            &ctx,
            &mut proc,
        )
        .unwrap();
        let (_program, args) = proc.command_parts();
        assert!(
            args.iter().any(|a| a == "cowsay"),
            "extra dep not injected: {args:?}"
        );
    }

    fn write_buggy_agent(dir: &Path) {
        let script = "import sys, json\n\
             for line in sys.stdin:\n\
             \x20   line = line.strip()\n\
             \x20   if not line:\n\
             \x20       continue\n\
             \x20   req = json.loads(line)\n\
             \x20   m, i = req.get('method'), req.get('id')\n\
             \x20   if m == 'info':\n\
             \x20       print(json.dumps({'jsonrpc':'2.0','result':{'name':'fix','description':'d','version':'1.0.0','parameters_schema':{}},'id':i}), flush=True)\n\
             \x20   elif m == 'execute':\n\
             \x20       ok = False  # BUG\n\
             \x20       print(json.dumps({'jsonrpc':'2.0','result':{'output':'done','success':ok},'id':i}), flush=True)\n\
             \x20   elif m == 'shutdown':\n\
             \x20       print(json.dumps({'jsonrpc':'2.0','result':None,'id':i}), flush=True)\n\
             \x20       break\n";
        std::fs::write(dir.join("main.py"), script).unwrap();
    }

    // PAR.7d — auto-repair fires through the Tool interface (the path workflows/delegation use).
    #[tokio::test]
    async fn heal_triggers_via_tool_interface_and_retries() {
        if !has_interpreter("uv") {
            eprintln!("SKIP: uv not available");
            return;
        }
        let plugin = tempfile::TempDir::new().unwrap();
        write_buggy_agent(plugin.path());
        let buggy = std::fs::read_to_string(plugin.path().join("main.py")).unwrap();
        let fixed = buggy.replace("ok = False  # BUG", "ok = True");
        let diff = diffy::create_patch(&buggy, &fixed).to_string();

        let tool_def = PluginToolDef {
            name: "fix".into(),
            description: "d".into(),
            binary: "main.py".into(),
            permissions: PluginPermissions::default(),
            runner: Some("uv-run".into()),
            package: None,
            required_runtime: None,
            tests: vec![PluginToolTest {
                input: toml::from_str("x = 1").unwrap(),
                expect: Some(toml::from_str("ok = true").unwrap()),
            }],
        };
        let cache = tempfile::TempDir::new().unwrap();
        let rt = Arc::new(RuntimeManager::from_config(
            tempfile::TempDir::new().unwrap().keep(),
            cache.path().to_path_buf(),
            false,
        ));
        let evaluator = Arc::new(RunnerEvaluator::new(
            plugin.path().to_path_buf(),
            tool_def,
            rt,
            cache.path().to_path_buf(),
            60,
            0,
        ));

        struct CannedReflector(String);
        #[par_async_trait]
        impl Reflector for CannedReflector {
            async fn reflect(&self, _t: &FailureTrace, _p: &[Candidate]) -> Result<Patch> {
                Ok(Patch::Code {
                    diff: self.0.clone(),
                })
            }
        }
        struct NoopMem;
        #[par_async_trait]
        impl FixMemory for NoopMem {
            async fn recall(&self, _s: &str) -> Option<Patch> {
                None
            }
            async fn record(&mut self, _s: &str, _p: &Patch) {}
            async fn distill_skill(&mut self, _t: &FailureTrace, _p: &Patch) {}
        }
        let healer = Arc::new(Healer::new(
            Arc::new(CannedReflector(diff)),
            evaluator,
            Arc::new(Mutex::new(NoopMem)),
            1,
            HealConfig { max_attempts: 3 },
            Duration::from_secs(60),
        ));

        let process = Arc::new(Mutex::new(
            PluginProcess::new("fix", plugin.path().join("main.py"), 60, 0).with_runner(
                Some("uv-run".into()),
                None,
                None,
            ),
        ));
        let adapter =
            PluginToolAdapter::new("fix".into(), "d".into(), serde_json::json!({}), process)
                .with_repair(RepairContext {
                    healer,
                    plugin_dir: plugin.path().to_path_buf(),
                    entry: "main.py".into(),
                    has_tests: true,
                });

        let tool: &dyn Tool = &adapter;
        let result = tool.execute(serde_json::json!({"x": 1})).await.unwrap();
        assert!(
            result.success,
            "auto-repair should fix + retry, got: {result:?}"
        );
        assert!(
            std::fs::read_to_string(plugin.path().join("main.py"))
                .unwrap()
                .contains("ok = True"),
            "live plugin entry should be patched"
        );
    }
}
