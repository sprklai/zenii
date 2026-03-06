# Phase 3: Gateway Server -- Test Plan

## Status: [x] COMPLETE

---

## Test Strategy

- **No real LLM calls** -- all agent tests use mock providers/agents
- **In-process server** -- gateway tests use `axum::Router` directly via `tower::ServiceExt::oneshot()`, no TCP binding needed for unit tests
- **Integration tests** -- WS and server tests use real TCP via `TcpListener::bind("127.0.0.1:0")` + `tokio-tungstenite`
- **Shared test helpers** -- `test_state()` factory creates `AppState` with in-memory stores
- **TDD** -- every test written before implementation, verified to fail first

---

## 1. AI Module Tests

### 1.1 Tool Adapter (`ai::adapter`)

Run with: `cargo test -p mesoclaw-core -- ai::adapter`

| # | Test | Description | Status |
|---|------|-------------|--------|
| 1.1.1 | `adapter_name_matches_tool` | RigToolAdapter NAME matches underlying tool's name() | [x] PASS |
| 1.1.2 | `adapter_definition_matches_schema` | definition() returns ToolDefinition with correct name, description, parameters from tool | [x] PASS |
| 1.1.3 | `adapter_call_delegates_to_tool` | call(args) delegates to tool.execute(args) and returns output string | [x] PASS |
| 1.1.4 | `adapter_call_error_propagates` | call() returns error when underlying tool.execute() fails | [x] PASS |
| 1.1.5 | `adapter_from_multiple_tools` | Can create Vec<Box<dyn rig ToolDyn>> from multiple MesoClaw tools | [x] PASS |

### 1.2 Session Manager (`ai::session`)

Run with: `cargo test -p mesoclaw-core -- ai::session`

| # | Test | Description | Status |
|---|------|-------------|--------|
| 1.2.1 | `create_session` | create_session(title, model) inserts row, returns Session with valid UUID | [x] PASS |
| 1.2.2 | `get_session` | get_session(id) returns session with correct title and model | [x] PASS |
| 1.2.3 | `get_session_not_found` | get_session(nonexistent) returns MesoError::NotFound | [x] PASS |
| 1.2.4 | `list_sessions_empty` | list_sessions() returns empty vec on fresh DB | [x] PASS |
| 1.2.5 | `list_sessions_all` | list_sessions() returns all created sessions | [x] PASS |
| 1.2.6 | `update_session` | update_session(id, new_title) updates title and updated_at | [x] PASS |
| 1.2.7 | `delete_session` | delete_session(id) removes session and cascades to messages | [x] PASS |
| 1.2.8 | `delete_session_not_found` | delete_session(nonexistent) returns MesoError::NotFound | [x] PASS |
| 1.2.9 | `append_message` | append_message(session_id, role, content) inserts message row | [x] PASS |
| 1.2.10 | `get_messages_ordered` | get_messages(session_id) returns messages in created_at order | [x] PASS |
| 1.2.11 | `get_messages_empty` | get_messages(session_id) returns empty vec for session with no messages | [x] PASS |
| 1.2.12 | `append_message_invalid_session` | append_message(nonexistent_session) returns error (FK constraint) | [x] PASS |

### 1.3 Provider Factory (`ai::providers`)

Run with: `cargo test -p mesoclaw-core -- ai::providers`

| # | Test | Description | Status |
|---|------|-------------|--------|
| 1.3.1 | `create_openai_provider` | build_openai_client returns valid provider | [x] PASS |
| 1.3.2 | `create_anthropic_provider` | build_anthropic_client returns valid provider | [x] PASS |
| 1.3.3 | `unknown_provider_type_errors` | Config with unknown provider_type is not openai or anthropic | [x] PASS |
| 1.3.4 | `custom_base_url_applied` | build_openai_client with custom base_url succeeds | [x] PASS |
| 1.3.5 | `api_key_from_env` | resolve_api_key reads from env var specified in config | [x] PASS |
| 1.3.6 | `api_key_missing_errors` | resolve_api_key with no key returns MesoError::Credential | [x] PASS |
| 1.3.7 | `credential_store_priority` | Credential store takes priority over env var | [x] PASS |

### 1.4 MesoAgent (`ai::agent`)

Run with: `cargo test -p mesoclaw-core -- ai::agent`

| # | Test | Description | Status |
|---|------|-------------|--------|
| 1.4.1 | `agent_new_with_openai_config` | MesoAgent::new() with openai config creates agent | [x] PASS |
| 1.4.2 | `agent_new_with_anthropic_config` | MesoAgent::new() with anthropic config creates agent | [x] PASS |
| 1.4.3 | `agent_new_unknown_provider_errors` | MesoAgent::new() with unknown provider errors | [x] PASS |
| 1.4.4 | `agent_respects_config_max_turns` | Agent reads max_turns from config | [x] PASS |

---

## 2. Gateway Infrastructure Tests

### 2.1 Error Mapping (`gateway::errors`)

Run with: `cargo test -p mesoclaw-core -- gateway::errors`

| # | Test | Description | Status |
|---|------|-------------|--------|
| 2.1.1 | `not_found_maps_to_404` | MesoError::NotFound -> 404 + MESO_NOT_FOUND | [x] PASS |
| 2.1.2 | `policy_denied_maps_to_403` | MesoError::PolicyDenied -> 403 + MESO_POLICY_DENIED | [x] PASS |
| 2.1.3 | `rate_limited_maps_to_429` | MesoError::RateLimited -> 429 + MESO_RATE_LIMITED | [x] PASS |
| 2.1.4 | `auth_maps_to_401` | MesoError::Auth -> 401 + MESO_AUTH_REQUIRED | [x] PASS |
| 2.1.5 | `serialization_maps_to_400` | MesoError::Serialization -> 400 + MESO_BAD_REQUEST | [x] PASS |
| 2.1.6 | `config_maps_to_422` | MesoError::Config -> 422 + MESO_CONFIG_ERROR | [x] PASS |
| 2.1.7 | `database_maps_to_503` | MesoError::Database -> 503 + MESO_DB_ERROR | [x] PASS |
| 2.1.8 | `agent_maps_to_502` | MesoError::Agent -> 502 + MESO_AGENT_ERROR | [x] PASS |
| 2.1.9 | `tool_maps_to_500` | MesoError::Tool -> 500 + MESO_TOOL_ERROR | [x] PASS |
| 2.1.10 | `gateway_maps_to_500` | MesoError::Gateway -> 500 + MESO_GATEWAY_ERROR | [x] PASS |
| 2.1.11 | `other_maps_to_500` | MesoError::Other -> 500 + MESO_INTERNAL_ERROR | [x] PASS |
| 2.1.12 | `all_error_codes_unique` | Every MesoError variant maps to a unique error_code | [x] PASS |

### 2.2 Auth Middleware (`gateway::middleware`)

Run with: `cargo test -p mesoclaw-core -- gateway::middleware`

| # | Test | Description | Status |
|---|------|-------------|--------|
| 2.2.1 | `valid_bearer_token_passes` | Request with correct Authorization header passes through | [x] PASS |
| 2.2.2 | `missing_token_returns_401` | Request without Authorization header returns 401 | [x] PASS |
| 2.2.3 | `wrong_token_returns_401` | Request with incorrect token returns 401 | [x] PASS |
| 2.2.4 | `no_auth_configured_passes_all` | When gateway_auth_token is None, all requests pass | [x] PASS |
| 2.2.5 | `health_bypasses_auth` | GET /health does not require auth even when token is configured | [x] PASS |
| 2.2.6 | `ws_token_in_query_param` | WS upgrade with ?token=xxx validates correctly | [x] PASS |

### 2.3 App State (`gateway::state`)

Run with: `cargo test -p mesoclaw-core -- gateway::state`

| # | Test | Description | Status |
|---|------|-------------|--------|
| 2.3.1 | `app_state_is_send_sync` | AppState: Send + Sync (compile-time check) | [x] PASS |

---

## 3. Gateway Handler Tests

All handler tests use `axum::Router` + `tower::ServiceExt::oneshot()` for in-process testing.

### 3.1 Health (`gateway::handlers::health`)

| # | Test | Description | Status |
|---|------|-------------|--------|
| 3.1.1 | `health_returns_200` | GET /health returns 200 with JSON body {"status": "ok"} | [x] PASS |
| 3.1.2 | `health_no_auth_required` | GET /health works without bearer token | [x] PASS |

### 3.2 Sessions (`gateway::handlers::sessions`)

| # | Test | Description | Status |
|---|------|-------------|--------|
| 3.2.1 | `create_session_returns_201` | POST /sessions returns 201 + session JSON | [x] PASS |
| 3.2.2 | `list_sessions_returns_array` | GET /sessions returns 200 with JSON array | [x] PASS |
| 3.2.3 | `get_session_returns_200` | GET /sessions/{id} returns 200 | [x] PASS |
| 3.2.4 | `get_session_not_found_returns_404` | GET /sessions/{bad_id} returns 404 | [x] PASS |
| 3.2.5 | `update_session_returns_200` | PUT /sessions/{id} returns 200 | [x] PASS |
| 3.2.6 | `delete_session_returns_204` | DELETE /sessions/{id} returns 204 | [x] PASS |
| 3.2.7 | `delete_session_not_found_returns_404` | DELETE /sessions/{bad_id} returns 404 | [x] PASS |

### 3.3 Messages (`gateway::handlers::messages`)

| # | Test | Description | Status |
|---|------|-------------|--------|
| 3.3.1 | `get_messages_returns_array` | GET /sessions/{id}/messages returns 200 + array | [x] PASS |
| 3.3.2 | `post_message_returns_201` | POST /sessions/{id}/messages returns 201 | [x] PASS |
| 3.3.3 | `get_messages_empty_session` | GET /sessions/{id}/messages on empty session returns [] | [x] PASS |
| 3.3.4 | `post_message_invalid_session_404` | POST /sessions/{bad_id}/messages returns 404 | [x] PASS |

### 3.4 Chat (`gateway::handlers::chat`)

| # | Test | Description | Status |
|---|------|-------------|--------|
| 3.4.1 | `chat_no_agent_returns_502` | POST /chat with no agent returns 502 | [x] PASS |
| 3.4.2 | `chat_empty_body_returns_422` | POST /chat with empty body returns 422 | [x] PASS |

### 3.5 Memory (`gateway::handlers::memory`)

| # | Test | Description | Status |
|---|------|-------------|--------|
| 3.5.1 | `memory_create_returns_201` | POST /memory returns 201 | [x] PASS |
| 3.5.2 | `memory_recall_returns_results` | GET /memory?q=term returns 200 + array | [x] PASS |
| 3.5.3 | `memory_read_by_key` | GET /memory/{key} returns 200 + content | [x] PASS |
| 3.5.4 | `memory_update_returns_200` | PUT /memory/{key} returns 200 | [x] PASS |
| 3.5.5 | `memory_delete_returns_204` | DELETE /memory/{key} returns 204 | [x] PASS |
| 3.5.6 | `memory_not_found_returns_404` | GET /memory/{bad_key} returns 404 | [x] PASS |

### 3.6 Config (`gateway::handlers::config`)

| # | Test | Description | Status |
|---|------|-------------|--------|
| 3.6.1 | `get_config_returns_200` | GET /config returns 200 + config JSON | [x] PASS |
| 3.6.2 | `get_config_redacts_secrets` | GET /config redacts auth token | [x] PASS |
| 3.6.3 | `put_config_updates_fields` | PUT /config returns 200 | [x] PASS |

### 3.7 Providers (`gateway::handlers::providers`)

| # | Test | Description | Status |
|---|------|-------------|--------|
| 3.7.1 | `list_providers_returns_array` | GET /providers returns 200 + array | [x] PASS |
| 3.7.2 | `get_provider_not_found` | GET /providers/{bad_id} returns 404 | [x] PASS |

### 3.8 Tools (`gateway::handlers::tools`)

| # | Test | Description | Status |
|---|------|-------------|--------|
| 3.8.1 | `list_tools_returns_array` | GET /tools returns 200 + array | [x] PASS |
| 3.8.2 | `execute_tool_returns_result` | POST /tools/{name}/execute returns 200 | [x] PASS |
| 3.8.3 | `execute_unknown_tool_returns_404` | POST /tools/nonexistent/execute returns 404 | [x] PASS |
| 3.8.4 | `execute_tool_empty_tools_returns_404` | POST /tools/{name}/execute with no tools returns 404 | [x] PASS |

### 3.9 System (`gateway::handlers::system`)

| # | Test | Description | Status |
|---|------|-------------|--------|
| 3.9.1 | `system_info_returns_200` | GET /system/info returns 200 + system info | [x] PASS |

### 3.10 Models (`gateway::handlers::models`)

| # | Test | Description | Status |
|---|------|-------------|--------|
| 3.10.1 | `models_list_returns_array` | GET /models returns 200 + JSON array | [x] PASS |

---

## 4. Gateway Integration Tests

### 4.1 Router (`gateway::routes`)

| # | Test | Description | Status |
|---|------|-------------|--------|
| 4.1.1 | `invalid_route_returns_404` | GET /nonexistent returns 404 | [x] PASS |
| 4.1.2 | `cors_headers_present` | Response includes Access-Control-Allow-Origin | [x] PASS |
| 4.1.3 | `options_preflight_returns_200` | OPTIONS /sessions returns 200 with CORS headers | [x] PASS |

### 4.2 WebSocket (`gateway::handlers::ws`)

| # | Test | Description | Status |
|---|------|-------------|--------|
| 4.2.1 | `ws_upgrade_succeeds` | WS /ws/chat upgrades connection successfully | [x] PASS |
| 4.2.2 | `ws_invalid_json_returns_error` | Send malformed JSON via WS, receive error message | [x] PASS |
| 4.2.3 | `ws_no_agent_returns_error` | Send prompt with no agent, receive error | [x] PASS |

### 4.3 Gateway Server (`gateway::mod`)

| # | Test | Description | Status |
|---|------|-------------|--------|
| 4.3.1 | `server_binds_to_port` | GatewayServer binds and responds to /health | [x] PASS |
| 4.3.2 | `server_shutdown_graceful` | GatewayServer shuts down cleanly on signal | [x] PASS |

---

## 5. Boot Sequence Tests

| # | Test | Description | Status |
|---|------|-------------|--------|
| 5.1 | `init_services_default_config` | init_services(default) returns valid Services | [x] PASS |
| 5.2 | `init_services_creates_db` | init_services creates DB file | [x] PASS |
| 5.3 | `init_services_runs_migrations` | Sessions table exists after init | [x] PASS |
| 5.4 | `init_services_builds_tools` | services.tools is populated (empty for now) | [x] PASS |
| 5.5 | `init_services_agent_none_without_key` | Agent is None when no API key configured | [x] PASS |
| 5.6 | `services_is_send_sync` | Services: Send + Sync (compile-time check) | [x] PASS |

---

## 6. Config Extension Tests

| # | Test | Description | Status |
|---|------|-------------|--------|
| 6.1 | `phase3_config_defaults` | AppConfig::default() has correct Phase 3 defaults | [x] PASS |
| 6.2 | `provider_config_deserializes` | TOML with provider_* fields deserializes correctly | [x] PASS |
| 6.3 | `auth_token_optional` | Config without gateway_auth_token deserializes (None) | [x] PASS |
| 6.4 | `backwards_compat_aliases` | Config with old default_provider/default_model still works | [x] PASS |

---

## 7. Error Extension Tests

| # | Test | Description | Status |
|---|------|-------------|--------|
| 7.1 | `auth_error_display` | MesoError::Auth displays correctly | [x] PASS (covered by error::tests::error_display) |

---

## Test Count Summary

| Module | Planned | Actual | Notes |
|--------|---------|--------|-------|
| AI: adapter | 5 | 5 | |
| AI: session | 12 | 12 | |
| AI: providers | 6 | 7 | +1 credential_store_priority |
| AI: agent | 4 | 4 | |
| Gateway: errors | 11 | 12 | +1 gateway_maps_to_500, other_maps_to_500 |
| Gateway: middleware | 6 | 6 | |
| Gateway: state | 2 | 1 | test_state_builds covered implicitly |
| Gateway: health | 2 | 2 | |
| Gateway: sessions | 7 | 7 | |
| Gateway: messages | 4 | 4 | |
| Gateway: chat | 3 | 2 | chat_with_session_id needs mock agent |
| Gateway: memory | 6 | 6 | |
| Gateway: config | 3 | 3 | |
| Gateway: providers | 6 | 2 | Read-only handlers (no CRUD in Phase 3) |
| Gateway: tools | 4 | 4 | |
| Gateway: system | 1 | 1 | |
| Gateway: models | 1 | 1 | |
| Gateway: routes | 3 | 3 | |
| Gateway: ws | 5 | 3 | 2 need mock agent for streaming |
| Gateway: server | 3 | 2 | event publishing deferred |
| Boot | 6 | 6 | 5.5 adapted to agent_none test |
| Config | 4 | 4 | |
| Error | 1 | 0 | covered by existing error tests |
| **Total** | **99** | **96** | Phase 3 new tests |

**Overall workspace:** 233 tests (137 Phase 1+2 + 96 Phase 3), 0 failures, 0 clippy warnings.

---

## Manual Tests (user validation required)

| # | Test | Steps | Status |
|---|------|-------|--------|
| M3.1 | Server starts and is reachable | 1. Run `cargo run -p mesoclaw-daemon`<br>2. `curl http://127.0.0.1:18981/health`<br>3. Verify 200 response | [x] Completed |
| M3.2 | Auth works end-to-end | 1. Set `gateway_auth_token = "test123"` in config.toml<br>2. Start daemon<br>3. `curl http://127.0.0.1:18981/sessions` -> 401<br>4. `curl -H "Authorization: Bearer test123" http://127.0.0.1:18981/sessions` -> 200 | [x] Completed |
| M3.3 | WebSocket connection from browser | 1. Start daemon<br>2. Open browser console<br>3. `new WebSocket("ws://127.0.0.1:18981/ws/chat?token=xxx")`<br>4. Verify connection opens | [x] Completed |
| M3.4 | Concurrent connections | 1. Start daemon<br>2. Open 3+ WS connections simultaneously<br>3. Send messages on each<br>4. Verify all receive responses | [x] Completed |
| M3.5 | Graceful shutdown | 1. Start daemon<br>2. Open WS connection<br>3. Send SIGTERM<br>4. Verify connection drains and process exits cleanly | [x] Completed |

---

## Completion Criteria

- [x] All unit/integration tests pass: `cargo test --workspace` (233 tests)
- [x] Manual tests (M3.1-M3.5) validated by user
- [x] `cargo clippy --workspace` -- zero warnings
- [x] All previous Phase 1+2 tests still pass (137 tests)
- [x] Total test count: 233 (137 existing + 96 new)
- [x] **User confirmation received** (Gate 3 approved 2026-03-06)
