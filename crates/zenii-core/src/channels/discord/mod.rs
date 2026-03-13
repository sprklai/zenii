pub mod config;

use std::collections::HashMap;
use std::sync::Arc;
use std::sync::atomic::{AtomicU8, Ordering};

use async_trait::async_trait;
use serenity::all::{ChannelId, Context, EventHandler, GatewayIntents, Message, Ready};
use tokio::sync::{mpsc, watch};
use tracing::{debug, error, info};

use crate::Result;
use crate::credential::CredentialStore;
use crate::error::ZeniiError;

use super::message::ChannelMessage;
use super::traits::{Channel, ChannelLifecycle, ChannelSender, ChannelStatus};

use config::DiscordConfig;

// Status values
const STATUS_DISCONNECTED: u8 = 0;
const STATUS_CONNECTING: u8 = 1;
const STATUS_CONNECTED: u8 = 2;

/// Required Discord Gateway intents.
pub const REQUIRED_INTENTS: u64 = (1 << 9) | (1 << 12) | (1 << 15);
// GatewayIntents::GUILD_MESSAGES (1 << 9) = 512
// GatewayIntents::DIRECT_MESSAGES (1 << 12) = 4096
// GatewayIntents::MESSAGE_CONTENT (1 << 15) = 32768

/// Discord channel implementation using serenity.
pub struct DiscordChannel {
    config: DiscordConfig,
    display_name: String,
    status: AtomicU8,
    credentials: Arc<dyn CredentialStore>,
    http: tokio::sync::OnceCell<Arc<serenity::http::Http>>,
    shutdown_tx: watch::Sender<bool>,
    shutdown_rx: watch::Receiver<bool>,
}

impl DiscordChannel {
    pub fn new(config: DiscordConfig, credentials: Arc<dyn CredentialStore>) -> Self {
        let (shutdown_tx, shutdown_rx) = watch::channel(false);
        Self {
            config,
            display_name: "discord".to_string(),
            status: AtomicU8::new(STATUS_DISCONNECTED),
            credentials,
            http: tokio::sync::OnceCell::new(),
            shutdown_tx,
            shutdown_rx,
        }
    }

    pub fn with_name(mut self, name: &str) -> Self {
        self.display_name = name.to_string();
        self
    }

    /// Check if a guild is allowed by the allowlist.
    pub fn is_guild_allowed(&self, guild_id: u64) -> bool {
        self.config.is_guild_allowed(guild_id)
    }

    /// Check if a channel is allowed by the allowlist.
    pub fn is_channel_allowed(&self, channel_id: u64) -> bool {
        self.config.is_channel_allowed(channel_id)
    }

    /// Check if a message should be skipped (bot messages).
    pub fn should_skip_bot_message(is_bot: bool) -> bool {
        is_bot
    }

    fn status_from_u8(val: u8) -> ChannelStatus {
        match val {
            STATUS_CONNECTING => ChannelStatus::Connecting,
            STATUS_CONNECTED => ChannelStatus::Connected,
            _ => ChannelStatus::Disconnected,
        }
    }
}

#[async_trait]
impl ChannelSender for DiscordChannel {
    fn channel_type(&self) -> &str {
        "discord"
    }

    async fn send_message(&self, message: ChannelMessage) -> Result<()> {
        let http = self
            .http
            .get()
            .ok_or_else(|| ZeniiError::Channel("discord: not connected".into()))?;

        let channel_id_str = message
            .metadata
            .get("channel_id")
            .ok_or_else(|| ZeniiError::Channel("discord: missing channel_id in metadata".into()))?;

        let channel_id: u64 = channel_id_str.parse().map_err(|_| {
            ZeniiError::Channel(format!("discord: invalid channel_id: {channel_id_str}"))
        })?;

        ChannelId::new(channel_id)
            .say(http.as_ref(), &message.content)
            .await
            .map_err(|e| ZeniiError::Channel(format!("discord send failed: {e}")))?;

        Ok(())
    }
}

#[async_trait]
impl ChannelLifecycle for DiscordChannel {
    fn display_name(&self) -> &str {
        &self.display_name
    }

    async fn connect(&self) -> Result<()> {
        self.status.store(STATUS_CONNECTING, Ordering::SeqCst);

        let token = self
            .credentials
            .get("channel:discord:token")
            .await
            .map_err(|e| ZeniiError::Channel(format!("discord: credential error: {e}")))?
            .ok_or_else(|| {
                self.status.store(STATUS_DISCONNECTED, Ordering::SeqCst);
                ZeniiError::Channel("discord: bot token not configured".into())
            })?;

        let http = Arc::new(serenity::http::Http::new(&token));

        // Validate token by calling get_current_user
        let user = http.get_current_user().await.map_err(|e| {
            self.status.store(STATUS_DISCONNECTED, Ordering::SeqCst);
            ZeniiError::Channel(format!("discord: get_current_user failed: {e}"))
        })?;

        info!("Discord bot connected: {} (id={})", user.name, user.id);

        let _ = self.http.set(http);
        self.status.store(STATUS_CONNECTED, Ordering::SeqCst);
        Ok(())
    }

    async fn disconnect(&self) -> Result<()> {
        let _ = self.shutdown_tx.send(true);
        self.status.store(STATUS_DISCONNECTED, Ordering::SeqCst);
        info!("Discord channel disconnected");
        Ok(())
    }

    fn status(&self) -> ChannelStatus {
        Self::status_from_u8(self.status.load(Ordering::SeqCst))
    }

    fn create_sender(&self) -> Box<dyn ChannelSender> {
        Box::new(DiscordSender {
            http: self.http.get().cloned(),
        })
    }
}

/// Internal event handler for serenity gateway.
struct MesoHandler {
    tx: mpsc::Sender<ChannelMessage>,
    config: DiscordConfig,
}

#[async_trait]
impl EventHandler for MesoHandler {
    async fn message(&self, _ctx: Context, msg: Message) {
        // Skip bot messages
        if msg.author.bot {
            return;
        }

        let channel_id = msg.channel_id.get();

        // Check guild allowlist
        if let Some(guild_id) = msg.guild_id
            && !self.config.is_guild_allowed(guild_id.get())
        {
            debug!(
                "Discord: dropping message from disallowed guild {}",
                guild_id.get()
            );
            return;
        }

        // Check channel allowlist
        if !self.config.is_channel_allowed(channel_id) {
            debug!("Discord: dropping message from disallowed channel {channel_id}");
            return;
        }

        let content = msg.content.clone();
        if content.is_empty() {
            return;
        }

        let sender_name = msg.author.name.clone();
        let mut metadata = HashMap::new();
        metadata.insert("channel_id".into(), channel_id.to_string());
        if let Some(guild_id) = msg.guild_id {
            metadata.insert("guild_id".into(), guild_id.get().to_string());
        }

        let channel_msg = ChannelMessage::new("discord", &content)
            .with_sender(&sender_name)
            .with_metadata(metadata);

        if let Err(e) = self.tx.send(channel_msg).await {
            error!("Discord: failed to send to router: {e}");
        }
    }

    async fn ready(&self, _ctx: Context, ready: Ready) {
        info!("Discord bot ready: {}", ready.user.name);
    }
}

#[async_trait]
impl Channel for DiscordChannel {
    async fn listen(&self, tx: mpsc::Sender<ChannelMessage>) -> Result<()> {
        let token = self
            .credentials
            .get("channel:discord:token")
            .await
            .map_err(|e| ZeniiError::Channel(format!("discord: credential error: {e}")))?
            .ok_or_else(|| {
                ZeniiError::Channel("discord: not connected, call connect() first".into())
            })?;

        let intents = GatewayIntents::from_bits_truncate(REQUIRED_INTENTS);

        let handler = MesoHandler {
            tx,
            config: self.config.clone(),
        };

        let mut client = serenity::Client::builder(&token, intents)
            .event_handler(handler)
            .await
            .map_err(|e| ZeniiError::Channel(format!("discord: client build failed: {e}")))?;

        let shard_manager = client.shard_manager.clone();
        let mut shutdown_rx = self.shutdown_rx.clone();

        info!("Discord listen loop started (gateway)");

        tokio::select! {
            result = client.start() => {
                if let Err(e) = result {
                    error!("Discord gateway error: {e}");
                    self.status.store(STATUS_DISCONNECTED, Ordering::SeqCst);
                    return Err(ZeniiError::Channel(format!("discord gateway error: {e}")));
                }
                // client.start() returned Ok — gateway closed gracefully
                self.status.store(STATUS_DISCONNECTED, Ordering::SeqCst);
            }
            Ok(()) = shutdown_rx.changed() => {
                if *shutdown_rx.borrow() {
                    info!("Discord listen loop: shutdown signal received");
                    shard_manager.shutdown_all().await;
                }
            }
        }

        info!("Discord listen loop stopped");
        Ok(())
    }

    async fn health_check(&self) -> bool {
        if self.status.load(Ordering::SeqCst) != STATUS_CONNECTED {
            return false;
        }
        if let Some(http) = self.http.get() {
            http.get_current_user().await.is_ok()
        } else {
            false
        }
    }

    async fn on_agent_start(&self, recipient: Option<&str>) {
        if let Some(http) = self.http.get()
            && let Some(channel_id_str) = recipient
            && let Ok(channel_id) = channel_id_str.parse::<u64>()
        {
            let _ = ChannelId::new(channel_id)
                .broadcast_typing(http.as_ref())
                .await;
        }
    }

    async fn on_tool_use(&self, _tool_name: &str, recipient: Option<&str>) {
        // Refresh typing indicator (Discord typing expires after ~10s)
        if let Some(http) = self.http.get()
            && let Some(channel_id_str) = recipient
            && let Ok(channel_id) = channel_id_str.parse::<u64>()
        {
            let _ = ChannelId::new(channel_id)
                .broadcast_typing(http.as_ref())
                .await;
        }
    }

    async fn on_agent_complete(&self, _recipient: Option<&str>) {
        // Typing stops automatically when the bot sends a message, no-op
    }
}

/// Lightweight send-only handle for Discord.
struct DiscordSender {
    http: Option<Arc<serenity::http::Http>>,
}

#[async_trait]
impl ChannelSender for DiscordSender {
    fn channel_type(&self) -> &str {
        "discord"
    }

    async fn send_message(&self, message: ChannelMessage) -> Result<()> {
        let http = self
            .http
            .as_ref()
            .ok_or_else(|| ZeniiError::Channel("discord sender: not connected".into()))?;

        let channel_id_str = message
            .metadata
            .get("channel_id")
            .ok_or_else(|| ZeniiError::Channel("discord: missing channel_id in metadata".into()))?;

        let channel_id: u64 = channel_id_str.parse().map_err(|_| {
            ZeniiError::Channel(format!("discord: invalid channel_id: {channel_id_str}"))
        })?;

        ChannelId::new(channel_id)
            .say(http.as_ref(), &message.content)
            .await
            .map_err(|e| ZeniiError::Channel(format!("discord send failed: {e}")))?;

        Ok(())
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    use crate::credential::InMemoryCredentialStore;

    fn test_credentials() -> Arc<dyn CredentialStore> {
        Arc::new(InMemoryCredentialStore::new())
    }

    fn test_config() -> DiscordConfig {
        DiscordConfig {
            allowed_guild_ids: vec![111, 222],
            allowed_channel_ids: vec![333, 444],
        }
    }

    // 8.8.8 — Discord on_agent_start does not panic
    #[tokio::test]
    async fn discord_on_agent_start() {
        let ch = DiscordChannel::new(test_config(), test_credentials());
        ch.on_agent_start(Some("user1")).await;
    }

    // 8.8.9 — Discord on_agent_complete is no-op (typing auto-stops)
    #[tokio::test]
    async fn discord_on_agent_complete() {
        let ch = DiscordChannel::new(test_config(), test_credentials());
        ch.on_agent_complete(None).await;
    }

    #[test]
    fn channel_type_discord() {
        let ch = DiscordChannel::new(test_config(), test_credentials());
        assert_eq!(ch.channel_type(), "discord");
    }

    #[test]
    fn initial_status_disconnected() {
        let ch = DiscordChannel::new(test_config(), test_credentials());
        assert_eq!(ch.status(), ChannelStatus::Disconnected);
    }

    #[test]
    fn guild_allowlist() {
        let ch = DiscordChannel::new(test_config(), test_credentials());
        assert!(ch.is_guild_allowed(111));
        assert!(ch.is_guild_allowed(222));
        assert!(!ch.is_guild_allowed(999));
    }

    #[test]
    fn channel_allowlist() {
        let ch = DiscordChannel::new(test_config(), test_credentials());
        assert!(ch.is_channel_allowed(333));
        assert!(ch.is_channel_allowed(444));
        assert!(!ch.is_channel_allowed(999));
    }

    #[test]
    fn bot_messages_skipped() {
        assert!(DiscordChannel::should_skip_bot_message(true));
        assert!(!DiscordChannel::should_skip_bot_message(false));
    }

    #[test]
    fn empty_allowlist_allows_all() {
        let ch = DiscordChannel::new(DiscordConfig::default(), test_credentials());
        assert!(ch.is_guild_allowed(999));
        assert!(ch.is_channel_allowed(999));
    }

    #[test]
    fn required_intents() {
        // Verify the intent bits are correct
        let guild_messages = 1u64 << 9;
        let direct_messages = 1u64 << 12;
        let message_content = 1u64 << 15;

        assert_eq!(
            REQUIRED_INTENTS,
            guild_messages | direct_messages | message_content
        );
        // MESSAGE_CONTENT must be included
        assert!(REQUIRED_INTENTS & message_content != 0);
    }

    // Connect fails without token
    #[tokio::test]
    async fn connect_fails_without_token() {
        let ch = DiscordChannel::new(test_config(), test_credentials());
        let result = ch.connect().await;
        assert!(result.is_err());
        assert_eq!(ch.status(), ChannelStatus::Disconnected);
    }

    // Send fails without connection
    #[tokio::test]
    async fn send_fails_without_connection() {
        let ch = DiscordChannel::new(test_config(), test_credentials());
        let msg = ChannelMessage::new("discord", "test");
        let result = ch.send_message(msg).await;
        assert!(result.is_err());
    }

    // Disconnect sends shutdown signal
    #[tokio::test]
    async fn disconnect_sends_shutdown() {
        let ch = DiscordChannel::new(test_config(), test_credentials());
        ch.disconnect().await.unwrap();
        assert_eq!(ch.status(), ChannelStatus::Disconnected);
        assert!(*ch.shutdown_rx.borrow());
    }
}
