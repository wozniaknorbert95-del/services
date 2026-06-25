# Cross-Channel Consistency Matrix

**Date:** 2026-06-23  
**Revision:** v2 — owner-provided LinkedIn Services + About  
**Channels:** Quietforge site · LinkedIn · flexgrafik.nl  
**Legend:** ✅ Aligned · ⚠️ Drift · ❌ Conflict

---

## Owner brand model (binding for this audit)

```
Quietforge  = consulting arm — what you SELL to clients
FlexGrafik  = registered company + LIVE operating proof (not demo)
flexgrafik.nl = print/ZZP product front (physical branding)
services.flexgrafik.nl = Quietforge delivery surface
```

LinkedIn implements **two-brand bridge (DECISION B)** — confirmed by owner.

---

## Master matrix (revised)

| # | Axis | Quietforge (site) | LinkedIn (owner-provided) | flexgrafik.nl | Verdict |
|---|------|-------------------|---------------------------|---------------|---------|
| 1 | **Brand name** | Quietforge (header) | Quietforge + FLEXGRAFIK named | FlexGrafik | ✅ Aligned (bridge) |
| 2 | **Role / headline** | Conversion Systems Architect | `Conversion Systems Architect @ Quietforge` | ZZP branding | ✅ Aligned |
| 3 | **Value proposition** | Systems, automation, qualification | Quietforge Services: full ladder + HITL | Physical branding packages | ✅ Aligned (different surfaces) |
| 4 | **ICP** | NL SMB, €290+ discovery | Dutch ZZP and SME owners | ZZP bouw/techniek | ✅ Aligned |
| 5 | **FlexGrafik = proof** | Implied ("live operation") | **Explicit** — ecosystem runs real print ops | Is the product | ⚠️ Drift — **site weaker than LinkedIn** |
| 6 | **Proof narrative** | 8-repo, VCMS, case studies | VCMS, Wizard 200+ SKUs, 142 inbox msgs | Portfolio, reviews | ✅ Aligned |
| 7 | **Product ladder** | 5 solutions + pricing | Services: identical 5 modules | ZZPackage wizard tiers | ✅ Aligned |
| 8 | **Primary CTA** | Book Automation Map €290 | Services → engagement flow | Start de Wizard | ⚠️ Drift — LinkedIn "Contact for pricing" |
| 9 | **Pricing transparency** | €290, €1,200+ on site | Contact for pricing (Services) | vanaf €199+ | ⚠️ Drift |
| 10 | **Language** | EN site | EN profile copy | NL | ⚠️ Drift (acceptable) |
| 11 | **Investor/partner pitch** | Not on site | "seeking investors and strategic partners" | Not on .nl | ⚠️ Drift (audience split) |
| 12 | **Visual identity** | Dark/amber Quietforge | Unknown banner (not captured) | Pink/magenta print | ⚠️ Drift (3 looks — OK if named) |

**v2 consistency score:** 7/12 Aligned · 5/12 Drift · 0/12 Conflict → **Grade: B− (cross-channel)**

*v1 incorrectly scored 5 Conflict — based on stale public scrape.*

---

## Narrative coherence test (revised)

> *"Who is Norbert and what does he sell?"*

| Channel | Answer in 5 seconds |
|---------|---------------------|
| **LinkedIn** | Conversion Systems Architect @ Quietforge — deploys automation for ZZP/SME; built FlexGrafik as live proof ecosystem |
| **Site** | Quietforge systems architect — conversion systems, live ecosystem proof |
| **flexgrafik.nl** | ZZP branding — bus, clothing, stickers (the physical business FlexGrafik runs) |

**Coherent when buyer reads LinkedIn first.** Gap: site alone doesn't name FlexGrafik as loudly as LinkedIn does.

---

## LinkedIn consistency checklist (revised)

| Item | v1 | **v2** | Notes |
|------|-----|--------|-------|
| Headline = Conversion Systems Architect | ❌ | ✅ | `@ Quietforge \| Delivering Automated Solutions` |
| About — Quietforge lead | ❌ | ✅ | Architect paragraph present |
| About — FlexGrafik as proof | ❌ | ✅ | Founder + ecosystem paragraph |
| Services section — product ladder | ❌ not read | ✅ | Matches site canon (5 modules) |
| Services — Automation Map process | ❌ | ✅ | 60–90 min, ROI, fixed-price |
| Services — client proof | ❌ | ✅ | Advisory firm AVG/GDPR engagement cited |
| FlexGrafik company overview | ❌ | ✅ | 8-repo, agents, wizard, inbox metrics |
| Pricing on Services | — | ⚠️ | "Contact for pricing" vs site €290 |
| Reviews on Services | — | ⚠️ | "No reviews yet" |
| Featured → services site | ❌ | ⚠️ | Not confirmed — add Featured cards |
| Banner Quietforge visual | ❌ | ⚠️ | Not captured (login wall) |
| Vanity URL | ❌ | ⚠️ | `flexgrafik-quietforge` 404 if used |
| JSON-LD sameAs on site | ❌ | ❌ | Still missing in `layout.tsx` |
| Activity/posts | ❌ | ⚠️ | Older posts may still be print promos — pin systems post |

**Pass rate v2:** 8/13 aligned · 4 drift · 1 gap (sameAs)

---

## Site ↔ LinkedIn parity gaps (new focus)

| LinkedIn says | Site says | Action |
|---------------|-----------|--------|
| "Quietforge is the consulting arm built on FLEXGRAFIK's proven systems" | "proven on live operation" (generic) | Name FlexGrafik explicitly on `/about/` or hero |
| "142 messages per scan" inbox metric | proof.ts metrics | Ensure same numbers on site |
| "200+ dynamic SKUs" wizard | proof line "6 systems" | Add SKU count to proof if honest |
| "seeking investors" | absent | OK for site (B2B client focus) — keep off services site |
| Services: 9 service categories listed | nav: Systems/Solutions | OK — different UI pattern |

---

## flexgrafik.nl ↔ ecosystem

| Check | Status |
|-------|--------|
| flexgrafik.nl = physical product arm | ✅ |
| Wizard shared (zzpackage) | ✅ |
| flexgrafik.nl links to services site | ⚠️ Not observed — optional cross-link |
| Site links to flexgrafik.nl as proof | ⚠️ Weak — add in founder/ecosystem |

---

*Evidence v2: owner-provided LinkedIn copy 2026-06-23 · v1 automated capture superseded*
