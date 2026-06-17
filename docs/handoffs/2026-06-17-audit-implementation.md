# Handoff — Audit Remediation Implementation

**Date:** 2026-06-17  
**Scope:** Phases 0–5 of audit remediation plan

---

## Completed

### Faza 0 — Canon v2.1
- `docs/strategy/*` patched per 53 audit points
- `brain.md`, `AGENTS.md`, `DESIGN-SYSTEM.md` updated

### Faza 1 — MVP konwersji
- Home: 5 sections (Hero, SystemArchitecture, ResultsTeaser, BehindTheScenes, FinalCtaBand)
- Hero: anti-positioning, Conversion Systems Architect, L2 wizard, mobile WhatsApp primary
- Header: cold "See systems" / returning "Start chat"
- StickyCta component
- Pricing: PRODUCT_TIER_RANGES table + budget qualification copy

### Faza 2 — Proof
- Case studies reframed (self-as-client ecosystem)
- FieldReports on `/results/`
- SystemMetrics outcome translations on `/results/`
- WhyThisWorks named objections (component ready for Phase 2 home)

### Faza 3 — WhatsApp
- `WHATSAPP` constant + env `NEXT_PUBLIC_WHATSAPP_URL`
- CTAs in Hero, Header, StickyCta
- Legal AVG section
- `/results/whatsapp-discovery-pilot/` stub

### Faza 4 — UX
- Motion: heroEntrance preset
- Loading skeleton state
- How-it-works "After delivery" retention block

### Faza 5 — Tech
- `scripts/generate-sitemap.mjs` + prebuild hook
- `scripts/generate-og.mjs`, `scripts/lighthouse-ci.mjs`
- `.github/workflows/lighthouse.yml`
- Organization + Person JSON-LD in layout
- next.config image formats policy

---

## Deferred

- i18n NL (5 routes) — separate epic
- Light theme toggle — post-MVP
- Live Loom recordings — asset production

---

## Verify

```bash
npm run typecheck
npm run build
```

---

*Owner: Norbert Wozniak*
