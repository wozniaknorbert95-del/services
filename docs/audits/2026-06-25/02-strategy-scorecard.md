# 02 — Strategy Scorecard (post-E-6)

**Canon:** `docs/strategy/marketing-strategy.md`, `site-map.md`, `conversion-pipeline.md`  
**Date:** 2026-06-25

---

## 2.1 Strategy-check — Home

| Rule | Status | Evidence |
|------|--------|----------|
| Home order (site-map §2 LOCKED) | ✅ | `page.tsx`: Hero → LivingSystemTeaser → BuiltVsPlanned → IntentRouter → PainGrid → SpearheadSpotlight → OwnerEcosystemTeaser → SystemMetrics → ResultsTeaser → BehindTheScenes → HowIWork → TrustAndObjections → Pricing → FinalCtaBand + StickyCta + SectionProgress |
| Forbidden `EcosystemVideo` on home | ✅ | Not imported in `page.tsx` |
| Forbidden `SystemArchitecture` on home | ✅ | Component exists but not mounted on home |
| Page arc Problem→System→Effect | ✅ | Section components use PAS pattern per `ui-ux-principles.md` |
| Single L3 above fold | ✅ | Hero primary = `Book your Automation Map` → `/book-discovery/` |
| Header CTA = L3 Book | ✅ | `HEADER_CTA` in `navigation.ts` |
| Min 2 proof sections before 2nd L3 | ✅ | BuiltVsPlanned (#3), IntentRouter (#4), metrics (#8), results (#9) before Pricing (#13) |
| Intent badge every repo/pain/teaser card | ✅ | `IntentBadges` on IntentRouter, PainGrid, ResultsTeaser |
| Positioning Conversion Systems Architect | ✅ | `POSITIONING.label` in hero; anti-positioning line active |
| Anti-chaos site-map sync | ✅ | `page.tsx` comment references §2; order matches table |

**Home verdict:** COMPLIANT

---

## 2.2 Conversion funnel stages

| Stage | Site job | Present? | Evidence | Gap |
|-------|----------|----------|----------|-----|
| **Landing** | Earn 10s; architect positioning | ✅ | Hero 5-element contract: label, headline, subline, proof line (`HERO.proofLine`), L3 CTA | — |
| **Hard proof** | Evidence over claims | ✅ | `/results/` (8 CS), SystemMetrics, BehindTheScenes, FieldReports, gratka artefacts | Video L2 mostly empty (4/7 videos) |
| **Clinical qualification** | Filter budget/fit | ✅ | `/book-discovery/` €290 credited; zzpackage wizard L2; WhatsApp hero + sticky mobile | WhatsApp pilot page has placeholder video |
| **Strategy call** | Close discovery → scope | ✅ | Book-discovery copy: 60–90 min, ROI, credited fee; pricing tiers visible | — |

**Funnel verdict:** Architecture **sound**; **proof depth** weakens cold-traffic conversion at Hard Proof stage.

---

## 2.3 15-block canon scorecard

| # | Block | Score | Evidence | Fix priority |
|---|-------|-------|----------|--------------|
| 1 | Positioning | 5/5 | Consistent “Conversion Systems Architect” site-wide; anti-positioning in hero | — |
| 2 | Hero | 5/5 | Who/for whom/result/proof/CTA in `HeroSection` + `conversion-copy.ts` | — |
| 3 | Case studies | 4/5 | 6× CaseStudyLayout on SSoT modules; honest PARTIAL/in delivery labels | E-7 whatsapp; hub second layer |
| 4 | Video library | 2/5 | Only agentOs + vcms `ready: true`; wizard/inbox/ecosystem/founder false | P1 Commander BL-03 |
| 5 | Wizard spearhead | 5/5 | SpearheadSpotlight #6; live zzpackage L2; sales-funnel CS | — |
| 6 | VCMS / Behind the scenes | 4/5 | BehindTheScenes + vcms demo mp4; audit-log DEMO labelled | — |
| 7 | System architecture | 4/5 | LOS on home §2; owner-ecosystem LOS diagram | SMB `SystemArchitecture` correctly excluded from home |
| 8 | Credibility metrics | 5/5 | `SystemMetrics` from `metrics-display.ts` → `proof.ts` | — |
| 9 | Founder story | 4/5 | `/founder/`, AboutArchitect patterns; authentic self-as-client | Founder video not ready |
| 10 | Sales animations | 3/5 | Diagrams in gratka; motion on home respects reduced-motion | No live wizard video |
| 11 | Chat assistant | 4/5 | portalAssistant screen; jadzia COI CS; WhatsApp L3 | Dedicated qualification agent PLANNED |
| 12 | Portfolio cards | 4/5 | Hub cards: problem/system/real/measurement + intents | whatsapp card manifestKey mismatch |
| 13 | CTA tiers | 5/5 | L1 Systems nav; L2 wizard; L3 book + WhatsApp mobile | — |
| 14 | Hard proof | 4/5 | PDF/SVG downloads on CS pages; artefacts in footer | RSC false 404 in audit script only |
| 15 | Visual hierarchy | 4/5 | Dark mono product-company skin; intent colors | See `06-ux-heuristics.md` |

**Mean canon score:** **4.1 / 5**

---

## 2.4 Voice & positioning

| Rule | Status | Note |
|------|--------|------|
| Hero/Founder = “I” | ✅ | Hero proof line first person; founder route |
| System pages = “the system” | ✅ | Case studies use system framing |
| No fake testimonials | ✅ | FieldReports labelled “not client testimonials” |
| `WEBSITE_ONLY_EXCEPTION` on money pages | ❌ | Defined in `conversion-copy.ts` but **not imported** anywhere — should surface on Web Upgrade + pricing |
| Exception handling visible | ⚠️ | Anti-positioning active; brochure-only rejection copy orphaned |

---

## 2.5 ICP objection map (marketing-strategy §3)

| Objection | Addressed? | Where |
|-----------|------------|-------|
| “What for €290?” | ✅ | book-discovery, pricing, OBJECTIONS[0] |
| “Is this real?” | ✅ | results, FieldReports, BehindTheScenes |
| “How long until live?” | ✅ | HowIWork, OBJECTIONS[2], case timelines |
| “Scope creep?” | ✅ | wizard scope-lock copy, TrustAndObjections |
| “I just need a site” | ⚠️ | Copy exists but not wired to Web Upgrade page |

**Strategy verdict:** **COMPLIANT** on structure and funnel; **DRIFT** on solutions ladder SSoT and brochure-only exception wiring.
