---
type: inventory
status: archived
group: archive
owner: "Rodney Lewis (Sprintz)"
date: 2026-11-06
last_reviewed: 2026-11-06
sources: ["discovery/archive/snapshots/live_site_content/_global_nav_and_footer.md", "discovery/archive/snapshots/live_site_content/index.md", "discovery/archive/snapshots/live_site_content/about.md", "discovery/archive/snapshots/live_site_content/schedule.md", "discovery/archive/snapshots/live_site_content/schedule.json", "discovery/archive/snapshots/live_site_content/pricing.md", "discovery/archive/snapshots/live_site_content/pricing.json", "discovery/archive/snapshots/live_site_content/events.md", "discovery/archive/snapshots/live_site_content/faqs.md", "discovery/archive/snapshots/live_site_content/rules.md", "discovery/archive/snapshots/live_site_content/contact.md", "discovery/archive/snapshots/live_site_content/stubs_classes_donate_register.md", "discovery/archive/snapshots/live_site_content/classes", "discovery/archive/snapshots/live_site_content/assets/uwc_crest_logo_highres.png", "discovery/archive/snapshots/live_site_content/assets/logo.png", "discovery/archive/snapshots/live_site_content/assets/schedule_grid_reference.png", "discovery/archive/snapshots/live_site_content/assets/founder.jpg", "discovery/archive/snapshots/live_site_content/assets/co-founder.jpg", "discovery/archive/snapshots/live_site_content/assets/head-coach.jpg", "discovery/archive/snapshots/live_site_content/assets/uwc_place.webp", "https://www.unitedwrestlingclub.com/_next/static/chunks/pages/*.js", "https://formspree.io/f/xyyavaaj", "discovery/decisions/ADR-20261106-astro-design-system.md"]
---

# Live Site Content & Asset Archive (`unitedwrestlingclub.com`)

> **Status: Snapshot.** Describes the pre-rebuild site (`unitedwrestlingclub.com`, late Oct 2026). Its findings were addressed by the Astro build, live on 2026-11-05 (see `decisions/ADR-20261106-astro-design-system.md`). Read as history, not as current state.

> **Extracted From:** `https://www.unitedwrestlingclub.com/_next/static/chunks/pages/*.js`  
> **Date Extracted:** October 30, 2026  

---

## 1. Directory Index

| File | Route / Scope | Format |
| :--- | :--- | :--- |
| [`_global_nav_and_footer.md`](_global_nav_and_footer.md) | Global header nav, dropdown links, footer links, social URLs, and default meta tags | Markdown |
| [`index.md`](index.md) | `/` — Hero video (`/UWC.mp4`), `$15 for 3-Day Trial` banner (`Session #6327`), and 4 value cards | Markdown |
| [`about.md`](about.md) | `/about` — Dan Gable quote, Karim Zemaryalai, Rashad Rahimi, Naweed Zemaryalai, Sandeep Singh Gosal, and Farid Siddiq bios | Markdown |
| [`schedule.md`](schedule.md) & [`schedule.json`](schedule.json) | `/schedule` — Complete Monday–Saturday class matrix + UX rendering bugs found | Markdown + JSON |
| [`pricing.md`](pricing.md) & [`pricing.json`](pricing.json) | `/pricing` — All 8 `WrestlingIQ (Team 513)` checkout URLs and session IDs | Markdown + JSON |
| [`events.md`](events.md) | `/events` — Full 41-event `2026–2027` SCWAY/USAW/NCS/CIF competition calendar + membership/attire rules | Markdown |
| [`faqs.md`](faqs.md) | `/faqs` — Verbatim 10 Q&A items | Markdown |
| [`rules.md`](rules.md) | `/rules` — Verbatim 10 Club Rules | Markdown |
| [`contact.md`](contact.md) | `/contact` — Formspree endpoint (`https://formspree.io/f/xyyavaaj`), phone, email, and social links | Markdown |
| [`stubs_classes_donate_register.md`](stubs_classes_donate_register.md) | `/classes`, `/donate`, `/register` — Documented as empty shell routes on the live site | Markdown |
| [`classes/`](classes/) | All 14 `/classes/*` sub-pages (`kid-wrestling.md`, `youth-wrestling.md`, `adult-wrestling.md`, `gi-jiu-jitsu.md`, `nogi-jiu-jitsu.md`, `sambo.md`, `boxing-fundamentals.md`, `open-mat.md`, and `legacy_unlinked_classes.md`) | Markdown |

---

## 2. Downloaded Brand & Media Assets (`assets/`)

- [`assets/uwc_crest_logo_highres.png`](assets/uwc_crest_logo_highres.png) — High-resolution official UWC circular crest logo (`404 KB`, transparent PNG with crimson/black/silver globe & singlet takedown motif).
- [`assets/logo.png`](assets/logo.png) — Live website navbar logo (`230 KB`).
- [`assets/schedule_grid_reference.png`](assets/schedule_grid_reference.png) — Live `/schedule` weekly calendar UI screenshot (`176 KB`).
- [`assets/founder.jpg`](assets/founder.jpg) — Karim Zemaryalai portrait (`314 KB`).
- [`assets/co-founder.jpg`](assets/co-founder.jpg) — Rashad Rahimi portrait (`16 KB` — very low-res, needs replacement at Holiday Mixer).
- [`assets/head-coach.jpg`](assets/head-coach.jpg) — Naweed Zemaryalai portrait (`218 KB`).
- [`assets/uwc_place.webp`](assets/uwc_place.webp) — Facility mat room hero poster (`124 KB`).
