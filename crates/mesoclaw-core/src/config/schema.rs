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
    pub default_provider: String,
    pub default_model: String,
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
            default_provider: "openai".into(),
            default_model: "gpt-4o".into(),
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
        }
    }
}
