---
type: audit
status: archived
group: archive
owner: "Sprintz Local Growth Pipeline"
date: 2026-10-29
last_reviewed: 2026-10-29
sources: ["discovery/decisions/ADR-20261106-astro-design-system.md"]
---

# AI Readiness & Growth Audit: United Wrestling Club

> **Status: Snapshot.** Describes the pre-rebuild site (`unitedwrestlingclub.com`, late Oct 2026). Its findings were addressed by the Astro build, live on 2026-11-05 (see `decisions/ADR-20261106-astro-design-system.md`). Read as history, not as current state.

> **Target:** United Wrestling Club (Hayward, CA)  
> **Prepared For:** Sprintz Local Growth Pipeline  
> **Date:** October 29, 2026  

---

## Current AI Readiness Score: 18 / 100

### Strengths & High-Leverage Assets:
* **Unrivaled Authority Lineage:** 1980 Moscow Olympics qualifier Karim Zemaryalai, Dagestani Ali Aliyev medalist pedigree, Asian Games medalist Rashad Rahimi, and SF State Kinesiology / Chabot Coach Naweed Zemaryalai. This constitutes the highest legitimate Olympic wrestling authority in the East Bay.
* **Modern Cloud Foundation:** Built on Next.js and CloudFront CDN, with an existing backend infrastructure on WrestlingIQ.
* **Multi-Segment Product-Market Fit:** Established demand across four high-value groups: Youth Beginners (ages 4–11), High School Competitors, Adult Wrestling/MMA Grapplers, and BJJ practitioners.

### Critical Weaknesses & Blindspots:
* **Zero AI-Engine Visibility (GEO Invisibility):** Queries to ChatGPT, Perplexity, or Gemini such as *"Best youth wrestling clubs near Hayward CA"* or *"Where can adult BJJ fighters learn Olympic takedowns in the East Bay?"* fail to cite United Wrestling Club due to missing machine-readable standards (`llms.txt`, Open Knowledge Format, and Schema.org).
* **Client-Side Rendering Barrier:** The website's Next.js export loads via client-side JavaScript without pre-rendered server HTML, meaning AI crawler bots encounter an empty shell.
* **Leaky Inbound Funnel:** Coaches are actively training athletes on the mat 6 days a week. Phone calls to `510-303-4869` and website Formspree submissions often sit unanswered for hours, causing high parent drop-off to competing local karate/Taekwondo studios.
* **No Automated Trial Show-Up Pipeline:** WrestlingIQ is used strictly for raw checkout; there is zero automated pre-session SMS texting (gear requirements, what to wear, waiver reminder, map directions) to ensure trial athletes actually show up.

---

## High-Leverage AI Growth Packages (Sprintz Offerings)

### Package 1: The 24/7 "Mat Concierge" AI Booking Agent
* **The Problem:** Parents researching sports for their children after work hours (8:00 PM – 11:00 PM) or during daytime practice cannot get immediate answers regarding age brackets, schedule conflicts, pricing, or skill prerequisites.
* **The AI Solution:** Deploy an intelligent conversational AI booking widget on the website and SMS line that answers parent questions with instant accuracy, verifies the child's age/grade, matches them to the exact class (e.g. *Youth Comp vs. Kids 2-Day*), and books their free first-day trial on the club calendar.
* **Business Impact:** Recovers an estimated 10–18 lost parent leads per month without pulling coaches off the mat.

### Package 2: Local GEO & AI-SEO Machine (Generative Engine Optimization)
* **The Problem:** AI search engines are rapidly capturing local discovery. United Wrestling Club's pages are invisible to LLMs.
* **The AI Solution:** 
  1. Author and deploy `/llms.txt` and `/llms-full.txt` encoding UWC's coaches, Olympic credentials, exact schedule, and pricing.
  2. Implement rich JSON-LD Schema (`SportsClub`, `ExerciseGym`, `LocalBusiness`, `Person` credentials for Karim & Naweed Zemaryalai).
  3. Pre-render static HTML so AI crawlers ingest full semantic text on every hit.
* **Business Impact:** Dominates generative search citations across Hayward, Union City, Fremont, and Castro Valley for combat sports and youth wrestling.

### Package 3: Automated Athlete Onboarding & Retention Pipeline
* **The Problem:** Drop-in athletes ($15) and trial guests frequently vanish after one session because follow-up is manual.
* **The AI Solution:** Webhook connection from WrestlingIQ / native trial form into an automated 3-part nurture sequence:
  * *Day 1 Post-Trial:* Coach personal voice note or AI-personalized SMS checking on recovery and offering membership options.
  * *Day 5:* Video breakdown of a core takedown drill taught that week to reinforce the club's technical depth.
  * *Day 14:* Re-activation offer for athletes who attended a drop-in but haven't signed a recurring monthly membership.
* **Business Impact:** Boosts trial-to-paying-member conversion from ~35% to 65%+.

---

## Sprintz Outreach Strategy & Pitch Angle

1. **Lead with Respect for the Lineage:** Acknowledge Karim's Olympic pedigree and Naweed's high-level work with collegiate and youth athletes in the East Bay.
2. **Highlight the "Mat Problem":** *"You guys are in the room coaching 25+ hours a week. Every time a parent calls or submits a form while you're running live goes, that lead is at risk of going to a commercial martial arts studio down the street."*
3. **The Low-Friction Offer:** Offer to audit their technical web setup, install the `llms.txt` AI-discovery protocol, and set up an automated trial-booking engine that delivers pre-qualified trial kids straight to their mats.
