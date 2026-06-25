# Handoff — Phase 5: Blog + Book Discovery

**Date:** 2026-05-31
**Features:** Blog system (MDX) + `/book-discovery` (Phase 5 P5.1–P5.5)
**Branch:** master
**Build:** ✅ `npm run build` + `npm run typecheck` both pass
**Routes:** 22 static pages

---

## What was built

### Blog system (P5.1–P5.4)
- **`@next/mdx`** installed + configured in `next.config.ts`
- **`src/mdx-components.tsx`** — custom MDX renderers (h1/h2/h3/p/ul/ol/a/strong/em/blockquote/hr)
- **`src/app/blog/layout.tsx`** — blog layout with max-width wrapper
- **`src/app/blog/page.tsx`** — listing with 3 seed posts (title, date, category, excerpt, link)
- **`src/app/blog/[slug]/page.tsx`** — dynamic post template with `generateStaticParams`, metadata from hardcoded registry
- **`src/app/blog/posts/*.mdx`** — 3 seed posts:
  1. *Automation for small business — where to start* (Automation)
  2. *Digital transformation without the jargon* (Digital Transformation)
  3. *Under the hood: how Inbox Killer actually works* (Under the Hood)
- **OG:** `public/og/blog.svg`
- **Sitemap:** `/blog/` added

### `/book-discovery` (P5.5, no Mollie yet)
- **Hero:** "Start with a paid Automation Map — €290."
- **What you get:** 4 bullets (session, written Map, ROI, fixed quote)
- **3 steps to clarity:** Pay & pick slot → Tell me about business → We meet
- **Risk reversal:** credited, keep the doc, honest outcome
- **Form:** `BookDiscoveryForm.tsx` (client component)
  - Fields: name, company, email, URL (optional), pain checkboxes, free text
  - No backend — shows confirmation message on submit
  - Mollie/Stripe + Calendly to be wired later (needs API keys)
- **Alt contact:** email link
- **Micro-FAQ:** 3 items (why paid, not ready, remote)
- **OG:** `public/og/book-discovery.svg`
- **Sitemap:** `/book-discovery/` added with priority 0.9

## Key decisions

- Frontmatter not auto-exported by `@next/mdx` — used hardcoded `POST_META` registry alongside dynamic component imports. Clean separation of concerns.
- `BookDiscoveryForm` is a client component (form state) — rest of page is SSR/SSG.
- Form submission is frontend-only for now (no backend endpoint). Fallback message instructs user to wait for email response.

## Out of scope (future session)
- Mollie/Stripe payment integration (needs `MOLLIE_API_KEY` in `.env.local`)
- Calendly embed or booking calendar
- Backend API route to handle form submissions (Next.js API routes disabled in static export)
- Webhook to Make/Zapier for form data

## Git log (Phase 5)

```
648a986 feat: /book-discovery page + form + OG + sitemap (Phase 5 P5.5, no Mollie yet)
b22baac feat: blog system (MDX) + 3 seed posts + OG + sitemap (Phase 5 P5.1-P5.4)
```

## Deploy status

Vercel production URL still returns 404. Next session should fix `VERCEL_PROJECT_ID` or use `npx vercel link` + `npx vercel dist --prod` locally to bind deployment to `flexgrafik-services` project.

## Next up

- Fix Vercel deploy (404 issue)
- Wire Mollie/Stripe + Calendly on `/book-discovery`
- Write more blog posts
- Real metrics in `/results` (replace `[X]` after first deliveries)
