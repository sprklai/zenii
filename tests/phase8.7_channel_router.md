# Phase 8 -- Stage 8.7: Channel Router Orchestrator -- Test Plan

## Status: [ ] NOT STARTED / [ ] IN PROGRESS / [x] COMPLETE

---

## Unit Tests (automated)

Run with: `cargo test -p mesoclaw-core --features channels,channels-telegram,channels-slack,channels-discord,scheduler`

### ChannelRouter Struct (`channels/router.rs`)

| # | Test | Command | Status |
|---|------|---------|--------|
| 8.7.1 | ChannelRouter::new creates instance with empty registry | `cargo test -p mesoclaw-core --features channels -- channels::router::tests::channel_router_create` | [x] |
| 8.7.2 | start() with no registered channels returns Ok | `cargo test -p mesoclaw-core --features channels -- channels::router::tests::channel_router_start_stop` | [x] |
| 8.7.3 | stop() is idempotent (multiple calls don't panic) | `cargo test -p mesoclaw-core --features channels -- channels::router::tests::channel_router_start_stop` | [x] |
| 8.7.4 | handle_message for unregistered channel returns error | `cargo test -p mesoclaw-core --features channels -- channels::router::tests::channel_router_drops_without_state` | [x] |
| 8.7.5 | handle_message without configured agent returns error | `cargo test -p mesoclaw-core --features channels -- channels::router::tests::channel_router_drops_without_state` | [x] |
| 8.7.6 | message_tx sends and message_rx receives ChannelMessage | `cargo test -p mesoclaw-core --features channels -- channels::router::tests::channel_router_sender_clones` | [x] |

### Message Pipeline (`channels/router.rs`)

| # | Test | Command | Status |
|---|------|---------|--------|
| 8.7.7 | handle_message creates session via ChannelSessionMap | `cargo test -p mesoclaw-core --features channels -- channels::router::tests::pipeline_session_resolved` | [x] |
| 8.7.8 | handle_message applies channel tool policy filter | `cargo test -p mesoclaw-core --features channels -- channels::router::tests::pipeline_tool_policy_filters` | [x] |
| 8.7.9 | handle_message uses channel_system_context as preamble | `cargo test -p mesoclaw-core --features channels -- channels::router::tests::pipeline_preamble_override` | [x] |
| 8.7.10 | handle_message stores user + assistant messages in session | `cargo test -p mesoclaw-core --features channels -- channels::router::tests::pipeline_messages_stored` | [x] |

### Boot Integration (`boot.rs`)

| # | Test | Command | Status |
|---|------|---------|--------|
| 8.7.11 | init_services with channels feature creates ChannelRouter | `cargo test -p mesoclaw-core --features channels -- boot::tests::boot_creates_channel_router` | [x] |
| 8.7.12 | Empty channels_enabled -> router exists but not started | `cargo test -p mesoclaw-core --features channels -- boot::tests::boot_router_not_started_when_empty` | [x] |

### Gateway Webhook (`gateway/handlers/channels.rs`)

| # | Test | Command | Status |
|---|------|---------|--------|
| 8.7.13 | POST /channels/test/message with valid body returns 202 | `cargo test -p mesoclaw-core --features channels -- gateway::handlers::channels::tests::channel_message_webhook_202` | [x] |
| 8.7.14 | POST /channels/test/message with missing content returns 400 | `cargo test -p mesoclaw-core --features channels -- gateway::handlers::channels::tests::channel_message_webhook_invalid_400` | [x] |

---

## Integration Tests (require configured channel credentials in keyring)

Run with: `cargo test -p mesoclaw-core --features channels,channels-telegram,channels-slack,channels-discord -- --ignored`

These tests attempt to use real channel tokens stored in the OS keyring via `CredentialStore`. If tokens are not available, tests are skipped with a descriptive message.

| # | Test | Command | Status |
|---|------|---------|--------|
| CR.40 | Channel message end-to-end: send via registered channel -> verify session + response | `cargo test -p mesoclaw-core --features channels,channels-telegram -- channels::router::tests::router_end_to_end -- --ignored` | [x] ignored (skips without credentials) |
| CR.41 | Session persistence: 2 messages from same thread -> same session_id reused | `cargo test -p mesoclaw-core --features channels -- channels::router::tests::router_session_persistence -- --ignored` | [x] ignored (skips without credentials) |
| CR.42 | Tool policy filtering: channel with restricted policy -> only allowed tools used | `cargo test -p mesoclaw-core --features channels -- channels::router::tests::router_tool_policy_filtering -- --ignored` | [x] ignored (skips without credentials) |

### Integration Test Credential Requirements

Tests use credentials stored in keyring via `CredentialStore`:

| Test | Credential Key | Description |
|---|---|---|
| CR.40 (Telegram) | `channel:telegram:token` | Telegram bot token for send/receive |
| CR.40 (Slack) | `channel:slack:bot_token` | Slack bot token for API calls |
| CR.40 (Discord) | `channel:discord:token` | Discord bot token for gateway |
| CR.41, CR.42 | Any available channel token | Uses first available channel |

If no channel credentials are found, tests print `"Skipping: no channel credentials configured in keyring"` and return `Ok(())`.

---

## Frontend Tests (vitest)

Run with: `cd web && bun run test`

| # | Test | Command | Status |
|---|------|---------|--------|
| 8.7.15 | Session store includes source field from API | `cd web && bun run test -- sessions` | [x] |
| 8.7.16 | SessionSummary includes source field | `cd web && bun run test -- sessions` | [x] |

---

## Test Summary

- **Unit tests**: 14/14 passing
- **Integration tests**: 3/3 (ignored, skip gracefully without credentials)
- **Frontend tests**: 2/2 passing
- **Total new tests**: 19

## Completion Criteria

- [x] All unit tests (8.7.1-8.7.14) pass with channels feature
- [x] Integration tests (CR.40-CR.42) pass or skip gracefully when credentials unavailable
- [x] Frontend tests (8.7.15-8.7.16) pass
- [x] `cargo clippy --workspace --all-features` -- zero warnings
- [x] `cargo test --workspace --all-features` -- all tests pass, no regressions
- [x] **User confirmation received**

## Deferred

- Full end-to-end test with live LLM agent (requires API key + channel tokens simultaneously)
- Multi-channel concurrent message handling stress test
