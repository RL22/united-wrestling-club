---
type: spec                  # call | dossier | decision | spec | audit | inventory
status: draft               # draft | current | superseded | archived
group: <client | site | strategy | market | brand | archive>
owner: <person or team responsible for the doc>
date: <YYYY-MM-DD>         # the date the spec was written
last_reviewed: <YYYY-MM-DD>
sources: [<repo-relative path or URL>]
replaced_by:                # required only when status is superseded
caveat:                     # optional, one line
title: <optional title>
---

# <Topic> spec

## TL;DR
- <one claim from this document>
- <one claim from this document>

## Goal
<The outcome this spec delivers. One or two sentences.>

## Requirements
- R1: <requirement>
- R2: <requirement>

## Acceptance criteria
- [ ] <testable condition, tied to a requirement>

## Routes and forms affected

| Route or form | Change | Endpoint |
|---|---|---|
| <path> | <change> | <endpoint, or none> |

## Status by item

| Item | Status | Notes |
|---|---|---|
| R1 | <not started / in progress / done / blocked> | <notes> |

## Open questions
- <question>

## Sources
- <repo-relative path or URL>
