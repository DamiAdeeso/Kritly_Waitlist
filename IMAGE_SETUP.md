# Image Setup Guide

This guide explains exactly where to place your images from Figma and how they'll be used.

## 📁 Folder Structure

```
public/
├── favicon.ico                     # Browser favicon
├── apple-touch-icon.png            # Apple touch icon (iOS)
└── images/
    ├── logo.png                    # Main Kritly logo
    └── screenshots/
        ├── hero-app.png            # Hero section mobile preview
        ├── reviews-feature.png      # Reviews feature screenshot
        ├── social-feature.png       # Social media feature screenshot
        ├── polls-feature.png        # Polls feature screenshot
        └── story-times-feature.png  # Story Times feature screenshot
```

## 🖼️ Image Details

### 0. Favicon & Icons

#### Favicon (`public/favicon.ico`)

**Where it appears:**
- Browser tab icon
- Browser bookmarks
- Browser history

**Requirements:**
- Format: ICO or PNG
- Size: 16x16px, 32x32px, or 48x48px (multi-size ICO recommended)
- Background: Can be transparent or solid color
- Colors: Should work on both light and dark browser themes

**How to add:**
1. Create favicon from your Kritly logo
2. Convert to ICO format (or use PNG)
3. Place at `public/favicon.ico`
4. Already referenced in code - will appear automatically

**Tools to create favicon:**
- Use online tools like favicon.io or realfavicongenerator.net
- Export from Figma as PNG, then convert to ICO
- Can use your logo as base

#### Apple Touch Icon (`public/apple-touch-icon.png`)

**Where it appears:**
- iOS home screen when users add to home screen
- Safari bookmarks on iOS

**Requirements:**
- Format: PNG
- Size: 180x180px (required by Apple)
- Background: Can be transparent or solid
- Will be automatically rounded by iOS

**How to add:**
1. Create 180x180px version of your logo
2. Export as PNG from Figma
3. Place at `public/apple-touch-icon.png`
4. Already referenced in code - will appear automatically

**Figma Export Steps:**
1. Select your logo or create square version
2. Set frame to 180x180px
3. Export as PNG
4. Save to `public/apple-touch-icon.png`

---

### 1. Logo (`public/images/logo.png`)

**Where it appears:**
- Top navigation bar (left side)
- Footer (left side)

**Requirements:**
- Format: PNG or SVG
- Size: 40x40px minimum (will be scaled automatically)
- Background: Transparent preferred
- Colors: Should work on white background
- Aspect Ratio: Square (1:1) recommended

**How to add:**
1. Export logo from Figma as PNG or SVG
2. Place at `public/images/logo.png`
3. The logo is already active in the code - it will appear automatically

**Figma Export Steps:**
1. Select the logo component in Figma
2. Click "Export" in the right panel
3. Choose PNG format
4. Set scale to 2x or 3x for retina displays
5. Export and save to `public/images/logo.png`

---

### 2. Hero App Preview (`public/images/screenshots/hero-app.png`)

**Where it appears:**
- Hero section, right side
- Displayed inside a phone frame mockup

**Requirements:**
- Format: PNG
- **Size: 428x926px** (9:19.5 aspect ratio - modern iPhone)
- Should show main app screen or key feature
- Will be displayed in a phone frame with notch

**How to add:**
1. In Figma, select your mobile screen frame
2. Set frame size to exactly **428x926px** (or export at this ratio)
3. Export as PNG
4. Place at `public/images/screenshots/hero-app.png`
5. Image is already active - will appear automatically

**Figma Export Steps:**
1. Select the mobile screen frame
2. Ensure frame dimensions are 428x926px (or maintain 9:19.5 ratio)
3. Click "Export" → Choose PNG
4. Export at 1x (428x926px) or 2x (856x1852px) for retina
5. Save to `public/images/screenshots/hero-app.png`

---

### 3. Reviews Feature (`public/images/screenshots/reviews-feature.png`)

**Where it appears:**
- Reviews feature section
- Left side (desktop), top (mobile)
- Displayed inside a phone frame mockup

**Requirements:**
- Format: PNG
- **Size: 428x926px** (9:19.5 aspect ratio - modern iPhone)
- Should showcase the reviews functionality
- Will fill the phone frame completely

**How to add:**
1. Export reviews screen from Figma
2. Ensure dimensions are **428x926px** (9:19.5 ratio)
3. Place at `public/images/screenshots/reviews-feature.png`
4. Image is already active - will appear automatically

**Figma Export Steps:**
1. Select the reviews screen frame
2. Set frame to 428x926px (or maintain 9:19.5 ratio)
3. Export as PNG
4. Save to `public/images/screenshots/reviews-feature.png`

---

### 4. Social Feature (`public/images/screenshots/social-feature.png`)

**Where it appears:**
- Social media feature section
- Right side (desktop), bottom (mobile)
- Displayed inside a phone frame mockup

**Requirements:**
- Format: PNG
- **Size: 428x926px** (9:19.5 aspect ratio - modern iPhone)
- Should showcase social media integration
- Will fill the phone frame completely

**How to add:**
1. Export social media screen from Figma
2. Ensure dimensions are **428x926px** (9:19.5 ratio)
3. Place at `public/images/screenshots/social-feature.png`
4. Image is already active - will appear automatically

**Figma Export Steps:**
1. Select the social media screen frame
2. Set frame to 428x926px (or maintain 9:19.5 ratio)
3. Export as PNG
4. Save to `public/images/screenshots/social-feature.png`

---

### 5. Polls Feature (`public/images/screenshots/polls-feature.png`)

**Where it appears:**
- Polls feature section
- Left side (desktop), top (mobile)
- Displayed inside a phone frame mockup

**Requirements:**
- Format: PNG
- **Size: 428x926px** (9:19.5 aspect ratio - modern iPhone)
- Should showcase polls functionality
- Will fill the phone frame completely

**How to add:**
1. Export polls screen from Figma
2. Ensure dimensions are **428x926px** (9:19.5 ratio)
3. Place at `public/images/screenshots/polls-feature.png`
4. Image is already active - will appear automatically

**Figma Export Steps:**
1. Select the polls screen frame
2. Set frame to 428x926px (or maintain 9:19.5 ratio)
3. Export as PNG
4. Save to `public/images/screenshots/polls-feature.png`

---

### 6. Story Times Feature (`public/images/screenshots/story-times-feature.png`)

**Where it appears:**
- Story Times feature section
- Right side (desktop), bottom (mobile)
- Displayed inside a phone frame mockup

**Requirements:**
- Format: PNG
- **Size: 428x926px** (9:19.5 aspect ratio - modern iPhone)
- Should showcase Story Times video feature
- Will fill the phone frame completely

**How to add:**
1. Export Story Times screen from Figma
2. Ensure dimensions are **428x926px** (9:19.5 ratio)
3. Place at `public/images/screenshots/story-times-feature.png`
4. Image is already active - will appear automatically

**Figma Export Steps:**
1. Select the Story Times screen frame
2. Set frame to 428x926px (or maintain 9:19.5 ratio)
3. Export as PNG
4. Save to `public/images/screenshots/story-times-feature.png`

---

## 🎨 Exporting from Figma - Step by Step

### For All Screenshots (428x926px):

1. **Select your frame** in Figma
2. **Check/Set dimensions:**
   - Width: 428px
   - Height: 926px
   - Or maintain 9:19.5 aspect ratio
3. **Export:**
   - Click "Export" in the right panel
   - Format: PNG
   - Size: 1x (428x926px) or 2x (856x1852px) for retina
4. **Save** to the correct folder with exact filename

### For Logo:

1. **Select logo component** in Figma
2. **Export:**
   - Format: PNG or SVG
   - Size: 2x or 3x for crisp display
   - Ensure transparent background
3. **Save** to `public/images/logo.png`

---

## ✅ Complete Checklist

- [ ] Favicon added to `public/favicon.ico` (16x16px or 32x32px)
- [ ] Apple touch icon added to `public/apple-touch-icon.png` (180x180px)
- [ ] Logo added to `public/images/logo.png` (40x40px+)
- [ ] Hero app preview added to `public/images/screenshots/hero-app.png` (428x926px)
- [ ] Reviews screenshot added to `public/images/screenshots/reviews-feature.png` (428x926px)
- [ ] Social feature screenshot added to `public/images/screenshots/social-feature.png` (428x926px)
- [ ] Polls screenshot added to `public/images/screenshots/polls-feature.png` (428x926px)
- [ ] Story Times screenshot added to `public/images/screenshots/story-times-feature.png` (428x926px)
- [ ] All images tested on localhost to verify they load correctly

---

## 📐 Important Dimensions

**All Screenshots:**
- **Exact Size**: 428x926px
- **Aspect Ratio**: 9:19.5 (modern iPhone ratio)
- **Format**: PNG
- **Why this size?** Matches your Figma exports and fills phone frames perfectly

**Logo:**
- **Minimum Size**: 40x40px
- **Recommended**: 80x80px or larger (2x for retina)
- **Format**: PNG or SVG
- **Background**: Transparent

---

## 💡 Pro Tips

1. **Consistent Export**: Export all screenshots at the same size (428x926px) for consistency
2. **Retina Displays**: Export at 2x (856x1852px) for sharper images on high-DPI screens
3. **Optimize Images**: Use TinyPNG or ImageOptim to reduce file size after export
4. **File Names**: Must match exactly (case-sensitive):
   - `hero-app.png` ✅
   - `Hero-App.png` ❌ (wrong case)
   - `hero_app.png` ❌ (wrong separator)
5. **No Padding**: Export screenshots without extra padding/whitespace around edges
6. **Phone Frame**: Images will automatically appear in phone frames - no need to include frame in export

---

## 🐛 Troubleshooting

**Images not showing?**
- ✅ Check file names match exactly (case-sensitive)
- ✅ Verify files are in `public/images/` folder (not `public/`)
- ✅ Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
- ✅ Check browser console for 404 errors
- ✅ Restart dev server: `npm run dev`

**Images have gaps/padding?**
- ✅ Ensure images are exactly 428x926px
- ✅ Export without extra padding in Figma
- ✅ Check that frame in Figma matches screenshot content

**Images look blurry?**
- ✅ Export at 2x resolution (856x1852px)
- ✅ Use PNG format (not JPG)
- ✅ Ensure Figma frame is high resolution

**Images don't fill phone frame?**
- ✅ Verify aspect ratio is 9:19.5 (428:926)
- ✅ Check image dimensions match exactly
- ✅ Images should fill frame edge-to-edge

---

## 🎯 Quick Reference

| Image | Location | Size | Aspect Ratio | Required |
|-------|----------|------|--------------|----------|
| Favicon | `public/favicon.ico` | 16x16px or 32x32px | 1:1 | Optional |
| Apple Icon | `public/apple-touch-icon.png` | 180x180px | 1:1 | Optional |
| Logo | `public/images/logo.png` | 40x40px+ | 1:1 | **Required** |
| Hero | `public/images/screenshots/hero-app.png` | 428x926px | 9:19.5 | **Required** |
| Reviews | `public/images/screenshots/reviews-feature.png` | 428x926px | 9:19.5 | **Required** |
| Social | `public/images/screenshots/social-feature.png` | 428x926px | 9:19.5 | **Required** |
| Polls | `public/images/screenshots/polls-feature.png` | 428x926px | 9:19.5 | **Required** |
| Story Times | `public/images/screenshots/story-times-feature.png` | 428x926px | 9:19.5 | **Required** |

---

## ✨ Notes

- All images are **already active** in the code - just add the files and they'll appear!
- Images will automatically display in phone frame mockups
- No code changes needed once images are added
- All screenshots use the same dimensions for consistency
