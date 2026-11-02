# United Wrestling Club (UWC) — Digital Growth Platform

> **Client / Entity:** United Wrestling Club (Hayward, CA)  
> **Sanctioning:** USA Wrestling Regional Training Center (RTC #513)  
> **Headquarters:** 30139 Industrial Pkwy SW Ste C, Hayward, CA 94544  
> **Direct Line:** (510) 303-4869  
> **Live GitHub Pages URL:** [https://rl22.github.io/united-wrestling-club/](https://rl22.github.io/united-wrestling-club/)

---

## 1. Project Overview

United Wrestling Club is Northern California's premier Olympic and Folkstyle wrestling academy. Founded by **1980 Moscow Olympian Karim Zemaryalai** and directed by **Head Coach Naweed Zemaryalai** (B.S. in Kinesiology, SFSU; Chabot College Wrestling Coach; corner to UFC contender Farid Basharat).

This repository contains the complete production-grade website redesign, post-discovery pitch deck, KPI financial modeling, and branded reviews search engine built to convert East Bay parents and grapplers into active members.

---

## 2. Live Route Map & Entrypoints

| Route | Live URL | Concept / Surface | Key Focus |
| :--- | :--- | :--- | :--- |
| `/` | [`index.html`](https://rl22.github.io/united-wrestling-club/) | **Executive Pitch Deck** | Post-discovery PAS diagnostic, KPI growth model, and 3-concept preview |
| `/v01/` | [`v01/index.html`](https://rl22.github.io/united-wrestling-club/v01/) | **Concept 01: Clean Baseline** | High-energy tournament grit, lightened 1080p video, 4-stat authority banner |
| `/v04/` | [`v04/index.html`](https://rl22.github.io/united-wrestling-club/v04/) | **Concept 02: Olympic Sanctuary** | ⭐ **Recommended Flagship** — Sleek dark surfaces, open video window, pill nav |
| `/v03/` | [`v03/index.html`](https://rl22.github.io/united-wrestling-club/v03/) | **Concept 03: Conversion Engine** | Editorial typography, official Google 5.0 badge, balanced card geometry |
| `/reviews/` | [`reviews/index.html`](https://rl22.github.io/united-wrestling-club/reviews/) | **Branded Reviews Hub** | High-intent SEO capture, filter tabs, auto-clipboard Google Maps review flow |
| `/submit-review/` | [`submit-review/index.html`](https://rl22.github.io/united-wrestling-club/submit-review/) | **Legacy Review Redirect** | Instant 0-second redirect to `/reviews/` |

---

## 3. Core Facility & Commercial Invariants

* **Physical Mat Footprint:** **3,000 sq ft** of seamless Dollamur competition mats.
* **Hygiene Standard:** Mopped twice daily (`2x/day`) with hospital-grade antimicrobial solutions.
* **Coaching Ratio:** Strict **1:6 coach-to-athlete ratio** for dedicated technique correction.
* **Public Membership Pricing:**
  - **\$15 3-Day Mat Pass:** 3 consecutive practices, equipment fitting, and 1-on-1 assessment.
  - **\$139.99/month Unlimited:** Month-to-month, zero contracts, zero cancellation fees.
  - **\$15 Single Drop-In:** 1 practice session or Saturday Bay Area Open Mat (10:00 AM – 12:30 PM).

---

## 4. Architectural Decision Records (ADRs)

Key business and architectural invariants are tracked in [`discovery/decisions/`](discovery/decisions/INDEX.md) (also accessible via `docs/adr/`):
- [**ADR-20261102-concept-consolidation**](discovery/decisions/ADR-20261102-concept-consolidation-and-v04-flagship.md): Consolidated 4 exploratory versions into 3 production concepts, promoting V04 to Flagship.
- [**ADR-20261102-facility-coaching-invariants**](discovery/decisions/ADR-20261102-facility-and-coaching-invariants.md): Enforces 3,000 sq ft mat size, 1:6 ratio, 2x/day sanitization, and verified 6-coach staff bench.
- [**ADR-20261102-branded-reviews-engine**](discovery/decisions/ADR-20261102-branded-reviews-and-submission-engine.md): Dedicated branded reviews hub, Place ID `ChIJsQd_yMaVj4ARrXw93nb4euo` dispatch, and clipboard auto-copy.
- [**ADR-20261102-commercial-pricing-pif**](discovery/decisions/ADR-20261102-commercial-pricing-and-pif-promotions.md): Month-to-month core pricing and pre-slow-season Paid-In-Full (PIF) loyalty promotions.

---

## 5. Repository Structure

```text
.
├── index.html               # Executive Pitch Deck & Concept Directory (PAS + KPIs)
├── v01/                     # Concept 01: The Clean Baseline
├── v04/                     # Concept 02: The Olympic Sanctuary (Recommended Flagship)
├── v03/                     # Concept 03: The Conversion Engine
├── reviews/                 # Branded Reviews SEO & Submission Engine
├── submit-review/           # 0-second redirect to reviews/
├── discovery/               # Client research, audits, competitive profiling & ADRs
│   ├── decisions/           # Architectural Decision Records (ADRs)
│   ├── analogous_brands/    # Darc Sport, Gymshark, Rudis brand analysis
│   └── todos.md             # Detailed discovery & campaign backlog
├── docs/                    # Documentation symlinks (docs/adr -> discovery/decisions)
├── live_site_content/       # Assets from original live site
├── video_assets/            # 1080p takedown loops, poster stills, extracted frames
├── PRODUCT.md               # Product context & positioning specifications
├── DESIGN.md                # Stitch design system tokens & typography rules
└── todos.md                 # Ranked implementation & launch backlog
```

---

## 6. Verification & Quality Gates

Run these commands to verify syntax, DOM integrity, and responsive rendering:

```bash
# 1. Strict HTML5 DOM Validation (zero unclosed tags)
python3 -c "
from html.parser import HTMLParser
import sys
for fpath in ['index.html', 'v01/index.html', 'v04/index.html', 'v03/index.html', 'reviews/index.html']:
    class P(HTMLParser):
        def __init__(self): super().__init__(); self.s = []
        def handle_starttag(self, t, a): 
            if t not in {'area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr'}: self.s.append(t)
        def handle_endtag(self, t): 
            if t not in {'area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr'} and self.s and self.s[-1] == t: self.s.pop()
    p = P(); p.feed(open(fpath).read())
    print(f'{fpath}: OK (unclosed: {len(p.s)})')
"

# 2. Check Git Cleanliness
git status --porcelain
```
