#!/usr/bin/env python3
"""Check the built Astro site in site/dist.

- every local href/src resolves (a `/x/` link resolves to dist/x/index.html); #fragments exist on the target page
- url() references in dist/_astro/*.css resolve
- link rule (plan 4.2): a link to a route in site/src/data/routes.ts passes when that route is built, redirect, or planned;
  it fails for an omitted route. With --final, a link to a route that is not built or redirect fails.
- a `built` route with no output file fails (planned and redirect routes are checked by their owning group via --routes)
Usage: python3 scripts/check_dist.py [--routes /a/ /b/ ...] [--final] [--dist site/dist]
Exit 0 = clean, 1 = problems.
"""
import argparse
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Reuse the Tags parser from check_site.py without running its page loop.
_src = open(os.path.join(ROOT, "scripts", "check_site.py"), encoding="utf-8").read().split("def check_local")[0]
_ns = {"__file__": os.path.join(ROOT, "scripts", "check_site.py")}
exec(compile(_src, "check_site.py", "exec"), _ns)
Tags = _ns["Tags"]
SKIP = _ns["SKIP_PREFIXES"]


class DistTags(Tags):
    def __init__(self):
        super().__init__()
        self.ids = set()

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        # JS-driven modal triggers (href="#trial" has no target; PageScripts opens the modal). Known homepage gap, see phase1-log.
        if "open-trial-modal" in (a.get("class") or "").split() and (a.get("href") or "").startswith("#"):
            attrs = [(k, v) for k, v in attrs if k != "href"]
        super().handle_starttag(tag, attrs)
        if a.get("id"):
            self.ids.add(a["id"])
        if a.get("name") and tag == "a":
            self.ids.add(a["name"])


def load_routes():
    text = open(os.path.join(ROOT, "site", "src", "data", "routes.ts"), encoding="utf-8").read()
    text = text.split("machineFiles")[0]
    routes = {}
    for m in re.finditer(r"\{\s*path:\s*'([^']+)'[^}]*?status:\s*'(\w+)'", text):
        routes[m.group(1)] = m.group(2)
    return routes


def route_file(dist, path):
    return os.path.join(dist, path.strip("/"), "index.html") if path != "/" else os.path.join(dist, "index.html")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--routes", nargs="*")
    ap.add_argument("--final", action="store_true")
    ap.add_argument("--dist", default=os.path.join(ROOT, "site", "dist"))
    args = ap.parse_args()
    dist = os.path.abspath(args.dist)
    routes = load_routes()
    problems = []

    # 1. built/redirect routes must have an output file
    scope = args.routes if args.routes else [p for p, s in routes.items() if s == "built"]
    for p in scope:
        if routes.get(p) == "built" and not os.path.exists(route_file(dist, p)):
            problems.append(f"MISSING OUTPUT for {routes[p]} route {p}")
    if args.routes:
        for p in args.routes:
            if not os.path.exists(route_file(dist, p)):
                problems.append(f"MISSING OUTPUT for owned route {p}")
        pages = [route_file(dist, p) for p in args.routes if os.path.exists(route_file(dist, p))]
    else:
        pages = []
        for d, _, fs in os.walk(dist):
            pages += [os.path.join(d, f) for f in fs if f.endswith(".html")]
    cache = {}

    def parsed(path):
        if path not in cache:
            t = DistTags()
            t.feed(open(path, encoding="utf-8").read())
            cache[path] = t
        return cache[path]

    def url_path(page):
        rel = os.path.relpath(page, dist)
        return "/" + rel[: -len("index.html")] if rel.endswith("index.html") else "/" + rel

    checked = 0
    for page in sorted(pages):
        t = parsed(page)
        base = url_path(page)
        if t.stack:
            problems.append(f"{base}: {len(t.stack)} unclosed tags")
        for ref in t.refs:
            if not ref or ref.startswith(SKIP) and not ref.startswith("#"):
                continue
            checked += 1
            if ref.startswith("#"):
                frag = ref[1:]
                if frag and frag not in t.ids:
                    problems.append(f"{base}: #{frag} not found on the same page")
                continue
            path, _, frag = ref.partition("#")
            path = path.split("?")[0]
            if not path:
                continue
            if path.startswith("/"):
                target_url = path
            else:
                target_url = os.path.normpath(os.path.join(base if base.endswith("/") else os.path.dirname(base) + "/", path))
                if path.endswith("/") and not target_url.endswith("/"):
                    target_url += "/"
            if target_url in routes:
                st = routes[target_url]
                if st == "omitted":
                    problems.append(f"{base}: link to omitted route {target_url}")
                elif args.final and st not in ("built", "redirect"):
                    problems.append(f"{base}: --final: link to {st} route {target_url}")
                elif st in ("built", "redirect") and frag:
                    f = route_file(dist, target_url)
                    if os.path.exists(f) and frag not in parsed(f).ids:
                        problems.append(f"{base}: {target_url}#{frag} not found")
                continue
            fs_path = os.path.join(dist, target_url.lstrip("/"))
            if target_url.endswith("/"):
                fs_path = os.path.join(fs_path, "index.html")
            if not os.path.exists(fs_path):
                problems.append(f"{base}: missing target {ref}")
            elif frag and fs_path.endswith(".html") and frag not in parsed(fs_path).ids:
                problems.append(f"{base}: {ref} fragment not found")

    # 3. css url()
    cssdir = os.path.join(dist, "_astro")
    if os.path.isdir(cssdir):
        for f in sorted(os.listdir(cssdir)):
            if not f.endswith(".css"):
                continue
            text = open(os.path.join(cssdir, f), encoding="utf-8").read()
            for u in re.findall(r"url\(['\"]?([^'\")]+)['\"]?\)", text):
                if u.startswith(("http://", "https://", "data:", "#")):
                    continue
                u = u.split("?")[0].split("#")[0]
                target = os.path.join(dist, u.lstrip("/")) if u.startswith("/") else os.path.normpath(os.path.join(cssdir, u))
                checked += 1
                if not os.path.exists(target):
                    problems.append(f"_astro/{f}: missing url() {u}")

    for p in problems:
        print("PROBLEM", p)
    print(f"check_dist: {len(pages)} pages, {checked} references checked, {len(problems)} problems")
    return 1 if problems else 0


sys.exit(main())
