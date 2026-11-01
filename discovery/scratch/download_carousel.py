import re, urllib.request

with open("video_assets/instagram_us_open_2025/item1.html") as f:
    html = f.read()

# Replace escaped slashes
normalized = html.replace(r"\/", "/").replace(r"\u0026", "&").replace("&amp;", "&")

urls = re.findall(r'https://scontent[^\s"\'<>]+', normalized)
carousel_urls = []
for u in urls:
    if "CAROUSEL_ITEM" in u and u not in carousel_urls:
        carousel_urls.append(u)

print(f"Found {len(carousel_urls)} unique carousel image URLs")
for i, u in enumerate(carousel_urls):
    out_path = f"video_assets/instagram_us_open_2025/carousel_img_{i+1:02d}.jpg"
    print(f"Downloading {i+1} -> {out_path}")
    try:
        urllib.request.urlretrieve(u, out_path)
    except Exception as e:
        print(f"Error: {e}")
