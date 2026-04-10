use std::sync::Arc;

use axum::Json;
use axum::extract::{Path, Query, State};
use axum::http::StatusCode;
use axum::response::IntoResponse;
use serde::{Deserialize, Serialize};

use crate::gateway::state::AppState;
use crate::wiki::WikiPage;

// ── Request / query types ────────────────────────────────────────────────────

#[derive(Deserialize)]
pub struct SearchQuery {
    pub q: Option<String>,
}

#[derive(Deserialize)]
pub struct IngestRequest {
    pub content: String,
    pub filename: String,
    pub model: Option<String>,
}

#[derive(Serialize)]
struct IngestResponse {
    pages: Vec<WikiPage>,
    message: String,
}

/// Page definition as returned by the LLM in JSON.
#[derive(Deserialize)]
struct LlmPage {
    page_type: String,
    slug: String,
    content: String,
}

// ── Handlers ─────────────────────────────────────────────────────────────────

/// GET /wiki — list all wiki pages.
pub async fn list_wiki_pages(State(state): State<Arc<AppState>>) -> impl IntoResponse {
    match state.wiki.list_pages() {
        Ok(pages) => (StatusCode::OK, Json(serde_json::json!(pages))).into_response(),
        Err(e) => (
            StatusCode::INTERNAL_SERVER_ERROR,
            Json(serde_json::json!({"error": e.to_string()})),
        )
            .into_response(),
    }
}

/// GET /wiki/{slug} — fetch a single wiki page by slug.
pub async fn get_wiki_page(
    State(state): State<Arc<AppState>>,
    Path(slug): Path<String>,
) -> impl IntoResponse {
    match state.wiki.get_page(&slug) {
        Ok(Some(page)) => (StatusCode::OK, Json(serde_json::json!(page))).into_response(),
        Ok(None) => StatusCode::NOT_FOUND.into_response(),
        Err(e) => (
            StatusCode::INTERNAL_SERVER_ERROR,
            Json(serde_json::json!({"error": e.to_string()})),
        )
            .into_response(),
    }
}

/// GET /wiki/search?q= — full-text search over wiki pages.
pub async fn search_wiki_pages(
    State(state): State<Arc<AppState>>,
    Query(params): Query<SearchQuery>,
) -> impl IntoResponse {
    let q = params.q.as_deref().unwrap_or("");
    match state.wiki.search_pages(q) {
        Ok(pages) => (StatusCode::OK, Json(serde_json::json!(pages))).into_response(),
        Err(e) => (
            StatusCode::INTERNAL_SERVER_ERROR,
            Json(serde_json::json!({"error": e.to_string()})),
        )
            .into_response(),
    }
}

/// POST /wiki/ingest — ingest a raw source document into the wiki.
///
/// Calls the configured AI agent to synthesize multiple typed wiki pages (concepts, entities,
/// topics, comparisons, queries) from the source. Falls back to a single topic page when no
/// AI model is configured or the LLM response cannot be parsed.
pub async fn ingest_wiki_source(
    State(state): State<Arc<AppState>>,
    Json(body): Json<IngestRequest>,
) -> impl IntoResponse {
    // Save the raw source for future re-ingestion.
    if let Err(e) = state.wiki.save_source(&body.filename, &body.content) {
        return (
            StatusCode::INTERNAL_SERVER_ERROR,
            Json(serde_json::json!({"error": format!("failed to save source: {e}")})),
        )
            .into_response();
    }

    // Attempt LLM-driven multi-page generation.
    if let Ok(pages) = llm_ingest(&state, &body.filename, &body.content, body.model.as_deref()).await
    {
        let date = chrono::Utc::now().format("%Y-%m-%d").to_string();
        let log_entry = format!(
            "## [{date}] ingest | {} — {} page(s) generated",
            body.filename,
            pages.len()
        );
        let _ = state.wiki.update_index();
        let _ = state.wiki.append_log(&log_entry);
        return (
            StatusCode::OK,
            Json(serde_json::json!(IngestResponse {
                message: format!("{} page(s) generated from '{}'", pages.len(), body.filename),
                pages,
            })),
        )
            .into_response();
    }

    // Fallback: write raw content as a single topic page.
    match state.wiki.ingest(&body.filename, &body.content) {
        Ok(page) => {
            let date = chrono::Utc::now().format("%Y-%m-%d").to_string();
            let log_entry = format!(
                "## [{date}] ingest | {} — fallback single-page (no LLM)",
                body.filename
            );
            let _ = state.wiki.update_index();
            let _ = state.wiki.append_log(&log_entry);
            (
                StatusCode::OK,
                Json(serde_json::json!(IngestResponse {
                    message: format!(
                        "1 page created from '{}' (LLM unavailable — configure a provider for full wiki generation)",
                        body.filename
                    ),
                    pages: vec![page],
                })),
            )
                .into_response()
        }
        Err(e) => (
            StatusCode::INTERNAL_SERVER_ERROR,
            Json(serde_json::json!({"error": e.to_string()})),
        )
            .into_response(),
    }
}

/// Call the AI agent to generate typed wiki pages from a source document.
/// Returns `Ok(pages)` on success or `Err` when the agent or JSON parsing fails.
async fn llm_ingest(
    state: &AppState,
    filename: &str,
    content: &str,
    model: Option<&str>,
) -> Result<Vec<WikiPage>, ()> {
    use crate::ai::resolve_agent;

    // Read SCHEMA.md for the system prompt.
    let schema = std::fs::read_to_string(state.wiki.wiki_dir().join("SCHEMA.md"))
        .unwrap_or_default();

    let system_prompt = format!(
        r#"You are a wiki knowledge compiler. Analyze source documents and generate structured wiki pages.

{schema}

## Generation Instructions

Work in two phases:

**Phase 1 — Entity extraction** (do this mentally first):
Scan the source for every named entity: people, organizations, products, tools, frameworks, models, datasets, events, or projects. Each named thing gets its own entity page with page_type "entities".

**Phase 2 — Synthesis pages**:
After entity pages, generate concept pages (abstract ideas/techniques), topic pages (subject domains), and comparisons or queries as appropriate.

Generate 5-15 wiki pages total as a JSON array. Each object must have exactly these fields:
- "page_type": one of "entities", "concepts", "topics", "comparisons", or "queries"
- "slug": kebab-case unique identifier (lowercase, hyphens only)
- "content": complete markdown with YAML frontmatter (---) and ## TLDR / ## Body sections;
  use [[slug]] wikilinks to cross-reference other pages you generate

Entity pages must include these frontmatter fields:
- "title": the canonical name of the entity
- "type": "entity"
- "tags": relevant category tags (e.g. [person, researcher], [org, lab], [tool, framework])
- "sources": list of source filenames
- "updated": today's date YYYY-MM-DD

Return ONLY a valid JSON array. No explanation, no markdown code fences."#
    );

    let agent = resolve_agent(model, state, None, Some(&system_prompt), "wiki")
        .await
        .map_err(|_| ())?;

    let user_prompt = format!("Filename: {filename}\n\nContent:\n{content}");
    let response = agent.prompt(&user_prompt).await.map_err(|_| ())?;

    // Strip optional markdown code fences the model may add.
    let raw = response
        .output
        .trim()
        .trim_start_matches("```json")
        .trim_start_matches("```")
        .trim_end_matches("```")
        .trim();

    let llm_pages: Vec<LlmPage> = serde_json::from_str(raw).map_err(|_| ())?;
    if llm_pages.is_empty() {
        return Err(());
    }

    let mut written = Vec::new();
    for p in llm_pages {
        if let Ok(page) = state.wiki.write_page(&p.page_type, &p.slug, &p.content) {
            written.push(page);
        }
    }

    if written.is_empty() { Err(()) } else { Ok(written) }
}

/// POST /wiki/sync — sync compiled wiki pages into the memory store.
pub async fn sync_wiki_to_memory(State(state): State<Arc<AppState>>) -> impl IntoResponse {
    match state.wiki.sync_to_memory(state.memory.as_ref()).await {
        Ok(count) => (StatusCode::OK, Json(serde_json::json!({"synced": count}))).into_response(),
        Err(e) => (
            StatusCode::INTERNAL_SERVER_ERROR,
            Json(serde_json::json!({"error": e.to_string()})),
        )
            .into_response(),
    }
}

/// GET /wiki/graph — return wiki knowledge graph (nodes + edges).
pub async fn get_wiki_graph(State(state): State<Arc<AppState>>) -> impl IntoResponse {
    match state.wiki.graph() {
        Ok(graph) => (StatusCode::OK, Json(serde_json::json!(graph))).into_response(),
        Err(e) => (
            StatusCode::INTERNAL_SERVER_ERROR,
            Json(serde_json::json!({"error": e.to_string()})),
        )
            .into_response(),
    }
}

// ── Tests ────────────────────────────────────────────────────────────────────

#[cfg(test)]
mod tests {
    use super::*;
    use axum::Router;
    use axum::body::Body;
    use axum::http::{Request, StatusCode};
    use axum::routing::{get, post};
    use tempfile::TempDir;
    use tower::ServiceExt;

    async fn test_state() -> (TempDir, Arc<AppState>) {
        crate::gateway::handlers::tests::test_state().await
    }

    fn app(state: Arc<AppState>) -> Router {
        Router::new()
            .route("/wiki", get(list_wiki_pages))
            .route("/wiki/search", get(search_wiki_pages))
            .route("/wiki/{slug}", get(get_wiki_page))
            .route("/wiki/ingest", post(ingest_wiki_source))
            .route("/wiki/sync", post(sync_wiki_to_memory))
            .route("/wiki/graph", get(get_wiki_graph))
            .with_state(state)
    }

    /// H1: GET /wiki with no pages → 200 with empty array `[]`
    #[tokio::test]
    async fn wiki_list_empty_returns_200_empty_array() {
        let (_dir, state) = test_state().await;

        let req = Request::builder().uri("/wiki").body(Body::empty()).unwrap();

        let resp = app(state).oneshot(req).await.unwrap();
        assert_eq!(resp.status(), StatusCode::OK);

        let body = axum::body::to_bytes(resp.into_body(), 4096).await.unwrap();
        let pages: Vec<serde_json::Value> = serde_json::from_slice(&body).unwrap();
        assert!(pages.is_empty(), "expected empty array");
    }

    /// H2: GET /wiki → 200 with a JSON array (even if empty during stub phase)
    #[tokio::test]
    async fn wiki_list_returns_pages() {
        let (_dir, state) = test_state().await;

        let req = Request::builder().uri("/wiki").body(Body::empty()).unwrap();

        let resp = app(state).oneshot(req).await.unwrap();
        assert_eq!(resp.status(), StatusCode::OK);

        let body = axum::body::to_bytes(resp.into_body(), 4096).await.unwrap();
        // Body must be a valid JSON array
        let _pages: Vec<serde_json::Value> = serde_json::from_slice(&body).unwrap();
    }

    /// H3: GET /wiki/{slug} for a page that exists → 200
    #[tokio::test]
    async fn wiki_get_existing_returns_200() {
        let (_dir, state) = test_state().await;

        // Seed a page via ingest so the slug exists
        let ingest_body = serde_json::json!({
            "filename": "test-page.md",
            "content": "---\ntitle: \"Test Page\"\ntype: concept\ntags: []\nsources: []\nupdated: 2026-01-01\n---\n\n## TLDR\nTest page for handler tests.\n\n## Body\nContent here.\n"
        });
        let seed_req = Request::builder()
            .method("POST")
            .uri("/wiki/ingest")
            .header("content-type", "application/json")
            .body(Body::from(serde_json::to_string(&ingest_body).unwrap()))
            .unwrap();
        let seed_resp = app(state.clone()).oneshot(seed_req).await.unwrap();
        assert_eq!(
            seed_resp.status(),
            StatusCode::OK,
            "ingest seed must succeed"
        );

        let req = Request::builder()
            .uri("/wiki/test-page")
            .body(Body::empty())
            .unwrap();

        let resp = app(state).oneshot(req).await.unwrap();
        assert_eq!(resp.status(), StatusCode::OK);
    }

    /// H4: GET /wiki/{slug} for a page that does not exist → 404
    #[tokio::test]
    async fn wiki_get_missing_returns_404() {
        let (_dir, state) = test_state().await;

        let req = Request::builder()
            .uri("/wiki/no-such-page")
            .body(Body::empty())
            .unwrap();

        let resp = app(state).oneshot(req).await.unwrap();
        assert_eq!(resp.status(), StatusCode::NOT_FOUND);
    }

    /// H5: GET /wiki/search?q=test → 200
    #[tokio::test]
    async fn wiki_search_returns_200() {
        let (_dir, state) = test_state().await;

        let req = Request::builder()
            .uri("/wiki/search?q=test")
            .body(Body::empty())
            .unwrap();

        let resp = app(state).oneshot(req).await.unwrap();
        assert_eq!(resp.status(), StatusCode::OK);
    }

    /// H6: POST /wiki/ingest with a valid JSON body → 200
    #[tokio::test]
    async fn wiki_ingest_returns_200() {
        let (_dir, state) = test_state().await;

        let body = serde_json::to_string(&serde_json::json!({
            "content": "# Hello\nThis is a test document.",
            "filename": "hello.md"
        }))
        .unwrap();

        let req = Request::builder()
            .method("POST")
            .uri("/wiki/ingest")
            .header("content-type", "application/json")
            .body(Body::from(body))
            .unwrap();

        let resp = app(state).oneshot(req).await.unwrap();
        assert_eq!(resp.status(), StatusCode::OK);
    }

    /// H7: POST /wiki/sync → 200 and body contains a `synced` key
    #[tokio::test]
    async fn wiki_sync_returns_200_with_synced_count() {
        let (_dir, state) = test_state().await;

        let req = Request::builder()
            .method("POST")
            .uri("/wiki/sync")
            .body(Body::empty())
            .unwrap();

        let resp = app(state).oneshot(req).await.unwrap();
        assert_eq!(resp.status(), StatusCode::OK);

        let body = axum::body::to_bytes(resp.into_body(), 4096).await.unwrap();
        let val: serde_json::Value = serde_json::from_slice(&body).unwrap();
        assert!(
            val.get("synced").is_some(),
            "response body must contain 'synced' key"
        );
    }

    /// H8: GET /wiki/graph → 200 and body contains `nodes` and `edges` keys
    #[tokio::test]
    async fn wiki_graph_returns_200_with_nodes_edges() {
        let (_dir, state) = test_state().await;

        let req = Request::builder()
            .uri("/wiki/graph")
            .body(Body::empty())
            .unwrap();

        let resp = app(state).oneshot(req).await.unwrap();
        assert_eq!(resp.status(), StatusCode::OK);

        let body = axum::body::to_bytes(resp.into_body(), 4096).await.unwrap();
        let val: serde_json::Value = serde_json::from_slice(&body).unwrap();
        assert!(
            val.get("nodes").is_some(),
            "response body must contain 'nodes' key"
        );
        assert!(
            val.get("edges").is_some(),
            "response body must contain 'edges' key"
        );
    }

    /// H9: POST /wiki/ingest falls back to a single topic page when no LLM is configured;
    /// response body must have a `pages` array and a `message` string.
    #[tokio::test]
    async fn wiki_ingest_fallback_returns_pages_array() {
        let (_dir, state) = test_state().await;

        let body = serde_json::to_string(&serde_json::json!({
            "content": "# Hello\nThis is a test document.",
            "filename": "hello.md"
        }))
        .unwrap();

        let req = Request::builder()
            .method("POST")
            .uri("/wiki/ingest")
            .header("content-type", "application/json")
            .body(Body::from(body))
            .unwrap();

        let resp = app(state).oneshot(req).await.unwrap();
        assert_eq!(resp.status(), StatusCode::OK);

        let bytes = axum::body::to_bytes(resp.into_body(), 16 * 1024)
            .await
            .unwrap();
        let val: serde_json::Value = serde_json::from_slice(&bytes).unwrap();
        assert!(val.get("pages").is_some(), "response must have 'pages' key");
        assert!(
            val.get("message").is_some(),
            "response must have 'message' key"
        );
        let pages = val["pages"].as_array().unwrap();
        assert!(!pages.is_empty(), "at least one page must be returned");
    }
}
