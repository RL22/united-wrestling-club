# UWC Discovery Index

- **Client:** Naweed Zemaryalai and Karim Zemaryalai, United Wrestling Club, 30139 Industrial Pkwy SW Ste C, Hayward, CA 94544
- **Last reorganized:** 2026-11-06
- **Use:** Find the right source before you cite a fact. Start with the table below. Each file's status is in the index. Status values are defined in the legend.

---

## Start here: source of truth

| Question | Read this |
|---|---|
| What is built and live? | [`sitemap_status.md`](site/sitemap_status.md). The data behind it is `site/src/data/routes.ts`. |
| What has been decided? | [`decisions/INDEX.md`](decisions/INDEX.md) (ADRs) |
| What is open or in progress? | [`../todos.md`](../todos.md) (repo root). This folder's `todos.md` is an older copy. |
| What did the client say? | [`call_notes_naweed_20261102_uwc.md`](client/call_notes_naweed_20261102_uwc.md) (primary source, Nov 2) and [`naweed_discovery_questions.md`](client/naweed_discovery_questions.md) |
| What facts can the site or responder state? | [`knowledge_base/uwc_kb_v1.md`](knowledge_base/uwc_kb_v1.md). Draft, not live. Answer only from Verified or Client-confirmed entries. |
| What forms exist and where do they post? | [`forms_map_full_sitemap.md`](site/forms_map_full_sitemap.md) and [`decisions/ADR-20261105-forms-per-form-endpoints.md`](decisions/ADR-20261105-forms-per-form-endpoints.md) |
| Which design rules apply? | [`decisions/ADR-20261105-design-system.md`](decisions/ADR-20261105-design-system.md), [`decisions/ADR-20261106-astro-design-system.md`](decisions/ADR-20261106-astro-design-system.md), and `DESIGN.md` at repo root |
| What is the current marketing plan? | [`uwc_marketing_plan.md`](strategy/uwc_marketing_plan.md) (partly superseded, see its banner) and [`uwc_marketing_plan_research.md`](strategy/uwc_marketing_plan_research.md) |

## Status legend

| Status | Meaning | Cite it? |
|---|---|---|
| **Current** | Maintained. Reflects the site and decisions as of 2026-11-06. | Yes |
| **Reference** | Research or analysis. Its sources still hold. Not tracked for changes. | Yes, with the date |
| **Partly superseded** | Findings still apply. Some recommendations were replaced. The banner says which. | Findings only |
| **Snapshot** | Describes the pre-rebuild site (late Oct 2026). Use as history. | Only as history |
| **Superseded** | Concept work for a homepage design that was not built. | No. Do not implement from it. |
| **Asset** | Image, video, or data file. Inventories describe them. | As a file |

---

## 1. Client and calls

| File | Status | What it is |
|---|---|---|
| [`call_notes_naweed_20261102_uwc.md`](client/call_notes_naweed_20261102_uwc.md) | Current | Discovery call with Naweed, Nov 2. Primary source for client facts. |
| [`naweed_discovery_questions.md`](client/naweed_discovery_questions.md) | Current | Open questions for Naweed and Karim |
| [`company_profile.md`](client/company_profile.md) | Reference | Client dossier: lineage, coaching credentials, offers, ICPs (Oct 29) |
| [`uwc_live_funnel_test_log.md`](client/uwc_live_funnel_test_log.md) | Current | Mystery-shopper test of the live funnel, Nov 4 |
| [`knowledge_base/uwc_kb_v1.md`](knowledge_base/uwc_kb_v1.md) | Current (draft) | Verified facts for the lead responder. Not live until Naweed approves. |

## 2. Site: build status and specs

| File | Status | What it is |
|---|---|---|
| [`sitemap_status.md`](site/sitemap_status.md) | Current | Route-by-route status, 2026-11-06 |
| [`forms_map_full_sitemap.md`](site/forms_map_full_sitemap.md) | Current | Nine forms, their fields, and their endpoints |
| [`website_rebuild_spec.md`](site/website_rebuild_spec.md) | Reference (plan) | Nov 5 rebuild plan. Section 4 is the original 32-route plan. |
| [`trial_modal_dataflow_ux_spec.md`](site/trial_modal_dataflow_ux_spec.md) | Reference | Trial modal UX, touchpoints, and data flow |
| [`site_audit.md`](archive/snapshots/site_audit.md) | Snapshot | Architecture and conversion audit of the pre-rebuild site |
| [`current_design.md`](archive/snapshots/current_design.md) | Snapshot | Design tokens extracted from the pre-rebuild site |
| [`live_site_content/`](archive/snapshots/live_site_content/README.md) | Snapshot | Verbatim copy and JSON from the pre-rebuild Next.js site (`live_site_content/README.md` indexes it). Still the best source for verbatim old copy. |
| [`live_site_icons.json`](archive/snapshots/live_site_icons.json) | Snapshot | Icon map from the pre-rebuild site |
| [`local_seo_audit.md`](archive/snapshots/local_seo_audit.md) | Snapshot | OpenSEO baseline, 368 ranked keywords, rendering diagnosis (Oct 29) |
| [`ai_readiness_audit.md`](archive/snapshots/ai_readiness_audit.md) | Snapshot | AI-search readiness score, pre-rebuild |
| [`local_seo_keyword_reroute_map.md`](market/local_seo_keyword_reroute_map.md) | Reference | Keyword-to-URL map. Several targets are omitted routes (see `sitemap_status.md`). |
| [`social_media_audit.md`](strategy/social_media_audit.md) | Current | Facebook and Instagram teardown, NAP discrepancy, archived assets |

## 3. Strategy, offers, and operations

| File | Status | What it is |
|---|---|---|
| [`uwc_marketing_plan.md`](strategy/uwc_marketing_plan.md) | Partly superseded | 12-month growth plan, draft v1 (Nov 3). Its v04 flagship and sitemap counts are out of date. |
| [`uwc_marketing_plan_research.md`](strategy/uwc_marketing_plan_research.md) | Reference | Research record behind the plan |
| [`master_discovery_findings.md`](strategy/master_discovery_findings.md) | Partly superseded | Decision brief. Its v04 recommendation was replaced by the Astro build. |
| [`lead_response_system.md`](strategy/lead_response_system.md) | Current (proposed) | Lead channels, automated responder, staff handoff. Decisions in section 10 are open. |
| [`revops_lead_vetting.md`](strategy/revops_lead_vetting.md) | Current | RevOps review of the lead pipeline as designed and as built |
| [`moat_assessment.md`](strategy/moat_assessment.md) | Current | Whether the 1980 lineage is the moat |
| [`offers_audit_and_design.md`](strategy/offers_audit_and_design.md) | Reference | Offer redesign for athletes, and the B2B proposal |
| [`offers_research_companion.md`](strategy/offers_research_companion.md) | Reference | Competitor pricing and LTV benchmarks |
| [`commercial_and_financial_model_synthesis.md`](strategy/commercial_and_financial_model_synthesis.md) | Reference | Commercial and financial model |
| [`womens_self_defense_financial_model.md`](strategy/womens_self_defense_financial_model.md) | Reference | Women's self-defense economics. Program still undecided (D4). |
| [`referral_program_architecture.md`](strategy/referral_program_architecture.md) | Reference | Mat-partner referral program design |
| [`uwc_attribution_model.md`](strategy/uwc_attribution_model.md) | Reference | SEO and SMS/email attribution model |
| [`uwc_email_marketing_playbook.md`](strategy/uwc_email_marketing_playbook.md) | Reference | Email lifecycle playbook |
| [`uwc_sms_marketing_playbook.md`](strategy/uwc_sms_marketing_playbook.md) | Reference | SMS lifecycle playbook |
| [`rudis_stories_editorial_pitch.md`](strategy/rudis_stories_editorial_pitch.md) | Reference | Editorial pitch draft for RUDIS Stories. Outreach, not sent. |
| [`executive_pitch_deck_copy.md`](strategy/executive_pitch_deck_copy.md) | Reference | Pitch deck copy |
| [`todos.md`](archive/snapshots/todos_2026-10-30.md) | Snapshot | Older copy of the to-do list (Oct 30). Use `../todos.md`. |

## 4. Market, competitors, and links

| File | Status | What it is |
|---|---|---|
| [`alameda_county_local_footprint.md`](market/alameda_county_local_footprint.md) | Reference | Google Maps rankings across the county |
| [`competitors/README.md`](market/competitors/README.md) | Reference | Index to the 4-tier and 5-group SERP competitor files (nine files) |
| [`attack_style_wrestling_and_competitor_offers.md`](market/attack_style_wrestling_and_competitor_offers.md) | Reference | Competitor offers and positioning |
| [`top_20_wrestling_authority_backlinks.md`](market/top_20_wrestling_authority_backlinks.md) | Reference | Link-equity targets and outreach kit |
| [`link_equity/`](market/link_equity/) | Reference | Endemic link dossiers, three categories |
| [`local_seo/`](market/local_seo/) | Reference | Local SEO strategy and 10 programmatic landing-page blueprints |

## 5. Brand, creative, and visual

| File | Status | What it is |
|---|---|---|
| [`brand_ethos_and_analogous_influences.md`](brand/brand_ethos_and_analogous_influences.md) | Reference | Brand ethos and aesthetic influences |
| [`top_10_non_clothing_analogous_brands.md`](brand/top_10_non_clothing_analogous_brands.md) | Reference | Analogous-brand matrix |
| [`analogous_brands/`](brand/analogous_brands/README.md) | Reference | Three cluster dossiers |
| [`darc_sport_and_gymshark_analysis.md`](brand/darc_sport_and_gymshark_analysis.md) | Reference | Cult-brand analysis |
| [`edc_motto_graphic_architecture.md`](brand/edc_motto_graphic_architecture.md) | Reference | Motto and monogram graphic specification |
| [`moodboards/`](brand/moodboards/README.md) | Reference | Moodboard directions (A, B, C, AC, and 1–3) with stills and screenshots |
| [`video_assets/`](video_assets/) | Asset | Hero video, stills, and inventories (133 files) |
| [`assets/`](assets/) | Asset | Lead-modal cards and photos |

## 6. Decisions and plans

| Folder | Status | What it is |
|---|---|---|
| [`decisions/`](decisions/INDEX.md) | Current | 14 ADRs with an index. Decided rules live here. |
| [`plans/astro-design-system-and-buildout.md`](plans/astro-design-system-and-buildout.md) | Reference | Plan v4 for the Astro build |
| [`plans/phase1-log.md`](plans/phase1-log.md) | Reference | Build log for phase 1 |

## 7. Superseded concept work

These were written for homepage concepts that were not built. Do not implement from them. The production site is the Astro build (ADR-20261106).

| File | What it was |
|---|---|
| [`argon_creative_context.md`](archive/superseded/argon_creative_context.md) | Creative-freedom redesign brief |
| [`argon_redesign_context.md`](archive/superseded/argon_redesign_context.md) | Mandatory redesign context brief |
| [`homepage_creative_freedom_spec.md`](archive/superseded/homepage_creative_freedom_spec.md) | "Olympic Mat Sanctuary" concept spec |
| [`homepage_creative_freedom.html`](archive/superseded/homepage_creative_freedom.html), [`homepage_redesign.html`](archive/superseded/homepage_redesign.html) | Concept pages |
| [`minimal_context_brief.md`](archive/superseded/minimal_context_brief.md) | Context brief for a model-driven homepage pass |
| [`opus_prompt.md`](archive/superseded/opus_prompt.md), [`sol_refinement_prompt.md`](archive/superseded/sol_refinement_prompt.md) | Model prompts for the v04 and v03 concepts |
| [`v03_editorial_and_functional_spec.md`](archive/superseded/v03_editorial_and_functional_spec.md), [`v03_visual_fixes_spec.md`](archive/superseded/v03_visual_fixes_spec.md) | v03 concept specs |

## 8. Root files: assets and clutter

| File | Status | Note |
|---|---|---|
| `screenshot_mobile_375_verified.png`, `screenshot_mobile_390_verified.png` | Snapshot | Pre-rebuild screenshots, 2.6 MB each. Candidates to move or delete. |
| `uwc hayward - Google Search-screenshot.png` | Asset | Search-result screenshot. The space in the name breaks some tools. |
| `wrestling-clipart-original.png`, `unsplash-grunge-001.jpg` | Asset | Source art. The grunge texture is used by the site. |
| `.DS_Store` | Delete | macOS metadata |

`scratch/` is git-ignored working material (39 MB). Do not cite it.

---

## Conventions for new documents

1. Add frontmatter to every library doc: `status` (current, reference, partly-superseded, snapshot, superseded, or asset) and `group` (the top folder). `python3 scripts/discovery_check.py check` enforces this.
2. Name the file for its topic. Put a date in the name only for calls and decisions.
3. Use relative links. Never absolute paths. `scripts/discovery_check.py check` validates them.
4. Do not copy route lists or facts that another file owns. Link to the owner (`routes.ts`, an ADR, `knowledge_base/uwc_kb_v1.md`).
5. When a document is superseded, change its status to `superseded` or `partly-superseded`, add a banner that names the replacement, and move it to `archive/`. Do not delete it.
6. After adding or changing docs, run `python3 scripts/discovery_check.py manifest` to refresh `manifest.json`.

## Layout

```text
discovery/
├── README.md          this index
├── manifest.json      generated: path, title, status, group for every library doc
├── client/            call notes, discovery questions, company profile, funnel log
├── site/              sitemap status, rebuild spec, forms map, trial modal spec
├── strategy/          marketing plan, offers, financial models, playbooks, pitch
├── market/            competitors, link equity, local SEO, county footprint
├── brand/             ethos, analogous brands, moodboards, motto graphics
├── archive/
│   ├── superseded/    concept work for homepage designs that were not built
│   └── snapshots/     pre-rebuild site audits and captures (Oct 2026)
├── decisions/         ADRs (own status fields)
├── plans/             build plans and logs
├── knowledge_base/    responder fact base (draft)
├── assets/            loose images
└── video_assets/      hero video, stills, inventories
```

## Known cleanup (open)

- The competitor and keyword maps in `market/` still target several omitted routes. Check them against `routes.ts` before use.
- `strategy/uwc_marketing_plan.md` Weeks 1–2 still name the v04 flagship. Left as written because the plan's owner should decide how it's rewritten.
- `brand/edc_motto_graphic_architecture.md` describes the live `/about` creed section. Its preview page was removed in commit c6b7153.
