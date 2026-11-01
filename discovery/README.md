# United Wrestling Club (UWC) Discovery Index

> **Client:** Naweed Zemaryalai & Karim Zemaryalai  
> **Brand:** United Wrestling Club  
> **Headquarters:** 30139 Industrial Pkwy SW Ste C, Hayward, CA 94544  
> **Prepared By:** Sprintz Growth OS  
> **Date:** October 30, 2026  

---

## Master Directory Structure

All discovery assets, audits, technical extractions, and growth roadmaps for United Wrestling Club are organized below:

```text
clients/prospects/united-wrestling-club/
├── discovery/
│   ├── README.md                                  # This master navigation index
│   ├── company_profile.md                         # Business dossier, Olympic authority, pricing, ICPs
│   ├── offers_audit_and_design.md                 # B2C athlete offer redesign & B2B Sprintz proposal offer
│   ├── offers_research_companion.md               # Competitor offer benchmarks, LTV math & data intake checklist
│   ├── naweed_discovery_questions.md              # Questionnaire for Naweed/co-owner (Items #1–#7)
│   ├── todos.md                                   # Deferred pre-pitch decisions (Item #5) & execution backlog
│   ├── rudis_stories_editorial_pitch.md           # Turnkey pitch deck, email copy & editorial angles for RUDIS Stories
│   ├── website_rebuild_spec.md                    # Master 32-route sitemap, 301 map, UX & Core Web Vitals spec
│   ├── trial_modal_dataflow_ux_spec.md            # Native 1-click modal architecture, UX diagrams, touchpoints & schema
│   ├── local_seo_keyword_reroute_map.md           # 22-cluster mapping rerouting all 368 ranked & high-volume keywords
│   ├── live_site_content/                         # Extracted verbatim copy, JSON schedules/pricing & brand assets
│   │   ├── README.md                              # Index of all extracted live pages & downloaded images/logos
│   │   ├── schedule.md / schedule.json            # Full Mon–Sat schedule matrix & UI rendering bug diagnosis
│   │   ├── pricing.md / pricing.json              # All 8 WrestlingIQ (Team 513) session IDs & checkout URLs
│   │   ├── index.md / about.md / events.md        # Homepage, coach bios, and 41-event 2026–2027 tournament list
│   │   ├── faqs.md / rules.md / contact.md        # Verbatim 10 FAQs, 10 Club Rules & Formspree config
│   │   ├── classes/                               # All 14 /classes/* sub-page extractions
│   │   └── assets/                                # High-res UWC crest logo, schedule screenshot & coach portraits
│   ├── current_design.md                          # Baseline design system tokens, typography & CSS extraction
│   ├── brand_ethos_and_analogous_influences.md    # UWC brand ethos, aesthetic DNA & initial analogous brands
│   ├── top_10_non_clothing_analogous_brands.md    # Master Top 10 non-clothing analogous brands & visual DNA synthesis
│   ├── darc_sport_and_gymshark_analysis.md        # Deconstruction of DARC Sport & Gymshark: cult tribalism vs parent friction
│   ├── analogous_brands/                          # Deep-dive dossiers across 3 non-clothing industrial clusters
│   │   ├── cluster_a_heavy_equipment_and_field_gear.md # Rogue Fitness, YETI, Concept2, Eleiko
│   │   ├── cluster_b_tools_tactical_and_machines.md    # Milwaukee Tool, G-Shock, Toyota TRD, Sinn/Tudor
│   │   └── cluster_c_documentary_science_and_craft.md  # Leica Camera, LMNT, The Surfer's Journal, IronMind
│   ├── top_20_wrestling_authority_backlinks.md    # Master Top 20 wrestling brands link equity blueprint & outreach kit
│   ├── link_equity/                               # Categorized link equity dossiers across endemic wrestling verticals
│   │   ├── category1_gear_and_apparel.md          # 8 gear, mat & apparel brands (RUDIS, ScrapLife, Cliff Keen, Defense Soap)
│   │   ├── category2_media_and_streaming.md       # 7 media & streaming networks (FloWrestling, Trackwrestling, InterMat, WIN)
│   │   └── category3_governing_bodies_and_foundations.md # 6 governing bodies & foundations (USAW, NWCA, NWHOF, BTSBA)
│   ├── moodboards/                                # Master brand identity exploration & moodboard suite (2027)
│   ├── video_assets/                              # Hero video inventory, silent master, contact sheet & clip taxonomy
│   │   ├── UWC_hero_silent.mp4                    # Silent H.264 copy for mobile autoplay optimization
│   │   ├── contact_sheet.png                      # 47-keyframe 2400x2188 master visual contact sheet with timestamps
│   │   ├── video_inventory.json                   # Master structured video inventory schema
│   │   └── video_inventory.md                     # Comprehensive scene taxonomy, B-roll mapping & athlete tags
│   │   ├── README.md                              # Executive Creative Director brief & comparative evaluation matrix
│   │   ├── new_directions_showcase.html           # Master interactive HTML showcase (Directions A, B, C & Sol conversion matrix)
│   │   ├── direction_A_darc_combat_brotherhood.md # Direction A Spec: The Mat Wolfpack (DARC Sport x Combat Brotherhood)
│   │   ├── direction_A_darc_combat_brotherhood.html # Direction A Standalone Interactive Showcase
│   │   ├── direction_B_industrial_iron_foundry.md # Direction B Spec: The Industrial Iron Foundry (Rogue x Milwaukee x Concept2)
│   │   ├── direction_B_industrial_iron_foundry.html # Direction B Standalone Interactive Showcase
│   │   ├── direction_C_olympic_field_archive.md   # Direction C Spec: The Olympic Field Archive (Leica x Surfer's Journal x Eleiko)
│   │   ├── direction_C_olympic_field_archive.html # Direction C Standalone Interactive Showcase
│   │   ├── moodboard_showcase.html                # Initial exploration showcase (Directions 1, 2, 3)
│   │   └── screenshots/                           # Full-depth PNG screenshots of all moodboards (1440x2000+)
│   ├── site_audit.md                              # Information architecture audit, ASCII/Mermaid sitemaps
│   ├── ai_readiness_audit.md                      # AI readiness score (18/100), GEO blindspots, offer packages
│   ├── local_seo_audit.md                         # OpenSEO project setup, ranked keywords, crawl diagnosis
│   ├── alameda_county_local_footprint.md          # Multi-city Maps analysis (Hayward, Tri-City, Oakland)
│   ├── competitors/                               # 4-Tier & 5-Group SERP Competitor Intelligence
│   │   ├── README.md                              # Master 4-tier + 5-group Top 5s matrix & SEO blueprints
│   │   ├── tier1_local_hayward_tricity.md         # Top 5 Local (Hayward, Union City, Fremont, Newark)
│   │   ├── tier2_county_alameda.md                # Top 5 County (Alameda County: Smash, CSA, Iron WC, Alameda BJJ)
│   │   ├── tier3_regional_bay_area.md             # Top 5 Regional (SF Bay Area: AKA, DC/AWA, Belmont, Discipline)
│   │   ├── tier4_state_california.md              # Top 5 State (California: LAWC, Reign, Silverback, Threshold)
│   │   ├── groupA_directories_and_governing_bodies.md # Top 5 Gatekeepers (TheMat, USAW CA, Yelp, CalGrappler, BPN)
│   │   ├── groupB_nonprofits_and_pal_programs.md  # Top 5 Non-Profits & PAL (BTS/DSAL Hayward, SFPAL, SF Elite)
│   │   ├── groupC_scholastic_and_college_programs.md # Top 5 College/Scholastic (Chabot, SFSU, Cal, Stanford, MVAL)
│   │   ├── groupD_forums_reddit_and_ai_citations.md # Top 5 Reddit, Forums & AI Citation Channels
│   │   └── groupE_pro_wrestling_serp_polluters.md # Top 5 Pro-Wrestling Polluters + Wikidata Q327223 Disambiguation
│   └── local_seo/
│       ├── strategy_what_why_how.md               # Complete local SEO strategy with data citations
│       └── top_10_programmatic_lps.md             # Data-driven blueprint for 10 geo/discipline landing pages
└── design-extract-output/united-wrestling-club/   # 33 visual design tokens, brand book, Tailwind config
```

---

## Document Index & Core Deliverables

| File | Scope & Purpose | Link |
| :--- | :--- | :--- |
| **Master 4-Tier Competitors** | Top 5 Local, County, Regional & State competitors with OpenSEO data & `/vs/` blueprints | [`competitors/README.md`](competitors/README.md) |
| **Tier 1: Local Competitors** | Top 5 in Hayward & Tri-City (Osorio, Mindset, One World, EDGE, Dragon's Den) | [`competitors/tier1_local_hayward_tricity.md`](competitors/tier1_local_hayward_tricity.md) |
| **Tier 2: County Competitors** | Top 5 in Alameda County (Smash Gyms, CSA Dublin, Iron WC, Alameda BJJ, Baem/10th Planet) | [`competitors/tier2_county_alameda.md`](competitors/tier2_county_alameda.md) |
| **Tier 3: Regional Competitors** | Top 5 in SF Bay Area (AKA San Jose, DC/AWA, Belmont/Peninsula, Discipline/Sunnyvale, Royalty) | [`competitors/tier3_regional_bay_area.md`](competitors/tier3_regional_bay_area.md) |
| **Tier 4: State Competitors** | Top 5 in California (LAWC, Reign WC, Silverback/OCRTC, 951/Threshold, Clovis/San Diego WC) | [`competitors/tier4_state_california.md`](competitors/tier4_state_california.md) |
| **Group A: Directories & Governing Bodies** | Top 5 Gatekeepers (`themat.com`, `usawmembership.com`, `yelp.com`, `calgrappler.com`, `berkeleyparentsnetwork.org`) | [`competitors/groupA_directories_and_governing_bodies.md`](competitors/groupA_directories_and_governing_bodies.md) |
| **Group B: Non-Profits & PAL** | Top 5 `.org` Programs (Beat the Streets/DSAL Hayward, SFPAL, SF Elite, Paragon, Petaluma/Lamorinda) | [`competitors/groupB_nonprofits_and_pal_programs.md`](competitors/groupB_nonprofits_and_pal_programs.md) |
| **Group C: Scholastic & College** | Top 5 College/HS Feeders (Chabot College, SFSU, UC Berkeley, Stanford/CRTC, MVAL/WACC Camps) | [`competitors/groupC_scholastic_and_college_programs.md`](competitors/groupC_scholastic_and_college_programs.md) |
| **Group D: Reddit & Forums (AI Citations)** | Top 5 Discussion Channels (`r/bayarea`, `r/AskSF`/`r/bjj`, California Wrestler Forum, BPN, FB Groups) | [`competitors/groupD_forums_reddit_and_ai_citations.md`](competitors/groupD_forums_reddit_and_ai_citations.md) |
| **Group E: Pro-Wrestling Polluters** | Top 5 Theatrical Polluters (West Coast Pro, EBPW, PWR, OASIS, CWL/CWA) + Wikidata `Q327223` Schema | [`competitors/groupE_pro_wrestling_serp_polluters.md`](competitors/groupE_pro_wrestling_serp_polluters.md) |
| **Offer Audit & Design** | Complete B2C athlete membership offer reconstruction + B2B Sprintz pitch offer | [`offers_audit_and_design.md`](offers_audit_and_design.md) |
| **Offer Research Companion** | Competitor pricing/seasonal/sibling/gear matrix, LTV unit economics & data intake | [`offers_research_companion.md`](offers_research_companion.md) |
| **Women's Self-Defense Financial Model** | 60/40 split, dead mat monetization, tuition rollover math & B2B corporate clinic pricing | [`womens_self_defense_financial_model.md`](womens_self_defense_financial_model.md) |
| **Naweed Discovery Questions** | Structured questionnaire for Naweed/co-owner covering Items #1–#4 & competitor offers | [`naweed_discovery_questions.md`](naweed_discovery_questions.md) |
| **Project To-Dos & Backlog** | Deferred Sprintz pricing decision (Item #5) and pre/post-close execution checklist | [`todos.md`](todos.md) |
| **Website Rebuild & UX Spec** | Master 32-route sitemap, 6-route 301 redirect map, Core Web Vitals fixes & 1-Click Trial Modal | [`website_rebuild_spec.md`](website_rebuild_spec.md) |
| **Native Trial Modal & Data Flow Spec** | Complete UX diagrams, 7-touchpoint matrix, `/api/trial-lead` Zod route & WrestlingIQ SMS bridge | [`trial_modal_dataflow_ux_spec.md`](trial_modal_dataflow_ux_spec.md) |
| **Social Media & Facebook Audit** | Meta profile teardown, NAP phone discrepancy (`510-880-3602`), 10 archived assets & Olympic reels | [`social_media_audit.md`](social_media_audit.md) |
| **Keyword Rerouting Map** | 22-cluster matrix mapping all 368 ranked keywords & high-volume search clusters to dedicated URLs | [`local_seo_keyword_reroute_map.md`](local_seo_keyword_reroute_map.md) |
| **Live Site Content Archive** | Verbatim copy from all 27 live Next.js chunks + `schedule.json`, `pricing.json` & high-res crest logo | [`live_site_content/README.md`](live_site_content/README.md) |
| **Strategy: What, Why & How** | Complete strategic playbook citing OpenSEO crawl data, GBP audits, and market vacuum analysis | [`local_seo/strategy_what_why_how.md`](local_seo/strategy_what_why_how.md) |
| **Top 10 Programmatic LPs** | Exact keyword targets, search volume, KD, hero copy, and blueprints for 10 geo/discipline pages | [`local_seo/top_10_programmatic_lps.md`](local_seo/top_10_programmatic_lps.md) |
| **Alameda County Footprint** | Google Maps SERP rankings across Hayward, Fremont, Union City, Newark, Castro Valley & Oakland | [`alameda_county_local_footprint.md`](alameda_county_local_footprint.md) |
| **Local SEO Baseline Audit** | 368 ranked keywords, striking-distance opportunities, and Next.js rendering diagnosis | [`local_seo_audit.md`](local_seo_audit.md) |
| **Company Profile Dossier** | Karim Zemaryalai Olympic lineage, Naweed coaching credentials, 7 membership offers, and ICP avatars | [`company_profile.md`](company_profile.md) |
| **Site Architecture Audit** | Page hierarchy, crawler failure analysis, and current vs. target navigation specs | [`site_audit.md`](site_audit.md) |
| **AI Readiness Evaluation** | 18/100 AI readiness score, machine-discovery failure (404s on llms.txt), and 3 Sprintz AI packages | [`ai_readiness_audit.md`](ai_readiness_audit.md) |
| **Current Design Spec** | Visual DNA, `#902524` crimson tokens, Montserrat type scale, pill radii, and Tailwind v4 theme | [`current_design.md`](current_design.md) |
| **Brand Ethos & Analogous Brands** | UWC true ethos, anti-McDojo posture, aesthetic DNA & initial analogous brands | [`brand_ethos_and_analogous_influences.md`](brand_ethos_and_analogous_influences.md) |
| **Top 10 Non-Clothing Analogous Brands** | Master ranking matrix, design DNA & UI translations for 10 heavy equipment, tool, optic & science brands | [`top_10_non_clothing_analogous_brands.md`](top_10_non_clothing_analogous_brands.md) |
| **DARC Sport & Gymshark Strategic Analysis** | Deconstruction of hype fitness brands: cult tribalism, merch drops vs. parent trust friction | [`darc_sport_and_gymshark_analysis.md`](darc_sport_and_gymshark_analysis.md) |
| **Cluster A: Heavy Equipment & Field Gear** | Rogue Fitness, YETI, Concept2, Eleiko design specs, palettes & UI components | [`analogous_brands/cluster_a_heavy_equipment_and_field_gear.md`](analogous_brands/cluster_a_heavy_equipment_and_field_gear.md) |
| **Cluster B: Tools, Tactical & Machines** | Milwaukee Tool, G-Shock, Toyota TRD, Sinn/Tudor design specs, palettes & UI components | [`analogous_brands/cluster_b_tools_tactical_and_machines.md`](analogous_brands/cluster_b_tools_tactical_and_machines.md) |
| **Cluster C: Documentary, Science & Craft** | Leica Camera, LMNT, The Surfer's Journal, IronMind design specs, palettes & UI components | [`analogous_brands/cluster_c_documentary_science_and_craft.md`](analogous_brands/cluster_c_documentary_science_and_craft.md) |
| **3 New Brand Directions (A, B, C)** | DARC Sport Combat Brotherhood, Rogue/Milwaukee Industrial Foundry, Leica/Surfer's Journal Field Archive | [`moodboards/new_directions_showcase.html`](moodboards/new_directions_showcase.html) & [`moodboards/direction_A_darc_combat_brotherhood.md`](moodboards/direction_A_darc_combat_brotherhood.md) |
| **Initial Moodboard Exploration** | Executive CD brief, comparative matrix, 3 initial directions & legacy showcase | [`moodboards/README.md`](moodboards/README.md) & [`moodboards/moodboard_showcase.html`](moodboards/moodboard_showcase.html) |
| **Top 20 Wrestling Link Equity & Outreach** | Master ranking table, DataForSEO metrics, pitch angles, 3 outreach email templates & 12-month roadmap | [`top_20_wrestling_authority_backlinks.md`](top_20_wrestling_authority_backlinks.md) |
| **Endemic Link Equity Dossiers** | Category 1 (Gear & Apparel), Category 2 (Media & Streaming), and Category 3 (Governing Bodies) | [`link_equity/category1_gear_and_apparel.md`](link_equity/category1_gear_and_apparel.md) |
| **Visual Brand Book** | 33 extracted design tokens, Tailwind v3/v4 theme, Figma variables, and visual HTML brand book | [Visual Brand Book Preview](../../../../design-extract-output/united-wrestling-club/unitedwrestlingclub-com.brand.html) |
