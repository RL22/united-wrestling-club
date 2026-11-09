---
type: dossier
status: current
group: strategy
owner: "Rodney Lewis (Sprintz)"
date: 2026-11-06
last_reviewed: 2026-11-06
sources: ["discovery/scratch/audits_baselines_synthesis.md", "discovery/strategy/executive_pitch_deck_copy.md", "discovery/scratch/brand_architecture_synthesis.md", "discovery/archive/snapshots/local_seo_audit.md", "discovery/market/local_seo/top_10_programmatic_lps.md", "discovery/market/alameda_county_local_footprint.md", "discovery/archive/snapshots/ai_readiness_audit.md", "discovery/strategy/commercial_and_financial_model_synthesis.md", "discovery/decisions/ADR-20261102-facility-and-coaching-invariants.md", "discovery/decisions/ADR-20261102-concept-consolidation-and-v04-flagship.md", "discovery/brand/edc_motto_graphic_architecture.md", "discovery/decisions/ADR-20261102-commercial-pricing-and-pif-promotions.md", "discovery/strategy/womens_self_defense_financial_model.md", "https://search.google.com/local/writereview?placeid=ChIJsQd_yMaVj4ARrXw93nb4euo", "discovery/decisions/ADR-20261102-branded-reviews-and-submission-engine.md", "discovery/client/naweed_discovery_questions.md", "discovery/decisions/ADR-20261106-astro-design-system.md"]
caveat: "partly superseded, see banner"
shard_of: "discovery/strategy/master_discovery_findings.md"
part: "2 of 3"
---

> Part 2 of 3 of [master_discovery_findings](../master_discovery_findings.md). Text is verbatim from the original; only links were rewritten.

## Section 3: Root-Cause Problem Deconstruction & Impact

| Failure point | Problem | Agitation / business impact | Solution and proof of success |
|---|---|---|---|
| **1. Technical architecture and visibility** | The sampled initial HTML is a spinner/shell with no readable words; discovery files returned 404. | Users and crawlers relying on initial HTML encounter weak content; rendering and discovery depend on later execution. Existing organic rankings show this is not total invisibility. | Serve semantic content on initial response, valid sitemap and robots directives, canonical URLs and entity data. Verify live HTTP responses, indexing and Search Console coverage. |
| **2. Mobile experience** | Reported >6.5-second mobile LCP, 17.72 MB video and a difficult seven-column schedule with duplicated slots. | Slow first impressions and hard-to-read class information add friction; the size alone does not prove exactly which resource caused LCP. | Use a compressed responsive video, visible poster, reduced-motion fallback and mobile day cards; validate real LCP, layout and actual schedule with coaches. |
| **3. WrestlingIQ handoff** | Cold visitors are redirected to third-party registration before a reliable first-party contact is captured. | Follow-up opportunities are lost; 40%–60% abandonment is a hypothesis until funnel events are measured. | Capture consented contact details with clear offer and confirmation; persist the lead, then offer the WrestlingIQ handoff. Measure modal start, successful save, outbound click, waiver and paid enrollment. |
| **4. Lineage and brand** | Credentials and social video proof are difficult to find in static copy or external feeds. | Families cannot quickly evaluate coaching credibility or the atmosphere; the online identity does not fully communicate the club's strengths. | Tell the founder and coaching story with verified credentials, documentary imagery, permissions and accessible captions. Confirm the 1980 Moscow qualification wording, given that the Games were boycotted. The Ali Aliyev medal is bronze (owner decision, 2026-11-06). |
| **5. Seasonality** | The model assumes 7.5% monthly churn and vulnerability around November and May transitions. | Cash flow and staffing can become volatile; the cited 20%–30% seasonal swings need historical billing evidence. | Analyze 24 months of cohorts, offer optional PIF before the relevant season, track renewals and recognize prepaid income over service periods. |

## Section 4: Proposed Redesign Architecture & Concept Parity

### 4.1 Three presentation concepts

> **Archived 2026-11-06.** These concept folders are in `../archive/legacy-site/`. The production site is the Astro build (ADR-20261106). The matrix is kept as design history, not as the acceptance baseline.

| Concept | Directory | Visual direction | Decision |
|---|---|---|---|
| **01 — The Clean Baseline** | `v01/` | High-contrast tournament grit, directional scrim and 1080p hero treatment. | Retain as a clear comparison. Confirm camera-original quality; upscaling is not a 1080p source. |
| **02 — The Olympic Sanctuary** | `v04/` | Dark, restrained surfaces, open video clearance, floating navigation/action pill and balanced coaching dossier. | **Recommended flagship**, subject to client selection and production acceptance. |
| **03 — The Conversion Engine** | `v03/` | Editorial typography, Google reputation badge, italic pull-quotes and explicit conversion hierarchy. | Retain as the editorial comparison. |

ADR 002 removes `v02/` from the presentation because of routing and design inconsistency. The requirement is **100% information and functional parity**, not visual uniformity. The matrix below is the acceptance baseline specified in the ADR, not a claim that every interaction was independently tested for this report.

| # | Required component and acceptance criterion | v01 | v04 | v03 |
|---:|---|:---:|:---:|:---:|
| 1 | Sanction bar: accurate USA Wrestling RTC #513 | Required | Required | Required |
| 2 | Responsive header: navigation, confirmed phone, pass CTA | Required | Required | Required |
| 3 | Hero: accessible video/poster, primary action and meaningful text | Required | Required | Required |
| 4 | Authority banner: review snapshot, coaching ratio, cleaning and 3,800 sq ft | Required | Required | Required |
| 5 | Program matrix: youth, varsity, adult and open mat | Required | Required | Required |
| 6 | EDC creed: Excellence / Discipline / Champions | Required | Required | Required |
| 7 | Coaching dossier: two principal and four secondary coaches | Required | Required | Required |
| 8 | Attributed, permissioned testimonials and reviews link | Required | Required | Required |
| 9 | Pricing: $15 three-day pass, $139.99 core and $15 drop-in, subject to confirmation | Required | Required | Required |
| 10 | Parent safety and single-open FAQ | Required | Required | Required |
| 11 | Location, accurate schedule and facility information | Required | Required | Required |
| 12 | Pre-footer action and complete semantic footer | Required | Required | Required |

Test each row in all three concepts on desktop and mobile, including keyboard interaction, factual copy, CTA destination and lead persistence; record pass/fail before presenting parity as verified. [Source: concept ADR](../../decisions/ADR-20261102-concept-consolidation-and-v04-flagship.md).

### 4.2 Technical blueprint and acceptance

- **Delivery:** pre-render meaningful HTML; use vanilla CSS and JavaScript without runtime framework dependencies. Inventory any external fonts, embeds, analytics and services separately: zero JavaScript framework dependencies does not mean zero external services.
- **Performance:** compress and defer video appropriately, preload the actual LCP poster where justified, serve responsive images and test on representative devices. A source projects <1.4-second LCP; this is a target requiring live measurement, not an established result.
- **Accessibility:** target WCAG AAA contrast where feasible; measure each foreground/background and state, including text on video. AAA contrast alone does not establish full WCAG conformance. Provide keyboard access, visible focus, labels, captions and reduced-motion support.
- **Structured data:** use a valid JSON-LD `@graph` for the business and verified people/offers, with consistent IDs and canonical NAP. Mark up only visible, accurate content; review rich-result eligibility and platform policies before publishing aggregate ratings. Schema does not guarantee a rich result.
- **Interactions:** use native `<details name="uwc-faq">` for single-open FAQ behavior with an appropriate compatibility fallback, and a native `<dialog>` or equivalent accessible modal with focus management, escape/close and a no-JavaScript route.
- **Lead workflow:** a one-click CTA **opens** the form; completing it still requires input and a successful save. Capture the minimum necessary fields, disclose the offer and handoff, validate, show confirmation and recover from network or clipboard failure. Verify backend delivery, consent, retention, notifications and WrestlingIQ integration. Texts to the club line go to the automated responder (naweed-bot), per the 2026-11-06 owner decision. Check that responder's knowledge base and handoff rules rather than assuming them.

### 4.3 Coaching and brand system

The facility ADR identifies a six-person coaching bench. Confirm current roles, credentials and permission to publish with each person:

| Coach | Discovery-record role and credential |
|---|---|
| Karim Zemaryalai | Founder; Ali Aliyev tournament bronze medalist (owner decision). The 1980 Moscow qualification wording is open: the Games were boycotted by many countries. |
| Naweed Zemaryalai | Head coach; SFSU kinesiology degree, Chabot coaching and Farid Basharat corner experience. |
| Rashad Rahimi | Co-founder / coach; Olympic qualifier and Asian Games silver medalist. |
| Sandeep Singh Gosal | Youth competition coach. Owner-supplied bio, not yet sourced: James Logan High School wrestler and 2001 California state place winner; Fresno State, B.S. Business Administration (2007); works in the semiconductor industry and volunteers as an assistant at Kennedy High School. This replaces the ADR's three-time champion claim, which has no source. |
| Steve Siroy | Senior advisory coach; Chabot coaching and wrestling hall-of-fame recognition; confirm exact institution/title. |
| Farid Siddiq | Striking and boxing director; collegiate athlete and combat footwork coach. |

The brand position combines **industrial utility, documentary honesty and welcoming community**. Rogue informs clear equipment specifications and durability; Milwaukee suggests practical craft; Leica informs restrained, authentic photography. Darc Sport offers a model for collective identity and substantial team gear; Gymshark informs mobile convenience. Adapt these references to UWC rather than reproduce another brand or use intimidating imagery that undermines family trust.

The **EDC creed** translates *Excellence / Discipline / Champions* into repeatable editorial and merchandise language. Three existing vector treatments provide a choice: **Tri-block** (clear modular wordmark), **Brutalist Contour** (industrial outline) and **Combat Octagon** (compact tactical badge). Select one primary system and retain legible monochrome and small-size variants. [Sources: brand synthesis](../../scratch/brand_architecture_synthesis.md), [EDC architecture](../../brand/edc_motto_graphic_architecture.md).
