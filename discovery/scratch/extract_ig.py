import re, urllib.request, os

with open("video_assets/instagram_us_open_2025/page.html") as f:
    html = f.read()

# Look for display_url or image URLs in JSON data embedded in page
matches = re.findall(r'"display_url":"(https:[^"]+)"', html)
matches += re.findall(r'"thumbnail_src":"(https:[^"]+)"', html)
matches += re.findall(r'https://[^\s"\'<>]+\.cdninstagram\.com/[^\s"\'<>]+', html)

clean_urls = []
for m in matches:
    u = m.replace(r"\u0026", "&").replace("&amp;", "&").replace(r"\/", "/")
    if u not in clean_urls:
        clean_urls.append(u)

print(f"Found {len(clean_urls)} clean URLs")
for i, u in enumerate(clean_urls):
    print(f"[{i}] {u}")
