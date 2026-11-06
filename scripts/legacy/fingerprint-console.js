// Computed-style fingerprint, grouped by top-level body child.
// Paste as a page expression (javascript_tool), or run in any browser console.
// Returns { w, groups: { <section key>: <hash> } }. Compare against tests/baseline/*.json.
(() => {
  const groups = {};
  document.querySelectorAll('body *').forEach((e) => {
    if (e.closest('script,style')) return;
    let top = e;
    while (top.parentElement && top.parentElement !== document.body) top = top.parentElement;
    const key = (top.id || top.className || top.tagName).toString().trim().split(' ')[0] || top.tagName;
    const cs = getComputedStyle(e);
    const r = e.getBoundingClientRect();
    const cls = typeof e.className === 'string' ? e.className.replace(/\s+/g, ' ').trim() : '';
    const line = [e.tagName, cls, Math.round(r.x), Math.round(r.y + scrollY), Math.round(r.width), Math.round(r.height),
      cs.display, cs.position, cs.fontSize, cs.fontWeight, cs.color, cs.backgroundColor, cs.marginTop, cs.paddingTop].join('|');
    (groups[key] = groups[key] || []).push(line);
  });
  const res = {};
  for (const k in groups) {
    const s = groups[k].join('\n');
    let h = 5381;
    for (const c of s) h = ((h << 5) + h + c.charCodeAt(0)) | 0;
    res[k] = (h >>> 0).toString(16);
  }
  return { w: innerWidth, groups: res };
})()
