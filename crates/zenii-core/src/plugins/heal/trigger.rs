//! PAR.7d — [`Healer`]: bundles the live self-heal seams (reflector, evaluator, memory)
//! plus the configured budgets into a single `repair(trace)` call, and helpers to build a
//! [`FailureTrace`] from a failed runner invocation.

use std::collections::BTreeSet;
use std::sync::Arc;
use std::time::Duration;

use tokio::sync::Mutex;

use super::classify::extract_missing_module;
use super::{
    Evaluator, FailureTrace, FixMemory, HealConfig, HealOutcome, HealStatus, Reflector, heal,
};
use crate::Result;

/// One-call self-heal trigger wrapping the bounded [`heal`] loop with a wall-clock budget.
pub struct Healer {
    reflector: Arc<dyn Reflector>,
    evaluator: Arc<dyn Evaluator>,
    memory: Arc<Mutex<dyn FixMemory>>,
    test_ids: BTreeSet<String>,
    config: HealConfig,
    wall_clock: Duration,
}

impl Healer {
    pub fn new(
        reflector: Arc<dyn Reflector>,
        evaluator: Arc<dyn Evaluator>,
        memory: Arc<Mutex<dyn FixMemory>>,
        test_count: usize,
        config: HealConfig,
        wall_clock: Duration,
    ) -> Self {
        let test_ids = (0..test_count).map(|i| format!("case-{i}")).collect();
        Self {
            reflector,
            evaluator,
            memory,
            test_ids,
            config,
            wall_clock,
        }
    }

    /// Run the bounded repair loop, enforcing the wall-clock budget.
    pub async fn repair(&self, trace: FailureTrace) -> Result<HealOutcome> {
        let mut guard = self.memory.lock().await;
        let fut = heal(
            trace,
            self.test_ids.clone(),
            self.config.clone(),
            &*self.reflector,
            &*self.evaluator,
            &mut *guard,
        );
        match tokio::time::timeout(self.wall_clock, fut).await {
            Ok(res) => res,
            Err(_) => Ok(HealOutcome {
                status: HealStatus::GaveUp,
                patch: None,
                attempts: self.config.max_attempts,
                report: format!(
                    "heal exceeded wall-clock budget of {}s",
                    self.wall_clock.as_secs()
                ),
            }),
        }
    }
}

/// Build a [`FailureTrace`] from a failed runner invocation.
pub fn build_trace(stdout: String, stderr: String, exit_code: Option<i32>) -> FailureTrace {
    let signature = failure_signature(&stderr);
    FailureTrace {
        stdout,
        stderr,
        exit_code,
        signature,
    }
}

/// Derive a stable episodic-recall signature from stderr: a missing-module key when present,
/// else the first non-empty line (normalized, capped).
pub fn failure_signature(stderr: &str) -> String {
    if let Some(module) = extract_missing_module(stderr) {
        return format!("missing-module:{module}");
    }
    stderr
        .lines()
        .map(str::trim)
        .find(|l| !l.is_empty())
        .unwrap_or("unknown")
        .chars()
        .take(120)
        .collect()
}

#[cfg(test)]
mod tests {
    use std::collections::BTreeSet;

    use async_trait::async_trait;

    use super::*;
    use crate::plugins::heal::{Candidate, Patch};

    fn ids(items: &[&str]) -> BTreeSet<String> {
        items.iter().map(|s| s.to_string()).collect()
    }

    struct CannedReflector(Patch);
    #[async_trait]
    impl Reflector for CannedReflector {
        async fn reflect(&self, _t: &FailureTrace, _p: &[Candidate]) -> Result<Patch> {
            Ok(self.0.clone())
        }
    }

    struct FixedEvaluator {
        passing: BTreeSet<String>,
        delay: Duration,
    }
    #[async_trait]
    impl Evaluator for FixedEvaluator {
        async fn evaluate(&self, _patch: &Patch) -> Result<BTreeSet<String>> {
            if !self.delay.is_zero() {
                tokio::time::sleep(self.delay).await;
            }
            Ok(self.passing.clone())
        }
    }

    #[derive(Default)]
    struct NoopMemory;
    #[async_trait]
    impl FixMemory for NoopMemory {
        async fn recall(&self, _s: &str) -> Option<Patch> {
            None
        }
        async fn record(&mut self, _s: &str, _p: &Patch) {}
        async fn distill_skill(&mut self, _t: &FailureTrace, _p: &Patch) {}
    }

    fn healer(evaluator: FixedEvaluator, wall_clock: Duration) -> Healer {
        Healer::new(
            Arc::new(CannedReflector(Patch::Code { diff: "d".into() })),
            Arc::new(evaluator),
            Arc::new(Mutex::new(NoopMemory)),
            1,
            HealConfig { max_attempts: 3 },
            wall_clock,
        )
    }

    #[tokio::test]
    async fn repair_returns_fixed_when_evaluator_passes() {
        let h = healer(
            FixedEvaluator {
                passing: ids(&["case-0"]),
                delay: Duration::ZERO,
            },
            Duration::from_secs(10),
        );
        let out = h
            .repair(build_trace(
                String::new(),
                "Traceback: boom".into(),
                Some(1),
            ))
            .await
            .unwrap();
        assert_eq!(out.status, HealStatus::Fixed);
    }

    #[tokio::test]
    async fn repair_gives_up_when_wall_clock_exhausted() {
        let h = healer(
            FixedEvaluator {
                passing: ids(&["case-0"]),
                delay: Duration::from_secs(30),
            },
            Duration::from_millis(50),
        );
        let out = h
            .repair(build_trace(
                String::new(),
                "Traceback: boom".into(),
                Some(1),
            ))
            .await
            .unwrap();
        assert_eq!(out.status, HealStatus::GaveUp);
        assert!(out.report.contains("wall-clock"));
    }

    #[test]
    fn failure_signature_prefers_missing_module() {
        let sig = failure_signature("ModuleNotFoundError: No module named 'numpy'");
        assert_eq!(sig, "missing-module:numpy");
    }

    #[test]
    fn failure_signature_falls_back_to_first_line() {
        let sig = failure_signature("\n  ValueError: bad input\nsecond line\n");
        assert_eq!(sig, "ValueError: bad input");
    }

    #[test]
    fn build_trace_sets_signature() {
        let t = build_trace(
            "out".into(),
            "ModuleNotFoundError: No module named 'x'".into(),
            Some(1),
        );
        assert_eq!(t.signature, "missing-module:x");
        assert_eq!(t.exit_code, Some(1));
    }
}
