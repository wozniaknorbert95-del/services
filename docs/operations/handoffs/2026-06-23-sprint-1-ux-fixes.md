# Handoff — Sprint 1 UX fixes (AUD-P02/P03, P0 spearhead)

**Date:** 2026-06-23  
**Repo:** services.flexgrafik.nl  
**Build:** `npm run build` ✅

## Co zrobiono

### 1. Proof media — zero `[FILL:]` na produkcji
- `ProofEmptyState.tsx` — designed empty state (eyebrow, title, description, optional CTA)
- `ProofScreenSlot.tsx` — screen z fallbackiem zamiast debug text
- `VideoSlot.tsx` — per-key copy + optional `hideWhenEmpty`; local `<video>` dla assetów `/`
- `SolutionLayout.tsx` + `CaseStudyLayout.tsx` — używają nowych slotów; measurement fallback bez `[FILL:]`

### 2. P0 — Inbox Killer spearhead naprawiony
- `solutions/inbox-killer/page.tsx` — pełny rewrite: Read → Classify → Draft → Approve; pricing `From €1,200`
- `results/inbox-killer/page.tsx` — case study o klasyfikacji skrzynki (nie Telegram deploy)
- `solutions/inbox-killer/layout.tsx` — metadata: *Lead Qualification System*
- `SpearheadSpotlight.tsx` — terminal: `read → classify → draft → approve`

### 3. Legacy `/inbox-killer/`
- `inbox-killer/page.tsx` → `redirect(ROUTES.inboxKiller)` (Vercel 301 już w `vercel.json`)

### 4. Hero + sticky CTA (Sprint 1.3–1.4)
- `conversion-copy.ts` — `wizardCta`, `wizardHref`, `whatsappCta`
- `HeroSection.tsx` — primary Book + ghost WhatsApp + See systems + wizard link
- `StickyCta.tsx` — mobile bar po scrollu do `system-metrics`; wired w `page.tsx` + `pb-20` offset

### 5. Founder
- `founder/page.tsx` — VideoSlot z empty state + CTA do `/results/`

## Pliki zmienione / nowe

| Plik | Akcja |
|------|--------|
| `src/components/ui/ProofEmptyState.tsx` | new |
| `src/components/ui/ProofScreenSlot.tsx` | new |
| `src/components/ui/VideoSlot.tsx` | rewrite |
| `src/components/layout/StickyCta.tsx` | new |
| `src/components/solutions/SolutionLayout.tsx` | update |
| `src/components/casestudy/CaseStudyLayout.tsx` | update |
| `src/app/solutions/inbox-killer/page.tsx` | rewrite |
| `src/app/solutions/inbox-killer/layout.tsx` | metadata |
| `src/app/results/inbox-killer/page.tsx` | rewrite |
| `src/app/inbox-killer/page.tsx` | redirect |
| `src/content/conversion-copy.ts` | hero CTAs |
| `src/components/home/HeroSection.tsx` | WhatsApp + wizard |
| `src/components/home/SpearheadSpotlight.tsx` | terminal copy |
| `src/app/page.tsx` | StickyCta |
| `src/app/founder/page.tsx` | video empty state |

## Weryfikacja

```bash
npm run build   # pass
rg '\[FILL:' src/   # 0 matches
```

Post-deploy (Dowódca):
1. `node scripts/audit-404s.mjs` — console errors = 0
2. Mobile home — sticky CTA po sekcji System Metrics
3. `/solutions/inbox-killer/` — H1 Inbox Killer, nie Telegram
4. Ustaw `NEXT_PUBLIC_WHATSAPP_URL` w Vercel (obecnie placeholder `31600000000`)

## Następny krok (Sprint 2)

Z `docs/plans/2026-06-23-ux-ui-improvement-plan.md`:
- Home section consolidation (14 → mniej)
- hreflang NL na 5 high-intent routes
- Nagranie founder + inbox walkthrough video (wtedy `videos.*.ready = true`)
