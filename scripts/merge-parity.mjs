#!/usr/bin/env node
// DS-3: merge the "Cascade parity" copy of a component's scoped <style> into the first copy (parity value wins where they differ).
// Usage: node scripts/merge-parity.mjs src/components/Foo.astro [--dry]
import fs from 'node:fs';
import postcss from 'postcss';

const file = process.argv[2];
const dry = process.argv.includes('--dry');
const text = fs.readFileSync(file, 'utf8');
const open = text.match(/<style\b[^>]*>/);
const close = text.lastIndexOf('</style>');
const marker = text.indexOf('/* Cascade parity');
if (!open || close < 0 || marker < 0) { console.error(`${file}: no parity block`); process.exit(1); }
if (text.indexOf('<style', open.index + 1) !== -1 && text.indexOf('<style', open.index + 1) < close) { console.error(`${file}: more than one <style>`); process.exit(1); }
const bodyStart = open.index + open[0].length;
const first = text.slice(bodyStart, marker);
const parity = text.slice(marker, close);

const ws = (s) => s.replace(/\s+/g, ' ').trim();
const chainOf = (n) => { const c = []; for (let p = n.parent; p && p.type !== 'root'; p = p.parent) if (p.type === 'atrule') c.unshift(`@${p.name} ${ws(p.params)}`); return c.join(' | '); };
const keyOf = (r) => chainOf(r) + ' || ' + ws(r.selector);

const A = postcss.parse(first), B = postcss.parse(parity);
const byKey = new Map();
A.walkRules((r) => { if (r.parent.type === 'atrule' && /keyframes$/.test(r.parent.name)) return; byKey.set(keyOf(r), r); }); // last wins
const unmatched = [];
let overridden = 0, added = 0;
B.walkRules((pr) => {
  if (pr.parent.type === 'atrule' && /keyframes$/.test(pr.parent.name)) return;
  const k = keyOf(pr);
  const target = byKey.get(k);
  if (!target) { unmatched.push(pr); return; }
  pr.each((d) => {
    if (d.type !== 'decl') return;
    let found = null;
    target.each((x) => { if (x.type === 'decl' && x.prop.toLowerCase() === d.prop.toLowerCase()) found = x; });
    if (found) { if (found.value !== d.value || found.important !== d.important) { found.value = d.value; found.important = d.important; overridden++; } }
    else { const c = d.clone(); c.raws.before = target.last?.raws?.before ?? '\n      '; target.append(c); added++; }
  });
});
for (const pr of unmatched) {
  const chain = chainOf(pr);
  const clone = pr.clone();
  clone.raws.before = '\n\n';
  if (!chain) A.append(clone);
  else {
    // rebuild the at-rule chain (media only) around the clone
    const parts = chain.split(' | ').map((s) => s.slice(1)); let node = clone;
    for (const part of parts.reverse()) { const sp = part.indexOf(' '); const at = postcss.atRule({ name: part.slice(0, sp), params: part.slice(sp + 1) }); at.raws.before = '\n\n'; at.append(node); node = at; }
    A.append(node);
  }
}
console.log(`${file}: overridden ${overridden}, added ${added}, unmatched parity rules appended ${unmatched.length}${unmatched.length ? ' [' + unmatched.map((r) => keyOf(r)).join('; ') + ']' : ''}`);
if (dry) process.exit(0);
const merged = A.toString().replace(/\s+$/, '\n');
fs.writeFileSync(file, text.slice(0, bodyStart) + merged + text.slice(close));
