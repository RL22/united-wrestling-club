
> Part 4 of 4 of [astro-design-system-and-buildout](../astro-design-system-and-buildout.md). Text is verbatim from the original; only links were rewritten.

## 6. Verification

### 6.1 Build: `npm run build` exits 0; `dist/<route>/index.html` exists for each `built` route.

### 6.2 `scripts/check_dist.py` (new)

`scripts/check_site.py` hard-codes six root pages; keep running it for the static pages until D15. `check_dist.py` reuses its `Tags` parser and: walks `site/dist/**/*.html` (or `--routes`); resolves `/x/` to `dist/x/index.html` and relative refs; checks `#fragment` ids exist on the target; checks `url()` in `dist/_astro/*.css`; applies the 4.2 link rule (`--final` in Phase 3); fails when a `built` route has no output file.

### 6.3 `site/scripts/smoke.mjs` (new)

Arguments: `--base`, `--routes <list>` or `--all` (all `built` routes), `--widths` (default as 2.1), `--out`. Per route and width: `scrollWidth <= innerWidth`; zero `console.error` and `pageerror`; zero failed local requests; header (`aside.top-bar`, `header.site-nav`, `#mobileNavDrawer`) and footer (`#visit`) fingerprints equal the homepage's except `href` and active state; header and footer PNGs to `<out>/<route>-<width>-{header,footer}.png`. The executor views each new route's PNGs and says so in its report.

### 6.4 `scripts/copy_audit.sh` (new)

Over source and `dist/`:
- **Quote-element exemption (applies to every check below, not only em dashes).** Text inside an exempt quote element is skipped by all pattern checks. Exempt elements are exactly: (a) on the homepage, a `<p>` whose excerpt hash (1.8) equals a hash in `scripts/copy_audit_allow.txt`; (b) on `/reviews/`, a quote element or `reviewBody` JSON-LD value whose text equals a body in `data/reviews.ts`; (c) `data/reviews.ts` itself. The verbatim reviews contain "dagestan" (`reviews/index.html` lines ~220 and ~457) and em dashes; they pass only through (b) or (c). Nothing else is exempt.
- Em dash: any U+2014 outside exempt elements fails.
- `rg -ni "olympi|1980|moscow|boycott|qualifier|aliyev|makhachkala|dagestan|medalist|ramazanov|kardanov|state champion|1:6|1 coach to 6|3,000 sq|cross-linked|wi-fi|sibling|unanimous|100% rec|42\+"` outside exempt elements matches only allowlisted lines.
- Prose day and time: `rg -n "Sat(urday)? *[0-9]|Mon.{0,3}Fri *[0-9]"` outside `data/`, `ui/FactList`, `ui/ScheduleList`, and allowlisted lines fails.
- Phone other than `(510) 303-4869`, or `tel:` other than `tel:5103034869`, fails.
- `formspree.io/f/` with any ID outside the four; `xyyavaaj`; or `text (us|me|\(510\))` outside `ConsentSms.astro` fails.
- Images on new pages not in `data/media.ts` fail.

`scripts/copy_audit_allow.txt` (only `ds-lead` edits it): one line per allowed occurrence: file, line, SHA-256 (1.8 method), matched pattern, decision ID. Initial entries: the two excerpts (1.8, D19); footer tagline in `shell/SiteFooter.astro` (D10); `about` creed "Dagestani lineage" sentence (D10); `home/Coaches.astro` line 18 "forged in Dagestan" (D20); `home/Safety.astro` claims (D9); `home/Schedule.astro` Saturday row and note (D1). A hash mismatch fails, so edited text cannot ride on an old entry. When DS-7 moves a file, `ds-lead` updates the file and line keys in the same commit; hashes do not change.

### 6.5 Port comparison (G1)

For `/reviews/`, `/register/`, `/contact/`, `/about/`, at all widths and passes: fingerprint and pixel diff against `tests/baselines/static/<page>`, and text diff against `static/<page>-text.json`. Allowed differences, each listed by exact path in `static/<page>-allow.json`: link and asset paths (`../` to `/`); stylesheet query strings; the `<main>` key rule; for `about` (loaded `uwc.css?v=2026-11-05b`), each rule that changed between `b` and `f`, one by one; `/contact/` hours if `FactList` markup differs; on `/reviews/`, the 5.10 removals and replacements. Anything else blocks the merge.

### 6.6 Whole build (Phase 3; Haiku may run it)

```bash
cd /Users/rodneylewis/Sprintz/clients/prospects/united-wrestling-club/site
npm run build
python3 ../scripts/check_dist.py --final && python3 ../scripts/check_site.py
node scripts/css-homes.mjs
(npm run preview -- --port 4330 &)
node scripts/smoke.mjs --base http://localhost:4330 --all --out output/ds/smoke
bash ../scripts/copy_audit.sh src dist
node scripts/fingerprint.mjs --url http://localhost:4330/ --sections home --shots --out output/ds/home
node scripts/fingerprint.mjs --url http://localhost:4330/ --text --out output/ds/home
for w in 375 600 768 900 1024 1100 1240 1248; do node scripts/fingerprint-diff.mjs tests/baselines/B2/home-$w.json output/ds/home-$w.json; done
node scripts/pixel-diff.mjs tests/baselines/B2/home-shots output/ds/home-shots
```

Plus: `dist/sitemap.xml` lists exactly the `built` routes; `robots.txt` points to it; no omitted route appears in `dist/`.

---

## 7. Decisions and risks

### 7.1 Owner decisions (proposed default; the owner decides)

| ID | Decision | Blocks | Default |
|---|---|---|---|
| D0 | Omit 15 of the 32 requested routes | Phase 2 start | Omit |
| D1 | Saturday 8 to 10 AM gi class; Saturday hours | Superseded 2026-11-08: row shown (D1 approved). Old text: [archive](../../archive/stale-2026-11-08/astro-design-system-and-buildout.md) | Superseded 2026-11-08 (see previous cell) |
| D2 | Open mat end time (12:00 vs 12:30 PM) | Same | 12:00 PM (KB-03) |
| D3 | Combat Sambo offered, when, by whom | `/classes/sambo/` | Omit; redirect to `/classes/` at D15 |
| D4 | Women's self-defense details and waitlist endpoint | `/classes/womens-self-defense/` | Omit |
| D5 | Minors' photos: releases or replacement | Youth imagery | Keep minors off new pages; homepage cards are a separate call |
| D6 | `/events/`, `/donate/`: details, policy, endpoints F3 and F5 | Both | Omit; route to `/contact/` |
| D7 | Club rules text; mat size, foam, Wi-Fi, Dollamur | `/rules/` | Omit |
| D8 | Consent and texting copy | None | Keep; change once in `ConsentSms.astro` |
| D9 | Homepage Safety claims | None (allowlisted) | Leave for the Naweed fact check |
| D10 | Footer tagline, about-page "Dagestani lineage" | None (allowlisted) | Reword after owner approval; drop "state champions" |
| D11 | Verified local facts for city pages | Four city routes | Omit; Hayward only |
| D12 | Sourced brief and author for guides | Six guide routes | Omit |
| D13 | `/reviews/`: stripping the 5.10 strings; keeping "5.0 across 42 reviews on Google" (client-confirmed) | None (port proceeds with the strip) | Strip as listed; keep the Google figure |
| D15 | Vercel serves `site/dist`; root pages retired | Retirement | After Phase 3 and owner review of a preview |
| D16 | Media release default | None | Keep checked |
| D17 | F8 affiliate: route or F2 reason | None | F2 reason |
| D18 | Karim's bio (Aliyev result, Dagestani lineage), KB-16 blocked | None; DS-0 removes the paragraph | Keep removed until Karim confirms wording |
| D19 | Homepage testimonial excerpts with em dashes (lines 21, 32) | None (allowlisted by hash) | Keep as published; if edited, re-excerpt verbatim from the review |
| D20 | "forged in Dagestan" in the lineage lead (`Coaches.astro` line 18), unverified lineage claim | None (allowlisted until decided) | Remove it (one change by `ds-lead`, with exact-path allow entries and a new baseline) |

### 7.2 Risks

1. **Fingerprint flakiness** (Google fonts, video, animation): font guard, freeze, Phase 0 determinism rerun at all widths, passes, and pixels.
2. **Specificity traps:** scoped rules outrank global ones. Covered by the override rule, `css-homes.mjs` (placement, order, declarations), and one component per commit.
3. **Unsampled breakpoints** (380, 480, 640, 720, 860, 960, 1040, 1220 px): values covered by `css-homes.mjs` check (d), not by measurement.
4. **DS-1 URL format** changes deploy paths: update `README.md` section 6 before D15.
5. **SEO loss on omitted live URLs** (`/classes/sambo`, `/events`, `/donate`, `/rules`) after D15: add Vercel redirects at the switch.
6. **Thin class pages** (7, 8, 10): accept; do not pad.
7. **Node version:** `mise use node@22` (22.23.4 or later) if npm refuses.
8. **RTC #513 sanctioning** (top bar, reviews eyebrow) is not a KB entry. Existing shell copy stays; new copy does not add it. Add to the Naweed fact check.
