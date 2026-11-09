
> Part 3 of 4 of [astro-design-system-and-buildout](../astro-design-system-and-buildout.md). Text is verbatim from the original; only links were rewritten.

## 4. Execution plan

### 4.1 Phases

```
Phase 0 (B0) -> DS-0 (B1) -> DS-1..DS-11 -> skeptic -> owner confirms D0 -> G1..G6 in parallel (G1 merges first) -> Phase 3
```

Each group works in its own git worktree off the Phase 1 merge commit and merges one at a time.

### 4.2 Shared files, `routes.ts`, and `nav.ts`

Only `ds-lead` writes `site/src/{styles,layouts,data}/**`, `site/src/components/{shell,home,ui,forms,templates}/**`, `site/public/**`, `site/astro.config.mjs`, `site/package.json`, `site/scripts/**`, `scripts/**`, `site/tests/baselines/**` (except G1's port allow files), `.gitignore`, `DESIGN.md`, `discovery/decisions/**`.

`data/routes.ts` statuses:
- **DS-7** creates it: `/` is `built` (owned by no group); the 15 OMIT routes are `omitted`; the other 17 routes are `planned`, each with its owning group. `planned` is allowed only on a route that a group owns.
- **Each group's merge commit** changes only its own routes from `planned` to `built`. That is the only shared-file write a group makes; `ds-lead` reviews the diff and rejects anything else.
- **Phase 3** requires no `planned` route left.

`data/nav.ts` changes only in DS-7 (today's homepage links), DS-8 (`isHome` variants), and Phase 3 step 1. Never by a group.

**Link rule:** `check_dist.py` passes a link whose target is `built`, `redirect`, or `planned`; fails a link to `omitted`. With `--final`, a link to a route that is not `built` or `redirect` fails.

### 4.3 Groups

Naming: group N uses preview port `4340 + N`, static port `8140 + N`, scratch `site/output/g<N>/`. `ds-lead` uses 4330, 8130, `site/output/ds/`.

| Group | Routes | Exclusive paths | Components | KB allowed | Model |
|---|---|---|---|---|---|
| **G1 Ports** | `/about/`, `/reviews/`, `/register/`, `/contact/` | `site/src/pages/{about,reviews,register,contact}.astro`, `site/src/components/pages/{about,reviews,register,contact}/**`, `site/tests/baselines/static/*-allow.json` | InteriorLayout, PageHero, SectionHeader, TrialForm, ContactForm, ReviewForm, Consent*, cards | 01, 02, 03, 05, 06, 07, 10, 13, 16 names, 23; 17 Google on `/reviews/` only | Sonnet |
| **G2 Classes: hub and wrestling** | `/classes/`, `/classes/kid-wrestling/`, `/classes/youth-wrestling/`, `/classes/adult-wrestling/` | `site/src/pages/classes/{index,kid-wrestling,youth-wrestling,adult-wrestling}.astro`, `site/src/components/pages/classes-wrestling/**` | ProgramPage, ScheduleList, InfoCard, TrialForm, Button | 04, 05, 06, 08, 09, 16 names | Sonnet |
| **G3 Classes: grappling, boxing, open mat** | `/classes/nogi-jiu-jitsu/`, `/classes/gi-jiu-jitsu/`, `/classes/boxing-fundamentals/`, `/classes/open-mat/` | `site/src/pages/classes/{nogi-jiu-jitsu,gi-jiu-jitsu,boxing-fundamentals,open-mat}.astro`, `site/src/components/pages/classes-adult/**` | ProgramPage, ScheduleList, TrialForm, FactList | 03, 04, 05, 06, 08, 09, 16 (Farid Siddiq) | Sonnet |
| **G4 Info** | `/schedule/`, `/pricing/`, `/faqs/` | `site/src/pages/{schedule,pricing,faqs}.astro`, `site/src/components/pages/info/**` | ScheduleList, `home/Pricing.astro`, `home/Faq.astro` markup, FactList, TrialForm F1b | 01, 02, 03, 04, 06, 07, 08, 09, 10, 23 | Sonnet |
| **G5 Locations** | `/locations/`, `/locations/hayward-ca/` | `site/src/pages/locations/{index,hayward-ca}.astro`, `site/src/components/pages/locations/**` | FactList, ScheduleList, InfoCard, TrialForm | 01, 02, 03, 05, 06, 08 | Sonnet |
| **G6 Machine files** | `/robots.txt`, `/sitemap.xml`, `/llms.txt`, `/llms-full.txt` | `site/src/pages/{robots.txt,sitemap.xml,llms.txt,llms-full.txt}.ts` | `data/routes.ts`, `data/facts.ts` | Verified only. `llms.txt`: summary and built-route links; `llms-full.txt`: Verified facts with KB IDs | Haiku |

Unlock-only groups (Sonnet, after their decisions, ports 4347 to 4350): **G7** women's self-defense (D4); Superseded 2026-11-08: Sambo (D3) is built and held from the live site, so it is not unlock-only. Old text: [archive](../../archive/stale-2026-11-08/astro-design-system-and-buildout.md); **G8** events, donate (D6), rules (D7); **G9** four city pages (D11); **G10** guides (D12, after a sourced brief).

### 4.4 Per-group gate (before merge)

From the group worktree, `site/`, with `P=4340+N`, `O=output/g<N>`:
1. `npm run build` exits 0.
2. `dist/<route>/index.html` (or the `.txt`/`.xml` file for G6) exists for **every route the group owns**; a missing one fails.
3. `python3 ../scripts/check_dist.py --routes <owned routes>` (link rule 4.2).
4. `npm run preview -- --port $P &`; `node scripts/smoke.mjs --base http://localhost:$P --routes <owned routes> --out $O`.
5. `bash ../scripts/copy_audit.sh src/pages src/components/pages dist`.
6. Homepage regression against B1 (fingerprint, pixel, text; `allow-ds8.json` only). Must exit 0.
7. G1 only: port comparison (6.5).
8. Report: routes built, KB IDs per page, any copy line not from H, S, or KB, and requests for `ds-lead`.

### 4.5 Phase 3 (`ds-lead`)

1. `data/nav.ts`: interior pages link to built routes; homepage anchors stay. Resulting homepage nav and footer differences go into `allow-p3.json` (exact paths), the planner approves, and B2 is captured.
2. Apply group requests.
3. Whole-build verification (6.6).
4. Production switch is D15, outside this plan.

---

## 5. Copy and content rules

1. **No em dashes** (U+2014) in our copy, markup, alt text, titles, meta, or JSON-LD. Exceptions: the quote elements exempt under 6.4. En dashes in schedule time ranges stay.
2. **No invented facts:** no new numbers, prices, ages, times, dates, reviews, counts, ratings, staff names, credentials, outcomes, or partnerships. If a sentence needs a fact not in `data/facts.ts`, cut it.
3. **Verified KB only**, as listed per group. Never KB-11, 12, 14, 15, 18, 19, 20, 21, 22 retention, or any KB Section C item. KB-13 only in existing reused copy (Dollamur is still on the Naweed fact-check list). The only exception: the client-confirmed KB-17 rating "5.0 across 42 reviews on Google", which stays on `/reviews/` only, under ADR-20261104 item 3, and is listed in D13.
4. **Blocked claims:** "Olympian", "Olympic" as a credential, "1980", "Moscow", "boycott", "qualifier", "Ali Aliyev", "Makhachkala", "Dagestan" or "Dagestani", "medalist", "Train with an Olympian", "Ramazanov", "Kardanov", "state champions", any coach credential beyond KB-16 names and roles. Only the allowlisted existing lines (6.4) may contain them.
5. **Phone:** `(510) 303-4869`, `tel:5103034869`. Say "Call", never "Text us". "Text" appears only in `ConsentSms.astro`, verbatim until D8.
6. **Hours and Saturday.** Open conflict: the schedule lists Saturday 8:00 to 10:00 AM gi, outside KB-03's Saturday 10:00 AM to 12:00 PM, and the Saturday end time is unconfirmed (D1, D2). Until both close:
   - No page writes a day or time in prose. Hours appear only through `FactList`; class times only through `ScheduleList`.
   - `ScheduleList` does not render a `pending` row unless `showPending` is true. No new page sets it. Nothing replaces or explains the hidden row.
   - The homepage keeps `home/Schedule.astro` as today (Saturday row and the line 53 prose note), allowlisted under D1. When D1 closes, `ds-lead` switches it to `ScheduleList` and `FactList` in one change with a new baseline.
7. **Photos:** only `data/media.ts` (`still_31_naweed_headshot_united_wall.jpg`, `still_44_coach_naweed_mat_command_uwc_banner.jpg`, `still_49_sergio_gomez_striking_usa_wrestling_olympic_banner.jpg`, `live_site_content/assets/co-founder.jpg`, `program-adult.jpg`). No `program-youth.jpg`, `program-varsity.jpg`, `program-openmat.jpg`, GBP photos, or images of minors until D5. `still_09_coach_community_mat.jpg` only after `ds-lead` checks it for minors.
8. **Forms:** `forms/*` only; the four `FORM_ENDPOINTS` (`trial_pass`, `contact`, `newsletter`, `review`). No new endpoints or `form_name` values; no `xyyavaaj`. F3, F4, F5, F8 not built.
9. **Consent:** `ConsentSms.astro` and `ConsentMedia.astro` only, unchanged. Media release default checked (D16).
10. **Reviews (ADR-20261104).** Bodies verbatim, name and platform only. G1 **strips** these unverified strings from the `/reviews/` port and puts them in no other page:
    - `<title>` "5.0 ★ Verified Google & Yelp Reviews": replaced by `United Wrestling Club Reviews | Hayward, CA`.
    - meta description and `og:description` "Read 42+ verified 5.0-star reviews...": replaced by `Reviews of United Wrestling Club in Hayward, CA, and a form to share your own.`
    - `twitter:title` and `twitter:description` "5.0 ★ Verified...": `twitter:title` matches the new title; `twitter:description` matches the new meta description.
    - eyebrow "Verified Social Proof ·": removed, rest of the eyebrow kept.
    - hero lead "5.0 ★ verified reviews from East Bay youth parents, CIF high school competitors, and adult grapplers...": the sentence is removed; the second sentence ("Read authentic member experiences or share your story below.") is kept.
    - trust score "100% Unanimous Rating" and "42+ Verified Reviews Across Platforms": removed. The "5.0" figure stays only with the label `5.0 across 42 reviews on Google` from `facts.reviewsGoogle`.
    - Yelp card "5.0 ★" and "Verified Grapplers & Parents"; Facebook card "100% Rec" and "East Bay Combat Community": rating and tagline lines removed; the card names and links stay.
    The Google card "5.0 across 42 reviews" and the `AggregateRating` JSON-LD (5.0, 42) stay, on `/reviews/` only, on the basis of KB-17 (client-confirmed) and ADR-20261104 item 3. Owner confirms all of this under D13. "42+" appears nowhere.
11. **Visuals:** PRODUCT.md and DESIGN.md; no side stripes over 1px, gradient text, `backdrop-filter`, pure `#000` or `#fff`; tokens only.
12. **Each page:** one H1, real `<title>` and meta description, canonical path, alt text on every image.

---
