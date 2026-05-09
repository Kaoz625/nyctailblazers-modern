# Replit Agent Task: nyctailblazers-modern

## Goal
Polish the existing React/Vite NYC Tailblazers site into a production-ready storefront with Calendly booking integration and deploy to Cloudflare Pages. The site should feel premium, modern, and convert visitors into bookings.

## Tasks
1. Audit existing src/ components and identify all incomplete or placeholder sections
2. Add a sticky navigation bar with smooth scroll links: Home, Services, About, Book Now
3. Integrate Calendly inline widget (embed script) on a dedicated `/book` route or modal triggered by "Book Now" CTA buttons throughout the site — use Calendly URL: https://calendly.com/nyctailblazers
4. Polish hero section: full-viewport background, headline, subheadline, and primary CTA button linking to Calendly booking
5. Build a Services section with cards for each NYC Tailblazers service offering (dog walking, group runs, training sessions) — use realistic placeholder copy if needed
6. Add Testimonials section with 3-5 client testimonials (realistic placeholder content)
7. Add Footer with social links (Instagram, TikTok, X), contact email, and copyright
8. Optimize all images with lazy loading and proper alt text for SEO
9. Add Open Graph and Twitter Card meta tags to index.html for social sharing
10. Set up Cloudflare Pages `_headers` file with security headers (X-Frame-Options, CSP, etc.) and cache rules
11. Ensure the build output (dist/) is clean and production-ready: run `npm run build` and fix any errors
12. Verify mobile responsiveness — all sections must look good at 375px width

## Tech Stack
- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS
- Calendly embed widget (script + React component)
- Cloudflare Pages (static deploy from dist/)

## Deploy Target
Cloudflare Pages — connect the GitHub repo `Kaoz625/nyctailblazers-modern`, set build command `npm run build`, output directory `dist`. Never Vercel.

## Done When
- [ ] Calendly booking widget is embedded and functional (click "Book Now" → opens Calendly)
- [ ] All major page sections render without console errors
- [ ] `npm run build` completes with zero errors or warnings
- [ ] Open Graph meta tags present in HTML head (og:title, og:description, og:image)
- [ ] `_headers` file exists with security headers
- [ ] Site is fully mobile-responsive at 375px viewport
- [ ] All changes pushed to `Kaoz625/nyctailblazers-modern` main branch
