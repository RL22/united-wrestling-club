# United Wrestling Club (`unitedwrestlingclub.com`) — Master Website Rebuild & UX/Performance Specification

> **Client:** United Wrestling Club (Naweed & Karim Zemaryalai)  
> **Address:** `30139 Industrial Pkwy SW Ste C, Hayward, CA 94544` | **Phone:** `(510) 303-4869` *(Audit Note: Meta listing uses `[retired number]` — see Section 1 & Social Audit)*  
> **Strategic Goal:** Capture the **#1 Local (Hayward/Tri-City), County (Alameda), Regional (SF Bay Area), and State (California)** organic & AI search spots while increasing visitor-to-trial conversion from ~1.5% to 6–10%.  
> **Source Archive:** [`discovery/live_site_content/`](live_site_content/README.md) & [`design-extract-output/united-wrestling-club/`](../../../../design-extract-output/united-wrestling-club/unitedwrestlingclub-com-DESIGN.md)  
> **Updated:** October 30, 2026  

---

## 1. Root-Cause Diagnosis of the Current Live Site (`unitedwrestlingclub.com`)

Based on our live JS chunk extraction ([`live_site_content/`](live_site_content/README.md)) and OpenSEO technical crawl ([`local_seo_audit.md`](local_seo_audit.md)):

1. **Zero Server-Side HTML (`wordCount: 0`):** The live Next.js site wraps the entire app in a client-side loading spinner (`<div class="sc-349eebb-1 RoRHF">`) using runtime `styled-components@5.3.11`. Search engine crawlers and LLM bots receive 0 words of HTML text.
2. **17.72 MB Uncompressed Hero Video (`/UWC.mp4`):** The homepage loads a raw `17,722,787 byte` MP4 file directly from S3/CloudFront on initial paint, destroying mobile Largest Contentful Paint (LCP) and burning mobile data.
3. **1,639 Duplicate CSS Declarations:** Runtime `styled-components` injects redundant CSS rules across chunks and leaves `/classes`, `/register`, and `/donate` as completely empty shell pages ([`stubs_classes_donate_register.md`](live_site_content/stubs_classes_donate_register.md)).
4. **Schedule Grid UI & Logic Bugs ([`schedule.md`](live_site_content/schedule.md)):**
   * `7:30 PM - 9:00 PM ADULT / HIGH SCHOOL` (Mon–Thu) and `6:30 PM - 8:00 PM Boxing / No Gi Jiu Jitsu` + `8:00 PM - 9:30 PM Adult Wrestling` (Fri) duplicate across adjacent row slots (`7:30 PM` and `8:00 PM` / `9:00 PM`).
   * **4 Day Kids (`$139.99/mo`, Mon–Thu)** is sold on `/pricing`, but `/schedule` only shows `KIDS (GRADES pre-K-5th)` on **Mon & Wed (6:30–7:30 PM)**.
   * **Combat Sambo** has its own page (`/classes/sambo`), but is missing from the `/schedule` grid.
   * Clicking a class on `/schedule` has zero interactive booking action.
5. **Conflicting Trial Offers & Cold External Checkout Leaks:**
   * Homepage hero pitches a **`$15.00 for a 3 Day Trial`** (`WrestlingIQ paid_session_id=6327`), `/pricing` pitches a **`$15.00 DROP IN`** (`paid_session_id=2664`), and `/faqs` Question #5 says **"Do you offer free trial sessions? Yes we offer trial sessions..."**
   * Every button dumps cold mobile visitors onto off-domain `wrestlingiq.com/users/sign_up` forms before capturing their name or phone number.
6. **NAP Phone Number Discrepancy & Unleveraged Social Video Proof ([`social_media_audit.md`](social_media_audit.md)):**
   * Live site and Google Business Profile display `(510) 303-4869`, whereas the official Meta/Facebook profile lists `[retired number]`. Inconsistent NAP between Google and Meta dilutes Map Pack ranking signals; the rebuild must standardize on the primary business line across header, footer, and schema.
   * World-class video social proof from Facebook/Instagram reels — including clinic sessions with **2024 Paris Olympic Champion Magomed Ramazanov** & **Ermak Kardanov**, Founder **Karim Zemaryalai's** *"Train with an Olympian"* mat sessions, and high-engagement *"Knee Tap"* technical breakdown clips — is completely absent from the live website.

---

## 2. Target Architecture & Performance Stack

| Layer | Current Live Stack | Target Rebuild Stack | Performance / SEO Impact |
| :--- | :--- | :--- | :--- |
| **Framework & Rendering** | Next.js Pages Router (CSR spinner wrapper) | **Next.js App Router (100% SSG / Server Components)** or **Astro** | `100%` semantic HTML in initial response (`wordCount: 800–2,000+` per page) |
| **Styling System** | Runtime `styled-components@5.3.11` | **Tailwind CSS v4** (wired to [`unitedwrestlingclub-com-tailwind-v4.css`](../../../../design-extract-output/united-wrestling-club/unitedwrestlingclub-com-tailwind-v4.css)) | Zero runtime JS styling overhead; purges 1,639 duplicate declarations |
| **Hero Video Delivery** | `17.72 MB` `/UWC.mp4` | **2.2 MB WebM + MP4 (720p/1080p CRF 28)** + instant `<link rel="preload" as="image" href="/uwc_place.webp">` | Drops mobile LCP from `>6.5s` to `<1.4s` (Core Web Vitals 95–100) |
| **Machine Discovery** | `404` on `/robots.txt`, `/sitemap.xml`, `/llms.txt` | Static `/robots.txt`, auto-generated `/sitemap.xml`, `/llms.txt` & `/llms-full.txt` | Instant indexing across Google, Bing, ChatGPT, Perplexity & Claude |
| **Entity Disambiguation** | Zero Schema.org markup | Unified `@graph` JSON-LD (`SportsClub`, `LocalBusiness`, `Person`, `FAQPage`, `Course`) + Wikidata `Q327223` (Amateur Wrestling) | Eliminates Pro-Wrestling SERP pollution and powers Rich Snippets |

---

## 3. Visual Design System & Brand Tokens

All UI components must strictly adhere to the extracted brand tokens in [`unitedwrestlingclub-com-AGENT.md`](../../../../design-extract-output/united-wrestling-club/unitedwrestlingclub-com-AGENT.md) and the high-res crest logo ([`live_site_content/assets/uwc_crest_logo_highres.png`](live_site_content/assets/uwc_crest_logo_highres.png)):

* **Color Palette:**
  * **Primary Brand Crimson:** `#902524` (`rgba(144, 37, 36, 1)`) — CTAs, active states, accents, badges, glow borders.
  * **Canvas Background:** `#000000` (Pitch Black) & `#191919` / `#232323` (Elevated Card Surfaces).
  * **Text Hierarchy:** `#FFFFFF` (Primary Headings & Body) · `#CACACA` (Secondary/Muted Copy) · `#EFEFEF` (Crest Silver Accent).
* **Typography:**
  * **Font Family:** `Montserrat` (`weights: 400, 500, 600, 700, 800, 900`).
  * **Scale:** H1 `67.2px` (`4.2rem`, weight `900`, uppercase/tight) · H2 `28.8px–44px` (`weight 700–800`) · H3 `24px` (`weight 600`) · Body `16px` (`line-height: 1.6–1.8`).
* **Radii & Elevation:**
  * **Border Radius:** `4px` (buttons/inputs), `8px–12px` (cards), `15px` (feature containers), `30px` (pill badges).
  * **Shadows:** Crimson ambient glow `0 4px 15px rgba(144, 37, 36, 0.4)` on primary CTAs; `0 10px 30px -10px rgba(0, 0, 0, 0.3)` on cards.

---

## 4. Locked Information Architecture & Unified Sitemap (32 Routes: 17 `[EXISTING]` + 15 `[NEW]`)

### Why We Keep `/classes` Instead of Renaming to `/programs`
1. **4x–10x Higher Commercial Search Volume:** Buyer-intent queries use `"wrestling classes"` (`1,900/mo`, UWC currently `#9`) and `"bjj classes"` (`27,100/mo`) far more than `"programs"`.
2. **Zero 301 Redirect Hop Loss on Active Pages:** All 8 active class URLs in the live navbar (`/classes/kid-wrestling`, `/classes/youth-wrestling`, `/classes/adult-wrestling`, `/classes/gi-jiu-jitsu`, `/classes/nogi-jiu-jitsu`, `/classes/sambo`, `/classes/boxing-fundamentals`, `/classes/open-mat`) remain **100% unchanged (`[EXISTING]`)**.
3. **Clean Silos for Geo & Guides:** Instead of dumping keyword-stuffed pages at the root (`/*`), feeder cities live under `/locations/{city}` (`[NEW]`) and comparison/authority articles live under `/guides/{slug}` (`[NEW]`).

---

### Master ASCII Sitemap (With `[EXISTING]` vs. `[NEW]` Route Tags)

```text
United Wrestling Club (/)                                            [EXISTING - REDESIGN]
│
├── 1. Primary Header Navigation (6 Items + 1 Primary CTA Pill)
│   ├── Classes (/classes)                                           [EXISTING - POPULATE EMPTY SHELL]
│   │   ├── [Column 1: Youth & Scholastic (Ages 4–18)]
│   │   │   ├── Kids Wrestling (Pre-K–5th)   (/classes/kid-wrestling)        [EXISTING - UPGRADE]
│   │   │   └── Competition Youth & HS (K–12)(/classes/youth-wrestling)      [EXISTING - UPGRADE]
│   │   ├── [Column 2: Adult Grappling & Striking (14+ & Adults)]
│   │   │   ├── Adult Wrestling              (/classes/adult-wrestling)      [EXISTING - UPGRADE]
│   │   │   ├── No-Gi "Wrestle-Jitsu"        (/classes/nogi-jiu-jitsu)       [EXISTING - UPGRADE]
│   │   │   ├── Gi Brazilian Jiu-Jitsu       (/classes/gi-jiu-jitsu)         [EXISTING - UPGRADE]
│   │   │   ├── Combat Sambo                 (/classes/sambo)                [EXISTING - UPGRADE]
│   │   │   └── Boxing Fundamentals          (/classes/boxing-fundamentals)  [EXISTING - UPGRADE]
│   │   └── [Column 3: Seminars & Open Mat]
│   │       ├── Women's Self-Defense (Louisa, Neha's Sis, Ja Shia) (/classes/womens-self-defense) [✨ NEW]
│   │       └── Saturday Open Mat ($15)      (/classes/open-mat)             [EXISTING - UPGRADE]
│   │
│   ├── Schedule (/schedule)                                         [EXISTING - FIX 7:30/8PM BUG + FILTERS]
│   ├── Pricing (/pricing)                                           [EXISTING - ADD VALUE STACKS]
│   ├── About & Coaches (/about)                                     [EXISTING - ADD ALL 7 COACHES + SCHEMA]
│   ├── Events & Tournaments (/events)                               [EXISTING - 41 EVENTS + HOLIDAY MIXER]
│   └── [CTA Pill] Start Trial (/register)                           [EXISTING - NATIVE 1-CLICK TRIAL FUNNEL]
│
├── 2. Footer Silo A: East Bay Locations Served (/locations)         [✨ NEW HUB]
│   ├── Hayward, CA (HQ — Industrial Pkwy)   (/locations/hayward-ca)         [✨ NEW]
│   ├── Union City, CA (6 Min — Logan Feeder)(/locations/union-city-ca)      [✨ NEW]
│   ├── Fremont, CA (9 Min — Tri-City Hub)   (/locations/fremont-ca)         [✨ NEW]
│   ├── Newark, CA (11 Min — I-880 Corridor) (/locations/newark-ca)          [✨ NEW]
│   └── Castro Valley & San Leandro, CA      (/locations/castro-valley-ca)   [✨ NEW]
│
├── 3. Footer Silo B: East Bay Wrestling Guides (/guides)            [✨ NEW HUB]
│   ├── Adult Wrestling in the Bay Area      (/guides/adult-wrestling-bay-area)         [✨ NEW]
│   ├── Youth Wrestling vs. Karate (East Bay)(/guides/youth-wrestling-vs-martial-arts)  [✨ NEW]
│   ├── Takedowns for BJJ (Wrestle-Jitsu)    (/guides/wrestling-for-bjj-takedowns)      [✨ NEW]
│   ├── Off-Season HS Wrestling (NCS/CIF)    (/guides/high-school-off-season-wrestling) [✨ NEW]
│   └── DSAL Hayward to Olympic Pathway      (/guides/dsal-hayward-wrestling-pathway)   [✨ NEW]
│
└── 4. Footer Silo C: Club Operations & Machine Discovery Feeds
    ├── Contact & Parking Map (/contact)                             [EXISTING - UPGRADE]
    ├── Parent & Athlete FAQs (/faqs)                                [EXISTING - EXPAND 10 → 16 FAQS]
    ├── Club Rules & Mat Hygiene (/rules)                            [EXISTING - UPGRADE]
    ├── Youth Scholarship Fund (/donate)                             [EXISTING - POPULATE OR HIDE]
    └── Machine Discovery Feeds
        ├── /robots.txt                                              [✨ NEW - FIXES 404]
        ├── /sitemap.xml                                             [✨ NEW - FIXES 404]
        ├── /llms.txt                                                [✨ NEW - FIXES 404]
        └── /llms-full.txt                                           [✨ NEW - FIXES 404]
```

---

## 5. Complete URL Inventory Table (`[EXISTING]` vs. `[NEW]`)

| # | URL Route | Status | Parent Silo | Primary SEO / Conversion Role |
| :-: | :--- | :---: | :--- | :--- |
| **1** | `/` | `[EXISTING]` | Root | Brand Authority, Hero Loop, Age Matcher, `#6` *"wrestling gym"* (`2,900/mo`) |
| **2** | `/about` | `[EXISTING]` | Header | Olympic Lineage (Karim & Rashad), 2024 Olympic Champ Magomed Ramazanov clinic proof, Naweed Kinesiology, 7 Coach `Person` Schemas |
| **3** | `/classes` | `[EXISTING]` | Header | Main Classes & Programs Hub (fixes empty live shell) |
| **4** | `/classes/kid-wrestling` | `[EXISTING]` | `/classes` | Pre-K–5th Youth Foundation (`$89.99–$139.99/mo`, `Session #1087` & `#4981`) |
| **5** | `/classes/youth-wrestling` | `[EXISTING]` | `/classes` | Grades K–12 Competition & MS/HS Pipeline (`$139.99–$150/mo`, `#2286` & `#3574`) |
| **6** | `/classes/adult-wrestling` | `[EXISTING]` | `/classes` | Adult / College / MMA Wrestling (`$139.99/mo`, `Session #1084`), Karim "Train with an Olympian" mat drills |
| **7** | `/classes/nogi-jiu-jitsu` | `[EXISTING]` | `/classes` | No-Gi "Wrestle-Jitsu" Takedowns + Submissions (`$100–$139.99/mo`) |
| **8** | `/classes/gi-jiu-jitsu` | `[EXISTING]` | `/classes` | Traditional Gi BJJ (`$100/mo` 3-Day `Session #9536` or Unlimited) |
| **9** | `/classes/sambo` | `[EXISTING]` | `/classes` | Kyrgyz Master Combat Sambo Jacket Throws & Leg Locks |
| **10** | `/classes/boxing-fundamentals` | `[EXISTING]` | `/classes` | Coach Farid Siddiq Boxing Stance, Footwork & Slip-Counters |
| **11** | `/classes/open-mat` | `[EXISTING]` | `/classes` | Saturday 10:00 AM – 12:00 PM Regional Open Mat (`$15` Drop-In `Session #2664`) |
| **12** | `/classes/womens-self-defense` | **`[✨ NEW]`** | `/classes` | Women's Self-Defense Co-Led by **Louisa** (Boxing/MMA), **Neha's Sister** (Police Officer/Alum/Titleholder), and **Ja Shia** (Oakland Hand-to-Hand/MMA) |
| **13** | `/schedule` | `[EXISTING]` | Header | Interactive Filterable Schedule + Click-Class-to-Book Modal |
| **14** | `/pricing` | `[EXISTING]` | Header | Memberships, Sibling/Seasonal Rules & Direct `WrestlingIQ` Checkout |
| **15** | `/events` | `[EXISTING]` | Header | 41-Event `2026–2027` Tournament Tracker + **UWC Holiday Mixer** RSVP |
| **16** | `/register` | `[EXISTING]` | Header CTA | Native 1-Click Trial Pass & `$15` 3-Day Trial (`Session #6327`) Intake Funnel |
| **17** | `/contact` | `[EXISTING]` | Footer | Direct Phone/SMS, Formspree + Webhook, Industrial Pkwy Parking Video & Map |
| **18** | `/faqs` | `[EXISTING]` | Footer | 16 Parent/Adult FAQs with `FAQPage` JSON-LD |
| **19** | `/rules` | `[EXISTING]` | Footer | 10 Club Rules + Hospital-Grade Mat Hygiene Proof |
| **20** | `/donate` | `[EXISTING]` | Footer | Youth Tournament Travel Scholarship & Local Business Sponsorships |
| **21** | `/locations` | **`[✨ NEW]`** | Footer | East Bay & Alameda County Service Areas Index Hub |
| **22** | `/locations/hayward-ca` | **`[✨ NEW]`** | `/locations` | Hayward HQ Local Pack Anchor (`30139 Industrial Pkwy SW Ste C`) |
| **23** | `/locations/union-city-ca` | **`[✨ NEW]`** | `/locations` | Union City & James Logan High School Feeder Page (6 min via Whipple/I-880) |
| **24** | `/locations/fremont-ca` | **`[✨ NEW]`** | `/locations` | Fremont Wrestling & Martial Arts Vacuum Page (9 min via I-880 N) |
| **25** | `/locations/newark-ca` | **`[✨ NEW]`** | `/locations` | Newark Youth & Adult Grappling Feeder Page (11 min via I-880 N) |
| **26** | `/locations/castro-valley-ca` | **`[✨ NEW]`** | `/locations` | Castro Valley & San Leandro Youth Wrestling Feeder Page |
| **27** | `/guides` | **`[✨ NEW]`** | Footer | Regional Authority, Comparison & AI-Citation Resource Hub |
| **28** | `/guides/adult-wrestling-bay-area` | **`[✨ NEW]`** | `/guides` | Beats `r/bayarea`, `r/AskSF` & `Alameda BJJ` for Adult Wrestling in the Bay Area |
| **29** | `/guides/youth-wrestling-vs-martial-arts` | **`[✨ NEW]`** | `/guides` | Captures `18,100/mo` *"kids martial arts"* searches vs. strip-mall belt factories |
| **30** | `/guides/wrestling-for-bjj-takedowns` | **`[✨ NEW]`** | `/guides` | Captures East Bay BJJ guard-pullers looking for collegiate takedowns |
| **31** | `/guides/high-school-off-season-wrestling` | **`[✨ NEW]`** | `/guides` | MVAL / WACC / NCS Spring & Summer Freestyle/Greco Off-Season Blueprint |
| **32** | `/guides/dsal-hayward-wrestling-pathway` | **`[✨ NEW]`** | `/guides` | Community bridge from DSAL Hayward (`360 Laurel Ave`) to 5-Day Olympic Club |

*(Plus 4 **`[✨ NEW]`** static machine-discovery files at `/robots.txt`, `/sitemap.xml`, `/llms.txt`, and `/llms-full.txt`.)*

---

## 6. Surgical 301 Redirect Map (Only 6 Dead/Duplicate Unlinked Routes)

Because we keep `/classes`, `/classes/{active-slug}`, and `/register` at their exact existing URLs, **zero active navigation pages require a 301 redirect**. We only redirect the 6 unlinked legacy stubs discovered in `_buildManifest.js` ([`live_site_content/classes/legacy_unlinked_classes.md`](live_site_content/classes/legacy_unlinked_classes.md)):

| # | Legacy Unlinked Live URL | 301 Target URL (`[EXISTING]`) | Reason |
| :-: | :--- | :--- | :--- |
| **1** | `/classes/fundamental-boxing` | `/classes/boxing-fundamentals` | Eliminate duplicate boxing route |
| **2** | `/classes/jiu-jitsu` | `/classes/gi-jiu-jitsu` | Consolidate unlinked generic BJJ stub into Gi BJJ |
| **3** | `/classes/wrestling-technique` | `/classes/adult-wrestling#technique` | Fold unlinked stub into Adult/All-Level Wrestling |
| **4** | `/classes/strength-and-conditioning` | `/schedule#conditioning` | Maps directly to Mon–Thu 9:00 PM Conditioning slot |
| **5** | `/classes/intensity-training` | `/schedule#conditioning` | Fold unlinked HIIT stub into Conditioning schedule |
| **6** | `/classes/rest-and-recovery` | `/schedule` | Redirect retired unlinked stub to main schedule |
| *(Opt)* | `/free-trial` *(Vanity Alias)* | `/register` | Optional vanity alias for QR codes/flyers pointing to `/register` |

---

## 7. Keyword-to-URL Rerouting Architecture

Every single keyword cluster from OpenSEO discovery (`368` ranked terms + high-volume martial arts expansion queries) is mapped to its exact destination URL in [`local_seo_keyword_reroute_map.md`](local_seo_keyword_reroute_map.md):
- **Core Gym Intent (`26,300/mo`):** `/` & `/locations/hayward-ca`
- **Youth & Kids Wrestling (`8,530/mo`):** `/classes/kid-wrestling`
- **Parent Martial Arts vs. Karate (`18,140/mo`):** `/guides/youth-wrestling-vs-martial-arts`
- **Adult Wrestling Commercial & Guide (`5,010/mo`):** `/classes/adult-wrestling` & `/guides/adult-wrestling-bay-area`
- **Competition Team & High School (`6,450/mo`):** `/classes/youth-wrestling` & `/guides/high-school-off-season-wrestling`
- **BJJ & Wrestle-Jitsu Grappling (`74,570/mo`):** `/classes/nogi-jiu-jitsu`, `/classes/gi-jiu-jitsu` & `/guides/wrestling-for-bjj-takedowns`
- **Tri-City & County Geo Vacuums (`4,330/mo`):** `/locations/union-city-ca`, `/locations/fremont-ca`, `/locations/newark-ca`, `/locations/castro-valley-ca`
- **Open Mat & Tournaments (`4,390/mo`):** `/classes/open-mat` & `/events`
- **Women's Self-Defense (`1,420/mo`):** `/classes/womens-self-defense`

---

## 8. High-Converting UX Components & Opt-Out Media Release Spec

### Component 1: The Native 1-Click Trial Pass Modal (With Opt-Out Recording Clause)
Instead of sending cold traffic straight to `wrestlingiq.com`, clicking **"Start Your Trial"** or **"Book a Class"** opens an instant native modal:
* **Step 1 (Lead Capture + Default Media Release):**
  * `Athlete Type:` `[ Youth (Ages 4–11) | Middle/High School (12–18) | Adult (18+) | Women's Self-Defense ]`
  * `Parent / Athlete Full Name*`
  * `Mobile Phone Number* (For Instant SMS Class Pass & Parking Map)`
  * `Email Address*`
  * `Preferred First Class Day*`
  * **Default Opt-Out Recording Checkbox:**
    > `[ ] Optional: Opt out of photo/video recording. (Note: UWC films classes and events for coaching and promotional use on our website and social media. Media release is included by default unless you check this box or notify check-in staff.)`
* **Step 2 (Instant Value + Optional Express Checkout):**
  * Triggers instant SMS/email confirmation with the **45-second Industrial Pkwy Parking Walkthrough Video** and Coach Naweed's 30-second welcome clip.
  * Offers a 1-click button to complete the official `WrestlingIQ (Team 513)` waiver (`Session #6327` for the `$15` 3-Day Trial or Free Assessment Pass).

### Component 2: Interactive Schedule Grid (`/schedule`)
* **Fix Visual Duplication:** Render `7:30 PM – 9:00 PM ADULT / HIGH SCHOOL` as a single clean 90-minute block on Mon–Thu, and `6:30 PM – 8:00 PM Boxing / No-Gi` + `8:00 PM – 9:30 PM Adult Wrestling` as single 90-minute blocks on Friday (resolving live duplicated row bug across adjacent 7:30/8:00 PM slots).
* **Filter Pills:** `[ All Classes ]` · `[ Kids (Pre-K–5th) ]` · `[ Youth Comp (K–12) ]` · `[ Adult Wrestling ]` · `[ Gi & No-Gi BJJ ]` · `[ Boxing & Sambo ]` · `[ Women's Self-Defense ]`
* **Mobile View:** Automatically switches from a 7-column horizontal table to a swipeable **Day-by-Day Mobile Card Stack** (`Mon | Tue | Wed | Thu | Fri | Sat`) on screens `< 768px` so parents never have to pinch-zoom a tiny table.
* **Keep "Download Schedule" Feature:** Replace client-side `html2canvas` (which breaks on mobile Safari) with a pre-rendered, high-res downloadable PDF/PNG schedule sheet containing a QR code back to `/free-trial`.

### Component 3: Lightweight Social Proof Video Wall & Reels Showcase
* **Integration of High-Impact Meta / Instagram Video Proof ([`social_media_audit.md`](social_media_audit.md)):**
  1. **2024 Paris Olympic Champion Magomed Ramazanov & Ermak Kardanov Clinic Reel:** Tagged in Fresno featuring elite international freestyle instruction and live reps; featured on [`/about`](about.md) and [`/classes/adult-wrestling`](classes/adult-wrestling.md) under an *"Elite International Clinicians"* module.
  2. **Founder Karim Zemaryalai "This is What It Looks Like to Train with an Olympian":** High-intensity mat drill footage positioned above the fold on the homepage to break the intimidation barrier for adult beginners and validate world-class pedigree for competitive high schoolers.
  3. **Technical Precision ("The Knee Tap — Mastered at Every Level"):** 30-second mechanical tutorial reel demonstrating UWC's instructional depth vs. recreational belt factories.
* **Zero-LCP Performance Architecture:** Rather than loading render-blocking external social iframes, display pre-rendered WebP thumbnails ([`discovery/live_site_content/assets/facebook/fb_photo_01.jpg`](live_site_content/assets/facebook/fb_photo_01.jpg)–[`fb_photo_09.jpg`](live_site_content/assets/facebook/fb_photo_09.jpg)) that trigger a lightweight, lazy-loaded HTML5 modal video player on user click, preserving 95+ mobile Lighthouse scores.
* **Telephony NAP Reconciliation Protocol:** Explicitly hardcode the verified primary phone number `(510) 303-4869` with `tel:+15103034869` click-to-call links across the desktop top bar, mobile floating CTA, and `LocalBusiness` schema, actively superseding Facebook's unverified `[retired number]` line until owner confirmation.
