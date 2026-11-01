#!/usr/bin/env python3
"""
Generate a professional, high-resolution contact sheet for UWC.mp4 with timestamps,
frame numbers, and technical metadata.
"""

import os
import glob
from PIL import Image, ImageDraw, ImageFont

FRAMES_DIR = "/Users/rodneylewis/Sprintz/clients/prospects/united-wrestling-club/discovery/video_assets/frames"
OUTPUT_PATH = "/Users/rodneylewis/Sprintz/clients/prospects/united-wrestling-club/discovery/video_assets/contact_sheet.png"
OUTPUT_ARTIFACT_PATH = "/Users/rodneylewis/.gemini/antigravity/brain/58c04644-f80e-49d0-b5bc-21ecd0237549/contact_sheet.png"

def create_contact_sheet():
    frame_files = sorted(glob.glob(os.path.join(FRAMES_DIR, "thumb_*.jpg")))
    if not frame_files:
        print("No frames found!")
        return

    cols = 6
    num_frames = len(frame_files)
    # 47 frames + 1 branding card = 48 items -> 6 cols x 8 rows
    rows = (num_frames + 1 + cols - 1) // cols

    thumb_w = 380
    thumb_h = 215
    footer_h = 28
    cell_w = thumb_w
    cell_h = thumb_h + footer_h
    gap = 12
    margin = 30
    header_h = 100

    total_w = margin * 2 + cols * cell_w + (cols - 1) * gap
    total_h = margin * 2 + header_h + rows * cell_h + (rows - 1) * gap

    sheet = Image.new("RGB", (total_w, total_h), color="#0D0E11")
    draw = ImageDraw.Draw(sheet)

    # Fonts
    try:
        font_title = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 28)
        font_meta = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 13)
        font_tag = ImageFont.truetype("/System/Library/Fonts/Menlo.ttc", 13)
        font_brand = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 20)
    except Exception:
        font_title = ImageFont.load_default()
        font_meta = font_title
        font_tag = font_title
        font_brand = font_title

    # Header
    draw.text((margin, margin), "UNITED WRESTLING CLUB — HERO VIDEO CONTACT SHEET", fill="#FFFFFF", font=font_title)
    meta_text = (
        "Source: UWC.mp4  |  Silent Copy: UWC_hero_silent.mp4  |  Dimensions: 848x480  |  Duration: 01:34.09 (94.09s)\n"
        "Framerate: 29.97 fps  |  Total Frames: 2,820  |  Sampling: 1 frame every 2.0s  |  Total Samples: 47 Keyframes"
    )
    draw.text((margin, margin + 42), meta_text, fill="#9CA3AF", font=font_meta)

    # Accent line
    draw.line([(margin, margin + header_h - 10), (total_w - margin, margin + header_h - 10)], fill="#E53E3E", width=3)

    # Grid
    for idx, fpath in enumerate(frame_files):
        r = idx // cols
        c = idx % cols
        x = margin + c * (cell_w + gap)
        y = margin + header_h + r * (cell_h + gap)

        img = Image.open(fpath)
        img = img.resize((thumb_w, thumb_h), Image.Resampling.LANCZOS)
        sheet.paste(img, (x, y))

        # Footer background
        draw.rectangle([x, y + thumb_h, x + thumb_w, y + cell_h], fill="#181A20")
        draw.rectangle([x, y, x + thumb_w, y + cell_h], outline="#2A2D36", width=1)

        # Calculate timestamp (idx * 2 seconds)
        seconds = idx * 2
        mins = seconds // 60
        secs = seconds % 60
        ts_str = f"{mins:02d}:{secs:02d}"
        frame_str = f"#{idx+1:02d}"

        # Draw timestamp and index
        draw.text((x + 8, y + thumb_h + 6), ts_str, fill="#38BDF8", font=font_tag)
        draw.text((x + thumb_w - 38, y + thumb_h + 6), frame_str, fill="#9CA3AF", font=font_tag)

    # Final 48th cell: Brand Outro Card
    if len(frame_files) < cols * rows:
        idx = len(frame_files)
        r = idx // cols
        c = idx % cols
        x = margin + c * (cell_w + gap)
        y = margin + header_h + r * (cell_h + gap)

        draw.rectangle([x, y, x + thumb_w, y + cell_h], fill="#14161C", outline="#39FF14", width=2)
        draw.text((x + 20, y + 40), "UNITED WRESTLING CLUB", fill="#FFFFFF", font=font_brand)
        draw.text((x + 20, y + 75), "Hayward, California", fill="#39FF14", font=font_meta)
        draw.text((x + 20, y + 105), "Olympic Lineage  •  Dagestani Craft", fill="#9CA3AF", font=font_meta)
        draw.text((x + 20, y + 130), "unitedwrestlingclub.com", fill="#38BDF8", font=font_meta)
        draw.text((x + 20, y + thumb_h + 6), "OUTRO / END", fill="#39FF14", font=font_tag)

    sheet.save(OUTPUT_PATH, "PNG", quality=95)
    sheet.save(OUTPUT_ARTIFACT_PATH, "PNG", quality=95)
    print(f"Contact sheet saved to {OUTPUT_PATH} and {OUTPUT_ARTIFACT_PATH} ({total_w}x{total_h})")

if __name__ == "__main__":
    create_contact_sheet()
