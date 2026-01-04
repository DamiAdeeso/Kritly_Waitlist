# Image Setup Guide

This guide explains exactly where to place your images from Figma and how they'll be used.

## 📁 Folder Structure

```
public/
└── images/
    ├── logo.png                    # Main Kritly logo
    └── screenshots/
        ├── hero-app.png            # Hero section mobile preview
        ├── reviews-feature.png     # Reviews feature screenshot
        ├── social-feature.png      # Social media feature screenshot
        ├── polls-feature.png       # Polls feature screenshot
        └── story-times-feature.png # Story Times feature screenshot
```

## 🖼️ Image Details

### 1. Logo (`public/images/logo.png`)

**Where it appears:**
- Top navigation bar (left side)
- Footer (left side)

**Requirements:**
- Format: PNG or SVG
- Size: 40x40px minimum (will be scaled)
- Background: Transparent preferred
- Colors: Should work on white background

**How to add:**
1. Export logo from Figma as PNG or SVG
2. Place at `public/images/logo.png`
3. Uncomment the Image components in `app/page.tsx`:
   - Line ~30 (navigation)
   - Line ~380 (footer)

### 2. Hero App Preview (`public/images/screenshots/hero-app.png`)

**Where it appears:**
- Hero section, right side
- Shows mobile app preview

**Requirements:**
- Format: PNG
- Size: 375x812px (iPhone) or similar mobile aspect ratio
- Should show main app screen or key feature

**How to add:**
1. Take screenshot from Figma of mobile view
2. Export as PNG
3. Place at `public/images/screenshots/hero-app.png`
4. Uncomment Image component around line 80 in `app/page.tsx`

### 3. Reviews Feature (`public/images/screenshots/reviews-feature.png`)

**Where it appears:**
- Reviews feature section
- Left side (desktop), top (mobile)

**Requirements:**
- Format: PNG
- Size: 1200x675px (16:9 aspect ratio)
- Should showcase the reviews functionality

**How to add:**
1. Export reviews screen from Figma
2. Place at `public/images/screenshots/reviews-feature.png`
3. Uncomment Image component around line 150 in `app/page.tsx`

### 4. Social Feature (`public/images/screenshots/social-feature.png`)

**Where it appears:**
- Social media feature section
- Right side (desktop), bottom (mobile)

**Requirements:**
- Format: PNG
- Size: 1200x675px (16:9 aspect ratio)
- Should showcase social media integration

**How to add:**
1. Export social media screen from Figma
2. Place at `public/images/screenshots/social-feature.png`
3. Uncomment Image component around line 200 in `app/page.tsx`

### 5. Polls Feature (`public/images/screenshots/polls-feature.png`)

**Where it appears:**
- Polls feature section
- Left side (desktop), top (mobile)

**Requirements:**
- Format: PNG
- Size: 1200x675px (16:9 aspect ratio)
- Should showcase polls functionality

**How to add:**
1. Export polls screen from Figma
2. Place at `public/images/screenshots/polls-feature.png`
3. Uncomment Image component around line 250 in `app/page.tsx`

### 6. Story Times Feature (`public/images/screenshots/story-times-feature.png`)

**Where it appears:**
- Story Times feature section
- Right side (desktop), bottom (mobile)

**Requirements:**
- Format: PNG
- Size: 1200x675px (16:9 aspect ratio)
- Should showcase Story Times video feature

**How to add:**
1. Export Story Times screen from Figma
2. Place at `public/images/screenshots/story-times-feature.png`
3. Uncomment Image component around line 300 in `app/page.tsx`

## 🎨 Exporting from Figma

### For Screenshots:

1. Select the frame/screen you want to export
2. In the right panel, click "Export"
3. Choose:
   - Format: PNG
   - Size: 2x or 3x (for retina displays)
   - Or set custom dimensions (see requirements above)
4. Export and save to the correct folder

### For Logo:

1. Select the logo component
2. Export as PNG or SVG
3. If PNG, use 2x or 3x for crisp display
4. Ensure transparent background if needed

## ✅ Quick Checklist

- [ ] Logo added to `public/images/logo.png`
- [ ] Hero app preview added to `public/images/screenshots/hero-app.png`
- [ ] Reviews screenshot added
- [ ] Social feature screenshot added
- [ ] Polls screenshot added
- [ ] Story Times screenshot added
- [ ] All Image components uncommented in `app/page.tsx`
- [ ] Tested on localhost to verify images load

## 🔍 Finding Image Components in Code

All image placeholders are clearly marked with comments. Search for:
- `// Uncomment when logo is added:`
- `// Uncomment when screenshot is added:`

Simply remove the placeholder div and uncomment the Image component.

## 💡 Tips

1. **Optimize images**: Use tools like TinyPNG or ImageOptim to reduce file size
2. **Consistent style**: Ensure all screenshots match the design style
3. **High quality**: Use 2x or 3x exports for crisp display on retina screens
4. **File names**: Must match exactly (case-sensitive)

## 🐛 Troubleshooting

**Images not showing?**
- Check file names match exactly (case-sensitive)
- Verify files are in correct folders
- Clear browser cache
- Check browser console for 404 errors

**Images look blurry?**
- Export at higher resolution (2x or 3x)
- Use PNG format instead of JPG

**Wrong aspect ratio?**
- Check image dimensions match requirements
- Adjust in Figma before exporting





