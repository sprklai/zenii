use std::collections::hash_map::DefaultHasher;
use std::hash::{Hash, Hasher};

use serde::{Deserialize, Serialize};

use tracing::debug;

use crate::Result;
use crate::config::AppConfig;
use crate::db::{self, DbPool};
use crate::identity::SoulLoader;
use crate::skills::SkillRegistry;
use crate::tools::ToolRegistry;
use crate::user::UserLearner;

/// Boot-time system context, computed once on startup.
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct BootContext {
    pub os: String,
    pub arch: String,
    pub hostname: String,
    pub locale: String,
    pub region: String,
}

impl BootContext {
    /// Compute boot context from the current system.
    pub fn from_system() -> Self {
        let os = format!("{} {}", std::env::consts::OS, os_version());
        let arch = std::env::consts::ARCH.to_string();
        let hostname = sysinfo::System::host_name().unwrap_or_else(|| "unknown".into());
        let locale = std::env::var("LANG")
            .or_else(|_| std::env::var("LC_ALL"))
            .unwrap_or_else(|_| "en_US.UTF-8".into());
        let region = infer_region_from_timezone();

        Self {
            os,
            arch,
            hostname,
            locale,
            region,
        }
    }
}

impl Default for BootContext {
    fn default() -> Self {
        Self::from_system()
    }
}

/// Context injection level determined per-request.
#[derive(Debug, Clone, PartialEq, Eq)]
pub enum ContextLevel {
    /// Full context: identity + runtime + user + capabilities
    Full,
    /// Minimal one-liner: identity + runtime
    Minimal,
    /// Conversation summary + full context (for resumed sessions)
    Summary,
}

/// A cached context summary stored in the database.
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ContextSummary {
    pub key: String,
    pub summary: String,
    pub source_hash: String,
    pub generated_at: String,
    pub model_id: String,
}

/// Manages context injection for the AI agent.
pub struct ContextEngine {
    db: DbPool,
    config: std::sync::Arc<AppConfig>,
    /// Runtime-mutable enabled flag (from AppState AtomicBool).
    enabled: bool,
}

impl ContextEngine {
    pub fn new(db: DbPool, config: std::sync::Arc<AppConfig>, enabled: bool) -> Self {
        Self {
            db,
            config,
            enabled,
        }
    }

    /// Determine the appropriate context level based on session state.
    pub fn determine_context_level(
        &self,
        message_count: usize,
        last_message_at: Option<&chrono::DateTime<chrono::Utc>>,
        _has_summary: bool,
        is_resumed: bool,
    ) -> ContextLevel {
        // New session — always full
        if message_count == 0 {
            debug!("Context level: Full (new session)");
            return ContextLevel::Full;
        }

        // Resumed session with prior messages — use summary
        if is_resumed && message_count > 0 {
            debug!("Context level: Summary (resumed session, {message_count} messages)");
            return ContextLevel::Summary;
        }

        // Check time gap
        if let Some(last_at) = last_message_at {
            let gap = chrono::Utc::now() - *last_at;
            if gap.num_minutes() >= self.config.context_reinject_gap_minutes as i64 {
                debug!(
                    "Context level: Full (time gap {}min >= {}min threshold)",
                    gap.num_minutes(),
                    self.config.context_reinject_gap_minutes
                );
                return ContextLevel::Full;
            }
        }

        // Check message count threshold
        if message_count >= self.config.context_reinject_message_count as usize {
            debug!(
                "Context level: Full (message count {message_count} >= {} threshold)",
                self.config.context_reinject_message_count
            );
            return ContextLevel::Full;
        }

        debug!("Context level: Minimal (continuing conversation, {message_count} messages)");
        ContextLevel::Minimal
    }

    /// Compose the full context preamble based on context level.
    pub async fn compose(
        &self,
        level: &ContextLevel,
        boot_context: &BootContext,
        model_display: &str,
        session_id: Option<&str>,
        conversation_summary: Option<&str>,
    ) -> Result<String> {
        if !self.enabled {
            debug!("Context injection disabled, using fallback preamble");
            return Ok(self
                .config
                .agent_system_prompt
                .clone()
                .unwrap_or_else(|| "You are MesoClaw, a helpful AI assistant.".into()));
        }

        debug!(
            "Composing context: level={level:?}, model={model_display}, session={}",
            session_id.unwrap_or("none")
        );
        match level {
            ContextLevel::Full => {
                self.compose_full(boot_context, model_display, session_id)
                    .await
            }
            ContextLevel::Minimal => Ok(self.compose_minimal(boot_context, model_display)),
            ContextLevel::Summary => {
                self.compose_with_summary(
                    boot_context,
                    model_display,
                    session_id,
                    conversation_summary,
                )
                .await
            }
        }
    }

    /// Compose full context with all tiers.
    async fn compose_full(
        &self,
        boot_context: &BootContext,
        model_display: &str,
        session_id: Option<&str>,
    ) -> Result<String> {
        let mut parts = Vec::new();

        // Overall summary (Tier 3)
        if let Some(overall) = self.get_cached_summary("overall").await? {
            parts.push(overall.summary);
        }

        // Environment section (Tier 2 + Tier 1)
        parts.push("## Environment".into());
        parts.push(format!(
            "OS: {} | Arch: {} | Host: {} | Locale: {} | Region: {}",
            boot_context.os,
            boot_context.arch,
            boot_context.hostname,
            boot_context.locale,
            boot_context.region,
        ));
        parts.push(self.dynamic_runtime(model_display, session_id));

        // Identity summary (Tier 3)
        if let Some(identity) = self.get_cached_summary("identity").await? {
            parts.push("## Your Identity".into());
            parts.push(identity.summary);
        }

        // User summary (Tier 3) — only if observations exist
        if let Some(user) = self.get_cached_summary("user").await? {
            parts.push("## User Context".into());
            parts.push(user.summary);
        }

        // Capabilities summary (Tier 3)
        if let Some(caps) = self.get_cached_summary("capabilities").await? {
            parts.push("## Your Capabilities".into());
            parts.push(caps.summary);
        }

        // Guidance to avoid redundant tool calls
        parts.push("You already know the current date, time, timezone, OS, hostname, and architecture from this context. Do not call tools to retrieve information already provided above.".into());

        // Config override
        if let Some(ref override_prompt) = self.config.agent_system_prompt {
            parts.push(override_prompt.clone());
        }

        Ok(parts.join("\n\n"))
    }

    /// Compose minimal one-liner context.
    pub fn compose_minimal(&self, boot_context: &BootContext, model_display: &str) -> String {
        let now = chrono::Local::now();
        format!(
            "MesoClaw — AI assistant | {} | {} {} | {}",
            now.format("%a %b %-d %Y %H:%M %Z"),
            boot_context.os,
            boot_context.arch,
            model_display,
        )
    }

    /// Compose context with conversation summary for resumed sessions.
    async fn compose_with_summary(
        &self,
        boot_context: &BootContext,
        model_display: &str,
        session_id: Option<&str>,
        conversation_summary: Option<&str>,
    ) -> Result<String> {
        let mut full = self
            .compose_full(boot_context, model_display, session_id)
            .await?;

        if let Some(summary) = conversation_summary {
            full.push_str("\n\n## Prior Conversation\n");
            full.push_str(summary);
        }

        Ok(full)
    }

    /// Generate dynamic runtime context (Tier 1).
    pub fn dynamic_runtime(&self, model_display: &str, session_id: Option<&str>) -> String {
        let now = chrono::Local::now();
        let tz_name = now.format("%Z").to_string();
        let tz_offset = now.format("%:z").to_string();

        format!(
            "Date: {} | Day: {} | Timezone: {} (UTC{}) | Model: {} | Session: {}",
            now.format("%Y-%m-%dT%H:%M:%S"),
            now.format("%A"),
            tz_name,
            tz_offset,
            model_display,
            session_id.unwrap_or("new session"),
        )
    }

    /// Get a cached summary from the database.
    pub async fn get_cached_summary(&self, key: &str) -> Result<Option<ContextSummary>> {
        let key = key.to_string();
        db::with_db(&self.db, move |conn| {
            let result = conn.query_row(
                "SELECT key, summary, source_hash, generated_at, model_id
                 FROM context_summaries WHERE key = ?1",
                rusqlite::params![key],
                |row| {
                    Ok(ContextSummary {
                        key: row.get(0)?,
                        summary: row.get(1)?,
                        source_hash: row.get(2)?,
                        generated_at: row.get(3)?,
                        model_id: row.get(4)?,
                    })
                },
            );
            match result {
                Ok(s) => Ok(Some(s)),
                Err(rusqlite::Error::QueryReturnedNoRows) => Ok(None),
                Err(e) => Err(crate::MesoError::Sqlite(e)),
            }
        })
        .await
    }

    /// Store a summary in the database cache.
    pub async fn store_summary(
        &self,
        key: &str,
        summary: &str,
        source_hash: &str,
        model_id: &str,
    ) -> Result<()> {
        let key = key.to_string();
        let summary = summary.to_string();
        let source_hash = source_hash.to_string();
        let model_id = model_id.to_string();

        db::with_db(&self.db, move |conn| {
            conn.execute(
                "INSERT INTO context_summaries (key, summary, source_hash, model_id)
                 VALUES (?1, ?2, ?3, ?4)
                 ON CONFLICT(key) DO UPDATE SET
                    summary = excluded.summary,
                    source_hash = excluded.source_hash,
                    generated_at = datetime('now'),
                    model_id = excluded.model_id",
                rusqlite::params![key, summary, source_hash, model_id],
            )
            .map_err(crate::MesoError::from)?;
            Ok(())
        })
        .await
    }

    /// Check if a summary needs regeneration by comparing source hashes.
    pub async fn needs_regeneration(&self, key: &str, current_hash: &str) -> Result<bool> {
        match self.get_cached_summary(key).await? {
            Some(cached) => Ok(cached.source_hash != current_hash),
            None => Ok(true),
        }
    }

    /// Generate summaries for all context sections using source content.
    /// This populates the DB cache with summaries of identity, user, and capabilities.
    /// The actual LLM-based summary generation is handled externally;
    /// this method stores pre-computed summaries.
    pub async fn store_all_summaries(
        &self,
        soul_loader: &SoulLoader,
        user_learner: &UserLearner,
        tools: &ToolRegistry,
        skill_registry: &SkillRegistry,
    ) -> Result<()> {
        // Identity summary
        let identity = soul_loader.get().await;
        let identity_content: String = identity
            .files
            .values()
            .map(|f| format!("{}:\n{}", f.name, f.content))
            .collect::<Vec<_>>()
            .join("\n\n");
        let identity_hash = compute_hash(&identity_content);

        if self.needs_regeneration("identity", &identity_hash).await? {
            let summary = format!(
                "{} v{}: {}",
                identity.meta.name, identity.meta.version, identity.meta.description,
            );
            self.store_summary("identity", &summary, &identity_hash, "builtin")
                .await?;
        }

        // User summary
        let user_context = user_learner.build_context().await?;
        let user_hash = compute_hash(&user_context);

        if !user_context.is_empty() && self.needs_regeneration("user", &user_hash).await? {
            self.store_summary("user", &user_context, &user_hash, "builtin")
                .await?;
        }

        // Capabilities summary
        let tool_names: Vec<String> = tools
            .to_vec()
            .iter()
            .map(|t| t.name().to_string())
            .collect();
        let skill_list = skill_registry.list().await;
        let skill_names: Vec<String> = skill_list.iter().map(|s| s.id.clone()).collect();
        let caps_content = format!(
            "Tools: {}\nSkills: {}",
            tool_names.join(", "),
            skill_names.join(", ")
        );
        let caps_hash = compute_hash(&caps_content);

        if self.needs_regeneration("capabilities", &caps_hash).await? {
            let summary = format!(
                "{} tools: {}. {} skills: {}.",
                tool_names.len(),
                tool_names.join(", "),
                skill_names.len(),
                skill_names.join(", "),
            );
            self.store_summary("capabilities", &summary, &caps_hash, "builtin")
                .await?;
        }

        // Overall summary (combination)
        let identity_summary = self
            .get_cached_summary("identity")
            .await?
            .map(|s| s.summary)
            .unwrap_or_default();
        let user_summary = self
            .get_cached_summary("user")
            .await?
            .map(|s| s.summary)
            .unwrap_or_default();
        let caps_summary = self
            .get_cached_summary("capabilities")
            .await?
            .map(|s| s.summary)
            .unwrap_or_default();

        let overall_content = format!("{}\n{}\n{}", identity_summary, user_summary, caps_summary);
        let overall_hash = compute_hash(&overall_content);

        if self.needs_regeneration("overall", &overall_hash).await? {
            let mut overall_parts = vec![identity_summary];
            if !user_summary.is_empty() {
                overall_parts.push(format!("User: {user_summary}"));
            }
            if !caps_summary.is_empty() {
                overall_parts.push(caps_summary);
            }
            let overall = overall_parts.join(" | ");
            self.store_summary("overall", &overall, &overall_hash, "builtin")
                .await?;
        }

        Ok(())
    }
}

/// Compute a simple hash of content for change detection.
pub fn compute_hash(content: &str) -> String {
    let mut hasher = DefaultHasher::new();
    content.hash(&mut hasher);
    format!("{:016x}", hasher.finish())
}

fn os_version() -> String {
    use sysinfo::System;
    System::long_os_version().unwrap_or_else(|| System::os_version().unwrap_or_default())
}

fn infer_region_from_timezone() -> String {
    let tz = std::env::var("TZ").unwrap_or_default();
    if tz.contains("America/New_York")
        || tz.contains("America/Detroit")
        || tz.contains("US/Eastern")
    {
        "Eastern US".into()
    } else if tz.contains("America/Chicago") || tz.contains("US/Central") {
        "Central US".into()
    } else if tz.contains("America/Denver") || tz.contains("US/Mountain") {
        "Mountain US".into()
    } else if tz.contains("America/Los_Angeles") || tz.contains("US/Pacific") {
        "Pacific US".into()
    } else if tz.contains("Europe/") {
        "Europe".into()
    } else if tz.contains("Asia/") {
        "Asia".into()
    } else {
        // Try to infer from chrono offset
        let offset = chrono::Local::now().offset().local_minus_utc() / 3600;
        match offset {
            -5 => "Eastern US".into(),
            -6 => "Central US".into(),
            -7 => "Mountain US".into(),
            -8 => "Pacific US".into(),
            0 => "UTC/UK".into(),
            1 => "Central Europe".into(),
            5..=6 => "South Asia".into(),
            8 => "East Asia".into(),
            9 => "Japan/Korea".into(),
            _ => format!("UTC{:+}", offset),
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::db;
    use tempfile::TempDir;

    async fn setup() -> (TempDir, ContextEngine) {
        let dir = TempDir::new().unwrap();
        let db_path = dir.path().join("test.db");
        let pool = db::init_pool(&db_path).unwrap();
        db::with_db(&pool, db::run_migrations).await.unwrap();

        let config = std::sync::Arc::new(AppConfig::default());
        let engine = ContextEngine::new(pool, config, true);
        (dir, engine)
    }

    // 15.3.1 — compose returns fallback when disabled
    #[tokio::test]
    async fn compose_returns_empty_when_disabled() {
        let dir = TempDir::new().unwrap();
        let db_path = dir.path().join("test.db");
        let pool = db::init_pool(&db_path).unwrap();
        db::with_db(&pool, db::run_migrations).await.unwrap();

        let config = std::sync::Arc::new(AppConfig::default());
        let engine = ContextEngine::new(pool, config, false);
        let boot = BootContext::from_system();

        let result = engine
            .compose(&ContextLevel::Full, &boot, "gpt-4o", None, None)
            .await
            .unwrap();
        assert_eq!(result, "You are MesoClaw, a helpful AI assistant.");
    }

    // 15.3.2 — compose includes runtime line
    #[tokio::test]
    async fn compose_includes_runtime_line() {
        let (_dir, engine) = setup().await;
        let boot = BootContext::from_system();

        let result = engine
            .compose(&ContextLevel::Full, &boot, "gpt-4o", Some("sess-1"), None)
            .await
            .unwrap();
        assert!(result.contains("Date:"));
        assert!(result.contains("Model: gpt-4o"));
        assert!(result.contains("Session: sess-1"));
    }

    // 15.3.3 — compose includes cached identity summary
    #[tokio::test]
    async fn compose_includes_cached_identity_summary() {
        let (_dir, engine) = setup().await;
        engine
            .store_summary("identity", "MesoClaw: a helpful assistant", "hash1", "test")
            .await
            .unwrap();
        let boot = BootContext::from_system();

        let result = engine
            .compose(&ContextLevel::Full, &boot, "gpt-4o", None, None)
            .await
            .unwrap();
        assert!(result.contains("Your Identity"));
        assert!(result.contains("MesoClaw: a helpful assistant"));
    }

    // 15.3.4 — compose includes user summary when observations exist
    #[tokio::test]
    async fn compose_includes_user_summary_when_observations_exist() {
        let (_dir, engine) = setup().await;
        engine
            .store_summary("user", "Rust developer, uses bun", "hash2", "test")
            .await
            .unwrap();
        let boot = BootContext::from_system();

        let result = engine
            .compose(&ContextLevel::Full, &boot, "gpt-4o", None, None)
            .await
            .unwrap();
        assert!(result.contains("User Context"));
        assert!(result.contains("Rust developer, uses bun"));
    }

    // 15.3.5 — compose skips user summary when no observations
    #[tokio::test]
    async fn compose_skips_user_summary_when_no_observations() {
        let (_dir, engine) = setup().await;
        let boot = BootContext::from_system();

        let result = engine
            .compose(&ContextLevel::Full, &boot, "gpt-4o", None, None)
            .await
            .unwrap();
        assert!(!result.contains("User Context"));
    }

    // 15.3.6 — compose includes capabilities summary
    #[tokio::test]
    async fn compose_includes_capabilities_summary() {
        let (_dir, engine) = setup().await;
        engine
            .store_summary(
                "capabilities",
                "9 tools: web_search, shell, etc.",
                "hash3",
                "test",
            )
            .await
            .unwrap();
        let boot = BootContext::from_system();

        let result = engine
            .compose(&ContextLevel::Full, &boot, "gpt-4o", None, None)
            .await
            .unwrap();
        assert!(result.contains("Your Capabilities"));
        assert!(result.contains("9 tools"));
    }

    // 15.3.7 — compose includes overall summary
    #[tokio::test]
    async fn compose_includes_overall_summary() {
        let (_dir, engine) = setup().await;
        engine
            .store_summary(
                "overall",
                "MesoClaw AI assistant for developers",
                "hash4",
                "test",
            )
            .await
            .unwrap();
        let boot = BootContext::from_system();

        let result = engine
            .compose(&ContextLevel::Full, &boot, "gpt-4o", None, None)
            .await
            .unwrap();
        assert!(result.contains("MesoClaw AI assistant for developers"));
    }

    // 15.3.8 — compose appends config override
    #[tokio::test]
    async fn context_compose_appends_config_override() {
        let dir = TempDir::new().unwrap();
        let db_path = dir.path().join("test.db");
        let pool = db::init_pool(&db_path).unwrap();
        db::with_db(&pool, db::run_migrations).await.unwrap();

        let config = std::sync::Arc::new(AppConfig {
            agent_system_prompt: Some("Always be concise.".into()),
            ..Default::default()
        });
        let engine = ContextEngine::new(pool, config, true);
        let boot = BootContext::from_system();

        let result = engine
            .compose(&ContextLevel::Full, &boot, "gpt-4o", None, None)
            .await
            .unwrap();
        assert!(result.contains("Always be concise."));
    }

    // 15.3.9 — dynamic_runtime includes time and day
    #[test]
    fn dynamic_runtime_includes_time_and_day() {
        let config = std::sync::Arc::new(AppConfig::default());
        let dir = TempDir::new().unwrap();
        let db_path = dir.path().join("test.db");
        let pool = db::init_pool(&db_path).unwrap();
        let engine = ContextEngine::new(pool, config, true);

        let runtime = engine.dynamic_runtime("gpt-4o", Some("sess-1"));
        assert!(runtime.contains("Date:"));
        assert!(runtime.contains("Day:"));
        assert!(runtime.contains("Model: gpt-4o"));
        assert!(runtime.contains("Session: sess-1"));
    }

    // 15.3.10 — dynamic_runtime includes timezone
    #[test]
    fn dynamic_runtime_includes_timezone() {
        let config = std::sync::Arc::new(AppConfig::default());
        let dir = TempDir::new().unwrap();
        let db_path = dir.path().join("test.db");
        let pool = db::init_pool(&db_path).unwrap();
        let engine = ContextEngine::new(pool, config, true);

        let runtime = engine.dynamic_runtime("gpt-4o", None);
        assert!(runtime.contains("Timezone:"));
        assert!(runtime.contains("UTC"));
    }

    // 15.3.10b — boot_context includes os and arch
    #[test]
    fn boot_context_includes_os_and_arch() {
        let boot = BootContext::from_system();
        assert!(!boot.os.is_empty());
        assert!(!boot.arch.is_empty());
        assert!(boot.arch == std::env::consts::ARCH);
    }

    // 15.3.10c — boot_context includes locale and region
    #[test]
    fn boot_context_includes_locale_and_region() {
        let boot = BootContext::from_system();
        assert!(!boot.locale.is_empty());
        assert!(!boot.region.is_empty());
    }

    // 15.3.11 — store and get cached summary
    #[tokio::test]
    async fn store_and_get_cached_summary() {
        let (_dir, engine) = setup().await;

        engine
            .store_summary("test_key", "test summary", "abc123", "gpt-4o-mini")
            .await
            .unwrap();

        let result = engine.get_cached_summary("test_key").await.unwrap();
        assert!(result.is_some());
        let summary = result.unwrap();
        assert_eq!(summary.key, "test_key");
        assert_eq!(summary.summary, "test summary");
        assert_eq!(summary.source_hash, "abc123");
        assert_eq!(summary.model_id, "gpt-4o-mini");
    }

    // 15.3.12 — summary regenerates when source hash changes
    #[tokio::test]
    async fn summary_regenerates_when_source_hash_changes() {
        let (_dir, engine) = setup().await;

        engine
            .store_summary("key1", "old summary", "hash_v1", "model")
            .await
            .unwrap();

        assert!(!engine.needs_regeneration("key1", "hash_v1").await.unwrap());
        assert!(engine.needs_regeneration("key1", "hash_v2").await.unwrap());
    }

    // 15.3.12b — determine_context_level: new session returns Full
    #[test]
    fn determine_context_level_new_session_returns_full() {
        let config = std::sync::Arc::new(AppConfig::default());
        let dir = TempDir::new().unwrap();
        let db_path = dir.path().join("test.db");
        let pool = db::init_pool(&db_path).unwrap();
        let engine = ContextEngine::new(pool, config, true);

        let level = engine.determine_context_level(0, None, false, false);
        assert_eq!(level, ContextLevel::Full);
    }

    // 15.3.12c — determine_context_level: continuing returns Minimal
    #[test]
    fn determine_context_level_continuing_returns_minimal() {
        let config = std::sync::Arc::new(AppConfig::default());
        let dir = TempDir::new().unwrap();
        let db_path = dir.path().join("test.db");
        let pool = db::init_pool(&db_path).unwrap();
        let engine = ContextEngine::new(pool, config, true);

        let recent = chrono::Utc::now() - chrono::Duration::minutes(5);
        let level = engine.determine_context_level(3, Some(&recent), false, false);
        assert_eq!(level, ContextLevel::Minimal);
    }

    // 15.3.12d — determine_context_level: gap exceeded returns Full
    #[test]
    fn determine_context_level_gap_exceeded_returns_full() {
        let config = std::sync::Arc::new(AppConfig {
            context_reinject_gap_minutes: 30,
            ..Default::default()
        });
        let dir = TempDir::new().unwrap();
        let db_path = dir.path().join("test.db");
        let pool = db::init_pool(&db_path).unwrap();
        let engine = ContextEngine::new(pool, config, true);

        let old = chrono::Utc::now() - chrono::Duration::minutes(60);
        let level = engine.determine_context_level(5, Some(&old), false, false);
        assert_eq!(level, ContextLevel::Full);
    }

    // 15.3.12e — determine_context_level: count exceeded returns Full
    #[test]
    fn determine_context_level_count_exceeded_returns_full() {
        let config = std::sync::Arc::new(AppConfig {
            context_reinject_message_count: 20,
            ..Default::default()
        });
        let dir = TempDir::new().unwrap();
        let db_path = dir.path().join("test.db");
        let pool = db::init_pool(&db_path).unwrap();
        let engine = ContextEngine::new(pool, config, true);

        let recent = chrono::Utc::now() - chrono::Duration::minutes(1);
        let level = engine.determine_context_level(25, Some(&recent), false, false);
        assert_eq!(level, ContextLevel::Full);
    }

    // 15.3.12f — determine_context_level: resumed returns Summary
    #[test]
    fn determine_context_level_resumed_returns_summary() {
        let config = std::sync::Arc::new(AppConfig::default());
        let dir = TempDir::new().unwrap();
        let db_path = dir.path().join("test.db");
        let pool = db::init_pool(&db_path).unwrap();
        let engine = ContextEngine::new(pool, config, true);

        let level = engine.determine_context_level(10, None, true, true);
        assert_eq!(level, ContextLevel::Summary);
    }

    // 15.3.12g — compose_minimal is one-liner
    #[test]
    fn compose_minimal_is_one_liner() {
        let config = std::sync::Arc::new(AppConfig::default());
        let dir = TempDir::new().unwrap();
        let db_path = dir.path().join("test.db");
        let pool = db::init_pool(&db_path).unwrap();
        let engine = ContextEngine::new(pool, config, true);
        let boot = BootContext::from_system();

        let minimal = engine.compose_minimal(&boot, "gpt-4o");
        assert!(!minimal.contains('\n'));
        assert!(minimal.contains("MesoClaw"));
    }

    // 15.3.12h — compose_with_summary includes prior conversation
    #[tokio::test]
    async fn compose_with_summary_includes_prior_conversation() {
        let (_dir, engine) = setup().await;
        let boot = BootContext::from_system();

        let result = engine
            .compose(
                &ContextLevel::Summary,
                &boot,
                "gpt-4o",
                Some("sess-1"),
                Some("User asked about Rust async patterns."),
            )
            .await
            .unwrap();
        assert!(result.contains("Prior Conversation"));
        assert!(result.contains("Rust async patterns"));
    }
}
