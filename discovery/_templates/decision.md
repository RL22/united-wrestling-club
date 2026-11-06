---
type: decision              # call | dossier | decision | spec | audit | inventory
status: draft               # draft | current | superseded | archived
group: <client | site | strategy | market | brand | archive>
owner: <person or team responsible for the doc>
date: <YYYY-MM-DD>         # the date the decision was approved
last_reviewed: <YYYY-MM-DD>
sources: [<repo-relative path or URL>]
replaced_by:                # required only when status is superseded
caveat:                     # optional, one line
title: <optional title>
---

# ADR-<YYYYMMDD>-<topic>: <Decision title>

## TL;DR
- <one claim from this document>
- <one claim from this document>

## Context and problem
<The situation that forced the choice. Two to four sentences.>

## Decision
<The choice, stated in one or two sentences.>

## Alternatives rejected
- <alternative>: <why it was rejected>

## Consequences
- <what changes, what gets harder, what must be watched>

## Impacted files
- `<repo-relative path>`

## Open questions
- <question>

## Sources
- <repo-relative path or URL>
