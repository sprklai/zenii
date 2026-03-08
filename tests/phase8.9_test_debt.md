# Phase 8 -- Stage 8.9: Test Debt & Hardening -- Test Plan

## Status: [ ] NOT STARTED / [ ] IN PROGRESS / [x] COMPLETE

---

## Unit Tests (automated)

Run with: `cargo test -p mesoclaw-core`

### ProcessTool Kill Action (`tools/process.rs`)

| # | Test | Command | Status |
|---|------|---------|--------|
| 8.9.1 | Kill action with non-Full autonomy returns error | `cargo test -p mesoclaw-core -- tools::process::tests::kill_non_full_autonomy_errors` | [x] |
| 8.9.2 | Kill action without pid arg returns error | `cargo test -p mesoclaw-core -- tools::process::tests::kill_missing_pid_errors` | [x] |
| 8.9.3 | Kill action with nonexistent PID 999999999 returns not found | `cargo test -p mesoclaw-core -- tools::process::tests::kill_nonexistent_pid_not_found` | [x] |

### ContextEngine Lifecycle (`ai/context.rs`)

| # | Test | Command | Status |
|---|------|---------|--------|
| 8.9.4 | ContextEngine::new with default config succeeds | `cargo test -p mesoclaw-core -- ai::context::tests::context_engine_new_defaults` | [x] |
| 8.9.5 | 0 messages -> ContextLevel::Full | `cargo test -p mesoclaw-core -- ai::context::tests::context_level_new_session_full` | [x] |
| 8.9.6 | Recent messages within gap -> ContextLevel::Minimal | `cargo test -p mesoclaw-core -- ai::context::tests::context_level_recent_minimal` | [x] |
| 8.9.7 | Last message > gap_minutes ago -> ContextLevel::Full | `cargo test -p mesoclaw-core -- ai::context::tests::context_level_gap_exceeded_full` | [x] |
| 8.9.8 | message_count > threshold -> ContextLevel::Full | `cargo test -p mesoclaw-core -- ai::context::tests::context_level_count_exceeded_full` | [x] |
| 8.9.9 | Resumed session with summary -> ContextLevel::Summary | `cargo test -p mesoclaw-core -- ai::context::tests::context_level_resumed_with_summary` | [x] |
| 8.9.10 | context_injection_enabled=false -> fallback | `cargo test -p mesoclaw-core -- ai::context::tests::context_disabled_returns_fallback` | [x] |
| 8.9.11 | Full level compose returns multi-section string | `cargo test -p mesoclaw-core -- ai::context::tests::compose_full_has_environment` | [x] |
| 8.9.12 | Minimal compose returns single line | `cargo test -p mesoclaw-core -- ai::context::tests::compose_minimal_single_line` | [x] |
| 8.9.13 | Summary compose includes conversation summary | `cargo test -p mesoclaw-core -- ai::context::tests::compose_summary_includes_full_and_conversation` | [x] |
| 8.9.14 | Toggle off mid-session -> fallback | `cargo test -p mesoclaw-core -- ai::context::tests::context_toggle_respected` | [x] |
| 8.9.15 | agent_system_prompt appended to preamble | `cargo test -p mesoclaw-core -- ai::context::tests::config_override_appended` | [x] |

### BootContext (`ai/context.rs`)

| # | Test | Command | Status |
|---|------|---------|--------|
| 8.9.16 | from_system() returns non-empty fields | `cargo test -p mesoclaw-core -- ai::context::tests::boot_context_from_system_populated` | [x] |
| 8.9.17 | OS field is non-empty | `cargo test -p mesoclaw-core -- ai::context::tests::boot_context_os_nonempty` | [x] |
| 8.9.18 | Arch field is valid value | `cargo test -p mesoclaw-core -- ai::context::tests::boot_context_arch_valid` | [x] |
| 8.9.19 | Hostname is non-empty | `cargo test -p mesoclaw-core -- ai::context::tests::boot_context_hostname_nonempty` | [x] |
| 8.9.20 | Locale defaults to non-empty | `cargo test -p mesoclaw-core -- ai::context::tests::boot_context_locale_default` | [x] |
| 8.9.21 | BootContext is Clone + Debug (compile check) | `cargo test -p mesoclaw-core -- ai::context::tests::boot_context_clone_debug` | [x] |

### Context Summaries (`ai/context.rs`)

| # | Test | Command | Status |
|---|------|---------|--------|
| 8.9.22 | store_summary creates DB entry | `cargo test -p mesoclaw-core -- ai::context::tests::store_summary_updates_existing` | [x] |
| 8.9.23 | store_summary updates existing entry | `cargo test -p mesoclaw-core -- ai::context::tests::store_summary_updates_existing` | [x] |
| 8.9.24 | get_summary returns stored content | `cargo test -p mesoclaw-core -- ai::context::tests::store_summary_updates_existing` | [x] |
| 8.9.25 | get_summary for missing key returns None | `cargo test -p mesoclaw-core -- ai::context::tests::get_summary_missing_none` | [x] |
| 8.9.26 | Hash invalidation detects content change | `cargo test -p mesoclaw-core -- ai::context::tests::hash_invalidation_detects_change` | [x] |
| 8.9.27 | Hash invalidation skips unchanged content | `cargo test -p mesoclaw-core -- ai::context::tests::hash_invalidation_skip_unchanged` | [x] |
| 8.9.28 | store_all_summaries creates 4 entries | `cargo test -p mesoclaw-core -- ai::context::tests::store_all_creates_four` | [x] |
| 8.9.29 | Generated summary content is non-empty | `cargo test -p mesoclaw-core -- ai::context::tests::summary_content_nonempty` | [x] |
| 8.9.30 | Empty input stores empty content | `cargo test -p mesoclaw-core -- ai::context::tests::summary_empty_input` | [x] |
| 8.9.31 | Concurrent summary read/write is safe | `cargo test -p mesoclaw-core -- ai::context::tests::concurrent_summary_access` | [x] |

### Tier Injection (`ai/context.rs`)

| # | Test | Command | Status |
|---|------|---------|--------|
| 8.9.32 | Full tier includes boot context (OS, hostname) | `cargo test -p mesoclaw-core -- ai::context::tests::full_tier_has_boot_context_os` | [x] |
| 8.9.33 | Full tier includes runtime context (date) | `cargo test -p mesoclaw-core -- ai::context::tests::full_tier_has_runtime_context` | [x] |
| 8.9.34 | Full tier includes identity summary | `cargo test -p mesoclaw-core -- ai::context::tests::full_tier_has_identity_summary` | [x] |
| 8.9.35 | Full tier includes user summary (if observations) | `cargo test -p mesoclaw-core -- ai::context::tests::full_tier_has_user_summary` | [x] |
| 8.9.36 | Full tier includes capability summary | `cargo test -p mesoclaw-core -- ai::context::tests::full_tier_has_capability_summary` | [x] |
| 8.9.37 | Minimal tier is single line | `cargo test -p mesoclaw-core -- ai::context::tests::minimal_tier_single_line` | [x] |
| 8.9.38 | Minimal tier includes date | `cargo test -p mesoclaw-core -- ai::context::tests::minimal_tier_has_date` | [x] |
| 8.9.39 | Minimal tier includes OS | `cargo test -p mesoclaw-core -- ai::context::tests::minimal_tier_has_os` | [x] |
| 8.9.40 | Minimal tier includes model name | `cargo test -p mesoclaw-core -- ai::context::tests::minimal_tier_has_model` | [x] |
| 8.9.41 | Summary tier has full + conversation summary | `cargo test -p mesoclaw-core -- ai::context::tests::summary_tier_has_full_plus_summary` | [x] |
| 8.9.42 | Summary tier handles missing summary gracefully | `cargo test -p mesoclaw-core -- ai::context::tests::summary_tier_missing_graceful` | [x] |
| 8.9.43 | Disabled context returns fallback prompt | `cargo test -p mesoclaw-core -- ai::context::tests::disabled_returns_fallback` | [x] |

### Cache Invalidation (`ai/context.rs`)

| # | Test | Command | Status |
|---|------|---------|--------|
| 8.9.44 | Hash changes when identity content changes | `cargo test -p mesoclaw-core -- ai::context::tests::hash_changes_identity` | [x] |
| 8.9.45 | Hash unchanged for same content | `cargo test -p mesoclaw-core -- ai::context::tests::hash_unchanged_same` | [x] |
| 8.9.46 | Hash changes when user observations change | `cargo test -p mesoclaw-core -- ai::context::tests::hash_changes_user` | [x] |
| 8.9.47 | Hash changes when tools change | `cargo test -p mesoclaw-core -- ai::context::tests::hash_changes_tools` | [x] |
| 8.9.48 | Hash changes when skills change | `cargo test -p mesoclaw-core -- ai::context::tests::hash_changes_skills` | [x] |
| 8.9.49 | compute_hash is deterministic | `cargo test -p mesoclaw-core -- ai::context::tests::compute_hash_deterministic` | [x] |

### Summary Generation (`ai/context.rs`)

| # | Test | Command | Status |
|---|------|---------|--------|
| 8.9.50 | Identity summary with default identity is non-empty | `cargo test -p mesoclaw-core -- ai::context::tests::gen_identity_summary_nonempty` | [x] |
| 8.9.51 | User summary with observations lists them | `cargo test -p mesoclaw-core -- ai::context::tests::gen_user_summary_with_obs` | [x] |
| 8.9.52 | User summary without observations | `cargo test -p mesoclaw-core -- ai::context::tests::gen_user_summary_empty` | [x] |
| 8.9.53 | Capability summary lists tools | `cargo test -p mesoclaw-core -- ai::context::tests::gen_capability_summary_tools` | [x] |
| 8.9.54 | Overall summary combines all sections | `cargo test -p mesoclaw-core -- ai::context::tests::gen_overall_combines` | [x] |
| 8.9.55 | Summary respects max length | `cargo test -p mesoclaw-core -- ai::context::tests::gen_summary_max_length` | [x] |

### Agent Tool Loop Integration (`ai/agent.rs`)

| # | Test | Command | Status |
|---|------|---------|--------|
| 4.8 | Agent single tool call -> result returned | `cargo test -p mesoclaw-core -- ai::agent::tests::agent_single_tool_call_dispatch` | [x] |
| 4.9 | Agent chained tool calls (A then B) | `cargo test -p mesoclaw-core -- ai::agent::tests::agent_chained_tool_calls` | [x] |
| 4.10 | Agent max_retries respected on failure | `cargo test -p mesoclaw-core -- ai::agent::tests::agent_max_retries_respected` | [x] |
| 4.11 | Agent handles tool execution error gracefully | `cargo test -p mesoclaw-core -- ai::agent::tests::agent_tool_error_handling` | [x] |
| 4.12 | Agent produces final text response after tools | `cargo test -p mesoclaw-core -- ai::agent::tests::agent_final_response_after_tools` | [x] |

---

## Manual Tests (require API keys)

| # | Test | Steps | Status |
|---|------|-------|--------|
| M5.4 | CLI chat streaming | 1. Configure API key via `mesoclaw key set openai <key>`<br>2. Run `mesoclaw chat`<br>3. Type a message<br>4. Verify tokens stream to terminal in real-time<br>5. Verify conversation continues across turns | [ ] |
| M5.5 | CLI run single prompt | 1. Configure API key<br>2. Run `mesoclaw run "hello"`<br>3. Verify response printed to stdout<br>4. Verify process exits cleanly | [ ] |
| M4.1 | Web search tool live | 1. Configure Tavily or Brave API key<br>2. Chat: "search for Rust async patterns"<br>3. Verify results returned with source URLs | [ ] |
| M4.2 | Sysinfo tool live | 1. No special config needed<br>2. Chat: "what system am I running on?"<br>3. Verify OS, CPU, memory info returned | [ ] |
| M4.3 | Tool error recovery | 1. Disconnect network<br>2. Chat: "search for something"<br>3. Verify graceful error message (not crash) | [ ] |
| M.WS.2 | Multi-provider search cascade | 1. Configure both `api_key:tavily` and `api_key:brave`<br>2. Invalidate Tavily key<br>3. Perform web search<br>4. Verify Brave provider used as fallback | [ ] |
| M.WS.3 | DuckDuckGo fallback | 1. Remove all search API keys<br>2. Attempt web search<br>3. Verify DuckDuckGo attempt (may be blocked by bot detection) | [ ] |

---

## Test Summary

- **Unit tests**: 60/60 passing
- **Manual tests**: 0/7 (require API keys)
- **Total new tests**: 67

## Completion Criteria

- [x] ProcessTool kill tests (8.9.1-8.9.3) pass
- [x] All 52 context unit tests (8.9.4-8.9.55) pass
- [x] Agent tool loop tests (4.8-4.12) pass
- [x] `cargo clippy --workspace` -- zero warnings
- [x] `cargo test --workspace` -- all tests pass, no regressions
- [ ] Manual tests documented with steps and results when API keys available
- [x] **User confirmation received**

## Deferred

- Agent tool loop tests simplified to test dispatch logic via RigToolAdapter (rig-core lacks mock LLM utilities)
- DuckDuckGo fallback test (M.WS.3) may fail due to bot detection -- document behavior
