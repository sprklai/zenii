use ratatui::style::{Color, Modifier, Style};

pub struct Theme {
    pub user_message: Style,
    pub assistant_message: Style,
    pub tool_call: Style,
    pub tool_result: Style,
    pub error: Style,
    pub status_bar: Style,
    pub selected: Style,
    pub border_active: Style,
    pub border_inactive: Style,
    pub input_active: Style,
    pub input_inactive: Style,
    pub streaming_cursor: Style,
    pub help_overlay: Style,
    pub connection_ok: Style,
    pub connection_err: Style,
}

impl Default for Theme {
    fn default() -> Self {
        Self {
            user_message: Style::default().fg(Color::Green),
            assistant_message: Style::default().fg(Color::Cyan),
            tool_call: Style::default().fg(Color::Yellow),
            tool_result: Style::default().fg(Color::DarkGray),
            error: Style::default().fg(Color::Red).add_modifier(Modifier::BOLD),
            status_bar: Style::default().bg(Color::DarkGray).fg(Color::White),
            selected: Style::default().bg(Color::DarkGray).fg(Color::White),
            border_active: Style::default().fg(Color::Cyan),
            border_inactive: Style::default().fg(Color::DarkGray),
            input_active: Style::default().fg(Color::White),
            input_inactive: Style::default().fg(Color::DarkGray),
            streaming_cursor: Style::default()
                .fg(Color::Cyan)
                .add_modifier(Modifier::SLOW_BLINK),
            help_overlay: Style::default().bg(Color::Black).fg(Color::White),
            connection_ok: Style::default().fg(Color::Green),
            connection_err: Style::default().fg(Color::Red),
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn distinct_message_styles() {
        let theme = Theme::default();
        assert_ne!(theme.user_message, theme.assistant_message);
    }

    #[test]
    fn connection_status_colors() {
        let theme = Theme::default();
        assert_ne!(theme.connection_ok, theme.connection_err);
    }
}
