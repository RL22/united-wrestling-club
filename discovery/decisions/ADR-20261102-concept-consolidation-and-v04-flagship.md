# ADR-20261102-concept-consolidation-and-v04-flagship: Production Concept Consolidation & V04 Flagship Selection

- **Date:** 2026-11-02
- **Status:** Approved
- **Scope:** UX / Commercial / Architecture

## Context & Problem
During the pre-pitch design sprint for United Wrestling Club (Hayward, CA), four distinct exploratory prototypes were generated (`v01/`, `v02/`, `v03/`, `v04/`). When preparing the client discovery presentation for Head Coach Naweed and Founder Karim Zemaryalai, having four concepts created presentation friction and decision paralysis. Additionally, `v02` exhibited modal routing fragmentation and styling clashes with the dark heavyweight aesthetic.

## Approved Solution
1. **Consolidate to 3 Production Concepts:**
   - **Concept 01 (`v01/`):** "The Clean Baseline" — High-contrast tournament grit with lightened 1080p hero video (brightness 0.82) and directional horizontal scrim.
   - **Concept 02 (`v04/`):** "The Olympic Sanctuary" (⭐ Recommended Flagship) — Sleek dark-surface aesthetic, open-window video clearance, refined pill desktop navigation, and balanced coaching dossier. Swapped into Concept 02 slot in place of `v02/`.
   - **Concept 03 (`v03/`):** "The Conversion Engine" — Editorial typography, official Google Business Profile rating badge, italic pull-quotes, and high-contrast conversion layout.
2. **100% Section & Information Parity:**
   Every concept contains identical confirmed factual sections:
   - Sticky Top Sanction Bar (USA Wrestling RTC #513)
   - Header with Desktop Navigation, Phone Pill `(510) 303-4869`, and `Claim $15 Pass` CTA
   - Hero Video with open-center takedown loop action and primary CTA
   - 4-Stat Authority Banner (5.0 ★ Community Trust, 1:6 Coach Ratio, 2x/Day Sanitization, 3,000 Sq Ft Mat Space)
   - Programs Matrix (Youth Academy 5–13, High School Varsity Prep 14–18, Adult Wrestle-Jitsu 18+, Saturday Open Mat)
   - EDC Creed Section ("Excellence / Discipline / Champions")
   - Coaching Staff Bench: Karim Zemaryalai (Founder/1980 Olympian), Naweed Zemaryalai (Head Coach), plus 4-coach secondary row (Rashad Rahimi, Sandeep Singh Gosal, Steve Siroy, Farid Siddiq)
   - Google Business Profile Verified Testimonials (Aijaz Patel, David Johnson, Ingoo Kwak, Robert Escórcio)
   - 3-Card Transparent Pricing: \$15 3-Day Mat Pass, \$139.99/mo Unlimited, \$15 Single Drop-In
   - Single-Open Parent Safety & FAQ Accordion
   - Physical Facility & Location Footprint (30139 Industrial Pkwy SW Ste C, Hayward, CA)
   - Pre-Footer Action Banner & Comprehensive Semantic Footer

## Alternatives Rejected
1. **Maintaining 4 Active Prototypes:** Rejected because presenting 4 options to prospects creates choice fatigue and dilutes the executive pitch.
2. **Keeping `v02/` as Concept 02:** Rejected due to modal routing fragmentation, inconsistent button heights, and weaker visual alignment with the Olympic lineage moat.

## Impacted Files
- `index.html`
- `v01/index.html`
- `v04/index.html`
- `v03/index.html`
- `discovery/executive_pitch_deck_copy.md`
