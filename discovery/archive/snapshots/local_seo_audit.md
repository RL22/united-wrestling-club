---
type: audit
status: archived
group: archive
owner: "Rodney Lewis (Sprintz)"
date: 2026-10-29
last_reviewed: 2026-10-29
sources: ["https://www.unitedwrestlingclub.com/", "http://unitedwrestlingclub.com/", "discovery/decisions/ADR-20261106-astro-design-system.md"]
---

# Local Organic SEO & OpenSEO Audit: United Wrestling Club

> **Status: Snapshot.** Describes the pre-rebuild site (`unitedwrestlingclub.com`, late Oct 2026). Its findings were addressed by the Astro build, live on 2026-11-05 (see `decisions/ADR-20261106-astro-design-system.md`). Read as history, not as current state.

> **Client / Prospect:** Naweed Zemaryalai (United Wrestling Club)  
> **Target Domain:** [unitedwrestlingclub.com](https://www.unitedwrestlingclub.com/)  
> **OpenSEO Project ID:** `778e3f25-5476-4c54-bfe2-e418e131aaaf`  
> **Local Rank Tracker ID:** `a13540f2-f98b-40f9-9368-a831b511e6fa` (Hayward, CA · Mobile Top 40)  
> **GBP Place ID:** `ChIJsQd_yMaVj4ARrXw93nb4euo` | **CID:** `16896090141452237997`  
> **Date Conducted:** October 29, 2026  

---

## 1. Organic Search Footprint Overview

| Metric | Current Baseline | Status |
| :--- | :--- | :--- |
| **Estimated Organic Traffic** | **2,086 visits / month** | High Demand Foundation |
| **Total Ranked Organic Keywords** | **368 terms** | Strong Domain Authority |
| **Google Business Profile Rating** | **5.0★ (42 reviews)** | Elite Social Proof |
| **GBP Claimed Status** | **Yes** | Claimed by Club |
| **Site Crawlability Score** | **Critical (0 indexable words)** | JavaScript Rendering Blocker |

---

## 2. High-Value Striking-Distance Keywords (Already Driving Traffic)

All traffic currently dumps onto the un-prerendered homepage (`/`) without discipline-specific landing pages:

| Search Term | Position | Monthly Volume | Intent | CPC | Est. Monthly Traffic | Destination URL |
| :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| **wrestling gym** | **#6** | 2,900 | Navigational | $1.89 | 469.80 | `https://www.unitedwrestlingclub.com/` |
| **wrestling near me** | **#11** | 9,900 | Commercial | $1.56 | 253.44 | `https://www.unitedwrestlingclub.com/` |
| **wrestling clubs near me** | **#14** | 8,100 | Informational | $1.40 | 121.50 | `https://www.unitedwrestlingclub.com/` |
| **wrestling club** | **#12** | 5,400 | Navigational | $2.55 | 106.38 | `https://www.unitedwrestlingclub.com/` |
| **wrestling classes near me** | **#9** | 1,900 | Commercial | $2.31 | 89.11 | `https://www.unitedwrestlingclub.com/` |
| **youth wrestling near me** | **#17** | 6,600 | Navigational | $3.22 | 60.06 | `https://www.unitedwrestlingclub.com/` |
| **wrestling gyms near me** | **#13** | 3,600 | Commercial | $1.37 | 54.00 | `https://www.unitedwrestlingclub.com/` |
| **wrestling academy near me** | **#22** | 5,400 | Navigational | $1.45 | 23.22 | `https://www.unitedwrestlingclub.com/` |

---

## 3. High-Priority Technical & Local Deficits

### Issue 1: Client-Side Rendering Bottleneck (OpenSEO Audit Warning)
* **Diagnosis:** OpenSEO site crawl detected `[warning] Content may require JavaScript (javascript-rendering-suspected)`. Raw HTML response contains **0 readable words** because Next.js serves an empty root div with an animated CSS spinner.
* **Impact:** Search engine bots and LLM scrapers that do not wait for client hydration cannot index the site's copy, Olympic credentials, or class descriptions.
* **Fix:** Enable static pre-rendering or SSR (`getStaticProps`) so full semantic headings and paragraph text exist in the initial HTML deliverable.

### Issue 2: Google Business Profile Configuration Flaws
* **Diagnosis:**
  1. The Google Business Profile website link points to insecure `http://unitedwrestlingclub.com/` instead of `https://`.
  2. The registered profile name is *"United Wrestling Clubs"* (plural), which mismatches the on-page branding and legal name (*"United Wrestling Club"*), diluting NAP consistency.
* **Fix:** Update GBP website field to `https://www.unitedwrestlingclub.com/` with UTM attribution tracking (`?utm_source=google&utm_medium=organic&utm_campaign=gbp_listing`). Standardize title to "United Wrestling Club".

### Issue 3: Complete Absence of Schema.org Local Entity Data
* **Diagnosis:** 0 JSON-LD structured data elements exist across the domain.
* **Fix:** Implement `SportsClub`, `ExerciseGym`, and `LocalBusiness` schema with exact coordinates (`37.604, -122.062`), street address (`30139 Industrial Pkwy SW Ste C, Hayward, CA 94544`), phone (`+1-510-303-4869`), hours, and coach credential entities for Karim and Naweed Zemaryalai.

### Issue 4: Missing Search Directives & GEO Machine Bundle
* **Diagnosis:** `robots.txt`, `sitemap.xml`, and `llms.txt` return HTTP 404 errors on CloudFront.
* **Fix:** Deploy static `robots.txt`, XML sitemap, and `llms.txt` to capture local AI search answers in ChatGPT, Perplexity, and Google AI Overviews.

---

## 4. 4-Week Local Organic Growth Roadmap for Naweed

1. **Week 1 (Infrastructure & Crawlability):**
   * Fix Next.js static prerender to serve full semantic text.
   * Deploy `robots.txt`, XML sitemap, and `llms.txt`.
   * Update GBP link to secure HTTPS with campaign tracking.
2. **Week 2 (Local Pack & Entity Authority):**
   * Inject rich JSON-LD `SportsClub` schema.
   * Add secondary GBP categories: *Wrestling School*, *Gym*, *Youth Organization*.
   * Standardize GBP naming to "United Wrestling Club".
3. **Week 3 (Geo-Targeted Money Pages):**
   * Build high-converting, local landing pages:
     * `/wrestling-hayward-ca`
     * `/youth-wrestling-east-bay`
     * `/wrestling-classes-fremont-ca`
     * `/adult-wrestling-san-leandro`
4. **Week 4 (Conversion Engine):**
   * Replace raw off-site WrestlingIQ registration redirects with a 1-click on-site Free Trial Pass capture modal.
