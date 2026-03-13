use std::time::Duration;

use crossterm::event::{self, Event, KeyEvent};
use serde::Deserialize;
use tokio::sync::mpsc;

/// Inbound WebSocket message from the gateway.
#[derive(Debug, Clone, Deserialize)]
#[serde(tag = "type")]
pub enum WsInbound {
    #[serde(rename = "text")]
    Text { content: String },
    #[serde(rename = "tool_call")]
    ToolCall {
        call_id: String,
        tool_name: String,
        args: serde_json::Value,
    },
    #[serde(rename = "tool_result")]
    ToolResult {
        call_id: String,
        tool_name: String,
        output: String,
        success: bool,
        duration_ms: u64,
    },
    #[serde(rename = "done")]
    Done,
    #[serde(rename = "error")]
    Error { error: String },
}

/// All events the TUI main loop processes.
pub enum AppEvent {
    Key(KeyEvent),
    Resize(u16, u16),
    Tick,
    WsMessage(WsInbound),
}

/// Polls terminal events and forwards them over a channel.
pub struct EventHandler {
    rx: mpsc::UnboundedReceiver<AppEvent>,
}

impl EventHandler {
    pub fn new_with_ws_sender(tick_rate: Duration) -> (Self, mpsc::UnboundedSender<AppEvent>) {
        let (tx, rx) = mpsc::unbounded_channel();

        let tx_clone = tx.clone();
        tokio::spawn(async move {
            loop {
                if event::poll(tick_rate).unwrap_or(false) {
                    if let Ok(evt) = event::read() {
                        let app_event = match evt {
                            Event::Key(key) => Some(AppEvent::Key(key)),
                            Event::Resize(w, h) => Some(AppEvent::Resize(w, h)),
                            _ => None,
                        };
                        if let Some(e) = app_event
                            && tx_clone.send(e).is_err()
                        {
                            break;
                        }
                    }
                } else if tx_clone.send(AppEvent::Tick).is_err() {
                    break;
                }
            }
        });

        (Self { rx }, tx)
    }

    pub async fn next(&mut self) -> Option<AppEvent> {
        self.rx.recv().await
    }
}
