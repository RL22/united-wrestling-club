---
type: inventory
status: draft
group: market
owner: "Rodney Lewis (Sprintz)"
date: 2026-11-06
last_reviewed: 2026-11-06
sources: ["discovery/market/local_seo/top_10_programmatic_lps.md", "discovery/market/local_seo_keyword_reroute_map.md", "discovery/site/website_rebuild_spec.md", "discovery/site/content_schemas/blueprint_claim_audit.md"]
---

# SEO data sources (citation register)

## TL;DR

- Keyword volume, keyword difficulty (KD), CPC, rank, and traffic figures in the market docs come from one OpenSEO project, which runs on DataForSEO data. This file gives them a citable ID: **SEO-SRC-1**.
- The row-level export is not in the repo, not in Downloads, and not saved in OpenSEO. The project has 0 saved keywords and 0 saved reports (read 2026-11-06). Every SEO figure is therefore cited to the document that states it, not to a raw response. Treat them as unverified until the export is found.
- Action needed from the owner: export the DataForSEO or OpenSEO pull for project `778e3f25` (CSV or JSON), save it under `discovery/market/local_seo/data/`, and reply. I will then re-check each figure and update this file.

## SEO-SRC-1: UWC keyword and SERP pull

| Field | Value |
| :--- | :--- |
| Tool | OpenSEO (app.openseo.so), which calls DataForSEO Labs, SERP, and Google Ads data |
| Project | United Wrestling Club, id `778e3f25-5476-4c54-bfe2-e418e131aaaf`, domain `unitedwrestlingclub.com` |
| Market | locationCode `2840` (United States), languageCode `en` |
| Date of pull | 2026-10-30, as stated in the header of `top_10_programmatic_lps.md` and the research-log entry `bb9345bd-1902-4fa7-b58e-98da4f621d59` |
| Data types claimed | Ranked keywords, local SERPs, Google Ads search volume and CPC (per the blueprint header) |
| Row-level export | **Not found.** 0 saved keywords and 0 reports in project `778e3f25` on 2026-11-06. |
| Figures that depend on it | Monthly volume, KD, and CPC for the 10 matrix rows, the martial-arts volumes, and the Blueprint 1 to 5 keyword lines (see the table below) |

### Where the figures are stated

| Document | What it states |
| :--- | :--- |
| `discovery/market/local_seo/top_10_programmatic_lps.md`, section 1 | Volume, KD, and CPC for 10 keyword clusters (Hayward 26,300; Union City 480; Fremont 2,320; Newark 640; Castro Valley 890; kids 8,530; youth 4,300; adult 3,530; no-gi 4,200; women's self-defense 1,420) |
| `top_10_programmatic_lps.md`, section 3 | Martial-arts volumes ("martial arts near me" 90,500; "mixed martial arts near me" 40,500; "martial arts for kids near me" 18,100) |
| `top_10_programmatic_lps.md`, section 4 | Per-keyword KD and CPC for the five blueprints |
| `discovery/market/local_seo_keyword_reroute_map.md` | Keyword-to-URL routing; cites project `778e3f25` (line 14) |
| `discovery/site/website_rebuild_spec.md`, section 5 | Single-keyword figures, for example "wrestling gym" at 2,900 per month (row 1) and "kids martial arts" at 18,100 per month (row 29) |

### Figures that disagree between documents

- **"wrestling gym"**: the blueprint gives 26,300 per month for a four-keyword cluster (`wrestling gym`, `wrestling club`, `wrestling near me`, `wrestling academy near me`). The rebuild spec gives 2,900 per month for "wrestling gym" alone. These can both be true, but neither is checkable until the export is found.
- **"martial arts for kids near me"**: the blueprint says 18,100 per month. The spec says "kids martial arts" 18,100. These are different queries with the same figure.

Resolve both against the export before any figure appears on a page. Per the audit's rule, keyword data is never site copy.

## OpenSEO project memory that conflicts with owner decisions

The project's shared context (`get_project_context`, updated 2026-10-30) still carries claims the owner has replaced. These should be corrected with an owner-approved `update_project_context`. Do not change it without the owner's OK.

| Project memory says | Owner decision |
| :--- | :--- |
| "youth (ages 4-18)" | Grades, not age bands (OC-14) |
| "$89.99-$150/mo" | Per-program pricing; $139.99 is one tier (OC-01) |
| "Greco-Roman" wrestling | Not in the owner-confirmed program list. Confirm with the owner before use. |
| "1980 Moscow Olympian" | Wording still open (OC-07) |

## Competitor data

The project also holds competitor notes (traffic, keyword counts, review counts) from 2026-10-30. They are cited to SEO-SRC-1 as well. Competitor review counts are market data and are not site facts.

Project `ba159f46` (Travalab) holds 25 saved keywords for a phlebotomy client. It is unrelated to UWC and is not cited here.

## Rules for using these figures

1. Cite SEO-SRC-1 for any keyword, volume, KD, CPC, rank, or traffic figure used in an internal document.
2. Never place a market figure on a page, in schema, or in copy. The figure is a planning input only.
3. A figure can move from "stated" to "checked" only after the row-level export confirms it. Record the export file path and the row in the audit.
