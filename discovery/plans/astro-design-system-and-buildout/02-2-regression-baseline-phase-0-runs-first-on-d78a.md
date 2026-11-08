
> Part 2 of 4 of [astro-design-system-and-buildout](../astro-design-system-and-buildout.md). Text is verbatim from the original; only links were rewritten.

## 2. Regression baseline (Phase 0, runs first on `d78a5da`)

Owner `baseline` (Sonnet extends the scripts; Haiku may run them). Port 4340, static server 8140, scratch `site/output/phase0/`. Phase 0 adds the `site/output/` line to `.gitignore` itself before writing scratch output.

### 2.1 `site/scripts/fingerprint.mjs` (extend the existing script)

Arguments: `--url`, `--widths` (default `375,600,768,900,1024,1100,1240,1248`), `--sections home|interior`, `--out <prefix>`, `--text` (writes `<prefix>-text.json`, `innerText` per section root, whitespace normalized), `--passes` (default `default,reduced,focus,hover`), `--shots` (section PNGs for 2.2).

- Viewport `{width, height: 900}`, `deviceScaleFactor: 1`.
- **Font guard:** call `document.fonts.load()` for `400 16px Montserrat`, `700 16px Montserrat`, `900 16px Montserrat`, `700 16px "Space Grotesk"`, await `document.fonts.ready`, then iterate `document.fonts`. Abort unless at least four faces are declared and, for each of the four (family, weight) pairs, at least one declared face matches and has `status === 'loaded'`. (`document.fonts.check()` is not used: it returns true when no face is declared.)
- **Freeze:** hero video paused at `currentTime = 0`; `document.getAnimations()` paused at `currentTime = 0`; `scrollTo(0, 0)`.
- **Per element** under each section root: path key, class list without `astro-*` and `data-astro-cid-*`, rect relative to the root (0.5px rounding), and computed `display position top right bottom left z-index width height max-width min-height margin-* padding-* border-*-width border-*-style border-*-color border-*-radius color background-color background-image background-size background-position font-family font-size font-weight font-style line-height letter-spacing text-transform text-align white-space text-decoration-line text-shadow opacity visibility pointer-events overflow-x overflow-y box-shadow transform filter outline-style outline-width outline-color outline-offset fill grid-template-columns grid-template-rows gap row-gap column-gap flex-direction flex-wrap flex-basis justify-content align-items object-fit transition-property transition-duration cursor`; `::before` and `::after`: `content background-image background-color opacity width height`.
- **Path keys** follow DOM order of element children and skip one wrapper level if it is `main#main-content`. That `<main>` is the only allowed structural addition.
- **Passes:** `default` (`reducedMotion: 'no-preference'`; states: drawer open below 1024px, modal open, first FAQ open, each schedule tab); `reduced` (`reducedMotion: 'reduce'`); `focus` (Tab through every focusable element; record its key with `outline-*`, `box-shadow`, `color`, `background-color`, `border-*-color`); `hover` (each `.btn`, `.nav-link`, `.mobile-nav-link`, `.footer-links a`, `.card-link`; record `color`, `background-color`, `border-*-color`, `box-shadow`, `transform`, `text-decoration-line`, `opacity`).
- **Section maps.** `home`: `topbar` `aside.top-bar`, `nav` `header.site-nav`, `drawer` `#mobileNavDrawer`, `hero` `.hero-section`, `programs` `#programs`, `schedule` `#schedule`, `coaches` `#coaches`, `pricing` `#pricing`, `testimonials` `#testimonials`, `safety` `#safety`, `faq` `#faq`, `cta` `.cta-banner`, `footer` `#visit`, `modal` `#trialModal`. `interior`: shell keys plus `main > section:nth-of-type(n)`.

`fingerprint-diff.mjs <baseline> <current> [--allow <file>] [--emit-allow <file>]`: `--emit-allow` writes every difference as an exact allow entry for review (DS-0). Matches by pass, state, section, key; rect tolerance 0.5px; values exact. Allow entries are exact (path, pass, width, property, old, new); a section-wide or wildcard entry is rejected. Exit 1 on any unallowed difference.

### 2.2 `site/scripts/pixel-diff.mjs <baseline-dir> <current-dir> [--allow <file>]`

Compares `--shots` PNGs (one per section, width, default pass, frozen) with `pixelmatch`, threshold 0. Allow entries name a section, width, and the element path whose rect may change; differing pixels must fall inside that element's old or new rect. No whole-section exemption. Dev dependencies `pixelmatch`, `pngjs`.

### 2.3 Commands

```bash
cd /Users/rodneylewis/Sprintz/clients/prospects/united-wrestling-club/site
npm i -D playwright pixelmatch pngjs postcss postcss-selector-parser && npx playwright install chromium
npm run build && (npm run preview -- --port 4340 &)
node scripts/fingerprint.mjs --url http://localhost:4340/ --sections home --shots --out tests/baselines/B0/home
node scripts/fingerprint.mjs --url http://localhost:4340/ --text --out tests/baselines/B0/home
node scripts/fingerprint.mjs --url http://localhost:4340/ --sections home --shots --out output/phase0/rerun
for w in 375 600 768 900 1024 1100 1240 1248; do node scripts/fingerprint-diff.mjs tests/baselines/B0/home-$w.json output/phase0/rerun-$w.json; done
node scripts/pixel-diff.mjs tests/baselines/B0/home-shots output/phase0/rerun-shots      # determinism: all exit 0
cd .. && (python3 -m http.server 8140 &)
for p in reviews register contact about; do
  node site/scripts/fingerprint.mjs --url http://localhost:8140/$p/ --sections interior --shots --out site/tests/baselines/static/$p
  node site/scripts/fingerprint.mjs --url http://localhost:8140/$p/ --text --out site/tests/baselines/static/$p
done
```
B1 (DS-0) uses the same commands with `--out tests/baselines/B1/home`.

### 2.4 Existing untracked files
| File | Action |
|---|---|
| `site/scripts/fingerprint.mjs`, `fingerprint-diff.mjs` | Keep, extend to 2.1, commit in Phase 0 |
| `site/tests/fingerprint.js` (hash-only console snippet) | Move to `site/scripts/legacy/fingerprint-console.js`; not a gate |
| `site/tests/baseline/homepage-{375,1248}.json` (hashes) | Move to `site/tests/baselines/legacy-hash/`; superseded by B0 |
| `site/package.json` and lock changes | Commit in Phase 0 with the new dev dependencies |

---

## 3. Page inventory

Copy source: **H** homepage component text, **S** static page, **KB** `data/facts.ts`. **OMIT** = not built by default (D0). Files are under `site/src/pages/`.

| # | Route | File | Status | KB | Forms | Shared components | Content blockers | Copy |
|---|---|---|---|---|---|---|---|---|
| 1 | `/` | `index.astro` | built (Astro) | 01-10, 13, 16 names, 23 | F1 modal, F6 | `home/*`, shell | DS-0 removes Karim's bio. Safety (D9), footer tagline (Superseded 2026-11-08: the footer tagline is now the draft "Wrestling and grappling for kids, teens, and adults in Hayward, California." (D10, owner to confirm). Old text: [archive](../../archive/stale-2026-11-08/astro-design-system-and-buildout.md)), Saturday row (D1), youth card photos (D5), testimonial excerpts (D19), "forged in Dagestan" (D20) stay as today | H |
| 2 | `/about/` | `about.astro` | port | 05, 13, 16 names | F1 CTA, F6 | InteriorLayout, PageHero, SectionHeader | No Olympic, 1980, Moscow wording. Creed "Dagestani lineage" sentence is allowlisted under D10 | S verbatim |
| 3 | `/classes/` | `classes/index.astro` | new | 05, 06, 08, 09 | F1 CTA | PageHero, InfoCard, Button | Lists KB-05 programs and built class pages only | H Programs |
| 4 | `/classes/kid-wrestling/` | `classes/kid-wrestling.astro` | new | 04, 05, 06, 08 | F1 `youth` | ProgramPage, ScheduleList | KB-05 ages vs schedule "pre-K to 5th": show both as sourced. No youth photos (D5). Spec prices not in KB | H |
| 5 | `/classes/youth-wrestling/` | `classes/youth-wrestling.astro` | new | 04, 05, 06, 08, 16 (Sandeep Singh Gosal) | F1 `varsity` | ProgramPage, ScheduleList | Same age conflict; no varsity photo; no CIF or NCAA claims | H |
| 6 | `/classes/adult-wrestling/` | `classes/adult-wrestling.astro` | new | 04, 05, 06, 08, 16 (Naweed) | F1 `adult` | ProgramPage, ScheduleList | No clinic or Olympian claims | H |
| 7 | `/classes/nogi-jiu-jitsu/` | `classes/nogi-jiu-jitsu.astro` | new | 04, 05, 06, 08 | F1 `adult` | ProgramPage, ScheduleList | One schedule row; spec prices not in KB | H schedule |
| 8 | `/classes/gi-jiu-jitsu/` | `classes/gi-jiu-jitsu.astro` | new | 04, 06, 08 | F1 `adult` | ProgramPage, ScheduleList | Superseded 2026-11-08: the Saturday row is shown (D1 approved). Old text: [archive](../../archive/stale-2026-11-08/astro-design-system-and-buildout.md) | H schedule |
| 9 | `/classes/sambo/` | `classes/sambo.astro` | Superseded 2026-11-08: built, held from the live site (D3, staging only). Old text: [archive](../../archive/stale-2026-11-08/astro-design-system-and-buildout.md) | none | | | | |
| 10 | `/classes/boxing-fundamentals/` | `classes/boxing-fundamentals.astro` | new | 04, 06, 08, 16 (Farid Siddiq) | F1 `adult` | ProgramPage, ScheduleList | One shared schedule row | H |
| 11 | `/classes/open-mat/` | `classes/open-mat.astro` | new | 03, 04, 09 | F1a `openmat` | ProgramPage, ScheduleList, FactList | Hours via FactList only (D2); button label matches the form | H |
| 12 | `/classes/womens-self-defense/` | `classes/womens-self-defense.astro` | OMIT | 19 unconfirmed | F4 none | | D4 | |
| 13 | `/schedule/` | `schedule.astro` | new | 03, 04 | F1b | ScheduleList (filters), FactList | Pending rows hidden; homepage prose note not reused; hours from FactList; "Times can shift around holidays and tournaments" kept | H rows |
| 14 | `/pricing/` | `pricing.astro` | new | 06, 08, 09, 10 | F1 CTA | `home/Pricing.astro` | No sibling, PIF, or 4-day price | H |
| 15 | `/events/` | `events.astro` | OMIT | 20 unconfirmed | F3 none | | D6 | |
| 16 | `/register/` | `register.astro` | port | 06, 07, 10, 23 | F1 page | TrialForm `page` | Consent copy verbatim (D8) | S verbatim |
| 17 | `/contact/` | `contact.astro` | port | 01, 02, 03 | F2 | ContactForm, FactList | Hours via FactList | S verbatim |
| 18 | `/faqs/` | `faqs.astro` | new | 01, 02, 03, 06, 07, 08, 09, 10, 23 | F2 link | `home/Faq.astro` markup, FAQPage JSON-LD | Gear answer overlaps KB-11: reuse verbatim, add nothing. New answers only from listed KB, via `ds-lead` | H + KB |
| 19 | `/rules/` | `rules.astro` | OMIT | 13 | | | D7 | |
| 20 | `/donate/` | `donate.astro` | OMIT | none | F5 | | D6 | |
| 21 | `/locations/` | `locations/index.astro` | new | 01, homepage FAQ cities answer | F1 CTA | InfoCard | Cities as text; links only to built pages | H |
| 22 | `/locations/hayward-ca/` | `locations/hayward-ca.astro` | new | 01, 02, 03, 05, 06, 08 | F1 `hayward` | FactList, ScheduleList, TrialForm | No parking guide (KB-21) | KB + H |
| 23-26 | `/locations/{union-city-ca,fremont-ca,newark-ca,castro-valley-ca}/` | `locations/<slug>.astro` | OMIT | none | | | Drive times and school claims not in KB; doorway risk (D11) | |
| 27 | `/guides/` | `guides/index.astro` | OMIT | none | | | D12 | |
| 28-32 | `/guides/{adult-wrestling-bay-area,youth-wrestling-vs-martial-arts,wrestling-for-bjj-takedowns,high-school-off-season-wrestling,dsal-hayward-wrestling-pathway}/` | `guides/<slug>.astro` | OMIT | none | | | D12; need sources outside the KB | |
| 33 | `/reviews/` | `reviews.astro` | port | 17 Google (5.10) | F7 | ReviewForm, cards | Unverified stats stripped (5.10, D13) | S, minus stripped strings; bodies from `data/reviews.ts` |

Totals: **18 built** (1 to 8, 10, 11, 13, 14, 16 to 18, 21, 22, 33), **1 redirect**, **15 omitted**. Omitted routes 404 and nothing links to them.

---
