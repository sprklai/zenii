//! Pareto frontier of candidate fixes (PAR.5, GEPA).
//!
//! Keeps candidates that pass *different* subsets of the eval tests, so the loop does not
//! collapse to a single greedy line and can merge complementary partial fixes.

use std::collections::BTreeSet;

use super::Patch;

/// A candidate fix and the set of test ids it passes.
#[derive(Debug, Clone)]
pub struct Candidate {
    pub id: String,
    pub patch: Patch,
    pub passing: BTreeSet<String>,
}

/// A Pareto frontier of candidates keyed by their passing-test subsets.
#[derive(Debug, Default)]
pub struct ParetoFrontier {
    candidates: Vec<Candidate>,
}

impl ParetoFrontier {
    pub fn new() -> Self {
        Self::default()
    }

    pub fn is_empty(&self) -> bool {
        self.candidates.is_empty()
    }

    pub fn candidates(&self) -> &[Candidate] {
        &self.candidates
    }

    /// Add a candidate. Skips it if dominated by an existing candidate; otherwise removes
    /// any existing candidates it dominates and inserts it. Returns true if inserted.
    pub fn add(&mut self, candidate: Candidate) -> bool {
        if self.candidates.iter().any(|e| dominates(e, &candidate)) {
            return false;
        }
        self.candidates.retain(|e| !dominates(&candidate, e));
        self.candidates.push(candidate);
        true
    }

    /// Select the candidate with the highest coverage (most tests passing).
    pub fn select(&self) -> Option<&Candidate> {
        self.candidates.iter().max_by_key(|c| c.passing.len())
    }

    /// The best candidate so far (alias for [`Self::select`]).
    pub fn best(&self) -> Option<&Candidate> {
        self.select()
    }

    /// Merge two complementary candidates into one whose passing set is the union.
    pub fn merge(a: &Candidate, b: &Candidate) -> Candidate {
        let mut passing = a.passing.clone();
        passing.extend(b.passing.iter().cloned());
        Candidate {
            id: format!("{}+{}", a.id, b.id),
            patch: Patch::Composite(vec![a.patch.clone(), b.patch.clone()]),
            passing,
        }
    }
}

/// Whether `a` strictly dominates `b`: passes a superset of tests, and strictly more of them.
fn dominates(a: &Candidate, b: &Candidate) -> bool {
    a.passing.is_superset(&b.passing) && a.passing.len() > b.passing.len()
}

#[cfg(test)]
mod tests {
    use super::*;

    fn cand(id: &str, passing: &[&str]) -> Candidate {
        Candidate {
            id: id.into(),
            patch: Patch::Code { diff: id.into() },
            passing: passing.iter().map(|s| s.to_string()).collect(),
        }
    }

    #[test]
    fn frontier_empty_returns_none() {
        let f = ParetoFrontier::new();
        assert!(f.select().is_none());
        assert!(f.best().is_none());
        assert!(f.is_empty());
    }

    #[test]
    fn frontier_keeps_candidate_passing_new_testcase() {
        let mut f = ParetoFrontier::new();
        assert!(f.add(cand("a", &["t1"])));
        // Disjoint coverage — neither dominates, both kept.
        assert!(f.add(cand("b", &["t2"])));
        assert_eq!(f.candidates().len(), 2);
    }

    #[test]
    fn frontier_drops_dominated_candidate() {
        let mut f = ParetoFrontier::new();
        assert!(f.add(cand("a", &["t1"])));
        // b passes a superset → dominates a; a is dropped.
        assert!(f.add(cand("b", &["t1", "t2"])));
        assert_eq!(f.candidates().len(), 1);
        assert_eq!(f.candidates()[0].id, "b");
        // Adding a now-dominated candidate is rejected.
        assert!(!f.add(cand("c", &["t1"])));
        assert_eq!(f.candidates().len(), 1);
    }

    #[test]
    fn frontier_select_prefers_higher_coverage() {
        let mut f = ParetoFrontier::new();
        f.add(cand("a", &["t1", "t2"]));
        f.add(cand("b", &["t3"]));
        assert_eq!(f.select().unwrap().id, "a");
    }

    #[test]
    fn frontier_merge_combines_partial_fixes() {
        let a = cand("a", &["t1"]);
        let b = cand("b", &["t2"]);
        let merged = ParetoFrontier::merge(&a, &b);
        let expected: BTreeSet<String> = ["t1", "t2"].iter().map(|s| s.to_string()).collect();
        assert_eq!(merged.passing, expected);
    }
}
