---
type: audit                 # call | dossier | decision | spec | audit | inventory
status: draft               # draft | current | superseded | archived
group: <client | site | strategy | market | brand | archive>
owner: <person or team responsible for the doc>
date: <YYYY-MM-DD>         # the date the audit was run
last_reviewed: <YYYY-MM-DD>
sources: [<repo-relative path or URL>]
replaced_by:                # required only when status is superseded
caveat:                     # optional, one line
title: <optional title>
---

# <Topic> audit

## TL;DR
- <one claim from this document>
- <one claim from this document>

## Scope
<What was audited, and what was left out.>

## Method
<How the check was run: tools, pages or files sampled, and the date run.>

## Findings

| # | Finding | Severity | Evidence | Owner |
|---|---|---|---|---|
| 1 | <finding> | <critical / high / medium / low> | <path, URL, or screenshot> | <name or team> |

## Recommendations
- <recommendation, with the finding number it addresses>

## Re-check date
<YYYY-MM-DD, and what will be checked again.>

## Open questions
- <question>

## Sources
- <repo-relative path or URL>
