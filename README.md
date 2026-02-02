# Baha Lounge - Next.js Website

A modern Next.js rebuild of the Baha Lounge restaurant website, featuring a responsive design, optimized performance, and easy deployment to Vercel.

## Features

- ⚡ Built with Next.js 14 and React 18
- 🎨 Styled with Tailwind CSS
- 📱 Fully responsive design
- 🖼️ Optimized images with Next.js Image component
- 📝 Contact and reservation forms
- 🎭 Interactive gallery with lightbox
- 🔍 SEO optimized

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. **Clone or download this project**

2. **Install dependencies:**
   ```bash
   cd bahalounge
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## Project Structure

```
bahalounge/
├── src/
│   ├── app/
│   │   ├── globals.css       # Global styles
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Homepage
│   │   ├── about/
│   │   │   └── page.tsx      # About page
│   │   ├── contact/
│   │   │   └── page.tsx      # Contact page
│   │   ├── menu/
│   │   │   └── page.tsx      # Menu page
│   │   └── reservation/
│   │       └── page.tsx      # Reservation page
│   └── components/
│       ├── Header.tsx
│       ├── Footer.tsx
│       ├── HeroSection.tsx
│       ├── CategorySection.tsx
│       ├── StorySection.tsx
│       ├── MenuSection.tsx
│       ├── ServicesSection.tsx
│       ├── GallerySection.tsx
│       └── BookingSection.tsx
├── public/
│   └── images/              # Local images (optional)
├── package.json
├── tailwind.config.ts
├── next.config.js
└── tsconfig.json
```

## Deployment to Vercel

### Option 1: Deploy via GitHub (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/bahalounge.git
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Click "Deploy"

3. **Connect your domain:**
   - In Vercel dashboard, go to Settings > Domains
   - Add `bahalounge.com`
   - Update your DNS records as instructed

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

## Connecting Your Domain (bahalounge.com)

1. In Vercel dashboard, go to your project settings
2. Click "Domains"
3. Add `bahalounge.com`
4. Vercel will provide DNS records to add to your domain registrar:
   - A record pointing to `76.76.21.21`
   - Or CNAME record pointing to `cname.vercel-dns.com`
5. Update these at your domain registrar (where you bought the domain)
6. Wait for DNS propagation (usually 5-30 minutes)

## Form Handling

Currently, forms log to console. To make them functional, integrate with:

### Option A: Formspree (Easiest)
1. Sign up at [formspree.io](https://formspree.io)
2. Create a form and get your endpoint
3. Update form action to: `https://formspree.io/f/YOUR_FORM_ID`

### Option B: Resend (For email notifications)
1. Sign up at [resend.com](https://resend.com)
2. Install: `npm install resend`
3. Create an API route to send emails

### Option C: Custom API
Create `/src/app/api/contact/route.ts` to handle submissions

## Customization

### Colors
Edit `tailwind.config.ts` to change the color scheme:
```typescript
colors: {
  primary: {
    DEFAULT: '#c9a227', // Gold color
    dark: '#b8931f',
    light: '#d4b442',
  },
  // ...
}
```

### Fonts
Fonts are loaded from Google Fonts in `globals.css`. Change them there.

### Content
- Menu items: Edit `src/app/menu/page.tsx`
- Gallery images: Edit `src/components/GallerySection.tsx`
- Contact info: Edit `src/components/Footer.tsx` and `src/app/contact/page.tsx`

## Local Images (Optional)

To use local images instead of loading from the WordPress site:

1. Download images and place in `public/images/`
2. Update image sources from:
   ```jsx
   src="https://bahalounge.com/wp-content/uploads/..."
   ```
   to:
   ```jsx
   src="/images/your-image.jpg"
   ```

## Support

For any issues or questions about this template, please open an issue on GitHub.

---

Built with ❤️ using Next.js and Tailwind CSS
