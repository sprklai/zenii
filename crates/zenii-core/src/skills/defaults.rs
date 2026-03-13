pub const DEFAULT_SYSTEM_PROMPT: &str = include_str!("defaults/system-prompt.md");
pub const DEFAULT_SUMMARIZE: &str = include_str!("defaults/summarize.md");
pub const DEFAULT_ENVIRONMENT_AWARENESS: &str = include_str!("defaults/environment-awareness.md");

/// All bundled skills as (id, content) pairs.
pub const BUNDLED_SKILLS: &[(&str, &str)] = &[
    ("system-prompt", DEFAULT_SYSTEM_PROMPT),
    ("summarize", DEFAULT_SUMMARIZE),
    ("environment-awareness", DEFAULT_ENVIRONMENT_AWARENESS),
];

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn bundled_system_prompt_skill_not_empty() {
        assert!(!DEFAULT_SYSTEM_PROMPT.is_empty());
        assert!(DEFAULT_SYSTEM_PROMPT.contains("system-prompt"));
    }

    #[test]
    fn bundled_summarize_skill_not_empty() {
        assert!(!DEFAULT_SUMMARIZE.is_empty());
        assert!(DEFAULT_SUMMARIZE.contains("summarize"));
    }

    #[test]
    fn bundled_environment_awareness_skill_not_empty() {
        assert!(!DEFAULT_ENVIRONMENT_AWARENESS.is_empty());
        assert!(DEFAULT_ENVIRONMENT_AWARENESS.contains("environment-awareness"));
    }

    #[test]
    fn bundled_skills_contains_environment_awareness() {
        assert!(
            BUNDLED_SKILLS
                .iter()
                .any(|(id, _)| *id == "environment-awareness"),
            "BUNDLED_SKILLS should contain environment-awareness"
        );
    }
}
