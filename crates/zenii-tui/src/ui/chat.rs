use ratatui::Frame;
use ratatui::layout::Rect;
use ratatui::style::{Modifier, Style};
use ratatui::text::{Line, Span};
use ratatui::widgets::{
    Block, Borders, Paragraph, Scrollbar, ScrollbarOrientation, ScrollbarState, Wrap,
};

use crate::app::{App, AppMode, ChatStatus};
use crate::markdown;

pub fn render_chat(frame: &mut Frame, area: Rect, app: &App) {
    let is_active = matches!(app.mode, AppMode::Chat | AppMode::Input);
    let border_style = if is_active {
        app.theme.border_active
    } else {
        app.theme.border_inactive
    };

    let block = Block::default()
        .title(" Chat ")
        .borders(Borders::ALL)
        .border_style(border_style);

    let inner = block.inner(area);

    if app.messages.is_empty() && app.streaming_buffer.is_empty() {
        let placeholder = Paragraph::new(Line::from(Span::styled(
            "Start a conversation...",
            Style::default().add_modifier(Modifier::DIM),
        )))
        .block(block);
        frame.render_widget(placeholder, area);
        return;
    }

    let mut lines: Vec<Line<'static>> = Vec::new();

    for msg in &app.messages {
        let (prefix, style) = if msg.role == "user" {
            ("You: ", app.theme.user_message)
        } else {
            ("AI: ", app.theme.assistant_message)
        };

        lines.push(Line::from(Span::styled(
            prefix.to_string(),
            style.add_modifier(Modifier::BOLD),
        )));

        let content_lines = markdown::markdown_to_lines(&msg.content);
        for line in content_lines {
            lines.push(line);
        }

        // Tool calls
        for tool in &msg.tool_calls {
            let icon = match tool.success {
                Some(true) => "\u{2713}",
                Some(false) => "\u{2717}",
                None => "\u{26A1}",
            };
            lines.push(Line::from(Span::styled(
                format!(
                    "  {icon} {} ({}ms)",
                    tool.tool_name,
                    tool.duration_ms.unwrap_or(0)
                ),
                app.theme.tool_call,
            )));
            if let Some(ref output) = tool.output {
                let preview = if output.len() > 200 {
                    format!("{}...", &output[..200])
                } else {
                    output.clone()
                };
                lines.push(Line::from(Span::styled(
                    format!("    {preview}"),
                    app.theme.tool_result,
                )));
            }
        }

        lines.push(Line::from("")); // spacing between messages
    }

    // Streaming buffer
    if !app.streaming_buffer.is_empty() {
        lines.push(Line::from(Span::styled(
            "AI: ".to_string(),
            app.theme.assistant_message.add_modifier(Modifier::BOLD),
        )));
        let buffer_lines = markdown::markdown_to_lines(&app.streaming_buffer);
        for line in buffer_lines {
            lines.push(line);
        }
        if app.chat_status == ChatStatus::Streaming {
            lines.push(Line::from(Span::styled(
                "\u{258C}".to_string(),
                app.theme.streaming_cursor,
            )));
        }
    }

    let total_lines = lines.len();
    let visible = inner.height as usize;

    // Clamp scroll
    let scroll_offset = if total_lines <= visible {
        0
    } else if app.scroll_offset > total_lines - visible {
        total_lines - visible
    } else {
        app.scroll_offset
    };

    let paragraph = Paragraph::new(lines.clone())
        .block(block)
        .wrap(Wrap { trim: false })
        .scroll((scroll_offset as u16, 0));

    frame.render_widget(paragraph, area);

    // Scrollbar
    if total_lines > visible {
        let mut scrollbar_state = ScrollbarState::new(total_lines)
            .position(scroll_offset)
            .viewport_content_length(visible);
        let scrollbar = Scrollbar::new(ScrollbarOrientation::VerticalRight);
        frame.render_stateful_widget(
            scrollbar,
            area.inner(ratatui::layout::Margin {
                vertical: 1,
                horizontal: 0,
            }),
            &mut scrollbar_state,
        );
    }
}
