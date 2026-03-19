use serde::{Deserialize, Serialize};

use crate::config::AppConfig;
use crate::credential::CredentialStore;

/// Setup status returned by the onboarding check.
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SetupStatus {
    /// Whether the user still needs to complete onboarding.
    pub needs_setup: bool,
    /// Which required fields are still missing.
    pub missing: Vec<String>,
    /// System-detected IANA timezone (if available).
    pub detected_timezone: Option<String>,
    /// Whether at least one AI provider has an API key and available models.
    pub has_usable_model: bool,
}

/// Check the current setup status.
///
/// If `onboarding_completed` is true in config, returns `needs_setup: false`
/// immediately — the user has already completed onboarding, even if the
/// credential store has lost API keys (e.g., macOS Keychain after dev
/// recompilation, or in-memory fallback on Linux/headless).
///
/// Otherwise, `needs_setup` is true when:
/// - `user_name` is not set, OR
/// - `user_location` is not set
///
/// API key availability does NOT gate onboarding — the chat banner handles
/// missing keys. This avoids re-triggering onboarding when the credential
/// store is inaccessible (e.g., macOS Keychain after binary recompilation).
///
/// Timezone is NOT required (auto-detected via `iana-time-zone`).
pub async fn check_setup_status<C: CredentialStore + ?Sized>(
    config: &AppConfig,
    credentials: &C,
    provider_ids: &[String],
) -> SetupStatus {
    let detected_timezone = crate::ai::context::detect_system_timezone();

    // If onboarding was explicitly completed, don't re-trigger it.
    // The `missing` array is still populated for informational purposes.
    if config.onboarding_completed {
        let has_usable_model = has_any_api_key(credentials, provider_ids).await;
        return SetupStatus {
            needs_setup: false,
            missing: vec![],
            detected_timezone,
            has_usable_model,
        };
    }

    // Migration: if profile is complete but flag wasn't set (pre-v0.0.28 user),
    // treat onboarding as done — the flag didn't exist in older versions.
    if !config.onboarding_completed
        && config.user_name.as_ref().is_some_and(|n| !n.is_empty())
        && config.user_location.as_ref().is_some_and(|l| !l.is_empty())
    {
        return SetupStatus {
            needs_setup: false,
            missing: vec![],
            detected_timezone,
            has_usable_model: has_any_api_key(credentials, provider_ids).await,
        };
    }

    let mut missing = Vec::new();

    if config.user_name.is_none() || config.user_name.as_deref() == Some("") {
        missing.push("user_name".to_string());
    }
    if config.user_location.is_none() || config.user_location.as_deref() == Some("") {
        missing.push("user_location".to_string());
    }

    // API key check is informational only — does NOT trigger onboarding.
    // The chat banner handles missing API keys gracefully.
    let has_usable_model = has_any_api_key(credentials, provider_ids).await;

    SetupStatus {
        needs_setup: !missing.is_empty(),
        missing,
        detected_timezone,
        has_usable_model,
    }
}

/// Check if any of the given provider IDs has a stored API key.
async fn has_any_api_key<C: CredentialStore + ?Sized>(
    credentials: &C,
    provider_ids: &[String],
) -> bool {
    for id in provider_ids {
        let key = format!("api_key:{id}");
        match credentials.get(&key).await {
            Ok(Some(v)) if !v.is_empty() => return true,
            Ok(_) => {} // None or empty — no key stored
            Err(e) => {
                tracing::warn!(
                    "Credential access error for {key}: {e} \
                     (on macOS, this may indicate keychain access was revoked after binary recompilation)"
                );
            }
        }
    }
    false
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::config::AppConfig;
    use crate::credential::InMemoryCredentialStore;

    fn default_config() -> AppConfig {
        AppConfig::default()
    }

    fn config_with_profile() -> AppConfig {
        let mut cfg = AppConfig::default();
        cfg.user_name = Some("Alice".into());
        cfg.user_location = Some("Toronto, Canada".into());
        cfg
    }

    #[tokio::test]
    async fn needs_setup_when_no_name() {
        let cfg = default_config();
        let creds = InMemoryCredentialStore::new();
        let status = check_setup_status(&cfg, &creds, &["openai".into()]).await;
        assert!(status.needs_setup);
        assert!(status.missing.contains(&"user_name".to_string()));
    }

    #[tokio::test]
    async fn needs_setup_when_no_location() {
        let mut cfg = default_config();
        cfg.user_name = Some("Alice".into());
        let creds = InMemoryCredentialStore::new();
        let status = check_setup_status(&cfg, &creds, &["openai".into()]).await;
        assert!(status.needs_setup);
        assert!(status.missing.contains(&"user_location".to_string()));
    }

    #[tokio::test]
    async fn no_retrigger_when_profile_complete_but_no_api_key() {
        // Profile complete + no API key = onboarding NOT re-triggered.
        // API key absence is handled by the chat banner, not onboarding.
        let cfg = config_with_profile();
        let creds = InMemoryCredentialStore::new();
        let status = check_setup_status(&cfg, &creds, &["openai".into()]).await;
        assert!(!status.needs_setup);
        assert!(!status.has_usable_model);
    }

    #[tokio::test]
    async fn migration_pre_flag_config() {
        // Pre-v0.0.28 config: user_name + user_location set, no onboarding_completed flag.
        // Should infer onboarding was completed and NOT re-trigger.
        let cfg = config_with_profile();
        assert!(!cfg.onboarding_completed); // flag defaults to false
        let creds = InMemoryCredentialStore::new();
        creds.set("api_key:openai", "sk-test").await.ok();
        let status = check_setup_status(&cfg, &creds, &["openai".into()]).await;
        assert!(!status.needs_setup);
        assert!(status.has_usable_model);
    }

    #[tokio::test]
    async fn complete_when_all_set() {
        let cfg = config_with_profile();
        let creds = InMemoryCredentialStore::new();
        creds.set("api_key:openai", "sk-test").await.ok();
        let status = check_setup_status(&cfg, &creds, &["openai".into()]).await;
        assert!(!status.needs_setup);
        assert!(status.missing.is_empty());
        assert!(status.has_usable_model);
    }

    #[tokio::test]
    async fn detected_timezone_populated() {
        let cfg = default_config();
        let creds = InMemoryCredentialStore::new();
        let status = check_setup_status(&cfg, &creds, &[]).await;
        // Should have a detected timezone on any real system
        assert!(status.detected_timezone.is_some());
        // IANA timezones contain a '/'
        assert!(
            status
                .detected_timezone
                .as_ref()
                .is_some_and(|tz| tz.contains('/'))
        );
    }

    #[tokio::test]
    async fn empty_name_treated_as_missing() {
        let mut cfg = default_config();
        cfg.user_name = Some("".into());
        cfg.user_location = Some("Toronto".into());
        let creds = InMemoryCredentialStore::new();
        creds.set("api_key:openai", "sk-test").await.ok();
        let status = check_setup_status(&cfg, &creds, &["openai".into()]).await;
        assert!(status.needs_setup);
        assert!(status.missing.contains(&"user_name".to_string()));
    }

    #[tokio::test]
    async fn ollama_no_key_profile_complete() {
        // Profile complete + Ollama with no key = onboarding NOT re-triggered.
        // has_usable_model is false but that's informational for the chat banner.
        let cfg = config_with_profile();
        let creds = InMemoryCredentialStore::new();
        let status = check_setup_status(&cfg, &creds, &["ollama".into()]).await;
        assert!(!status.needs_setup);
        assert!(!status.has_usable_model);
    }
}
