#!/usr/bin/env python3
"""
Merge Act 1, 2, and 3 video inventory JSON files into a master video_inventory.json
and compile an exhaustive, structured video_inventory.md companion.
"""

import os
import json
import glob

BASE_DIR = "/Users/rodneylewis/Sprintz/clients/prospects/united-wrestling-club/discovery/video_assets"
ACT1_JSON = os.path.join(BASE_DIR, "act1_inventory.json")
ACT2_JSON = os.path.join(BASE_DIR, "act2_inventory.json")
ACT3_JSON = os.path.join(BASE_DIR, "act3_inventory.json")
MASTER_JSON = os.path.join(BASE_DIR, "video_inventory.json")
MASTER_MD = os.path.join(BASE_DIR, "video_inventory.md")

def merge():
    acts = []
    for f in [ACT1_JSON, ACT2_JSON, ACT3_JSON]:
        if os.path.exists(f):
            with open(f, "r") as jf:
                data = json.load(jf)
                if isinstance(data, list):
                    acts.extend(data)
                elif isinstance(data, dict) and "scenes" in data:
                    acts.extend(data["scenes"])
                elif isinstance(data, dict) and "frames" in data:
                    acts.extend(data["frames"])

    master_payload = {
        "video_title": "United Wrestling Club Hero Anthem (Current Site)",
        "source_file": "UWC.mp4",
        "silent_file": "UWC_hero_silent.mp4",
        "specs": {
            "resolution": "848x480",
            "aspect_ratio": "16:9",
            "duration_seconds": 94.09,
            "duration_formatted": "01:34.09",
            "fps": 29.97,
            "total_frames": 2820,
            "video_codec": "H.264 (Baseline)",
            "original_audio": "AAC 44.1kHz Stereo (Stripped in silent master)"
        },
        "contact_sheet": {
            "image_path": "discovery/video_assets/contact_sheet.png",
            "sample_interval_seconds": 2.0,
            "total_samples": 47,
            "grid_dimensions": "6 columns x 8 rows (2400 x 2188 px)"
        },
        "acts": [
            {
                "act_number": 1,
                "title": "Facility, Culture & Youth Fundamentals",
                "time_range": "00:00 - 00:30",
                "key_themes": ["USA Olympic heritage", "Youth stance & motion", "East Bay community diversity"]
            },
            {
                "act_number": 2,
                "title": "High School Folkstyle, Scrambles & Hand-Fighting",
                "time_range": "00:30 - 01:00",
                "key_themes": ["Heavy collar ties", "Level changes", "Varsity high school sparring", "Mat returns"]
            },
            {
                "act_number": 3,
                "title": "Collegiate Instruction, Adult Wrestle-Jitsu & Brotherhood Huddle",
                "time_range": "01:00 - 01:34",
                "key_themes": ["Coach Karim & Naweed matside coaching", "Adult no-gi throws", "1-2-3 UNITED team breakdown"]
            }
        ],
        "inventory": acts
    }

    with open(MASTER_JSON, "w") as out_j:
        json.dump(master_payload, out_j, indent=2)
    print(f"Master JSON written with {len(acts)} scene entries to {MASTER_JSON}")

    # Build Master Markdown
    md_lines = [
        "# United Wrestling Club — Hero Video Asset Inventory & Tag Taxonomy",
        "",
        "> **Source Video:** `UWC.mp4` (`848x480`, 29.97 fps, 94.09s, 17.7 MB)  ",
        "> **Silent Master:** `discovery/video_assets/UWC_hero_silent.mp4` (Audio stripped, 16.6 MB)  ",
        "> **Contact Sheet:** [`discovery/video_assets/contact_sheet.png`](file:///Users/rodneylewis/Sprintz/clients/prospects/united-wrestling-club/discovery/video_assets/contact_sheet.png) (`2400 × 2188`, 47 sampled keyframes)  ",
        "> **JSON Inventory:** [`discovery/video_assets/video_inventory.json`](file:///Users/rodneylewis/Sprintz/clients/prospects/united-wrestling-club/discovery/video_assets/video_inventory.json)  ",
        "",
        "---",
        "",
        "## 1. Video Technical Profile & Rebuild Utilities",
        "",
        "| Specification | Value | Technical & SEO Application |",
        "| :--- | :--- | :--- |",
        "| **Original Resolution** | `848 × 480` (16:9 SD) | Optimal for fast mobile streaming; recommend upscaling via Topaz/Waifu2x or webm conversion for homepage background loop |",
        "| **Audio Track** | Stripped (Silent) | Eliminates mobile autoplay block; compliant with Safari/Chrome autoplay policy (`muted playsinline autoplay loop`) |",
        "| **Duration** | `01:34.09` (94s) | Too long for a single loop; best sliced into three 15–20s contextual video loops for specific landing pages |",
        "| **Total Frame Count** | 2,820 frames | Contains 60+ distinct rapid cuts ideal for micro-clips, social reels, and programmatic hero banners |",
        "",
        "---",
        "",
        "## 2. Master Keyframe Inventory Matrix",
        "",
        "| Timestamp | Frame | Scene Type | Action & Visual Description | Primary People | Key Taxonomy Tags | Rebuild B-Roll Utility |",
        "| :---: | :---: | :--- | :--- | :--- | :--- | :--- |"
    ]

    for item in acts:
        fid = item.get("frame_id", "")
        ts = item.get("timestamp", "")
        st = item.get("scene_type", "")
        desc = item.get("visual_description", "").replace("|", "-")
        ppl = ", ".join(item.get("people_identified", [])) if isinstance(item.get("people_identified"), list) else str(item.get("people_identified", ""))
        tags = " ".join([f"`{t}`" for t in item.get("tags", [])])
        util = item.get("b_roll_utility", "")
        md_lines.append(f"| **{ts}** | `{fid}` | {st} | {desc} | {ppl} | {tags} | {util} |")

    md_lines.extend([
        "",
        "---",
        "",
        "## 3. Web Architecture B-Roll Mapping",
        "",
        "### Loop A: Homepage Hero Background (`/` Hero Section)",
        "- **Target Window:** `00:00 – 00:18` (18s seamless cut)",
        "- **Scenes:** Olympic Flag zoom -> High-energy youth stance & motion -> Coach Karim eagle-eye stance -> Coach Naweed demonstrating level change.",
        "- **Encoding Recommendation:** Convert to WebM (VP9) + MP4 (H.264), capped at 1.8 MB for sub-second LCP score.",
        "",
        "### Loop B: Youth Academy Hero (`/classes/youth-wrestling` & `/classes/little-champs`)",
        "- **Target Window:** `00:04 – 00:26`",
        "- **Scenes:** Smiling youth stance drills, group sprawls, female youth wrestlers, structured discipline.",
        "- **Conversion Purpose:** Eliminates parent hesitation about gym safety, intimidation, and hygiene.",
        "",
        "### Loop C: High School / Elite Varsity Engine (`/classes/middle-high-school`)",
        "- **Target Window:** `00:32 – 00:58`",
        "- **Scenes:** Heavy collar-tie hand fighting, explosive low single legs, mat returns, intense scrambling.",
        "- **Conversion Purpose:** Proves room density and high-caliber sparring for MVAL/WACC competitors.",
        "",
        "### Loop D: Adult Wrestle-Jitsu & Sambo (`/classes/adult-wrestling`)",
        "- **Target Window:** `01:02 – 01:24`",
        "- **Scenes:** Adult no-gi takedown entries, clinch throws, mat wrestling.",
        "- **Conversion Purpose:** Directly appeals to BJJ blue/purple belts wanting takedown mastery without pulling guard.",
        ""
    ])

    with open(MASTER_MD, "w") as out_m:
        out_m.write("\n".join(md_lines))
    print(f"Master Markdown written to {MASTER_MD}")

if __name__ == "__main__":
    merge()
