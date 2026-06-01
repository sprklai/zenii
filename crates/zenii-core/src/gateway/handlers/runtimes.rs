//! Gateway handlers for runtime doctor/install (PAR.1).
//!
//! Thin HTTP plumbing over `crate::runtimes::{RuntimeManager, doctor::Doctor}`.

use std::sync::Arc;

use axum::Json;
use axum::extract::{Path, Query, State};
use axum::http::StatusCode;
use axum::response::{IntoResponse, Response};
use serde::Deserialize;
use serde_json::json;

use crate::runtimes::DEFAULT_RUNNERS;
use crate::runtimes::RuntimeManager;
use crate::runtimes::doctor::Doctor;

/// GET /runtimes/status -- report presence/version of all default runners.
pub async fn runtime_status(State(mgr): State<Arc<RuntimeManager>>) -> impl IntoResponse {
    // Probes shell out (`which`/`--version`); run them off the async worker thread.
    let reports = tokio::task::spawn_blocking(move || Doctor::new(mgr).status(DEFAULT_RUNNERS))
        .await
        .unwrap_or_default();
    Json(reports)
}

#[derive(Debug, Deserialize)]
pub struct InstallQuery {
    /// Explicit user consent to install. Required — this endpoint never installs silently.
    #[serde(default)]
    pub consent: bool,
}

/// POST /runtimes/{name}/install -- consent-gated install of a runtime.
pub async fn runtime_install(
    State(mgr): State<Arc<RuntimeManager>>,
    Path(name): Path<String>,
    Query(q): Query<InstallQuery>,
) -> Response {
    if !q.consent {
        return (
            StatusCode::FORBIDDEN,
            Json(json!({ "error": "consent required to install a runtime" })),
        )
            .into_response();
    }
    match Doctor::new(mgr).install(&name).await {
        Ok(report) => Json(report).into_response(),
        Err(e) => e.into_response(),
    }
}

/// POST /runtimes/recheck -- re-probe all default runners.
pub async fn runtime_recheck(State(mgr): State<Arc<RuntimeManager>>) -> impl IntoResponse {
    // Probes shell out (`which`/`--version`); run them off the async worker thread.
    let reports = tokio::task::spawn_blocking(move || Doctor::new(mgr).status(DEFAULT_RUNNERS))
        .await
        .unwrap_or_default();
    Json(reports)
}

#[cfg(test)]
mod tests {
    use std::path::{Path as FsPath, PathBuf};
    use std::sync::Arc;

    use async_trait::async_trait;
    use axum::Router;
    use axum::body::Body;
    use axum::http::{Request, StatusCode};
    use axum::routing::{get, post};
    use tower::ServiceExt;

    use super::*;
    use crate::Result;
    use crate::runtimes::{RuntimeInstaller, RuntimeProbe};

    struct PresentProbe;
    impl RuntimeProbe for PresentProbe {
        fn which(&self, _name: &str) -> Option<PathBuf> {
            Some(PathBuf::from("/usr/bin/uv"))
        }
        fn version(&self, _path: &FsPath) -> Option<String> {
            Some("0.5.1".into())
        }
    }

    struct OkInstaller;
    #[async_trait]
    impl RuntimeInstaller for OkInstaller {
        async fn install(&self, name: &str, dest: &FsPath) -> Result<PathBuf> {
            std::fs::create_dir_all(dest).ok();
            let bin = dest.join(name);
            std::fs::write(&bin, b"#!/bin/sh\n").ok();
            Ok(bin)
        }
    }

    fn router(auto_install: bool) -> Router {
        let dir = std::env::temp_dir().join(format!("par_rt_{}", std::process::id()));
        let mgr = Arc::new(RuntimeManager::new(
            dir.join("runtimes"),
            dir.join("cache"),
            auto_install,
            Arc::new(PresentProbe),
            Arc::new(OkInstaller),
        ));
        Router::new()
            .route("/runtimes/status", get(runtime_status))
            .route("/runtimes/{name}/install", post(runtime_install))
            .route("/runtimes/recheck", post(runtime_recheck))
            .with_state(mgr)
    }

    #[tokio::test]
    async fn runtime_status_returns_reports() {
        let app = router(false);
        let req = Request::builder()
            .uri("/runtimes/status")
            .body(Body::empty())
            .unwrap();
        let resp = app.oneshot(req).await.unwrap();
        assert_eq!(resp.status(), StatusCode::OK);
        let body = axum::body::to_bytes(resp.into_body(), 8192).await.unwrap();
        let json: serde_json::Value = serde_json::from_slice(&body).unwrap();
        assert!(json.is_array());
    }

    #[tokio::test]
    async fn runtime_install_without_consent_is_forbidden() {
        let app = router(true);
        let req = Request::builder()
            .uri("/runtimes/uv/install")
            .method("POST")
            .body(Body::empty())
            .unwrap();
        let resp = app.oneshot(req).await.unwrap();
        assert_eq!(resp.status(), StatusCode::FORBIDDEN);
    }

    #[tokio::test]
    async fn runtime_install_with_consent_installs() {
        let app = router(true);
        let req = Request::builder()
            .uri("/runtimes/uv/install?consent=true")
            .method("POST")
            .body(Body::empty())
            .unwrap();
        let resp = app.oneshot(req).await.unwrap();
        assert_eq!(resp.status(), StatusCode::OK);
        let body = axum::body::to_bytes(resp.into_body(), 8192).await.unwrap();
        let json: serde_json::Value = serde_json::from_slice(&body).unwrap();
        assert_eq!(json["present"], true);
    }
}
