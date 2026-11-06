---
type: inventory             # call | dossier | decision | spec | audit | inventory
status: draft               # draft | current | superseded | archived
group: <client | site | strategy | market | brand | archive>
owner: <person or team responsible for the doc>
date: <YYYY-MM-DD>         # the date the inventory was generated
last_reviewed: <YYYY-MM-DD>
sources: [<repo-relative path or URL>]
replaced_by:                # required only when status is superseded
caveat:                     # optional, one line
title: <optional title>
---

# <Topic> inventory

## TL;DR
- <one claim from this document>
- <one claim from this document>

## What is catalogued
<The items this inventory covers, and the folder or source they come from.>

## Fields

| Field | Meaning |
|---|---|
| <field name> | <what it holds> |

## Counts

| Group | Count |
|---|---|
| <group> | <n> |
| Total | <n> |

## How to regenerate
1. <command or script, with its repo-relative path>
2. <next step>

## Open questions
- <question>

## Sources
- <repo-relative path or URL>
