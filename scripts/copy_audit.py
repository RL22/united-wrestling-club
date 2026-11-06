#!/usr/bin/env python3
"""Copy audit implementation for scripts/copy_audit.sh (plan 6.4). Run from site/.

Checks over the given source folders and dist/ (HTML):
  1. em dash (U+2014)
  2. blocked claims (olympi, 1980, moscow, boycott, qualifier, aliyev, makhachkala, dagestan, medalist, ramazanov, kardanov,
     state champion, 1:6, 1 coach to 6, 3,000 sq, cross-linked, wi-fi, sibling, unanimous, 100% rec, 42+)
  3. prose day and time (Sat 10, Saturday 8, Mon-Fri 6) outside data/, ui/FactList, ui/ScheduleList
  4. phone numbers other than (510) 303-4869, tel: other than tel:5103034869
  5. formspree.io/f/<id> outside the four endpoints, xyyavaaj, "text us|me|(510)" outside ConsentSms.astro
  6. images on pages/components not in data/media.ts (src and dist)
Exemptions: the quote elements of plan 6.4 (homepage <p> whose raw inner hash is in scripts/copy_audit_allow.txt; /reviews/ quote
text equal to a body in data/reviews.ts; data/reviews.ts itself), the matching allowlist entry (file, line or element, SHA-256), and
allowlisted image paths (a match inside a data/media.ts path).
"""
import hashlib
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ALLOW_FILE = os.path.join(ROOT, "scripts", "copy_audit_allow.txt")
SITE = os.path.join(ROOT, "site")
args = [a for a in sys.argv[1:] if not a.startswith("--")]
SUGGEST = "--suggest" in sys.argv
if not args:
    print("usage: copy_audit.sh <src-or-dist path> ...")
    sys.exit(2)

BLOCK = re.compile(r"olympi|1980|moscow|boycott|qualifier|aliyev|makhachkala|dagestan|medalist|ramazanov|kardanov|state champion|1:6|1 coach to 6|3,000 sq|cross-linked|wi-fi|sibling|unanimous|100% rec|42\+", re.I)
DAYTIME = re.compile(r"Sat(urday)? *[0-9]|Mon.{0,3}Fri *[0-9]")
PHONE = re.compile(r"\(?\b\d{3}\)?[ .\-]\d{3}[ .\-]\d{4}\b")
TEL = re.compile(r"tel:[^\"'\s<>]+")
FORMSPREE = re.compile(r"formspree\.io/f/([A-Za-z0-9]+)")
TEXTUS = re.compile(r"text (us|me|\(510\))", re.I)
IMG = re.compile(r"""(?:src|poster)=["']([^"']+\.(?:jpe?g|png|webp|gif|svg|mp4))["']""", re.I)
ENDPOINTS = {"mkjjyyep", "mgaaddql", "meaanndk", "mqppnnja"}
ELEMENTS = {"p", "li", "span", "div", "h1", "h2", "h3", "h4", "h5", "h6", "a", "button", "label", "blockquote", "dd", "dt", "td", "strong", "em", "figcaption"}
VOID = {"area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"}


def sha(s):
    return hashlib.sha256(s.encode("utf-8")).hexdigest()


def read_allow():
    src, dist = [], set()
    for line in open(ALLOW_FILE, encoding="utf-8"):
        line = line.rstrip("\n")
        if not line or line.startswith("#"):
            continue
        parts = line.split("|")
        if parts[0] == "dist_sha256":
            dist.add(parts[3])
        else:
            src.append({"file": parts[0][5:] if parts[0].startswith("site/") else parts[0], "line": int(parts[1]), "hash": parts[2], "pattern": parts[3], "decision": parts[4] if len(parts) > 4 else ""})
    return src, dist


ALLOW_SRC, ALLOW_DIST = read_allow()
ALLOW_HASHES = {e["hash"] for e in ALLOW_SRC} | ALLOW_DIST


def elements(text):
    """List of (tag, inner_start, inner_end) for non-void elements, by a simple tag scan."""
    out, stack = [], []
    for m in re.finditer(r"<(/?)([a-zA-Z][a-zA-Z0-9]*)\b[^>]*?(/?)>", text):
        close, tag, selfc = m.group(1), m.group(2).lower(), m.group(3)
        if tag in VOID or selfc:
            continue
        if not close:
            stack.append((tag, m.end()))
        else:
            for i in range(len(stack) - 1, -1, -1):
                if stack[i][0] == tag:
                    t, start = stack[i]
                    out.append((t, start, m.start()))
                    del stack[i:]
                    break
    return out


def enclosing(text, els, pos):
    """Innermost <p>/<li>/... element whose inner content contains pos; returns (inner_text, start, end) or None."""
    best = None
    for tag, a, b in els:
        if tag in ELEMENTS and a <= pos < b and (best is None or b - a < best[2] - best[1]):
            best = (tag, a, b)
    if not best:
        return None
    return text[best[1]:best[2]], best[1], best[2]


def lineno(text, pos):
    return text.count("\n", 0, pos) + 1


def media_paths():
    t = open(os.path.join(SITE, "src", "data", "media.ts"), encoding="utf-8").read()
    return set(re.findall(r"src:\s*'([^']+)'", t))


def reviews_bodies():
    t = open(os.path.join(SITE, "src", "data", "reviews.ts"), encoding="utf-8").read()
    import json
    return {json.loads(m.group(1)) for m in re.finditer(r'body":\s*("(?:[^"\\]|\\.)*")', t)}


MEDIA = media_paths()
BODIES = reviews_bodies()
violations = []


def allowed_for(rel, text, els, pos, is_dist):
    el = enclosing(text, els, pos)
    if el:
        h = sha(el[0])
        if is_dist:
            return h in ALLOW_HASHES
        ln = lineno(text, pos)
        for e in ALLOW_SRC:
            if e["file"] == rel and e["hash"] == h and lineno(text, el[1]) <= e["line"] <= lineno(text, el[2]):
                return True
        return False
    if is_dist:
        # text outside any listed element (for example a <meta> attribute): the enclosing tag, hashed, must be allowlisted
        tag = text[text.rfind("<", 0, pos):text.find(">", pos) + 1]
        return sha(tag) in ALLOW_HASHES
    if not is_dist:
        line = text.split("\n")[lineno(text, pos) - 1]
        h = sha(line)
        return any(e["file"] == rel and e["hash"] == h and e["line"] == lineno(text, pos) for e in ALLOW_SRC)
    return False


def in_media_path(text, a, b):
    for p in MEDIA:
        i = text.find(p, max(0, a - len(p)), b + len(p))
        if i >= 0 and i <= a and b <= i + len(p):
            return True
    return False


def exempt_quote(rel, text, els, pos, is_dist):
    el = enclosing(text, els, pos)
    if not el:
        return False
    if sha(el[0]) in ALLOW_HASHES and (rel.endswith("home/Testimonials.astro") or rel in ("index.html",) or rel.endswith("Testimonials.astro")):
        return True
    if rel.endswith("data/reviews.ts"):
        return True
    norm = re.sub(r"\s+", " ", re.sub(r"<[^>]+>", "", el[0])).strip().strip("“”\"")
    if (rel.startswith("reviews/") or "reviews" in rel.split("/")[:2]) and any(norm and norm in re.sub(r"\s+", " ", b) for b in BODIES):
        return True
    return False


def scan_file(path, rel, is_dist):
    try:
        text = open(path, encoding="utf-8").read()
    except UnicodeDecodeError:
        return
    els = elements(text) if (path.endswith((".astro", ".html"))) else []
    in_data = "/data/" in "/" + rel or rel.startswith("data/")
    is_reviews_data = rel.endswith("data/reviews.ts")

    def report(kind, m, extra=""):
        pos = m.start()
        if is_reviews_data:
            return
        if exempt_quote(rel, text, els, pos, is_dist):
            return
        if kind in ("em dash", "blocked") and (allowed_for(rel, text, els, pos, is_dist) or in_media_path(text, m.start(), m.end())):
            return
        el = enclosing(text, els, pos)
        h = sha(el[0]) if el else sha(text.split("\n")[lineno(text, pos) - 1])
        ctx = (el[0] if el else text.split("\n")[lineno(text, pos) - 1]).strip()
        violations.append((rel, lineno(text, pos), kind, m.group(0), h, re.sub(r"\s+", " ", ctx)[:110], extra))

    for m in re.finditer("—", text):
        report("em dash", m)
    for m in BLOCK.finditer(text):
        report("blocked", m)
    base = os.path.basename(rel)
    if not (in_data or base in ("FactList.astro", "ScheduleList.astro")):
        for m in DAYTIME.finditer(text):
            if not allowed_for(rel, text, els, m.start(), is_dist):
                report("day/time prose", m)
    for m in PHONE.finditer(text):
        if re.sub(r"\D", "", m.group(0)) != "5103034869" and not re.search(r"\d{4}-\d{2}-\d{2}|\d{10,}", text[max(0, m.start() - 12):m.end() + 12]):
            report("phone", m)
    for m in TEL.finditer(text):
        if m.group(0) != "tel:5103034869":
            report("tel", m)
    for m in FORMSPREE.finditer(text):
        if m.group(1) not in ENDPOINTS:
            report("formspree id", m)
    for m in re.finditer("xyyavaaj", text):
        report("xyyavaaj", m)
    if base != "ConsentSms.astro" and not is_reviews_data:
        for m in TEXTUS.finditer(text):
            if "dist" in rel.split("/")[0] and "sms_opt_in" in text[max(0, m.start() - 400):m.end() + 400]:
                continue  # the consent label rendered from ConsentSms.astro
            report("text-us", m)
    # images: only on new pages and page components (the homepage and shared shell keep today's images)
    new_page = (rel.startswith("src/pages/") and base != "index.astro") or "/components/pages/" in rel or (rel.startswith("dist/") and rel != "dist/index.html" and rel.endswith(".html"))
    if new_page:
        for m in IMG.finditer(text):
            p = m.group(1)
            if p not in MEDIA and not p.startswith(("/assets/", "/_astro/", "data:")) and not p.endswith(".svg"):
                report("image not in media.ts", m)


for a in args:
    root = os.path.join(SITE, a) if not os.path.isabs(a) and os.path.exists(os.path.join(SITE, a)) else a
    if os.path.isfile(root):
        scan_file(root, os.path.relpath(root, SITE), a.startswith("dist"))
        continue
    is_dist = a.rstrip("/").endswith("dist")
    for d, _, fs in os.walk(root):
        for f in sorted(fs):
            if not f.endswith((".astro", ".ts", ".html", ".css", ".mjs", ".js", ".txt", ".xml", ".md")):
                continue
            if is_dist and not f.endswith((".html", ".txt", ".xml")):
                continue
            if f.endswith(".d.ts"):
                continue
            p = os.path.join(d, f)
            scan_file(p, os.path.relpath(p, SITE), is_dist)

if SUGGEST:
    for rel, ln, kind, m, h, ctx, extra in violations:
        print(f"{rel}|{ln}|{h}|{kind}:{m}|TODO  # {ctx}")
    sys.exit(0)
for rel, ln, kind, m, h, ctx, extra in violations:
    print(f"FAIL {rel}:{ln} {kind} {m!r}  [{h[:12]}] {ctx}")
print(f"copy_audit: {len(violations)} violations")
sys.exit(1 if violations else 0)
