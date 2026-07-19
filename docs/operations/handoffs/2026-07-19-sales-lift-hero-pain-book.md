# Handoff — Sales lift: hero CTA + PainGrid + Book Map (2026-07-19)

**Repo:** services.flexgrafik.nl · **Build:** `npm run build` ✅ (36 routes) · **EN stays** (no NL)

## Cel / Goal

Lift conversion without NL: Book Map CTA in first mobile viewport, beautiful PainGrid (quote-first + reliable nav), de-jargon home proof, Book Map fast path (WhatsApp payment ask), money-page L3 above Problem.

## Co zrobiono / What changed

- **Hero:** CTA band before beats; dual-brand 1-liner; price meta on Book Map; beats hidden &lt;640px; proof strip without HITL jargon  
- **PainGrid:** Next.js `Link` (reliable tap); lead card “Quote first”; `qf-pain-*` polish  
- **De-jargon:** readiness/homeStatusNote/IntentRouter plain language  
- **Book Map:** hero fast path WhatsApp `bookMapUrl` + form `#request-slot`  
- **Solutions / SolutionLayout:** Book Map CTA in first screen  
- **StickyCta:** after hero exit; Book Map filled primary on mobile  
- **site-map.md** §3–§4 updated (anti-chaos)

## Pliki / Files

| File | Action |
|------|--------|
| `src/components/home/HeroSection.tsx` | rewrite fold |
| `src/components/home/PainGrid.tsx` | rewrite nav/polish |
| `src/components/layout/StickyCta.tsx` | update |
| `src/components/solutions/SolutionLayout.tsx` | hero L3 |
| `src/app/book-discovery/page.tsx` | beauty + fast path |
| `src/app/solutions/page.tsx` | spearhead Book CTA |
| `src/content/conversion-copy.ts` | HERO + Featured |
| `src/content/ecosystem.ts` / `readiness.ts` | de-jargon |
| `src/lib/constants.ts` | WHATSAPP.bookMapUrl |
| `src/app/globals.css` | qf-hero / qf-pain / qf-book |
| `docs/strategy/site-map.md` | §3–§4 |

## Weryfikacja / Verification

```bash
npm run typecheck   # pass
npm run build       # pass (36 routes)
```

## Post-deploy smoke (Dowódca)

1. Mobile `/` — Book Map (€290 meta) visible without scroll; dual-brand line  
2. Pain “Quotes by hand” → `/solutions/sales-funnel/`  
3. `/book-discovery/` — WhatsApp payment CTA + form  
4. `/solutions/sales-funnel/` — Book Map above Problem  
5. Sticky after scroll — Book Map filled  

## Następny krok / Next steps

- Optional: wire real Mollie Map payment URL when ready  
- Commander outbound: LI Featured / FB paste 167  
