# 🚀 Deployment Guide - Classic Tailor's Website

## Quick Deploy Options

### Option 1: Vercel (Recommended - Easiest)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/sfaiz801/classic-tailors.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account
   - Click "New Project"
   - Import `sfaiz801/classic-tailors`
   - Vercel will auto-detect Next.js and deploy
   - Your site will be live at: `https://classic-tailors.vercel.app`

### Option 2: Netlify

1. **Build the project**
   ```bash
   npm install
   npm run build
   ```

2. **Deploy**
   - Go to [netlify.com](https://netlify.com)
   - Drag & drop the `dist` folder
   - Or connect your GitHub repo for auto-deploy

### Option 3: GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

## Local Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Open http://localhost:3000
```

## Project Features

✅ Fully Responsive (Mobile, Tablet, Laptop, Desktop)
✅ Indian Traditional Theme (Gold & Maroon)
✅ Smooth Animations & Transitions
✅ SEO Optimized
✅ WhatsApp Integration
✅ Contact Form
✅ Gallery with Lightbox
✅ Testimonials Slider
✅ Services with Pricing

## Contact

**Classic Tailor's**
- Owner: Massom Ahmad
- Address: Ganesh Cinema Road, Kalyani Chowk, Nagar Parishad Gali, Mirganj, Bihar - 841438
- Phone: +91 9431255424
- Alt / WhatsApp: +91 9905169149
- Instagram: @classic_tailors_mirganj
- Email: classictailors.mir@gmail.com
- Timings: 10:00 AM - 9:00 PM
