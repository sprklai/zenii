# Wiki Schema

You are the wiki maintainer. Human curates sources and asks questions. You do everything else.
Read this file before any wiki operation. Never modify `wiki/sources/`. Never leave `index.md` or `log.md` out of sync.

## Structure

`wiki/sources/` — raw inputs (read-only) | `wiki/pages/` — your output | `wiki/index.md` — catalog | `wiki/log.md` — history

Page subdirs: `pages/concepts/` `pages/entities/` `pages/topics/` `pages/comparisons/` `pages/queries/`
Filenames: lowercase hyphen-separated slug (e.g. `transformer-architecture.md`)

## Type Taxonomy

| Type | What it covers | Examples |
|------|----------------|---------|
| entity | Named, concrete things that exist: people, orgs, products, tools, frameworks, models, datasets, events | "Andrej Karpathy", "OpenAI", "GPT-4", "PyTorch", "ImageNet" |
| concept | Abstract ideas, techniques, or patterns — not a named thing, but an idea | "attention mechanism", "zero-shot prompting", "chain-of-thought" |
| topic | Subject area or domain that organizes related pages — broader than a concept | "natural language processing", "model evaluation", "retrieval-augmented generation" |
| comparison | Side-by-side analysis of two or more entities or concepts | "GPT-4 vs Claude 3", "LoRA vs full fine-tuning" |
| query | A saved answer to a specific question about the wiki | "What are the main scaling laws?", "When was RLHF introduced?" |

**Entity extraction rule**: For every named person, organization, product, tool, model, dataset, or project mentioned in the source — create an entity page. Err on the side of more entity pages.

## Page Format

```
---
title: "Title"
type: concept|entity|topic|comparison|query
tags: [tag1, tag2]
aliases: ["alt name", "abbreviation"]
related: ["slug-1", "slug-2"]
confidence: low|medium|high
category: <subcategory>
sources: [source-file.md]
updated: YYYY-MM-DD
---

## TLDR
2-3 sentences. Definition sentence + significance sentence + optional relationship sentence.

## Body
Content. Use [[page-name]] for wiki links. Note counterarguments and (low confidence) claims.

## See Also
- [[related-page]]
```

### Frontmatter Fields

| Field | Required | Type | Description |
|-------|----------|------|-------------|
| `title` | yes | string | Canonical name |
| `type` | yes | string | One of: `concept`, `entity`, `topic`, `comparison`, `query` |
| `tags` | yes | `string[]` | Lowercase hyphenated category tags |
| `aliases` | yes | `string[]` | Alternative names/abbreviations. Empty `[]` if none. |
| `related` | yes | `string[]` | Semantic peer slugs ("read next"). 2–5 entries. |
| `confidence` | yes | `low\|medium\|high` | How well-sourced: high=direct evidence, low=inferred |
| `category` | yes | string | Sub-type within the page type (see taxonomy in INGEST_PROMPT.md) |
| `sources` | yes | `string[]` | Source filenames this page was compiled from |
| `updated` | yes | string | ISO 8601 date `YYYY-MM-DD` |

## Ingest

1. Read source fully
2. **Entity pass**: list all named people, orgs, products, tools, models, datasets, and projects in the source — each gets an entity page
3. List 2-5 key takeaways for the human
4. Create or update 5-15 pages: entity pages first, then concepts, topics, comparisons as needed (integrate new info, do not replace existing content)
5. Cross-link pages with `[[wiki-links]]`
6. Update `wiki/index.md` — add new entries, update changed summaries
7. Append to `wiki/log.md`: `## [YYYY-MM-DD] ingest | <filename> — <summary>`

## Query

1. Read `wiki/index.md`, identify relevant pages
2. Read those pages, follow `[[wiki-links]]` as needed
3. Answer with inline citations to page filenames
4. If answer is novel synthesis, offer to save as `pages/queries/` page and log it

## Lint

1. Read all pages in `wiki/pages/`
2. Report: contradictions, stale claims, orphan pages (no inbound links), missing links, source gaps
3. For each issue: file path, description, fix
4. Append: `## [YYYY-MM-DD] lint | <N> issues — <summary>`

## Conventions

| Rule | Detail |
|------|--------|
| Wiki links | `[[page-name]]` — filename without path or `.md` |
| Index entry | `- [[page-name]] — one-line summary (concept\|entity\|topic\|comparison\|query)` |
| Index sections | `## Concepts` `## Entities` `## Topics` `## Comparisons` `## Queries` |
| Log entry | `## [YYYY-MM-DD] ingest\|query\|lint \| description` — append only |
| Dates | ISO 8601 (`YYYY-MM-DD`) |
| Low confidence | Inline `(low confidence)` for weakly sourced claims |
| Frontmatter sources | List only direct sources for that page, not all wiki sources |
