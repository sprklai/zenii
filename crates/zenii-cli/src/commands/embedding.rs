use crate::client::ZeniiClient;

pub async fn status(client: &ZeniiClient) -> Result<(), String> {
    let resp: serde_json::Value = client.get("/embeddings/status").await?;
    println!("Embedding Status:");
    println!(
        "  Provider:   {}",
        resp["provider"].as_str().unwrap_or("unknown")
    );
    println!(
        "  Model:      {}",
        resp["model"].as_str().unwrap_or("unknown")
    );
    println!("  Dimensions: {}", resp["dimensions"].as_u64().unwrap_or(0));
    Ok(())
}

pub async fn activate(client: &ZeniiClient, provider: &str) -> Result<(), String> {
    let config_update = serde_json::json!({
        "embedding_provider": provider
    });
    let _: serde_json::Value = client.put("/config", &config_update).await?;
    println!("Embedding provider set to '{provider}'");

    if provider == "local" {
        println!("Model will be downloaded on first use.");
        println!("Run 'zenii embedding download' to trigger download now.");
    } else if provider == "openai" {
        println!("Using existing OpenAI API key from keyring/environment.");
    }

    Ok(())
}

pub async fn deactivate(client: &ZeniiClient) -> Result<(), String> {
    let config_update = serde_json::json!({
        "embedding_provider": "none"
    });
    let _: serde_json::Value = client.put("/config", &config_update).await?;
    println!("Embedding provider deactivated (FTS5 only)");
    Ok(())
}

pub async fn download(client: &ZeniiClient) -> Result<(), String> {
    let resp: serde_json::Value = client
        .post("/embeddings/download", &serde_json::json!({}))
        .await?;
    println!(
        "Download triggered: {}",
        resp["model"].as_str().unwrap_or("unknown")
    );
    Ok(())
}

pub async fn test(client: &ZeniiClient) -> Result<(), String> {
    let resp: serde_json::Value = client
        .post("/embeddings/test", &serde_json::json!({}))
        .await?;
    if resp["success"].as_bool().unwrap_or(false) {
        println!("Embedding test successful!");
        println!("  Dimensions: {}", resp["dimensions"].as_u64().unwrap_or(0));
        println!(
            "  Latency:    {}ms",
            resp["latency_ms"].as_u64().unwrap_or(0)
        );
    } else {
        println!(
            "Embedding test failed: {}",
            resp["error"].as_str().unwrap_or("unknown error")
        );
    }
    Ok(())
}

pub async fn reindex(client: &ZeniiClient) -> Result<(), String> {
    let resp: serde_json::Value = client
        .post("/embeddings/reindex", &serde_json::json!({}))
        .await?;
    println!(
        "Re-index triggered: {}",
        resp["status"].as_str().unwrap_or("unknown")
    );
    Ok(())
}

#[cfg(test)]
mod tests {
    use clap::Parser;

    // 18.20 — `embedding status` parses correctly
    #[test]
    fn cli_embedding_status() {
        let cli = crate::Cli::parse_from(["zenii", "embedding", "status"]);
        assert!(matches!(
            cli.command,
            crate::Commands::Embedding {
                action: crate::EmbeddingAction::Status
            }
        ));
    }

    // 18.21 — `embedding activate local` parses correctly
    #[test]
    fn cli_embedding_activate_local() {
        let cli = crate::Cli::parse_from(["zenii", "embedding", "activate", "local"]);
        match cli.command {
            crate::Commands::Embedding {
                action: crate::EmbeddingAction::Activate { provider },
            } => {
                assert_eq!(provider, "local");
            }
            _ => panic!("expected Embedding Activate"),
        }
    }

    // 18.22 — `embedding deactivate` parses correctly
    #[test]
    fn cli_embedding_deactivate() {
        let cli = crate::Cli::parse_from(["zenii", "embedding", "deactivate"]);
        assert!(matches!(
            cli.command,
            crate::Commands::Embedding {
                action: crate::EmbeddingAction::Deactivate
            }
        ));
    }
}
