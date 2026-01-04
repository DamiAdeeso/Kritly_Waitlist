# Kritly Waitlist - Premium Landing Page

A professional, modern waitlist landing page for Kritly - a social media based review centric platform.

## 🎨 Design Features

- **Premium Design**: Professional, modern UI matching your app's design language
- **Feature Showcases**: Dedicated sections for each major feature with screenshot support
- **Responsive Layout**: Beautiful on all devices from mobile to desktop
- **Smooth Animations**: Polished interactions and transitions
- **SEO Optimized**: Full metadata, Open Graph, and structured data

## 📸 Screenshot Requirements

Place your Figma design screenshots in `public/images/screenshots/`:

### Required Images:

1. **hero-app.png** - Main hero section mobile app preview
   - Size: 375x812px (iPhone) or similar mobile aspect ratio
   - Location: Hero section, right side

2. **reviews-feature.png** - Reviews feature showcase
   - Size: 1200x675px (16:9 aspect ratio)
   - Location: Reviews feature section

3. **social-feature.png** - Social media integration
   - Size: 1200x675px (16:9 aspect ratio)
   - Location: Social media feature section

4. **polls-feature.png** - Polls functionality
   - Size: 1200x675px (16:9 aspect ratio)
   - Location: Polls feature section

5. **story-times-feature.png** - Story Times video feature
   - Size: 1200x675px (16:9 aspect ratio)
   - Location: Story Times feature section

### Logo:
- **logo.png** - Place at `public/images/logo.png`
- Recommended: 400x400px with transparent background
- Used in navigation and footer

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Add Your Images

1. Add your Kritly logo to `public/images/logo.png`
2. Add all 5 screenshots to `public/images/screenshots/` (see names above)
3. Images will automatically appear in the design

### 3. Set Up Google Sheets

Follow the detailed instructions in `SETUP.md` to configure Google Sheets integration.

### 4. Configure Environment Variables

Copy `env.example` to `.env.local` and fill in:
- `GOOGLE_SHEET_ID`
- `GOOGLE_SHEET_RANGE`
- `GOOGLE_SERVICE_ACCOUNT_EMAIL`
- `GOOGLE_PRIVATE_KEY`
- `NEXT_PUBLIC_SITE_URL`

### 5. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
kritly_waitlist/
├── app/
│   ├── api/
│   │   └── waitlist/          # Google Sheets API integration
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout with SEO
│   └── page.tsx               # Main waitlist page
├── components/
│   └── FeatureSection.tsx     # Reusable feature component
├── public/
│   └── images/
│       ├── logo.png           # Your Kritly logo
│       └── screenshots/       # All feature screenshots
└── ...
```

## 🎯 Features

### Hero Section
- Eye-catching gradient background
- Clear value proposition
- Call-to-action buttons
- App preview screenshot

### Feature Showcases
- **Reviews**: Review places and accounts
- **Social Media**: Connect your social world
- **Polls**: Interactive polling system
- **Story Times**: Short video experiences

Each feature section includes:
- Large screenshot display
- Feature description
- Bullet points highlighting benefits
- Alternating layout for visual interest

### Waitlist Form
- Clean, professional design
- Real-time validation
- Success/error messaging
- Google Sheets integration

## 🎨 Brand Colors

- **Primary**: `#762FE0` (Purple)
- **Accent**: `#FFC30D` (Yellow/Orange)
- **Background**: White with gradient sections

## 📱 Responsive Design

- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interactions
- Fast loading times

## 🔧 Customization

### Adding More Features

To add additional feature sections:

1. Add screenshot to `public/images/screenshots/`
2. Add new section in `app/page.tsx` following the existing pattern
3. Update navigation if needed

### Changing Colors

Edit `tailwind.config.ts` to update brand colors:
```typescript
colors: {
  primary: '#762FE0',
  accent: '#FFC30D',
}
```

## 📊 Google Sheets Integration

The waitlist form automatically saves entries to your Google Sheet with:
- Email address
- Full name
- Timestamp

See `SETUP.md` for detailed Google Sheets setup instructions.

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

### Other Platforms

Works with any Next.js-compatible hosting:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean

## 📝 License

Private - Kritly 2026
