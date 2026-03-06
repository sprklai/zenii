# Phase 3: Gateway Server — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build the AI agent integration (rig-core), full HTTP+WebSocket gateway (axum), boot sequence, and bearer-token auth — enabling all MesoClaw binaries to communicate via a single REST+WS API.

**Architecture:** Three new modules in `mesoclaw-core`: `ai/` (rig-core agent wrapper + tool adapter), `gateway/` (axum HTTP+WS server with ~40 routes), and `boot.rs` (ordered service initialization). The daemon binary wires `init_services()` → gateway start → graceful shutdown.

**Tech Stack:** rig-core 0.31 (AI agent), axum 0.8.8 (HTTP+WS), tower-http 0.6.8 (CORS/trace), tokio-stream 0.1.17 (streaming), futures 0.3 (StreamExt)

---

## Design Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Tool integration | Adapter pattern (`RigToolAdapter`) | Preserves Phase 2 tools unchanged; rig's `Tool` trait has different signatures |
| Gateway scope | Full (~40 routes) | All CRUD for sessions, messages, memory, config, providers, tools, system |
| Auth | Simple bearer token from `AppConfig` | Sufficient for localhost daemon; upgrade to JWT later if needed |
| Streaming | WebSocket at `/ws/chat` | Bidirectional, matches test plan (3.10-3.12) |
| Static assets | Deferred to Phase 6 | Frontend doesn't exist yet |
| AI providers | rig-core multi-provider | Supports OpenAI, Anthropic, etc. via unified API |
| Provider config | Structured `[provider]` section in AppConfig | Users configure base_url, model_id, provider_type, API key env var |
| Auto-start | OS service manager (systemd/launchd/Windows Service) | Standard approach; daemon is a normal process, service templates in Phase 5 |
| Graceful shutdown | SIGTERM/SIGINT handler with connection drain | Phase 3 ensures clean shutdown; service install CLI in Phase 5 |

## New Dependencies

| Crate | Version | Purpose | Added to |
|-------|---------|---------|----------|
| rig-core | 0.31 | AI agent framework | workspace + mesoclaw-core |
| tokio-stream | 0.1.17 | Stream utilities for WS/SSE | workspace + mesoclaw-core |
| futures | 0.3 | StreamExt for rig streams | workspace + mesoclaw-core |

## New Config Fields (AppConfig)

```rust
// Phase 3: Gateway
pub gateway_auth_token: Option<String>,     // Bearer token (None = no auth)
pub ws_max_connections: usize,              // Max concurrent WS connections (default: 32)
pub gateway_cors_origins: Vec<String>,      // Allowed CORS origins (default: ["http://localhost:*"])

// Phase 3: Provider (replaces default_provider + default_model)
pub provider_name: String,                  // Provider identifier (default: "openai")
pub provider_type: String,                  // "openai" | "anthropic" | "google" | "custom"
pub provider_base_url: Option<String>,      // Custom API base URL (None = crate default)
pub provider_model_id: String,             // Model ID to use (default: "gpt-4o")
pub provider_api_key_env: Option<String>,   // Env var name for API key (default: None, uses credential store)

// Phase 3: Agent
pub agent_max_turns: usize,                 // Max tool-calling turns per prompt (default: 20)
pub agent_max_tokens: usize,                // Max tokens per completion (default: 4096)
pub agent_system_prompt: Option<String>,    // Custom system prompt override (None = use identity)
```

Example `config.toml` usage:
```toml
# Provider configuration
provider_name = "openai"
provider_type = "openai"
provider_base_url = "https://api.openai.com/v1"  # or custom proxy
provider_model_id = "gpt-4o"
provider_api_key_env = "OPENAI_API_KEY"

# For Anthropic:
# provider_name = "anthropic"
# provider_type = "anthropic"
# provider_model_id = "claude-sonnet-4-20250514"
# provider_api_key_env = "ANTHROPIC_API_KEY"

# For custom/local (e.g. Ollama):
# provider_name = "local-ollama"
# provider_type = "custom"
# provider_base_url = "http://localhost:11434/v1"
# provider_model_id = "llama3"

# Gateway auth
gateway_auth_token = "my-secret-token"

# Agent tuning
agent_max_turns = 20
agent_max_tokens = 4096
```

## Module Structure

```
crates/mesoclaw-core/src/
  ai/
    mod.rs              # pub mod declarations, re-exports
    agent.rs            # MesoAgent wrapper around rig Agent
    adapter.rs          # RigToolAdapter<T: mesoclaw Tool> -> rig Tool
    session.rs          # Session CRUD (create, resume, list, delete)
    providers.rs        # Provider factory (OpenAI, Anthropic, etc.)
  gateway/
    mod.rs              # pub mod, GatewayServer struct, start/stop
    routes.rs           # Router construction with all route groups
    handlers/
      mod.rs            # pub mod for all handler modules
      health.rs         # GET /health
      sessions.rs       # CRUD /sessions, /sessions/{id}
      messages.rs       # GET/POST /sessions/{id}/messages
      chat.rs           # POST /chat (non-streaming)
      memory.rs         # CRUD /memory
      config.rs         # GET/PUT /config
      providers.rs      # CRUD /providers
      tools.rs          # GET /tools, POST /tools/{name}/execute
      system.rs         # GET /system/info
      ws.rs             # WS /ws/chat (streaming)
    middleware.rs        # Bearer token auth layer
    state.rs            # AppState shared across handlers
    errors.rs           # MesoError -> axum Response mapping
  boot.rs               # init_services() -> Services bundle
```

## API Endpoints

### System
| Method | Path | Description | Auth |
|--------|------|-------------|------|
| GET | `/health` | Health check, returns 200 | No |
| GET | `/models` | List available models | Yes |
| GET | `/system/info` | System information | Yes |

### Sessions
| Method | Path | Description | Auth |
|--------|------|-------------|------|
| POST | `/sessions` | Create session | Yes |
| GET | `/sessions` | List sessions | Yes |
| GET | `/sessions/{id}` | Get session | Yes |
| PUT | `/sessions/{id}` | Update session title | Yes |
| DELETE | `/sessions/{id}` | Delete session | Yes |

### Messages
| Method | Path | Description | Auth |
|--------|------|-------------|------|
| GET | `/sessions/{id}/messages` | Get messages for session | Yes |
| POST | `/sessions/{id}/messages` | Send message (non-streaming) | Yes |

### Chat
| Method | Path | Description | Auth |
|--------|------|-------------|------|
| POST | `/chat` | Send prompt, get response (non-streaming) | Yes |

### Memory
| Method | Path | Description | Auth |
|--------|------|-------------|------|
| POST | `/memory` | Store memory entry | Yes |
| GET | `/memory` | Recall/search memory | Yes |
| GET | `/memory/{key}` | Get specific memory entry | Yes |
| PUT | `/memory/{key}` | Update memory entry | Yes |
| DELETE | `/memory/{key}` | Delete memory entry | Yes |

### Configuration
| Method | Path | Description | Auth |
|--------|------|-------------|------|
| GET | `/config` | Get current config (redacted) | Yes |
| PUT | `/config` | Update config fields | Yes |

### Providers
| Method | Path | Description | Auth |
|--------|------|-------------|------|
| GET | `/providers` | List providers | Yes |
| POST | `/providers` | Register provider | Yes |
| GET | `/providers/{id}` | Get provider details | Yes |
| PUT | `/providers/{id}` | Update provider | Yes |
| DELETE | `/providers/{id}` | Delete provider | Yes |

### Tools
| Method | Path | Description | Auth |
|--------|------|-------------|------|
| GET | `/tools` | List available tools | Yes |
| POST | `/tools/{name}/execute` | Execute a tool | Yes |

### WebSocket
| Method | Path | Description | Auth |
|--------|------|-------------|------|
| WS | `/ws/chat` | Streaming chat (bidirectional) | Token in query param |

## Key Types

### AppState (gateway/state.rs)
```rust
pub struct AppState {
    pub config: Arc<AppConfig>,
    pub db: DbPool,
    pub event_bus: Arc<dyn EventBus>,
    pub memory: Arc<dyn Memory>,
    pub credentials: Arc<dyn CredentialStore>,
    pub security: Arc<SecurityPolicy>,
    pub tools: Vec<Arc<dyn mesoclaw Tool>>,
    pub agent: Arc<MesoAgent>,
}
```

### Services (boot.rs)
```rust
pub struct Services {
    pub config: Arc<AppConfig>,
    pub db: DbPool,
    pub event_bus: Arc<dyn EventBus>,
    pub memory: Arc<dyn Memory>,
    pub credentials: Arc<dyn CredentialStore>,
    pub security: Arc<SecurityPolicy>,
    pub tools: Vec<Arc<dyn mesoclaw Tool>>,
    pub agent: Arc<MesoAgent>,
}
```

### MesoAgent (ai/agent.rs)
```rust
pub struct MesoAgent {
    // Wraps rig::agent::Agent with session management
    // Provides: prompt(), stream_prompt(), chat(), stream_chat()
    // Delegates tool calls through RigToolAdapter
}
```

### RigToolAdapter (ai/adapter.rs)
```rust
pub struct RigToolAdapter {
    tool: Arc<dyn mesoclaw_core::tools::Tool>,
}
// Implements rig::tool::Tool by:
// - NAME = tool.name()
// - definition() -> ToolDefinition from tool.parameters_schema()
// - call(args) -> tool.execute(args) -> String output
```

### Session (ai/session.rs)
```rust
// Uses existing DB tables: sessions + messages
// Session CRUD via db::with_db + spawn_blocking
pub struct SessionManager { db: DbPool }
// create_session(title, model) -> Session
// get_session(id) -> Session
// list_sessions() -> Vec<SessionSummary>
// delete_session(id)
// append_message(session_id, role, content)
// get_messages(session_id) -> Vec<Message>
```

## Boot Sequence (boot.rs)

```
init_services(config: AppConfig) -> Result<Services>
  1. Config -> Arc<AppConfig>
  2. DB -> init_pool(db_path) + run_migrations
  3. EventBus -> TokioBroadcastBus::new(256)
  4. Memory -> SqliteMemoryStore::new(db) or InMemoryStore (test)
  5. Credentials -> InMemoryCredentialStore (KeyringStore deferred)
  6. Security -> SecurityPolicy::new(autonomy_level, workspace_root)
  7. Tools -> build_tools(security, config) -> Vec<Arc<dyn Tool>>
  8. Agent -> MesoAgent::new(config, tools, memory, credentials)
  9. Return Services bundle
```

Gateway startup happens in daemon main.rs after `init_services()`:
```
let services = init_services(config).await?;
let gateway = GatewayServer::new(services);

// Graceful shutdown: listen for SIGTERM/SIGINT, drain active connections
let shutdown = async {
    tokio::signal::ctrl_c().await.ok();
    info!("Shutdown signal received, draining connections...");
};
gateway.start_with_shutdown(host, port, shutdown).await?;
```

### Graceful Shutdown (Phase 3 scope)
- Daemon listens for SIGTERM and SIGINT (Ctrl+C)
- On signal: stop accepting new connections, drain active WS/HTTP connections (5s timeout)
- EventBus publishes `AppEvent::Shutdown` so subscribers can clean up
- Exit with code 0

### Auto-Start (Phase 5 scope — nice to have)
- Service templates provided in `scripts/`:
  - `scripts/mesoclaw.service` (systemd — Linux)
  - `scripts/com.sprklai.mesoclaw.plist` (launchd — macOS)
  - `scripts/mesoclaw-service.ps1` (Windows Service wrapper via NSSM or sc.exe)
- CLI command: `mesoclaw daemon install` — copies template, enables auto-start
- CLI command: `mesoclaw daemon uninstall` — disables and removes service
- CLI command: `mesoclaw daemon status` — shows if running, uptime, port

## Error Mapping (gateway/errors.rs)

Every error response returns a JSON body with a unique `error_code` string and human-readable `message`:
```json
{
  "error_code": "MESO_POLICY_DENIED",
  "message": "security policy denied: command blocked by autonomy level"
}
```

| MesoError | HTTP Status | Error Code | Description |
|-----------|-------------|------------|-------------|
| NotFound | 404 Not Found | `MESO_NOT_FOUND` | Resource does not exist |
| PolicyDenied | 403 Forbidden | `MESO_POLICY_DENIED` | Blocked by security policy |
| RateLimited | 429 Too Many Requests | `MESO_RATE_LIMITED` | Rate limit exceeded |
| Auth (new) | 401 Unauthorized | `MESO_AUTH_REQUIRED` | Missing or invalid bearer token |
| Serialization | 400 Bad Request | `MESO_BAD_REQUEST` | Malformed JSON or invalid input |
| Config | 422 Unprocessable Entity | `MESO_CONFIG_ERROR` | Invalid configuration value |
| Database | 503 Service Unavailable | `MESO_DB_ERROR` | Database operation failed |
| Sqlite | 503 Service Unavailable | `MESO_SQLITE_ERROR` | SQLite-specific failure |
| Agent | 502 Bad Gateway | `MESO_AGENT_ERROR` | LLM provider call failed |
| Tool | 500 Internal Server Error | `MESO_TOOL_ERROR` | Tool execution failed |
| Memory | 500 Internal Server Error | `MESO_MEMORY_ERROR` | Memory system failure |
| Embedding | 500 Internal Server Error | `MESO_EMBEDDING_ERROR` | Embedding generation failed |
| Credential | 500 Internal Server Error | `MESO_CREDENTIAL_ERROR` | Credential access failed |
| Gateway | 500 Internal Server Error | `MESO_GATEWAY_ERROR` | Gateway internal error |
| Http | 502 Bad Gateway | `MESO_HTTP_ERROR` | External HTTP request failed |
| Io | 500 Internal Server Error | `MESO_IO_ERROR` | Filesystem I/O failure |
| EventBus | 500 Internal Server Error | `MESO_EVENT_ERROR` | Event bus delivery failed |
| Channel | 500 Internal Server Error | `MESO_CHANNEL_ERROR` | Channel communication error |
| TomlParse | 400 Bad Request | `MESO_TOML_PARSE_ERROR` | Invalid TOML input |
| TomlSerialize | 500 Internal Server Error | `MESO_TOML_SERIALIZE_ERROR` | TOML serialization failed |
| Other | 500 Internal Server Error | `MESO_INTERNAL_ERROR` | Unclassified internal error |

**Key distinctions:**
- **401** (Auth) vs **403** (PolicyDenied) — auth is "who are you?", policy is "you can't do that"
- **502** (Agent, Http) — upstream dependency failure (LLM provider, external API)
- **503** (Database, Sqlite) — service temporarily unavailable (DB issues are recoverable)
- **422** (Config) — syntactically valid but semantically wrong config
- **400** (Serialization, TomlParse) — client sent bad input
- **429** (RateLimited) — standard rate limit with `Retry-After` header

## Assumptions

1. **rig-core 0.31 API is stable enough** — pre-1.0 but well-documented. If breaking changes occur, adapter isolates impact.
2. **No real LLM calls in tests** — all tests use mock agent/provider. Real provider wiring tested manually.
3. **Single DB pool shared** — same `DbPool` used by sessions, memory, and gateway.
4. **WebSocket auth via query param** — `?token=xxx` since WS upgrade doesn't support custom headers easily.
5. **InMemoryCredentialStore for Phase 3** — KeyringStore deferred to Phase 5.
6. **Session messages stored in existing `messages` table** — schema already supports this.
7. **Provider config replaces flat strings** — `default_provider`/`default_model` are replaced by structured `provider_*` fields. Old fields kept as `#[serde(alias)]` for backwards compat.
8. **Auto-start is Phase 5** — Phase 3 handles graceful shutdown (SIGTERM/SIGINT + connection drain). Service templates (`systemd`, `launchd`, Windows) and `mesoclaw daemon install/uninstall` CLI commands are Phase 5 deliverables.
9. **API key resolution order** — (a) credential store lookup by `provider_name`, (b) env var from `provider_api_key_env`, (c) error if neither found.

## Files to Create (18 new files)

1. `crates/mesoclaw-core/src/ai/mod.rs`
2. `crates/mesoclaw-core/src/ai/agent.rs`
3. `crates/mesoclaw-core/src/ai/adapter.rs`
4. `crates/mesoclaw-core/src/ai/session.rs`
5. `crates/mesoclaw-core/src/ai/providers.rs`
6. `crates/mesoclaw-core/src/gateway/mod.rs`
7. `crates/mesoclaw-core/src/gateway/routes.rs`
8. `crates/mesoclaw-core/src/gateway/state.rs`
9. `crates/mesoclaw-core/src/gateway/errors.rs`
10. `crates/mesoclaw-core/src/gateway/middleware.rs`
11. `crates/mesoclaw-core/src/gateway/handlers/mod.rs`
12. `crates/mesoclaw-core/src/gateway/handlers/health.rs`
13. `crates/mesoclaw-core/src/gateway/handlers/sessions.rs`
14. `crates/mesoclaw-core/src/gateway/handlers/messages.rs`
15. `crates/mesoclaw-core/src/gateway/handlers/chat.rs`
16. `crates/mesoclaw-core/src/gateway/handlers/memory.rs`
17. `crates/mesoclaw-core/src/gateway/handlers/config.rs`
18. `crates/mesoclaw-core/src/gateway/handlers/providers.rs`
19. `crates/mesoclaw-core/src/gateway/handlers/tools.rs`
20. `crates/mesoclaw-core/src/gateway/handlers/system.rs`
21. `crates/mesoclaw-core/src/gateway/handlers/ws.rs`
22. `crates/mesoclaw-core/src/boot.rs`

## Files to Modify

1. `Cargo.toml` — add rig-core, tokio-stream, futures to workspace deps
2. `crates/mesoclaw-core/Cargo.toml` — add new deps, update gateway feature
3. `crates/mesoclaw-core/src/lib.rs` — declare `ai`, `gateway`, `boot` modules
4. `crates/mesoclaw-core/src/config/schema.rs` — add Phase 3 config fields
5. `crates/mesoclaw-core/src/error.rs` — add `Auth` variant
6. `crates/mesoclaw-daemon/src/main.rs` — wire boot + gateway start
7. `tests/phase3_gateway_server.md` — update test plan with expanded tests

## Implementation Order

### Step 1: Dependencies + Config (foundation)
Add new crates to workspace, add config fields, add Auth error variant.

### Step 2: AI Module — adapter.rs (tool bridge)
`RigToolAdapter` that wraps MesoClaw `Tool` trait into rig's `Tool` trait.

### Step 3: AI Module — session.rs (session CRUD)
`SessionManager` using existing DB tables for session + message persistence.

### Step 4: AI Module — providers.rs + agent.rs (agent creation)
Provider factory, `MesoAgent` wrapping rig agent with session awareness.

### Step 5: Gateway — state.rs + errors.rs + middleware.rs (infrastructure)
`AppState`, `MesoError` -> axum response mapping, bearer token middleware.

### Step 6: Gateway — handlers (all route handlers)
Health, sessions CRUD, messages, chat, memory CRUD, config, providers, tools, system info.

### Step 7: Gateway — ws.rs (WebSocket streaming)
WebSocket upgrade handler with streaming agent responses.

### Step 8: Gateway — routes.rs + mod.rs (router assembly)
Assemble all routes into `Router`, `GatewayServer` struct with start/stop.

### Step 9: Boot — boot.rs (service initialization)
`init_services()` function, `Services` struct.

### Step 10: Daemon wiring
Update `mesoclaw-daemon/src/main.rs` to use `init_services()` + `GatewayServer`.
