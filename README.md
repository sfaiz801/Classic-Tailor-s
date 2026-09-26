# ✂️ Classic Tailor's - Official Website & Progressive Web App (PWA)

A modern, high-performance, and responsive web application built for **Classic Tailor's** — a master bespoke traditional Indian men's tailoring shop located in Mirganj, Gopalganj, Bihar.

Founded in **1995** by master craftsman **Massom Ahmad (Masoom Ahmad Siddique)** with over **31+ years** of artisanal tailoring excellence.

---

## 🌟 Key Features

- **🎨 Modern Luxury Design**: Royal gold (`#d4af37`), deep royal maroon (`#6b0f1a`), and velvet navy aesthetic with smooth micro-interactions.
- **📱 100% Responsive**: Tailored for ultra-smooth performance across smartphones, tablets, laptops, and ultra-wide desktops.
- **👨‍🦳 Master Tailor Profile**: Dedicated section showcasing founder Massom Ahmad with an authentic portrait, gold frame border, and credentials.
- **🎁 Instagram Connect & Special Offer**: Interactive banner linking to [@classic_tailors_mirganj](https://www.instagram.com/classic_tailors_mirganj/) with an exclusive ₹100 discount coupon.
- **📲 Progressive Web App (PWA) & APK Ready**:
  - Offline caching with Service Worker (`sw.js`).
  - Web App Manifest (`manifest.json`) for 1-tap mobile installation ("Install App" floating banner).
  - Ready for Google Play Store / APK packaging via PWABuilder.
- **🏷️ Royal "CT" Crest & Favicons**: Crisp SVG & multi-resolution PNG icons (16px, 32px, 192px, 512px, Apple Touch Icon).
- **👔 Men's Specialization (सिर्फ पुरुषों का Tailor)**:
  - 10 comprehensive tailoring categories (Kurta Pajama, Safari Suit, Coat Pant, Bandhgala, Sherwani, Pathani Suit, Nehru Jacket, Formal Shirts, Trousers, Alterations).
  - Premium fabric partner branding (Raymond, Siyaram's, Reid & Taylor).
- **🖼️ Interactive Portfolio Gallery**: Category-filtered image grid with a full-screen Lightbox viewer.
- **⭐ Testimonial Carousel**: Verified customer reviews with star ratings and client location tags.
- **📅 Appointment & Inquiry Booking**: Direct booking form with instant validation.
- **💬 1-Click WhatsApp Quick Chat**: Floating pulse WhatsApp button (`+91 9431255424`).
- **🔍 SEO & Meta Optimized**: Open Graph cards, structured semantic HTML5, and geo-targeted local SEO for Mirganj / Gopalganj.

---

## 🛠️ Complete Tech Stack

| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | **Next.js 14** (App Router) | React framework with static site generation (SSG) & extreme optimization |
| **Language** | **TypeScript** | Type-safe code architecture with strict typing |
| **Styling Engine** | **Tailwind CSS v4** | Modern utility-first CSS engine with `@theme` CSS tokens (Zero SCSS) |
| **PostCSS** | **@tailwindcss/postcss** | Fast, modern CSS post-processing pipeline |
| **Icons** | **Lucide React** | Feather-light SVG vector iconography |
| **Typography** | **Google Fonts** | `Cinzel`, `Playfair Display`, `Outfit`, and `Cinzel Decorative` |
| **PWA & Mobile** | **Web App Manifest + Service Worker** | PWA installability, app shortcuts, and mobile-native look |
| **Version Control** | **Git & GitHub** | Hosted at `https://github.com/sfaiz801/Classic-Tailor-s` |

---

## 🔄 Recent Major Updates & Architectural Changes

### 1. Complete Migration to Tailwind CSS v4 (SCSS Removed)
- **Eliminated SCSS**: Completely removed all `*.module.scss` files, `_variables.scss`, `_mixins.scss`, and the `sass` compiler.
- **Tailwind CSS v4 Integration**: Configured `postcss.config.mjs` with `@tailwindcss/postcss` and created central theme variables in `src/styles/globals.css`.
- **Component-Level Styling**: Converted all 14 components to clean, responsive, and readable Tailwind utility classes.
- **Performance Boost**: Reduced initial JS bundle size to ~104 kB and eliminated CSS runtime overhead.

### 2. Shop & Owner Alignment
- Added high-resolution portrait of shop owner **Massom Ahmad** in the About section with a 31+ years legacy badge.
- Verified and updated authentic shop address: *Ganesh Cinema Road, Kalyani Chowk, Nagar Parishad Gali, Mirganj, Gopalganj, Bihar - 841438*.
- Updated contact details: Phone `+91 9431255424`, WhatsApp `+91 9905169149`, and email `classictailors.mir@gmail.com`.

### 3. Instagram Integration
- Embedded official Instagram handle [@classic_tailors_mirganj](https://www.instagram.com/classic_tailors_mirganj/).
- Introduced an interactive ₹100 discount coupon banner rewarding customers for following the Instagram page.

### 4. Progressive Web App (PWA) & App Download
- Generated customized royal gold "CT" crest icons across all dimensions (16x16, 32x32, 180x180, 192x192, 512x512).
- Added `manifest.json` and `sw.js` for standalone app behavior.
- Added smart `InstallAppBanner` component with iOS Safari instructions and Android 1-tap install prompt.

---

## 📁 Project Structure

```
Classic-Tailor-s/
├── public/
│   ├── icons/
│   │   ├── apple-touch-icon.png
│   │   ├── icon-192x192.png
│   │   └── icon-512x512.png
│   ├── images/
│   │   ├── owner.jpg             # Owner photo (Massom Ahmad)
│   │   └── shop-poster.jpg       # Shop banner reference
│   ├── favicon.ico
│   ├── favicon.svg               # Royal gold "CT" vector logo
│   ├── manifest.json             # PWA metadata
│   └── sw.js                     # Service worker
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Global layout, PWA meta, SEO
│   │   └── page.tsx              # Main homepage & loading screen
│   ├── components/
│   │   ├── Navbar.tsx            # Navigation bar & mobile menu
│   │   ├── Hero.tsx              # Hero header with CTA
│   │   ├── InstagramOffer.tsx    # ₹100 OFF Instagram discount banner
│   │   ├── About.tsx             # Owner portrait & shop story
│   │   ├── Stats.tsx             # 4-column counter cards
│   │   ├── Services.tsx          # 10 Men's tailoring services
│   │   ├── Gallery.tsx           # Portfolio grid & Lightbox modal
│   │   ├── Testimonials.tsx      # Customer review slider
│   │   ├── Contact.tsx           # Booking form & shop details
│   │   ├── Footer.tsx            # 4-column dark footer
│   │   ├── WhatsAppButton.tsx    # Floating quick chat CTA
│   │   ├── ScrollToTop.tsx       # Smooth top-scroll button
│   │   └── InstallAppBanner.tsx  # PWA app install prompt
│   ├── data/
│   │   ├── services.ts           # Services list & pricing
│   │   ├── gallery.ts            # Portfolio image categories
│   │   ├── testimonials.ts       # Customer reviews
│   │   └── shop.ts               # Core shop metadata & timings
│   └── styles/
│       └── globals.css           # Tailwind v4 import & @theme config
├── postcss.config.mjs            # PostCSS config for Tailwind v4
├── next.config.js                # Next.js static export settings
├── package.json                  # Dependencies & build scripts
├── tsconfig.json                 # TypeScript compiler configuration
├── DEPLOY.md                     # Deployment & APK guide
└── README.md                     # Documentation
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0 or higher
- npm, yarn, or pnpm

### Installation

```bash
# 1. Clone repository
git clone https://github.com/sfaiz801/Classic-Tailor-s.git

# 2. Open project folder
cd Classic-Tailor-s

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev
```

Visit `http://localhost:3000` in your web browser.

### Production Build

```bash
# Compile and export static production bundle
npm run build
```

The production output will be generated in the `dist/` directory, ready to deploy to any hosting provider.

---

## 📍 Shop Information

- **Shop Name**: Classic Tailor's
- **Proprietor**: Massom Ahmad (Masoom Ahmad Siddique)
- **Speciality**: Premium Men's Bespoke Tailoring (*सिर्फ पुरुषों का Tailor*)
- **Location**: Ganesh Cinema Road, Kalyani Chowk, Nagar Parishad Gali, Mirganj, Gopalganj, Bihar - 841438
- **Primary Mobile**: [+91 9431255424](tel:+919431255424)
- **Secondary / WhatsApp**: [+91 9905169149](https://wa.me/919431255424)
- **Email**: [classictailors.mir@gmail.com](mailto:classictailors.mir@gmail.com)
- **Instagram**: [@classic_tailors_mirganj](https://www.instagram.com/classic_tailors_mirganj/)
- **Store Hours**: Monday to Sunday: 10:00 AM – 9:00 PM

---

## 📜 License & Credits

© 2026 Classic Tailor's. All rights reserved.  
**Crafted & Managed with ❤️ by Faiz Siddique**
