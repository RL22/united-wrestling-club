---
type: audit
status: archived
group: archive
owner: Rodney Lewis (Sprintz)
date: 2026-10-30
last_reviewed: 2026-10-30
sources: []
---

# Live Site Global Navigation, Footer & Shared Config (`shared_710.js`)

> **Extracted From:** `https://www.unitedwrestlingclub.com/_next/static/chunks/710-a17341216a21773c.js`  
> **Date Extracted:** October 30, 2026  

---

## 1. Global SEO / Meta Defaults
- **Default Title:** `United Wrestling Club`
- **Default Logo / OG Image:** `/logo.png` (`https://www.unitedwrestlingclub.com/logo.png`)
- **Canonical Base URL:** `https://www.unitedwrestlingclub.com`
- **Hero Video Asset:** `/UWC.mp4` (`17.72 MB` MP4 hosted on S3/CloudFront — major LCP bottleneck)
- **Hero Fallback Poster:** `/uwc_place.webp` (`124 KB`)

---

## 2. Header Navigation (`nav`)
- **Logo:** `/logo.png` (links to `/`)
- **Top-Level Links:**
  1. `Home` → `/`
  2. `About` → `/about`
  3. `Classes` (Dropdown Menu):
     - `Kids (Pre k - 5th)` → `/classes/kid-wrestling`
     - `Competition Youth (Pre K - 12th)` → `/classes/youth-wrestling`
     - `ADULT / COLLEGE / HIGHSCHOOL` → `/classes/adult-wrestling`
     - `BJJ` → `https://www.wrestlingiq.com/users/sign_up?paid_session_id=9536&show_registration=true&team_id=513` *(Note: Inconsistent UX — links directly to external checkout instead of a class page)*
     - `Boxing (9th - ADULT)` → `/classes/boxing-fundamentals`
     - `Gi Jiu Jitsu (9th - ADULT)` → `/classes/gi-jiu-jitsu`
     - `NoGi Jiu Jitsu (9th - ADULT)` → `/classes/nogi-jiu-jitsu`
     - `Open Mat (9th - ADULT)` → `/classes/open-mat`
     - `Sambo (9th - ADULT)` → `/classes/sambo`
  4. `Pricing` → `/pricing`
  5. `Schedule` → `/schedule`
  6. `Events` → `/events`
  7. `Shop` → `https://shop.unitedwrestlingclub.com/` (`target="_blank"` — currently offline/unconfigured)
  8. `Instagram` → `https://instagram.com/uwc_wrestling?igshid=YmMyMTA2M2Y=`
- **Primary Header CTA Button:** `Register Now` → `/pricing`

---

## 3. Footer Navigation & Contact Info
- **Column 1:** `Home` (`/`), `About` (`/about`), `Pricing` (`/pricing`)
- **Column 2:** `Schedule` (`/schedule`), `Events` (`/events`), `Shop` (`https://shop.unitedwrestlingclub.com/`)
- **Column 3:** `Contact` (`/contact`), `FAQs` (`/faqs`), `Rules` (`/rules`)
- **Direct Contact Links:**
  - **Phone:** `tel:510-303-4869`
  - **Email:** `mailto:unitedwrestlingclub@gmail.com` (`unitedwrestlingclub@gmail.com`)
- **Social Links:**
  - **Instagram:** `https://instagram.com/uwc_wrestling`
  - **YouTube:** `https://www.youtube.com/@UnitedWrestlingClub`
  - **Facebook:** `https://www.facebook.com/p/United-Wrestling-Club-61574715497725/`
  - **TikTok:** `https://www.tiktok.com/@uwc_wrestling?is_from_webapp=1&sender_device=pc`
- **Footer CTA Button:** `Register Now` → `/pricing`
