#!/bin/bash

# Default source image
SOURCE_IMAGE="${1:-crates/mesoclaw-desktop/icons/zenii-light.svg}"

# Background color (hex, e.g. '#FFFFFF')
BG_COLOR="${BG_COLOR:-#FFFFFF}"

# Corner rounding radius as a percentage of image size (0 = square, 50 = circle)
ROUND_RADIUS="${ROUND_RADIUS:-18}"

if [ ! -f "$SOURCE_IMAGE" ]; then
    echo "Error: Source image not found at $SOURCE_IMAGE"
    echo "Usage: ./scripts/generate-icons.sh [path/to/icon.png]"
    exit 1
fi

if ! command -v convert &> /dev/null; then
    echo "Error: 'convert' (ImageMagick) not found. Install with: sudo apt install imagemagick"
    exit 1
fi

resize() {
    local out="$1" size="$2"
    local radius=$(( size * ROUND_RADIUS / 100 ))

    if [ "$radius" -gt 0 ]; then
        convert -background "$BG_COLOR" "$SOURCE_IMAGE" -resize "${size}x${size}" -flatten -depth 8 \
            \( -size "${size}x${size}" xc:none \
                -draw "roundrectangle 0,0,$((size-1)),$((size-1)),${radius},${radius}" \
            \) -compose DstIn -composite PNG32:"$out"
    else
        convert -background "$BG_COLOR" "$SOURCE_IMAGE" -resize "${size}x${size}" -flatten -depth 8 "$out"
    fi
}

echo "🚀 Generating icons from $SOURCE_IMAGE..."

# -------------------------------------------------------------------------
# DESKTOP ICONS
# -------------------------------------------------------------------------
echo "🖥️  Generating Desktop icons..."
ICONS_DIR="crates/mesoclaw-desktop/icons"
TEMP_ICONSET="/tmp/MesoClaw.iconset"

mkdir -p "$TEMP_ICONSET"

resize "$TEMP_ICONSET/icon_16x16.png"      16
resize "$TEMP_ICONSET/icon_16x16@2x.png"   32
resize "$TEMP_ICONSET/icon_32x32.png"      32
resize "$TEMP_ICONSET/icon_32x32@2x.png"   64
resize "$TEMP_ICONSET/icon_128x128.png"    128
resize "$TEMP_ICONSET/icon_128x128@2x.png" 256
resize "$TEMP_ICONSET/icon_256x256.png"    256
resize "$TEMP_ICONSET/icon_256x256@2x.png" 512
resize "$TEMP_ICONSET/icon_512x512.png"    512
resize "$TEMP_ICONSET/icon_512x512@2x.png" 1024

# Create .icns (macOS iconutil preferred, Linux png2icns fallback)
if command -v iconutil &> /dev/null; then
    echo "   Creating icon.icns (iconutil)..."
    iconutil -c icns "$TEMP_ICONSET" -o "$ICONS_DIR/icon.icns"
elif command -v png2icns &> /dev/null; then
    echo "   Creating icon.icns (png2icns)..."
    png2icns "$ICONS_DIR/icon.icns" \
        "$TEMP_ICONSET/icon_16x16.png" \
        "$TEMP_ICONSET/icon_32x32.png" \
        "$TEMP_ICONSET/icon_128x128.png" \
        "$TEMP_ICONSET/icon_256x256.png" \
        "$TEMP_ICONSET/icon_512x512.png"
else
    echo "   Skipping icon.icns (install iconutil on macOS or icnsutils on Linux)"
fi

echo "   Updating generic PNG icons..."
resize "$ICONS_DIR/32x32.png"      32
resize "$ICONS_DIR/128x128.png"    128
resize "$ICONS_DIR/128x128@2x.png" 256
resize "$ICONS_DIR/256x256.png"    256
resize "$ICONS_DIR/icon.png"       512

echo "   Creating icon.ico..."
resize "/tmp/ico_base_256.png" 256
convert "/tmp/ico_base_256.png" -define icon:auto-resize=256,128,64,48,32,16 "$ICONS_DIR/icon.ico"
rm -f /tmp/ico_base_256.png

rm -rf "$TEMP_ICONSET"

# -------------------------------------------------------------------------
# FRONTEND ICONS (sidebar header, favicon, splash)
# -------------------------------------------------------------------------
echo "🌐 Generating Frontend icons..."
resize "web/static/app-icon.png"    512
resize "web/static/app-icon-32.png"  32

# -------------------------------------------------------------------------
# ANDROID ICONS (only if Android project has been initialized)
# -------------------------------------------------------------------------
ANDROID_RES_DIR="crates/mesoclaw-desktop/gen/android/app/src/main/res"

if [ -d "$ANDROID_RES_DIR" ]; then
    echo "🤖 Generating Android icons..."
    resize "$ANDROID_RES_DIR/mipmap-mdpi/ic_launcher.png"    48
    resize "$ANDROID_RES_DIR/mipmap-hdpi/ic_launcher.png"    72
    resize "$ANDROID_RES_DIR/mipmap-xhdpi/ic_launcher.png"   96
    resize "$ANDROID_RES_DIR/mipmap-xxhdpi/ic_launcher.png"  144
    resize "$ANDROID_RES_DIR/mipmap-xxxhdpi/ic_launcher.png" 192

    find "$ANDROID_RES_DIR" -name "ic_launcher_round.png" | while read -r round_icon; do
        cp "$(dirname "$round_icon")/ic_launcher.png" "$round_icon"
    done
fi

# -------------------------------------------------------------------------
# iOS ICONS (only if iOS project has been initialized)
# -------------------------------------------------------------------------
IOS_ASSET_DIR="crates/mesoclaw-desktop/gen/apple/Assets.xcassets/AppIcon.appiconset"

if [ -d "$IOS_ASSET_DIR" ]; then
    echo "🍎 Generating iOS icons..."
    resize "$IOS_ASSET_DIR/AppIcon-20x20@2x.png"      40
    resize "$IOS_ASSET_DIR/AppIcon-20x20@3x.png"      60
    resize "$IOS_ASSET_DIR/AppIcon-29x29@2x.png"      58
    resize "$IOS_ASSET_DIR/AppIcon-29x29@3x.png"      87
    resize "$IOS_ASSET_DIR/AppIcon-40x40@2x.png"      80
    resize "$IOS_ASSET_DIR/AppIcon-40x40@3x.png"      120
    resize "$IOS_ASSET_DIR/AppIcon-60x60@2x.png"      120
    resize "$IOS_ASSET_DIR/AppIcon-60x60@3x.png"      180
    resize "$IOS_ASSET_DIR/AppIcon-20x20@1x.png"      20
    cp "$IOS_ASSET_DIR/AppIcon-20x20@2x.png" "$IOS_ASSET_DIR/AppIcon-20x20@2x-1.png"
    resize "$IOS_ASSET_DIR/AppIcon-29x29@1x.png"      29
    cp "$IOS_ASSET_DIR/AppIcon-29x29@2x.png" "$IOS_ASSET_DIR/AppIcon-29x29@2x-1.png"
    resize "$IOS_ASSET_DIR/AppIcon-40x40@1x.png"      40
    cp "$IOS_ASSET_DIR/AppIcon-40x40@2x.png" "$IOS_ASSET_DIR/AppIcon-40x40@2x-1.png"
    resize "$IOS_ASSET_DIR/AppIcon-76x76@1x.png"      76
    resize "$IOS_ASSET_DIR/AppIcon-76x76@2x.png"      152
    resize "$IOS_ASSET_DIR/AppIcon-83.5x83.5@2x.png"  167
    resize "$IOS_ASSET_DIR/AppIcon-512@2x.png"        1024
fi

echo "✅ Done! All icons regenerated from $SOURCE_IMAGE"
