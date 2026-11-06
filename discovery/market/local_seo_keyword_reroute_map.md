---
status: reference
group: market
---

# United Wrestling Club: Local SEO Keyword-to-URL Rerouting Matrix

> **Client:** United Wrestling Club (Naweed & Karim Zemaryalai)  
> **OpenSEO Project ID:** `778e3f25-5476-4c54-bfe2-e418e131aaaf` | **Rank Tracker ID:** `a13540f2-f98b-40f9-9368-a831b511e6fa`  
> **Baseline Footprint:** 368 Ranked Organic Keywords · 2,086 Monthly Organic Visits · 42 Five-Star Reviews (5.0★)  
> **Date:** October 30, 2026  

---

## 1. The "Homepage Dump" Dilemma & Rerouting Architecture

### The Problem in Current OpenSEO Data
Prior to this overhaul, **98% of UWC's 368 ranked keywords routed exclusively to the un-prerendered root homepage (`/`)**:
- High-intent commercial queries like *"youth wrestling near me"* (`6,600/mo`, Rank #17), *"adult wrestling clubs near me"* (`1,300/mo`, Rank #10), and *"wrestling classes near me"* (`1,900/mo`, Rank #9) all landed on `/`, forcing Google to guess user intent against an empty JavaScript shell.
- Broad commercial martial arts queries (*"martial arts near me"*, *"kids martial arts near me"*) had **zero relevant destination**, forfeiting over `150,000` monthly East Bay search impressions to commercial belt factories (Osorio, Mindset, strip-mall karate).

### The Solution: Surgical Intent-to-Silo Rerouting
By routing each keyword cluster to a dedicated page with matching H1, Title tag, JSON-LD Schema, and localized copy, UWC eliminates page-level competition and establishes topical authority across:
1. **Core Discipline Class Silo (`/classes/*`):** Exact commercial intent for specific training types.
2. **East Bay Geo-Silo (`/locations/*`):** High-intent suburban feeder demand (Hayward, Union City, Fremont, Newark, Castro Valley).
3. **Regional Authority Guides (`/guides/*`):** Long-tail informational, comparison, and AI citation capture (Reddit, Perplexity, ChatGPT).
4. **Tournaments & Community (`/events` & `/classes/open-mat`):** California competitive grappler and Open Mat traffic.

---

## 2. Master Keyword-to-URL Rerouting Map

| # | Keyword Cluster | Monthly Vol | KD | CPC | Current Rank | Previous URL | Target Locked URL | Primary On-Page Intent & Title Hook |
| :-: | :--- | :-: | :-: | :-: | :-: | :--- | :--- | :--- |
| **1** | `wrestling gym`, `wrestling club`, `wrestling near me`, `wrestling academy near me` | 26,300 | 4–10 | $1.89 | #6–#12 | `/` | `/` & `/locations/hayward-ca` | **Hometown Core Anchor:** "Olympic Wrestling Club & Training Center \| Hayward, CA" |
| **2** | `youth wrestling near me`, `youth wrestling clubs`, `youth wrestling programs`, `kids wrestling` | 8,530 | 0–6 | $3.22 | #11–#17 | `/` | `/classes/kid-wrestling` | **Pre-K–5th Youth Foundation:** "Kids Wrestling Classes (Ages 4–11) \| Youth Foundation Program" |
| **3** | `kids martial arts near me`, `martial arts for kids`, `hayward martial arts` | 18,140 | 0–12 | $4.73 | Unranked | None | `/guides/youth-wrestling-vs-martial-arts` | **Parent Comparison Guide:** "Why Olympic Wrestling & BJJ Beat Karate for East Bay Kids" |
| **4** | `wrestling classes near me`, `wrestling programs near me`, `wrestling lessons near me` | 2,590 | 2–5 | $2.31 | #9–#12 | `/` | `/classes` | **Classes Hub:** "Wrestling & Combat Sports Classes in the East Bay \| Class Schedule" |
| **5** | `adult wrestling clubs near me`, `club wrestling for adults`, `wrestling clubs for adults`, `adult wrestling gym` | 3,530 | 0–15 | $1.82 | #9–#10 | `/` | `/classes/adult-wrestling` | **Adult Commercial Page:** "Adult Wrestling Classes \| Folkstyle, Freestyle & MMA Takedowns" |
| **6** | `adult wrestling bay area`, `adult wrestling northern california`, `learn wrestling as an adult` | 1,480 | 4–12 | $1.82 | Unranked | None | `/guides/adult-wrestling-bay-area` | **Regional Authority Guide:** "Where to Train Adult Wrestling in the SF Bay Area (2027 Guide)" |
| **7** | `wrestling teams`, `competition youth wrestling`, `scway wrestling clubs`, `freestyle wrestling near me` | 4,300 | 4–20 | $3.87 | #12–#17 | `/` | `/classes/youth-wrestling` | **Scholastic Travel Team:** "Youth Competition Team & High School Wrestling Pipeline (K–12)" |
| **8** | `high school wrestling off-season`, `mval wrestling`, `ncs wrestling training`, `cif wrestling camps` | 2,150 | 0–8 | $2.48 | Unranked | None | `/guides/high-school-off-season-wrestling` | **Scholastic Resource Guide:** "Alameda County Off-Season Wrestling: MVAL, NCS & CIF Preparation" |
| **9** | `bjj near me`, `bjj classes near me`, `jiu jitsu classes near me` | 68,480 | 17–21 | $3.96 | Unranked | None | `/classes/gi-jiu-jitsu` | **Gi BJJ Commercial Page:** "Gi Brazilian Jiu-Jitsu Classes \| Traditional Technique & Ground Mastery" |
| **10** | `wrestle jitsu`, `bjj takedowns`, `wrestling for bjj`, `no gi jiu jitsu near me` | 4,200 | 3–14 | $2.75 | Unranked | `/classes/nogi-jiu-jitsu` | `/classes/nogi-jiu-jitsu` | **No-Gi Wrestle-Jitsu Page:** "No-Gi Wrestle-Jitsu \| High-Percentage Takedowns for Grapplers" |
| **11** | `bjj takedowns guide`, `how to stop guard pulling`, `wrestling drills for jiu jitsu` | 1,890 | 2–11 | $1.95 | Unranked | None | `/guides/wrestling-for-bjj-takedowns` | **Grappler Authority Guide:** "Collegiate Wrestling Takedowns for BJJ: The Guard-Puller Antidote" |
| **12** | `sambo near me`, `combat sambo classes`, `sambo bay area`, `russian sambo` | 1,620 | 0–7 | $2.10 | Unranked | `/classes/sambo` | `/classes/sambo` | **Combat Sambo Page:** "Combat Sambo Classes \| Russian & Kyrgyz Throws, Trips & Leg Locks" |
| **13** | `boxing fundamentals`, `boxing classes near me`, `boxing for mma` | 5,400 | 4–12 | $2.65 | Unranked | `/classes/boxing-fundamentals` | `/classes/boxing-fundamentals` | **Striking Commercial Page:** "Boxing Fundamentals Class \| Stance, Footwork & Striking Mechanics" |
| **14** | `open mat wrestling`, `open mat wrestling near me`, `wrestling open mats`, `saturday open mat` | 1,290 | 0–19 | $1.23 | #8–#10 | `/classes/open-mat` | `/classes/open-mat` | **Open Mat Page:** "Saturday Open Mat Wrestling & Grappling ($15 Drop-In) \| East Bay" |
| **15** | `union city wrestling`, `wrestling union city ca`, `james logan wrestling club` | 480 | 0–2 | $1.40 | #13 | `/` | `/locations/union-city-ca` | **Union City Geo Page:** "Wrestling Club for Union City Athletes \| James Logan Feeder Academy" |
| **16** | `wrestling fremont ca`, `wrestling classes fremont`, `fremont martial arts`, `martial arts fremont ca` | 2,320 | 0–13 | $2.86 | Unranked | None | `/locations/fremont-ca` | **Fremont Geo Page:** "Wrestling & Martial Arts Classes Near Fremont, CA (7 Min Away)" |
| **17** | `wrestling newark ca`, `newark martial arts`, `bjj newark ca` | 640 | 0–5 | $1.90 | Unranked | None | `/locations/newark-ca` | **Newark Geo Page:** "Wrestling & Grappling Academy Serving Newark, CA" |
| **18** | `wrestling castro valley`, `kids martial arts castro valley`, `wrestling san leandro` | 890 | 0–6 | $2.15 | Unranked | None | `/locations/castro-valley-ca` | **Castro Valley/San Leandro Geo:** "Youth & Adult Wrestling Serving Castro Valley & San Leandro, CA" |
| **19** | `dsal hayward wrestling`, `free wrestling hayward`, `beat the streets bay area` | 760 | 0–3 | $1.15 | Unranked | None | `/guides/dsal-hayward-wrestling-pathway` | **Community Bridge Guide:** "From DSAL Hayward to Olympic Wrestling: The Elite Club Pathway" |
| **20** | `scway tournaments`, `mdwa wrestling`, `bawa wrestling`, `causaw state wrestling`, `trackwrestling` | 3,100 | 0–16 | $1.80 | #8–#9 | `/events` | `/events` | **Tournament Engine:** "2026–2027 Wrestling Tournament Calendar \| SCWAY, USAW, NCS & CIF" |
| **21** | `women's self defense classes hayward`, `womens self defense east bay`, `girls wrestling east bay` | 1,420 | 0–4 | $3.50 | Unranked | None | `/classes/womens-self-defense` | **Self-Defense Seminar Page:** "Women's Self-Defense & Striking Classes \| Hayward & East Bay" |
| **22** | `karim zemaryalai`, `olympic wrestling coach bay area`, `dagestan wrestling california` | 520 | 0–1 | — | #1–#2 | `/about` | `/about` | **Pedigree Authority Page:** "Our Olympic Pedigree & Coaching Staff \| Karim & Naweed Zemaryalai" |

---

## 3. Surgical 301 Redirect Rules (Catching Dead Legacy URLs)

When the new Next.js rebuild launches, these 6 legacy URLs that search bots indexed in the past must permanently redirect (`301`) to prevent traffic drops:

```javascript
// next.config.js redirects block
module.exports = {
  async redirects() {
    return [
      {
        source: '/classes/fundamental-boxing',
        destination: '/classes/boxing-fundamentals',
        permanent: true,
      },
      {
        source: '/classes/jiu-jitsu',
        destination: '/classes/gi-jiu-jitsu',
        permanent: true,
      },
      {
        source: '/classes/wrestling-technique',
        destination: '/classes/adult-wrestling',
        permanent: true,
      },
      {
        source: '/classes/strength-and-conditioning',
        destination: '/schedule',
        permanent: true,
      },
      {
        source: '/classes/intensity-training',
        destination: '/schedule',
        permanent: true,
      },
      {
        source: '/classes/rest-and-recovery',
        destination: '/schedule',
        permanent: true,
      },
      {
        source: '/free-trial',
        destination: '/register',
        permanent: true,
      },
    ];
  },
};
```

---

## 4. Internal Link Architecture: Powering Authority Flow

To ensure Google distributes the homepage's high domain authority to all new geo-pages and guides, follow this strict internal linking hierarchy:

```mermaid
graph TD
    HOME[Homepage /<br/>Captures 'wrestling gym' & 'wrestling near me'] --> CLASSES[Classes Hub /classes<br/>Captures 'wrestling classes near me']
    HOME --> SCHEDULE[Schedule /schedule]
    HOME --> PRICING[Pricing /pricing]
    HOME --> REGISTER[Trial Pass /register]

    CLASSES --> KW[Kids Wrestling /classes/kid-wrestling<br/>Captures 'youth wrestling near me']
    CLASSES --> CW[Youth Comp /classes/youth-wrestling<br/>Captures 'wrestling teams']
    CLASSES --> AW[Adult Wrestling /classes/adult-wrestling<br/>Captures 'adult wrestling clubs']
    CLASSES --> BJJ[No-Gi Wrestle-Jitsu /classes/nogi-jiu-jitsu<br/>Captures 'wrestle jitsu']
    CLASSES --> WSD[Women's Self-Defense /classes/womens-self-defense]
    CLASSES --> OM[Open Mat /classes/open-mat<br/>Captures 'open mat wrestling']

    FOOTER_LOC[Footer: East Bay Locations Served] --> LOC_HAY[Hayward HQ /locations/hayward-ca]
    FOOTER_LOC --> LOC_UC[Union City /locations/union-city-ca]
    FOOTER_LOC --> LOC_FRE[Fremont /locations/fremont-ca]
    FOOTER_LOC --> LOC_NEW[Newark /locations/newark-ca]
    FOOTER_LOC --> LOC_CV[Castro Valley /locations/castro-valley-ca]

    FOOTER_GUIDES[Footer: Wrestling & Grappling Guides] --> G_ADULT[/guides/adult-wrestling-bay-area]
    FOOTER_GUIDES --> G_YOUTH[/guides/youth-wrestling-vs-martial-arts]
    FOOTER_GUIDES --> G_BJJ[/guides/wrestling-for-bjj-takedowns]
    FOOTER_GUIDES --> G_HS[/guides/high-school-off-season-wrestling]
    FOOTER_GUIDES --> G_DSAL[/guides/dsal-hayward-wrestling-pathway]

    G_ADULT --> AW
    G_YOUTH --> KW
    G_BJJ --> BJJ
    G_HS --> CW
    G_DSAL --> KW
    LOC_FRE --> REGISTER
    LOC_UC --> REGISTER
```

---

## 5. Schema.org Breadcrumb Alignment

Every rerouted page enforces clean `BreadcrumbList` JSON-LD so Google displays clean sitelinks instead of messy raw URLs:

- **Geo Silo:** `Home > Locations > Fremont, CA`
- **Class Silo:** `Home > Classes > Kids Wrestling (Pre-K–5th)`
- **Guide Silo:** `Home > Guides > Adult Wrestling in the Bay Area`
