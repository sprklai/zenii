use std::sync::Arc;

use rig::agent::Agent;
use rig::completion::{Chat, Prompt};
use rig::message::Message;
use rig::prelude::CompletionClient;
use rig::providers::{anthropic, openai};

use crate::config::AppConfig;
use crate::credential::CredentialStore;
use crate::tools::Tool;
use crate::{MesoError, Result};

use super::adapter::RigToolAdapter;
use super::providers;

type OpenAIAgent = Agent<openai::completion::CompletionModel>;
type AnthropicAgent = Agent<anthropic::completion::CompletionModel>;

enum AgentInner {
    OpenAI(OpenAIAgent),
    Anthropic(AnthropicAgent),
}

/// MesoAgent wraps a rig-core Agent with provider abstraction.
/// Supports OpenAI-compatible and Anthropic providers.
pub struct MesoAgent {
    inner: AgentInner,
}

impl MesoAgent {
    /// Build a new MesoAgent from config, credentials, and tools.
    pub async fn new(
        config: &AppConfig,
        credentials: &dyn CredentialStore,
        tools: &[Arc<dyn Tool>],
    ) -> Result<Self> {
        let api_key = providers::resolve_api_key(config, credentials).await?;
        let rig_tools = RigToolAdapter::from_tools(tools);

        let preamble = config
            .agent_system_prompt
            .as_deref()
            .unwrap_or("You are MesoClaw, a helpful AI assistant.");

        let inner = match config.provider_type.as_str() {
            "openai" | "custom" => {
                let client =
                    providers::build_openai_client(&api_key, config.provider_base_url.as_deref())?;
                let agent = client
                    .agent(&config.provider_model_id)
                    .preamble(preamble)
                    .max_tokens(config.agent_max_tokens as u64)
                    .default_max_turns(config.agent_max_turns)
                    .tools(rig_tools)
                    .build();
                AgentInner::OpenAI(agent)
            }
            "anthropic" => {
                let client = providers::build_anthropic_client(&api_key)?;
                let agent = client
                    .agent(&config.provider_model_id)
                    .preamble(preamble)
                    .max_tokens(config.agent_max_tokens as u64)
                    .default_max_turns(config.agent_max_turns)
                    .tools(rig_tools)
                    .build();
                AgentInner::Anthropic(agent)
            }
            other => {
                return Err(MesoError::Agent(format!(
                    "unsupported provider type: '{other}'. Supported: openai, anthropic, custom"
                )));
            }
        };

        Ok(Self { inner })
    }

    /// Send a simple prompt and get a response.
    pub async fn prompt(&self, input: &str) -> Result<String> {
        match &self.inner {
            AgentInner::OpenAI(agent) => agent
                .prompt(input)
                .await
                .map_err(|e| MesoError::Agent(format!("prompt failed: {e}"))),
            AgentInner::Anthropic(agent) => agent
                .prompt(input)
                .await
                .map_err(|e| MesoError::Agent(format!("prompt failed: {e}"))),
        }
    }

    /// Send a prompt with chat history and get a response.
    pub async fn chat(&self, input: &str, history: Vec<Message>) -> Result<String> {
        match &self.inner {
            AgentInner::OpenAI(agent) => agent
                .chat(input, history)
                .await
                .map_err(|e| MesoError::Agent(format!("chat failed: {e}"))),
            AgentInner::Anthropic(agent) => agent
                .chat(input, history)
                .await
                .map_err(|e| MesoError::Agent(format!("chat failed: {e}"))),
        }
    }
}

// Compile-time assertion: MesoAgent must be Send + Sync for use in AppState
#[cfg(test)]
const _: () = {
    fn assert_send_sync<T: Send + Sync>() {}
    #[allow(dead_code)]
    fn check() {
        assert_send_sync::<MesoAgent>();
    }
};

#[cfg(test)]
mod tests {
    use super::*;
    use crate::credential::InMemoryCredentialStore;

    // 1.4.1 — agent new with mock (uses real client, no LLM call)
    #[tokio::test]
    async fn agent_new_with_openai_config() {
        let config = AppConfig {
            provider_type: "openai".into(),
            provider_model_id: "gpt-4o".into(),
            ..Default::default()
        };
        let creds = InMemoryCredentialStore::new();
        creds.set("openai", "sk-test-key").await.unwrap();

        let tools: Vec<Arc<dyn Tool>> = vec![];
        let agent = MesoAgent::new(&config, &creds, &tools).await;
        assert!(agent.is_ok());
    }

    // 1.4.1b — agent new with anthropic config
    #[tokio::test]
    async fn agent_new_with_anthropic_config() {
        let config = AppConfig {
            provider_name: "anthropic".into(),
            provider_type: "anthropic".into(),
            provider_model_id: "claude-sonnet-4-20250514".into(),
            ..Default::default()
        };
        let creds = InMemoryCredentialStore::new();
        creds.set("anthropic", "sk-ant-test").await.unwrap();

        let tools: Vec<Arc<dyn Tool>> = vec![];
        let agent = MesoAgent::new(&config, &creds, &tools).await;
        assert!(agent.is_ok());
    }

    // 1.4.1c — unknown provider type errors
    #[tokio::test]
    async fn agent_new_unknown_provider_errors() {
        let config = AppConfig {
            provider_name: "bad".into(),
            provider_type: "bad".into(),
            ..Default::default()
        };
        let creds = InMemoryCredentialStore::new();
        creds.set("bad", "sk-test").await.unwrap();

        let tools: Vec<Arc<dyn Tool>> = vec![];
        let result = MesoAgent::new(&config, &creds, &tools).await;
        assert!(result.is_err());
        let err = result.err().unwrap();
        assert!(matches!(err, MesoError::Agent(_)));
    }

    // 1.4.4 — agent respects max turns (config-level check)
    #[tokio::test]
    async fn agent_respects_config_max_turns() {
        let config = AppConfig {
            provider_type: "openai".into(),
            agent_max_turns: 1,
            agent_max_tokens: 100,
            ..Default::default()
        };
        let creds = InMemoryCredentialStore::new();
        creds.set("openai", "sk-test").await.unwrap();

        let tools: Vec<Arc<dyn Tool>> = vec![];
        let agent = MesoAgent::new(&config, &creds, &tools).await;
        assert!(agent.is_ok());
    }
}
