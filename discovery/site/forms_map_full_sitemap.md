---
type: spec
status: current
group: site
owner: "Rodney Lewis (Sprintz)"
date: 2026-11-06
last_reviewed: 2026-11-06
sources: ["discovery/site/website_rebuild_spec.md", "discovery/site/sitemap_status.md", "site/src/data/routes.ts", "assets/js/uwc-attribution.js"]
---

# Forms map: full sitemap

Scope: the 32-route sitemap in [website_rebuild_spec.md](website_rebuild_spec.md) (section 5), plus `/reviews`, which the rebuilt site uses but the spec does not list. Route-by-route status is in [sitemap_status.md](sitemap_status.md) (as of 2026-11-06). The source of truth is `site/src/data/routes.ts`.

Status key: **Have** = built on the current homepage or reviews page. **Build** = needed, not built. **Decide** = needs an owner decision first.

## TL;DR

- The map covers the 32-route sitemap from the rebuild spec plus /reviews, with nine distinct forms; F1 trial pass intake is a shared component on about 20 routes
- Endpoints are set in FORM_ENDPOINTS: trial_pass still points at the legacy xyyavaaj form (see RC-09), while contact, newsletter, and review are empty and report not connected
- The media and content release (F9) is default checked on general class and event forms and default unchecked on the self-defense waitlist (F4)
- Blockers: Formspree access to the xyyavaaj inbox is pending, Naweed must add the same media wording to the WrestlingIQ waiver, and F3 needs the Holiday Mixer date, time, and capacity
- Open decisions: build or hide /donate, route F8 affiliate, decide how to handle the F7 reviews checkbox, add /reviews as route 33, and keep /register as a full page

---

## Build status (Nov 5, 2026)

- **Wired to the new Formspree project pattern (copied logic, per-form endpoints, real success and failure states):** F1 trial intake (homepage modal and `/register`), F2 contact (`/contact`), F6 newsletter (footer), F7 review submission (`/reviews`).
- **Endpoints:** set in `FORM_ENDPOINTS` in `assets/js/uwc-attribution.js`. `trial_pass` still points at the legacy `xyyavaaj` form. `contact`, `newsletter`, and `review` are empty, so those forms report "not connected" and send nothing until their IDs are pasted in.
- **Media release (F9)** is on the trial form and `/register`, default checked.
- **Not built:** F3 RSVP, F4 self-defense waitlist, F5 scholarship (`/donate` decision pending), F8 affiliate (decision pending), and the 12 routes that are still omitted (see [sitemap_status.md](sitemap_status.md)).

## 1. Form catalog

Nine distinct forms. F1 is a shared component reused on about 20 routes with different presets.

### F1. Trial Pass intake (`form_name=trial_pass`)
Used on: the homepage modal, `/register` (full-page version), every class page, `/pricing`, `/locations/*`, `/classes/open-mat` (as F1a), and `/schedule` (as F1b). **Have** (modal, homepage only). **Build** the `/register` page version and the variants.

| Field | Required | Notes |
|---|---|---|
| Athlete full name | Yes | Have |
| Parent or guardian name | Yes for athletes under 18 | Have (label says "if youth athlete") |
| Phone, E.164 | Yes | Have. Validate format, not just `required`. |
| Program | Yes | Have. Preset from the route. |
| How did you find UWC | Yes | Have |
| SMS opt-in (TCPA disclosure) | No | Have. Keep the current disclosure text. |
| **Media and content release** | Default checked, opt-out | **Build.** Wording from todos: "Media & Content Notice…". |
| Hidden: attribution, consent | Auto | Have (`uwc-attribution.js`) |
| Hidden: `form_name`, `route` | Auto | **Build.** Needed to route leads. |

Variants:
- **F1a Drop-in** (`/classes/open-mat`, "Pay Drop-In at Door"): program preset to Saturday Open Mat ($15). Same fields.
- **F1b Book from schedule** (`/schedule`): program and session date/time preset from the grid. **Build.** Spec component 2.

### F2. Contact (`form_name=contact`)
Used on `/contact`, linked from `/faqs` ("still have questions?") and the footer. **Build.** The live site already has this form, posting to the same Formspree endpoint.

| Field | Required | Notes |
|---|---|---|
| Name | Yes | |
| Email | Yes, or phone | |
| Phone | Optional | |
| Reason | Yes | Dropdown: Trial or schedule, Tuition or billing, Corporate clinic, Sponsorship or partnership, Affiliate or coach partner, Media or press, Other |
| Message | Yes | |
| Preferred reply | Yes | Email, phone, or SMS. SMS needs the F1 disclosure. |

### F3. Event RSVP (`form_name=event_rsvp`)
Used on `/events` for the Holiday Mixer and the Quarterly Community Open Mat & BJJ Mixer. **Build.** Target: 30+ RSVPs at the first mixer (plan, Move 4).

| Field | Required | Notes |
|---|---|---|
| Name, email, phone | Yes | |
| Number of guests | Yes | |
| Athlete age or ages | Yes if a child attends | Children's details are never sent to analytics. |
| Event | Yes | Preset from the page |
| Media and content release | Default checked, opt-out | Same wording as F1 |

### F4. Women's Self-Defense waitlist (`form_name=wsd_waitlist`)
Used on `/classes/womens-self-defense`. **Build.** Plan: founding pricing ($49 intro workshop, $199 six-week cohort), buddy discount.

| Field | Required | Notes |
|---|---|---|
| Name, email | Yes | |
| Phone | Optional | |
| Cohort interest | Yes | Dropdown: $49 intro workshop, $199 six-week cohort, both |
| Buddy email | Optional | Buddy discount applies on both sides |
| Media release | Default opt-out. Recommended for this program. | |

### F5. Scholarship application (`form_name=scholarship`)
Used on `/donate`. **Decide**: the spec says "populate or hide". If built, it needs a policy: who qualifies, what the amount covers, and how decisions are made.

| Field | Required | Notes |
|---|---|---|
| Parent or guardian name, email, phone | Yes | |
| Athlete name, age, school or club | Yes | Minors' details: store only what the review needs |
| Tournament travel plans | Yes | |
| Need statement | Yes | |
| Supporting documents | No | Formspree file upload depends on plan. Confirm before promising it. |

### F6. Newsletter, "Team #513 Mat Report" (`form_name=newsletter`)
Used site-wide in the footer, on `/guides`, and inline on `/guides/*`. **Build.** Plan: Q2 monthly report.

| Field | Required | Notes |
|---|---|---|
| Email | Yes | |
| First name | Optional | |
| Interest | Optional | Youth, adult, events, women's self-defense |
| Email consent | Yes, **unchecked by default** | Explicit consent. Use double opt-in before the first send. |

### F7. Review submission (`form_name=review`)
Used on `/reviews`. The `submit-review` redirect was removed on 2026-11-06. **Have** (rebuilt), but not connected to any endpoint. The checkbox "Feature on homepage" promises something the site cannot do yet. **Decide.** See the reviews rebuild notes.

### F8. Affiliate or coach partner application (`form_name=affiliate`)
No route in the spec. Plan Q2: $50 per enrollment for local BJJ coaches and trainers. **Decide**: build it as a `/partners` route, or handle it through F2 with the "Affiliate" reason.

### F9. Media and content release (component, not a standalone form)
Appears inside F1, F1a, F1b, F3, and F4. Wording: the default notice from the todos ("Media & Content Notice…"). Default checked for general classes, default unchecked for the self-defense cohort, with a clear opt-out.

---

## 2. Route map

| # | Route | Status (spec) | Forms on page | Notes |
|---|---|---|---|---|
| 1 | `/` | Existing | F1 (modal from CTAs), F6 (footer) | **Have** F1 |
| 2 | `/about` | Existing | F1 CTA | |
| 3 | `/classes` | Existing | F1 CTA | Hub |
| 4 | `/classes/kid-wrestling` | Existing | F1 (Youth 5–13) | |
| 5 | `/classes/youth-wrestling` | Existing | F1 (Varsity 14–18) | |
| 6 | `/classes/adult-wrestling` | Existing | F1 (Adult) | |
| 7 | `/classes/nogi-jiu-jitsu` | Existing | F1 (Adult) | |
| 8 | `/classes/gi-jiu-jitsu` | Existing | F1 (Adult) | |
| 9 | `/classes/sambo` | Existing | F1 (Adult) | |
| 10 | `/classes/boxing-fundamentals` | Existing | F1 (Adult) | |
| 11 | `/classes/open-mat` | Existing | F1a (Drop-in $15) | |
| 12 | `/classes/womens-self-defense` | **New** | F4 waitlist, F1 | |
| 13 | `/schedule` | Existing | F1b (book from grid) | |
| 14 | `/pricing` | Existing | F1 CTA | Checkout is WrestlingIQ-hosted |
| 15 | `/events` | Existing | F3 RSVP, F2 (corporate reason) | |
| 16 | `/register` | Existing | F1 (full page) | Non-modal version for no-JS and direct links |
| 17 | `/contact` | Existing | F2 | |
| 18 | `/faqs` | Existing | F2 link | |
| 19 | `/rules` | Existing | none | |
| 20 | `/donate` | Existing | F5 (Decide), F2 (sponsorship reason) | |
| 21 | `/locations` | **New** | F1 CTA | |
| 22 | `/locations/hayward-ca` | **New** | F1 (source tag: Hayward) | |
| 23 | `/locations/union-city-ca` | **New** | F1 (source tag: Union City) | |
| 24 | `/locations/fremont-ca` | **New** | F1 (source tag: Fremont) | |
| 25 | `/locations/newark-ca` | **New** | F1 (source tag: Newark) | |
| 26 | `/locations/castro-valley-ca` | **New** | F1 (source tag: Castro Valley) | |
| 27 | `/guides` | **New** | F6 | |
| 28 | `/guides/adult-wrestling-bay-area` | **New** | F6 inline, F1 CTA | |
| 29 | `/guides/youth-wrestling-vs-martial-arts` | **New** | F6 inline, F1 CTA | |
| 30 | `/guides/wrestling-for-bjj-takedowns` | **New** | F6 inline, F1 CTA | |
| 31 | `/guides/high-school-off-season-wrestling` | **New** | F6 inline, F1 CTA | |
| 32 | `/guides/dsal-hayward-wrestling-pathway` | **New** | F6 inline, F2 | Community bridge, so F2 suits it |
| — | `/reviews` | **Not in spec** | F7 | Add to the sitemap as route 33 |
| — | `/free-trial` (optional alias) | Optional | F1, same as `/register` | For flyers and QR codes |
| — | `/robots.txt`, `/sitemap.xml`, `/llms.txt`, `/llms-full.txt` | New | none | |

Counts: F1 on about 25 routes including variants. F2 on 5 routes (`/events`, `/contact`, `/faqs`, `/donate`, `/guides/dsal-hayward-wrestling-pathway`). F3 on 1. F4 on 1. F5 on 1 (if built). F6 on 5 routes plus the site-wide footer. F7 on 1. F8 on none yet.

---

## 3. Shared requirements

- **One F1 component**, with a preset per route. Do not copy the markup into each page.
- **Routing.** Every form posts a hidden `form_name` and `route`, so the Formspree inbox (or a webhook) can route by form. Today all forms post to `xyyavaaj`. Confirm the plan limits before relying on one endpoint for nine forms.
- **Consent.**
  - SMS: keep the TCPA disclosure on every form that can send texts (F1, F2 if SMS is a reply option, F3 if texts are sent).
  - Email: F6 is unchecked by default and double opt-in.
  - Media release: default checked on general class and event forms (F1, F3), default unchecked on F4.
- **Minors.** Parent or guardian is the submitter. Child details never go into analytics. (Todos already require this for GA4.)
- **Works without JavaScript.** `/register` and `/contact` must post as plain HTML forms. The modal is an enhancement.
- **Success states.** F1 shows the WrestlingIQ waiver link. F2, F3, F4, F5, F6 need their own confirmation message and a next step.

---

## 4. Blockers and decisions

**Blockers**
1. **Formspree access.** The todos and the Nov 2 call notes say access to the `xyyavaaj` inbox is still pending. Until it is confirmed, no lead is confirmed to reach anyone.
2. **WrestlingIQ waiver.** The media release only works if the same wording is added to the WrestlingIQ waiver. Naweed has to make that change in WrestlingIQ admin.
3. **Event details.** Holiday Mixer date, time, and capacity are needed before F3 can be finished.

**Decisions**
1. `/donate`: build the scholarship form (F5) or hide the page.
2. F8 affiliate: its own `/partners` route, or an F2 reason.
3. F7 reviews: connect to an endpoint, reword the checkbox, or remove it.
4. Add `/reviews` to the sitemap as route 33.
5. Keep `/register` as a full page (recommended) or redirect it to the homepage modal.

---

## 5. Build order

1. F1 shared component and the `/register` page. This is the revenue path and already exists in the modal.
2. F2 contact on `/contact`.
3. F3 RSVP on `/events`, once the event details are confirmed.
4. F6 newsletter in the footer, then on `/guides`.
5. F4 self-defense waitlist on `/classes/womens-self-defense`.
6. F5 scholarship, only if the decision is to build `/donate`.
7. F8 affiliate, only if decided.
