#!/usr/bin/env bash
# Sync docs/ -> docs-site/docs/ for Vercel deployment
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$REPO_ROOT/docs"
DEST="$REPO_ROOT/docs-site/docs"

mkdir -p "$DEST"
rsync -av --delete --include='*.md' --exclude='assets/' --exclude='plans/' --exclude='superpowers/' "$SRC/" "$DEST/"

echo "Synced docs/ -> docs-site/docs/"
