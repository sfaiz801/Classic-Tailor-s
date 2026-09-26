# 🚀 Deployment & APK Conversion Guide - Classic Tailor's

This guide details how to deploy the **Classic Tailor's** web app to production and how to generate an Android APK directly from the website.

---

## 🌐 1. Deploying the Website

### Option A: Vercel (Recommended — Free & 1-Click)

1. Ensure the latest code is pushed to your GitHub repository:
   ```bash
   git push origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
3. Click **"Add New"** > **"Project"**.
4. Select the repository: `sfaiz801/Classic-Tailor-s`.
5. Keep default settings (Framework: Next.js).
6. Click **Deploy**.
7. Your website will be live at `https://classic-tailors.vercel.app` (or your custom domain).

---

### Option B: Netlify

1. Build the production files:
   ```bash
   npm run build
   ```
2. Log in to [netlify.com](https://netlify.com).
3. Drag and drop the `dist/` folder into the Netlify Sites dashboard.
4. Or connect your GitHub repository for continuous automated deployment:
   - Build Command: `npm run build`
   - Publish Directory: `dist`

---

### Option C: GitHub Pages

1. Install `gh-pages` if needed:
   ```bash
   npm install --save-dev gh-pages
   ```
2. Add deploy script to `package.json`:
   ```json
   "scripts": {
     "deploy": "next build && gh-pages -d dist"
   }
   ```
3. Run:
   ```bash
   npm run deploy
   ```

---

## 📱 2. How to Convert the Website into an Android APK

Since the project is already built as a **Progressive Web App (PWA)** with a valid `manifest.json`, Service Worker, and high-resolution icons:

### Method 1: Instant Install via Mobile Browser (No Play Store needed)
1. Open the deployed website link (e.g., `https://classic-tailors.vercel.app`) on an Android phone in Google Chrome.
2. An interactive **"📱 Install App / ऐप डाउनलोड करें"** banner will automatically appear at the bottom of the screen.
3. Tap **"Install Now"** — the app will be added directly to the phone's home screen with the royal "CT" gold icon and will launch in full-screen standalone app mode!

### Method 2: Generate Official Android APK via PWABuilder (For WhatsApp / Play Store)
1. Deploy your website to Vercel or Netlify so that you have a live `https://` URL.
2. Go to [pwabuilder.com](https://www.pwabuilder.com).
3. Enter your live website URL and click **"Start"**.
4. PWABuilder will automatically verify the manifest, icons, and service worker (all tests will pass).
5. Click **"Package for Stores"** > Select **"Android"**.
6. Download the signed `.apk` or `.aab` package.
7. You can now distribute this APK file to your customers directly on WhatsApp or publish it to the Google Play Console!

---

## 🛠️ Verification Checklist Before Launch

- [x] All `.module.scss` files removed and replaced with modern Tailwind CSS v4.
- [x] Shop owner Massom Ahmad's photo placed in the About section.
- [x] Contact phone numbers: `+91 9431255424` & `+91 9905169149`.
- [x] Shop email: `classictailors.mir@gmail.com`.
- [x] Instagram connected: `@classic_tailors_mirganj` with ₹100 discount coupon.
- [x] PWA manifest & Service Worker active.
- [x] Next.js production build (`npm run build`) passing with exit code 0.
