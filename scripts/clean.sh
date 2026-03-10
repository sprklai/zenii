#!/usr/bin/env bash
# MesoClaw -- Clean Build Artifacts
# Usage: ./scripts/clean.sh [OPTIONS]
#
#   --all         Clean everything (default if no flags)
#   --rust        cargo clean (target/)
#   --web         web build artifacts (.svelte-kit/, build/)
#   --node        node_modules/
#   --tauri       Tauri generated files (gen/, preserves gen/schemas)
#   --dry-run     Show what would be cleaned without deleting
#   -h, --help    Show this help message

set -euo pipefail

WORKSPACE_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$WORKSPACE_ROOT"

# ── Colors ─────────────────────────────────────────────────────────────
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
BOLD='\033[1m'
NC='\033[0m'

info()  { echo -e "${BLUE}[INFO]${NC}  $*"; }
ok()    { echo -e "${GREEN}[CLEAN]${NC} $*"; }
warn()  { echo -e "${YELLOW}[SKIP]${NC}  $*"; }
dry()   { echo -e "${YELLOW}[DRY]${NC}   $*"; }

# ── Flags ──────────────────────────────────────────────────────────────
DO_RUST=false
DO_WEB=false
DO_NODE=false
DO_TAURI=false
DRY_RUN=false
ANY_FLAG=false

usage() {
    sed -n '2,/^$/s/^# //p' "$0"
    exit 0
}

while [[ $# -gt 0 ]]; do
    case "$1" in
        --all)    DO_RUST=true; DO_WEB=true; DO_NODE=true; DO_TAURI=true; ANY_FLAG=true ;;
        --rust)   DO_RUST=true; ANY_FLAG=true ;;
        --web)    DO_WEB=true; ANY_FLAG=true ;;
        --node)   DO_NODE=true; ANY_FLAG=true ;;
        --tauri)  DO_TAURI=true; ANY_FLAG=true ;;
        --dry-run) DRY_RUN=true ;;
        -h|--help) usage ;;
        *) echo "Unknown option: $1"; usage ;;
    esac
    shift
done

# No category flags = --all
if [[ "$ANY_FLAG" == false ]]; then
    DO_RUST=true
    DO_WEB=true
    DO_NODE=true
    DO_TAURI=true
fi

echo ""
echo -e "${BOLD}MesoClaw — Clean Build Artifacts${NC}"
if [[ "$DRY_RUN" == true ]]; then
    echo -e "${YELLOW}(dry-run mode — nothing will be deleted)${NC}"
fi
echo ""

# ── Helpers ────────────────────────────────────────────────────────────
TOTAL_FREED=0

# Get directory size in bytes, 0 if missing
dir_size_bytes() {
    if [[ -d "$1" ]]; then
        du -sb "$1" 2>/dev/null | cut -f1
    else
        echo 0
    fi
}

# Human-readable size
human_size() {
    local bytes=$1
    if (( bytes >= 1073741824 )); then
        echo "$(awk "BEGIN {printf \"%.1f\", $bytes/1073741824}")GB"
    elif (( bytes >= 1048576 )); then
        echo "$(awk "BEGIN {printf \"%.1f\", $bytes/1048576}")MB"
    elif (( bytes >= 1024 )); then
        echo "$(awk "BEGIN {printf \"%.1f\", $bytes/1024}")KB"
    else
        echo "${bytes}B"
    fi
}

remove_dir() {
    local dir="$1"
    local label="$2"
    if [[ ! -d "$dir" ]]; then
        warn "$label — not found"
        return
    fi
    local size
    size=$(dir_size_bytes "$dir")
    if [[ "$DRY_RUN" == true ]]; then
        dry "$label — $(human_size "$size") (would remove $dir)"
    else
        rm -rf "$dir"
        ok "$label — freed $(human_size "$size")"
    fi
    TOTAL_FREED=$((TOTAL_FREED + size))
}

# ── Rust (cargo clean) ────────────────────────────────────────────────
if [[ "$DO_RUST" == true ]]; then
    if [[ -d "$WORKSPACE_ROOT/target" ]]; then
        size=$(dir_size_bytes "$WORKSPACE_ROOT/target")
        if [[ "$DRY_RUN" == true ]]; then
            dry "Cargo target/ — $(human_size "$size") (would run cargo clean)"
        else
            cargo clean 2>/dev/null
            ok "Cargo target/ — freed $(human_size "$size")"
        fi
        TOTAL_FREED=$((TOTAL_FREED + size))
    else
        warn "Cargo target/ — not found"
    fi
fi

# ── Web build artifacts ───────────────────────────────────────────────
if [[ "$DO_WEB" == true ]]; then
    remove_dir "$WORKSPACE_ROOT/web/.svelte-kit" "SvelteKit .svelte-kit/"
    remove_dir "$WORKSPACE_ROOT/web/build" "Web build/"
fi

# ── node_modules ──────────────────────────────────────────────────────
if [[ "$DO_NODE" == true ]]; then
    remove_dir "$WORKSPACE_ROOT/web/node_modules" "node_modules/"
fi

# ── Tauri gen (preserve gen/schemas) ──────────────────────────────────
if [[ "$DO_TAURI" == true ]]; then
    TAURI_GEN="$WORKSPACE_ROOT/crates/mesoclaw-desktop/gen"
    if [[ -d "$TAURI_GEN" ]]; then
        # Calculate size of everything except schemas/
        size=0
        for entry in "$TAURI_GEN"/*; do
            basename=$(basename "$entry")
            if [[ "$basename" != "schemas" ]]; then
                entry_size=$(dir_size_bytes "$entry")
                size=$((size + entry_size))
            fi
        done
        if (( size == 0 )); then
            warn "Tauri gen/ — nothing to clean (only schemas/)"
        elif [[ "$DRY_RUN" == true ]]; then
            dry "Tauri gen/ — $(human_size "$size") (would remove contents, preserving gen/schemas/)"
        else
            for entry in "$TAURI_GEN"/*; do
                basename=$(basename "$entry")
                if [[ "$basename" != "schemas" ]]; then
                    rm -rf "$entry"
                fi
            done
            ok "Tauri gen/ — freed $(human_size "$size") (preserved gen/schemas/)"
        fi
        TOTAL_FREED=$((TOTAL_FREED + size))
    else
        warn "Tauri gen/ — not found"
    fi
fi

# ── Summary ───────────────────────────────────────────────────────────
echo ""
if [[ "$DRY_RUN" == true ]]; then
    echo -e "${BOLD}Would free: $(human_size "$TOTAL_FREED")${NC}"
else
    echo -e "${BOLD}Total freed: $(human_size "$TOTAL_FREED")${NC}"
fi
echo ""
