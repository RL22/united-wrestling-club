# Sitemap status and launch trim (2026-11-05)

Source: 32-route sitemap in `discovery/website_rebuild_spec.md` section 5, plus `/reviews/` (used, not in the spec) and `/about/` (added to host the standards section).

## Launch set (built now)

| Route | Status | Linked from homepage | Role |
|---|---|---|---|
| `/` | Built | (is the homepage) | Conversion: trial pass, programs, schedule, pricing |
| `/about/` | Built (new) | Footer, "Our standards" | Standards and coaching |
| `/reviews/` | Built | Testimonials section | Social proof, review submission |
| `/register/` | Built | Trial modal, "Prefer a full page?" | Trial pass as a full page |
| `/contact/` | Built | Nav drawer | Questions, B2B, media, sponsorship |
| `/submit-review/` | Redirect | None (old link only) | Sends to `/reviews/#submit-review` |

Machine files `robots.txt`, `sitemap.xml`: needed for launch SEO. Not built yet.

## Sitemap routes not built

| # | Route | Recommendation | Reason |
|---|---|---|---|
| 3 | `/classes` | Cut for launch | Duplicates the homepage programs section |
| 4-11 | `/classes/*` (kid, youth, adult, no-gi, gi, sambo, boxing, open mat) | Defer. Build only the pages search data supports. | Eight thin pages duplicate the same program cards |
| 12 | `/classes/womens-self-defense` | Defer until the program is confirmed | Dates and prices not set (KB-19) |
| 13 | `/schedule` | Cut for launch | Homepage schedule already covers it |
| 14 | `/pricing` | Cut for launch | Homepage pricing section covers it |
| 15 | `/events` | Defer until event details exist | Needed for the Holiday Mixer RSVP (form F3) |
| 18 | `/faqs` | Cut for launch | Homepage FAQ section covers it |
| 19 | `/rules` | Build after the safety section moves | Mat hygiene and club rules |
| 20 | `/donate` | Decide: build the scholarship form or hide | Spec says "populate or hide" |
| 21-26 | `/locations/*` | Defer. Part of the later local SEO plan. | Marketing plan puts these in months 4-8 |
| 27-32 | `/guides/*` | Defer. Content work, not launch work. | Marketing plan puts these later |
| optional | `/free-trial` alias | Skip until flyers or QR codes need it | `/register/` already exists |

## Homepage trim

Keep: hero, programs, schedule, pricing, testimonials, FAQ, pre-footer CTA, footer.

Moved: creed ("Excellence / Discipline / Champions") to `/about/`. Done.

Decide:
1. **Lineage and coaches section.** PRODUCT.md calls the 1980 lineage the moat, so it stays on the homepage. Consider a shorter version, with the full coach profiles on `/about/` later.
2. **Safety section.** Could move to `/rules/` once that page exists.
3. **Depth section** (parallax, cutouts). It's decorative. ADR notes say it stays because the client asked for layered cutouts. Confirm before cutting.
4. **Footer.** Four columns, about 20 links. Trim after `/about/` is in place, so the Academy column can point there instead of repeating anchors.

## Links from the homepage to unbuilt routes

None. The homepage links only to sections on itself and to built pages.
