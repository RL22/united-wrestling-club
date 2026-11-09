---
type: spec
status: draft
group: site
owner: "Rodney Lewis (Sprintz)"
date: 2026-11-06
last_reviewed: 2026-11-06
sources: ["discovery/ledger/decisions.json", "discovery/ledger/claims.json", "discovery/knowledge_base/uwc_kb_v1.md", "discovery/site/website_rebuild_spec.md", "discovery/site/sitemap_status.md", "discovery/plans/astro-design-system-and-buildout.md", "site/src/data/routes.ts", "site/src/data/facts.ts", "site/src/data/programs.ts", "site/src/data/schedule.ts", "site/src/data/faqs.ts", "site/src/data/reviews.ts", "site/src/data/media.ts", "site/src/pages/pricing.astro", "site/src/pages/classes/kid-wrestling.astro", "site/src/components/home/Hero.astro", "scripts/copy_audit.py", "scripts/copy_audit.sh", "scripts/copy_audit_allow.txt", "scripts/check_dist.py", "scripts/discovery_check.py", "site/astro.config.mjs", "PRODUCT.md"]
sharded: "guides/"
---

# Content schema: guides (GuidesHub and GuideArticle)

> Sharded on 2026-11-08. The full text is in [`guides/`](guides/). Edit the parts, not this index.

## TL;DR

- Six routes are omitted until owner decision D12: `/guides/` (GuidesHub) and five GuideArticle pages. The schema defines 17 top-level GuidesHub fields and 26 top-level GuideArticle fields, plus four nested objects (author, source, claim row, other-organization mention).
- Nothing can publish yet. D12 is not in `decisions.json`, no author or reviewer is named, no external source is cited, and none of the 2,608 ledger rows is marked `verified`. Every guide sentence that depends on the ledger or on an external source fails the gate today.
- The copy audit blocks the words these guides most need, including "Olympic", "1980", "boycott", "qualifier", "medalist", and "state champion" (which also matches "state championship"). The schema bans them in every guide, so the audit passes without new allowlist entries.

## Parts

| Part | Section | File |
|---|---|---|
| 1 | TL;DR | [01-tl-dr.md](guides/01-tl-dr.md) |
| 2 | Example fill (adult guide, verified values only; nulls marked) | [02-example-fill-adult-guide-verified-values-only-nu.md](guides/02-example-fill-adult-guide-verified-values-only-nu.md) |
