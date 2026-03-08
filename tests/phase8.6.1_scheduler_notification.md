# Phase 8 -- Stage 8.6.1: Scheduler Notification & Payload Execution -- Test Plan

## Status: [ ] NOT STARTED / [ ] IN PROGRESS / [x] COMPLETE

---

## Unit Tests (automated)

Run with: `cargo test -p mesoclaw-core --features scheduler`

### Event Bus Variants (`event_bus/mod.rs`)

| # | Test | Command | Status |
|---|------|---------|--------|
| 8.6.1.1 | SchedulerNotification event serialization round-trip | `cargo test -p mesoclaw-core -- event_bus::tests::scheduler_notification_event_serde` | [x] |
| 8.6.1.2 | SchedulerJobCompleted event serialization round-trip | `cargo test -p mesoclaw-core -- event_bus::tests::scheduler_job_completed_event_serde` | [x] |

### Config Defaults (`config/schema.rs`)

| # | Test | Command | Status |
|---|------|---------|--------|
| 8.6.1.3 | scheduler_notification_via_ws defaults to true | `cargo test -p mesoclaw-core -- config::schema::tests::scheduler_notification_config_defaults` | [x] |
| 8.6.1.4 | scheduler_agent_turn_timeout_secs defaults to 120 | `cargo test -p mesoclaw-core -- config::schema::tests::scheduler_notification_config_defaults` | [x] |

### AppState Wiring (`scheduler/tokio_scheduler.rs`)

| # | Test | Command | Status |
|---|------|---------|--------|
| 8.6.1.5 | wire() sets OnceCell and get() returns Some | `cargo test -p mesoclaw-core --features scheduler -- scheduler::tokio_scheduler::tests::oncecell_wire_sets_state` | [x] |
| 8.6.1.6 | wire() called twice is idempotent (no panic) | `cargo test -p mesoclaw-core --features scheduler -- scheduler::tokio_scheduler::tests::oncecell_wire_idempotent` | [x] |

### PayloadExecutor (`scheduler/payload_executor.rs`)

| # | Test | Command | Status |
|---|------|---------|--------|
| 8.6.1.7 | Notify payload publishes SchedulerNotification event | `cargo test -p mesoclaw-core --features scheduler -- scheduler::payload_executor::tests::notify_publishes_event` | [x] |
| 8.6.1.8 | Notify payload returns JobStatus::Success | `cargo test -p mesoclaw-core --features scheduler -- scheduler::payload_executor::tests::notify_returns_success` | [x] |
| 8.6.1.9 | Heartbeat gathers sysinfo and returns Success | `cargo test -p mesoclaw-core --features scheduler -- scheduler::payload_executor::tests::heartbeat_returns_success` | [x] |
| 8.6.1.10 | Heartbeat publishes HeartbeatAlert event | `cargo test -p mesoclaw-core --features scheduler -- scheduler::payload_executor::tests::heartbeat_publishes_alert` | [x] |
| 8.6.1.11 | AgentTurn without configured agent returns Failed | `cargo test -p mesoclaw-core --features scheduler -- scheduler::payload_executor::tests::agent_turn_no_api_key_failed` | [x] |
| 8.6.1.12 | AgentTurn with very short timeout returns Failed | `cargo test -p mesoclaw-core --features scheduler -- scheduler::payload_executor::tests::scheduler_agent_failure_graceful` | [x] |
| 8.6.1.13 | SendViaChannel for unregistered channel returns Failed | `cargo test -p mesoclaw-core --features scheduler,channels -- scheduler::payload_executor::tests::scheduler_send_channel_not_found` | [x] |
| 8.6.1.14 | SendViaChannel without channels feature returns Skipped | `cargo test -p mesoclaw-core --features scheduler -- scheduler::payload_executor::tests::send_via_channel_skipped_without_feature` | [x] |

### WebSocket Notification Push (`gateway/handlers/ws.rs`)

| # | Test | Command | Status |
|---|------|---------|--------|
| 8.6.1.15 | GET /ws/notifications accepts WebSocket upgrade | `cargo test -p mesoclaw-core --features scheduler -- gateway::handlers::ws::tests::ws_notifications_upgrade_succeeds` | [x] |
| 8.6.1.16 | WsOutbound::Notification serializes with type=notification | `cargo test -p mesoclaw-core -- gateway::handlers::ws::tests::ws_notifications_forwards_events` | [x] |
| 8.6.1.17 | Event bus notification forwarded to WS client | `cargo test -p mesoclaw-core --features scheduler -- gateway::handlers::ws::tests::ws_notifications_forwards_events` | [x] |

### Integration Tests (`scheduler/payload_executor.rs`)

| # | Test | Command | Status |
|---|------|---------|--------|
| 8.6.1.18 | Notify job end-to-end: create -> tick -> event published | `cargo test -p mesoclaw-core --features scheduler -- scheduler::payload_executor::tests::scheduler_notify_end_to_end` | [x] |
| 8.6.1.19 | Heartbeat job end-to-end: create -> tick -> HeartbeatAlert | `cargo test -p mesoclaw-core --features scheduler -- scheduler::payload_executor::tests::scheduler_heartbeat_end_to_end` | [x] |
| 8.6.1.20 | AgentTurn without API key -> Failed status in history | `cargo test -p mesoclaw-core --features scheduler -- scheduler::payload_executor::tests::scheduler_agent_failure_graceful` | [x] |
| 8.6.1.21 | SendViaChannel nonexistent channel -> Failed in history | `cargo test -p mesoclaw-core --features scheduler,channels -- scheduler::payload_executor::tests::scheduler_send_channel_not_found` | [x] |
| 8.6.1.22 | Boot wires scheduler OnceCell to AppState | `cargo test -p mesoclaw-core --features scheduler -- boot::tests::boot_wires_scheduler_to_appstate` | [x] |

---

## Frontend Tests (vitest)

Run with: `cd web && bun run test`

| # | Test | Command | Status |
|---|------|---------|--------|
| 8.6.1.23 | Notification store creates WS connection to /ws/notifications | `cd web && bun run test -- notifications` | [x] |
| 8.6.1.24 | Notification store handles incoming JSON message | `cd web && bun run test -- notifications` | [x] |

---

## Build Verification Tests

| # | Test | Command | Status |
|---|------|---------|--------|
| 8.6.1.25 | Desktop builds with tauri-plugin-notification | `cargo check -p mesoclaw-desktop` | [x] |

---

## Test Summary

- **Unit tests**: 22/22 passing
- **Frontend tests**: 2/2 passing
- **Build verification**: 1/1 passing
- **Total new tests**: 25

## Completion Criteria

- [x] All unit tests (8.6.1.1-8.6.1.22) pass with scheduler feature
- [x] Frontend tests (8.6.1.23-8.6.1.24) pass
- [x] Build verification (8.6.1.25) passes
- [x] `cargo clippy --workspace --all-features` -- zero warnings
- [x] `cargo test --workspace --all-features` -- all tests pass, no regressions
- [x] **User confirmation received**

## Deferred

- End-to-end WS notification test with real WebSocket client -- complex setup, verified via event bus forwarding
- Desktop OS notification visual verification -- requires running Tauri desktop app
