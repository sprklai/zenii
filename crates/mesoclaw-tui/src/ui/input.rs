use ratatui::Frame;
use ratatui::layout::Rect;
use ratatui::style::{Modifier, Style};
use ratatui::text::{Line, Span};
use ratatui::widgets::{Block, Borders, Paragraph};

use crate::app::{App, AppMode, ChatStatus};

pub fn render_input(frame: &mut Frame, area: Rect, app: &App) {
    let is_active = app.mode == AppMode::Input;
    let border_style = if is_active {
        app.theme.border_active
    } else {
        app.theme.border_inactive
    };

    let block = Block::default()
        .borders(Borders::ALL)
        .border_style(border_style);

    if app.chat_status == ChatStatus::Streaming {
        let streaming = Paragraph::new(Line::from(Span::styled(
            " Streaming...",
            app.theme.streaming_cursor,
        )))
        .block(block);
        frame.render_widget(streaming, area);
        return;
    }

    if !is_active && app.input.content.is_empty() {
        let placeholder = Paragraph::new(Line::from(Span::styled(
            " Type a message... (press 'i' to start)",
            Style::default().add_modifier(Modifier::DIM),
        )))
        .block(block);
        frame.render_widget(placeholder, area);
        return;
    }

    let input_text = &app.input.content;
    let char_count = input_text.chars().count();

    let content = Line::from(vec![
        Span::raw(format!(" {input_text}")),
        Span::styled(
            format!(" [{char_count}]"),
            Style::default().add_modifier(Modifier::DIM),
        ),
    ]);

    let paragraph = Paragraph::new(content).block(block);
    frame.render_widget(paragraph, area);

    // Set cursor position when in input mode
    if is_active {
        let inner = area.inner(ratatui::layout::Margin {
            vertical: 1,
            horizontal: 1,
        });
        let cursor_x = inner.x + app.input.cursor_pos as u16 + 1; // +1 for leading space
        let cursor_y = inner.y;
        if cursor_x < inner.x + inner.width {
            frame.set_cursor_position((cursor_x, cursor_y));
        }
    }
}
