# UI Design Review — Quietforge Portfolio

**Skill:** `ui-design-review`  
**Interface:** B2B conversion systems portfolio (Quietforge)  
**Audience:** NL SMB owners, English-primary, skeptic of agency theatre  
**Brand reference:** `DESIGN-SYSTEM.md`, `globals.css`  
**Screenshots:** `../assets/desktop/`, `../assets/site-mobile/`

---

## Summary scorecard

| # | Dimension | Score | Notes |
|---|-----------|-------|-------|
| D1 | Visual hierarchy | **4.5** | Amber CTA dominates; clear H1 → lead → proof |
| D2 | Typography | **4.0** | Mono + sans scale; eyebrows `// LABEL` on-brand |
| D3 | Color palette | **4.5** | Amber accent disciplined; intent colors (fx-*) used |
| D4 | Spacing & white space | **4.0** | `--qf-sp-*` rhythm; home long but not cramped |
| D5 | Visual consistency | **4.0** | Cards, borders 1px, 2px radius — system-adherent |
| D6 | Imagery & graphics | **3.0** | Good proof screenshots; FILL placeholders hurt |
| D7 | Iconography | **4.0** | Lucide, consistent stroke; chevron on dropdown |
| D8 | Layout & composition | **4.0** | Max-width container; responsive grids |
| D9 | Branding & personality | **4.5** | Distinct Quietforge terminal — not template SaaS |
| D10 | Polish & craftsmanship | **3.5** | Placeholders + PDF 404 prevent "ship-ready" feel |
| **Average** | | **4.2** | **A−** |

**Design verdict:** **Professional / agency-grade shell** — craftsmanship drops where assets are missing.

---

## D1 — Visual hierarchy (4.5/5)

**Strengths:**
- Hero H1 largest weight; amber `Book Automation Map` only filled button in header band
- Section eyebrows create tertiary → primary → secondary ladder
- BEFORE/AFTER columns on solutions use color semantics (red X / green ✓)

**Improvement AUD-U01:** On mobile home, proof metrics grid competes with hero CTA — consider one beat more whitespace before Intent Router.

---

## D2 — Typography (4/5)

**Strengths:**
- Monospace base per design system; uppercase micro-labels in footer columns
- Line length controlled via `--qf-maxw-narrow` on prose blocks

**Improvement AUD-U02:** Solution page H1 "Telegram Deployment Agent" — long technical string wraps awkwardly on 390px (verify after rename).

---

## D3 — Color palette (4.5/5)

**Strengths:**
- Single accent (amber) + dark neutrals — matches "one accent per page" rule
- Intent colors (`--fx-time`, `--fx-money`, etc.) add meaning without rainbow noise
- `--qf-ok` green used sparingly on AFTER columns

**No issues** vs flexgrafik.nl pink — intentional brand separation.

---

## D4 — Spacing & white space (4/5)

**Strengths:** 8px scale tokens; generous section padding; footer breathing room.

**Improvement AUD-U03:** 14 home sections = cumulative fatigue — spacing is good per section but **count** is high.

---

## D5 — Visual consistency (4/5)

**Strengths:** All cards use `border-[var(--qf-border)]` + `bg-[var(--qf-bg-raised)]`; buttons share amber fill pattern.

**Issue AUD-U04:** `[FILL: video]` boxes use different visual language than proof screenshot frames — looks like debug text, not designed empty state.

**Fix:** Use designed empty state per `ui-ux-principles.md` §14: short copy + CTA, no bracket placeholders.

---

## D6 — Imagery & graphics (3/5)

**Strengths:**
- `/gratka/` proof screenshots (wizard, inbox lanes, VCMS) — authentic terminal chrome
- Flow diagrams (inbox classification) — typographic, on-brand

**Issues:**
- Founder video placeholder visible
- Inbox Killer video placeholder on solution page
- Until video ships, use poster frame from `proof.ts` or hide slot per site-map forbidden rules

---

## D7 — Iconography (4/5)

**Strengths:** Lucide Menu/X/ChevronDown in header; consistent 1.5px stroke per DESIGN-SYSTEM §4.

---

## D8 — Layout & composition (4/5)

**Strengths:** Sticky header; 4-column footer collapses cleanly; solution page Problem/System/Effect vertical rhythm.

**Mobile:** Hamburger nav; CTAs remain tappable (screenshot `site-mobile/home.png`).

---

## D9 — Branding & personality (4.5/5)

**Strengths:**
- `▍quietforge` logomark — developer-tool identity
- Copy tone calm, precise — matches Conversion Systems Architect positioning
- Anti-template: dark mono vs generic white SaaS

**Post-deploy:** FlexGrafik proof line in hero (`AUD-S01`) strengthens "real operator" brand.

---

## D10 — Polish & craftsmanship (3.5/5)

**Blockers to 5/5:**
1. Remove or design all `[FILL:]` slots
2. Deploy PDF footer fix
3. Deploy FlexGrafik bridge copy
4. Custom OG images already per-route ✅

---

## Category benchmark

| Reference | Quietforge alignment |
|-----------|---------------------|
| Linear | Dark, precise, minimal — **strong match** |
| Vercel | Developer credibility — **match** |
| Make.com | SMB automation — **content match, visual more premium** |
| Generic Webflow agency | **intentionally avoided** ✅ |

---

*Skill framework: `.agents/skills/ui-design-review/SKILL.md`*
