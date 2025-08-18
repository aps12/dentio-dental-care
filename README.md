# Dentio Dental Care Website

A modern, professional, and mobile-friendly multi-page website for Dentio Dental Care, Hinjewadi, Pune. Built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion for seamless layouts, advanced UI/UX, engaging animations, and strong SEO.

---

## Features

- **Modern UI/UX:** Clean, accessible, and responsive design inspired by leading dental clinic websites.
- **Multi-Page Structure:** Home, About, Services, Team, Gallery, Contact, and FAQs.
- **Unified Data Sources:** Services and team data managed from a single source for consistency.
- **Advanced Animations:** Smooth transitions and interactive elements using Framer Motion.
- **SEO & Local Optimization:** Comprehensive meta tags, Open Graph, Twitter Card, and LocalBusiness schema for strong search presence.
- **Persistent CTAs:** WhatsApp booking button and contact icon always accessible.
- **Gallery:** 3D slider, filterable by category, with WhatsApp CTA for more images.
- **Accessibility:** All components are accessible and optimized for keyboard and screen readers.
- **Mobile-First:** Fully responsive layouts and touch-friendly controls.

---

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router, SSR, SEO)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) (animations)

---

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

3. **Open your browser:**
   Visit [http://localhost:3000](http://localhost:3000) to view the site.

---

## Project Structure

- `src/app/` — Main app directory (Next.js App Router)
  - `page.tsx` — Home page
  - `about/page.tsx` — About page
  - `services/page.tsx` — Services page (single source of truth for services)
  - `team/page.tsx` — Team page (single source of truth for team)
  - `gallery/page.tsx` — Gallery with 3D slider and WhatsApp CTA
  - `contact/page.tsx` — Contact form and info
  - `faqs/page.tsx` — FAQs with animated accordions
  - `layout.tsx` — Global layout, navigation, footer, SEO meta, schema
  - `metadata.tsx` — Centralized SEO/meta data
- `public/` — Static assets (images, icons, etc.)
- `README.md` — This file

---

## Customization & Content

- **Services & Team:**
  - Update the services and team members in `src/app/services/page.tsx` and `src/app/team/page.tsx`.
- **SEO & Metadata:**
  - Edit `src/app/metadata.tsx` for meta tags, keywords, and business info.
- **Images:**
  - Add or replace images in the `public/` directory.

---

## Deployment

Deploy easily on [Vercel](https://vercel.com/) or any platform supporting Next.js:

1. **Build for production:**
   ```bash
   npm run build
   ```
2. **Start the production server:**
   ```bash
   npm start
   ```

---

## Accessibility & Best Practices

- All interactive elements are keyboard accessible.
- Color contrast and font sizes are optimized for readability.
- Images include descriptive `alt` text.
- Layouts are mobile-first and touch-friendly.

---

## Contact

Dentio Dental Care, Hinjewadi, Pune 411057  
Phone: +91 86250 98210  
Email: dentioclinic@gmail.com  
Website: [https://dentio.co.in/](https://dentio.co.in/)
