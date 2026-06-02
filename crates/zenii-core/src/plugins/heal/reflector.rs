//! PAR.7c — live [`Reflector`]: an LLM reads a failure trace and proposes a code patch.
//!
//! GEPA-style reflection: the prompt carries the failure's stderr/exit plus summaries of
//! prior candidates ("Actionable Side Information"), and the model is asked to return a
//! unified diff. The LLM is accessed through the [`ReflectionModel`] seam so the reflection
//! orchestration is unit-testable without a live (paid) provider.

use std::sync::Arc;

use async_trait::async_trait;

use crate::{Result, ZeniiError};

use super::{Candidate, FailureTrace, Patch, Reflector};

/// Default cap on how many characters of the trace are injected into the prompt.
pub const DEFAULT_TRACE_CHAR_LIMIT: usize = 4000;

/// Minimal completion seam over the agent (mockable in tests).
#[async_trait]
pub trait ReflectionModel: Send + Sync {
    async fn complete(&self, prompt: &str) -> Result<String>;
}

#[cfg(feature = "ai")]
#[async_trait]
impl ReflectionModel for crate::ai::agent::ZeniiAgent {
    async fn complete(&self, prompt: &str) -> Result<String> {
        Ok(self.prompt(prompt).await?.output)
    }
}

/// Reflective patcher backed by an LLM.
pub struct AgentReflector {
    model: Arc<dyn ReflectionModel>,
    trace_char_limit: usize,
}

impl AgentReflector {
    pub fn new(model: Arc<dyn ReflectionModel>) -> Self {
        Self {
            model,
            trace_char_limit: DEFAULT_TRACE_CHAR_LIMIT,
        }
    }

    /// Override the prompt trace-size cap (proxy for the token budget; full budget is
    /// enforced by the heal trigger in PAR.7d).
    pub fn with_trace_char_limit(mut self, limit: usize) -> Self {
        self.trace_char_limit = limit;
        self
    }
}

#[async_trait]
impl Reflector for AgentReflector {
    async fn reflect(&self, trace: &FailureTrace, prior: &[Candidate]) -> Result<Patch> {
        let prompt = build_reflection_prompt(trace, prior, self.trace_char_limit);
        let response = self.model.complete(&prompt).await?;
        let diff = extract_diff(&response)?;
        Ok(Patch::Code { diff })
    }
}

/// Build the reflection prompt from the trace + prior candidates (GEPA side info).
fn build_reflection_prompt(
    trace: &FailureTrace,
    prior: &[Candidate],
    trace_char_limit: usize,
) -> String {
    let exit = trace
        .exit_code
        .map(|c| c.to_string())
        .unwrap_or_else(|| "unknown".into());
    let mut prompt = String::new();
    prompt.push_str(
        "A runner-based tool failed. Diagnose the root cause and produce a fix as a unified diff.\n\n",
    );
    prompt.push_str(&format!("Exit code: {exit}\n"));
    prompt.push_str("Stderr:\n");
    prompt.push_str(&truncate(&trace.stderr, trace_char_limit));
    prompt.push_str("\n\n");
    if !prior.is_empty() {
        prompt.push_str("Previously attempted candidates (none fully fixed the tool):\n");
        for c in prior {
            prompt.push_str(&format!(
                "- {}: passed {} case(s); {}\n",
                c.id,
                c.passing.len(),
                patch_kind(&c.patch)
            ));
        }
        prompt.push('\n');
    }
    prompt.push_str(
        "Respond with ONLY a unified diff inside a ```diff code block. No explanations.\n",
    );
    prompt
}

/// Short human label for a patch, used in prior-candidate summaries.
fn patch_kind(patch: &Patch) -> &'static str {
    match patch {
        Patch::Dependency { .. } => "dependency fix",
        Patch::Code { .. } => "code patch",
        Patch::Retry => "retry (no mutation)",
        Patch::Composite(_) => "composite fix",
    }
}

/// Truncate to `limit` characters (UTF-8 safe), appending an ellipsis marker.
fn truncate(s: &str, limit: usize) -> String {
    if s.chars().count() <= limit {
        return s.to_string();
    }
    let head: String = s.chars().take(limit).collect();
    format!("{head}…[truncated]")
}

/// Extract a unified diff from an LLM response: a ```diff/```patch fence first, then any
/// fenced block that looks like a diff, then a raw diff, else error.
fn extract_diff(response: &str) -> Result<String> {
    let blocks = fenced_blocks(response);
    for (lang, body) in &blocks {
        if matches!(lang.as_deref(), Some("diff") | Some("patch")) && !body.trim().is_empty() {
            return Ok(body.clone());
        }
    }
    for (_lang, body) in &blocks {
        if looks_like_diff(body) {
            return Ok(body.clone());
        }
    }
    if looks_like_diff(response) {
        return Ok(response.trim().to_string());
    }
    Err(ZeniiError::Plugin(
        "reflection produced no unified diff".into(),
    ))
}

/// Whether text resembles a unified diff (a hunk header plus a file marker).
fn looks_like_diff(s: &str) -> bool {
    s.contains("@@") && (s.contains("--- ") || s.contains("+++ "))
}

/// Parse fenced code blocks → `(language, body)` pairs.
fn fenced_blocks(text: &str) -> Vec<(Option<String>, String)> {
    let mut blocks = Vec::new();
    let mut lines = text.lines();
    while let Some(line) = lines.next() {
        let Some(rest) = line.trim_start().strip_prefix("```") else {
            continue;
        };
        let lang = rest.trim();
        let lang = (!lang.is_empty()).then(|| lang.to_string());
        let mut body = String::new();
        for l in lines.by_ref() {
            if l.trim_start().starts_with("```") {
                break;
            }
            body.push_str(l);
            body.push('\n');
        }
        blocks.push((lang, body));
    }
    blocks
}

#[cfg(test)]
mod tests {
    use std::collections::BTreeSet;

    use super::*;

    fn trace(stderr: &str, exit: Option<i32>) -> FailureTrace {
        FailureTrace {
            stdout: String::new(),
            stderr: stderr.into(),
            exit_code: exit,
            signature: "sig".into(),
        }
    }

    fn candidate(id: &str, patch: Patch, passing: &[&str]) -> Candidate {
        Candidate {
            id: id.into(),
            patch,
            passing: passing.iter().map(|s| s.to_string()).collect::<BTreeSet<_>>(),
        }
    }

    struct MockModel(String);
    #[async_trait]
    impl ReflectionModel for MockModel {
        async fn complete(&self, _prompt: &str) -> Result<String> {
            Ok(self.0.clone())
        }
    }

    struct ErrModel;
    #[async_trait]
    impl ReflectionModel for ErrModel {
        async fn complete(&self, _prompt: &str) -> Result<String> {
            Err(ZeniiError::Agent("model unavailable".into()))
        }
    }

    const SAMPLE_DIFF: &str = "--- a/main.py\n+++ b/main.py\n@@ -1 +1 @@\n-x = 1\n+x = 2\n";

    // --- prompt building ---

    #[test]
    fn build_prompt_includes_stderr_and_exit() {
        let p = build_reflection_prompt(
            &trace("ValueError: bad input", Some(2)),
            &[],
            DEFAULT_TRACE_CHAR_LIMIT,
        );
        assert!(p.contains("ValueError: bad input"));
        assert!(p.contains("Exit code: 2"));
    }

    #[test]
    fn build_prompt_includes_prior_candidates() {
        let prior = [candidate("c1", Patch::Dependency { add: vec!["numpy".into()] }, &["t1"])];
        let p = build_reflection_prompt(&trace("boom", Some(1)), &prior, DEFAULT_TRACE_CHAR_LIMIT);
        assert!(p.contains("c1"));
        assert!(p.contains("passed 1 case"));
        assert!(p.contains("dependency fix"));
    }

    #[test]
    fn build_prompt_truncates_long_stderr() {
        let long = "e".repeat(10_000);
        let p = build_reflection_prompt(&trace(&long, Some(1)), &[], 100);
        assert!(p.contains("[truncated]"));
        assert!(!p.contains(&"e".repeat(10_000)));
    }

    // --- diff extraction ---

    #[test]
    fn extract_diff_from_fenced_diff_block() {
        let resp = format!("Here is the fix:\n```diff\n{SAMPLE_DIFF}```\n");
        let diff = extract_diff(&resp).unwrap();
        assert!(diff.contains("+x = 2"));
    }

    #[test]
    fn extract_diff_from_plain_fence_with_hunk() {
        let resp = format!("```\n{SAMPLE_DIFF}```");
        let diff = extract_diff(&resp).unwrap();
        assert!(diff.contains("@@"));
    }

    #[test]
    fn extract_diff_errors_when_absent() {
        let resp = "I suggest you add the missing import at the top of the file.";
        assert!(extract_diff(resp).is_err());
    }

    // --- reflect orchestration ---

    #[tokio::test]
    async fn reflect_returns_code_patch_from_model() {
        let model = Arc::new(MockModel(format!("```diff\n{SAMPLE_DIFF}```")));
        let reflector = AgentReflector::new(model);
        let patch = reflector.reflect(&trace("ValueError", Some(1)), &[]).await.unwrap();
        match patch {
            Patch::Code { diff } => assert!(diff.contains("+x = 2")),
            other => panic!("expected Code patch, got {other:?}"),
        }
    }

    #[tokio::test]
    async fn reflect_propagates_model_error() {
        let reflector = AgentReflector::new(Arc::new(ErrModel));
        let err = reflector.reflect(&trace("x", Some(1)), &[]).await;
        assert!(err.is_err());
    }

    #[tokio::test]
    async fn reflect_errors_when_model_returns_no_diff() {
        let model = Arc::new(MockModel("no diff here, just prose".into()));
        let reflector = AgentReflector::new(model);
        assert!(reflector.reflect(&trace("x", Some(1)), &[]).await.is_err());
    }
}
