//! The bounded GEPA+Hermes repair loop (PAR.5).

use std::collections::BTreeSet;

use super::FailureTrace;
use super::classify::{classify, dependency_patch};
use super::frontier::{Candidate, ParetoFrontier};
use super::{Evaluator, FailureClass, FixMemory, HealConfig, HealOutcome, HealStatus, Reflector};
use crate::Result;

/// Attempt to repair a failed runner-based tool.
///
/// Flow: episodic recall → classify → (transient/user-actionable short-circuits) →
/// bounded loop of (mutate via dependency-repair or reflection → evaluate → update Pareto
/// frontier) until full pass or the attempt budget is exhausted. On success the fix is
/// recorded to memory and distilled into a skill proposal.
pub async fn heal(
    trace: FailureTrace,
    test_ids: BTreeSet<String>,
    config: HealConfig,
    reflector: &dyn Reflector,
    evaluator: &dyn Evaluator,
    memory: &mut dyn FixMemory,
) -> Result<HealOutcome> {
    // 1. Episodic recall (Hermes): reuse a prior fix for this error signature.
    if let Some(remembered) = memory.recall(&trace.signature) {
        let passing = evaluator.evaluate(&remembered).await?;
        if passing == test_ids {
            return Ok(HealOutcome {
                status: HealStatus::Fixed,
                patch: Some(remembered),
                attempts: 0,
                report: "recalled prior fix".into(),
            });
        }
    }

    // 2. Classify — transient/user-actionable short-circuit without mutation.
    let class = classify(&trace.stderr, trace.exit_code);
    match class {
        FailureClass::Transient => {
            return Ok(HealOutcome {
                status: HealStatus::Transient,
                patch: None,
                attempts: 0,
                report: "transient failure; retry without mutation".into(),
            });
        }
        FailureClass::UserActionable => {
            return Ok(HealOutcome {
                status: HealStatus::UserActionable,
                patch: None,
                attempts: 0,
                report: format!("requires user action: {}", first_line(&trace.stderr)),
            });
        }
        _ => {}
    }

    // 3. Bounded GEPA loop: mutate → evaluate → update the Pareto frontier.
    let mut frontier = ParetoFrontier::new();
    let mut attempts = 0u32;
    while attempts < config.max_attempts {
        attempts += 1;
        let patch = match class {
            FailureClass::Dependency => dependency_patch(&trace.stderr),
            _ => reflector.reflect(&trace, frontier.candidates()).await?,
        };
        let passing = evaluator.evaluate(&patch).await?;
        frontier.add(Candidate {
            id: format!("c{attempts}"),
            patch: patch.clone(),
            passing: passing.clone(),
        });

        if passing == test_ids {
            // Success — persist (Hermes: record + distill a reusable skill).
            memory.record(&trace.signature, &patch);
            memory.distill_skill(&trace, &patch);
            return Ok(HealOutcome {
                status: HealStatus::Fixed,
                patch: Some(patch),
                attempts,
                report: "repaired".into(),
            });
        }
    }

    Ok(HealOutcome {
        status: HealStatus::GaveUp,
        patch: frontier.best().map(|c| c.patch.clone()),
        attempts,
        report: format!("gave up after {attempts} attempts"),
    })
}

fn first_line(s: &str) -> &str {
    s.lines().next().unwrap_or("").trim()
}

#[cfg(test)]
mod tests {
    use std::collections::BTreeSet;
    use std::sync::atomic::{AtomicUsize, Ordering};

    use async_trait::async_trait;

    use super::*;
    use crate::plugins::heal::frontier::Candidate;
    use crate::plugins::heal::{HealStatus, Patch};

    fn ids(items: &[&str]) -> BTreeSet<String> {
        items.iter().map(|s| s.to_string()).collect()
    }

    fn trace(stderr: &str) -> FailureTrace {
        FailureTrace {
            stdout: String::new(),
            stderr: stderr.into(),
            exit_code: Some(1),
            signature: "sig-1".into(),
        }
    }

    struct MockReflector {
        patch: Patch,
        calls: AtomicUsize,
    }
    #[async_trait]
    impl Reflector for MockReflector {
        async fn reflect(&self, _t: &FailureTrace, _prior: &[Candidate]) -> Result<Patch> {
            self.calls.fetch_add(1, Ordering::SeqCst);
            Ok(self.patch.clone())
        }
    }

    /// Evaluator that always returns the same passing set.
    struct FixedEvaluator {
        passing: BTreeSet<String>,
    }
    #[async_trait]
    impl Evaluator for FixedEvaluator {
        async fn evaluate(&self, _patch: &Patch) -> Result<BTreeSet<String>> {
            Ok(self.passing.clone())
        }
    }

    #[derive(Default)]
    struct MockMemory {
        recalled: Option<Patch>,
        recorded: Vec<(String, Patch)>,
        distilled: usize,
    }
    impl FixMemory for MockMemory {
        fn recall(&self, _signature: &str) -> Option<Patch> {
            self.recalled.clone()
        }
        fn record(&mut self, signature: &str, patch: &Patch) {
            self.recorded.push((signature.to_string(), patch.clone()));
        }
        fn distill_skill(&mut self, _trace: &FailureTrace, _patch: &Patch) {
            self.distilled += 1;
        }
    }

    fn reflector(patch: Patch) -> MockReflector {
        MockReflector {
            patch,
            calls: AtomicUsize::new(0),
        }
    }

    #[tokio::test]
    async fn heal_stops_on_full_pass() {
        let refl = reflector(Patch::Code { diff: "fix".into() });
        let eval = FixedEvaluator {
            passing: ids(&["t1", "t2"]),
        };
        let mut mem = MockMemory::default();
        let out = heal(
            trace("Traceback: ValueError"),
            ids(&["t1", "t2"]),
            HealConfig::default(),
            &refl,
            &eval,
            &mut mem,
        )
        .await
        .unwrap();
        assert_eq!(out.status, HealStatus::Fixed);
        assert_eq!(out.attempts, 1);
    }

    #[tokio::test]
    async fn heal_stops_at_max_attempts() {
        let refl = reflector(Patch::Code { diff: "fix".into() });
        let eval = FixedEvaluator {
            passing: BTreeSet::new(), // never passes
        };
        let mut mem = MockMemory::default();
        let out = heal(
            trace("Traceback: ValueError"),
            ids(&["t1"]),
            HealConfig { max_attempts: 3 },
            &refl,
            &eval,
            &mut mem,
        )
        .await
        .unwrap();
        assert_eq!(out.status, HealStatus::GaveUp);
        assert_eq!(out.attempts, 3);
    }

    #[tokio::test]
    async fn transient_retries_without_mutation() {
        let refl = reflector(Patch::Code { diff: "fix".into() });
        let eval = FixedEvaluator {
            passing: BTreeSet::new(),
        };
        let mut mem = MockMemory::default();
        let out = heal(
            trace("connection timed out"),
            ids(&["t1"]),
            HealConfig::default(),
            &refl,
            &eval,
            &mut mem,
        )
        .await
        .unwrap();
        assert_eq!(out.status, HealStatus::Transient);
        assert_eq!(refl.calls.load(Ordering::SeqCst), 0, "no mutation on transient");
    }

    #[tokio::test]
    async fn user_actionable_aborts_with_instructions() {
        let refl = reflector(Patch::Code { diff: "fix".into() });
        let eval = FixedEvaluator {
            passing: BTreeSet::new(),
        };
        let mut mem = MockMemory::default();
        let out = heal(
            trace("401 Unauthorized: missing API key"),
            ids(&["t1"]),
            HealConfig::default(),
            &refl,
            &eval,
            &mut mem,
        )
        .await
        .unwrap();
        assert_eq!(out.status, HealStatus::UserActionable);
        assert_eq!(refl.calls.load(Ordering::SeqCst), 0);
        assert!(!out.report.is_empty());
    }

    #[tokio::test]
    async fn known_fix_recalled_before_reflection() {
        let refl = reflector(Patch::Code { diff: "fix".into() });
        let eval = FixedEvaluator {
            passing: ids(&["t1"]),
        };
        let mut mem = MockMemory {
            recalled: Some(Patch::Code { diff: "remembered".into() }),
            ..Default::default()
        };
        let out = heal(
            trace("Traceback: ValueError"),
            ids(&["t1"]),
            HealConfig::default(),
            &refl,
            &eval,
            &mut mem,
        )
        .await
        .unwrap();
        assert_eq!(out.status, HealStatus::Fixed);
        assert_eq!(
            refl.calls.load(Ordering::SeqCst),
            0,
            "recalled fix must short-circuit reflection"
        );
    }

    #[tokio::test]
    async fn successful_fix_recorded_and_distilled() {
        let refl = reflector(Patch::Code { diff: "fix".into() });
        let eval = FixedEvaluator {
            passing: ids(&["t1"]),
        };
        let mut mem = MockMemory::default();
        let out = heal(
            trace("Traceback: ValueError"),
            ids(&["t1"]),
            HealConfig::default(),
            &refl,
            &eval,
            &mut mem,
        )
        .await
        .unwrap();
        assert_eq!(out.status, HealStatus::Fixed);
        assert_eq!(mem.recorded.len(), 1, "fix recorded to memory");
        assert_eq!(mem.distilled, 1, "fix distilled to skill proposal");
    }

    #[tokio::test]
    async fn dependency_class_uses_dependency_patch_not_reflector() {
        let refl = reflector(Patch::Code { diff: "fix".into() });
        let eval = FixedEvaluator {
            passing: ids(&["t1"]),
        };
        let mut mem = MockMemory::default();
        let out = heal(
            trace("ModuleNotFoundError: No module named 'numpy'"),
            ids(&["t1"]),
            HealConfig::default(),
            &refl,
            &eval,
            &mut mem,
        )
        .await
        .unwrap();
        assert_eq!(out.status, HealStatus::Fixed);
        assert_eq!(
            refl.calls.load(Ordering::SeqCst),
            0,
            "dependency failures repair the manifest, not via reflection"
        );
        assert!(matches!(out.patch, Some(Patch::Dependency { .. })));
    }
}
