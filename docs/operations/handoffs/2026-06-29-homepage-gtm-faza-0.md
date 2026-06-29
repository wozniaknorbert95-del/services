# Handoff — Homepage GTM Faza 0 (2026-06-29)

**Repo:** services.flexgrafik.nl · **Build:** `npm run build` ✅ (34 routes)

## Cel / Goal

Implement GTM pack v2 homepage requirements (M0.2) — dual-brand, Featured strip, de-jargon hero, P→S→E narrative, LIVE/PARTIAL badges — so LinkedIn B2B traffic has a landing that passes the 5s test.

## Co zrobiono / What changed

### S1 — DualBrand + Featured
- `DualBrandBand` — Quietforge sell / FlexGrafik proof
- `FeaturedStrip` — Map €290 · /results/ · /how-it-works/ (LI mirror)
- `site-map.md §3` renumbered (15 sections)

### S2 — Hero P→S→E + de-jargon
- Hero: 3-beat Problem → System → Effect list
- Terminal mock replaced with wizard checkout screenshot + LIVE badge
- Proof strip: no „8-repo governance”
- `ResultsTeaser`: explicit P→S→E labels on cards
- Root + home OG metadata de-jargoned

### S3 — LIVE/PARTIAL badges
- `IntentRouter`: outcome-first copy, no repo keys above fold, StatusBadge per module
- `SpearheadSpotlight`: LIVE badge on wizard proof
- `getReadinessStatus()` helper in readiness.ts

### S4 — Verify
- Book Discovery: copy already aligned (request slot → payment link in 24h) — no code change needed
- StickyCta: already triggers on `built-vs-planned` — verified

## Commity

| Commit | Opis |
|--------|------|
| `3e7b418` | GTM pack v2 docs |
| `59178e0` | Faza 0 plan |
| `de22608` | S1 DualBrand + Featured |
| (HEAD) | S2–S4 hero, badges, IntentRouter |

## Pliki / Files

| File | Action |
|------|--------|
| `src/components/home/DualBrandBand.tsx` | new |
| `src/components/home/FeaturedStrip.tsx` | new |
| `src/components/home/HeroSection.tsx` | rewrite hero layout |
| `src/components/home/IntentRouter.tsx` | de-jargon + badges |
| `src/components/home/ResultsTeaser.tsx` | P→S→E labels |
| `src/components/home/SpearheadSpotlight.tsx` | LIVE badge |
| `src/content/conversion-copy.ts` | DUAL_BRAND, FEATURED_STRIP, HERO beats |
| `src/content/ecosystem.ts` | HOME_SECTIONS + INTENT_ROUTER_HEADER |
| `src/content/readiness.ts` | getReadinessStatus |
| `src/app/globals.css` | qf-hero-*, qf-dual-brand-*, qf-featured-* |
| `src/app/page.tsx` | section order + OG |
| `src/app/layout.tsx` | root metadata de-jargon |
| `docs/strategy/site-map.md` | §3 + §4 proof strip |

## GTM gap table — status po Faza 0

| Wymaganie | Status |
|-----------|--------|
| Dual-brand band | ✅ DONE |
| Featured paths | ✅ DONE |
| Problem→System→Effect hero | ✅ DONE |
| De-jargon above fold | ✅ DONE |
| LIVE/PARTIAL badges | ✅ DONE (IntentRouter + Spearhead) |
| L3 Map first screen | ✅ Hero + Featured |
| Book Discovery drift | ✅ Already manual-qualification model |
| Spójność post ↔ home | ⏳ Commander: LI Featured manual |

## Weryfikacja / Verification

```bash
npm run typecheck   # pass
npm run build       # pass (34 routes)
```

## Post-deploy smoke (Commander)

1. Home `/` — 5s test: QF sell / FG proof / Map CTA without scroll (desktop)
2. Featured cards → correct URLs + €290 on card #1
3. Hero: no terminal, no „8-repo” above fold
4. IntentRouter: badges visible, no „Eight parts” headline
5. `/book-discovery/` — form = „Request my Automation Map slot”
6. Mobile — sticky CTA appears after BuiltVsPlanned section

## Następne kroki

1. **Push master** → Vercel CD (auto)
2. **Commander manual** — LinkedIn Featured 3 URLs ([02-channel-architecture](../../strategy/gtm/02-channel-architecture.md))
3. **M1.1** — pierwszy post B2B P1 ([07-playbook #1](../../strategy/gtm/07-post-playbook.md))
4. Opcjonalnie: pricing SSoT drift across routes (osobna sesja)
