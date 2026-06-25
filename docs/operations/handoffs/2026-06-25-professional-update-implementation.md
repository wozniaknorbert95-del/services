# Handoff — Quietforge Professional Update implementation (2026-06-25)

**Repo:** services.flexgrafik.nl · **Build:** `npm run build` ✅

## Goal

Implement Professional Update v2/v3 canon on live site: buyer-first home, pricing SSoT, Book Discovery fallback, trust/hub polish.

## What changed

### Canon (Sprint 0)
- Promoted `docs/strategy/*` v2/v3 from `quietforge-professional-update/` (folder removed)
- Updated `strategy-rules.md` SR-01 (13 sections), SR-15/18 (pricing + Book Discovery)
- Updated `strategy-check` + `section-build` skills
- Audit moved to `docs/audits/2026-06-25-quietforge-ux-ia.md`
- Tracker: `docs/operations/implementation-checklist.md`

### Sprint 1 — Trust
- `src/content/pricing.ts` — single pricing SSoT
- Fixed €99/€290 fragments → Managed Automation €349–€890/mo
- Book Discovery: request-slot fallback model (no "Send enquiry")
- Founder: removed agency copy + video placeholder → static proof block
- WhatsApp pilot: noindex, removed from results hub + sitemap
- Solutions hub + nav: Web Upgrade before Sales Funnel, price ranges

### Sprint 2 — Home buyer-first
- `page.tsx` — 13-section order per site-map §3
- Hero, PainGrid, SystemMetrics compact, BuiltVsPlanned compact, LOS teaser, IntentRouter outcome-first
- Removed `OwnerEcosystemTeaser` from home

### Sprint 3–4 — Hubs + QA
- Results cards: Problem → System → Effect + status badge
- Pricing: mobile card layout, budget copy fix
- Trust: AVG/DPA checklist
- `src/lib/analytics.ts` + events on key CTAs

## Key files

| Area | Files |
|------|--------|
| Pricing SSoT | `src/content/pricing.ts`, `src/lib/constants.ts`, `src/content/proof.ts` |
| Home | `src/app/page.tsx`, `src/content/ecosystem.ts`, `src/content/conversion-copy.ts` |
| Book Discovery | `src/app/book-discovery/*` |
| Nav | `src/lib/navigation.ts` |
| Analytics | `src/lib/analytics.ts`, `src/components/ui/Button.tsx` |

## Verification

```bash
npm run build   # ✅
# sitemap: 23 routes (whatsapp pilot excluded)
```

## Next (optional)

- Payment + calendar integration for Book Discovery (model switch)
- Complete whatsapp pilot case or keep hidden
- Wire analytics to GA4/Plausible listener on `qf_analytics` event
