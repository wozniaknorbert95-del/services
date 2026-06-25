# CS-1 — Inbox Killer case study gratka

**Date:** 2026-06-13  
**Module:** services (Quietforge)  
**Scope:** Case study 01 expansion — sales gratka, one session (1-1-1).

---

## What was done

1. **Dedicated case study page** — `/results/inbox-killer/`
   - Before/after comparison
   - Embedded flow diagram (SVG)
   - Five steps (aligned with blog post)
   - Proof block + CTA → `/book-discovery/`

2. **Downloadable gratka**
   - `public/gratka/inbox-killer-flow.svg` — visual flow for non-technical owners
   - `public/gratka/inbox-killer-before-after.pdf` — forwardable one-pager (no `[X]`)

3. **Wiring**
   - `/results` card 01 → full case study + download links
   - Home `ResultsTeaser` → link to case study
   - `src/lib/case-studies.ts` — shared data (DRY for future CS-2..4)
   - `src/lib/gratka.ts` — asset paths

4. **SEO**
   - OG: `public/og/results-inbox-killer.svg`
   - Sitemap: `/results/inbox-killer/`

5. **Tooling**
   - `scripts/generate-artefact-pdfs.mjs` extended for `public/gratka/`

---

## Factual claims (backed)

| Claim | Source |
|---|---|
| classify → plan → diff → approve | Spearhead terminal, blog post |
| 100+ messages/scan | Case study copy (live system) |
| HITL on every send | Blog + Trust & Safety |
| 5 steps Read→Approve | Blog `under-the-hood-how-inbox-killer-works.mdx` |
| Measurement estimate | Honest — per client confirmation |

---

## DoD checklist

- [x] Downloadable assets, no `[X]` on public pages
- [x] Links from `/results` case 01
- [x] CTA → book-discovery
- [x] `npm run build` + typecheck pass
- [x] Sitemap updated

---

## Next session

**CS-2 — Multi-agent orchestrator gratka**  
See `docs/handoffs/ROADMAP-case-study-expansion.md` § Case 02.

Deliverables: architecture one-pager PDF, agent card sample, workflow map.

---

## Files touched

- `src/app/results/inbox-killer/page.tsx` (new)
- `src/app/results/page.tsx`
- `src/lib/case-studies.ts` (new)
- `src/lib/gratka.ts` (new)
- `src/lib/constants.ts`
- `src/components/home/ResultsTeaser.tsx`
- `public/gratka/*`
- `public/og/results-inbox-killer.svg`
- `public/sitemap.xml`
- `scripts/generate-artefact-pdfs.mjs`
