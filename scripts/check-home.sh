#!/usr/bin/env bash
# Usage: scripts/check-home.sh <B1> [allow-file-with-%w-for-width]   (run from site/; build + preview on ${PORT} + diff vs baseline)
# Exit 0 only if every width, the text diff, and the pixel diff pass.
set -u; PORT=${PORT:-4340}
BASE=${1:?baseline name}; ALLOW=${2:-}
N="mise exec node@26.13.0 --"
cd "$(dirname "$0")/.."
$N npm run build >output/ds-build.log 2>&1 || { echo "BUILD FAIL"; tail -20 output/ds-build.log; exit 1; }
pkill -f "$PWD/node_modules/astro/bin/astro.mjs preview" 2>/dev/null; sleep 1
($N npm run preview -- --port ${PORT} >output/ds-preview.log 2>&1 &)
for i in $(seq 1 30); do curl -sf http://localhost:${PORT}/ >/dev/null && break; sleep 1; done
rm -rf output/ds/home*; mkdir -p output/ds
$N node scripts/fingerprint.mjs --url http://localhost:${PORT}/ --sections home --shots --out output/ds/home >output/ds-fp.log 2>&1 || { echo "FP FAIL"; tail output/ds-fp.log; exit 1; }
$N node scripts/fingerprint.mjs --url http://localhost:${PORT}/ --text --out output/ds/home >>output/ds-fp.log 2>&1 || { echo "TEXT FAIL"; tail output/ds-fp.log; exit 1; }
rc=0
for w in 375 600 768 900 1024 1100 1240 1248; do
  A=(); [ -n "$ALLOW" ] && A=(--allow "${ALLOW//%w/$w}"); $N node scripts/fingerprint-diff.mjs tests/baselines/$BASE/home-$w.json output/ds/home-$w.json "${A[@]}" >output/ds-diff-$w.log 2>&1; r=$?; echo "fp-diff $w exit=$r $(tail -1 output/ds-diff-$w.log)"; [ $r -ne 0 ] && rc=1
done
$N node scripts/fingerprint-diff.mjs tests/baselines/$BASE/home-text.json output/ds/home-text.json >output/ds-diff-text.log 2>&1; r=$?; echo "text-diff exit=$r $(tail -1 output/ds-diff-text.log)"; [ $r -ne 0 ] && rc=1
$N node scripts/pixel-diff.mjs tests/baselines/$BASE/home-shots output/ds/home-shots >output/ds-pixel.log 2>&1; r=$?; echo "pixel-diff exit=$r $(tail -1 output/ds-pixel.log)"; [ $r -ne 0 ] && rc=1
exit $rc
