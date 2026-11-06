#!/usr/bin/env node
// Usage: node scripts/fingerprint-diff.mjs <baseline.json> <current.json> [--allow <file>] [--emit-allow <file> [--emit-scope <section>]]
// Matches by pass > state > section > path key. Rect tolerance 0.5px; computed values exact. Also compares *-text.json files (kind "text").
// Allow file: JSON array of EXACT entries
//   { section, path, pass, state, width, property, old, new }
//   property: a CSS property, "rect", "class", or "(element)" (added/removed element; old/new = class string or null).
//   rect old/new are the rect as "x,y,w,h". Wildcards and missing fields are rejected. Unused allow entries are an error (diff must equal the file).
// --emit-allow writes every difference as an entry. With --emit-scope <section>, any difference outside that section, or of a kind other
//   than removed element / height / rect, is rejected (exit 1, nothing written).
import fs from 'node:fs';

const a = process.argv.slice(2);
const flag = (n) => { const i = a.indexOf('--' + n); return i < 0 ? null : a[i + 1]; };
const files = a.filter((x, i) => !x.startsWith('--') && !['--allow', '--emit-allow', '--emit-scope'].includes(a[i - 1]));
if (files.length < 2) { console.error('usage: fingerprint-diff <baseline> <current> [--allow f] [--emit-allow f] [--emit-scope section]'); process.exit(2); }
const base = JSON.parse(fs.readFileSync(files[0], 'utf8'));
const cur = JSON.parse(fs.readFileSync(files[1], 'utf8'));
const width = cur.width ?? base.width;
const FIELDS = ['section', 'path', 'pass', 'state', 'width', 'property', 'old', 'new'];

let allow = [];
if (flag('allow')) {
  allow = JSON.parse(fs.readFileSync(flag('allow'), 'utf8'));
  for (const e of allow) {
    for (const f of FIELDS) if (!(f in e) || e[f] === '*' || e[f] === undefined) { console.error(`bad allow entry (missing/wildcard ${f}): ${JSON.stringify(e)}`); process.exit(2); }
    if (JSON.stringify(e).includes('"*"')) { console.error(`wildcard in allow entry: ${JSON.stringify(e)}`); process.exit(2); }
  }
}
const sameEntry = (e, d) => FIELDS.every(f => e[f] === d[f]);

const diffs = [];
const push = (pass, state, section, path, property, o, n) => diffs.push({ section, path, pass, state, width, property, old: o ?? null, new: n ?? null });

if (base.kind === 'text' || cur.kind === 'text') {
  for (const k of new Set([...Object.keys(base.sections), ...Object.keys(cur.sections)]))
    if (base.sections[k] !== cur.sections[k]) push('text', 'default', k, '(text)', 'innerText', base.sections[k], cur.sections[k]);
} else {
  const passes = new Set([...Object.keys(base.passes), ...Object.keys(cur.passes)]);
  for (const pass of passes) {
    const bp = base.passes[pass], cp = cur.passes[pass];
    if (!bp || !cp) { push(pass, '*', '*', '*', '(pass)', bp ? 'present' : null, cp ? 'present' : null); continue; }
    for (const st of new Set([...Object.keys(bp), ...Object.keys(cp)])) {
      const bs = bp[st], cs = cp[st];
      if (!bs || !cs) { push(pass, st, '*', '*', '(state)', bs ? 'present' : null, cs ? 'present' : null); continue; }
      for (const sec of new Set([...Object.keys(bs), ...Object.keys(cs)])) {
        const b = bs[sec], c = cs[sec];
        if (!b || !c) { if (!!b !== !!c) push(pass, st, sec, '(root)', '(element)', b ? 'present' : null, c ? 'present' : null); continue; }
        for (const p of new Set([...Object.keys(b), ...Object.keys(c)])) {
          const x = b[p], y = c[p];
          if (!x) { push(pass, st, sec, p, '(element)', null, y.cls ?? 'present'); continue; }
          if (!y) { push(pass, st, sec, p, '(element)', x.cls ?? 'present', null); continue; }
          if (x.skipped || y.skipped) { if (!!x.skipped !== !!y.skipped) push(pass, st, sec, p, '(skipped)', String(!!x.skipped), String(!!y.skipped)); continue; }
          if (x.cls !== y.cls) push(pass, st, sec, p, 'class', x.cls, y.cls);
          if (x.rect && y.rect && x.rect.some((v, i) => Math.abs(v - y.rect[i]) > 0.5)) push(pass, st, sec, p, 'rect', x.rect.join(','), y.rect.join(','));
          for (const k of new Set([...Object.keys(x.css), ...Object.keys(y.css)]))
            if (x.css[k] !== y.css[k]) push(pass, st, sec, p, k, x.css[k], y.css[k]);
        }
      }
    }
  }
}

if (flag('emit-allow')) {
  const scope = flag('emit-scope');
  if (scope) {
    const bad = diffs.filter(d => d.section !== scope || !(d.property === '(element)' && d.new === null || d.property === 'height' || d.property === 'rect'));
    if (bad.length) { for (const d of bad.slice(0, 20)) console.log(`REJECT ${JSON.stringify(d)}`); console.log(`${bad.length} differences outside scope/kinds; nothing written`); process.exit(1); }
  }
  fs.writeFileSync(flag('emit-allow'), JSON.stringify(diffs, null, 1) + '\n');
  console.log(`wrote ${diffs.length} entries to ${flag('emit-allow')}`);
  process.exit(0);
}

const used = new Set();
const bad = [];
for (const d of diffs) {
  const i = allow.findIndex(e => sameEntry(e, d));
  if (i >= 0) used.add(i); else bad.push(d);
}
const unused = allow.filter((_, i) => !used.has(i));
for (const d of bad) console.log(`DIFF [${d.pass}/${d.state}] ${d.section} ${d.path} ${d.property}: ${d.old} -> ${d.new}`);
for (const e of unused) console.log(`UNUSED allow entry ${JSON.stringify(e)}`);
console.log(`${diffs.length} differences, ${bad.length} not allowed, ${unused.length} unused allow entries (width ${width})`);
process.exit(bad.length || unused.length ? 1 : 0);
