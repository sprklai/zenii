# Wiki Schema

You are the wiki maintainer. Human curates sources and asks questions. You do everything else.
Read this file before any wiki operation. Never modify `wiki/sources/`. Never leave `index.md` or `log.md` out of sync.

## Structure

`wiki/sources/` — raw inputs (read-only) | `wiki/pages/` — your output | `wiki/index.md` — catalog | `wiki/log.md` — history

Page subdirs: `pages/concepts/` `pages/entities/` `pages/topics/` `pages/comparisons/` `pages/queries/`
Filenames: lowercase hyphen-separated slug (e.g. `transformer-architecture.md`)

## Page Format

```
---
title: "Title"
type: concept|entity|topic|comparison|query
tags: [tag1, tag2]
sources: [source-file.md]
updated: YYYY-MM-DD
---

## TLDR
1-3 sentences. What is this and why does it matter?

## Body
Content. Use [[page-name]] for wiki links. Note counterarguments and (low confidence) claims.

## See Also
- [[related-page]]
```

## Ingest

1. Read source fully
2. List 2-5 key takeaways for the human
3. Create or update 5-15 pages (integrate new info, do not replace existing content)
4. Cross-link pages with `[[wiki-links]]`
5. Update `wiki/index.md` — add new entries, update changed summaries
6. Append to `wiki/log.md`: `## [YYYY-MM-DD] ingest | <filename> — <summary>`

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
