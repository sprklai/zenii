use async_trait::async_trait;

use crate::{MesoError, Result};

use super::embeddings::EmbeddingProvider;

/// OpenAI-compatible embedding provider using the /v1/embeddings endpoint.
/// Reuses the existing OpenAI API key (no separate credential).
pub struct OpenAiEmbeddingProvider {
    client: reqwest::Client,
    api_key: String,
    model: String,
    dimensions: usize,
    base_url: String,
}

impl OpenAiEmbeddingProvider {
    pub fn new(api_key: String, model: String, dimensions: usize) -> Self {
        Self {
            client: reqwest::Client::new(),
            api_key,
            model,
            dimensions,
            base_url: "https://api.openai.com".into(),
        }
    }

    pub fn with_base_url(mut self, base_url: String) -> Self {
        self.base_url = base_url;
        self
    }
}

#[derive(serde::Serialize)]
struct EmbeddingRequest {
    input: String,
    model: String,
    dimensions: usize,
}

#[derive(serde::Deserialize)]
struct EmbeddingResponse {
    data: Vec<EmbeddingData>,
}

#[derive(serde::Deserialize)]
struct EmbeddingData {
    embedding: Vec<f32>,
}

#[async_trait]
impl EmbeddingProvider for OpenAiEmbeddingProvider {
    async fn embed(&self, text: &str) -> Result<Vec<f32>> {
        if text.trim().is_empty() {
            return Err(MesoError::Embedding("text cannot be empty".into()));
        }

        let url = format!("{}/v1/embeddings", self.base_url);
        let body = EmbeddingRequest {
            input: text.to_string(),
            model: self.model.clone(),
            dimensions: self.dimensions,
        };

        let resp = self
            .client
            .post(&url)
            .header("Authorization", format!("Bearer {}", self.api_key))
            .json(&body)
            .send()
            .await
            .map_err(|e| MesoError::Embedding(format!("request failed: {e}")))?;

        if !resp.status().is_success() {
            let status = resp.status();
            let body = resp.text().await.unwrap_or_else(|_| "unknown error".into());
            return Err(MesoError::Embedding(format!(
                "OpenAI API error {status}: {body}"
            )));
        }

        let result: EmbeddingResponse = resp
            .json()
            .await
            .map_err(|e| MesoError::Embedding(format!("response parse failed: {e}")))?;

        result
            .data
            .into_iter()
            .next()
            .map(|d| d.embedding)
            .ok_or_else(|| MesoError::Embedding("empty response from OpenAI".into()))
    }
}

/// Resolve the OpenAI API key from credential store or environment variable.
pub async fn resolve_openai_key(
    credentials: &dyn crate::credential::CredentialStore,
) -> Result<String> {
    // Try keyring first
    if let Ok(Some(key)) = credentials.get("api_key:openai").await
        && !key.is_empty()
    {
        return Ok(key);
    }
    // Fallback to env var
    std::env::var("OPENAI_API_KEY").map_err(|_| {
        MesoError::Credential("No OpenAI API key found (keyring or OPENAI_API_KEY env)".into())
    })
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::credential::CredentialStore;

    // 18.1 — Provider constructs with valid config
    #[test]
    fn openai_provider_new() {
        let provider =
            OpenAiEmbeddingProvider::new("sk-test".into(), "text-embedding-3-small".into(), 384);
        assert_eq!(provider.model, "text-embedding-3-small");
        assert_eq!(provider.dimensions, 384);
        assert_eq!(provider.base_url, "https://api.openai.com");
    }

    // 18.2 — Embed returns vector of correct dimensions (mocked HTTP)
    #[tokio::test]
    async fn openai_embed_dimensions() {
        // Start a mock HTTP server
        let mock_response = serde_json::json!({
            "data": [{
                "embedding": vec![0.1f32; 384],
                "index": 0
            }],
            "model": "text-embedding-3-small",
            "usage": { "prompt_tokens": 5, "total_tokens": 5 }
        });

        let listener = tokio::net::TcpListener::bind("127.0.0.1:0").await.unwrap();
        let addr = listener.local_addr().unwrap();
        let mock_body = mock_response.to_string();

        tokio::spawn(async move {
            let (stream, _) = listener.accept().await.unwrap();
            let mut buf = vec![0u8; 4096];
            let _ = stream.readable().await;
            let _ = stream.try_read(&mut buf);
            let response = format!(
                "HTTP/1.1 200 OK\r\nContent-Type: application/json\r\nContent-Length: {}\r\n\r\n{}",
                mock_body.len(),
                mock_body
            );
            let _ = stream.writable().await;
            let _ = stream.try_write(response.as_bytes());
        });

        let provider =
            OpenAiEmbeddingProvider::new("sk-test".into(), "text-embedding-3-small".into(), 384)
                .with_base_url(format!("http://{addr}"));

        let result = provider.embed("hello world").await.unwrap();
        assert_eq!(result.len(), 384);
    }

    // 18.3 — Embed with invalid API key returns error
    #[tokio::test]
    async fn openai_embed_invalid_key() {
        // Try to connect to a non-existent server
        let provider =
            OpenAiEmbeddingProvider::new("sk-invalid".into(), "text-embedding-3-small".into(), 384)
                .with_base_url("http://127.0.0.1:1".into());

        let result = provider.embed("test").await;
        assert!(result.is_err());
    }

    // 18.3b — Key resolved from keyring then env fallback
    #[tokio::test]
    async fn openai_key_resolution_order() {
        let cred_store = crate::credential::InMemoryCredentialStore::new();

        // No key anywhere -> error
        let result = resolve_openai_key(&cred_store).await;
        assert!(result.is_err());

        // Set in credential store -> found
        cred_store
            .set("api_key:openai", "sk-from-keyring")
            .await
            .unwrap();
        let key = resolve_openai_key(&cred_store).await.unwrap();
        assert_eq!(key, "sk-from-keyring");
    }

    // 18.4 — Empty text returns error
    #[tokio::test]
    async fn openai_embed_empty_text() {
        let provider =
            OpenAiEmbeddingProvider::new("sk-test".into(), "text-embedding-3-small".into(), 384);
        let result = provider.embed("").await;
        assert!(result.is_err());
        let result2 = provider.embed("   ").await;
        assert!(result2.is_err());
    }
}
