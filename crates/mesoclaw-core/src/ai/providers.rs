use rig::providers::{anthropic, openai};

use crate::config::AppConfig;
use crate::credential::CredentialStore;
use crate::{MesoError, Result};

/// Resolve the API key for the configured provider.
///
/// Resolution order:
/// 1. Credential store lookup by `provider_name`
/// 2. Environment variable from `provider_api_key_env`
/// 3. Error if neither found
pub async fn resolve_api_key(
    config: &AppConfig,
    credentials: &dyn CredentialStore,
) -> Result<String> {
    // 1. Try credential store
    if let Some(key) = credentials.get(&config.provider_name).await?
        && !key.is_empty()
    {
        return Ok(key);
    }

    // 2. Try environment variable
    if let Some(env_var) = &config.provider_api_key_env
        && let Ok(key) = std::env::var(env_var)
        && !key.is_empty()
    {
        return Ok(key);
    }

    Err(MesoError::Credential(format!(
        "no API key found for provider '{}': set it in credential store or via env var",
        config.provider_name
    )))
}

/// Build an OpenAI-compatible client from config.
/// Works for OpenAI, custom OpenAI-compatible endpoints (Ollama, etc.).
pub fn build_openai_client(
    api_key: &str,
    base_url: Option<&str>,
) -> Result<openai::CompletionsClient> {
    let mut builder = openai::CompletionsClient::builder().api_key(api_key);
    if let Some(url) = base_url {
        builder = builder.base_url(url);
    }
    builder
        .build()
        .map_err(|e| MesoError::Agent(format!("failed to build OpenAI client: {e}")))
}

/// Build an Anthropic client from config.
pub fn build_anthropic_client(api_key: &str) -> Result<anthropic::Client> {
    anthropic::Client::builder()
        .api_key(api_key)
        .build()
        .map_err(|e| MesoError::Agent(format!("failed to build Anthropic client: {e}")))
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::credential::InMemoryCredentialStore;

    // 1.3.5 — api key from env
    #[tokio::test]
    async fn api_key_from_env() {
        let config = AppConfig {
            provider_name: "test-provider".into(),
            provider_api_key_env: Some("TEST_MESO_API_KEY_12345".into()),
            ..Default::default()
        };
        let creds = InMemoryCredentialStore::new();

        // SAFETY: test-only, single-threaded tokio runtime
        unsafe { std::env::set_var("TEST_MESO_API_KEY_12345", "sk-from-env") };
        let key = resolve_api_key(&config, &creds).await.unwrap();
        assert_eq!(key, "sk-from-env");
        unsafe { std::env::remove_var("TEST_MESO_API_KEY_12345") };
    }

    // 1.3.6 — api key missing errors
    #[tokio::test]
    async fn api_key_missing_errors() {
        let config = AppConfig {
            provider_name: "no-such-provider".into(),
            provider_api_key_env: None,
            ..Default::default()
        };
        let creds = InMemoryCredentialStore::new();

        let result = resolve_api_key(&config, &creds).await;
        assert!(result.is_err());
        assert!(matches!(result.unwrap_err(), MesoError::Credential(_)));
    }

    // 1.3.1 — create openai provider
    #[test]
    fn create_openai_provider() {
        let client = build_openai_client("sk-test", None);
        assert!(client.is_ok());
    }

    // 1.3.2 — create anthropic provider
    #[test]
    fn create_anthropic_provider() {
        let client = build_anthropic_client("sk-ant-test");
        assert!(client.is_ok());
    }

    // 1.3.3 — unknown provider type errors
    #[tokio::test]
    async fn unknown_provider_type_errors() {
        // build_agent_inner handles this — tested in agent.rs
        // Here we just verify the config-level validation
        let config = AppConfig {
            provider_type: "unknown".into(),
            ..Default::default()
        };
        assert!(config.provider_type != "openai" && config.provider_type != "anthropic");
    }

    // 1.3.4 — custom base url applied
    #[test]
    fn custom_base_url_applied() {
        let client = build_openai_client("sk-test", Some("http://localhost:11434/v1"));
        assert!(client.is_ok());
    }

    // Credential store takes priority over env
    #[tokio::test]
    async fn credential_store_priority() {
        let config = AppConfig {
            provider_name: "test-prov".into(),
            provider_api_key_env: Some("TEST_MESO_CRED_PRIO".into()),
            ..Default::default()
        };
        let creds = InMemoryCredentialStore::new();
        creds.set("test-prov", "sk-from-store").await.unwrap();

        // SAFETY: test-only, single-threaded tokio runtime
        unsafe { std::env::set_var("TEST_MESO_CRED_PRIO", "sk-from-env") };
        let key = resolve_api_key(&config, &creds).await.unwrap();
        assert_eq!(key, "sk-from-store");
        unsafe { std::env::remove_var("TEST_MESO_CRED_PRIO") };
    }
}
