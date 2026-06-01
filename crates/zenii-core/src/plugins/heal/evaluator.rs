//! PAR.7b — live [`Evaluator`]: run a candidate patch against the tool's declared
//! test cases in an isolated copy of the plugin source.
//!
//! A candidate is evaluated by (1) copying `plugin_dir` to a throwaway scratch dir,
//! (2) applying the [`Patch`] (code diffs via `diffy`; dependency fixes via uv `--with`),
//! (3) running each `tool_def.tests` case through the PAR.2 runner and (4) returning the
//! set of passing case ids. The registered plugin is never mutated.

use std::collections::BTreeSet;
use std::path::{Path, PathBuf};
use std::sync::Arc;

use async_trait::async_trait;

use crate::plugins::installer::runner_program_name;
use crate::plugins::manifest::PluginToolDef;
use crate::plugins::process::PluginProcess;
use crate::runtimes::RuntimeManager;
use crate::tools::ToolResult;
use crate::{Result, ZeniiError};

use super::{Evaluator, Patch};

/// Runs candidate patches against a plugin tool's declared test cases in isolation.
pub struct RunnerEvaluator {
    plugin_dir: PathBuf,
    tool_def: PluginToolDef,
    runtime_manager: Arc<RuntimeManager>,
    cache_dir: PathBuf,
    execute_timeout_secs: u64,
    max_restart_attempts: u32,
}

impl RunnerEvaluator {
    pub fn new(
        plugin_dir: PathBuf,
        tool_def: PluginToolDef,
        runtime_manager: Arc<RuntimeManager>,
        cache_dir: PathBuf,
        execute_timeout_secs: u64,
        max_restart_attempts: u32,
    ) -> Self {
        Self {
            plugin_dir,
            tool_def,
            runtime_manager,
            cache_dir,
            execute_timeout_secs,
            max_restart_attempts,
        }
    }
}

#[async_trait]
impl Evaluator for RunnerEvaluator {
    async fn evaluate(&self, patch: &Patch) -> Result<BTreeSet<String>> {
        let runner = self.tool_def.runner.as_deref().unwrap_or_default();

        // 1. Isolated scratch copy — never touch the registered plugin.
        let scratch_root = tempfile::TempDir::new()
            .map_err(|e| ZeniiError::Plugin(format!("heal evaluate: scratch dir: {e}")))?;
        let work = scratch_root.path().join("work");
        copy_dir_recursive(&self.plugin_dir, &work)?;

        // 2. Apply the candidate (code diffs to the copy; deps deferred to uv `--with`).
        for diff in collect_code_diffs(patch) {
            apply_code_patch(&work, &diff, &self.tool_def.binary)?;
        }
        let extra_deps = collect_extra_deps(patch);

        // 3. Resolve runner + isolate the uv cache.
        let runner_path = self
            .runtime_manager
            .resolve_runner_path(runner_program_name(runner));
        let mut env = std::collections::HashMap::new();
        env.insert(
            "UV_CACHE_DIR".to_string(),
            self.cache_dir.to_string_lossy().to_string(),
        );

        // 4. Run each declared case; collect the passing ids.
        let mut passing = BTreeSet::new();
        for (i, case) in self.tool_def.tests.iter().enumerate() {
            let entry_abs = work.join(&self.tool_def.binary);
            let input = serde_json::to_value(case.input.clone()).map_err(|e| {
                ZeniiError::Plugin(format!("heal evaluate: bad case-{i} input: {e}"))
            })?;
            let mut process = PluginProcess::new(
                &self.tool_def.name,
                entry_abs,
                self.execute_timeout_secs,
                self.max_restart_attempts,
            )
            .with_runner(
                Some(runner.to_string()),
                self.tool_def.package.clone(),
                runner_path.clone(),
            )
            .with_extra_deps(extra_deps.clone())
            .with_secrets(env.clone())
            .with_scratch_dir(Some(work.join(".scratch")));

            let outcome = {
                let r = match process.spawn().await {
                    Ok(()) => process.execute(input).await,
                    Err(e) => Err(e),
                };
                let _ = process.shutdown().await;
                r
            };

            if let Ok(result) = outcome
                && expect_matches(case.expect.as_ref(), &result)
            {
                passing.insert(format!("case-{i}"));
            }
        }
        Ok(passing)
    }
}

/// Recursively copy a directory, skipping `.git`.
fn copy_dir_recursive(src: &Path, dst: &Path) -> Result<()> {
    std::fs::create_dir_all(dst)
        .map_err(|e| ZeniiError::Plugin(format!("heal evaluate: create dir: {e}")))?;
    for entry in
        std::fs::read_dir(src).map_err(|e| ZeniiError::Plugin(format!("heal evaluate: read dir: {e}")))?
    {
        let entry = entry.map_err(|e| ZeniiError::Plugin(format!("heal evaluate: dir entry: {e}")))?;
        let path = entry.path();
        let dest = dst.join(entry.file_name());
        if path.is_dir() {
            if path.file_name().is_some_and(|n| n == ".git") {
                continue;
            }
            copy_dir_recursive(&path, &dest)?;
        } else {
            std::fs::copy(&path, &dest)
                .map_err(|e| ZeniiError::Plugin(format!("heal evaluate: copy file: {e}")))?;
        }
    }
    Ok(())
}

/// Apply a unified-diff code patch within `work`. The target file is taken from the diff's
/// `+++` header when it resolves inside `work`, else the tool's entry (`default_rel`).
fn apply_code_patch(work: &Path, diff: &str, default_rel: &str) -> Result<()> {
    let target = diff_target_path(diff)
        .map(|p| work.join(p))
        .filter(|p| p.exists())
        .unwrap_or_else(|| work.join(default_rel));
    let original = std::fs::read_to_string(&target).map_err(|e| {
        ZeniiError::Plugin(format!("heal evaluate: read {}: {e}", target.display()))
    })?;
    let patch = diffy::Patch::from_str(diff)
        .map_err(|e| ZeniiError::Plugin(format!("heal evaluate: invalid diff: {e}")))?;
    let patched = diffy::apply(&original, &patch)
        .map_err(|e| ZeniiError::Plugin(format!("heal evaluate: patch conflict: {e}")))?;
    std::fs::write(&target, patched).map_err(|e| {
        ZeniiError::Plugin(format!("heal evaluate: write {}: {e}", target.display()))
    })?;
    Ok(())
}

/// Extract the target path from a unified diff's `+++` header (`b/` prefix stripped).
fn diff_target_path(diff: &str) -> Option<String> {
    for line in diff.lines() {
        if let Some(rest) = line.strip_prefix("+++ ") {
            let p = rest.split('\t').next().unwrap_or(rest).trim();
            let p = p.strip_prefix("b/").unwrap_or(p);
            if p.is_empty() || p == "/dev/null" {
                return None;
            }
            return Some(p.to_string());
        }
    }
    None
}

/// Flatten all dependency additions from a (possibly composite) patch.
fn collect_extra_deps(patch: &Patch) -> Vec<String> {
    fn walk(p: &Patch, out: &mut Vec<String>) {
        match p {
            Patch::Dependency { add } => out.extend(add.iter().cloned()),
            Patch::Composite(ps) => ps.iter().for_each(|p| walk(p, out)),
            _ => {}
        }
    }
    let mut out = Vec::new();
    walk(patch, &mut out);
    out
}

/// Flatten all code diffs from a (possibly composite) patch.
fn collect_code_diffs(patch: &Patch) -> Vec<String> {
    fn walk(p: &Patch, out: &mut Vec<String>) {
        match p {
            Patch::Code { diff } => out.push(diff.clone()),
            Patch::Composite(ps) => ps.iter().for_each(|p| walk(p, out)),
            _ => {}
        }
    }
    let mut out = Vec::new();
    walk(patch, &mut out);
    out
}

/// Whether a run result satisfies the case's `expect` contract.
///
/// `None` (or a non-table / empty table) → smoke pass iff the run succeeded. A table may set
/// `ok` (bool, must match `success`) and/or `output_contains` (substring of `output`).
fn expect_matches(expect: Option<&toml::Value>, result: &ToolResult) -> bool {
    let Some(table) = expect.and_then(|e| e.as_table()) else {
        return result.success;
    };
    let ok = table.get("ok").and_then(|v| v.as_bool());
    let contains = table.get("output_contains").and_then(|v| v.as_str());
    if ok.is_none() && contains.is_none() {
        return result.success;
    }
    if let Some(ok) = ok
        && result.success != ok
    {
        return false;
    }
    if let Some(sub) = contains
        && !result.output.contains(sub)
    {
        return false;
    }
    true
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::plugins::manifest::{PluginPermissions, PluginToolTest};

    fn tool_def(binary: &str, runner: &str, tests: Vec<PluginToolTest>) -> PluginToolDef {
        PluginToolDef {
            name: "t".into(),
            description: "d".into(),
            binary: binary.into(),
            permissions: PluginPermissions::default(),
            runner: Some(runner.into()),
            package: None,
            required_runtime: None,
            tests,
        }
    }

    fn result(success: bool, output: &str) -> ToolResult {
        ToolResult {
            output: output.into(),
            success,
            metadata: None,
        }
    }

    // --- copy isolation ---

    #[test]
    fn copy_isolates_source() {
        let src = tempfile::TempDir::new().unwrap();
        std::fs::write(src.path().join("main.py"), "original\n").unwrap();
        let dst_root = tempfile::TempDir::new().unwrap();
        let dst = dst_root.path().join("work");
        copy_dir_recursive(src.path(), &dst).unwrap();

        std::fs::write(dst.join("main.py"), "changed\n").unwrap();
        assert_eq!(
            std::fs::read_to_string(src.path().join("main.py")).unwrap(),
            "original\n",
            "mutating the copy must not affect the source"
        );
    }

    #[test]
    fn copy_skips_git_dir() {
        let src = tempfile::TempDir::new().unwrap();
        std::fs::create_dir(src.path().join(".git")).unwrap();
        std::fs::write(src.path().join(".git/HEAD"), "ref\n").unwrap();
        std::fs::write(src.path().join("main.py"), "x\n").unwrap();
        let dst_root = tempfile::TempDir::new().unwrap();
        let dst = dst_root.path().join("work");
        copy_dir_recursive(src.path(), &dst).unwrap();
        assert!(dst.join("main.py").exists());
        assert!(!dst.join(".git").exists());
    }

    // --- code patch applies to the copy only ---

    #[test]
    fn code_patch_applies_to_scratch_only() {
        let src = tempfile::TempDir::new().unwrap();
        std::fs::write(src.path().join("main.py"), "a\nb\n").unwrap();
        let dst_root = tempfile::TempDir::new().unwrap();
        let work = dst_root.path().join("work");
        copy_dir_recursive(src.path(), &work).unwrap();

        // diffy::create_patch headers are "original"/"modified" → falls back to default_rel.
        let diff = diffy::create_patch("a\nb\n", "a\nc\n").to_string();
        apply_code_patch(&work, &diff, "main.py").unwrap();

        assert_eq!(std::fs::read_to_string(work.join("main.py")).unwrap(), "a\nc\n");
        assert_eq!(
            std::fs::read_to_string(src.path().join("main.py")).unwrap(),
            "a\nb\n",
            "source untouched"
        );
    }

    // --- diff target extraction ---

    #[test]
    fn diff_target_extracted_from_header() {
        let diff = "--- a/foo.py\n+++ b/foo.py\n@@ -1 +1 @@\n-x\n+y\n";
        assert_eq!(diff_target_path(diff).as_deref(), Some("foo.py"));
    }

    #[test]
    fn diff_target_none_when_no_header() {
        assert_eq!(diff_target_path("no header here"), None);
    }

    // --- patch flattening ---

    #[test]
    fn dependency_patch_collects_extra_deps() {
        let p = Patch::Composite(vec![
            Patch::Dependency {
                add: vec!["numpy".into()],
            },
            Patch::Code { diff: "d".into() },
            Patch::Dependency {
                add: vec!["pandas".into()],
            },
        ]);
        assert_eq!(collect_extra_deps(&p), vec!["numpy", "pandas"]);
        assert_eq!(collect_code_diffs(&p), vec!["d"]);
    }

    // --- expect contract ---

    #[test]
    fn expect_none_passes_on_success() {
        assert!(expect_matches(None, &result(true, "x")));
        assert!(!expect_matches(None, &result(false, "x")));
    }

    #[test]
    fn expect_ok_requires_matching_success() {
        let expect: toml::Value = toml::from_str("ok = true").unwrap();
        assert!(expect_matches(Some(&expect), &result(true, "")));
        assert!(!expect_matches(Some(&expect), &result(false, "")));
    }

    #[test]
    fn expect_output_contains_matches() {
        let expect: toml::Value = toml::from_str(r#"output_contains = "42""#).unwrap();
        assert!(expect_matches(Some(&expect), &result(true, "answer 42")));
        assert!(!expect_matches(Some(&expect), &result(true, "answer 41")));
    }

    // --- real tier (gated on uv) ---

    use crate::plugins::test_helpers::has_interpreter;

    fn evaluator_for(
        plugin_dir: PathBuf,
        binary: &str,
        tests: Vec<PluginToolTest>,
    ) -> RunnerEvaluator {
        let rt_dir = tempfile::TempDir::new().unwrap();
        let cache_dir = tempfile::TempDir::new().unwrap();
        // Leak the temp dirs for the manager's lifetime (paths just need to exist/resolve).
        let rt = Arc::new(RuntimeManager::from_config(
            rt_dir.keep(),
            cache_dir.path().to_path_buf(),
            false,
        ));
        let td = tool_def(binary, "uv-run", tests);
        RunnerEvaluator::new(plugin_dir, td, rt, cache_dir.keep(), 60, 0)
    }

    fn case(input: &str, expect: &str) -> PluginToolTest {
        PluginToolTest {
            input: toml::from_str(input).unwrap(),
            expect: Some(toml::from_str(expect).unwrap()),
        }
    }

    /// A PEP723 JSON-RPC plugin whose `execute` returns `40 + ADDEND`.
    fn write_agent(dir: &Path, addend: u32, extra_import: Option<&str>) {
        let import = extra_import.map(|m| format!("import {m}\n")).unwrap_or_default();
        let script = format!(
            "import sys, json\n{import}\n\
             for line in sys.stdin:\n\
             \x20   line = line.strip()\n\
             \x20   if not line:\n\
             \x20       continue\n\
             \x20   req = json.loads(line)\n\
             \x20   m, i = req.get('method'), req.get('id')\n\
             \x20   if m == 'info':\n\
             \x20       print(json.dumps({{'jsonrpc':'2.0','result':{{'name':'fix','description':'d','version':'1.0.0','parameters_schema':{{}}}},'id':i}}), flush=True)\n\
             \x20   elif m == 'execute':\n\
             \x20       print(json.dumps({{'jsonrpc':'2.0','result':{{'output':str(40 + {addend}),'success':True}},'id':i}}), flush=True)\n\
             \x20   elif m == 'shutdown':\n\
             \x20       print(json.dumps({{'jsonrpc':'2.0','result':None,'id':i}}), flush=True)\n\
             \x20       break\n",
        );
        std::fs::write(dir.join("main.py"), script).unwrap();
    }

    #[tokio::test]
    async fn real_evaluate_logic_bug_fixed_by_code_patch() {
        if !has_interpreter("uv") {
            eprintln!("SKIP: uv not available");
            return;
        }
        let plugin = tempfile::TempDir::new().unwrap();
        write_agent(plugin.path(), 1, None); // buggy: outputs "41"
        let tests = vec![case("answer = 42", r#"ok = true
output_contains = "42""#)];
        let eval = evaluator_for(plugin.path().to_path_buf(), "main.py", tests);

        // No patch → buggy output "41" → no case passes.
        let none = eval.evaluate(&Patch::Retry).await.unwrap();
        assert!(none.is_empty(), "buggy agent should fail the case, got {none:?}");

        // Code patch flipping 40+1 → 40+2 makes the case pass.
        let buggy = std::fs::read_to_string(plugin.path().join("main.py")).unwrap();
        let fixed = buggy.replace("40 + 1", "40 + 2");
        let diff = diffy::create_patch(&buggy, &fixed).to_string();
        let passing = eval.evaluate(&Patch::Code { diff }).await.unwrap();
        assert_eq!(passing, BTreeSet::from(["case-0".to_string()]));
    }

    #[tokio::test]
    async fn real_evaluate_broken_import_fixed_by_dependency() {
        if !has_interpreter("uv") {
            eprintln!("SKIP: uv not available");
            return;
        }
        let plugin = tempfile::TempDir::new().unwrap();
        write_agent(plugin.path(), 2, Some("cowsay")); // needs the `cowsay` package
        let tests = vec![case("x = 1", r#"output_contains = "42""#)];
        let eval = evaluator_for(plugin.path().to_path_buf(), "main.py", tests);

        // Without the dependency the import fails → no case passes.
        let none = eval.evaluate(&Patch::Retry).await.unwrap();
        assert!(none.is_empty(), "missing import should fail, got {none:?}");

        // Dependency patch injects `--with cowsay` so the import resolves.
        let passing = eval
            .evaluate(&Patch::Dependency {
                add: vec!["cowsay".into()],
            })
            .await
            .unwrap();
        assert_eq!(passing, BTreeSet::from(["case-0".to_string()]));
    }
}
