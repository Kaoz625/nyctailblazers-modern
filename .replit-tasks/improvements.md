# Replit Agent Task Spec

## Instructions for Replit Agent
You are building/improving this project. Read this file carefully before touching any code.
Commit all changes with prefix "replit: " and push to main when done.
When all tasks are complete, fill out .replit-tasks/RESULTS.md and commit+push.

## Stack Rules (non-negotiable)
- Static → Cloudflare Pages (never Vercel)
- DB → Supabase self-hosted Docker (never cloud Supabase)
- Auth → NextAuth.js (free, not Auth0/Clerk)
- AI → Claude Sonnet 4.6 via Anthropic API (model: claude-sonnet-4-6)
- Payments (adult) → CCBill or Segpay only

## Improvements To Make
1. **Add booking section** — Embed Calendly free widget (https://calendly.com) in a dedicated "Book Now" section. Use Calendly's free inline embed script. Section should be visually prominent with a CTA above it.
2. **Add real service pricing** — Create a pricing/services section with these tiers: 30-min solo walk ($25), 60-min solo walk ($40), group walk ($20), drop-in visit ($20), overnight boarding ($75/night). Style with cards using Tailwind.
3. **Connect contact form to email** — Add a contact form (name, email, dog name, message) that submits to Formspree (https://formspree.io — free tier, no backend needed). Use the Kaoz625 GitHub email or create a free Formspree endpoint.
4. **Ensure mobile responsive** — Audit every section at 375px, 768px, 1280px. Fix any overflow, font-size, padding, or layout issues. Test the nav hamburger menu on mobile.
5. **Add social media links** — Add Instagram, Facebook, and TikTok icons linking to @NYCTailblazers on each platform. Place in header nav and footer. Use Heroicons or inline SVG.
6. **Remove gh-pages deployment** — Remove the gh-pages package and deploy script from package.json. Replace with Cloudflare Pages instructions.
7. **Add Cloudflare Pages deploy config** — Create a `_headers` file in public/ with security headers. Add a `wrangler.toml` with `[site]` bucket = "dist". Add build instructions to README: `npm run build` → deploy `dist/` to Cloudflare Pages.
8. **SEO meta tags** — Add og:title, og:description, og:image, twitter:card meta tags to index.html. Title: "NYC Tailblazers — Professional Dog Walking & Pet Care NYC". Description should mention neighborhoods served.
9. **Fix any TypeScript/lint errors** — Run `npm run build` and fix all errors before committing.

## Do Not Touch
- /images/ directory (keep existing photos)
- tailwind.config.js color scheme (keep brand colors)

## Definition of Done
- [ ] All improvements implemented and working
- [ ] No TypeScript/lint errors (`npm run build` passes)
- [ ] Calendly widget loads in booking section
- [ ] Contact form submits successfully (test with a real submission)
- [ ] Site renders correctly on mobile (375px)
- [ ] Social media links present in header and footer
- [ ] Pushed to main with "replit: " commit prefix
