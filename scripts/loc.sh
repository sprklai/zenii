#!/usr/bin/env bash
# loc.sh — Count lines of code (excluding tests, comments, blanks)
# Uses tokei for accurate language-aware counting
#
# Usage:
#   ./scripts/loc.sh              # Summary by language
#   ./scripts/loc.sh --files      # Per-file breakdown
#   ./scripts/loc.sh --json       # JSON output (for website)
#   ./scripts/loc.sh --badge      # Shields.io badge URL

set -euo pipefail

MODE="summary"

while [[ $# -gt 0 ]]; do
    case "$1" in
        --files|-f)  MODE="files"; shift ;;
        --json|-j)   MODE="json"; shift ;;
        --badge|-b)  MODE="badge"; shift ;;
        -h|--help)
            echo "Usage: $0 [--files|--json|--badge]"
            echo ""
            echo "Counts lines of code excluding tests, comments, and blanks."
            echo ""
            echo "Options:"
            echo "  --files, -f   Per-file breakdown"
            echo "  --json, -j    JSON output for website integration"
            echo "  --badge, -b   Shields.io badge markdown"
            echo "  -h, --help    Show this help"
            exit 0
            ;;
        *) echo "Unknown argument: $1" >&2; exit 1 ;;
    esac
done

# Ensure tokei is available
if ! command -v tokei &>/dev/null; then
    echo "Error: tokei not found. Install with: cargo install tokei" >&2
    exit 1
fi

PROJECT_ROOT="$(cd "$(dirname "$0")/.." && pwd)"

# Directories/files to exclude (tests, generated, vendored, build artifacts)
EXCLUDES=(
    "target"
    "node_modules"
    ".svelte-kit"
    "build"
    "dist"
    "*.lock"
    "*.min.js"
    "*.min.css"
    "tests/"
    "test/"
    "no_commit"
    ".git"
    ".claude"
    "go2market"
)

# Build tokei exclude args
EXCLUDE_ARGS=()
for ex in "${EXCLUDES[@]}"; do
    EXCLUDE_ARGS+=("--exclude" "$ex")
done

# Common tokei args: skip tests, only count code lines
TOKEI_BASE=(tokei "$PROJECT_ROOT" "${EXCLUDE_ARGS[@]}")

human_number() {
    printf "%'d" "$1" 2>/dev/null || echo "$1"
}

case "$MODE" in
    summary)
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        echo "  MesoClaw — Lines of Code (excluding tests, comments, blanks)"
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        "${TOKEI_BASE[@]}"
        echo ""
        echo "  Note: 'Code' column = pure logic lines (no comments/blanks/tests)"
        ;;

    files)
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        echo "  MesoClaw — Per-File Lines of Code"
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        "${TOKEI_BASE[@]}" --files
        ;;

    json)
        # Output clean JSON for website consumption
        raw=$("${TOKEI_BASE[@]}" --output json)
        generated="$(date -u +%Y-%m-%dT%H:%M:%SZ)"

        echo "$raw" | python3 -c "
import json, sys

data = json.load(sys.stdin)

# Use tokei's own Total if present, otherwise sum manually
total_info = data.get('Total', {})
result = {
    'languages': {},
    'total': {
        'code': total_info.get('code', 0),
        'comments': total_info.get('comments', 0),
        'blanks': total_info.get('blanks', 0),
        'files': 0
    }
}

needs_manual_total = result['total']['code'] == 0

for lang, info in sorted(data.items()):
    if lang == 'Total':
        continue
    if not isinstance(info, dict) or 'code' not in info:
        continue
    code = info.get('code', 0)
    if code == 0:
        continue
    n_files = len(info.get('reports', []))
    result['languages'][lang] = {
        'code': code,
        'comments': info.get('comments', 0),
        'blanks': info.get('blanks', 0),
        'files': n_files
    }
    result['total']['files'] += n_files
    if needs_manual_total:
        result['total']['code'] += code
        result['total']['comments'] += info.get('comments', 0)
        result['total']['blanks'] += info.get('blanks', 0)

result['generated'] = '$generated'
print(json.dumps(result, indent=2))
" 2>/dev/null || echo "$raw"
        ;;

    badge)
        # Extract total code lines for a shields.io badge
        total=$("${TOKEI_BASE[@]}" --output json | python3 -c "
import json, sys
data = json.load(sys.stdin)
t = data.get('Total', {}).get('code', 0)
if t == 0:
    t = sum(info.get('code', 0) for lang, info in data.items() if lang != 'Total' and isinstance(info, dict) and 'code' in info)
print(t)
" 2>/dev/null || echo "0")

        # Format with K suffix
        if [[ "$total" -ge 1000 ]]; then
            label=$(awk "BEGIN { printf \"%.1fK\", $total / 1000 }")
        else
            label="$total"
        fi

        echo "Lines of code: $(human_number "$total")"
        echo ""
        echo "Shields.io badge URL:"
        echo "  https://img.shields.io/badge/lines_of_code-${label}-blue"
        echo ""
        echo "Markdown:"
        echo "  ![Lines of Code](https://img.shields.io/badge/lines_of_code-${label}-blue)"
        ;;
esac
