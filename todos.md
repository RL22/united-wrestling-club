# United Wrestling Club — Engineering & Growth Backlog (`todos.md`)

> **Last Updated:** 2026-11-02  
> **Status:** Post-Sprint Parity Sweep Complete  
> **Target Milestone:** Client Discovery Presentation & Flagship Deployment

---

## P1: Critical Path & Client Pitch Integration

- [ ] **Discovery Call Presentation & Concept Signoff**
  - **Target:** [`index.html`](file:///Users/rodneylewis/Sprintz/clients/prospects/united-wrestling-club/index.html)
  - **Acceptance Criteria:** Present the PAS diagnostic, KPI growth model, and 3 mobile concepts to Head Coach Naweed and Founder Karim Zemaryalai. Confirm client preference for Concept 02 (`v04/`) as the default flagship.
- [ ] **Custom Domain Cutover & DNS Configuration**
  - **Target:** `CNAME`, `index.html`
  - **Acceptance Criteria:** Configure DNS A-records (`185.199.108.153`, etc.) and CNAME for `unitedwrestlingclub.com` on GitHub Pages with automatic HTTPS enforcement.
- [ ] **WrestlingIQ (Team #513) Integration & Native Modal Hook**
  - **Target:** `v01/index.html`, `v04/index.html`, `v03/index.html`
  - **Acceptance Criteria:** Connect the native \$15 Mat Pass modal directly to UWC's verified WrestlingIQ Team 513 registration endpoint (`https://www.wrestlingiq.com/users/sign_up?paid_session_id=6327&show_registration=true&team_id=513`) or capture leads to webhook before forwarding.

---

## P2: User Flow & Conversion Optimization

- [ ] **First-Day Parking & Arrival Video Walkthrough**
  - **Target:** `video_assets/`, `reviews/index.html`
  - **Acceptance Criteria:** Produce and embed a 30-45s vertical walkthrough video demonstrating how to turn off Industrial Pkwy SW, park, and enter Suite C so new trial parents experience zero first-day anxiety.
- [ ] **Direct SMS Dispatch to Coach Naweed**
  - **Target:** `v01/index.html`, `v04/index.html`, `v03/index.html`
  - **Acceptance Criteria:** Verify `tel:+15103034869` and `sms:+15103034869` deep links open the native messaging application with pre-populated text: *"Hi Coach Naweed, I'd like to try a \$15 Mat Pass for my athlete."*
- [ ] **Sub-390px Viewport Edge-Case Testing**
  - **Target:** `v01/index.html`, `v04/index.html`, `v03/index.html`, `reviews/index.html`
  - **Acceptance Criteria:** Verify zero horizontal scroll overflow (`scrollWidth === innerWidth`) on 320px and 375px viewports (iPhone SE / older Androids).

---

## P3: Local SEO & Regional Expansion

- [ ] **High-Intent East Bay Geo Landing Pages**
  - **Target:** `discovery/local_seo/`
  - **Acceptance Criteria:** Deploy 5 dedicated city landing pages for adjacent wrestling feeder cities:
    1. `/wrestling-classes-fremont-ca`
    2. `/youth-wrestling-union-city-ca`
    3. `/wrestling-gym-castro-valley-ca`
    4. `/grappling-takedowns-newark-ca`
    5. `/wrestling-academy-san-leandro-ca`
- [ ] **Local Authority & Directory Citations**
  - **Target:** `discovery/top_20_wrestling_authority_backlinks.md`
  - **Acceptance Criteria:** Submit UWC's verified NAP (30139 Industrial Pkwy SW Ste C, Hayward CA) to Berkeley Parents Network, SCWAY directory, USA Wrestling club finder, and Yelp Local.
- [ ] **XML Sitemap & Search Console IndexNow Submission**
  - **Target:** `sitemap.xml`, `robots.txt`
  - **Acceptance Criteria:** Create `sitemap.xml` listing `/`, `/v01/`, `/v04/`, `/v03/`, and `/reviews/`, and submit via IndexNow to Google and Bing.

---

## P4: Strategic Growth & Seasonal Campaigns

- [ ] **Seasonal Paid-In-Full (PIF) Loyalty Campaign (Pre-Holiday November Lock-In)**
  - **Target:** `discovery/decisions/ADR-20261102-commercial-pricing-and-pif-promotions.md`
  - **Acceptance Criteria:** Draft SMS/email copy offering existing 3+ month members a 6-month or 12-month upfront renewal (e.g. 12 months for the price of 10 + free team rashguard) to secure cash flow before holiday dips.
- [ ] **UWC Free Community Day & Holiday Open House Mixer**
  - **Target:** `discovery/todos.md`
  - **Acceptance Criteria:** Outline event run of show with guest clinics (Mugsy / UFC athletes), matside check-in trial capture, and media release opt-out tagging.
- [ ] **Women's Self-Defense Seminar Series**
  - **Target:** `discovery/womens_self_defense_financial_model.md`
  - **Acceptance Criteria:** Coordinate curriculum and dates with Louisa (Boxing/MMA) and Neha's sister (Active Police Officer & Collegiate Champion) for a 4-week weekend workshop.
