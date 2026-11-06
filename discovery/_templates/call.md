---
type: call                  # call | dossier | decision | spec | audit | inventory
status: draft               # draft | current | superseded | archived
group: <client | site | strategy | market | brand | archive>
owner: <person or team responsible for the doc>
date: <YYYY-MM-DD>         # the date of the call
last_reviewed: <YYYY-MM-DD>
sources: [<repo-relative path or URL>]
replaced_by:                # required only when status is superseded
caveat:                     # optional, one line
title: <optional title>
---

# <Who> call: <topic>

## TL;DR
- <one claim from this document>
- <one claim from this document>

## Attendees
- <name, role, organization>

## Context
<Why the call happened and what it covered. Two or three sentences.>

## Facts stated
- <fact, as the speaker stated it> [KB-<NN>, if one exists]

## Decisions made
- <decision, and who made it>

## Action items

| Owner | Action | Due date |
|---|---|---|
| <name> | <action> | <YYYY-MM-DD> |

## Open questions
- <question>

## Sources
- <repo-relative path, URL, or transcript reference>
