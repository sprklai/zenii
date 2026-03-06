use std::sync::Arc;

use axum::Json;
use axum::extract::State;
use axum::response::IntoResponse;
use serde_json::json;

use crate::gateway::state::AppState;

/// GET /models -- returns list of available models from config.
pub async fn list_models(State(state): State<Arc<AppState>>) -> impl IntoResponse {
    let config = &state.config;
    Json(json!([
        {
            "id": config.provider_model_id,
            "provider": config.provider_name,
        }
    ]))
}

#[cfg(test)]
mod tests {
    use std::sync::Arc;

    use axum::Router;
    use axum::body::Body;
    use axum::http::{Request, StatusCode};
    use axum::routing::get;
    use tempfile::TempDir;
    use tower::ServiceExt;

    use super::*;
    use crate::config::AppConfig;
    use crate::credential::InMemoryCredentialStore;
    use crate::db;
    use crate::event_bus::TokioBroadcastBus;
    use crate::memory::in_memory_store::InMemoryStore;
    use crate::security::policy::{AutonomyLevel, SecurityPolicy};

    async fn test_state() -> (TempDir, Arc<AppState>) {
        let dir = TempDir::new().unwrap();
        let db_path = dir.path().join("test.db");
        let pool = db::init_pool(&db_path).unwrap();
        db::with_db(&pool, |conn| db::run_migrations(conn))
            .await
            .unwrap();
        let config = AppConfig::default();
        let state = Arc::new(AppState {
            config: Arc::new(config),
            db: pool.clone(),
            event_bus: Arc::new(TokioBroadcastBus::new(16)),
            memory: Arc::new(InMemoryStore::new()),
            credentials: Arc::new(InMemoryCredentialStore::new()),
            security: Arc::new(SecurityPolicy::new(
                AutonomyLevel::Supervised,
                None,
                vec![],
                60,
                60,
                1000,
            )),
            tools: vec![],
            #[cfg(feature = "ai")]
            session_manager: Arc::new(crate::ai::session::SessionManager::new(pool)),
            #[cfg(feature = "ai")]
            agent: None,
        });
        (dir, state)
    }

    #[tokio::test]
    async fn models_list_returns_array() {
        let (_dir, state) = test_state().await;
        let app = Router::new()
            .route("/models", get(list_models))
            .with_state(state);

        let req = Request::builder()
            .uri("/models")
            .body(Body::empty())
            .expect("build request");

        let resp = app.oneshot(req).await.expect("response");
        assert_eq!(resp.status(), StatusCode::OK);

        let body = axum::body::to_bytes(resp.into_body(), 4096)
            .await
            .expect("read body");
        let json: serde_json::Value = serde_json::from_slice(&body).expect("parse json");

        let arr = json.as_array().expect("response should be an array");
        assert_eq!(arr.len(), 1);
        assert_eq!(arr[0]["id"], "gpt-4o");
        assert_eq!(arr[0]["provider"], "openai");
    }
}
