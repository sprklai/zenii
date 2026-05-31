//! Failure classification + dependency extraction (PAR.5).

use super::Patch;

/// Class of a runner-based tool failure, determining the repair strategy.
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum FailureClass {
    /// Missing/incompatible dependency — repair the manifest and re-resolve.
    Dependency,
    /// Runtime/logic error — reflect on the trace and patch the code.
    Runtime,
    /// Transient (network/timeout/rate-limit) — retry without mutation.
    Transient,
    /// Needs a human (missing credentials/config) — abort with instructions.
    UserActionable,
}

/// Classify a failure from its stderr and exit code.
pub fn classify(stderr: &str, _exit_code: Option<i32>) -> FailureClass {
    let lower = stderr.to_lowercase();

    // Credentials/permissions first — a human must act.
    if lower.contains("api key")
        || lower.contains("authenticationerror")
        || lower.contains("unauthorized")
        || lower.contains("401")
        || lower.contains("403")
        || lower.contains("permission denied")
    {
        return FailureClass::UserActionable;
    }

    // Transient — retry without mutation.
    if lower.contains("timed out")
        || lower.contains("timeout")
        || lower.contains("etimedout")
        || lower.contains("econnreset")
        || lower.contains("connection refused")
        || lower.contains("rate limit")
        || lower.contains("429")
        || lower.contains("temporarily unavailable")
    {
        return FailureClass::Transient;
    }

    // Missing dependency — repair the manifest.
    if lower.contains("modulenotfounderror")
        || lower.contains("no module named")
        || lower.contains("cannot find module")
        || lower.contains("importerror")
    {
        return FailureClass::Dependency;
    }

    FailureClass::Runtime
}

/// Extract a missing Python/Node module name from stderr, if present.
pub fn extract_missing_module(stderr: &str) -> Option<String> {
    for marker in ["No module named", "Cannot find module"] {
        if let Some(idx) = stderr.find(marker)
            && let Some(name) = extract_quoted(&stderr[idx + marker.len()..])
        {
            return Some(name);
        }
    }
    None
}

/// Return the first single- or double-quoted substring.
fn extract_quoted(s: &str) -> Option<String> {
    let mut start: Option<usize> = None;
    let mut quote = ' ';
    for (i, c) in s.char_indices() {
        match start {
            None if c == '\'' || c == '"' => {
                start = Some(i + c.len_utf8());
                quote = c;
            }
            Some(begin) if c == quote => return Some(s[begin..i].to_string()),
            _ => {}
        }
    }
    None
}

/// Build a dependency patch from a failure trace's stderr.
pub fn dependency_patch(stderr: &str) -> Patch {
    let add = extract_missing_module(stderr)
        .map(|m| vec![m])
        .unwrap_or_default();
    Patch::Dependency { add }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn classify_module_not_found_as_dependency() {
        assert_eq!(
            classify("ModuleNotFoundError: No module named 'requests'", Some(1)),
            FailureClass::Dependency
        );
        assert_eq!(
            classify("Error: Cannot find module 'express'", Some(1)),
            FailureClass::Dependency
        );
    }

    #[test]
    fn classify_traceback_as_runtime() {
        let stderr = "Traceback (most recent call last):\n  File x\nValueError: bad";
        assert_eq!(classify(stderr, Some(1)), FailureClass::Runtime);
    }

    #[test]
    fn classify_timeout_as_transient() {
        assert_eq!(
            classify("urllib.error: connection timed out", Some(1)),
            FailureClass::Transient
        );
        assert_eq!(
            classify("Error: ETIMEDOUT", Some(1)),
            FailureClass::Transient
        );
    }

    #[test]
    fn classify_missing_api_key_as_user_actionable() {
        assert_eq!(
            classify("openai.AuthenticationError: missing API key", Some(1)),
            FailureClass::UserActionable
        );
        assert_eq!(
            classify("401 Unauthorized", Some(1)),
            FailureClass::UserActionable
        );
    }

    #[test]
    fn classify_unknown_defaults_to_runtime() {
        assert_eq!(classify("something odd happened", Some(1)), FailureClass::Runtime);
    }

    #[test]
    fn extract_missing_module_python_and_node() {
        assert_eq!(
            extract_missing_module("ModuleNotFoundError: No module named 'requests'").as_deref(),
            Some("requests")
        );
        assert_eq!(
            extract_missing_module("Error: Cannot find module 'express'").as_deref(),
            Some("express")
        );
        assert!(extract_missing_module("ValueError: bad").is_none());
    }

    #[test]
    fn dependency_repair_adds_missing_module() {
        let patch = dependency_patch("ModuleNotFoundError: No module named 'numpy'");
        assert_eq!(
            patch,
            Patch::Dependency {
                add: vec!["numpy".to_string()]
            }
        );
    }
}
