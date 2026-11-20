# RoseDsigns — Web Design & Development Specialist Assessment

> **A bespoke, responsive landing page engineered for RoseDsigns (Creative • Branding • Advertising).**  
> Built strictly in accordance with the official **RoseDsigns Brand Guidelines (Version 1.0 | 2026)** and real agency portfolio.

---

## 🌹 Project Overview

This project was crafted as part of the recruitment practical task for the **Web Design & Development Specialist** position at RoseDsigns.

The landing page captures RoseDsigns’ identity as an editorial, high-end creative and digital marketing agency based in Perth and Chennai. It combines luxury visual storytelling with responsive performance engineering.

- **Brand Essence**: *“Ideas that make your brand bloom.”*
- **Primary Goal**: Showcase portfolio excellence, articulate services, and convert high-value clients across food, hospitality, and entertainment into scheduled consultations.

---

## 🎨 Strict Brand Guidelines Alignment (2026 V1.0)

Every design decision honors the provided brand guidelines sheet:

### 1. Color Palette System
- **Rose Black (`#171514`)**: Used for high-contrast typography, hero accents, dark cards, and the luxury footer.
- **Ivory (`#F7F3EC`)**: Used as the primary background canvas for an alabaster, editorial warmth.
- **Antique Rose (`#A76570`)**: Used for brand accents, italic serif highlights, active states, and decorative borders.
- **Dusty Blush (`#D9B1AE`)**: Used for delicate pill badges, announcement callouts, and subtle gradient blooms.
- **Burgundy (`#672D39`) & Antique Gold (`#B08A57`)**: Used for luxury typography accents, star ratings, and metric figures.
- **British Green (`#183B32`) & Midnight Navy (`#172536`)**: Integrated into secondary brand cues and verification markers.

### 2. Typography Hierarchy
- **Headings / Serif Accent**: Google Fonts **Cormorant Garamond** (Didot / Bodoni editorial serif style) for headings and italic flourishes.
- **Body & UI Controls**: Google Fonts **Plus Jakarta Sans** / **Inter** for crisp, geometric, high-legibility interface typography.

### 3. Core Brand Elements
- **The Rose**: Symbolizing creativity, organic growth, and ideas.
- **The Letter D**: Representing architectural strength and structural precision.
- **The 4-Point Diamond (`✦` / `✧`)**: Integrated across section dividers, bullet tags, and decorative badges.
- **Authentic Monogram Logo**: Embedded high-resolution 3D rose and brushed bronze letter D monogram in the header, hero visual card, and footer.

---

## 📐 Key Sections & Functional Features

| Section | Description | Interactive Capabilities |
| :--- | :--- | :--- |
| **Top Announcement Bar** | Booking status banner for Q1/Q2 branding & web projects. | One-click jump to the interactive Scope Builder. |
| **Sticky Glass Header** | Backdrop blur (`blur(14px)`), monogram brandmark, desktop links, and CTA. | Dynamic scrollspy indicator (`active` link highlights), mobile drawer toggle. |
| **Mobile Drawer Menu** | Full-height off-canvas drawer with smooth slide transition. | Accessible overlay, keyboard `Escape` trap, direct contact reach-out. |
| **Hero Section** | Editorial headline *"Ideas that make your brand bloom"* with rose-gold italic highlight, subtext, and dual CTAs. | 3D visual showcase card, floating glass badges, infinite 60fps marquee ticker. |
| **Metrics Bar** | Credibility indicators (50+ Brands, 3.8x Lift, 100% Custom Architecture, <24h Response). | Hover micro-elevations. |
| **Curated Portfolio** | Real RoseDsigns client work: **A2B Perth**, **Biriyani Box**, **Thirai Flicks**, **Palayam Peppers**, **Reflections**, and **A2B Yokine**. | **Live Filter Tabs** (`All`, `Branding`, `Websites`, `Hospitality`, `Content`) + **Interactive Case Study Modal** with deep challenge/solution/impact breakdown. |
| **Capabilities & Services** | 4 core offerings: Brand Strategy, UI/UX Web Dev, Content & Film, Digital Marketing & Growth. | "Select in Brief" direct trigger that pre-populates the inquiry form. |
| **Philosophy & Bloom Method** | Explains the 3-Stage Bloom methodology: `01 / Discover`, `02 / Create`, `03 / Connect & Bloom`. | Visual breakdown of brand elements (Rose, D, Diamond). |
| **Interactive Scope Builder** | Custom project estimator tool. | Step-by-step selection of Objective, Timeline, and Deliverables with instant summary generation and form auto-fill. |
| **Social Proof / Reviews** | Testimonials from restaurant directors, cloud-kitchen founders, and entertainment producers. | Card hover elevation. |
| **Contact & CTA** | Project inquiry form with validation, budget dropdown, and direct studio contacts. | Real-time input validation, submission loading spinner, and toast notification. |
| **Footer** | Sitemap, capabilities list, social links, back-to-top button, and recruitment attribution watermark. | Smooth scroll to top. |

---

## 💻 Tech Stack & Engineering Standards

- **Semantic HTML5**: Native elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`) with ARIA roles and labels for screen readers.
- **Modern CSS3**: Built with CSS Custom Properties, Flexbox, CSS Grid, `clamp()` fluid typography, and media queries. **Zero CSS bloat or heavy frameworks** (runs at native 60fps).
- **Vanilla JavaScript (ES6+)**: Clean, self-contained architecture handling modals, drawers, form validation, filter tabs, and toast notifications.
- **Performance**: Zero external render-blocking scripts. Optimized WebP/JPEG assets and responsive image handling.

---

## 📱 Responsive Verification

The layout has been tested and verified across multiple viewports:
- **Desktop (1440 × 900)**: [screenshots/desktop-preview.png](file:///C:/Users/midhu/.gemini/antigravity/scratch/rosedsigns-landing-page/screenshots/desktop-preview.png)
- **Tablet (820 × 1080)**: [screenshots/tablet-preview.png](file:///C:/Users/midhu/.gemini/antigravity/scratch/rosedsigns-landing-page/screenshots/tablet-preview.png)
- **Mobile (480 × 960 / 390 × 844)**: [screenshots/mobile-preview.png](file:///C:/Users/midhu/.gemini/antigravity/scratch/rosedsigns-landing-page/screenshots/mobile-preview.png)

---

## 🚀 Live Hosting Instructions

### Option 1: Netlify Drop (Instant, No CLI or Signup needed)
1. Visit **[https://app.netlify.com/drop](https://app.netlify.com/drop)** in your browser.
2. Drag and drop the `rosedsigns-landing-page` folder onto the page.
3. Your site is live immediately with a free HTTPS URL (e.g. `https://rosedsigns-specialist.netlify.app`).

### Option 2: GitHub Pages
1. Create a repository on GitHub (e.g. `rosedsigns-landing-page`).
2. Run the following inside this directory:
   ```bash
   git init
   git add .
   git commit -m "RoseDsigns landing page submission"
   git remote add origin https://github.com/<your-username>/rosedsigns-landing-page.git
   git push -u origin main
   ```
3. In GitHub repo Settings → Pages, select the `main` branch and click **Save**.

### Option 3: Vercel CLI
```bash
npx vercel
```
Follow the 3 prompts to deploy live in seconds.

---

## 📦 Project Structure

```
rosedsigns-landing-page/
├── index.html                           # Semantic landing page markup
├── style.css                            # Brand guideline styling & responsive layout
├── script.js                            # Interactive features & UI logic
├── README.md                            # Complete technical documentation
├── rosedsigns-landing-page-submission.zip # Ready-to-send project ZIP
├── assets/
│   ├── brand/
│   │   ├── rosedsigns-logo.jpg          # Authentic 3D Rose + D monogram
│   │   └── brand-guidelines.jpg         # RoseDsigns Brand Guidelines Sheet
│   └── images/
│       ├── portfolio-a2b.jpg            # A2B Perth photography
│       ├── portfolio-biriyani.jpg       # Biriyani Box culinary packaging
│       ├── portfolio-thirai.jpg         # Thirai Flicks cinematic visual
│       ├── portfolio-palayam.jpg        # Palayam Peppers organic spice
│       ├── portfolio-reflections.jpg    # Reflections documentary
│       └── portfolio-yokine.jpg         # A2B Yokine community dining
└── screenshots/
    ├── desktop-preview.png              # 1440x900 viewport capture
    ├── tablet-preview.png               # 820x1080 tablet capture
    ├── mobile-preview.png               # 480x960 mobile capture
    ├── desktop-fullpage.png             # Full desktop scroll capture
    └── mobile-fullpage.png              # Full mobile scroll capture
```

---
*Created for the RoseDsigns Web Design & Development Specialist Recruitment Assessment.*
