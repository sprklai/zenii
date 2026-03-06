# Phase 3: Gateway Server -- Test Plan

## Status: [ ] NOT STARTED / [ ] IN PROGRESS / [ ] COMPLETE

---

## Test Strategy

- **No real LLM calls** -- all agent tests use mock providers/agents
- **In-process server** -- gateway tests use `axum::Router` directly via `tower::ServiceExt::oneshot()`, no TCP binding needed for unit tests
- **Shared test helpers** -- `test_app_state()` factory creates `AppState` with in-memory stores and mock agent
- **TDD** -- every test written before implementation, verified to fail first

---

## 1. AI Module Tests

### 1.1 Tool Adapter (`ai::adapter`)

Run with: `cargo test -p mesoclaw-core -- ai::adapter`

| # | Test | Description | Status |
|---|------|-------------|--------|
| 1.1.1 | `adapter_name_matches_tool` | RigToolAdapter NAME matches underlying tool's name() | [ ] PASS |
| 1.1.2 | `adapter_definition_matches_schema` | definition() returns ToolDefinition with correct name, description, parameters from tool | [ ] PASS |
| 1.1.3 | `adapter_call_delegates_to_tool` | call(args) delegates to tool.execute(args) and returns output string | [ ] PASS |
| 1.1.4 | `adapter_call_error_propagates` | call() returns error when underlying tool.execute() fails | [ ] PASS |
| 1.1.5 | `adapter_from_multiple_tools` | Can create Vec<Box<dyn rig ToolDyn>> from multiple MesoClaw tools | [ ] PASS |

### 1.2 Session Manager (`ai::session`)

Run with: `cargo test -p mesoclaw-core -- ai::session`

| # | Test | Description | Status |
|---|------|-------------|--------|
| 1.2.1 | `create_session_returns_id` | create_session(title, model) inserts row, returns Session with valid UUID | [ ] PASS |
| 1.2.2 | `get_session_by_id` | get_session(id) returns session with correct title and model | [ ] PASS |
| 1.2.3 | `get_session_not_found` | get_session(nonexistent) returns MesoError::NotFound | [ ] PASS |
| 1.2.4 | `list_sessions_empty` | list_sessions() returns empty vec on fresh DB | [ ] PASS |
| 1.2.5 | `list_sessions_returns_all` | list_sessions() returns all created sessions, ordered by created_at desc | [ ] PASS |
| 1.2.6 | `update_session_title` | update_session(id, new_title) updates title and updated_at | [ ] PASS |
| 1.2.7 | `delete_session_removes_it` | delete_session(id) removes session and cascades to messages | [ ] PASS |
| 1.2.8 | `delete_session_not_found` | delete_session(nonexistent) returns MesoError::NotFound | [ ] PASS |
| 1.2.9 | `append_message_stores_content` | append_message(session_id, role, content) inserts message row | [ ] PASS |
| 1.2.10 | `get_messages_ordered` | get_messages(session_id) returns messages in created_at order | [ ] PASS |
| 1.2.11 | `get_messages_empty_session` | get_messages(session_id) returns empty vec for session with no messages | [ ] PASS |
| 1.2.12 | `append_message_invalid_session` | append_message(nonexistent_session) returns error (FK constraint) | [ ] PASS |

### 1.3 Provider Factory (`ai::providers`)

Run with: `cargo test -p mesoclaw-core -- ai::providers`

| # | Test | Description | Status |
|---|------|-------------|--------|
| 1.3.1 | `create_openai_provider` | build_provider(config with type="openai") returns valid provider | [ ] PASS |
| 1.3.2 | `create_anthropic_provider` | build_provider(config with type="anthropic") returns valid provider | [ ] PASS |
| 1.3.3 | `unknown_provider_type_errors` | build_provider(config with type="unknown") returns MesoError::Agent | [ ] PASS |
| 1.3.4 | `custom_base_url_applied` | build_provider with custom base_url uses that URL | [ ] PASS |
| 1.3.5 | `api_key_from_env` | build_provider reads API key from env var specified in config | [ ] PASS |
| 1.3.6 | `api_key_missing_errors` | build_provider with no API key in env or creds returns MesoError::Credential | [ ] PASS |

### 1.4 MesoAgent (`ai::agent`)

Run with: `cargo test -p mesoclaw-core -- ai::agent`

| # | Test | Description | Status |
|---|------|-------------|--------|
| 1.4.1 | `agent_new_with_mock` | MesoAgent::new() with mock provider creates agent successfully | [ ] PASS |
| 1.4.2 | `agent_prompt_returns_response` | agent.prompt("hello") returns non-empty response from mock | [ ] PASS |
| 1.4.3 | `agent_chat_with_history` | agent.chat(prompt, history) passes history to underlying agent | [ ] PASS |
| 1.4.4 | `agent_respects_max_turns` | agent with max_turns=1 stops after 1 tool-calling turn | [ ] PASS |

---

## 2. Gateway Infrastructure Tests

### 2.1 Error Mapping (`gateway::errors`)

Run with: `cargo test -p mesoclaw-core -- gateway::errors`

| # | Test | Description | Status |
|---|------|-------------|--------|
| 2.1.1 | `not_found_maps_to_404` | MesoError::NotFound -> 404 + MESO_NOT_FOUND | [ ] PASS |
| 2.1.2 | `policy_denied_maps_to_403` | MesoError::PolicyDenied -> 403 + MESO_POLICY_DENIED | [ ] PASS |
| 2.1.3 | `rate_limited_maps_to_429` | MesoError::RateLimited -> 429 + MESO_RATE_LIMITED | [ ] PASS |
| 2.1.4 | `auth_maps_to_401` | MesoError::Auth -> 401 + MESO_AUTH_REQUIRED | [ ] PASS |
| 2.1.5 | `serialization_maps_to_400` | MesoError::Serialization -> 400 + MESO_BAD_REQUEST | [ ] PASS |
| 2.1.6 | `config_maps_to_422` | MesoError::Config -> 422 + MESO_CONFIG_ERROR | [ ] PASS |
| 2.1.7 | `database_maps_to_503` | MesoError::Database -> 503 + MESO_DB_ERROR | [ ] PASS |
| 2.1.8 | `agent_maps_to_502` | MesoError::Agent -> 502 + MESO_AGENT_ERROR | [ ] PASS |
| 2.1.9 | `tool_maps_to_500` | MesoError::Tool -> 500 + MESO_TOOL_ERROR | [ ] PASS |
| 2.1.10 | `error_response_has_json_body` | All errors return Content-Type: application/json with error_code + message | [ ] PASS |
| 2.1.11 | `all_error_codes_unique` | Compile-time or test assertion that every MesoError variant maps to a unique error_code | [ ] PASS |

### 2.2 Auth Middleware (`gateway::middleware`)

Run with: `cargo test -p mesoclaw-core -- gateway::middleware`

| # | Test | Description | Status |
|---|------|-------------|--------|
| 2.2.1 | `valid_bearer_token_passes` | Request with correct Authorization header passes through | [ ] PASS |
| 2.2.2 | `missing_token_returns_401` | Request without Authorization header returns 401 MESO_AUTH_REQUIRED | [ ] PASS |
| 2.2.3 | `wrong_token_returns_401` | Request with incorrect token returns 401 | [ ] PASS |
| 2.2.4 | `no_auth_configured_passes_all` | When gateway_auth_token is None, all requests pass | [ ] PASS |
| 2.2.5 | `health_bypasses_auth` | GET /health does not require auth even when token is configured | [ ] PASS |
| 2.2.6 | `ws_token_in_query_param` | WS upgrade with ?token=xxx validates correctly | [ ] PASS |

### 2.3 App State (`gateway::state`)

Run with: `cargo test -p mesoclaw-core -- gateway::state`

| # | Test | Description | Status |
|---|------|-------------|--------|
| 2.3.1 | `app_state_is_send_sync` | AppState: Send + Sync (compile-time check) | [ ] PASS |
| 2.3.2 | `test_app_state_builds` | test_app_state() helper creates valid state with all fields | [ ] PASS |

---

## 3. Gateway Handler Tests

All handler tests use `axum::Router` + `tower::ServiceExt::oneshot()` for in-process testing.

### 3.1 Health (`gateway::handlers::health`)

Run with: `cargo test -p mesoclaw-core -- gateway::health`

| # | Test | Description | Status |
|---|------|-------------|--------|
| 3.1.1 | `health_returns_200` | GET /health returns 200 with JSON body {"status": "ok"} | [ ] PASS |
| 3.1.2 | `health_no_auth_required` | GET /health works without bearer token | [ ] PASS |

### 3.2 Sessions (`gateway::handlers::sessions`)

Run with: `cargo test -p mesoclaw-core -- gateway::sessions`

| # | Test | Description | Status |
|---|------|-------------|--------|
| 3.2.1 | `create_session_returns_201` | POST /sessions with {title, model} returns 201 + session JSON | [ ] PASS |
| 3.2.2 | `list_sessions_returns_array` | GET /sessions returns 200 with JSON array | [ ] PASS |
| 3.2.3 | `get_session_returns_200` | GET /sessions/{id} returns 200 with session JSON | [ ] PASS |
| 3.2.4 | `get_session_not_found_returns_404` | GET /sessions/{bad_id} returns 404 MESO_NOT_FOUND | [ ] PASS |
| 3.2.5 | `update_session_returns_200` | PUT /sessions/{id} with {title} returns 200 | [ ] PASS |
| 3.2.6 | `delete_session_returns_204` | DELETE /sessions/{id} returns 204 No Content | [ ] PASS |
| 3.2.7 | `delete_session_not_found_returns_404` | DELETE /sessions/{bad_id} returns 404 | [ ] PASS |

### 3.3 Messages (`gateway::handlers::messages`)

Run with: `cargo test -p mesoclaw-core -- gateway::messages`

| # | Test | Description | Status |
|---|------|-------------|--------|
| 3.3.1 | `get_messages_returns_array` | GET /sessions/{id}/messages returns 200 + array | [ ] PASS |
| 3.3.2 | `post_message_returns_201` | POST /sessions/{id}/messages with {role, content} returns 201 | [ ] PASS |
| 3.3.3 | `get_messages_empty_session` | GET /sessions/{id}/messages on empty session returns 200 + [] | [ ] PASS |
| 3.3.4 | `post_message_invalid_session_404` | POST /sessions/{bad_id}/messages returns 404 | [ ] PASS |

### 3.4 Chat (`gateway::handlers::chat`)

Run with: `cargo test -p mesoclaw-core -- gateway::chat`

| # | Test | Description | Status |
|---|------|-------------|--------|
| 3.4.1 | `chat_post_returns_200` | POST /chat with {prompt} returns 200 + {response} | [ ] PASS |
| 3.4.2 | `chat_empty_body_returns_400` | POST /chat with empty body returns 400 MESO_BAD_REQUEST | [ ] PASS |
| 3.4.3 | `chat_with_session_id` | POST /chat with {prompt, session_id} appends to existing session | [ ] PASS |

### 3.5 Memory (`gateway::handlers::memory`)

Run with: `cargo test -p mesoclaw-core -- gateway::memory`

| # | Test | Description | Status |
|---|------|-------------|--------|
| 3.5.1 | `memory_create_returns_201` | POST /memory with {key, content, category} returns 201 | [ ] PASS |
| 3.5.2 | `memory_recall_returns_results` | GET /memory?q=search_term returns 200 + array of matches | [ ] PASS |
| 3.5.3 | `memory_read_by_key` | GET /memory/{key} returns 200 + stored content | [ ] PASS |
| 3.5.4 | `memory_update_returns_200` | PUT /memory/{key} with {content} returns 200 | [ ] PASS |
| 3.5.5 | `memory_delete_returns_204` | DELETE /memory/{key} returns 204 | [ ] PASS |
| 3.5.6 | `memory_not_found_returns_404` | GET /memory/{bad_key} returns 404 | [ ] PASS |

### 3.6 Config (`gateway::handlers::config`)

Run with: `cargo test -p mesoclaw-core -- gateway::config_handler`

| # | Test | Description | Status |
|---|------|-------------|--------|
| 3.6.1 | `get_config_returns_200` | GET /config returns 200 + config JSON (auth token redacted) | [ ] PASS |
| 3.6.2 | `get_config_redacts_secrets` | GET /config does NOT include gateway_auth_token or API keys | [ ] PASS |
| 3.6.3 | `put_config_updates_fields` | PUT /config with {log_level: "debug"} returns 200 | [ ] PASS |

### 3.7 Providers (`gateway::handlers::providers`)

Run with: `cargo test -p mesoclaw-core -- gateway::providers`

| # | Test | Description | Status |
|---|------|-------------|--------|
| 3.7.1 | `list_providers_returns_array` | GET /providers returns 200 + array from DB | [ ] PASS |
| 3.7.2 | `create_provider_returns_201` | POST /providers with provider JSON returns 201 | [ ] PASS |
| 3.7.3 | `get_provider_returns_200` | GET /providers/{id} returns 200 + provider JSON | [ ] PASS |
| 3.7.4 | `update_provider_returns_200` | PUT /providers/{id} returns 200 | [ ] PASS |
| 3.7.5 | `delete_provider_returns_204` | DELETE /providers/{id} returns 204 | [ ] PASS |
| 3.7.6 | `get_provider_not_found` | GET /providers/{bad_id} returns 404 | [ ] PASS |

### 3.8 Tools (`gateway::handlers::tools`)

Run with: `cargo test -p mesoclaw-core -- gateway::tools_handler`

| # | Test | Description | Status |
|---|------|-------------|--------|
| 3.8.1 | `list_tools_returns_array` | GET /tools returns 200 + array of tool info (name, description, schema) | [ ] PASS |
| 3.8.2 | `execute_tool_returns_result` | POST /tools/{name}/execute with {args} returns 200 + ToolResult | [ ] PASS |
| 3.8.3 | `execute_unknown_tool_returns_404` | POST /tools/nonexistent/execute returns 404 | [ ] PASS |
| 3.8.4 | `execute_tool_policy_denied` | POST /tools/shell/execute when policy denies returns 403 | [ ] PASS |

### 3.9 System (`gateway::handlers::system`)

Run with: `cargo test -p mesoclaw-core -- gateway::system`

| # | Test | Description | Status |
|---|------|-------------|--------|
| 3.9.1 | `system_info_returns_200` | GET /system/info returns 200 + {os, cpu, memory, hostname} | [ ] PASS |

### 3.10 Models (`gateway::handlers::models`)

Run with: `cargo test -p mesoclaw-core -- gateway::models`

| # | Test | Description | Status |
|---|------|-------------|--------|
| 3.10.1 | `models_list_returns_array` | GET /models returns 200 + JSON array of available models | [ ] PASS |

---

## 4. Gateway Integration Tests

### 4.1 Router (`gateway::routes`)

Run with: `cargo test -p mesoclaw-core -- gateway::routes`

| # | Test | Description | Status |
|---|------|-------------|--------|
| 4.1.1 | `invalid_route_returns_404` | GET /nonexistent returns 404 | [ ] PASS |
| 4.1.2 | `cors_headers_present` | Response includes Access-Control-Allow-Origin header | [ ] PASS |
| 4.1.3 | `options_preflight_returns_200` | OPTIONS /sessions returns 200 with CORS headers | [ ] PASS |

### 4.2 WebSocket (`gateway::handlers::ws`)

Run with: `cargo test -p mesoclaw-core -- gateway::ws`

| # | Test | Description | Status |
|---|------|-------------|--------|
| 4.2.1 | `ws_upgrade_succeeds` | WS /ws/chat upgrades connection successfully | [ ] PASS |
| 4.2.2 | `ws_send_prompt_receives_chunks` | Send JSON prompt via WS, receive streamed text chunks | [ ] PASS |
| 4.2.3 | `ws_sends_done_on_completion` | After streaming, receive {"type": "done"} message | [ ] PASS |
| 4.2.4 | `ws_invalid_json_returns_error` | Send malformed JSON via WS, receive error message | [ ] PASS |
| 4.2.5 | `ws_auth_required` | WS /ws/chat without ?token returns close frame with 401 | [ ] PASS |

### 4.3 Gateway Server (`gateway::mod`)

Run with: `cargo test -p mesoclaw-core -- gateway::server`

| # | Test | Description | Status |
|---|------|-------------|--------|
| 4.3.1 | `server_binds_to_port` | GatewayServer::start binds to configured host:port | [ ] PASS |
| 4.3.2 | `server_shutdown_graceful` | GatewayServer stops accepting new connections on shutdown signal | [ ] PASS |
| 4.3.3 | `server_publishes_gateway_started` | EventBus receives GatewayStarted event after bind | [ ] PASS |

---

## 5. Boot Sequence Tests

Run with: `cargo test -p mesoclaw-core -- boot`

| # | Test | Description | Status |
|---|------|-------------|--------|
| 5.1 | `init_services_default_config` | init_services(AppConfig::default()) returns valid Services | [ ] PASS |
| 5.2 | `init_services_creates_db` | init_services creates DB file at configured path | [ ] PASS |
| 5.3 | `init_services_runs_migrations` | init_services runs DB migrations (sessions table exists) | [ ] PASS |
| 5.4 | `init_services_builds_tools` | services.tools contains all registered tools | [ ] PASS |
| 5.5 | `init_services_creates_agent` | services.agent is functional (can call prompt on mock) | [ ] PASS |
| 5.6 | `services_is_send_sync` | Services: Send + Sync (compile-time check) | [ ] PASS |

---

## 6. Config Extension Tests

Run with: `cargo test -p mesoclaw-core -- config`

| # | Test | Description | Status |
|---|------|-------------|--------|
| 6.1 | `phase3_config_defaults` | AppConfig::default() has correct Phase 3 defaults | [ ] PASS |
| 6.2 | `provider_config_deserializes` | TOML with provider_* fields deserializes correctly | [ ] PASS |
| 6.3 | `auth_token_optional` | Config without gateway_auth_token deserializes (None) | [ ] PASS |
| 6.4 | `backwards_compat_aliases` | Config with old default_provider/default_model still works | [ ] PASS |

---

## 7. Error Extension Tests

Run with: `cargo test -p mesoclaw-core -- error`

| # | Test | Description | Status |
|---|------|-------------|--------|
| 7.1 | `auth_error_display` | MesoError::Auth displays correctly | [ ] PASS |

---

## Test Count Summary

| Module | Tests |
|--------|-------|
| AI: adapter | 5 |
| AI: session | 12 |
| AI: providers | 6 |
| AI: agent | 4 |
| Gateway: errors | 11 |
| Gateway: middleware | 6 |
| Gateway: state | 2 |
| Gateway: health | 2 |
| Gateway: sessions | 7 |
| Gateway: messages | 4 |
| Gateway: chat | 3 |
| Gateway: memory | 6 |
| Gateway: config | 3 |
| Gateway: providers | 6 |
| Gateway: tools | 4 |
| Gateway: system | 1 |
| Gateway: models | 1 |
| Gateway: routes | 3 |
| Gateway: ws | 5 |
| Gateway: server | 3 |
| Boot | 6 |
| Config | 4 |
| Error | 1 |
| **Total** | **99** |

---

## Manual Tests (user validation required)

| # | Test | Steps | Status |
|---|------|-------|--------|
| M3.1 | Server starts and is reachable | 1. Run `cargo run -p mesoclaw-daemon`<br>2. `curl http://127.0.0.1:18981/health`<br>3. Verify 200 response | [ ] PASS |
| M3.2 | Auth works end-to-end | 1. Set `gateway_auth_token = "test123"` in config.toml<br>2. Start daemon<br>3. `curl http://127.0.0.1:18981/sessions` -> 401<br>4. `curl -H "Authorization: Bearer test123" http://127.0.0.1:18981/sessions` -> 200 | [ ] PASS |
| M3.3 | WebSocket connection from browser | 1. Start daemon<br>2. Open browser console<br>3. `new WebSocket("ws://127.0.0.1:18981/ws/chat?token=xxx")`<br>4. Verify connection opens | [ ] PASS |
| M3.4 | Concurrent connections | 1. Start daemon<br>2. Open 3+ WS connections simultaneously<br>3. Send messages on each<br>4. Verify all receive responses | [ ] PASS |
| M3.5 | Graceful shutdown | 1. Start daemon<br>2. Open WS connection<br>3. Send SIGTERM<br>4. Verify connection drains and process exits cleanly | [ ] PASS |

---

## Completion Criteria

- [ ] All 99 unit tests pass: `cargo test -p mesoclaw-core`
- [ ] All manual tests (M3.1-M3.5) pass
- [ ] `cargo clippy --workspace` -- zero warnings
- [ ] All previous Phase 1+2 tests still pass (137 tests)
- [ ] Total test count: 236+ (137 existing + 99 new)
- [ ] **User confirmation received**
