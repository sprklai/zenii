use std::path::{Path, PathBuf};

use serde::{Deserialize, Serialize};

use crate::error::ZeniiError;

// ── Data types ──────────────────────────────────────────────────────────────

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct WikiPage {
    pub slug: String,
    pub title: String,
    pub page_type: String, // concept|entity|topic|comparison|query
    pub tags: Vec<String>,
    pub sources: Vec<String>,
    pub updated: String,        // YYYY-MM-DD
    pub tldr: String,           // content after ## TLDR heading
    pub body: String,           // full raw markdown
    pub wikilinks: Vec<String>, // extracted [[slug]] targets
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct WikiGraph {
    pub nodes: Vec<WikiNode>,
    pub edges: Vec<WikiEdge>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct WikiNode {
    pub id: String,
    pub label: String,
    pub page_type: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct WikiEdge {
    pub from: String,
    pub to: String,
}

// ── Subdirectories created on init ──────────────────────────────────────────

const PAGE_SUBDIRS: &[&str] = &["concepts", "entities", "topics", "comparisons", "queries"];

// ── WikiManager ──────────────────────────────────────────────────────────────

pub struct WikiManager {
    wiki_dir: PathBuf,
}

impl WikiManager {
    pub fn new(wiki_dir: PathBuf) -> Result<Self, ZeniiError> {
        let pages_dir = wiki_dir.join("pages");
        for subdir in PAGE_SUBDIRS {
            std::fs::create_dir_all(pages_dir.join(subdir))?;
        }
        Ok(Self { wiki_dir })
    }

    /// Return the root wiki directory path.
    pub fn wiki_dir(&self) -> &Path {
        &self.wiki_dir
    }

    pub fn list_pages(&self) -> Result<Vec<WikiPage>, ZeniiError> {
        let pages_dir = self.wiki_dir.join("pages");
        let mut pages = Vec::new();
        walk_pages_dir(&pages_dir, &mut pages)?;
        Ok(pages)
    }

    pub fn get_page(&self, slug: &str) -> Result<Option<WikiPage>, ZeniiError> {
        let pages_dir = self.wiki_dir.join("pages");
        find_page_in_dir(&pages_dir, slug)
    }

    pub fn search_pages(&self, query: &str) -> Result<Vec<WikiPage>, ZeniiError> {
        let all = self.list_pages()?;
        if query.is_empty() {
            return Ok(all);
        }
        let q = query.to_lowercase();
        Ok(all
            .into_iter()
            .filter(|p| p.title.to_lowercase().contains(&q) || p.body.to_lowercase().contains(&q))
            .collect())
    }

    pub async fn sync_to_memory(
        &self,
        memory: &dyn crate::memory::traits::Memory,
    ) -> Result<usize, ZeniiError> {
        let pages = self.list_pages()?;
        let mut count = 0;
        for page in pages {
            let content = if !page.tldr.trim().is_empty() {
                page.tldr.clone()
            } else if !page.title.trim().is_empty() {
                page.title.clone()
            } else {
                continue;
            };
            let key = format!("wiki:{}", page.slug);
            memory
                .store(
                    &key,
                    &content,
                    crate::memory::traits::MemoryCategory::Custom("wiki".into()),
                )
                .await?;
            count += 1;
        }
        Ok(count)
    }

    pub fn graph(&self) -> Result<WikiGraph, ZeniiError> {
        let pages = self.list_pages()?;
        let nodes = pages
            .iter()
            .map(|p| WikiNode {
                id: p.slug.clone(),
                label: p.title.clone(),
                page_type: p.page_type.clone(),
            })
            .collect();
        let edges = pages
            .iter()
            .flat_map(|p| {
                p.wikilinks.iter().map(move |link| WikiEdge {
                    from: p.slug.clone(),
                    to: link.clone(),
                })
            })
            .collect();
        Ok(WikiGraph { nodes, edges })
    }

    /// Write content as a new wiki page (used by ingest handler).
    /// Converts filename to a slug, writes to pages/topics/{slug}.md.
    pub fn ingest(&self, filename: &str, content: &str) -> Result<WikiPage, ZeniiError> {
        let slug = filename
            .trim_end_matches(".md")
            .to_lowercase()
            .replace(' ', "-");
        let page_path = self
            .wiki_dir
            .join("pages")
            .join("topics")
            .join(format!("{slug}.md"));
        let name_hint = filename.trim_end_matches(".md").trim().to_string();
        std::fs::write(&page_path, content)?;
        parse_page(slug, &page_path, Some(&name_hint))
    }

    /// Write a wiki page to the appropriate subdirectory for the given type.
    /// `page_type` must be one of: concepts, entities, topics, comparisons, queries.
    pub fn write_page(
        &self,
        page_type: &str,
        slug: &str,
        content: &str,
    ) -> Result<WikiPage, ZeniiError> {
        if !PAGE_SUBDIRS.contains(&page_type) {
            return Err(ZeniiError::Validation(format!(
                "invalid page type '{page_type}'; must be one of: {}",
                PAGE_SUBDIRS.join(", ")
            )));
        }
        let page_path = self
            .wiki_dir
            .join("pages")
            .join(page_type)
            .join(format!("{slug}.md"));
        std::fs::write(&page_path, content)?;
        parse_page(slug.to_string(), &page_path, None)
    }

    /// Save raw source content to wiki/sources/{filename}.
    pub fn save_source(&self, filename: &str, content: &str) -> Result<(), ZeniiError> {
        let sources_dir = self.wiki_dir.join("sources");
        std::fs::create_dir_all(&sources_dir)?;
        std::fs::write(sources_dir.join(filename), content)?;
        Ok(())
    }

    /// Rewrite wiki/index.md from the current set of pages.
    pub fn update_index(&self) -> Result<(), ZeniiError> {
        let pages = self.list_pages()?;
        let mut lines = vec![
            "# Wiki Index".to_string(),
            "<!-- LLM maintains this file. Do not edit manually. -->".to_string(),
            "<!-- Format: - [[page-name]] — one-line summary (type) -->".to_string(),
            String::new(),
        ];
        if pages.is_empty() {
            lines.push("_No pages yet. Ingest your first source to get started._".to_string());
        } else {
            for page in &pages {
                let tldr = if page.tldr.is_empty() {
                    "—".to_string()
                } else {
                    page.tldr.lines().next().unwrap_or("—").to_string()
                };
                lines.push(format!("- [[{}]] — {} ({})", page.slug, tldr, page.page_type));
            }
        }
        let content = lines.join("\n") + "\n";
        std::fs::write(self.wiki_dir.join("index.md"), content)?;
        Ok(())
    }

    /// Append a log entry to wiki/log.md.
    pub fn append_log(&self, entry: &str) -> Result<(), ZeniiError> {
        let log_path = self.wiki_dir.join("log.md");
        let existing = if log_path.exists() {
            std::fs::read_to_string(&log_path)?
        } else {
            "# Wiki Log\n<!-- Append-only. LLM appends entries after each operation. -->\n"
                .to_string()
        };
        let updated = format!("{existing}\n{entry}\n");
        std::fs::write(&log_path, updated)?;
        Ok(())
    }
}

// ── Helper functions ─────────────────────────────────────────────────────────

fn walk_pages_dir(dir: &Path, pages: &mut Vec<WikiPage>) -> Result<(), ZeniiError> {
    if !dir.exists() {
        return Ok(());
    }
    for entry in std::fs::read_dir(dir)? {
        let entry = entry?;
        let path = entry.path();
        if path.is_dir() {
            walk_pages_dir(&path, pages)?;
        } else if path.extension().is_some_and(|e| e == "md") {
            let slug = path
                .file_stem()
                .unwrap_or_default()
                .to_string_lossy()
                .into_owned();
            pages.push(parse_page(slug, &path, None)?);
        }
    }
    Ok(())
}

fn find_page_in_dir(dir: &Path, slug: &str) -> Result<Option<WikiPage>, ZeniiError> {
    if !dir.exists() {
        return Ok(None);
    }
    for entry in std::fs::read_dir(dir)? {
        let entry = entry?;
        let path = entry.path();
        if path.is_dir() {
            if let Some(found) = find_page_in_dir(&path, slug)? {
                return Ok(Some(found));
            }
        } else if path.extension().is_some_and(|e| e == "md") {
            let file_slug = path.file_stem().unwrap_or_default().to_string_lossy();
            if file_slug == slug {
                return Ok(Some(parse_page(slug.to_string(), &path, None)?));
            }
        }
    }
    Ok(None)
}

fn parse_page(
    slug: String,
    path: &Path,
    filename_hint: Option<&str>,
) -> Result<WikiPage, ZeniiError> {
    let content = std::fs::read_to_string(path)?;

    let (frontmatter_str, body) = if let Some(rest) = content.strip_prefix("---") {
        if let Some(end_idx) = rest.find("\n---") {
            (&rest[..end_idx], &rest[end_idx + 4..])
        } else {
            ("", content.as_str())
        }
    } else {
        ("", content.as_str())
    };

    #[derive(serde::Deserialize, Default)]
    struct Frontmatter {
        title: Option<String>,
        #[serde(rename = "type", default)]
        page_type: Option<String>,
        #[serde(default)]
        tags: Option<Vec<String>>,
        #[serde(default)]
        sources: Option<Vec<String>>,
        #[serde(default)]
        updated: Option<String>,
    }

    let fm: Frontmatter = serde_yaml::from_str(frontmatter_str).unwrap_or_default();
    let tldr = extract_section(body, "TLDR");
    let wikilinks = extract_wikilinks(body);

    let title = fm.title.unwrap_or_else(|| {
        // 1. First # heading in the body
        body.lines()
            .find(|l| l.starts_with("# "))
            .map(|l| l[2..].trim().to_string())
            // 2. Original filename (preserves casing: "GitHub Stars.md" → "GitHub Stars")
            .or_else(|| {
                filename_hint
                    .filter(|s| !s.is_empty())
                    .map(|s| s.to_string())
            })
            // 3. Humanize slug: "my-doc" → "My Doc"
            .unwrap_or_else(|| {
                slug.replace('-', " ")
                    .split_whitespace()
                    .map(|w| {
                        let mut chars = w.chars();
                        match chars.next() {
                            None => String::new(),
                            Some(f) => f.to_uppercase().to_string() + chars.as_str(),
                        }
                    })
                    .collect::<Vec<_>>()
                    .join(" ")
            })
    });

    Ok(WikiPage {
        slug,
        title,
        page_type: fm.page_type.unwrap_or_else(|| "topic".into()),
        tags: fm.tags.unwrap_or_default(),
        sources: fm.sources.unwrap_or_default(),
        updated: fm.updated.unwrap_or_default(),
        tldr,
        body: body.to_string(),
        wikilinks,
    })
}

fn extract_section(body: &str, heading: &str) -> String {
    let target = format!("## {heading}");
    let mut in_section = false;
    let mut lines: Vec<&str> = Vec::new();
    for line in body.lines() {
        if line.starts_with("## ") {
            if in_section {
                break;
            }
            if line == target {
                in_section = true;
            }
        } else if in_section {
            lines.push(line);
        }
    }
    lines.join("\n").trim().to_string()
}

fn extract_wikilinks(body: &str) -> Vec<String> {
    let mut links = Vec::new();
    let mut rest = body;
    while let Some(open) = rest.find("[[") {
        rest = &rest[open + 2..];
        if let Some(close) = rest.find("]]") {
            let link = rest[..close].to_string();
            if !link.is_empty() {
                links.push(link);
            }
            rest = &rest[close + 2..];
        } else {
            break;
        }
    }
    links
}

// ── Tests ────────────────────────────────────────────────────────────────────

#[cfg(test)]
mod tests {
    use super::*;
    use std::fs;
    use std::path::Path;
    use tempfile::TempDir;

    fn sample_page_content() -> &'static str {
        r#"---
title: "Test Concept"
type: concept
tags: [test, example]
sources: [source.md]
updated: 2026-01-01
---

## TLDR
This is a test concept.

## Body
References [[another-page]] for related info.

## See Also
- [[another-page]]
"#
    }

    fn write_page(dir: &Path, subdir: &str, slug: &str, content: &str) {
        let page_dir = dir.join("pages").join(subdir);
        fs::create_dir_all(&page_dir).unwrap();
        fs::write(page_dir.join(format!("{slug}.md")), content).unwrap();
    }

    // W1: WikiManager::new creates required subdirectory structure
    #[test]
    fn new_creates_pages_subdirs() {
        let dir = TempDir::new().unwrap();
        let _mgr = WikiManager::new(dir.path().to_path_buf()).unwrap();
        assert!(dir.path().join("pages/concepts").is_dir());
    }

    // W2: Listing an empty wiki returns an empty vec
    #[test]
    fn list_pages_empty_wiki_returns_empty() {
        let dir = TempDir::new().unwrap();
        let mgr = WikiManager::new(dir.path().to_path_buf()).unwrap();
        let pages = mgr.list_pages().unwrap();
        assert!(pages.is_empty());
    }

    // W3: list_pages discovers all .md files under pages/
    #[test]
    fn list_pages_finds_markdown_files() {
        let dir = TempDir::new().unwrap();
        write_page(dir.path(), "concepts", "page-one", sample_page_content());
        write_page(dir.path(), "concepts", "page-two", sample_page_content());
        let mgr = WikiManager::new(dir.path().to_path_buf()).unwrap();
        let pages = mgr.list_pages().unwrap();
        assert_eq!(pages.len(), 2);
    }

    // W4: list_pages ignores non-.md files
    #[test]
    fn list_pages_skips_non_markdown() {
        let dir = TempDir::new().unwrap();
        write_page(dir.path(), "concepts", "real-page", sample_page_content());
        // Write a .txt sibling that should be ignored
        let concept_dir = dir.path().join("pages/concepts");
        fs::create_dir_all(&concept_dir).unwrap();
        fs::write(concept_dir.join("notes.txt"), "ignore me").unwrap();
        let mgr = WikiManager::new(dir.path().to_path_buf()).unwrap();
        let pages = mgr.list_pages().unwrap();
        assert_eq!(pages.len(), 1);
    }

    // W5: get_page returns Some with correct title for an existing slug
    #[test]
    fn get_page_returns_some_for_existing_slug() {
        let dir = TempDir::new().unwrap();
        write_page(dir.path(), "concepts", "test-page", sample_page_content());
        let mgr = WikiManager::new(dir.path().to_path_buf()).unwrap();
        let page = mgr.get_page("test-page").unwrap();
        assert!(page.is_some());
        assert_eq!(page.unwrap().title, "Test Concept");
    }

    // W6: get_page returns None for a slug that does not exist
    #[test]
    fn get_page_returns_none_for_missing_slug() {
        let dir = TempDir::new().unwrap();
        let mgr = WikiManager::new(dir.path().to_path_buf()).unwrap();
        let page = mgr.get_page("no-such-page").unwrap();
        assert!(page.is_none());
    }

    // W7: search_pages matches against page title (case-insensitive)
    #[test]
    fn search_pages_matches_title() {
        let dir = TempDir::new().unwrap();
        write_page(dir.path(), "concepts", "my-concept", sample_page_content());
        let mgr = WikiManager::new(dir.path().to_path_buf()).unwrap();
        let results = mgr.search_pages("concept").unwrap();
        assert!(!results.is_empty());
        assert!(results.iter().any(|p| p.slug == "my-concept"));
    }

    // W8: search_pages matches against body text
    #[test]
    fn search_pages_matches_body_content() {
        let dir = TempDir::new().unwrap();
        let content = r#"---
title: "Body Search Test"
type: topic
tags: []
sources: []
updated: 2026-01-01
---

## TLDR
Short summary.

## Body
This page contains rare_unique_word somewhere in the body.
"#;
        write_page(dir.path(), "topics", "body-page", content);
        let mgr = WikiManager::new(dir.path().to_path_buf()).unwrap();
        let results = mgr.search_pages("rare_unique_word").unwrap();
        assert!(!results.is_empty());
    }

    // W9: empty query string returns all pages
    #[test]
    fn search_pages_empty_query_returns_all() {
        let dir = TempDir::new().unwrap();
        write_page(dir.path(), "concepts", "page-alpha", sample_page_content());
        write_page(dir.path(), "concepts", "page-beta", sample_page_content());
        let mgr = WikiManager::new(dir.path().to_path_buf()).unwrap();
        let results = mgr.search_pages("").unwrap();
        assert_eq!(results.len(), 2);
    }

    // W10: frontmatter fields are extracted correctly
    #[test]
    fn parse_frontmatter_extracts_fields() {
        let dir = TempDir::new().unwrap();
        write_page(dir.path(), "concepts", "fm-test", sample_page_content());
        let mgr = WikiManager::new(dir.path().to_path_buf()).unwrap();
        let page = mgr.get_page("fm-test").unwrap().unwrap();
        assert_eq!(page.title, "Test Concept");
        assert_eq!(page.page_type, "concept");
        assert_eq!(page.tags, vec!["test", "example"]);
        assert_eq!(page.sources, vec!["source.md"]);
        assert_eq!(page.updated, "2026-01-01");
    }

    // W11: missing frontmatter fields fall back to safe defaults
    #[test]
    fn parse_frontmatter_partial_uses_defaults() {
        let dir = TempDir::new().unwrap();
        let minimal = r#"---
title: "Minimal Page"
---

## TLDR
Bare minimum.

## Body
No tags, no type, no sources.
"#;
        write_page(dir.path(), "topics", "minimal-page", minimal);
        let mgr = WikiManager::new(dir.path().to_path_buf()).unwrap();
        let page = mgr.get_page("minimal-page").unwrap().unwrap();
        assert_eq!(page.page_type, "topic");
        assert!(page.tags.is_empty());
        assert!(page.sources.is_empty());
    }

    // W12: sync_to_memory stores one entry per page and returns the count
    #[tokio::test]
    async fn sync_to_memory_stores_one_entry_per_page() {
        use crate::memory::in_memory_store::InMemoryStore;

        let dir = TempDir::new().unwrap();
        write_page(dir.path(), "concepts", "page-1", sample_page_content());
        write_page(dir.path(), "concepts", "page-2", sample_page_content());
        write_page(dir.path(), "concepts", "page-3", sample_page_content());
        let mgr = WikiManager::new(dir.path().to_path_buf()).unwrap();
        let store = InMemoryStore::new();
        let count = mgr.sync_to_memory(&store).await.unwrap();
        assert_eq!(count, 3);
    }

    // W13: graph nodes correspond 1-to-1 with pages
    #[test]
    fn graph_nodes_match_pages() {
        let dir = TempDir::new().unwrap();
        write_page(dir.path(), "concepts", "node-a", sample_page_content());
        write_page(dir.path(), "concepts", "node-b", sample_page_content());
        let mgr = WikiManager::new(dir.path().to_path_buf()).unwrap();
        let graph = mgr.graph().unwrap();
        assert_eq!(graph.nodes.len(), 2);
    }

    // W14: wikilinks in page body generate directed edges in the graph
    #[test]
    fn graph_edges_follow_wikilinks() {
        let dir = TempDir::new().unwrap();
        let page_a = r#"---
title: "Page A"
type: concept
tags: []
sources: []
updated: 2026-01-01
---

## TLDR
Links to page-b.

## Body
See [[page-b]] for details.
"#;
        let page_b = r#"---
title: "Page B"
type: concept
tags: []
sources: []
updated: 2026-01-01
---

## TLDR
The target page.

## Body
No outbound links here.
"#;
        write_page(dir.path(), "concepts", "page-a", page_a);
        write_page(dir.path(), "concepts", "page-b", page_b);
        let mgr = WikiManager::new(dir.path().to_path_buf()).unwrap();
        let graph = mgr.graph().unwrap();
        let has_edge = graph
            .edges
            .iter()
            .any(|e| e.from == "page-a" && e.to == "page-b");
        assert!(has_edge, "expected edge from page-a to page-b");
    }

    // W15: ingest uses original filename as title when no frontmatter title present
    #[test]
    fn ingest_title_falls_back_to_filename() {
        let dir = TempDir::new().unwrap();
        let mgr = WikiManager::new(dir.path().to_path_buf()).unwrap();
        let page = mgr
            .ingest("GitHub Stars Growth Tips.md", "No frontmatter here.\n")
            .unwrap();
        assert_eq!(page.title, "GitHub Stars Growth Tips");
    }

    // W16: ingest prefers # heading over filename when both are present
    #[test]
    fn ingest_title_prefers_heading_over_filename() {
        let dir = TempDir::new().unwrap();
        let mgr = WikiManager::new(dir.path().to_path_buf()).unwrap();
        let content = "# Actual Heading Title\n\nSome body text.\n";
        let page = mgr.ingest("some-filename.md", content).unwrap();
        assert_eq!(page.title, "Actual Heading Title");
    }

    // W17: ingest prefers frontmatter title over # heading and filename
    #[test]
    fn ingest_title_prefers_frontmatter_over_heading_and_filename() {
        let dir = TempDir::new().unwrap();
        let mgr = WikiManager::new(dir.path().to_path_buf()).unwrap();
        let content = "---\ntitle: \"Frontmatter Wins\"\n---\n\n# Heading Title\n\nBody.\n";
        let page = mgr.ingest("some-filename.md", content).unwrap();
        assert_eq!(page.title, "Frontmatter Wins");
    }

    // W18: title falls back to humanized slug when no frontmatter, heading, or filename hint
    #[test]
    fn parse_page_title_falls_back_to_humanized_slug() {
        let dir = TempDir::new().unwrap();
        write_page(
            dir.path(),
            "topics",
            "my-doc-slug",
            "No frontmatter, no heading.\n",
        );
        let mgr = WikiManager::new(dir.path().to_path_buf()).unwrap();
        let page = mgr.get_page("my-doc-slug").unwrap().unwrap();
        assert_eq!(page.title, "My Doc Slug");
    }

    // W19: write_page creates the file in the correct subdirectory and parses it back
    #[test]
    fn write_page_creates_file_in_correct_subdir() {
        let dir = TempDir::new().unwrap();
        let mgr = WikiManager::new(dir.path().to_path_buf()).unwrap();
        let page = mgr
            .write_page("concepts", "test-concept", sample_page_content())
            .unwrap();
        assert_eq!(page.slug, "test-concept");
        assert!(dir.path().join("pages/concepts/test-concept.md").exists());
    }

    // W20: write_page returns a Validation error for an unrecognised page type
    #[test]
    fn write_page_rejects_invalid_type() {
        let dir = TempDir::new().unwrap();
        let mgr = WikiManager::new(dir.path().to_path_buf()).unwrap();
        let err = mgr
            .write_page("invalid-type", "my-page", "content")
            .unwrap_err();
        assert!(matches!(err, crate::error::ZeniiError::Validation(_)));
    }

    // W21: update_index rewrites index.md with a line per page
    #[test]
    fn update_index_writes_entries_for_all_pages() {
        let dir = TempDir::new().unwrap();
        write_page(dir.path(), "concepts", "page-a", sample_page_content());
        write_page(dir.path(), "topics", "page-b", sample_page_content());
        let mgr = WikiManager::new(dir.path().to_path_buf()).unwrap();
        mgr.update_index().unwrap();
        let index = fs::read_to_string(dir.path().join("index.md")).unwrap();
        assert!(index.contains("[[page-a]]"), "index must mention page-a");
        assert!(index.contains("[[page-b]]"), "index must mention page-b");
    }

    // W22: append_log appends entries to log.md without overwriting existing content
    #[test]
    fn append_log_appends_without_overwriting() {
        let dir = TempDir::new().unwrap();
        fs::write(dir.path().join("log.md"), "# Wiki Log\n").unwrap();
        let mgr = WikiManager::new(dir.path().to_path_buf()).unwrap();
        mgr.append_log("## [2026-04-09] ingest | first-entry").unwrap();
        mgr.append_log("## [2026-04-09] ingest | second-entry").unwrap();
        let log = fs::read_to_string(dir.path().join("log.md")).unwrap();
        assert!(log.contains("# Wiki Log"), "initial content must be preserved");
        assert!(log.contains("first-entry"), "first entry must be present");
        assert!(log.contains("second-entry"), "second entry must be present");
    }

    // W23: save_source writes raw content to wiki/sources/
    #[test]
    fn save_source_writes_to_sources_dir() {
        let dir = TempDir::new().unwrap();
        let mgr = WikiManager::new(dir.path().to_path_buf()).unwrap();
        mgr.save_source("my-doc.md", "Raw source content").unwrap();
        let saved = fs::read_to_string(dir.path().join("sources/my-doc.md")).unwrap();
        assert_eq!(saved, "Raw source content");
    }
}
