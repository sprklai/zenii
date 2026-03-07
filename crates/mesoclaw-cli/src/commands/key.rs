use serde_json::json;

use crate::client::MesoClient;

pub async fn set(client: &MesoClient, provider: &str, key: &str) -> Result<(), String> {
    let credential_key = format!("api_key:{provider}");
    let body = json!({
        "key": credential_key,
        "value": key,
    });
    let _resp: serde_json::Value = client.post("/credentials", &body).await?;
    println!("API key set for provider: {provider}");
    Ok(())
}

pub async fn remove(client: &MesoClient, provider: &str) -> Result<(), String> {
    let credential_key = format!("api_key:{provider}");
    client
        .delete(&format!("/credentials/{credential_key}"))
        .await?;
    println!("API key removed for provider: {provider}");
    Ok(())
}

pub async fn list(client: &MesoClient) -> Result<(), String> {
    let keys: Vec<String> = client.get("/credentials").await?;
    if keys.is_empty() {
        println!("No credentials stored.");
    } else {
        for key in &keys {
            println!("  {key}");
        }
    }
    Ok(())
}
