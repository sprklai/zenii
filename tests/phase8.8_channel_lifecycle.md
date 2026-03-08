# Phase 8 -- Stage 8.8: Channel Lifecycle Hooks -- Test Plan

## Status: [ ] NOT STARTED / [ ] IN PROGRESS / [x] COMPLETE

---

## Unit Tests (automated)

Run with: `cargo test -p mesoclaw-core --features channels,channels-telegram,channels-slack,channels-discord`

### Telegram Lifecycle Hooks (`channels/telegram/mod.rs`)

| # | Test | Command | Status |
|---|------|---------|--------|
| 8.8.1 | on_agent_start sets typing state and stores status message ref | `cargo test -p mesoclaw-core --features channels-telegram -- channels::telegram::tests::telegram_on_agent_start` | [x] |
| 8.8.2 | on_tool_use formats "Using {tool}..." text | `cargo test -p mesoclaw-core --features channels-telegram -- channels::telegram::tests::telegram_on_tool_use` | [x] |
| 8.8.3 | on_agent_complete clears typing state | `cargo test -p mesoclaw-core --features channels-telegram -- channels::telegram::tests::telegram_on_agent_complete` | [x] |
| 8.8.4 | Typing refresh interval is 4s (below 5s Telegram expiry) | `cargo test -p mesoclaw-core --features channels-telegram -- channels::telegram::tests::typing_refresh_interval_4s` | [x] |

### Slack Lifecycle Hooks (`channels/slack/mod.rs`)

| # | Test | Command | Status |
|---|------|---------|--------|
| 8.8.5 | on_agent_start builds chat.postEphemeral JSON payload | `cargo test -p mesoclaw-core --features channels-slack -- channels::slack::tests::slack_on_agent_start` | [x] |
| 8.8.6 | on_tool_use builds chat.update payload with tool name | `cargo test -p mesoclaw-core --features channels-slack -- channels::slack::tests::slack_on_tool_use` | [x] |
| 8.8.7 | on_agent_complete builds chat.delete payload | `cargo test -p mesoclaw-core --features channels-slack -- channels::slack::tests::slack_on_agent_complete` | [x] |

### Discord Lifecycle Hooks (`channels/discord/mod.rs`)

| # | Test | Command | Status |
|---|------|---------|--------|
| 8.8.8 | on_agent_start prepares typing indicator request | `cargo test -p mesoclaw-core --features channels-discord -- channels::discord::tests::discord_on_agent_start` | [x] |
| 8.8.9 | on_agent_complete is no-op (returns Ok without action) | `cargo test -p mesoclaw-core --features channels-discord -- channels::discord::tests::discord_on_agent_complete` | [x] |

### Router Wiring (`channels/router.rs`)

| # | Test | Command | Status |
|---|------|---------|--------|
| 8.8.10 | handle_message calls on_agent_start before agent execution | `cargo test -p mesoclaw-core --features channels -- channels::router::tests::channel_router_processes_messages` | [x] |
| 8.8.11 | handle_message calls on_agent_complete after agent finishes | `cargo test -p mesoclaw-core --features channels -- channels::router::tests::channel_router_processes_messages` | [x] |

---

## Manual Tests (require live bot tokens from keyring)

Credentials needed: `channel:telegram:token`, `channel:slack:bot_token`, `channel:discord:token`

| # | Test | Steps | Status |
|---|------|-------|--------|
| M.CR.1 | Telegram: status message lifecycle | 1. Configure `channel:telegram:token` in keyring<br>2. Start daemon with `--features channels-telegram`<br>3. Send DM to bot on Telegram<br>4. Verify "Thinking..." status message appears<br>5. Verify status updates to "Using {tool}..." if tools used<br>6. Verify response appears and status message deleted | [ ] |
| M.CR.2 | Telegram: conversation visible in web UI | 1. Send several messages to Telegram bot<br>2. Open web UI<br>3. Verify session appears in sidebar with Telegram badge<br>4. Click it and verify full history shows | [ ] |
| M.CR.3 | Web UI reply stays in web UI only | 1. Open Telegram-originated session in web UI<br>2. Send reply from web UI<br>3. Verify response in web UI<br>4. Verify nothing sent back to Telegram | [ ] |
| M.CR.4 | Slack: ephemeral status messages | 1. Configure `channel:slack:bot_token` in keyring<br>2. Start daemon with `--features channels-slack`<br>3. Send DM to bot in Slack<br>4. Verify ephemeral "Processing..." appears<br>5. Verify response arrives and ephemeral deleted | [ ] |
| M.CR.5 | Discord: typing indicator | 1. Configure `channel:discord:token` in keyring<br>2. Start daemon with `--features channels-discord`<br>3. Send message in allowed channel<br>4. Verify typing indicator shows during processing<br>5. Verify response arrives | [ ] |
| M.CR.6 | Tool policy limits channel tools | 1. Set `channel_tool_policy.telegram = ["web_search"]` in config<br>2. Ask "run `ls` on my system" via Telegram<br>3. Verify agent does NOT use shell tool<br>4. Verify agent responds without executing shell | [ ] |
| M.CR.7 | Long response splits correctly | 1. Ask question via Discord producing >2000 char response<br>2. Verify response arrives as multiple messages<br>3. Verify no message exceeds 2000 chars | [ ] |
| M.CR.8 | Channel session persists across restarts | 1. Chat with Telegram bot<br>2. Restart daemon<br>3. Send another message to bot<br>4. Verify previous context maintained | [ ] |

---

## Test Summary

- **Unit tests**: 11/11 passing
- **Manual tests**: 0/8 (require live bot tokens in keyring)
- **Total new tests**: 19

## Completion Criteria

- [x] All unit tests (8.8.1-8.8.11) pass with channels features
- [x] `cargo clippy --workspace --all-features` -- zero warnings
- [x] `cargo test --workspace --all-features` -- all tests pass, no regressions
- [ ] Manual tests documented with steps and results when bot tokens available
- [x] **User confirmation received**

## Deferred

- Automated typing refresh loop validation (requires timing-sensitive async test)
- Slack Socket Mode connection for ephemeral messages (requires Slack app with socket mode enabled)
