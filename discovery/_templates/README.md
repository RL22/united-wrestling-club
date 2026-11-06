# Discovery templates

Copy one template into the library folder that fits the document, rename it, and fill in the frontmatter.

## Schema

```yaml
---
type: call | dossier | decision | spec | audit | inventory
status: draft | current | superseded | archived
group: client | site | strategy | market | brand | archive
owner: <person or team responsible for the doc>
date: YYYY-MM-DD (the document's own date)
last_reviewed: YYYY-MM-DD
sources: [<repo-relative path or URL>, ...]
replaced_by: <discovery-relative path> (required when status is superseded)
caveat: <one line> (optional)
title: <optional>
---
```

Library = .md files under discovery/client, site, strategy, market, brand, archive. README.md files are index pages and carry no frontmatter.

## Pick a type

- `call`: notes from one call or meeting. Use it for facts stated and decisions made on that call.
- `dossier`: research on one subject. Use it when findings need sources and implications.
- `decision`: one choice that was made. Use it to record the alternatives rejected and the files affected. Follows the ADR format in `discovery/decisions/`.
- `spec`: what to build or change. Use it for requirements, acceptance criteria, and status by item.
- `audit`: a check of something against a stated method. Use it for findings with severity and a re-check date.
- `inventory`: a catalogue of files, records, or assets. Use it for fields, counts, and how to regenerate the list.

## Lifecycle

draft -> current -> superseded -> archived

- **draft:** still being written. Do not cite it as settled.
- **current:** maintained. Cite it.
- **superseded:** replaced by a newer doc. Move it to `archive/superseded` and set `replaced_by` to the path of the replacement.
- **archived:** kept as history. Move it to `archive/snapshots`.

## Naming

- Call docs: `YYYY-MM-DD_<who>_<topic>.md`. Lowercase, with hyphens inside each part. Example: `2026-11-02_naweed_discovery-call.md`.
- Other docs: lowercase snake_case topic names. Example: `lead_response_system.md`.
