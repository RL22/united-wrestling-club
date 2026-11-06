# ADR-20261102-branded-reviews-and-submission-engine: Branded Reviews Hub & First-Party Review Submission Engine

- **Date:** 2026-11-02
- **Status:** Approved
- **Scope:** Architecture / SEO / UX

## Context & Problem
United Wrestling Club has an exceptional reputation in Alameda County (5.0 ★ on Google with 42+ reviews), but prospect parents and grapplers searching `"United Wrestling Club reviews Hayward CA"` were fragmented across raw Google search results, stale Yelp pages, and outdated third-party listings. The club lacked a dedicated branded reviews destination to capture this high-intent search traffic and a streamlined method for happy parents to submit reviews across external platforms.

## Approved Solution
1. **Dedicated Branded Hub (`/reviews/`):**
   - Built a standalone, SEO-optimized reviews landing page at [`reviews/index.html`](../archive/legacy-site/reviews/index.html).
   - Injected `AggregateRating` schema (5.0 rating, 35+ ratings, SportsClub entity) for Google rich snippet search enhancement.
   - Built an Aggregate Trust Scorecard highlighting 5.0 ★ score, 100% parent recommendation rate, and platform distribution (Google, Yelp, Facebook).
   - Added category filter tabs: *All Reviews*, *Youth Parents*, *Adult & MMA*, and *Visiting Athletes*.
2. **First-Party Review Submission Engine:**
   - Designed a client-side review intake interface allowing members to draft feedback, select star rating, and check target review platforms.
   - Built an **Auto-Clipboard Workflow**: When the reviewer clicks "Copy Review & Open Google Maps", the text is copied to their device clipboard, a feedback modal triggers, and the verified Google Place ID review sheet opens directly.
   - Direct deep link targets:
     - Google: `https://search.google.com/local/writereview?placeid=ChIJsQd_yMaVj4ARrXw93nb4euo`
     - Yelp: `https://biz.yelp.com` / UWC listing
     - Facebook: `https://www.facebook.com/unitedwrestlingclub`
3. **Legacy Route Redirection:**
   - Added a 0-second client-side `<meta http-equiv="refresh">` and JavaScript redirection at the legacy redirect page (removed 2026-11-06) pointing to `../reviews/`.

## Alternatives Rejected
1. **Third-Party SaaS Review Gateways (e.g. Birdeye, Podium, Broadly):** Rejected due to high ongoing monthly SaaS costs (\$250–\$400/mo) and unnecessary complexity for a single-location gym.
2. **Direct Unassisted Outbound Links:** Rejected because unassisted links result in high drop-off before the user writes a meaningful review; drafting first with clipboard assistance drastically increases completion rates.

## Impacted Files
- `reviews/index.html`
- `submit-review/index.html`
- `index.html`
- `v01/index.html`
- `v03/index.html`
- `v04/index.html`
