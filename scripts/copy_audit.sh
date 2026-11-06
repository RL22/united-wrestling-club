#!/usr/bin/env bash
# Copy audit (plan 6.4). Usage (from site/): bash ../scripts/copy_audit.sh src dist   or   bash ../scripts/copy_audit.sh src/pages src/components/pages dist
#   --suggest   print allowlist entries (with hashes) for the current violations instead of failing
exec python3 "$(dirname "$0")/copy_audit.py" "$@"
