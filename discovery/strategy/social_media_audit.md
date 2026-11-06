---
type: audit
status: current
group: strategy
owner: "Rodney Lewis (Sprintz)"
date: 2026-11-06
last_reviewed: 2026-11-06
sources: ["https://www.facebook.com/p/United-Wrestling-Club-61574715497725/", "https://www.instagram.com/uwc_wrestling", "discovery/archive/snapshots/live_site_content/assets/facebook", "discovery/archive/snapshots/live_site_content/about.md", "discovery/archive/snapshots/live_site_content/classes/adult-wrestling.md", "discovery/archive/snapshots/live_site_content/assets/facebook/avatar_uwc.jpg", "discovery/archive/snapshots/live_site_content/assets/facebook/fb_photo_01.jpg", "discovery/archive/snapshots/live_site_content/assets/facebook/fb_photo_09.jpg", "https://www.tiktok.com/@uwc_wrestling", "https://www.youtube.com/@UnitedWrestlingClub"]
---

# United Wrestling Club: Social Media Audit & Facebook Intel

> **Official Facebook Page:** [facebook.com/p/United-Wrestling-Club-61574715497725/](https://www.facebook.com/p/United-Wrestling-Club-61574715497725/)  
> **Official Instagram:** [@uwc_wrestling](https://www.instagram.com/uwc_wrestling)  
> **Audit Date:** October 2026  
> **Asset Vault:** [`discovery/archive/snapshots/live_site_content/assets/facebook/`](../archive/snapshots/live_site_content/assets/facebook)

---

## TL;DR
- Critical NAP mismatch: Facebook lists a retired phone number while the website and Google Business Profile list (510) 303-4869; the master number needs Naweed's decision.
- The club email is consistent across web and socials: unitedwrestlingclub@gmail.com.
- Facebook shows 2024 Olympic clinic footage and a knee-tap tutorial, while the website has only a text-only silver medal mention.
- The Facebook page has 104 followers and 2 following, an early-stage presence with high organic engagement on technical reels.
- Rebuild actions are to link the footer to Facebook, Instagram, TikTok, and YouTube, and add a lazy-loaded video wall to the homepage.

## 1. Executive Summary & Critical Findings

| Metric / Dimension | Facebook Page Reality | Website / GBP Reality | Strategy / Rebuild Impact |
| :--- | :--- | :--- | :--- |
| **Phone Number (NAP)** | **`[retired number]`** | **`(510) 303-4869`** | **CRITICAL NAP MISMATCH:** Inconsistent phone numbers between Meta and Google dilutes Map Pack ranking trust. Must unify to primary line. |
| **Followers / Reach** | 104 followers • 2 following | N/A | Early-stage social presence with high organic engagement on technical wrestling reels. |
| **Category** | Sports team | Martial Arts School / Wrestling Club | Align schema across platforms to `SportsClub` / `ExerciseGym`. |
| **Address** | 30139 Industrial PKWY unit C, Hayward, CA 94544 | 30139 Industrial Pkwy SW Ste C, Hayward, CA 94544 | Matches physical location; standardize unit formatting (`Ste C`). |
| **Email** | `unitedwrestlingclub@gmail.com` | `unitedwrestlingclub@gmail.com` | 100% consistent across web and socials. |
| **Olympic Social Proof** | Features 2024 Olympic Champion & Olympian clips | Text-only Silver medal mention | **Massive conversion unlock:** Move Facebook video proof to website above the fold. |

---

## 2. Elite Athlete Proof Points Extracted

### 1. 2024 Olympic Champion Magomed Ramazanov & Ermak Kardanov Clinic
* **Post Excerpt:** *"That clinic in Fresno hit different. 🦅 Magomed Ramazanov & Ermak Kardanov — elite instruction, live reps, and the kind of energy you don’t forget."*
* **Context:**
  * Tagged with **George Moreno** at Fresno, California; audio track *"Dagestan · Suleymanov"*.
  * **Magomed Ramazanov** is the **2024 Paris Olympic Gold Medalist** in Men's Freestyle 86kg (Dagestani-born wrestler competing for Bulgaria).
  * **Ermak Kardanov** is an international freestyle wrestling medalist.
* **Website Placement:** Feature this clinic photography and footage on [`/about`](../archive/snapshots/live_site_content/about.md) and [`/classes/adult-wrestling`](../archive/snapshots/live_site_content/classes/adult-wrestling.md) under an *"Elite International Guest Clinicians"* section.

### 2. "This is What It Looks Like to Train with an Olympian"
* **Post Excerpt:** *"This is what it actually looks like to train with an Olympian. …"* (Audio track: *"Dabke · DJ Rony"*).
* **Context:** Features Founder Karim Zemaryalai conducting intense matside drill work with high school and adult wrestlers.
* **Website Placement:** Directly addresses the trust barrier for adult beginners and serious scholastic competitors. Embed this clip or extract still stills into the homepage social proof section.

### 3. Technical Mastery ("The Knee Tap — Mastered at Every Level")
* **Post Excerpt:** *"🦵 The Knee Tap — Mastered at Every Level.…"* (30-second technical tutorial reel).
* **Context:** Demonstrates UWC's instructional precision on fundamental wrestling mechanics, differentiating UWC from recreational martial arts studios.

---

## 3. Preserved Asset Vault

All 10 media assets from the Facebook page have been downloaded and permanently archived in [`discovery/archive/snapshots/live_site_content/assets/facebook/`](../archive/snapshots/live_site_content/assets/facebook):

1. **[`avatar_uwc.jpg`](../archive/snapshots/live_site_content/assets/facebook/avatar_uwc.jpg)** (`720x960`): High-resolution official profile portrait.
2. **[`fb_photo_01.jpg`](../archive/snapshots/live_site_content/assets/facebook/fb_photo_01.jpg)** – **[`fb_photo_09.jpg`](../archive/snapshots/live_site_content/assets/facebook/fb_photo_09.jpg)**: Gallery photos of live mat training, junior athletes, and tournament action.

---

## 4. Rebuild Action Items

1. **Unify NAP Phone Number:** Ask Naweed whether `(510) 303-4869` or `[retired number]` should be the master number across Google Business Profile, Facebook, Yelp, and the new website header/footer.
2. **Wire Up Social Linkage in Footer:** Ensure the new Next.js site links directly to:
   * Facebook: `https://www.facebook.com/p/United-Wrestling-Club-61574715497725/`
   * Instagram: `https://www.instagram.com/uwc_wrestling`
   * TikTok: `https://www.tiktok.com/@uwc_wrestling`
   * YouTube: `https://www.youtube.com/@UnitedWrestlingClub`
3. **Embed Dynamic Reels Widget / Video Wall:** Add a lightweight, lazy-loaded CSS video carousel on the homepage showcasing UWC's instructional technique reels (Knee Tap, Olympian clinic footage) without degrading PageSpeed scores.
