//! PAR.5 — self-healing repair loop for runner-based plugin tools.
//!
//! Inspired by **GEPA** (reflect on the full execution trace, mutate a candidate, keep a
//! Pareto frontier of candidates passing different test subsets) and **Hermes** (episodic
//! recall of prior fixes + distilling a successful fix into a reusable skill).
//!
//! The orchestration is decoupled from the real toolchain via injectable traits
//! ([`Reflector`], [`Evaluator`], [`FixMemory`]) so the deterministic logic is fully
//! unit-testable. Real wiring (PatchTool / reflection LLM / runner / memory / SkillProposal)
//! is connected in PAR.6.

pub mod classify;
pub mod frontier;
pub mod memory_store;
pub mod repair;

use std::collections::BTreeSet;

use async_trait::async_trait;
use serde::{Deserialize, Serialize};

use crate::Result;

pub use classify::{FailureClass, classify};
pub use frontier::{Candidate, ParetoFrontier};
pub use repair::heal;

/// Captured execution trace of a failed runner-based tool.
#[derive(Debug, Clone)]
pub struct FailureTrace {
    pub stdout: String,
    pub stderr: String,
    pub exit_code: Option<i32>,
    /// Stable signature for episodic recall (e.g. normalized error key).
    pub signature: String,
}

/// A candidate fix.
#[derive(Debug, Clone, PartialEq, Eq, Serialize, Deserialize)]
pub enum Patch {
    /// Add (or pin) dependencies — a manifest mutation.
    Dependency { add: Vec<String> },
    /// A code diff produced by reflection.
    Code { diff: String },
    /// Retry without mutation (transient failures).
    Retry,
    /// Combination of partial fixes (GEPA system-aware merge).
    Composite(Vec<Patch>),
}

/// Bounds on the repair loop.
#[derive(Debug, Clone)]
pub struct HealConfig {
    pub max_attempts: u32,
}

impl Default for HealConfig {
    fn default() -> Self {
        Self { max_attempts: 3 }
    }
}

/// Terminal status of a heal attempt.
#[derive(Debug, Clone, PartialEq, Eq)]
pub enum HealStatus {
    Fixed,
    GaveUp,
    /// Transient failure — caller should simply retry the original run.
    Transient,
    /// Needs a human (e.g. missing API key); not auto-fixable.
    UserActionable,
}

/// Result of a heal attempt.
#[derive(Debug, Clone)]
pub struct HealOutcome {
    pub status: HealStatus,
    pub patch: Option<Patch>,
    pub attempts: u32,
    pub report: String,
}

/// Reflection LLM: reads a trace + prior candidates and proposes a code patch.
#[async_trait]
pub trait Reflector: Send + Sync {
    async fn reflect(&self, trace: &FailureTrace, prior: &[Candidate]) -> Result<Patch>;
}

/// Runs a candidate (in isolation) and returns the set of test ids it passes.
#[async_trait]
pub trait Evaluator: Send + Sync {
    async fn evaluate(&self, patch: &Patch) -> Result<BTreeSet<String>>;
}

/// Episodic memory of fixes + skill distillation (Hermes).
///
/// Async because the live impl ([`memory_store::MemoryFixStore`]) is backed by the async
/// `Memory` trait + SQLite skill proposals (no `block_on` per project rules).
#[async_trait]
pub trait FixMemory: Send {
    /// Recall a previously successful patch for this error signature.
    async fn recall(&self, signature: &str) -> Option<Patch>;
    /// Record a successful patch keyed by error signature.
    async fn record(&mut self, signature: &str, patch: &Patch);
    /// Distill a successful fix into a reusable skill proposal.
    async fn distill_skill(&mut self, trace: &FailureTrace, patch: &Patch);
}
