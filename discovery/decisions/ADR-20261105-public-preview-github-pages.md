# ADR-20261105-public-preview-github-pages: GitHub Pages is staging during client revision; Vercel is production at launch

- **Date:** 2026-11-05
- **Status:** Approved (resolves the conflict with ADR-20261103-hosting-on-vercel). Amended 2026-11-05: production moved to Vercel early (see the addendum at the end).
- **Scope:** Architecture · SEO

## Context & Problem
The client is reviewing the site before launch. The client needs a stable URL to review and revise, and the site must not go to production yet. ADR-20261103 approved Vercel as production and called GitHub Pages "prototype preview only". The two decisions needed to be reconciled by a timing rule.

## Approved Solution
1. **Staging now:** the public repo (`RL22/united-wrestling-club`, branch `gPages`) serves the site at `https://rl22.github.io/united-wrestling-club/` for the client revision cycle. This is the staging environment.
2. **Production at launch:** the site moves to Vercel, per ADR-20261103 (DNS and cutover steps unchanged). The migration is a pre-launch task, not done now.
3. **Form endpoints are the same on staging and production:** the four Formspree endpoints in `FORM_ENDPOINTS`. Test submissions during revision go to the new account, so the notifications are the same on both.
4. **At cutover:** GitHub Pages either stays as a read-only staging copy or is switched off. Decided at launch, recorded in an addendum.

## Alternatives Rejected
1. **Vercel now, for staging too:** rejected. The client is revising on the existing URL and the migration is not needed until launch.
2. **GitHub Pages as production:** rejected by ADR-20261103. It is not the production host for this domain.
3. **Private share (Drive or screen recording):** rejected. Not a page the client can review in context.

## Impacted Files
- `README.md` (header, section 4, section 6)
- `todos.md` (P1 hosting item)
- `discovery/decisions/ADR-20261103-hosting-on-vercel.md` (conflict section)
- `discovery/decisions/INDEX.md`

## Addendum (2026-11-05): production moved early

The owner chose to deploy production before launch. This overrides the timing rule in Approved Solution item 2. Current state:

1. **Production:** Vercel project `united-wrestling-club` on the Sprintz team. Live at https://united-wrestling-club.vercel.app. It serves a clean copy of the site files only: the pages, `assets/`, and the media those pages reference. Nothing from `discovery/`, `marketing-plan/`, `portal/`, or the concept folders is deployed.
2. **Custom domain not moved.** `unitedwrestlingclub.com` still runs on the existing AWS host. The ADR-20261103 cutover (Route 53 apex and `www`, keeping the SES, DMARC, and `shop` records) is still pending.
3. **GitHub Pages is off.** The public repo `RL22/united-wrestling-club` was made private on 2026-11-05, so https://rl22.github.io/united-wrestling-club/ returns 404. Item 4 is resolved for now: GitHub Pages is switched off, not kept as read-only staging. Restoring it means making the repo public again or upgrading the plan.
4. **No merge.** The public repo has no `main` or `gh-pages` branch. Its only branch is `gPages`, which was left unchanged.
5. **Forms:** production uses the same four Formspree endpoints as staging did.
6. **Open media issue.** `video_assets/cards/program-youth.jpg` and `program-varsity.jpg` are live in production. `todos.md` says these stay off published pages until minors' releases are confirmed. Decision pending.
7. **Corrected during deploy.** The first production deploy also exposed three unreferenced GBP photos in `assets/img/gbp/`, one of which shows a minor. They were removed and production was redeployed on 2026-11-05. Their URLs now return 404.
