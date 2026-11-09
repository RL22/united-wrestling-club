# United Wrestling Club: Engineering & Growth Backlog (`todos.md`)

> **Note (2026-11-06):** the legacy root pages, concept folders, and the old Next.js snapshot now live in `discovery/archive/legacy-site/`. Paths in closed items below point to where they were.


> **Last updated:** 2026-11-07 (closeout, `/pm-capture-and-clean`)
> **Status:** The Astro site in `site/` (21 built pages, 4 machine files) builds and passes both gates. **No production host is connected.** Both Vercel projects were deleted on 2026-11-07. The site lives in the public repo `RL22/united-wrestling-club` (one clean commit, site-only), with search indexing off (`site/src/data/indexing.ts`, `LAUNCHED = false`). Four Formspree endpoints are wired. Custom domain cutover is pending a new host.
> **Target milestone:** Pre-launch QA, owner decisions, then publish and launch.

Format: each item has a checkbox, the target file or system, and acceptance criteria. Decisions are recorded in `discovery/decisions/`.

**Legacy targets:** items that name `v01/`, `reviews/`, `register/`, `contact/`, `about/`, or `assets/css/uwc.css` point at the pre-rebuild root pages, which are not deployed. The live site is `site/` (Astro). Where an item below has been checked against the Astro build, its current file is given in the target. Re-point any other target to `site/src/` before working on it.

---

## Completed in this milestone

- [x] One stylesheet with brand tokens: `assets/css/uwc.css`, documented in `DESIGN.md` (ADR-20261105-design-system)
- [x] Reviews page rebuilt on the homepage system, with the Barlow, Inter, and JetBrains Mono styles removed (`reviews/index.html`)
- [x] `/register` full-page trial form with media release (`register/index.html`)
- [x] `/contact` page with hours, address, and message form (`contact/index.html`)
- [x] Footer newsletter with explicit consent (`v01/index.html`)
- [x] Per-form Formspree endpoints, fail-closed states, `form_name` and `route` on every submission (`assets/js/uwc-attribution.js`, ADR-20261105-forms-per-form-endpoints)
- [x] Endpoints wired: trial and `/register` (`mkjjyyep`), contact (`mgaaddql`), newsletter (`meaanndk`), reviews (`mqppnnja`)
- [x] Invented review headlines and role lines removed (ADR-20261104-review-content-verbatim)
- [x] Six ADRs written and indexed
- [x] No CRM this year (ADR-20261105-no-crm-this-year); B2B pipelines deferred
- [x] Hosting: Vercel production deployed early on 2026-11-05 by owner decision; GitHub Pages staging retired (ADR-20261105-public-preview-github-pages addendum). **Superseded 2026-11-07:** both Vercel projects deleted by the owner (see ADR-20261107-public-site-repo-and-noindex)
- [x] README rewritten for the Astro site (2026-11-05); refreshed 2026-11-07 for the new repo and the deleted projects
- [x] Astro build gates: `scripts/check_dist.py --final` (21 pages, 785 references, 0 problems) and `scripts/copy_audit.sh site/dist` (0 violations), re-run 2026-11-07
- [x] Astro site deployed to Vercel production from `site/dist/` (2026-11-05; ADR-20261106 addendum). **Superseded 2026-11-07:** the deployment no longer exists; the URLs in that check are not live.
- [x] Public site repo `RL22/united-wrestling-club`: single commit `7f0f759`, site-only, force-pushed over the earlier history (2026-11-07)
- [x] Search indexing gate: `site/src/data/indexing.ts` `LAUNCHED = false`. Verified in `site/dist`: robots meta `noindex, follow`, `robots.txt` has no Sitemap line, `sitemap.xml` has 0 URLs (2026-11-07)
- [x] Owner decisions D1, D5, D7, D9, D20 applied; D10 tagline draft applied; D3, D4, D6, D11, D12 held (ADR-20261107-owner-decisions-d-items)
- [x] Legacy root pages still pass `scripts/check_site.py` (retired; the legacy checker now lives in `discovery/archive/legacy-site/scripts/`)
- [x] Depth section (parallax cutouts over "CHAMPIONS") removed from the homepage, with its CSS and scroll script (2026-11-05, owner decision). The three `video_assets/cutouts/naweed-*.webp` files are now unused.

---

## P0: Owner Approvals Blocking Publish (added 2026-11-07)

- [ ] **Approve a new host and create the Vercel project for the public repo**
  - **Target:** new Vercel project linked to `RL22/united-wrestling-club`; production branch set to a branch other than `main` (ADR-20261107-public-site-repo-and-noindex)
  - **Acceptance Criteria:** Owner approves the host. Project created under the `sprintz` team. Pushes to `main` build preview only. Preview URL loads with `noindex` on every page. Nothing is promoted to production until launch.
- [ ] **Decide launch: flip `LAUNCHED` and confirm the gate**
  - **Target:** `site/src/data/indexing.ts` (`LAUNCHED = false`); `site/src/layouts/Layout.astro`; `site/src/pages/robots.txt.ts`; `site/src/pages/sitemap.xml.ts`
  - **Acceptance Criteria:** Owner approves launch. Flip to `true`. Built output then has no noindex meta, a Sitemap line in robots.txt, and sitemap URLs for the 21 built routes. Re-run the gates.
- [ ] **Gate `llms.txt` before launch**
  - **Target:** `site/src/pages/llms.txt.ts` and `site/src/pages/llms-full.txt.ts`; `site/dist/llms.txt` currently lists 21 URLs and is not gated by `LAUNCHED`
  - **Acceptance Criteria:** Before launch, `llms.txt` lists no pages, or the file is removed from the pre-launch build. Built output checked: no published URL list while `LAUNCHED` is false.
- [x] **Decide the public-repo exposure of minors' photos** (owner decided 2026-11-08: keep them in the public repo; release check still open, see the "minors in program card photos" item below)
  - **Target:** `RL22/united-wrestling-club` (public) containing `site/public/video_assets/cards/*.jpg`
  - **Acceptance Criteria:** Owner decides to keep the files with releases on record, or replace them and re-export the public repo. A re-export is a force-push and needs approval.

## P1: Critical Path and Launch Blockers

- [ ] **Clean up the working tree on `homepage-polish` before committing (2026-11-07 closeout)**
  - **Target:** 12 modified files (`DESIGN.md`, `site/src/components/home/*`, `site/src/components/shell/*`, `site/src/data/nav.ts`, `site/src/pages/{pricing,reviews,schedule}.astro`); untracked `site/public/assets/logo--uwc-wordmark.svg`, `site/tests/baselines/allow-ds8-*.json`, and `scripts/__pycache__/` (now ignored)
  - **Acceptance Criteria:** Owner says which changes to commit. `site/tests/baselines/allow-ds8-*.json` are either committed (they are small allowlist files) or ignored, with the reason recorded. `git status --porcelain` shows only intended files. Commit only on the owner's request.
- [ ] **Re-point the local `origin` remote**
  - **Target:** `git remote` in this repo. Currently `https://github.com/RL22/united-wrestling-club-internal.git`, which was deleted on 2026-11-07.
  - **Acceptance Criteria:** `origin` is removed, or it points to a repo the owner still has. The `homepage-polish` and `owner-decisions-2026-11-07` work is not pushed to a deleted URL.
- [ ] **Confirm the D-register items the owner has not closed**
  - **Target:** D10 footer tagline (`site/src/components/shell/SiteFooter.astro`); D3 Sambo (`site/src/pages/classes/sambo.astro`, held from live); D4, D6, D11, D12 (held, see `site/src/data/routes.ts`)
  - **Acceptance Criteria:** Owner confirms the D10 copy. Owner approves the Sambo promotion when ready. D4, D6, D11, and D12 stay omitted until their unlock condition is met, and the research or copy for each is recorded.

- [ ] **Submit each form once on the live site and confirm the entry arrives**
  - **Target:** Formspree forms in the new account. Astro wiring: trial form `site/src/components/forms/TrialForm.astro` (`mkjjyyep`); contact, newsletter, and review forms use `data-uwc-form` with `FORM_ENDPOINTS` in `site/public/assets/js/uwc-attribution.js`
  - **Acceptance Criteria:** One real submission per form (trial, contact, newsletter, reviews) appears in its Formspree dashboard with `form_name` set. Confirm Formspree's first-submission email. Set the notification recipient for each form.
- [ ] **P0 lead response: copy changes**
  - **Target:** `v01/index.html` (schedule line "Text (510) 303-4869 to confirm your first session"; trial form consent copy; "SMS Status: Opted In" line); `register/index.html`
  - **Acceptance Criteria:** No page asks people to text a line that is not staffed for texts. Consent copy matches what is sent. Decision recorded in `discovery/decisions/ADR-20261105-lead-response-ownership.md`.
- [ ] **P0 lead response: knowledge base approved**
  - **Target:** `discovery/knowledge_base/uwc_kb_v1.md`; questions in `discovery/client/naweed_discovery_questions.md` section 8
  - **Acceptance Criteria:** Naweed approves or corrects each entry. Unverified entries stay out of automated replies. Last-verified dates filled in.
- [ ] **P0 lead response: staff responder and backup named**
  - **Target:** `discovery/strategy/lead_response_system.md` section 2 and section 14
  - **Acceptance Criteria:** A named staff responder with open-hours coverage. Backup named for class time. Both receive queue alerts.
- [ ] **P1 lead response: SMS platform and 10DLC**
  - **Target:** `discovery/strategy/lead_response_system.md` sections 9 and 10
  - **Acceptance Criteria:** Platform chosen and approved. A2P 10DLC brand and campaign registered and approved. No automated text sent before approval.
- [ ] **P2 lead response: automated text responder**
  - **Target:** `discovery/strategy/lead_response_system.md` section 5C; `discovery/knowledge_base/uwc_kb_v1.md`
  - **Acceptance Criteria:** 40 scripted questions pass (30 FAQ, 10 escalation). Every automated reply cites a Verified KB ID. Handoff tested end to end.
- [x] **P0 accuracy: remove invented testimonial details from the homepage**
  - **Target:** `site/src/components/home/Testimonials.astro`
  - **Acceptance Criteria:** Homepage testimonials match the reviews page rule (ADR-20261104): verbatim text, reviewer name, and platform only. No invented role, reviewer count, or location lines.
  - **Status (2026-11-07):** Fixed in the working tree on `homepage-polish`. No "Local Guide" or "Youth Parent" testimonial lines remain in `site/src`. Not committed, not deployed.
- [ ] **P0 accuracy: confirm Saturday hours with Naweed**
  - **Target:** `site/src/data/schedule.ts` row-11 (Saturday 8:00 to 10:00 AM gi jiu-jitsu, now shown per D1), with `site/src/components/home/Schedule.astro`, `site/src/components/shell/SiteFooter.astro` (its hours block still shows Saturday 10:00 AM to 12:00 PM), `site/src/data/jsonld-home.ts`, and `discovery/knowledge_base/uwc_kb_v1.md` KB-03
  - **Acceptance Criteria:** Naweed confirms every Saturday class. Footer, JSON-LD, schedule, and KB-03 agree.
  - **Status (2026-11-07):** D1 approved the row to show. Confirmation from Naweed is still open.
- [ ] **P0 accuracy: one membership price on the site**
  - **Target:** `$139.99` in `site/src/components/home/Hero.astro`, `Pricing.astro`, `site/src/data/nav.ts`, `site/src/data/jsonld-home.ts` (Offer), `site/src/data/facts.ts`, `site/src/pages/pricing.astro`, and the class pages (`kid-wrestling`, `youth-wrestling`, `adult-wrestling`). The FAQ (`site/src/data/faqs.ts`) says plans range from $89.99 to $150.00.
  - **Acceptance Criteria:** Owner decides the price the homepage leads with and whether to show the range. Hero, pricing section, nav, Offer JSON-LD, FAQ, and `llms-full.txt` then agree. KB-08 is the verified source for $139.99 per month.
  - **Status (2026-11-05): OPEN, live in production.** Decision needed from the owner.
- [ ] **P0 trial form: intent-specific presets**
  - **Target:** `openModal()` and trigger buttons in `v01/index.html` (about lines 1025 to 1041)
  - **Acceptance Criteria:** Each trigger sets the program select. Membership triggers say "membership", not "3-day pass". Form resets only after confirmed success. Backdrop close does not delete a dirty form.
- [ ] **P1 consent: tailored copy on every form**
  - **Target:** `site/src/components/forms/ConsentSms.astro` (verbatim TCPA text, used by the trial form), `ConsentMedia.astro`, `NewsletterForm.astro`, `ContactForm.astro`, `ReviewForm.astro`; `site/src/data/facts.ts` (consent facts)
  - **Acceptance Criteria:** Owner supplies per-form copy. Each form (trial, contact, newsletter, review, register) shows consent text tailored to its purpose. The same consent block exists on every form. Copy is not wired until the owner supplies it.
- [ ] **P1 privacy: media release default** (needs a decision, see the critique)
  - **Target:** media release checkbox in the trial form and `/register`
  - **Acceptance Criteria:** A decision on default-on vs default-off is recorded in an ADR. This reverses ADR-20261105-forms-per-form-endpoints if default-off is chosen.
- [ ] **P1 mobile: tap-to-call in the header or top bar**
  - **Target:** `.nav-phone` hidden at 768px and below in `assets/css/uwc.css`; top bar in `v01/index.html`
  - **Acceptance Criteria:** A 44px tel link is visible on a 375px screen without opening the drawer.
- [ ] **P1 reviews: label and stat claims**
  - **Target:** "Post Review & Copy to Clipboard" in `site/src/components/forms/ReviewForm.astro` (line 109). Stats: `site/src/components/pages/reviews/ReviewsHero.astro` and `PlatformCards.astro`.
  - **Acceptance Criteria:** Button label matches what happens (the dialog says "Review Copied to Clipboard!"). "100% Unanimous Rating" stays removed (owner, 2026-11-05). "42+" and Facebook "100% Rec" are confirmed from the GBP profile (owner, 2026-11-05).
  - **Status:** Stats resolved. Button label still to check.
- [ ] **P0 before publishing: GBP photos (ownership and minors)**
  - **Target:** `assets/img/gbp/gbp-team-group-wall.webp` (includes a young boy at left), `gbp-gym-floor-training.webp` (teens training), `gbp-pad-drill-adults.webp` (two adults; no minors)
  - **Acceptance Criteria:** Club confirms it owns the rights to each photo (GBP photos can come from customers). Media release confirmed for the child and the teens, or the photo is cropped or replaced. Until then, these images stay out of published pages.
  - **Status (2026-11-05):** The three GBP photos were removed from the Vercel production deploy after they were found reachable at `/assets/img/gbp/`. Not on any page. Keep them out of the deploy until cleared.
- [ ] **P0 before publishing: minors in program card photos**
  - **Target:** `site/public/video_assets/cards/program-youth.jpg` (three boys, identifiable) and `program-varsity.jpg` (athlete with name on singlet), shown by `site/src/components/home/Programs.astro`; `program-openmat.jpg` (teen in background)
  - **Acceptance Criteria:** Written media release confirmed for each identifiable minor shown, or the image is replaced with adults or coaches. Until then, the cards stay on staging only.
  - **Status (2026-11-08): OPEN.** Owner decided to keep the files in the public repo. Releases are not confirmed. The Vercel production site that showed these cards was deleted on 2026-11-07. The four card JPGs (`program-youth`, `program-varsity`, `program-adult`, `program-openmat`) are tracked in `RL22/united-wrestling-club`, which is public on GitHub. Owner decision D5 (2026-11-07) accepted minors' imagery on the site, but did not cover publishing the raw files on GitHub. Owner decided on 2026-11-08 to keep the files in the public repo. Written releases for the identifiable minors are still unconfirmed.
  - **Also decide:** whether `site/public/video_assets/` belongs in a public repo at all, or only the built `site/dist/` output.
- [x] **P0 Olympic claims: pulled from public copy (2026-11-05)**
  - Pulled: meta and JSON-LD, hero, lineage section and 1980 badge, Karim and Rashad bios, footers, the CTA headline, and the about page. Internal docs README and PRODUCT.md corrected.
  - Still open: re-add Karim's exact wording once he confirms it. PRODUCT.md principle 1 reworded to "Proof over pedigree" (2026-11-05).
- [ ] **P0 Olympic claims: confirm wording with Karim (client, Nov 5)**
  - **Target:** Astro: `site/src/components/shell/SiteFooter.astro` and `site/src/components/pages/about/CoFounder.astro` (Olympi wording), `site/src/components/home/Coaches.astro` (Ali Aliyev, Rashad), `site/src/components/pages/about/Creed.astro` (one lineage phrase dropped, owner undecided). Also `PRODUCT.md` principle 1; `discovery/knowledge_base/uwc_kb_v1.md` KB-16. Legacy: `v01/index.html` lines 7, 23, 69, 212, 391 to 404, 424, 461, 777, 780; `about/index.html`; `reviews/index.html`.
  - **Acceptance Criteria:** Karim confirms the exact wording (what he qualified for, if anything, and the Ali Aliyev result). Every public line uses that wording. "Moscow Olympian" and "Olympic qualifier" are removed until confirmed. Rashad's "competed alongside Karim" is confirmed or removed. Schema jobTitle corrected.
- [x] **P0 phone: one number, (510) 303-4869** (decided 2026-11-05)
  - **Target:** every site page, schema, and footer use `(510) 303-4869`. The retired second number is removed from all project records.
  - **Acceptance Criteria:** Site check passes. No `[retired number]` appears on a live page.
- [ ] **P0 Facebook: replace the retired phone number on the Facebook page**
  - **Target:** Facebook page contact details (owner action; Facebook still shows the retired number)
  - **Acceptance Criteria:** Facebook page phone reads `(510) 303-4869`, or the phone field is removed. Checked after the change.
- [ ] **Lead owner, hours, and fallback (from RevOps vetting C2 and M1)**
  - **Target:** `discovery/strategy/revops_lead_vetting.md`; questions for Naweed in `discovery/client/naweed_discovery_questions.md` section 8; Formspree notification settings for all four forms
  - **Acceptance Criteria:** Naweed is the named owner of new leads (confirmed 2026-11-05). Record the hours he checks the inbox. Name a fallback for class time, when he is on the mat. Notifications go to Naweed and the fallback. The response SLA in the report is signed off.
- [ ] **Retire the old Formspree inbox (`xyyavaaj`)**
  - **Target:** old Formspree account; `discovery/client/uwc_live_funnel_test_log.md`, `discovery/strategy/uwc_sms_marketing_playbook.md`
  - **Acceptance Criteria:** Export any leads that arrived during pre-launch from the old inbox. Confirm no live page or playbook still posts there. The SMS playbook's "Formspree `xyyavaaj`" references are updated to the new trial form.
- [x] **Publish to production (superseded 2026-11-07)**
  - The 2026-11-05 Vercel production project and the public repo were both replaced on 2026-11-07. The public repo is `RL22/united-wrestling-club` (public, site-only). No production host is connected. Publishing steps are in `README.md` section 6.
- [ ] **Cut over the custom domain to a new host**
  - **Target:** Route 53 zone for `unitedwrestlingclub.com` ([ADR-20261103](discovery/decisions/ADR-20261103-hosting-on-vercel.md)); a new Vercel project linked to `RL22/united-wrestling-club` (not yet created)
  - **Acceptance Criteria:** Blocked until the owner approves the new host and launch. Then follow the ADR-20261103 cutover steps, keeping the SES, DMARC, and `shop` records. Form endpoints unchanged. Post-cutover: check the four forms, the live homepage, and the reviews, register, and contact pages. Decide whether GitHub Pages returns as read-only staging, and record that in the ADR-20261105 addendum.
- [ ] **Decide the flagship concept (conflict)**
  - **Target:** `discovery/decisions/ADR-20261102-concept-consolidation-and-v04-flagship.md`
  - **Acceptance Criteria:** ADR-20261102 names V04 as flagship. The live site is built on V01 at the client's direction. Decide which is the flagship, then update the ADR and `README.md` section 2.
- [ ] **Google Business Profile hours**
  - **Target:** GBP listing for `30139 Industrial Pkwy SW Ste C, Hayward, CA 94544` (owner: Naweed)
  - **Acceptance Criteria:** GBP shows Mon–Fri 6:00 AM to 10:00 PM, Sat 10:00 AM to 12:00 PM, Sun closed. Remove the 5 PM weekday closing.
- [ ] **Media release on the WrestlingIQ waiver**
  - **Target:** WrestlingIQ Team 513 waiver (owner: Naweed)
  - **Acceptance Criteria:** The media and content notice from `v01/index.html` (trial form) appears in the waiver, with an opt-out. Screenshot saved to `discovery/`.
- [ ] **Naweed fact check on site copy**
  - **Target:** Astro: `site/src/components/home/Safety.astro` (Wi-Fi, 2-inch foam, cross-linked), `Programs.astro` and `Safety.astro` (Dollamur), `Coaches.astro` (biomechanics line), `Testimonials.astro` ("VERIFIED" wording is in its section). The 1:6 ratio does not appear in the Astro build. `README.md` section 3.
  - **Acceptance Criteria:** Each item below is confirmed, corrected, or removed:
    - Dollamur as the mat brand name
    - 1:6 coaching ratio
    - "2-inch cross-linked polyethylene" foam spec (not on the live site)
    - "Wi-Fi" in the parent lounge (not on the live site)
    - "biomechanics and chain wrestling" line for Naweed
    - "VERIFIED COMMUNITY PROOF" eyebrow wording
    - Ali Aliyev tournament result (silver or bronze)
    - Karim's 1980 credentials wording
    - Saturday open mat end time (site says 12:00 PM; `README.md` earlier said 12:30 PM)
- [x] **Verify review figures** (owner confirmed 2026-11-05)
  - **Target:** `site/src/components/pages/reviews/ReviewsHero.astro` ("42+ Verified Reviews Across Platforms"); `PlatformCards.astro` (Facebook "100% Rec")
  - **Resolution:** Owner confirmed "42+" and "100% Rec" as fact from the GBP profile, and both are restored. "100% Unanimous Rating" stays removed. Google's "5.0 across 42 reviews" stays (client-confirmed).
- [ ] **GA4 web stream and lead events**
  - **Target:** GA4 property `562010875` (needs Editor); `<head>` of the public homepage
  - **Acceptance Criteria:** Web stream live with its `G-` ID on the public site. `generate_lead` fires on successful trial, contact, newsletter, and reviews submissions (`form_name` as a parameter). No child details in event parameters.
- [ ] **Search-visible first HTML**
  - **Target:** Astro pages in `site/dist/` (static HTML from `site/src/pages/`), for `/`, `/reviews/`, `/register/`, `/contact/`
  - **Acceptance Criteria:** Real `<title>`, meta description, and H1 in the unrendered HTML of each page. `robots.txt` and `sitemap.xml` return 200 on the public site (verified 2026-11-05). Verify the Astro pages' `<title>` and H1 with `curl`.

---

## P2: User Flow and Conversion

- [ ] **Build the forms not yet built**
  - **Target:** `discovery/site/forms_map_full_sitemap.md` (F3 RSVP, F4 self-defense waitlist, F5 scholarship, F8 affiliate)
  - **Acceptance Criteria:** Each form posts with its own `form_name` and endpoint, uses the same consent and fail-closed pattern as the trial form, and has a success state.
- [ ] **Decide `/donate` and the affiliate route**
  - **Target:** `discovery/site/forms_map_full_sitemap.md` decisions 1 and 2
  - **Acceptance Criteria:** `/donate` is built with the scholarship form, or hidden. Affiliate applications get a route, or go through contact with an "Affiliate" reason.
- [ ] **Review photo uploads**
  - **Target:** dropzone in `reviews/index.html`
  - **Acceptance Criteria:** Photos reach the club, or the dropzone is removed. Minors' photos need a consent and retention rule first.
- [ ] **Coach grid empty cell**
  - **Target:** `.coach-grid-secondary` in `assets/css/uwc.css` (or the homepage section)
  - **Acceptance Criteria:** Three coach cards fill a three-column layout above 1024px, or a fourth coach is added. Checked at 1280px.
- [ ] **Hero video pause control**
  - **Target:** hero video in `v01/index.html`
  - **Acceptance Criteria:** Visible pause control. Reduced-motion visitors see the poster frame. Meets WCAG 2.2.2.
- [ ] **Trial modal accessibility**
  - **Target:** `#trialModal` in `v01/index.html`, `register/index.html`, `reviews/index.html`
  - **Acceptance Criteria:** `role="dialog"` and `aria-modal`. Focus trapped while open and returned to the trigger on close. Escape closes it. Keyboard-only test passes.
- [ ] **"Pay Drop-In at Door" intent**
  - **Target:** drop-in button in `v01/index.html`
  - **Acceptance Criteria:** It opens a drop-in path, or the label matches the trial form it opens. Decide which.
- [ ] **Program card links**
  - **Target:** program cards in `v01/index.html` (`href="#trial"`)
  - **Acceptance Criteria:** Each card has a real link target, or a documented JavaScript-only action.
- [ ] **Brand tagline size on phones**
  - **Target:** `.brand-sub--compact` in `assets/css/uwc.css`
  - **Acceptance Criteria:** Tagline renders at 11px or larger on a 375px screen, or is removed from the phone header.
- [ ] **Sub-390px viewport testing**
  - **Target:** `v01/index.html`, `reviews/index.html`, `register/index.html`, `contact/index.html`
  - **Acceptance Criteria:** `scrollWidth === innerWidth` at 320px and 375px on all four pages.

---

## P3: Non-Functional, SEO, and Design Debt

- [ ] **XML sitemap and IndexNow for real routes**
  - **Target:** `site/src/pages/sitemap.xml.ts` and `robots.txt.ts` (built from `site/src/data/routes.ts`)
  - **Acceptance Criteria:** Sitemap built and live (`/sitemap.xml` returns 200; it lists built routes only). Still to do: submit to Google and Bing, and expand as routes are built. The sitemap uses the `www.unitedwrestlingclub.com` host, so submit only after the domain cutover.
- [x] **Shared shell in one place** (Astro)
  - **Resolution:** Top bar, nav, footer, trial modal, and page scripts are shared Astro components (`site/src/components/shell/`, `site/src/layouts/InteriorLayout.astro`). Remaining: the legacy root pages still copy the shell by hand. Archive them to close the item fully (see the next item).
- [x] **Archive the legacy root pages** (moved to `discovery/archive/legacy-site/`)
  - **Target:** `v01/`, `reviews/`, `register/`, `contact/`, `about/`, `assets/css/uwc.css`, `assets/js/uwc-attribution.js`, root `assets/`, `live_site_content/`, `video_assets/`, `unsplash-grunge-001.jpg`
  - **Acceptance Criteria:** Owner signs off the Astro site as final. Each legacy folder moves to `discovery/archive/` (not published), `scripts/check_site.py` is retired with it, and the README legacy section is removed. Confirm the Astro build still passes `check_dist.py --final` afterwards.
- [ ] **Design debt in the stylesheet**
  - **Target:** the legacy `assets/css/uwc.css` and `DESIGN.md` section 11. The Astro styles (`site/src/styles/`) follow ADR-20261106 and are checked by `site/scripts/css-homes.mjs`.
  - **Acceptance Criteria:** About 40 `!important` declarations reduced. The four `transition: all` declarations list their properties. Breakpoints cut from 13 to 5. Spacing moved to a 4pt scale. Section padding in five sections moved to `--space-section`. Checked with the computed-style comparison used in this milestone. If this is closed on the Astro styles, re-measure with `site/scripts/fingerprint.mjs`.
- [ ] **Local SEO landing pages**
  - **Target:** `discovery/market/local_seo/`
  - **Acceptance Criteria:** Five city pages (Fremont, Union City, Castro Valley, Newark, San Leandro) built and listed in the sitemap.
- [ ] **Directory citations**
  - **Target:** `discovery/market/top_20_wrestling_authority_backlinks.md`
  - **Acceptance Criteria:** NAP submitted to Berkeley Parents Network, SCWAY, USA Wrestling club finder, and Yelp Local. Each has a confirmation.

---

## P4: Strategy, Campaigns, and Later Routes

- [ ] **Build the remaining sitemap routes**
  - **Target:** `discovery/site/website_rebuild_spec.md` section 5 (32-route sitemap). Status: 21 pages built (see `site/src/data/routes.ts`). Omitted routes wait on owner decisions named in `routes.ts`: donate, women's self-defense, the city pages, and the guides hub and guides.
  - **Acceptance Criteria:** Each route has content, its forms per `discovery/site/forms_map_full_sitemap.md`, and a sitemap entry. Each omitted route moves to `built` or is removed from the plan.
- [ ] **Women's Self-Defense seminar series**
  - **Target:** `discovery/strategy/womens_self_defense_financial_model.md`, `/classes/womens-self-defense` (F4)
  - **Acceptance Criteria:** Curriculum and dates confirmed with Louisa and Neha's sister. Waitlist form live.
- [ ] **Free Community Day and Holiday Open House Mixer**
  - **Target:** `discovery/archive/snapshots/todos_2026-10-30.md`; `/events` (F3 RSVP)
  - **Acceptance Criteria:** Date, time, and capacity confirmed. RSVP form live with the media release. Matside check-in and opt-out tagging planned.
- [ ] **Seasonal Paid-In-Full loyalty campaign**
  - **Target:** `discovery/decisions/ADR-20261102-commercial-pricing-and-pif-promotions.md`
  - **Acceptance Criteria:** SMS and email copy for existing 3+ month members, approved, before the holiday window.
- [ ] **Former Pep Boys facility (30085 Industrial Pkwy SW)**
  - **Target:** `discovery/client/2026-11-02_naweed_discovery-call.md`, `portal/index.html`
  - **Status:** Unconfirmed. Naweed and the city have not reached the property owner.
  - **Acceptance Criteria:** Follow up with Naweed in January 2027. Do not change the Hayward GBP (`30139 Industrial Pkwy SW`) until the lease or acquisition is confirmed.
- [ ] **Evaluate the WrestlingIQ CLI (`wiq-cli`) for ops reporting**
  - **Target:** `wiq-cli` gem (vendor repo `github.com/wrestlingiq/wiq-cli`, research preview v0.6.1)
  - **Acceptance Criteria:** Team admin enables API access in WrestlingIQ settings and issues a read-only token. Test `wiq rosters list` and `wiq events list` on a test account. Record the use cases and PII rules before any roster data leaves WrestlingIQ. Token stored outside the repo. Write scopes (`prospects:write`, `reports:write`) are not granted until the read-only test passes. Vendor warns it is not yet recommended for production-critical automation.
- [ ] **Concept folders after launch**
  - **Target:** `v02/`, `v03/`, `v04/`
  - **Acceptance Criteria:** Archive to `discovery/` or delete once the flagship decision is final. Not published.
- [ ] **Space Grotesk decision**
  - **Target:** `--font-accent` in `assets/css/uwc.css`
  - **Acceptance Criteria:** Keep it for numerals (current, recorded in ADR-20261105-design-system), or replace it. Recorded either way.
