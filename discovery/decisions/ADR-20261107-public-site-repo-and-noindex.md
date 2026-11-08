# ADR-20261107-public-site-repo-and-noindex: Site-only public repo, no search indexing until launch

- **Date:** 2026-11-07
- **Status:** Approved (indexing gate and repo shape). Vercel re-link is Proposed, not yet done.
- **Scope:** Architecture · SEO · Compliance

## Context & Problem
The owner deleted the internal repo `RL22/united-wrestling-club-internal` and both Vercel projects (`site`, `united-wrestling-club`) on 2026-11-07. The owner asked for the Astro site in a new public repo, site-only, with search engines kept out until launch. The repo `RL22/united-wrestling-club` now holds one commit (`7f0f759`, "Initial site import (Astro, no-index until launch)") on `main`, built with `git archive HEAD:site`. That commit replaced the earlier history by force-push, because the token lacked `delete_repo`. The local `origin` remote still points at the deleted internal repo.

Public means the built source, including `site/public/`, is readable on GitHub. The site must not be indexed or listed by search engines before the owner approves launch.

## Approved Solution
1. **Repo shape.** `RL22/united-wrestling-club` (public) holds only the contents of `site/` at its root. Discovery research, ADRs, call notes, and the internal `todos.md` stay out of it.
2. **One switch controls indexing.** `site/src/data/indexing.ts` exports `LAUNCHED = false`. While it is false:
   - `Layout.astro` emits `<meta name="robots" content="noindex, follow">` on every page (`isNoindex = noindex || !LAUNCHED`).
   - `robots.txt.ts` allows all crawlers (so they can read the noindex tag) and omits the `Sitemap:` line.
   - `sitemap.xml.ts` lists zero URLs.
   Flip to `true` only when the owner approves launch.
3. **No production host connected.** A new Vercel project for the public repo is created only after the owner approves, and its production branch is set so that pushes to `main` build preview only.
4. **Sambo stays held.** `classes/sambo` is built (D3, owner decision) but is not promoted to live until the owner approves publishing.

## Alternatives Rejected
1. **Private repo.** Rejected by the owner ("1. public, no-index until launch").
2. **`Disallow: /` in robots.txt for the pre-launch period.** Rejected. Crawlers that obey `Disallow` never fetch the page, so they never see the noindex tag. The `Allow: /` line with the meta tag is the working gate.
3. **Delete the repo to clear history.** Not possible with the current token (no `delete_repo` scope). A force-push of the clean commit was used instead. Old commits may remain reachable by SHA on GitHub until garbage collection.
4. **Connect Vercel now to the new repo with `main` as production.** Rejected. Any push to `main` would go live while the owner has not approved launch.

## Open items (not decided here)
- `site/src/pages/llms.txt.ts` lists every built page and is not gated by `LAUNCHED`. Owner or agent must decide whether to gate it.
- `site/public/video_assets/cards/program-youth.jpg`, `program-varsity.jpg`, `program-adult.jpg`, and `program-openmat.jpg` are tracked in the public repo. Owner decided on 2026-11-08 to keep them in the public repo. Releases are unconfirmed. See D5 in `ADR-20261107-owner-decisions-d-items.md`.

## Impacted Files
- `site/src/data/indexing.ts`
- `site/src/layouts/Layout.astro`
- `site/src/pages/robots.txt.ts`
- `site/src/pages/sitemap.xml.ts`
- `site/src/pages/llms.txt.ts` (not gated yet)
- `README.md` (section 6, publishing)
- `todos.md` (P0 launch items)
