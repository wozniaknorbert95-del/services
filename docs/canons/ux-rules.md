---
status: "[ACTIVE]"
title: "UX Rules — Enforceable UI & Motion"
owner: "Norbert Wozniak"
updated: "2026-06-25"
classification: "L2 — HARD rules (binding)"
---

# UX Rules

> **Intent:** Product company presenting a **system**, not a freelancer portfolio.  
> **Detail:** [ui-ux-principles.md](../strategy/ui-ux-principles.md) · [DESIGN-SYSTEM.md](../../DESIGN-SYSTEM.md)

---

## Hierarchy

**UR-01 (HARD)** — One H1 per page — outcome-oriented.  
*Source:* ui-ux-principles §3

**UR-02 (HARD)** — One primary action per viewport section. Max L1 link + L3 button in CTA row.  
*Source:* ui-ux-principles §3, conversion-pipeline §3

**UR-03 (HARD)** — Proof block adjacent to every superlative claim — no orphan claims.  
*Source:* ui-ux-principles §3

**UR-04 (HARD)** — Reject portfolio-grid framing; use narrative system presentation.  
*Source:* ui-ux-principles §1

---

## Design tokens & styling

**UR-05 (HARD)** — Colors via CSS vars in `globals.css` / DESIGN-SYSTEM — no hardcoded hex in components.  
*Source:* brain §6, DESIGN-SYSTEM

**UR-06 (HARD)** — No inline `style={{...}}` for layout/color. Tailwind utility-first.  
*Source:* brain guardrails

**UR-07 (HARD)** — Max **8 Tailwind utility classes per element**; exceed → extract to `qf-*` in `quietforge.css`.  
*Source:* AGENTS.md §3

**UR-08 (HARD)** — Sharp corners (`--qf-radius` 2px), borders not shadows — Quietforge skin.  
*Source:* DESIGN-SYSTEM, design-review skill

---

## Intent colors

**UR-09 (HARD)** — Every `IntentRouter`, `PainGrid`, and results card shows ≥1 intent badge using `--fx-time|money|order|calm|efficiency` tokens only.  
*Violation:* Invented color or missing badge on repo card.  
*Source:* site-map §4, ecosystem.ts INTENT_LEGEND

**UR-10 (HARD)** — Intent filter dims non-matching cards — never removes repos from DOM.  
*Source:* strategy-rules SR-06

---

## Motion & accessibility

**UR-11 (HARD)** — All animations respect `prefers-reduced-motion` — disable Framer Motion, `transition: none`.  
*Source:* AGENTS.md §5, ui-ux-principles §6

**UR-12 (HARD)** — Motion teaches funnel (fade/slide) — no decorative-only animation on money pages.  
*Source:* ui-ux-principles §6

**UR-13 (HARD)** — Mobile-first: sections stack vertically; tap targets ≥ 44px; no horizontal scroll at 375px.  
*Source:* brain §7, ui-ux-principles §7

---

## Theme

**UR-14 (HARD)** — Dark theme default. Light toggle optional Phase 2 — ship dark-only unless Commander approves.  
*Source:* ui-ux-principles §2

**UR-15 (SOFT)** — Terminal mock / spearhead panel (`qf-panel--spearhead`) — one flagship per page max.  
*Source:* ui-ux-principles §3

---

*15 rules · UI sessions: load ux-rules + DESIGN-SYSTEM + ui-ux-principles*
