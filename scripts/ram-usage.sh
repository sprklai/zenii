#!/usr/bin/env bash
# ram-usage.sh — Measure RAM usage of Zenii processes
# Works on Linux, macOS, and Windows (Git Bash / MSYS2 / WSL)
#
# Usage:
#   ./scripts/ram-usage.sh              # Show all zenii processes
#   ./scripts/ram-usage.sh daemon       # Filter to daemon only
#   ./scripts/ram-usage.sh desktop      # Filter to desktop only
#   ./scripts/ram-usage.sh --watch      # Refresh every 2 seconds
#   ./scripts/ram-usage.sh --watch 5    # Refresh every 5 seconds
#   ./scripts/ram-usage.sh --pss        # PSS (accurate, splits shared memory)

set -euo pipefail

BINARIES=("zenii-daemon" "zenii-desktop" "zenii-cli" "zenii-tui")
FILTER=""
WATCH=false
WATCH_INTERVAL=2
USE_PSS=false

# --- Argument parsing ---
while [[ $# -gt 0 ]]; do
    case "$1" in
        --watch|-w)
            WATCH=true
            if [[ "${2:-}" =~ ^[0-9]+$ ]]; then
                WATCH_INTERVAL="$2"
                shift
            fi
            shift
            ;;
        --pss)
            USE_PSS=true
            shift
            ;;
        daemon|desktop|cli|tui)
            FILTER="zenii-$1"
            shift
            ;;
        -h|--help)
            echo "Usage: $0 [daemon|desktop|cli|tui] [--watch [interval]] [--pss]"
            echo ""
            echo "Options:"
            echo "  daemon|desktop|cli|tui   Filter to a specific binary"
            echo "  --watch, -w [N]          Refresh every N seconds (default: 2)"
            echo "  --pss                    Use PSS instead of RSS (more accurate, Linux only)"
            echo "  -h, --help               Show this help"
            exit 0
            ;;
        *)
            echo "Unknown argument: $1" >&2
            exit 1
            ;;
    esac
done

# --- Detect OS ---
detect_os() {
    case "$(uname -s)" in
        Linux*)  echo "linux" ;;
        Darwin*) echo "macos" ;;
        MINGW*|MSYS*|CYGWIN*) echo "windows" ;;
        *)       echo "unknown" ;;
    esac
}

OS="$(detect_os)"

# --- Human-readable size ---
human_size() {
    local kb="$1"
    if [[ "$kb" -ge 1048576 ]]; then
        awk "BEGIN { printf \"%.1f GB\", $kb / 1048576 }"
    elif [[ "$kb" -ge 1024 ]]; then
        awk "BEGIN { printf \"%.1f MB\", $kb / 1024 }"
    else
        echo "${kb} KB"
    fi
}

# --- Read PSS from /proc (Linux only) ---
# Returns PSS in KB, or empty string on failure
get_pss_kb() {
    local pid="$1"
    local smaps="/proc/$pid/smaps_rollup"
    if [[ -r "$smaps" ]]; then
        awk '/^Pss:/ {sum += $2} END {print sum}' "$smaps" 2>/dev/null
    else
        echo ""
    fi
}

# --- Get process info per OS ---
# Returns lines of: PID RSS_KB PROCESS_NAME
get_processes() {
    local pattern="$1"

    case "$OS" in
        linux|macos)
            # Use 'args' instead of 'comm' — comm truncates to 15 chars on Linux
            # which cuts "zenii-desktop" to "zenii-deskto"
            ps -eo pid=,rss=,args= 2>/dev/null | while read -r pid rss args; do
                local name
                # Extract binary name from full path (first word of args)
                local cmd="${args%% *}"
                name="$(basename "$cmd" 2>/dev/null || echo "$cmd")"
                if [[ "$name" == *"$pattern"* ]]; then
                    echo "$pid $rss $name"
                fi
            done
            ;;
        windows)
            # tasklist on Windows (Git Bash / MSYS2)
            tasklist //FO CSV //NH 2>/dev/null | while IFS=',' read -r name pid _ _ mem _; do
                # Remove quotes and " K" suffix
                name="${name//\"/}"
                pid="${pid//\"/}"
                mem="${mem//\"/}"
                mem="${mem// K/}"
                mem="${mem//,/}"
                if [[ "$name" == *"$pattern"* ]]; then
                    echo "$pid $mem $name"
                fi
            done
            ;;
        *)
            echo "Unsupported OS: $(uname -s)" >&2
            return 1
            ;;
    esac
}

# --- Resolve memory value for a PID (PSS or RSS) ---
resolve_mem_kb() {
    local pid="$1"
    local rss_fallback="$2"
    if $USE_PSS && [[ "$OS" == "linux" ]]; then
        local pss
        pss="$(get_pss_kb "$pid")"
        if [[ -n "$pss" && "$pss" -gt 0 ]] 2>/dev/null; then
            echo "$pss"
            return
        fi
    fi
    echo "$rss_fallback"
}

# --- Add a process row ---
add_row() {
    local pid="$1" rss="$2" label="$3"
    local mem
    mem="$(resolve_mem_kb "$pid" "$rss")"
    found=true
    total_mem=$((total_mem + mem))
    rows+=("$(printf "  %-8s  %-22s  %s" "$pid" "$label" "$(human_size "$mem")")")
}

# --- Render table ---
print_report() {
    local total_mem=0
    local found=false
    local rows=()
    local mem_label="RSS"
    $USE_PSS && [[ "$OS" == "linux" ]] && mem_label="PSS"

    # Collect matching processes
    if [[ -n "$FILTER" ]]; then
        binaries_to_check=("$FILTER")
    else
        binaries_to_check=("${BINARIES[@]}")
    fi

    for bin in "${binaries_to_check[@]}"; do
        while read -r pid rss name; do
            [[ -z "$pid" ]] && continue
            add_row "$pid" "$rss" "$name"
        done < <(get_processes "$bin")
    done

    # In dev mode, also capture Vite dev server + esbuild spawned by cargo tauri dev
    if [[ -z "$FILTER" || "$FILTER" == "zenii-desktop" ]]; then
        local project_root
        project_root="$(cd "$(dirname "$0")/.." && pwd)"
        while read -r pid rss args; do
            [[ -z "$pid" ]] && continue
            local label=""
            if [[ "$args" == *"${project_root}/web/"*"vite"* ]]; then
                label="vite (dev server)"
            elif [[ "$args" == *"${project_root}/web/"*"esbuild"* ]]; then
                label="esbuild (dev)"
            fi
            if [[ -n "$label" ]]; then
                add_row "$pid" "$rss" "$label"
            fi
        done < <(ps -eo pid=,rss=,args= 2>/dev/null)
    fi

    # Also check for WebView/webkit processes that are children of zenii-desktop
    if [[ -z "$FILTER" || "$FILTER" == "zenii-desktop" ]]; then
        local desktop_pids=()
        while read -r pid rss name; do
            [[ -z "$pid" ]] && continue
            desktop_pids+=("$pid")
        done < <(get_processes "zenii-desktop")

        if [[ ${#desktop_pids[@]} -gt 0 ]]; then
            for wv_pattern in "WebKitWebProcess" "webkit" "webview" "msedgewebview"; do
                while read -r pid rss name; do
                    [[ -z "$pid" ]] && continue
                    local is_child=false
                    if [[ "$OS" == "linux" ]]; then
                        local check_pid="$pid"
                        for _ in {1..10}; do
                            local ppid
                            ppid=$(awk '{print $4}' "/proc/$check_pid/stat" 2>/dev/null || echo "0")
                            for dpid in "${desktop_pids[@]}"; do
                                if [[ "$ppid" == "$dpid" ]]; then
                                    is_child=true
                                    break 2
                                fi
                            done
                            [[ "$ppid" == "1" || "$ppid" == "0" ]] && break
                            check_pid="$ppid"
                        done
                    elif [[ "$OS" == "macos" ]]; then
                        local ppid
                        ppid=$(ps -o ppid= -p "$pid" 2>/dev/null | tr -d ' ')
                        for dpid in "${desktop_pids[@]}"; do
                            if [[ "$ppid" == "$dpid" ]]; then
                                is_child=true
                                break
                            fi
                        done
                    else
                        is_child=true
                    fi

                    if $is_child; then
                        add_row "$pid" "$rss" "$name (webview)"
                    fi
                done < <(get_processes "$wv_pattern")
            done
        fi
    fi

    # Print
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "  Zenii RAM Usage — $(date '+%H:%M:%S') — $OS"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    printf "  %-8s  %-22s  %s\n" "PID" "PROCESS" "$mem_label"
    echo "──────────────────────────────────────────────────────"

    if $found; then
        for row in "${rows[@]}"; do
            echo "$row"
        done
        echo "──────────────────────────────────────────────────────"
        echo "  TOTAL                             $(human_size "$total_mem")"
    else
        echo "  (no zenii processes found)"
    fi

    if $USE_PSS && [[ "$OS" == "linux" ]]; then
        echo ""
        echo "  PSS = Proportional Set Size (shared memory split fairly)"
    fi

    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

    # System memory context
    case "$OS" in
        linux)
            if [[ -f /proc/meminfo ]]; then
                local mem_total mem_avail
                mem_total=$(awk '/MemTotal/ {print $2}' /proc/meminfo)
                mem_avail=$(awk '/MemAvailable/ {print $2}' /proc/meminfo)
                echo "  System: $(human_size "$mem_total") total, $(human_size "$mem_avail") available"
            fi
            ;;
        macos)
            local pages_free pages_active page_size mem_total_bytes
            page_size=$(sysctl -n hw.pagesize 2>/dev/null || echo 4096)
            mem_total_bytes=$(sysctl -n hw.memsize 2>/dev/null || echo 0)
            pages_free=$(vm_stat 2>/dev/null | awk '/Pages free/ {gsub(/\./,"",$3); print $3}')
            pages_active=$(vm_stat 2>/dev/null | awk '/Pages active/ {gsub(/\./,"",$3); print $3}')
            if [[ -n "$pages_free" && -n "$mem_total_bytes" ]]; then
                local total_kb=$((mem_total_bytes / 1024))
                local free_kb=$(( (pages_free * page_size) / 1024 ))
                echo "  System: $(human_size "$total_kb") total, $(human_size "$free_kb") free"
            fi
            ;;
        windows)
            echo "  (system memory info not available on Windows shell)"
            ;;
    esac
    echo ""
}

# --- Main ---
if $WATCH; then
    while true; do
        clear
        print_report
        echo "  Refreshing every ${WATCH_INTERVAL}s — Ctrl+C to stop"
        sleep "$WATCH_INTERVAL"
    done
else
    print_report
fi
