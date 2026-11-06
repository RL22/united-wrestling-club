"""HTML tag parser shared by the built-site checker (scripts/check_dist.py).

Moved out of the legacy checker scripts/check_site.py, which is being archived.
"""
from html.parser import HTMLParser

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
