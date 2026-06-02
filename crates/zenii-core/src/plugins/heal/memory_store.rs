//! PAR.7a — live [`FixMemory`] backed by Zenii's memory subsystem + skill proposals.
//!
//! Successful fixes are persisted to the async `Memory` store (keyed `parheal:{signature}`
//! for episodic recall) and distilled into `skill_proposals` (Hermes-style learning) by
//! reusing the existing [`SkillProposalTool`].

use std::sync::Arc;

use async_trait::async_trait;

use crate::memory::traits::{Memory, MemoryCategory};
use crate::tools::skill_proposal::SkillProposalTool;
use crate::tools::traits::Tool;

use super::{FailureTrace, FixMemory, Patch};

/// Namespace prefix for episodic heal-fix memory keys.
const HEAL_KEY_PREFIX: &str = "parheal:";

/// Live [`FixMemory`]: episodic recall via the memory store + skill distillation.
pub struct MemoryFixStore {
    memory: Arc<dyn Memory>,
    skills: Arc<SkillProposalTool>,
}

impl MemoryFixStore {
    pub fn new(memory: Arc<dyn Memory>, skills: Arc<SkillProposalTool>) -> Self {
        Self { memory, skills }
    }

    fn key(signature: &str) -> String {
        format!("{HEAL_KEY_PREFIX}{signature}")
    }
}

#[async_trait]
impl FixMemory for MemoryFixStore {
    async fn recall(&self, signature: &str) -> Option<Patch> {
        let key = Self::key(signature);
        // `recall` is a substring search; pin to the exact key before deserializing.
        let entries = self.memory.recall(&key, 1, 0).await.ok()?;
        let entry = entries.into_iter().find(|e| e.key == key)?;
        serde_json::from_str::<Patch>(&entry.content).ok()
    }

    async fn record(&mut self, signature: &str, patch: &Patch) {
        let key = Self::key(signature);
        let content = match serde_json::to_string(patch) {
            Ok(c) => c,
            Err(e) => {
                tracing::warn!("parheal: failed to serialize patch for {signature}: {e}");
                return;
            }
        };
        if let Err(e) = self
            .memory
            .store(&key, &content, MemoryCategory::Custom("parheal".into()))
            .await
        {
            tracing::warn!("parheal: failed to record fix for {signature}: {e}");
        }
    }

    async fn distill_skill(&mut self, trace: &FailureTrace, patch: &Patch) {
        let content = format!(
            "# Heal fix: {sig}\n\nA runner-based tool failed and was repaired automatically.\n\n\
             ## Failure\n```\n{stderr}\n```\n\n## Applied fix\n```\n{patch:?}\n```\n",
            sig = trace.signature,
            stderr = trace.stderr.trim(),
        );
        let args = serde_json::json!({
            "action": "create",
            "skill_name": format!("heal-{}", sanitize(&trace.signature)),
            "content": content,
            "rationale": format!(
                "Auto-distilled from a self-heal fix for failure signature `{}`.",
                trace.signature
            ),
        });
        if let Err(e) = self.skills.execute(args).await {
            tracing::warn!("parheal: failed to distill skill proposal: {e}");
        }
    }
}

/// Make a signature safe for use as a skill name (alphanumeric + dashes).
fn sanitize(s: &str) -> String {
    s.chars()
        .map(|c| if c.is_ascii_alphanumeric() { c } else { '-' })
        .collect()
}

#[cfg(test)]
mod tests {
    use std::sync::Arc;
    use std::sync::atomic::AtomicBool;

    use tempfile::TempDir;

    use super::*;
    use crate::db::{self, DbPool};
    use crate::memory::in_memory_store::InMemoryStore;

    fn trace(signature: &str) -> FailureTrace {
        FailureTrace {
            stdout: String::new(),
            stderr: "boom".into(),
            exit_code: Some(1),
            signature: signature.into(),
        }
    }

    async fn store_with_pool() -> (TempDir, MemoryFixStore, DbPool) {
        let dir = TempDir::new().unwrap();
        let pool = db::init_pool(&dir.path().join("test.db")).unwrap();
        db::with_db(&pool, db::run_migrations).await.unwrap();
        let skills = Arc::new(SkillProposalTool::new(
            pool.clone(),
            Arc::new(AtomicBool::new(true)),
        ));
        let memory: Arc<dyn Memory> = Arc::new(InMemoryStore::new());
        (dir, MemoryFixStore::new(memory, skills), pool)
    }

    async fn store() -> (TempDir, MemoryFixStore) {
        let (dir, fix, _pool) = store_with_pool().await;
        (dir, fix)
    }

    #[tokio::test]
    async fn record_then_recall_roundtrips() {
        let (_dir, mut fix) = store().await;
        let patch = Patch::Dependency {
            add: vec!["numpy".into(), "pandas".into()],
        };
        fix.record("sig-dep", &patch).await;
        assert_eq!(fix.recall("sig-dep").await, Some(patch));
    }

    #[tokio::test]
    async fn recall_code_patch_roundtrips() {
        let (_dir, mut fix) = store().await;
        let patch = Patch::Code {
            diff: "--- a\n+++ b\n@@ -1 +1 @@\n-x\n+y\n".into(),
        };
        fix.record("sig-code", &patch).await;
        assert_eq!(fix.recall("sig-code").await, Some(patch));
    }

    #[tokio::test]
    async fn recall_unknown_signature_none() {
        let (_dir, fix) = store().await;
        assert_eq!(fix.recall("never-recorded").await, None);
    }

    #[tokio::test]
    async fn recall_distinguishes_signatures() {
        let (_dir, mut fix) = store().await;
        fix.record("alpha", &Patch::Retry).await;
        assert_eq!(fix.recall("beta").await, None, "must not false-match");
        assert_eq!(fix.recall("alpha").await, Some(Patch::Retry));
    }

    #[tokio::test]
    async fn record_overwrites_same_signature() {
        let (_dir, mut fix) = store().await;
        fix.record("sig", &Patch::Retry).await;
        let updated = Patch::Dependency {
            add: vec!["requests".into()],
        };
        fix.record("sig", &updated).await;
        assert_eq!(fix.recall("sig").await, Some(updated));
    }

    #[tokio::test]
    async fn distill_skill_emits_one_proposal() {
        let (_dir, mut fix, pool) = store_with_pool().await;
        fix.distill_skill(
            &trace("sig-x"),
            &Patch::Dependency {
                add: vec!["numpy".into()],
            },
        )
        .await;
        let count: i64 = db::with_db(&pool, |conn| {
            conn.query_row("SELECT COUNT(*) FROM skill_proposals", [], |r| r.get(0))
                .map_err(crate::ZeniiError::from)
        })
        .await
        .unwrap();
        assert_eq!(count, 1);
    }
}
