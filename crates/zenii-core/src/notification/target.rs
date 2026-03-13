use std::fmt;

use serde::{Deserialize, Serialize};

/// Delivery target for a notification event.
#[derive(Debug, Clone, PartialEq, Eq, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
#[non_exhaustive]
pub enum NotificationTarget {
    Toast,
    Desktop,
    Telegram,
    Slack,
    Discord,
}

impl NotificationTarget {
    /// Returns true if this target is a channel (handled by backend router).
    pub fn is_channel(&self) -> bool {
        matches!(self, Self::Telegram | Self::Slack | Self::Discord)
    }

    /// Returns true if this target is handled by the frontend (toast/desktop).
    pub fn is_frontend(&self) -> bool {
        matches!(self, Self::Toast | Self::Desktop)
    }
}

impl fmt::Display for NotificationTarget {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            Self::Toast => write!(f, "toast"),
            Self::Desktop => write!(f, "desktop"),
            Self::Telegram => write!(f, "telegram"),
            Self::Slack => write!(f, "slack"),
            Self::Discord => write!(f, "discord"),
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    // 8.12.1 — NotificationTarget serde round-trip (all variants)
    #[test]
    fn target_serde_roundtrip() {
        let targets = vec![
            NotificationTarget::Toast,
            NotificationTarget::Desktop,
            NotificationTarget::Telegram,
            NotificationTarget::Slack,
            NotificationTarget::Discord,
        ];

        let json = serde_json::to_string(&targets).unwrap();
        let parsed: Vec<NotificationTarget> = serde_json::from_str(&json).unwrap();
        assert_eq!(targets, parsed);

        // Verify snake_case serialization
        assert!(json.contains("\"toast\""));
        assert!(json.contains("\"desktop\""));
        assert!(json.contains("\"telegram\""));
        assert!(json.contains("\"slack\""));
        assert!(json.contains("\"discord\""));
    }

    // 8.12.2 — NotificationTarget Display format (snake_case)
    #[test]
    fn target_display() {
        assert_eq!(NotificationTarget::Toast.to_string(), "toast");
        assert_eq!(NotificationTarget::Desktop.to_string(), "desktop");
        assert_eq!(NotificationTarget::Telegram.to_string(), "telegram");
        assert_eq!(NotificationTarget::Slack.to_string(), "slack");
        assert_eq!(NotificationTarget::Discord.to_string(), "discord");
    }

    // 8.12.3 — is_channel() returns true for Telegram/Slack/Discord
    #[test]
    fn is_channel() {
        assert!(!NotificationTarget::Toast.is_channel());
        assert!(!NotificationTarget::Desktop.is_channel());
        assert!(NotificationTarget::Telegram.is_channel());
        assert!(NotificationTarget::Slack.is_channel());
        assert!(NotificationTarget::Discord.is_channel());
    }

    // 8.12.4 — is_frontend() returns true for Toast/Desktop
    #[test]
    fn is_frontend() {
        assert!(NotificationTarget::Toast.is_frontend());
        assert!(NotificationTarget::Desktop.is_frontend());
        assert!(!NotificationTarget::Telegram.is_frontend());
        assert!(!NotificationTarget::Slack.is_frontend());
        assert!(!NotificationTarget::Discord.is_frontend());
    }
}
