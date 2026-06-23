# UX/UI Improvement Plan — Quietforge Portfolio

**Date:** 2026-06-23  
**Site:** https://services.flexgrafik.nl  
**Baseline:** Portfolio skills audit (`docs/audits/2026-06-23/portfolio/`) — 3.9/5  
**Canon:** `docs/strategy/ui-ux-principles.md`, `DESIGN-SYSTEM.md`, `site-map.md`

---

## Goal

Raise portfolio from **B+ (3.9)** to **A (4.5+)** without breaking strategy canon. One module per OpenCode session; build gate between batches.

---

## Sprint 0 — Shipped (2026-06-23)

- [x] Social links: LinkedIn, FlexGrafik, WhatsApp (`SocialLinks` footer + `/about/`)
- [x] FLEXGRAFIK proof copy (`conversion-copy.ts`)
- [x] JSON-LD `sameAs`
- [x] Footer PDF `<a download>` (404 fix)

---

## Sprint 1 — Trust killers (P1, ~1 week)

| # | Task | UX impact | Files | Effort |
|---|------|-----------|-------|--------|
| 1.1 | Remove/replace all `[FILL: video]` with designed empty state or hide slot | H8, D6 — unfinished signal | `VideoSlot.tsx`, `/founder/`, solution pages | M |
| 1.2 | Rename solution H1: **Inbox Killer** (not Telegram Deployment Agent) | H2, H4 consistency | `solutions/inbox-killer/page.tsx` | S |
| 1.3 | `NEXT_PUBLIC_WHATSAPP_URL` + hero ghost CTA (mobile-primary) | H7, funnel L3 | `HeroSection`, `constants.ts`, Vercel env | M |
| 1.4 | Sticky CTA bar mobile from section 3 (after first proof) | H7 attention decay | new `StickyCta.tsx`, `page.tsx` | M |
| 1.5 | Re-run `audit-404s.mjs` post-deploy — console errors = 0 | H9 hard gate | verify only | S |

**Done when:** No bracket placeholders on money pages; Nielsen H8/H9 ≥ 4.

---

## Sprint 2 — Conversion polish (P2, ~1 week)

| # | Task | UX impact | Files | Effort |
|---|------|-----------|-------|--------|
| 2.1 | Hero secondary: **See the wizard (2 min)** → zzpackage | L2 canon | `conversion-copy.ts`, `HeroSection` | S |
| 2.2 | Home MVP mode OR collapse 4 sections to “phase 2” per audit canon | H8 minimalism | `site-map.md`, `page.tsx` | L |
| 2.3 | Pricing: explicit Automation Map €290 in hero hint on `/pricing/` | H5 error prevention | `pricing/page.tsx` | S |
| 2.4 | `/book-discovery/` warm-lead line for returning PDF visitors | funnel warmth | `book-discovery/page.tsx` | S |
| 2.5 | Footer `portfolio.flexgrafik.nl` → `/results/owner-ecosystem/` | H4 link clarity | `conversion-copy.ts` | S |

**Done when:** Cold visitor can reach proof or wizard in ≤2 clicks from hero.

---

## Sprint 3 — Visual system (P2, ~1 week)

| # | Task | UX impact | Files | Effort |
|---|------|-----------|-------|--------|
| 3.1 | Designed empty states (§14 ui-ux-principles): no proof yet, video pending | D6, D10 | `quietforge.css`, `VideoSlot` | M |
| 3.2 | Motion cheatsheet implementation: hero fade, scroll reveal, focus rings | D9 consistency | section components | M |
| 3.3 | Light theme toggle (optional SMB daylight reading) | ICP mobile daylight | `globals.css`, header toggle | L |
| 3.4 | Case study print stylesheet for PDF export | sales WhatsApp flow | case study CSS | M |
| 3.5 | Sync live metrics on home: 200+ SKUs, inbox scan count (if honest) | H2 recognition | `proof.ts`, `SystemMetrics` | S |

**Done when:** UI design review avg ≥ 4.5.

---

## Sprint 4 — Technical quality (P2–P3)

| # | Task | UX impact | Files | Effort |
|---|------|-----------|-------|--------|
| 4.1 | Lighthouse CI on GitHub Actions (Linux) — gate ≥95 a11y | trust, SEO | `.github/workflows/` | M |
| 4.2 | axe-core spot check on `/`, `/pricing/`, `/book-discovery/` | a11y | manual or script | S |
| 4.3 | Traffic-aware header CTA (cold → See systems) — Phase 2 | conversion-pipeline §3 | `Header.tsx` + cookie | L |
| 4.4 | NL hreflang on 5 high-intent pages | ICP NL | metadata per route | L |

---

## Sprint 5 — Social & cross-channel (P3)

| # | Task | UX impact | Files | Effort |
|---|------|-----------|-------|--------|
| 5.1 | Social links on `/founder/` + final CTA band | connect path | `founder/page.tsx` | S |
| 5.2 | LinkedIn Services pricing aligned (€290 / €1,200+) | off-site parity | LinkedIn manual | S |
| 5.3 | Quietforge banner 1584×396 for LinkedIn | visual parity | design asset | S |

---

## Priority matrix

```
Impact ↑
  │  1.1 FILL placeholders    1.3 WhatsApp hero
  │  1.2 Inbox Killer rename    1.4 Sticky CTA
  │  2.1 Wizard L2 CTA          2.2 Home trim
  └──────────────────────────────→ Effort
         Low                      High
```

**Do first:** 1.1 → 1.2 → 1.3 → 1.4 → 2.1

---

## Success metrics

| Metric | Now | Target |
|--------|-----|--------|
| Nielsen avg | 3.9 | ≥ 4.3 |
| UI design avg | 4.2 | ≥ 4.5 |
| Console errors (home) | 17→0 post-deploy | 0 |
| Lighthouse a11y | not run | ≥ 95 |
| Time to L3 CTA (mobile scroll) | ~full page | ≤ 2 screens |

---

## Anti-scope (do not do in UX sprint)

- Full NL translation (separate content sprint)
- New home section order without `site-map.md` update
- Video production (unless owner records — then 1.1 unblocks)
- Architecture changes without approved plan

---

## Session rules (AGENTS.md)

- Max **1 component** per OpenCode session (or batch 3 sections with build gate)
- Every `page.tsx` home change → update `site-map.md`
- Handoff per session in `docs/handoffs/`

---

*Owner: Norbert · Plan locked: 2026-06-23*
