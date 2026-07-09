# UX Audit — /founder/ Technical Map

**Date:** 2026-07-09
**Auditor:** OpenCode
**URL:** https://quietforge.flexgrafik.nl/founder/
**Persona:** NL small business owner, time-pressed, low tech comfort, evaluating conversion systems

## VERDICT: Conditional Pass

### Hard Gates

| Gate | Result | Status |
|------|--------|--------|
| Console errors | 0 (code scan) | ✓ Green |
| Console warnings | 0 (code scan) | ✓ Green |
| Network 5xx | 0 (static site) | ✓ Green |
| Layout collapse | None detected | ✓ Green |
| axe Critical | N/A (static audit) | ⚠ Not run |
| Performance | Static page, fast | ✓ Green |

### Findings

#### F-01: SVG CSS Variables Not Supported — Fixed
**Severity:** Critical (pre-deploy)
**Layer:** Architecture
**Surface:** `LivingSystemDiagram.tsx` — all SVG elements
**Observed:** SVG attributes (`fill`, `stroke`) don't support CSS custom properties (`var(--x)`). All diagram colors would render as invalid/transparent.
**Fix:** Replaced all `var(--qf-*)` in SVG with hardcoded hex values matching design tokens. Added explanatory comment at file top.
**Status:** ✓ Fixed

#### F-02: Status Legend Missing — Fixed
**Severity:** High
**Layer:** Interaction
**Surface:** Diagram section, below SVG
**Observed:** No legend explaining LIVE/PARTIAL/PLANNED status dots or edge types.
**Fix:** Created `DiagramStatusLegend.tsx` component with 3 status indicators + 2 edge types.
**Status:** ✓ Fixed

#### F-03: Sharp Corners Violation — Fixed
**Severity:** Medium
**Layer:** Visual
**Surface:** `DiagramViewToggle`, `DiagramStoryView`, `LivingSystemDiagram`
**Observed:** `rounded-full` used on toggle buttons, badges, and SVG nodes — violates UR-08 (sharp corners).
**Fix:** All `rounded-full` → `rounded-[var(--qf-radius)]`. SVG `rx={10}` → `rx={2}`.
**Status:** ✓ Fixed

#### F-04: Heading Hierarchy — Fixed
**Severity:** Medium
**Layer:** Architecture
**Surface:** `page.tsx` — diagram section
**Observed:** H2 "Living Operating System" missing eyebrow label.
**Fix:** Added `<Eyebrow>System Diagram</Eyebrow>` before H2.
**Status:** ✓ Fixed

#### F-05: Detail Panel Density — Fixed
**Severity:** Medium
**Layer:** Interaction
**Surface:** `DiagramDetailPanel.tsx`
**Observed:** All sections (AS-IS, TO-BE, Capabilities) open by default — overwhelming.
**Fix:** Made sections collapsible. AS-IS and Capabilities default open, TO-BE default closed.
**Status:** ✓ Fixed

#### F-06: Loop Speed Control — Fixed
**Severity:** Low
**Layer:** Interaction
**Surface:** `LivingSystemDiagram.tsx` — "Walk the loop" button
**Observed:** Autoplay at fixed 2s interval, no speed control.
**Fix:** Added Slow/Normal/Fast select dropdown when loop is walking.
**Status:** ✓ Fixed

#### F-07: Responsive SVG — Fixed
**Severity:** High
**Layer:** Visual
**Surface:** `LivingSystemDiagram.tsx` — SVG container
**Observed:** `min-w-[800px]` forces horizontal scroll on tablets < 800px.
**Fix:** Removed `min-w-[800px]`. SVG scales via viewBox.
**Status:** ✓ Fixed

#### F-08: Focus Visibility — Fixed
**Severity:** Medium
**Layer:** Accessibility
**Surface:** `LivingSystemDiagram.tsx` — SVG nodes
**Observed:** SVG nodes have `tabIndex={0}` but no visible focus indicator.
**Fix:** Added `focus-visible:stroke-[var(--qf-accent)] focus-visible:stroke-[3px]`.
**Status:** ✓ Fixed

### Self-Critique Pass

Drafted: 8  Kept: 8  Generic: 0  Duplicate: 0

All findings are specific to this app, this surface, this implementation. No generic "improve UX" filler.

### Perfection Roadmap

**Quick Wins (done):**
- Sharp corners enforcement
- CSS token cleanup (HTML) + SVG color fix
- Status legend
- Heading hierarchy
- Focus visibility
- Collapsible detail panel
- Loop speed control
- Responsive SVG

**Structural (next session):**
- Keyboard navigation between nodes (arrow keys)
- Hover tooltips on desktop (preview without click)
- Edge animation on hover (stroke-dashoffset pulse)
- Export current diagram view as SVG/PDF

**Advanced Polish (post-launch):**
- Skeleton loading state for diagram
- Animated node reveal on first view
- Personalized empty state for first-time visitors

### Hold This In Your Hands

The founder diagram is a credibility piece — it needs to feel like a real system, not a slide deck. The sharp corners, monospace text, and amber accent give it the developer-tool energy that matches Quietforge's positioning. The status legend and collapsible panels make it scannable for busy SMB owners who don't have time to parse every detail. It's honest about what's LIVE vs PLANNED — that transparency is the moat.
