use std::sync::Arc;

use arc_swap::ArcSwap;

use crate::config::AppConfig;
use crate::event_bus::{AppEvent, EventBus};

#[cfg(feature = "channels")]
use crate::channels::message::ChannelMessage;
#[cfg(feature = "channels")]
use crate::channels::registry::ChannelRegistry;

/// Routes notification events from the EventBus to configured channel targets.
///
/// Frontend targets (toast/desktop) are handled by the frontend WebSocket listener.
/// The router only handles backend channel targets (telegram, slack, discord).
pub struct NotificationRouter {
    config: Arc<ArcSwap<AppConfig>>,
    event_bus: Arc<dyn EventBus>,
    #[cfg(feature = "channels")]
    channel_registry: Arc<ChannelRegistry>,
}

impl NotificationRouter {
    pub fn new(
        config: Arc<ArcSwap<AppConfig>>,
        event_bus: Arc<dyn EventBus>,
        #[cfg(feature = "channels")] channel_registry: Arc<ChannelRegistry>,
    ) -> Self {
        Self {
            config,
            event_bus,
            #[cfg(feature = "channels")]
            channel_registry,
        }
    }

    /// Spawn background task: subscribe to EventBus, route to channel targets.
    pub fn start(&self) -> tokio::task::JoinHandle<()> {
        let config = self.config.clone();
        let mut rx = self.event_bus.subscribe();
        #[cfg(feature = "channels")]
        let channel_registry = self.channel_registry.clone();

        tokio::spawn(async move {
            loop {
                match rx.recv().await {
                    Ok(AppEvent::SchedulerNotification {
                        job_name, message, ..
                    }) => {
                        let cfg = config.load();
                        let channel_targets = cfg
                            .notification_routing
                            .channel_targets_for("scheduler_notification");

                        for target in channel_targets {
                            let formatted =
                                Self::format_message("scheduler_notification", &job_name, &message);
                            #[cfg(feature = "channels")]
                            {
                                let name = target.to_string();
                                let msg =
                                    ChannelMessage::new(&name, &formatted).with_sender("Zenii");
                                if let Err(e) = channel_registry.send(&name, msg).await {
                                    tracing::warn!("Notification routing to {name} failed: {e}");
                                }
                            }
                            #[cfg(not(feature = "channels"))]
                            {
                                let _ = target;
                                let _ = formatted;
                            }
                        }
                    }
                    Ok(AppEvent::SchedulerJobCompleted {
                        job_name,
                        status,
                        error,
                        ..
                    }) => {
                        let cfg = config.load();
                        let channel_targets = cfg
                            .notification_routing
                            .channel_targets_for("scheduler_job_completed");

                        let detail = if let Some(ref err) = error {
                            format!("{status}: {err}")
                        } else {
                            status.clone()
                        };

                        for target in channel_targets {
                            let formatted =
                                Self::format_message("scheduler_job_completed", &job_name, &detail);
                            #[cfg(feature = "channels")]
                            {
                                let name = target.to_string();
                                let msg =
                                    ChannelMessage::new(&name, &formatted).with_sender("Zenii");
                                if let Err(e) = channel_registry.send(&name, msg).await {
                                    tracing::warn!("Notification routing to {name} failed: {e}");
                                }
                            }
                            #[cfg(not(feature = "channels"))]
                            {
                                let _ = target;
                                let _ = formatted;
                            }
                        }
                    }
                    Ok(AppEvent::Shutdown) => break,
                    Ok(_) => {} // Ignore non-notification events
                    Err(tokio::sync::broadcast::error::RecvError::Lagged(n)) => {
                        tracing::warn!("Notification router lagged, missed {n} events");
                    }
                    Err(tokio::sync::broadcast::error::RecvError::Closed) => break,
                }
            }
            tracing::info!("Notification router stopped");
        })
    }

    /// Format a notification message for a channel target.
    pub fn format_message(event_type: &str, job_name: &str, detail: &str) -> String {
        match event_type {
            "scheduler_notification" => {
                format!("[Zenii] {job_name}: {detail}")
            }
            "scheduler_job_completed" => {
                format!("[Zenii] Job \"{job_name}\" completed — {detail}")
            }
            _ => {
                format!("[Zenii] {event_type}: {job_name} — {detail}")
            }
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    // 8.12.13 — Router constructs without channels feature
    #[test]
    fn router_constructs() {
        let config = Arc::new(ArcSwap::from_pointee(AppConfig::default()));
        let event_bus: Arc<dyn EventBus> = Arc::new(crate::event_bus::TokioBroadcastBus::new(16));
        let _router = NotificationRouter::new(
            config,
            event_bus,
            #[cfg(feature = "channels")]
            Arc::new(crate::channels::registry::ChannelRegistry::new()),
        );
    }

    // 8.12.14 — format_message produces expected output
    #[test]
    fn format_message() {
        let msg =
            NotificationRouter::format_message("scheduler_notification", "daily_check", "All OK");
        assert_eq!(msg, "[Zenii] daily_check: All OK");

        let msg =
            NotificationRouter::format_message("scheduler_job_completed", "backup", "success");
        assert_eq!(msg, "[Zenii] Job \"backup\" completed — success");

        let msg = NotificationRouter::format_message("unknown", "test", "detail");
        assert_eq!(msg, "[Zenii] unknown: test — detail");
    }
}
