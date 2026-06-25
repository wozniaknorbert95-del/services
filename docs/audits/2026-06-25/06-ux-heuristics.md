# 06 — UX Heuristics & Design Review (money path)

**Scope:** Home → `/results/owner-ecosystem/` → `/book-discovery/`  
**Methods:** Nielsen 10 heuristics (sampled) + `design-review` token pass  
**Date:** 2026-06-25 · Screenshots: `assets/desktop/`, `assets/mobile/`

---

## Money path evaluated

1. Land on `/` — scan hero, scroll to Built vs Planned + Spearhead
2. Navigate Systems → `/results/` — pick owner-ecosystem card
3. Read LOS + case bridges on `/results/owner-ecosystem/`
4. Header CTA → `/book-discovery/`

Mobile supplement: `/results/jadzia-coi/`, `/results/inbox-killer/`, `/results/advisory-modernisation/` at 390px.

---

## Nielsen heuristics (selected)

| # | Heuristic | Score | Finding |
|---|-----------|-------|---------|
| 1 | Visibility of system status | 4/5 | SectionProgress rail + sticky CTA after built-vs-planned; PARTIAL/LIVE labels clear |
| 2 | Match real world | 4/5 | Business language on solutions; some repo jargon on owner-ecosystem (acceptable for proof audience) |
| 3 | User control | 4/5 | WhatsApp opens new tab; back nav consistent; intent filter reversible on home |
| 4 | Consistency | 4/5 | CaseStudyLayout uniform; solutions pages slightly generic vs results |
| 5 | Error prevention | 4/5 | Book-discovery sets paid expectations; qualification copy before form |
| 6 | Recognition over recall | 4/5 | Intent colors + badges reduce memory load; 8-repo map visual |
| 7 | Flexibility | 3/5 | L1/L2/L3 tiers exist; no traffic-aware header (Phase 2) |
| 8 | Aesthetic minimalism | 4/5 | Dark mono, no stock photos; home is long (14 sections) — intentional per canon |
| 9 | Error recovery | N/A | Static marketing site |
| 10 | Help & documentation | 4/5 | How it works, trust, artefacts in footer |

**Mean:** **4.0 / 5**

---

## Design-review (Quietforge system)

| Check | Status | Note |
|-------|--------|------|
| Sharp corners (`--qf-radius`) | ✅ | Consistent 2px |
| Borders not shadows | ✅ | Elevation via border brighten |
| No gradients | ✅ | Flat fills |
| Token colors (`qf-*`, `fx-*`) | ✅ | Intent badges use CSS vars |
| ≤8 Tailwind utils / element | ⚠️ | Some bridge cards borderline — extract to `qf-*` if touched |
| `style={{}}` in components | ⚠️ | IntentBadges, PainGrid, SectionProgress — dynamic color only |
| Dark-first | ✅ | Default theme |
| Reduced motion | ✅ | `useMotion` hook defers animation |
| Mobile bridges (375px) | ✅ | Readable; bridge cards stack; no horizontal overflow on sampled CS |
| Tap targets | ✅ | CTAs ≥44px on hero and sticky bar |
| Focus rings | ✅ | `focus-visible:ring-2 ring-[var(--qf-accent)]` on interactive cards |

**Design verdict:** **COMPLIANT** — minor inline-style exceptions for intent colors are acceptable.

---

## Mobile bridge observations (SESSION-ANCHOR item)

| Page | Bridge element | Mobile status |
|------|----------------|---------------|
| jadzia-coi | Owner ecosystem / Agent OS bridges | ✅ Stacks; CTA readable |
| inbox-killer | Solutions + jadzia bridges | ✅ Full-width cards |
| advisory-modernisation | Web Upgrade bridge | ✅ Visible below pillars |

No P0 mobile layout blockers found. Optional polish: consistent bridge card height on very small viewports.

---

## UX verdict

Site passes professional B2B usability bar for a **high-consideration purchase**. Primary UX debt is **content depth inconsistency** (solutions vs results), not layout breakage.
