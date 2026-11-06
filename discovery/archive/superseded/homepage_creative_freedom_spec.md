---
status: superseded
group: archive
---

# United Wrestling Club: Creative Freedom Redesign ("The Olympic Mat Sanctuary")

> **Status: Superseded.** Written for an earlier homepage concept. The production site is the Astro build (`decisions/ADR-20261106-astro-design-system.md`). Kept as design history. Do not implement from it.

> **Role:** Creative Director & Lead Frontend Architect  
> **Brand:** United Wrestling Club (Hayward, CA)  
> **Design Thesis:** "The Industrial Mat Sanctuary & Athletic Field Journal"  
> **Target Files:** `index.html`, `discovery/archive/superseded/homepage_creative_freedom.html`  
> **Screenshots:**  
> - Desktop Master: `discovery/brand/moodboards/screenshots/homepage_creative_freedom.png`  
> - Full Length: `discovery/brand/moodboards/screenshots/homepage_creative_freedom_full.png`  
> - Mobile 390px Viewport: `discovery/brand/moodboards/screenshots/homepage_creative_freedom_mobile_390.png`  
> - Mobile 375px Viewport: `discovery/brand/moodboards/screenshots/homepage_creative_freedom_mobile_375.png`  

---

## 1. Creative Thesis & Core Differentiators

Most martial arts and combat gym websites fall into two predictable clichés:
1. **The 2012 Suburban Dojo:** Cheesy fire gradients, aggressive cartoon graphics, hidden pricing, and multi-step registration friction.
2. **The Sterile SaaS/CrossFit Clone:** White cards with identical rounded corners, light grey text, centered headings, and vague fitness stock photography.

United Wrestling Club is fundamentally neither. It is Northern California's authentic Olympic wrestling room, nestled inside an industrial flex-park on Industrial Parkway in Hayward, California:
- **Olympic Pedigree:** Founded by **Karim Zemaryalai**, 1980 Moscow Olympian and Dagestani Ali Aliyev Memorial medalist.
- **Collegiate Sports Science:** Directed by Head Coach **Naweed Zemaryalai**, holding a B.S. in Kinesiology from San Francisco State University and coaching collegiate wrestling at Chabot College.
- **Physical Reality:** 3,000 sq ft of seamless Dollamur mats, USA Wrestling RTC #513 sanctioning, 45+ youth, varsity, and adult grapplers training side-by-side with zero ego.

### The Aesthetic Synthesis:
- **Athletic Poster Display:** Heavyweight, condensed display typography (`Barlow Condensed` Black 900) evokes vintage Olympic stadium posters, collegiate tournament brackets, and collegiate field journals.
- **Tactile Materiality:** Deep obsidian canvas (`#090B0E`), industrial cast slate (`#11141A`), arterial bloodline red (`#BA1C1C`), authentic USA Wrestling Olympic blue (`#1D4ED8`), and archival medal brass (`#C5A059`) layered with an authentic Dollamur mat vinyl texture overlay.
- **Tactical Telemetry:** Live facility status, exact geographic coordinates (`37.6033° N, 122.0538° W`), RTC sanctioning tags, and high-visibility coach-to-athlete ratios.

---

## 2. Key Architectural Features

### 1. Live Status & Telemetry Marquee
- Continuous smooth ticker bar at the very top of the page.
- Displays live club status, direct phone dial (`(510) 303-4869`), USA Wrestling RTC #513 badge, and Olympic lineage.
- Interactive: pauses on hover/touch and provides effortless 1-tap phone dialing on mobile.

### 2. "The Crucible" Hero Section
- **1080p Cinematic Background Loop:** Real UWC athletes drilling double legs, hand-fighting, and mat control (`loop_homepage_hero_18s.mp4`), with optimized poster fallback (`still_06_dummy_takedown_drill.jpg`).
- **Mobile-First Video Clearance:** 375px and 390px viewports maintain generous vertical spacing so the central athletic takedown motion is never masked by heavy UI containers.
- **Conversion Lockup:** High-contrast `$15 3-Day Mat Pass` primary CTA button with active ambient glow, companion pricing pill, and direct mat room phone link.
- **4-Metric Telemetry Strip:**
  - `1980 MOSCOW` — Olympic & Dagestan Lineage
  - `1:6 RATIO` — Coach-to-Athlete Focus
  - `3,000 SQ FT` — Dollamur Seamless Mats
  - `5.0 ★ GOOGLE` — 42+ Verified Parent Reviews

### 3. Asymmetric Lineage & Sports Science Dossier
- Side-by-side architectural profiles for **Karim Zemaryalai** (1980 Moscow Olympian) and **Naweed Zemaryalai** (SFSU Kinesiology & Chabot College Coach).
- Authentic portrait assets (`founder.jpg`, `coach_naweed_profile.jpg`), archival credential lists, and vintage Olympic badge stamps.

### 4. Interactive Live Schedule Explorer
- Interactive tabbed schedule switcher (`Monday` through `Saturday`).
- Directly pulls verified class data from `schedule.json`, allowing parents and grapplers to inspect exact times (e.g. Kids 6:30 PM, Varsity 5:00 PM, Adults 7:30 PM, Saturday Open Mat 10:00 AM) with zero page reloads.

### 5. Structured Program Silos (The 4 Discipline Decks)
- 1. **Youth Academy (Ages 5–13)**: Spatial agility, character, anti-bullying confidence.
- 2. **Varsity & Scholastic Prep (Ages 14–18)**: CIF state qualification, chained takedowns, collegiate recruitment.
- 3. **Adult Wrestle-Jitsu (Ages 18+)**: Takedown mastery, cage control, underhooks for BJJ & MMA, zero ego.
- 4. **Saturday Open Mat (All Levels)**: 2.5-hour Northern California community open sparring.

### 6. Hospital-Grade Mat Safety Standard
- 4-pillar parent assurance grid: Daily EPA-registered Virucidal mat sterilization, strictly enforced 1:6 coach ratio, collegiate kinesiology injury prevention, and zero tolerance for bullying or reckless egos.

### 7. Radical Pricing Transparency
- **$15 3-Day Mat Pass:** Featured low-friction entry pass with 3 practices, coach assessment, and gear fitting.
- **$139.99/mo Unlimited Membership:** Flat monthly membership with zero initiation fees, zero contracts, Saturday Open Mat included, and 15% family discount.
- **$15 Single Mat Drop-In:** For visiting competitors and open mat grapplers.

### 8. Real Community Proof & Roster Portrait
- High-impact wide banner featuring the real 45+ member team celebration (`still_20_champions_family_outro.jpg`).
- Verified reviews from Hayward, Fremont, and Union City parents and grapplers.

### 9. Frictionless 1-Click Intake Modal
- Native lightweight dialog that captures athlete name, mobile number, and program choice.
- Directly routes to WrestlingIQ Team #513 with direct calling/texting fallback to Coach Naweed.

### 10. Sticky Mobile Bottom Action Dock
- On viewports < 768px, a floating bottom action dock provides 1-tap phone dialing to Coach Naweed and immediate 1-tap booking for the $15 pass.

---

## 3. Impeccable Craft Standards Compliance

| Criterion | Implementation Status |
| :--- | :--- |
| **Typography** | `Barlow Condensed` (display), `Montserrat` (sans), `Space Grotesk` (mono/telemetry). Zero font clashing, clamp-based fluid scales. |
| **Responsive Standards** | Verified at 375px (iPhone SE/mini), 390px (iPhone 14/15/16), 768px (iPad), and 1440px (Desktop Wide). Zero horizontal scroll. |
| **Color Contrast** | WCAG AA/AAA compliant text contrast (`#F4F1EA` against `#090B0E` and `#11141A`). |
| **Micro-Interactions** | Gleam animation on primary CTAs, touch-pause marquee, smooth modal transitions, keyboard escape handling. |
| **Asset Authenticity** | 100% authentic local UWC photography, genuine 1080p hero video loop, real founder/coach photos, official crest logo. |
