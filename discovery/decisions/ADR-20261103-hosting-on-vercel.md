# ADR-20261103-hosting-on-vercel: UWC production hosting on Vercel, not GitHub Pages

- **Date:** 2026-11-03
- **Status:** Approved (Sprintz; not yet confirmed with Naweed or Karim)
- **Scope:** Architecture · SEO

## Context & Problem
`todos.md` planned the custom-domain cutover to GitHub Pages (A records `185.199.108.153` and others). Public DNS shows `unitedwrestlingclub.com` is on AWS Route 53 with a CloudFront and S3 site, SES inbound mail, and a Shopify `shop` subdomain. The live site has no title, description or headings in its first HTML, no robots.txt or sitemap, and no analytics tag. The UWC GA4 property (`562010875`) has no web stream.

## Approved Solution
The full decision is in the TravaLab repo: [ADR-20261103-hosting-on-vercel](../../../../travalabs/discovery/decisions/ADR-20261103-hosting-on-vercel.md). For UWC:

1. Production hosts on the Sprintz Vercel team. GitHub Pages stays as the prototype preview only.
2. DNS stays in Route 53. Only the apex and `www` records change. Keep the SES inbound MX, the `amazonses.com` SPF, DMARC and the `shop` CNAME.
3. The new site serves real titles, descriptions and headings in the first HTML, plus robots.txt and a sitemap.
4. Create a GA4 web stream on property `562010875` (needs Editor) and ship its `G-` ID at launch. Use `generate_lead` for the $15 Mat Pass form.
5. `staging.unitedwrestlingclub.com` points at the same CloudFront distribution as `www`. Do not treat it as staging.

## Alternatives Rejected
1. **GitHub Pages as production:** wrong host for this domain's setup.
2. **Keep the S3 and CloudFront site and edit in place:** the client-rendered shell is the SEO problem.

## Impacted Files
- `todos.md` (P1 cutover item)
- `README.md` (ADR list, preview URL label)
- `index.html`, `v04/index.html` (titles and meta before launch)

## Resolved (Nov 5, 2026)
Production moved to Vercel early, on 2026-11-05, by owner decision. The Vercel project is live at https://united-wrestling-club.vercel.app. GitHub Pages staging is off because the public repo was made private the same day. The custom-domain cutover (steps 1 to 5 above) is still pending. See the addendum in [ADR-20261105-public-preview-github-pages](ADR-20261105-public-preview-github-pages.md). Step 5 (the `staging.unitedwrestlingclub.com` subdomain on CloudFront) is revisited at cutover.

## Amendment (2026-11-07)

Both Vercel projects (`site`, `united-wrestling-club`) were deleted by the owner on 2026-11-07. `https://united-wrestling-club.vercel.app` is no longer served. No production host is connected. The re-link to the public repo is Proposed (see [ADR-20261107-public-site-repo-and-noindex](ADR-20261107-public-site-repo-and-noindex.md)). The paragraph above describes the state on 2026-11-05 and is kept as history.
