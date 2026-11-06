---
type: spec
status: superseded
group: archive
owner: "Rodney Lewis (Sprintz)"
date: 2026-11-06
last_reviewed: 2026-11-06
sources: ["discovery/decisions/ADR-20261106-astro-design-system.md", "video_assets/stills_selected/still_06_dummy_takedown_drill.jpg", "live_site_content/assets/logo.png", "unsplash-grunge-001.jpg", "video_assets/stills_selected/still_07_youth_single_elevation.jpg", "video_assets/stills_selected/still_03_varsity_stance_focus.jpg", "video_assets/stills_selected/still_16_naweed_adult_collar_tie.jpg", "video_assets/stills_selected/still_01_olympic_flag.jpg", "video_assets/stills_selected/still_05_coach_naweed_profile.jpg", "video_assets/stills_selected/still_20_champions_family_outro.jpg", "discovery/archive/snapshots/live_site_icons.json"]
replaced_by: "decisions/ADR-20261106-astro-design-system.md"
---

# United Wrestling Club: Minimal Context Brief (Sol & Opus)

> **Status: Superseded.** Written for an earlier homepage concept. The production site is the Astro build (`decisions/ADR-20261106-astro-design-system.md`). Kept as design history. Do not implement from it.

> **Client:** United Wrestling Club (Hayward, CA)  
> **Location:** 30139 Industrial Pkwy SW Ste C, Hayward, CA 94544  
> **Direct Contact:** (510) 303-4869 (Call or Text)  
> **Sanctioning:** USA Wrestling Regional Training Center (RTC) #513  
> **Standard:** Mobile-first responsive design via `/impeccable`.  
> **Target:** Complete standalone production HTML homepage.

---

## 1. Brand Soul & Olympic Authority
- **1980 Moscow Olympian Karim Zemaryalai:** Founder and Ali Aliyev Dagestani International Tournament medalist. Brings authentic international wrestling pedigree to Northern California.
- **Head Coach Naweed Zemaryalai:** B.S. in Kinesiology from San Francisco State University and collegiate wrestling coach at Chabot College. Combines Olympic technique with modern sports science and biomechanics.
- **Gym Atmosphere:** Heavyweight work ethic, high coach-to-athlete focus (1:6 ratio), 3,000 sq ft seamless Dollamur mats, hospital-grade antimicrobial sanitization, zero ego, community-grounded.
- **Motto:** EXCELLENCE • DISCIPLINE • CHAMPIONS

---

## 2. Growth Offers & Pricing Strategy
- **$15 3-Day Mat Pass:** Low-barrier primary conversion hook. 3 consecutive practices in any age-appropriate class, gear fitting, and 1-on-1 technique assessment with Coach Naweed.
- **$139.99/mo Unlimited Membership (Featured):** Radical transparency. Unlimited weekly training, free Saturday open mats ($60/mo value), 15% family/sibling discount, zero initiation fees, zero contracts.
- **$15 Single Mat Drop-In:** For visiting competitors, high school wrestlers, and open mat guests.
- **1-Click Native Modal:** Captures athlete name, parent name, mobile number, and target program, routing directly to WrestlingIQ (Team #513).

---

## 3. Local SEO Catchment & Core Disciplines
- **Catchment Area:** Hayward, Union City, Fremont, Newark, Castro Valley, San Leandro.
- **Core Programs:**
  1. Youth Wrestling Academy (Ages 5–13): Anti-bullying, physical coordination, discipline, sportsmanship.
  2. Varsity & Scholastic Prep (Ages 14–18): CIF high school state qualification and collegiate recruitment prep.
  3. Adult Wrestling & Wrestle-Jitsu (Ages 18+): Elite takedown mastery for BJJ practitioners and adult beginners without egos.
  4. Saturday Open Mat: Bay Area open mat at $15 drop-in or free for members.

---

## 4. Media & Asset Paths (Relative from `/v0*/` Subdirectories)
- **1080p Hero Video Loop:** `../video_assets/loops/loop_homepage_hero_18s.mp4`
- **Fallback Poster Still:** `../video_assets/stills_selected/still_06_dummy_takedown_drill.jpg`
- **Official Crest Logo:** `../live_site_content/assets/logo.png`
- **Mat Room Texture:** `../unsplash-grunge-001.jpg`
- **Youth Drill Still:** `../video_assets/stills_selected/still_07_youth_single_elevation.jpg`
- **Varsity Stance Still:** `../video_assets/stills_selected/still_03_varsity_stance_focus.jpg`
- **Adult Collar Tie Still:** `../video_assets/stills_selected/still_16_naweed_adult_collar_tie.jpg`
- **Olympic Clock Still:** `../video_assets/stills_selected/still_01_olympic_flag.jpg`
- **Coach Naweed Portrait:** `../video_assets/stills_selected/still_05_coach_naweed_profile.jpg`
- **45+ Athlete Celebration:** `../video_assets/stills_selected/still_20_champions_family_outro.jpg`
- **Raw SVG Icons:** `../discovery/archive/snapshots/live_site_icons.json`

---

## 5. Directives & Freedom
- Mobile-first responsive design is the baseline standard (verify 375px & 390px viewports with zero horizontal scroll).
- Execute with `/impeccable` craft: committed typography, rich contrast, tactile interactions, fast performance.
- Full freedom to design the optimal homepage for UWC to maximize local SEO visibility and athlete trial conversions.
