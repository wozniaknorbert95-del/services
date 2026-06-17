# UI/UX Principles — Product Company Presentation Standard

**Version:** 2.1  
**Status:** Canonical — binding for layout, hierarchy, and motion  
**Reference aesthetic:** Linear · Vercel · Retool · Framer (presentation patterns, not visual plagiarism)

---

## 1. Design intent

The site must feel like a **product company** explaining a **system**, not a freelancer portfolio showing screenshots.

| Portfolio (reject) | Product company (target) |
|------------------|--------------------------|
| Grid of pretty work | Narrative of how the system works |
| Decorative motion | Motion that teaches the funnel |
| Many equal CTAs | Clear commitment ladder |
| Feature badges | Outcome metrics |
| Generic "About me" | Founder as system builder |

**Copy the presentation method, not the pixels.**

---

## 2. Relationship to design system

| Layer | Document / file | Scope |
|-------|---------------|-------|
| Strategy (this file) | `docs/strategy/ui-ux-principles.md` | Hierarchy, section rules, motion policy |
| Visual tokens | `DESIGN-SYSTEM.md`, `quietforge.css`, `globals.css` | Colors, type, spacing, components |
| Implementation | `src/components/**` | React + Tailwind |

Agents MUST read this file **and** `DESIGN-SYSTEM.md` before UI work.

**Brand skin:** Quietforge — terminal / developer-tool, dark-first, amber accent, monospace, sharp corners.

**Theme rule:** Dark = default (architect credibility). Light = optional toggle for SMB readers on phone in daylight (`qf-theme-light` on `<html>`). Ship dark-only at MVP; toggle in Phase 2.

---

## 3. Visual hierarchy rules

### Page structure

1. **One H1 per page** — outcome-oriented
2. **Eyebrow** (`// LABEL`) before section H2s — encodes category
3. **Lead paragraph** — one idea, max 2 sentences above fold
4. **Proof block** adjacent to claim — never orphan superlatives
5. **Single primary action** per viewport section

### Section anatomy (standard)

```
.qf-section
  .qf-eyebrow     // CATEGORY
  h2              // Outcome headline
  .qf-lead        // Supporting sentence
  [content]       // Cards | diagram | terminal mock
  .qf-hint        // Trust micro-line (optional)
  CTA row         // L1 link + L3 button max
```

### Emphasis hierarchy

| Level | Use |
|-------|-----|
| Spearhead panel | One flagship system per page (`qf-panel--spearhead`) |
| Standard panel | Supporting systems / features |
| Status bar | Metrics under hero (systems count, HITL, live indicator) |
| Terminal mock | Show system behaviour, not decoration |

---

## 4. Navigation UX

### Header

- Sticky, blurred backdrop, thin border
- Logo → home only
- Max 5 nav items + 1 CTA (see conversion-pipeline.md)
- Solutions dropdown on desktop; accordion on mobile
- **No** second CTA in header

### Mobile

- Full-screen menu; tap targets ≥ 44px
- CTA repeated at bottom of mobile menu
- Sections stack vertically; no horizontal scroll

### Wayfinding

- Breadcrumb or "Back to results" on detail pages
- IntentRouter cards must show **destination + outcome**, not jargon
- Footer mirrors solutions + trust links

---

## 5. Home & section composition

Sections are **user-patchable units** — each maps 1:1 to a component in `src/components/home/`. Rules for composing home:

| Principle | Rule |
|-----------|------|
| Narrative arc | Problem → proof → process → human → commercial → close |
| Patchability | One component per session; no mega-diff |
| Reorder | Only per conversion-pipeline.md §6 target order |
| New section | Requires block mapping in marketing-strategy.md §5 |
| Remove section | Check funnel job — don't delete proof before CTA |

### Case study card (list)

Required visible fields:

- Problem (1 line)
- Scope · Duration (meta row)
- Architecture tag or icon row
- AI / Automation indicators
- Result line (honest)
- Link to detail

### Case study detail

- Hero: problem statement
- Diagram or architecture block early
- BEFORE / SOLUTION / BUILD / RESULT as anchored sections
- VIDEO slot (16:9 placeholder acceptable until asset exists)
- Final L3 band

---

## 6. Motion & animation policy

### Allowed

- Fade / slide on scroll (Framer Motion via `useMotion`)
- Diagram step reveal synced to funnel stages
- Terminal typing mock in hero (static acceptable)
- Hover state on cards (border brighten, subtle translate)

### Forbidden

- Animation without narrative purpose
- Parallax decoration
- Infinite loops that distract from CTA
- Motion when `prefers-reduced-motion: reduce` — must degrade to static

### Sales-flow animation spec

When animating the acquisition pipeline:

```
Lead → Wizard → AI → VCMS → Quote → Sale
```

- Step duration: 2–4s per stage max
- Labels plain language
- Pause / respect reduced motion
- Ends on outcome (Sale / Client), not on tech stack

### Interaction motion cheatsheet

| Interaction | Spec |
|-------------|------|
| Hero entrance | fade + 8px slide-up, 400ms ease-out |
| Scroll reveal | opacity 0→1, translateY 16px→0, 600ms |
| Hover cards | border brighten only — no transform |
| Focus ring | 2px amber outline, 2px offset |

Implement via `useMotion` presets — see `src/lib/useMotion.ts`.

---

## 7. Proof & media presentation

| Asset type | Treatment |
|------------|-----------|
| Loom / video | 16:9 container, poster frame, caption with outcome |
| Screenshots | Bordered panel, optional terminal chrome |
| PDF artefacts | Download with explicit deliverable name |
| Architecture diagram | SVG or structured HTML; accessible labels |
| Metrics | `SystemMetrics` grid — large number + label + source |

**No stock photos.** Real screenshots, diagrams, or typographic placeholders.

---

## 8. Typography & density

- Monospace base — developer-tool identity
- Generous section spacing (`--qf-sp-16`–`24` between major blocks)
- Prose width capped (`--qf-maxw-narrow`) for long copy
- Numbers and metrics at larger scale (`--qf-fs-2xl`+) for scanability

Avoid walls of text; break with lists (`qf-list--check`, `qf-list--steps`).

---

## 9. Accessibility

- Semantic landmarks: `header`, `main`, `footer`, `section` + `aria-labelledby` where needed
- Focus visible on all interactive elements
- Colour contrast: accent on dark meets WCAG AA for text/buttons
- Video: captions when published
- Diagrams: text alternative or adjacent prose summary

Target: Lighthouse Accessibility ≥ 95 (see brain.md verification).

---

## 10. Responsive breakpoints

- Mobile-first: single column default
- Grids collapse at ~820px (`qf-grid-*`)
- Hero: copy first on mobile, visual second
- Tables/pricing: scroll container only if unavoidable

---

## 11. Component session rules (agents)

1. MVP home (5 sections) = up to 5 sessions
2. **Batch mode:** Hermes plans + OpenCode executes up to 3 sections per session with `npm run build` between batches
3. No inline `style={{}}` — Tailwind + CSS vars only
4. Reuse `qf-*` classes before inventing patterns
5. New UI pattern → handoff note before second use
6. `npm run build` must pass before commit

---

## 14. State design

| State | Treatment |
|-------|-----------|
| Empty | Short copy + L1 CTA (*No case studies yet — see architecture*) |
| Loading | Skeleton blocks using `--qf-bg-inset` tokens |
| Error | Friendly message + retry + link home |

---

## 15. Print / PDF case studies

- Serif body 11pt, mono headings 14pt, max-width 720px
- Links as full URLs in PDF output
- Generated from `/results/*` print stylesheet (`@media print`)

---

## 16. i18n (deferred epic)

- **EN** = primary (canonical)
- **NL** fallback for 5 high-intent routes: `/`, `/pricing/`, `/book-discovery/`, `/solutions/inbox-killer/`, `/founder/`
- `hreflang` on those 5 when NL ships

---

## 12. Polish bar (enterprise review)

Before calling a page "done":

- [ ] Feels like product narrative, not portfolio grid
- [ ] One H1, clear section eyebrows
- [ ] Spearhead used once per page max
- [ ] Motion serves funnel story or is disabled
- [ ] Proof adjacent to claims
- [ ] CTA hierarchy matches conversion-pipeline.md
- [ ] Mobile tested — no overflow, 44px taps
- [ ] Reduced motion path verified
- [ ] Matches DESIGN-SYSTEM.md tokens

---

## 13. Inspiration mapping (what to steal)

| Source | Steal | Don't steal |
|--------|-------|-------------|
| Linear | Calm density, feature→outcome copy, crisp sections | Their colour system |
| Vercel | Developer credibility, diagram culture | Enterprise scale claims |
| Retool | "Build internal tools" clarity | Product UI chrome |
| Framer | Motion with purpose | Template marketplace look |
| Make.com | Automation productized for SMB | Their UI chrome |
| ConvertKit | Founder-voice email automation | Their colour system |

Use Linear/Vercel for architect sections; Make.com/ConvertKit patterns for SMB-facing proof pages.

---

*Implementation skin: [DESIGN-SYSTEM.md](../../DESIGN-SYSTEM.md) · Funnel: [conversion-pipeline.md](./conversion-pipeline.md) · Copy: [marketing-strategy.md](./marketing-strategy.md)*
