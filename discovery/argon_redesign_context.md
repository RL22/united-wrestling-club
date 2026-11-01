# United Wrestling Club: Mandatory Homepage Redesign Context Brief

> **Target Surface:** Production Homepage (`index.html` & `discovery/homepage_redesign.html`)  
> **Live Benchmark:** https://rl22.github.io/united-wrestling-club/  
> **Active Git Branch:** `argon-homepage-redesign`  
> **Skill Standard:** `/impeccable` (`~/.agents/skills/imp-impeccable/SKILL.md`)  
> **Baseline Standard:** Mobile-first responsive design (375px/390px iPhone baseline with zero horizontal scroll, zero card orphans, zero pill line-breaks, and open-center hero clearance).

---

## 1. Product Identity & Core Pedigree
- **Entity:** United Wrestling Club (UWC)
- **Facility Address:** 30139 Industrial Pkwy SW Ste C, Hayward, CA 94544
- **Mat Room Line (Direct):** (510) 303-4869
- **Sanctioning:** USA Wrestling Regional Training Center (RTC) #513 Sanctioned Club
- **Olympic Founder:** Karim Zemaryalai (1980 Moscow Olympian, Dagestan Ali Aliyev International Tournament Medalist)
- **Head Coach & Director:** Naweed Zemaryalai (B.S. Kinesiology from San Francisco State University, Chabot College Wrestling Coach)
- **Motto / Core Pillars:** EXCELLENCE • DISCIPLINE • CHAMPIONS
- **Service Footprint:** Hayward, Union City, Fremont, Newark, Castro Valley, San Leandro

---

## 2. Mandatory Media & Asset Paths (Root & Relative)
All media assets are deployed at repo root for GitHub Pages compatibility:

| Asset Type | Root Path / Filename | Purpose & Context |
| :--- | :--- | :--- |
| **Hero Video Loop** | `video_assets/loops/loop_homepage_hero_18s.mp4` | 3.1MB 1080p 18s seamless loop of takedown drills |
| **Hero Fallback Poster** | `video_assets/stills_selected/still_06_dummy_takedown_drill.jpg` | High-res still for mobile / low-power video fallback |
| **Official Crest Logo** | `live_site_content/assets/logo.png` | Official high-res UWC crimson emblem mark |
| **Atmospheric Texture** | `unsplash-grunge-001.jpg` | Authentic mat-room grunge overlay (`mix-blend-mode: overlay`) |
| **Program Still 1 (Youth)** | `video_assets/stills_selected/still_07_youth_single_elevation.jpg` | Youth single-leg elevation takedown drill |
| **Program Still 2 (Varsity)** | `video_assets/stills_selected/still_03_varsity_stance_focus.jpg` | High school scholastic wrestler stance & hand-fight |
| **Program Still 3 (Adult)** | `video_assets/stills_selected/still_16_naweed_adult_collar_tie.jpg` | Coach Naweed collar-tie takedown for adult BJJ / Wrestle-Jitsu |
| **Program Still 4 (Open Mat)**| `video_assets/stills_selected/still_01_olympic_flag.jpg` | USA Wrestling RTC clock and Olympic banner |
| **Coach Portrait** | `video_assets/stills_selected/still_05_coach_naweed_profile.jpg` | Head Coach Naweed Zemaryalai mat-side profile |
| **Team Proof Still** | `video_assets/stills_selected/still_20_champions_family_outro.jpg` | 45+ youth & varsity champions smiling under gym mural |
| **Raw Live SVGs** | `discovery/live_site_icons.json` | Extracted Font Awesome icons (`FaMedal`, `FaTrophy`, etc.) |

---

## 3. Mandatory Information Architecture (9 Sections)

1. **Infinite Sanctioning Marquee (`.top-bar`):**
   - 60fps GPU-accelerated continuous scroll to the left.
   - Content: `USA WRESTLING RTC #513 SANCTIONED` • `HAYWARD, CA • 30139 INDUSTRIAL PKWY SW` • `MAT HOURS: MON–FRI 4:30 PM` • `SATURDAY OPEN MAT: 10:00 AM` • Interactive tap-to-call badge `CALL / TEXT: (510) 303-4869` • `TRIAL PASS: 3 DAYS ONLY $15`.
   - UX Requirement: Touch/hover auto-pause so mobile users can tap the phone number effortlessly.

2. **Sticky Brand Header (`.site-nav`):**
   - Official crest emblem (`logo.png`).
   - Desktop: Nav links (`#programs`, `#lineage`, `#facility`, `#pricing`, `#faq`), direct phone link, primary CTA button (`Claim $15 3-Day Pass`).
   - Mobile: Clean, spacious bar with emblem mark + primary CTA button (`Claim $15 Pass`). Hidden redundant phone button to prevent header overcrowding.

3. **High-Impact Hero Section (`.hero-section`):**
   - Desktop: Video loop background with softened grunge texture, bold authority heading (`EXCELLENCE. DISCIPLINE. CHAMPIONS.`), founder pedigree subtitle, single primary CTA button (`Claim Your $15 3-Day Pass`), and 4-stat authority proof grid (`1980 MOSCOW Olympian`, `1:6 RATIO Coach Focus`, `3,000 SQ FT Dollamur Mats`, `5.0 ★ GOOGLE 42+ Reviews`).
   - Mobile: **Open-center layout standard!** Hero pill (`FOUNDED BY 1980 OLYMPIAN • HAYWARD, CA`) pushed ~60px from top-left. H1, subtitle, and primary CTA dropped ~60px to the bottom. Center ~350px window kept clear with a transparent gradient scrim (`rgba(9, 10, 13, 0.02)` at 45%) so background video takedowns are clearly visible.

4. **Mobile Proof Band (`.mobile-proof-band`):**
   - On screens $\le$ 768px, the 4-stat proof grid renders directly below the hero fold in a balanced 2x2 grid.

5. **Program Feeder Grid (`#programs`):**
   - 4 balanced cards: Youth Academy (Ages 5–13), Varsity & Scholastic Prep (Ages 14–18), Adult Wrestling & Wrestle-Jitsu (Ages 18+), Saturday Open Mat (All Levels).
   - Zero orphans on all viewports (4 columns on desktop, 2x2 on tablet, 1 column on mobile).
   - High-contrast visual cards with curated still photos, badges, age brackets, and bulleted curriculum.

6. **Coaching Moat & Lineage (`#lineage`):**
   - Olympic pedigree deep dive: Karim Zemaryalai (1980 Moscow Olympian, Ali Aliyev Dagestan medalist) and Naweed Zemaryalai (SFSU Kinesiology, Chabot College Coach).
   - Authentic coaching photography with floating Olympic lineage badge.

7. **Facility & Safety Pillars (`#facility`):**
   - 4 numbered trust cards:
     1. Hospital-Grade Disinfection (2x daily antimicrobial sanitization protocol).
     2. 3,000 sq ft Seamless Foam (2-inch Dollamur shock absorption).
     3. 1:6 Coach-to-Student Ratio (strict technique supervision).
     4. Dedicated Parent Lounge (high-speed Wi-Fi & unobstructed mat sightlines).

8. **Radical Pricing Transparency (`#pricing`):**
   - 3 clear tiers:
     - **3-Day Mat Pass:** \$15.00 (3 consecutive sessions, gear fitting, coach assessment).
     - **Monthly Unlimited (Featured):** \$139.99/mo (zero initiation fees, zero contracts, includes Saturday open mats and 15% sibling discount).
     - **Single Mat Drop-In:** \$15.00 (visiting wrestlers and open mat guests).

9. **Community Proof & Local Reviews (`#reviews`):**
   - Full-width team celebration photo (`still_20_champions_family_outro.jpg`).
   - 3 geo-verified reviews from Hayward parents, Fremont adult BJJ cross-trainers, and Union City high school families.

10. **Interactive FAQ & Local Schema (`#faq`):**
    - Accordion addressing age readiness (age 5+), trial gear needs (t-shirt + gym shorts), cancellation policy (cancel anytime), and East Bay service area.
    - Embedded Schema.org `SportsClub` JSON-LD markup with geo coordinates, telephone, hours, and pricing.

11. **Native 1-Click Trial Intake Modal:**
    - Low-friction modal capturing athlete name, parent name, mobile number, and target program.
    - Direct hook for WrestlingIQ intake (Team #513).

---

## 4. Design Tokens & Styling Constraints (from `DESIGN.md`)
- **Primary Accent:** `#902524` (Crimson)
- **Accent Glow:** `rgba(186, 28, 28, 0.55)`
- **Canvas Base:** `#060709` / `#090A0D`
- **Surface Elevation:** `#11131a`
- **Border Subtle:** `rgba(255, 255, 255, 0.08)`
- **Typography:** `Montserrat`, sans-serif (Weights: 400, 600, 700, 800, 900)
- **Monospace Accent:** `ui-monospace`, `SFMono-Regular`, monospace (for stats & phone)
- **Pill Badges:** Strict `white-space: nowrap !important;` with responsive clamped font sizes.
- **Root Assets:** Must maintain `.nojekyll` and root paths so GitHub Pages renders flawlessly.
