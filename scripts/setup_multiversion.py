import re
import os

def adjust_paths(html):
    # Adjust relative href, src, poster
    html = re.sub(r'(href|src|poster)=["\'](live_site_content/[^"\']+)["\']', r'\1="../\2"', html)
    html = re.sub(r'(href|src|poster)=["\'](video_assets/[^"\']+)["\']', r'\1="../\2"', html)
    html = re.sub(r'url\(["\']?unsplash-grunge-001\.jpg["\']?\)', "url('../unsplash-grunge-001.jpg')", html)
    return html

os.makedirs("v01", exist_ok=True)
os.makedirs("02", exist_ok=True)
os.makedirs("v02", exist_ok=True)

with open("index.html", "r", encoding="utf-8") as f:
    v01_html = adjust_paths(f.read())
with open("v01/index.html", "w", encoding="utf-8") as f:
    f.write(v01_html)

with open("discovery/homepage_creative_freedom.html", "r", encoding="utf-8") as f:
    v02_html = adjust_paths(f.read())
with open("02/index.html", "w", encoding="utf-8") as f:
    f.write(v02_html)
with open("v02/index.html", "w", encoding="utf-8") as f:
    f.write(v02_html)

print("Generated v01/index.html:", len(v01_html))
print("Generated 02/index.html:", len(v02_html))
print("Generated v02/index.html:", len(v02_html))
