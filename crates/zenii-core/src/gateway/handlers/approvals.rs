use std::sync::Arc;

use axum::Json;
use axum::extract::{Path, State};
use serde::Deserialize;

use crate::ZeniiError;
use crate::gateway::state::AppState;
use crate::security::approval::{ApprovalDecision, ApprovalRule};

/// List all persistent approval rules.
pub async fn list_rules(
    State(state): State<Arc<AppState>>,
) -> Result<Json<Vec<ApprovalRule>>, ZeniiError> {
    let broker = state
        .approval_broker
        .as_ref()
        .ok_or_else(|| ZeniiError::Gateway("approval broker not initialized".into()))?;
    let rules = broker.list_rules().await?;
    Ok(Json(rules))
}

/// Delete a persistent approval rule by ID.
pub async fn delete_rule(
    State(state): State<Arc<AppState>>,
    Path(id): Path<String>,
) -> Result<Json<serde_json::Value>, ZeniiError> {
    let broker = state
        .approval_broker
        .as_ref()
        .ok_or_else(|| ZeniiError::Gateway("approval broker not initialized".into()))?;
    let deleted = broker.delete_rule(&id).await?;
    if deleted {
        Ok(Json(serde_json::json!({"deleted": true})))
    } else {
        Err(ZeniiError::NotFound(format!(
            "approval rule '{id}' not found"
        )))
    }
}

#[derive(Debug, Deserialize)]
pub struct ApprovalResponse {
    pub decision: String,
}

/// Respond to a pending approval request via REST.
pub async fn respond_approval(
    State(state): State<Arc<AppState>>,
    Path(id): Path<String>,
    Json(body): Json<ApprovalResponse>,
) -> Result<Json<serde_json::Value>, ZeniiError> {
    let broker = state
        .approval_broker
        .as_ref()
        .ok_or_else(|| ZeniiError::Gateway("approval broker not initialized".into()))?;
    let decision = ApprovalDecision::from_str_lossy(&body.decision);
    let resolved = broker.resolve(&id, decision);
    if resolved {
        Ok(Json(
            serde_json::json!({"resolved": true, "decision": decision.as_str()}),
        ))
    } else {
        Err(ZeniiError::NotFound(format!(
            "no pending approval '{id}' found"
        )))
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use axum::body::Body;
    use axum::http::{Request, StatusCode};
    use tower::ServiceExt;

    async fn test_state() -> (tempfile::TempDir, Arc<AppState>) {
        crate::gateway::handlers::tests::test_state().await
    }

    fn build_router(state: Arc<AppState>) -> axum::Router {
        crate::gateway::routes::build_router(state)
    }

    #[tokio::test]
    async fn list_rules_empty() {
        let (_dir, state) = test_state().await;
        let app = build_router(state);
        let req = Request::builder()
            .uri("/approvals/rules")
            .body(Body::empty())
            .unwrap();
        let resp = app.oneshot(req).await.unwrap();
        assert_eq!(resp.status(), StatusCode::OK);

        let body = axum::body::to_bytes(resp.into_body(), 1024 * 1024)
            .await
            .unwrap();
        let rules: Vec<ApprovalRule> = serde_json::from_slice(&body).unwrap();
        assert!(rules.is_empty());
    }

    #[tokio::test]
    async fn delete_nonexistent_rule_returns_404() {
        let (_dir, state) = test_state().await;
        let app = build_router(state);
        let req = Request::builder()
            .method("DELETE")
            .uri("/approvals/rules/nonexistent")
            .body(Body::empty())
            .unwrap();
        let resp = app.oneshot(req).await.unwrap();
        assert_eq!(resp.status(), StatusCode::NOT_FOUND);
    }

    #[tokio::test]
    async fn respond_nonexistent_approval_returns_404() {
        let (_dir, state) = test_state().await;
        let app = build_router(state);
        let req = Request::builder()
            .method("POST")
            .uri("/approvals/nonexistent/respond")
            .header("content-type", "application/json")
            .body(Body::from(r#"{"decision":"approve"}"#))
            .unwrap();
        let resp = app.oneshot(req).await.unwrap();
        assert_eq!(resp.status(), StatusCode::NOT_FOUND);
    }
}
