#!/usr/bin/env python3
"""Static site check for the UWC site pages.

For each page: parse the HTML (unclosed-tag count) and confirm every local
href, src, and CSS url() target exists on disk. External links are skipped.
Usage: python3 scripts/check_site.py
Exit code 0 = clean, 1 = problems found.
"""
import os
import re
import sys
from html.parser import HTMLParser

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PAGES = ["v01/index.html", "reviews/index.html", "register/index.html",
         "contact/index.html", "about/index.html", "submit-review/index.html"]
VOID = {"area", "base", "br", "col", "embed", "hr", "img", "input", "link",
        "meta", "param", "source", "track", "wbr"}
SKIP_PREFIXES = ("http://", "https://", "mailto:", "tel:", "sms:", "#", "data:", "javascript:")


class Tags(HTMLParser):
    def __init__(self):
        super().__init__()
        self.stack = []
        self.refs = []

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag not in VOID:
            self.stack.append(tag)
        for key in ("href", "src"):
            if a.get(key):
                self.refs.append(a[key])

    def handle_endtag(self, tag):
        if tag not in VOID and self.stack and self.stack[-1] == tag:
            self.stack.pop()


def check_local(page_dir, ref):
    ref = ref.split("#")[0].split("?")[0]
    if not ref or ref.startswith(SKIP_PREFIXES):
        return True
    target = os.path.normpath(os.path.join(page_dir, ref))
    if ref.endswith("/"):
        target = os.path.join(target, "index.html")
    return os.path.exists(target)


problems = 0
for page in PAGES:
    path = os.path.join(ROOT, page)
    if not os.path.exists(path):
        print(f"MISSING PAGE {page}")
        problems += 1
        continue
    text = open(path, encoding="utf-8").read()
    p = Tags()
    p.feed(text)
    page_dir = os.path.dirname(path)
    bad = [r for r in p.refs if not check_local(page_dir, r)]
    # CSS url() inside the page and in the shared stylesheet (resolved from the stylesheet's folder)
    css_refs = re.findall(r"url\(['\"]?([^'\")]+)['\"]?\)", text)
    css_bad = [r for r in css_refs if not check_local(page_dir, r)]
    css_path = os.path.join(ROOT, "assets/css/uwc.css")
    shared = re.findall(r"url\(['\"]?([^'\")]+)['\"]?\)", open(css_path, encoding="utf-8").read())
    shared_bad = [r for r in shared if not check_local(os.path.dirname(css_path), r)]
    status = "OK" if not (p.stack or bad or css_bad or shared_bad) else "PROBLEM"
    print(f"{status}  {page}  unclosed={len(p.stack)}  missing_refs={len(bad)}  missing_css_urls={len(css_bad) + len(shared_bad)}")
    for r in bad:
        print(f"    missing ref: {r}")
    for r in css_bad + shared_bad:
        print(f"    missing css url: {r}")
    if p.stack or bad or css_bad or shared_bad:
        problems += 1

sys.exit(1 if problems else 0)
