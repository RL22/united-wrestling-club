---
None
sharded: "astro-design-system-and-buildout/"
---

# Plan v4: Astro design system refactor and full-sitemap buildout

> Sharded on 2026-11-08. The full text is in [`astro-design-system-and-buildout/`](astro-design-system-and-buildout/). Edit the parts, not this index.

## TL;DR

- Plan v4 covers an Astro design system refactor (Phase 1, tasks DS-0 to DS-11) and a full-sitemap buildout (Phase 2 page groups), in that order.
- Phase 0 records a regression baseline (B0) first, and Phase 1 tasks are checked with fingerprint, pixel, and text diffs after every task.
- Routes that cannot be written honestly from verified facts are omitted by default and stay in src/data/routes.ts with a reason and an unlock decision.
- The owner confirms decision D0 before Phase 2 starts, or names the routes to build with the facts to support them.

## Parts

| Part | Section | File |
|---|---|---|
| 1 | 0. Scope and reading | [01-0-scope-and-reading.md](astro-design-system-and-buildout/01-0-scope-and-reading.md) |
| 2 | 2. Regression baseline (Phase 0, runs first on `d78a5da`) | [02-2-regression-baseline-phase-0-runs-first-on-d78a.md](astro-design-system-and-buildout/02-2-regression-baseline-phase-0-runs-first-on-d78a.md) |
| 3 | 4. Execution plan | [03-4-execution-plan.md](astro-design-system-and-buildout/03-4-execution-plan.md) |
| 4 | 6. Verification | [04-6-verification.md](astro-design-system-and-buildout/04-6-verification.md) |
