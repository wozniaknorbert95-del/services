---
name: section-build
description: Disciplined home/page section work for services.flexgrafik.nl — one component per session, max 8 Tailwind utils/element (extract to qf-*), dark-theme CSS tokens, prefers-reduced-motion, mobile-first, content from src/content. Invoke when building or editing a home section or page component.
---

# section-build — Disciplined Section Work

Sections are user-patchable units, 1:1 with components in `src/components/home/`. This skill keeps each build small, on-token, and canon-aligned — no mega-diffs, no inline styles, no portfolio decoration.

## When to Use This Skill

Invoke this skill when:
- Building or editing a home section component (`src/components/home/*`)
- Building a money-page section (`SolutionLayout` / `CaseStudyLayout` blocks)
- Refactoring a component's markup or Tailwind usage

## Procedure

### Step 1 — Scope (1-1-1)

One component per session. No mega-diffs. Batch mode max 3 sections with `npm run build` between (`ui-ux-principles.md` §11). Confirm the section's funnel job in `site-map.md` §2 before editing.

### Step 2 — Wire content, not copy

Pull text/numbers from `src/content/*` (`ecosystem.ts`, `conversion-copy.ts`, `proof.ts`, `metrics-display.ts`). Never hardcode copy in JSX. Follow the hierarchy in `site-map.md` §7.

### Step 3 — Build to the section anatomy

Per `ui-ux-principles.md` §3:

```
.qf-section
  .qf-eyebrow     // CATEGORY
  h2              // outcome headline (one idea)
  .qf-lead        // ≤2 sentences
  [content]       // cards | diagram | terminal mock
  .qf-hint        // optional trust micro-line
  CTA row         // L1 link + L3 button max
```

One H1 per page; single primary action per viewport section. Every card gets ≥1 intent badge (`text-fx-*`).

### Step 4 — Respect the design system

- **Dark theme default** — use CSS vars from `globals.css` (`--qf-bg`, `--qf-text`, `--qf-accent`, `--qf-border`). No raw hex.
- **Sharp corners** (`--qf-radius: 2px`), **borders not shadows**, no gradients (`DESIGN-SYSTEM.md`).
- **Max 8 Tailwind utility classes per element.** Exceed → extract to a `qf-*` class in `quietforge.css`. Reuse existing `qf-*` before inventing.
- **No inline `style={{}}`** — Tailwind + CSS vars only.

### Step 5 — Motion & responsive

- Mobile-first, single column default; grids collapse ~820px. Tap targets ≥44px.
- Animations via `useMotion` presets; must degrade to static under `prefers-reduced-motion: reduce`. No decorative/parallax/infinite motion.

### Step 6 — Verify & log

Run `verify` (build must pass). If you touched `page.tsx`/section order, run `strategy-check` (update `site-map.md` §2). Close with `handoff`.

## Output Format

```markdown
## Section Build — <component>

**Funnel job:** <from site-map §2> · **Content source:** <…ts>
**Changes:** <what was built/edited>
**Token/util compliance:** ≤8 utils/element ✅ · qf-* extracted: <list> · dark tokens ✅
**Motion:** reduced-motion path ✅ · **Mobile:** ✅
**Build:** npm run build ✅
```

## Guardrails

- One component per session; no mega-diffs (AGENTS.md Zasada 1, §1-1-1).
- TypeScript strict — zero `any`.
- Max 8 utility classes/element; extract to `qf-*` beyond that.
- Dark theme + `qf-*` tokens only; sharp corners, borders over shadows, no gradients.
- All animation respects `prefers-reduced-motion`.
