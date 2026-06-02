use serde_json::json;

use crate::client::ZeniiClient;
use crate::commands::encode_path_segment;

/// `zenii runtime status` — show presence/version of external-agent runtimes.
pub async fn status(client: &ZeniiClient) -> Result<(), String> {
    let reports: Vec<serde_json::Value> = client.get("/runtimes/status").await?;
    print_reports(&reports);
    Ok(())
}

/// `zenii runtime recheck` — re-probe all runtimes.
pub async fn recheck(client: &ZeniiClient) -> Result<(), String> {
    let reports: Vec<serde_json::Value> = client.post("/runtimes/recheck", &json!({})).await?;
    print_reports(&reports);
    Ok(())
}

/// `zenii runtime install <name>` — install a runtime (running the command is explicit consent).
pub async fn install(client: &ZeniiClient, name: &str) -> Result<(), String> {
    println!("Installing {name}...");
    let path = format!(
        "/runtimes/{}/install?consent=true",
        encode_path_segment(name)
    );
    let report: serde_json::Value = client.post(&path, &json!({})).await?;
    if report["present"].as_bool().unwrap_or(false) {
        println!(
            "  Installed {name} ({}).",
            report["version"].as_str().unwrap_or("?")
        );
    } else {
        println!("  Could not install {name}.");
        if let Some(instructions) = report["instructions"].as_str() {
            println!("  {instructions}");
        }
    }
    Ok(())
}

fn print_reports(reports: &[serde_json::Value]) {
    if reports.is_empty() {
        println!("No runtimes reported.");
        return;
    }
    for r in reports {
        let name = r["name"].as_str().unwrap_or("?");
        if r["present"].as_bool().unwrap_or(false) {
            let version = r["version"].as_str().unwrap_or("");
            println!("  {name:<8} present  {version}");
        } else {
            println!("  {name:<8} MISSING");
            if let Some(instructions) = r["instructions"].as_str() {
                println!("           {instructions}");
            }
        }
    }
}
