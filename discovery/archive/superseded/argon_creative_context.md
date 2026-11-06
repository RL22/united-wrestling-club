---
status: superseded
group: archive
---

# United Wrestling Club: Creative Freedom Redesign Brief

> **Status: Superseded.** Written for an earlier homepage concept. The production site is the Astro build (`decisions/ADR-20261106-astro-design-system.md`). Kept as design history. Do not implement from it.

> **Target:** Homepage Redesign (`/`)  
> **Brand:** United Wrestling Club (Hayward, CA)  
> **Philosophy:** High-craft, mobile-first, uncompromising athletic authenticity.  
> **Creative Mode:** Open-ended creative freedom via `/impeccable`. Do not be constrained by generic SaaS or gym landing page templates. Explore bold visual pacing, editorial typography, atmospheric textures, and distinctive mobile-first interaction patterns.

---

## 1. The Soul of the Gym (The Unfair Moat)
United Wrestling Club isn't a suburban fitness studio or a strip-mall McDojo. It is one of the few authentic Olympic wrestling rooms in North America:
- **Olympic Pedigree:** Founded by **Karim Zemaryalai**, 1980 Moscow Olympian and Dagestani international tournament medalist (Ali Aliyev Memorial).
- **Collegiate Science:** Led by Head Coach **Naweed Zemaryalai**, holding a B.S. in Kinesiology from San Francisco State University and coaching collegiate wrestling at Chabot College.
- **Sanctioning:** USA Wrestling Regional Training Center (RTC) #513 Sanctioned Club.
- **Community Reality:** 45+ youth athletes (ages 5–13), high school varsity competitors (CIF state contenders), and adult grapplers (BJJ practitioners cross-training takedowns) sweating together on 3,000 sq ft of seamless Dollamur mats in Hayward, California.
- **Tone:** Disciplined, heavyweight, gritty, elite, welcoming, family-rooted, zero ego.

---

## 2. Raw Media Assets Library (Deployed & Available at Root)

### Video & Motion
- **Hero Loop:** `video_assets/loops/loop_homepage_hero_18s.mp4` (1080p, 18s seamless takedown loop)
- **Fallback Poster:** `video_assets/stills_selected/still_06_dummy_takedown_drill.jpg`
- **Program Loops:**
  - Youth: `video_assets/loops/loop_youth_academy_22s.mp4`
  - Varsity: `video_assets/loops/loop_varsity_highschool_26s.mp4`
  - Adult Wrestle-Jitsu: `video_assets/loops/loop_adult_wrestlejitsu_22s.mp4`

### Authentic Photography & Textures
- **Official Brand Mark:** `live_site_content/assets/logo.png` (High-res crimson/black crest)
- **Mat Room Atmosphere:** `unsplash-grunge-001.jpg` (Tactile grit overlay)
- **Coach Naweed Portrait:** `video_assets/stills_selected/still_05_coach_naweed_profile.jpg`
- **Youth Takedown Drill:** `video_assets/stills_selected/still_07_youth_single_elevation.jpg`
- **Varsity Scholastic Stance:** `video_assets/stills_selected/still_03_varsity_stance_focus.jpg`
- **Adult Collar-Tie & Hand-Fighting:** `video_assets/stills_selected/still_16_naweed_adult_collar_tie.jpg`
- **Olympic Clock & RTC Flag:** `video_assets/stills_selected/still_01_olympic_flag.jpg`
- **Airborne Lateral Drop:** `video_assets/stills_selected/still_14_airborne_lateral_drop.jpg`
- **Mural & Mat Lines:** `video_assets/stills_selected/still_10_stance_mural_lines.jpg`
- **45-Person Team Celebration:** `video_assets/stills_selected/still_20_champions_family_outro.jpg`
- **Extracted Font Awesome SVGs:** `discovery/archive/snapshots/live_site_icons.json`

---

## 3. Core Business Objectives & Offers
You have total freedom in how you present, frame, and choreograph these, but they must be clear and actionable:

1. **The Offers:**
   - **$15 3-Day Mat Pass:** The primary low-friction hook. 3 consecutive practices in any program, gear fitting, 1-on-1 coach technique assessment.
   - **$139.99/mo Unlimited Membership:** Radical transparency. Zero initiation fees, zero contracts, includes Saturday open mats and 15% family discount.
   - **$15 Single Mat Drop-In:** For visiting competitors and open mat grapplers.

2. **Lead Intake Hook:**
   - 1-click frictionless intake modal (athlete name, parent name, mobile number, program choice) routing to WrestlingIQ (Team #513).

3. **Direct Contact:**
   - Direct line: `(510) 303-4869` (call or text).
   - Address: `30139 Industrial Pkwy SW Ste C, Hayward, CA 94544`.

4. **SEO & Trust Footprint:**
   - Schema.org `SportsClub` JSON-LD markup.
   - Local East Bay catchment: Hayward, Union City, Fremont, Newark, Castro Valley, San Leandro.
   - Social proof: 42+ 5.0★ Google reviews from verified parents and athletes.

---

## 4. Creative Directives & Areas of Freedom

- **Visual Tone & Atmosphere:** Feel free to lean into high-contrast dark mode, brutalist athletic energy, editorial magazine layouts, cinematic documentary framing, or unexpected typographic hierarchy.
- **Hero Staging:** You decide how to command attention above the fold on mobile and desktop. Showcase the takedown video, celebrate the Olympic founder, or lead with raw mat tension. Keep the athletic action visible and impactful on mobile.
- **Section Rhythm & Storytelling:** Do not feel obligated to follow a standard card grid. Consider interactive tabs, split screens, editorial sidebars, ticker ribbons, full-bleed photo breaks, or dynamic comparison bands.
- **Micro-Interactions & Feel:** Explore subtle hover states, smooth transitions, ticker movement, accordion ergonomics, or tactile button feedback that feels like physical combat gear.
- **Mobile-First Standard:** 375px and 390px iPhone screens must look stunning, intentional, and balanced—no accidental horizontal scroll, no awkward line-wraps on badges, and plenty of breathing room.
