use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
#[serde(default)]
pub struct AppConfig {
    pub gateway_host: String,
    pub gateway_port: u16,
    pub log_level: String,
    pub data_dir: Option<String>,
    pub db_path: Option<String>,
    pub memory_db_path: Option<String>,
    pub identity_name: String,
    pub identity_description: String,
    #[serde(alias = "default_provider")]
    pub provider_name: String,
    pub provider_type: String,
    pub provider_base_url: Option<String>,
    #[serde(alias = "default_model")]
    pub provider_model_id: String,
    pub provider_api_key_env: Option<String>,
    pub security_autonomy_level: String,
    pub max_tool_retries: u32,

    // Phase 2: Memory system
    pub memory_fts_weight: f32,
    pub memory_vector_weight: f32,
    pub memory_default_limit: usize,
    pub embedding_dim: usize,
    pub embedding_cache_size: usize,

    // Phase 2: Security
    pub security_rate_limit_max: u32,
    pub security_rate_limit_window_secs: u64,
    pub security_audit_log_capacity: usize,

    // Phase 2: Tools
    pub tool_shell_timeout_secs: u64,
    pub tool_file_read_max_lines: usize,
    pub tool_file_search_max_results: usize,
    pub tool_process_list_limit: usize,

    // Web Search
    pub web_search_timeout_secs: u64,
    pub web_search_max_results: usize,

    // Phase 3: Gateway
    pub gateway_auth_token: Option<String>,
    pub ws_max_connections: usize,
    pub gateway_cors_origins: Vec<String>,

    // Phase 3: Agent
    pub agent_max_turns: usize,
    pub agent_max_tokens: usize,
    pub agent_system_prompt: Option<String>,

    // Phase 4: Identity
    pub identity_dir: Option<String>,

    // Phase 4: Skills
    pub skills_dir: Option<String>,
    pub skill_max_content_size: usize,

    // Phase 8: Credentials
    pub keyring_service_id: String,

    // Phase 8: Channels
    pub channels_enabled: Vec<String>,
    pub telegram_polling_timeout_secs: u32,
    pub telegram_dm_policy: String,
    pub telegram_retry_min_ms: u64,
    pub telegram_retry_max_ms: u64,
    pub telegram_require_group_mention: bool,

    // Phase 4: User Learning
    pub learning_enabled: bool,
    pub learning_denied_categories: Vec<String>,
    pub learning_max_observations: usize,
    pub learning_observation_ttl_days: u32,
    pub learning_min_confidence: f32,

    // Phase 8: Context Injection
    pub context_injection_enabled: bool,
    pub context_summary_model_id: String,
    pub context_summary_provider_id: String,
    pub context_reinject_gap_minutes: u32,
    pub context_reinject_message_count: u32,

    // Phase 8: Self-Evolution
    pub self_evolution_enabled: bool,
    pub learning_archive_threshold: f64,
    pub learning_archive_after_days: u32,
    pub skill_proposal_expiry_days: u32,
}

impl Default for AppConfig {
    fn default() -> Self {
        Self {
            gateway_host: "127.0.0.1".into(),
            gateway_port: 18981,
            log_level: "info".into(),
            data_dir: None,
            db_path: None,
            memory_db_path: None,
            identity_name: "MesoClaw".into(),
            identity_description: "AI-powered assistant".into(),
            provider_name: "openai".into(),
            provider_type: "openai".into(),
            provider_base_url: None,
            provider_model_id: "gpt-4o".into(),
            provider_api_key_env: None,
            security_autonomy_level: "supervised".into(),
            max_tool_retries: 3,

            // Memory
            memory_fts_weight: 0.4,
            memory_vector_weight: 0.6,
            memory_default_limit: 10,
            embedding_dim: 384,
            embedding_cache_size: 1000,

            // Security
            security_rate_limit_max: 60,
            security_rate_limit_window_secs: 60,
            security_audit_log_capacity: 1000,

            // Tools
            tool_shell_timeout_secs: 30,
            tool_file_read_max_lines: 10000,
            tool_file_search_max_results: 100,
            tool_process_list_limit: 200,

            // Web Search
            web_search_timeout_secs: 30,
            web_search_max_results: 20,

            // Gateway
            gateway_auth_token: None,
            ws_max_connections: 32,
            gateway_cors_origins: vec![],

            // Agent
            agent_max_turns: 20,
            agent_max_tokens: 4096,
            agent_system_prompt: None,

            // Identity
            identity_dir: None,

            // Skills
            skills_dir: None,
            skill_max_content_size: 100_000,

            // Credentials
            keyring_service_id: "com.sprklai.mesoclaw".into(),

            // Channels
            channels_enabled: vec![],
            telegram_polling_timeout_secs: 30,
            telegram_dm_policy: "allowlist".into(),
            telegram_retry_min_ms: 1000,
            telegram_retry_max_ms: 60_000,
            telegram_require_group_mention: true,

            // User Learning
            learning_enabled: true,
            learning_denied_categories: vec![],
            learning_max_observations: 10_000,
            learning_observation_ttl_days: 365,
            learning_min_confidence: 0.5,

            // Context Injection
            context_injection_enabled: true,
            context_summary_model_id: "gpt-4o-mini".into(),
            context_summary_provider_id: "openai".into(),
            context_reinject_gap_minutes: 30,
            context_reinject_message_count: 20,

            // Self-Evolution
            self_evolution_enabled: true,
            learning_archive_threshold: 0.3,
            learning_archive_after_days: 30,
            skill_proposal_expiry_days: 7,
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    // 15.3.40 — config context defaults
    #[test]
    fn config_context_defaults() {
        let config = AppConfig::default();
        assert!(config.context_injection_enabled);
        assert_eq!(config.context_summary_model_id, "gpt-4o-mini");
        assert_eq!(config.context_summary_provider_id, "openai");
        assert_eq!(config.context_reinject_gap_minutes, 30);
        assert_eq!(config.context_reinject_message_count, 20);
    }

    // 15.3.41 — config evolution defaults
    #[test]
    fn config_evolution_defaults() {
        let config = AppConfig::default();
        assert!(config.self_evolution_enabled);
        assert!((config.learning_archive_threshold - 0.3).abs() < f64::EPSILON);
        assert_eq!(config.learning_archive_after_days, 30);
        assert_eq!(config.skill_proposal_expiry_days, 7);
    }

    // 15.3.42 — config deserializes with new fields
    #[test]
    fn config_deserialize_with_new_fields() {
        let toml_str = r#"
            context_injection_enabled = false
            context_summary_model_id = "claude-haiku"
            context_summary_provider_id = "anthropic"
            context_reinject_gap_minutes = 60
            context_reinject_message_count = 50
            self_evolution_enabled = false
            learning_archive_threshold = 0.5
            learning_archive_after_days = 14
            skill_proposal_expiry_days = 3
        "#;

        let config: AppConfig = toml::from_str(toml_str).unwrap();
        assert!(!config.context_injection_enabled);
        assert_eq!(config.context_summary_model_id, "claude-haiku");
        assert_eq!(config.context_summary_provider_id, "anthropic");
        assert_eq!(config.context_reinject_gap_minutes, 60);
        assert_eq!(config.context_reinject_message_count, 50);
        assert!(!config.self_evolution_enabled);
        assert!((config.learning_archive_threshold - 0.5).abs() < f64::EPSILON);
        assert_eq!(config.learning_archive_after_days, 14);
        assert_eq!(config.skill_proposal_expiry_days, 3);
    }
}
