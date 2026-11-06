# United Wrestling Club: Engineering & Growth Backlog (`todos.md`)

> **Last updated:** 2026-11-05
> **Status:** Homepage, reviews, register, and contact pages built on one design system. Forms wired to the new Formspree account (four endpoints). Production is live on Vercel early (https://united-wrestling-club.vercel.app, 2026-11-05). GitHub Pages staging is off (public repo made private 2026-11-05). Custom domain cutover is still pending.
> **Target milestone:** Pre-launch QA, then publish and launch.

Format: each item has a checkbox, the target file or system, and acceptance criteria. Decisions are recorded in `discovery/decisions/`.

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
- [x] Hosting: Vercel production deployed early on 2026-11-05 by owner decision; GitHub Pages staging retired (ADR-20261105-public-preview-github-pages addendum)
- [x] README rewritten around current routes, run, and publish steps
- [x] Static site check: `scripts/check_site.py` (passes on all five site pages)
- [x] Depth section (parallax cutouts over "CHAMPIONS") removed from the homepage, with its CSS and scroll script (2026-11-05, owner decision). The three `video_assets/cutouts/naweed-*.webp` files are now unused.

---

## P1: Critical Path and Launch Blockers

- [ ] **Submit each form once on the live site and confirm the entry arrives**
  - **Target:** Formspree forms in the new account; `FORM_ENDPOINTS` in `assets/js/uwc-attribution.js`
  - **Acceptance Criteria:** One real submission per form (trial, contact, newsletter, reviews) appears in its Formspree dashboard with `form_name` set. Confirm Formspree's first-submission email. Set the notification recipient for each form.
- [ ] **P0 lead response: copy changes**
  - **Target:** `v01/index.html` (schedule line "Text (510) 303-4869 to confirm your first session"; trial form consent copy; "SMS Status: Opted In" line); `register/index.html`
  - **Acceptance Criteria:** No page asks people to text a line that is not staffed for texts. Consent copy matches what is sent. Decision recorded in `discovery/decisions/ADR-20261105-lead-response-ownership.md`.
- [ ] **P0 lead response: knowledge base approved**
  - **Target:** `discovery/knowledge_base/uwc_kb_v1.md`; questions in `discovery/naweed_discovery_questions.md` section 8
  - **Acceptance Criteria:** Naweed approves or corrects each entry. Unverified entries stay out of automated replies. Last-verified dates filled in.
- [ ] **P0 lead response: staff responder and backup named**
  - **Target:** `discovery/lead_response_system.md` section 2 and section 14
  - **Acceptance Criteria:** A named staff responder with open-hours coverage. Backup named for class time. Both receive queue alerts.
- [ ] **P1 lead response: SMS platform and 10DLC**
  - **Target:** `discovery/lead_response_system.md` sections 9 and 10
  - **Acceptance Criteria:** Platform chosen and approved. A2P 10DLC brand and campaign registered and approved. No automated text sent before approval.
- [ ] **P2 lead response: automated text responder**
  - **Target:** `discovery/lead_response_system.md` section 5C; `discovery/knowledge_base/uwc_kb_v1.md`
  - **Acceptance Criteria:** 40 scripted questions pass (30 FAQ, 10 escalation). Every automated reply cites a Verified KB ID. Handoff tested end to end.
- [ ] **P0 accuracy: remove invented testimonial details from the homepage**
  - **Target:** `v01/index.html` testimonials (about lines 555 to 595: "Local Guide (17 reviews)", "East Bay, CA")
  - **Acceptance Criteria:** Homepage testimonials match the reviews page rule (ADR-20261104): verbatim text, name, and platform only. Correction: ADR-20261104 says this was done. It was not done on the homepage.
- [ ] **P0 accuracy: reconcile Saturday hours**
  - **Target:** schedule Saturday 8:00 to 10:00 AM gi class in `v01/index.html` (about line 363) vs footer, structured data, and `discovery/knowledge_base/uwc_kb_v1.md` KB-03
  - **Acceptance Criteria:** Naweed confirms every Saturday class. Footer, JSON-LD, schedule, and KB-03 agree.
- [ ] **P0 trial form: intent-specific presets**
  - **Target:** `openModal()` and trigger buttons in `v01/index.html` (about lines 1025 to 1041)
  - **Acceptance Criteria:** Each trigger sets the program select. Membership triggers say "membership", not "3-day pass". Form resets only after confirmed success. Backdrop close does not delete a dirty form.
- [ ] **P1 privacy: media release default** (needs a decision, see the critique)
  - **Target:** media release checkbox in the trial form and `/register`
  - **Acceptance Criteria:** A decision on default-on vs default-off is recorded in an ADR. This reverses ADR-20261105-forms-per-form-endpoints if default-off is chosen.
- [ ] **P1 mobile: tap-to-call in the header or top bar**
  - **Target:** `.nav-phone` hidden at 768px and below in `assets/css/uwc.css`; top bar in `v01/index.html`
  - **Acceptance Criteria:** A 44px tel link is visible on a 375px screen without opening the drawer.
- [ ] **P1 reviews: label and stat claims**
  - **Target:** "Post Review & Copy to Clipboard" and "100% Unanimous", "42+", and "100% Rec" in `reviews/index.html` and `v01/index.html`
  - **Acceptance Criteria:** Button label matches what happens. Stats trace to a source or are removed.
- [ ] **P0 before publishing: GBP photos (ownership and minors)**
  - **Target:** `assets/img/gbp/gbp-team-group-wall.webp` (includes a young boy at left), `gbp-gym-floor-training.webp` (teens training), `gbp-pad-drill-adults.webp` (two adults; no minors)
  - **Acceptance Criteria:** Club confirms it owns the rights to each photo (GBP photos can come from customers). Media release confirmed for the child and the teens, or the photo is cropped or replaced. Until then, these images stay out of published pages.
  - **Status (2026-11-05):** The three GBP photos were removed from the Vercel production deploy after they were found reachable at `/assets/img/gbp/`. Not on any page. Keep them out of the deploy until cleared.
- [ ] **P0 before publishing: minors in program card photos**
  - **Target:** `video_assets/cards/program-youth.jpg` (three boys, identifiable) and `program-varsity.jpg` (athlete with name on singlet); `program-openmat.jpg` (teen in background)
  - **Acceptance Criteria:** Written media release confirmed for each identifiable minor shown, or the image is replaced with adults or coaches. Until then, the cards stay on staging only.
  - **Status (2026-11-05): OPEN, live in production.** `program-youth.jpg` and `program-varsity.jpg` are on the Vercel production site at https://united-wrestling-club.vercel.app, which the owner chose to deploy before this release check was done. Decide: remove them from production (replace or crop), or confirm the releases.
- [x] **P0 Olympic claims: pulled from public copy (2026-11-05)**
  - Pulled: meta and JSON-LD, hero, lineage section and 1980 badge, Karim and Rashad bios, footers, the CTA headline, and the about page. Internal docs README and PRODUCT.md corrected.
  - Still open: re-add Karim's exact wording once he confirms it. PRODUCT.md principle 1 reworded to "Proof over pedigree" (2026-11-05).
- [ ] **P0 Olympic claims: confirm wording with Karim (client, Nov 5)**
  - **Target:** `v01/index.html` lines 7, 23, 69 (meta, JSON-LD), 212 (hero), 391 to 404 (lineage section and "1980" badge), 424 and 461 (Karim and Rashad bios), 777 and 780 (footer); `about/index.html`; `reviews/index.html` and `about/index.html` footer; `PRODUCT.md` principle 1; `discovery/knowledge_base/uwc_kb_v1.md` KB-16
  - **Acceptance Criteria:** Karim confirms the exact wording (what he qualified for, if anything, and the Ali Aliyev result). Every public line uses that wording. "Moscow Olympian" and "Olympic qualifier" are removed until confirmed. Rashad's "competed alongside Karim" is confirmed or removed. Schema jobTitle corrected.
- [x] **P0 phone: one number, (510) 303-4869** (decided 2026-11-05)
  - **Target:** every site page, schema, and footer use `(510) 303-4869`. The retired second number is removed from all project records.
  - **Acceptance Criteria:** Site check passes. No `[retired number]` appears on a live page.
- [ ] **P0 Facebook: replace the retired phone number on the Facebook page**
  - **Target:** Facebook page contact details (owner action; Facebook still shows the retired number)
  - **Acceptance Criteria:** Facebook page phone reads `(510) 303-4869`, or the phone field is removed. Checked after the change.
- [ ] **Lead owner, hours, and fallback (from RevOps vetting C2 and M1)**
  - **Target:** `discovery/revops_lead_vetting.md`; questions for Naweed in `discovery/naweed_discovery_questions.md` section 8; Formspree notification settings for all four forms
  - **Acceptance Criteria:** Naweed is the named owner of new leads (confirmed 2026-11-05). Record the hours he checks the inbox. Name a fallback for class time, when he is on the mat. Notifications go to Naweed and the fallback. The response SLA in the report is signed off.
- [ ] **Retire the old Formspree inbox (`xyyavaaj`)**
  - **Target:** old Formspree account; `discovery/uwc_live_funnel_test_log.md`, `discovery/uwc_sms_marketing_playbook.md`
  - **Acceptance Criteria:** Export any leads that arrived during pre-launch from the old inbox. Confirm no live page or playbook still posts there. The SMS playbook's "Formspree `xyyavaaj`" references are updated to the new trial form.
- [x] **Publish to production (superseded 2026-11-05)**
  - Public repo `RL22/united-wrestling-club` made private, and GitHub Pages is off. Production is the Vercel project `united-wrestling-club` (procedure in `README.md` section 6). The `gPages` branch is no longer a publish target.
- [ ] **Cut over the custom domain to Vercel**
  - **Target:** Route 53 zone for `unitedwrestlingclub.com` ([ADR-20261103](discovery/decisions/ADR-20261103-hosting-on-vercel.md)); Vercel project `united-wrestling-club`
  - **Acceptance Criteria:** Production already runs at https://united-wrestling-club.vercel.app. Follow the ADR-20261103 cutover steps, keeping the SES, DMARC, and `shop` records. Form endpoints unchanged. Post-cutover: check the four forms, the live homepage, and the reviews, register, and contact pages. Decide whether GitHub Pages returns as read-only staging, and record that in the ADR-20261105 addendum.
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
  - **Target:** `v01/index.html`, `reviews/index.html`, `README.md` section 3
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
- [ ] **Verify review figures**
  - **Target:** trust block in `v01/index.html`; platform cards in `reviews/index.html`
  - **Acceptance Criteria:** "42+ verified reviews across platforms", "100% Unanimous Rating", and the Facebook "100% Rec" each trace to platform data, or are removed. Google's "5.0 across 42 reviews" stays (client-confirmed).
- [ ] **GA4 web stream and lead events**
  - **Target:** GA4 property `562010875` (needs Editor); `<head>` of the public homepage
  - **Acceptance Criteria:** Web stream live with its `G-` ID on the public site. `generate_lead` fires on successful trial, contact, newsletter, and reviews submissions (`form_name` as a parameter). No child details in event parameters.
- [ ] **Search-visible first HTML**
  - **Target:** `v01/index.html`, `reviews/index.html`, `register/index.html`, `contact/index.html`
  - **Acceptance Criteria:** Real `<title>`, meta description, and H1 in the unrendered HTML of each page. `robots.txt` and `sitemap.xml` return 200 on the public site.

---

## P2: User Flow and Conversion

- [ ] **Build the forms not yet built**
  - **Target:** `discovery/forms_map_full_sitemap.md` (F3 RSVP, F4 self-defense waitlist, F5 scholarship, F8 affiliate)
  - **Acceptance Criteria:** Each form posts with its own `form_name` and endpoint, uses the same consent and fail-closed pattern as the trial form, and has a success state.
- [ ] **Decide `/donate` and the affiliate route**
  - **Target:** `discovery/forms_map_full_sitemap.md` decisions 1 and 2
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
  - **Target:** `sitemap.xml`, `robots.txt` in the public repo
  - **Acceptance Criteria:** Lists `/`, `/reviews/`, `/register/`, `/contact/`. Submitted to Google and Bing. Expanded as routes are built.
- [ ] **Shared shell in one place**
  - **Target:** top bar, nav, drawer, footer, trial modal, and homepage script across `v01`, `reviews`, `register`, `contact`
  - **Acceptance Criteria:** One source for the shell. Editing it once updates all four pages. Today it is copied by hand.
- [ ] **Design debt in the stylesheet**
  - **Target:** `assets/css/uwc.css`, `DESIGN.md` section 11
  - **Acceptance Criteria:** About 40 `!important` declarations reduced. The four `transition: all` declarations list their properties. Breakpoints cut from 13 to 5. Spacing moved to a 4pt scale. Section padding in five sections moved to `--space-section`. Checked with the computed-style comparison used in this milestone.
- [ ] **Local SEO landing pages**
  - **Target:** `discovery/local_seo/`
  - **Acceptance Criteria:** Five city pages (Fremont, Union City, Castro Valley, Newark, San Leandro) built and listed in the sitemap.
- [ ] **Directory citations**
  - **Target:** `discovery/top_20_wrestling_authority_backlinks.md`
  - **Acceptance Criteria:** NAP submitted to Berkeley Parents Network, SCWAY, USA Wrestling club finder, and Yelp Local. Each has a confirmation.

---

## P4: Strategy, Campaigns, and Later Routes

- [ ] **Build the remaining sitemap routes**
  - **Target:** `discovery/website_rebuild_spec.md` section 5 (32 routes; 5 built as part of the homepage, reviews, register, and contact)
  - **Acceptance Criteria:** Each route has content, its forms per `discovery/forms_map_full_sitemap.md`, and a sitemap entry.
- [ ] **Women's Self-Defense seminar series**
  - **Target:** `discovery/womens_self_defense_financial_model.md`, `/classes/womens-self-defense` (F4)
  - **Acceptance Criteria:** Curriculum and dates confirmed with Louisa and Neha's sister. Waitlist form live.
- [ ] **Free Community Day and Holiday Open House Mixer**
  - **Target:** `discovery/todos.md`; `/events` (F3 RSVP)
  - **Acceptance Criteria:** Date, time, and capacity confirmed. RSVP form live with the media release. Matside check-in and opt-out tagging planned.
- [ ] **Seasonal Paid-In-Full loyalty campaign**
  - **Target:** `discovery/decisions/ADR-20261102-commercial-pricing-and-pif-promotions.md`
  - **Acceptance Criteria:** SMS and email copy for existing 3+ month members, approved, before the holiday window.
- [ ] **Former Pep Boys facility (30085 Industrial Pkwy SW)**
  - **Target:** `discovery/call_notes_naweed_20261102_uwc.md`, `portal/index.html`
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
