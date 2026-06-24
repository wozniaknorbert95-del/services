> **Status: COMPLETED 2026-06-17** — Staged delivery (Stages 1–4). Verification: typecheck PASS, build PASS (31 routes). Stage 4 fix: removed `constants.ts` re-export of `navigation.ts` to break circular import.

# Nav + Footer Chrome — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `executing-plans` or implement task-by-task with build gate after each task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Single navigation manifest drives Header + Footer; global chrome aligns with Conversion Systems Architect canon — no duplicate link tables, no stale positioning copy.

**Architecture:** Extract all nav/footer link data into `src/lib/navigation.ts`. Copy strings (CTA, brand tagline, portfolio line) come from `conversion-copy.ts`. `constants.ts` keeps routes/pricing only; re-exports nav for backward compatibility during migration. Components become thin renderers.

**Tech Stack:** Next.js 16 App Router, TypeScript strict, Tailwind v4, existing `Header.tsx` / `Footer.tsx` patterns.

**Authority chain (read before coding):**

1. `docs/strategy/site-map.md` §5–6
2. `docs/strategy/conversion-pipeline.md` §3, §6
3. `docs/strategy/ui-ux-principles.md` §4
4. `src/content/conversion-copy.ts`

---

## Locked decisions (no open questions)

| # | Decision | Rationale |
|---|----------|-----------|
| D1 | Header label **Systems** → `/results/` | `conversion-pipeline.md` §6 |
| D2 | **About** in header (`/about/`), **Founder** footer-only | About = positioning; Founder = deep narrative (L1 nurture) |
| D3 | **Blog** header out, footer only | §6: „Blog is L1 nurture — not primary nav” |
| D4 | Header CTA stays **L3 Book Automation Map** | `site-map.md` §6 overrides cold/warm header experiment (Phase 2) |
| D5 | Solutions dropdown order: Inbox → Sales Funnel → Web → Lead Magnet → Managed | Canon product ladder |
| D6 | Footer solutions: hub link „All solutions” + same 5 products | Wayfinding to `/solutions/` |
| D7 | Footer company label **Results** (not Systems) | Buyer-facing; same href `/results/` |
| D8 | No visual redesign | Structure + copy + manifest only |

---

## Out of scope (explicit)

- `/founder/` page rewrite
- `public/gratka/*.md` PDF footer strings
- Sticky CTA reintroduction
- Traffic-aware header CTA (session flag)
- `/digital-modernization/` orphan route cleanup
- New OG images for layout (reuse `/og/home.svg`)

---

## File map

| File | Action | Responsibility |
|------|--------|----------------|
| `src/lib/navigation.ts` | **Create** | Single source: header nav, solutions dropdown, footer columns, artefact links |
| `src/content/conversion-copy.ts` | **Modify** | Add `FOOTER` copy block (tagline, portfolio line) |
| `src/lib/constants.ts` | **Modify** | Remove `NAV_ITEMS` / `SOLUTION_DROPDOWN`; re-export from `navigation.ts` |
| `src/components/Header.tsx` | **Modify** | Import manifest + `CTAS`; fix nav order; mobile tap targets |
| `src/components/Footer.tsx` | **Modify** | Import manifest + `FOOTER` + `EMAIL` + `WHATSAPP` |
| `src/app/layout.tsx` | **Modify** | OG/twitter metadata alignment |
| `docs/strategy/site-map.md` | **Modify** | §7 add `navigation.ts` to hierarchy |
| `docs/handoffs/YYYY-MM-DD-nav-footer-chrome.md` | **Create** | Post-implementation handoff |

**Import graph (no cycles):**

```
constants.ts (ROUTES, EMAIL, WHATSAPP, ARTEFACTS)
    ↓
conversion-copy.ts (CTAS, FOOTER, POSITIONING)
    ↓
navigation.ts (HEADER_NAV, SOLUTIONS_NAV, FOOTER_*)
    ↓
Header.tsx / Footer.tsx
```

---

## Target data spec (`navigation.ts`)

```ts
import { ARTEFACTS, ROUTES } from '@/lib/constants';
import { CTAS } from '@/content/conversion-copy';

export interface NavLink {
  label: string;
  href: string;
}

export interface SolutionNavItem extends NavLink {
  badge?: string;
}

export interface HeaderNavItem extends NavLink {
  hasDropdown?: boolean;
}

/** Header: max 5 items + CTA — conversion-pipeline §6 */
export const HEADER_NAV: readonly HeaderNavItem[] = [
  { label: 'Systems', href: ROUTES.results },
  { label: 'How It Works', href: ROUTES.howItWorks },
  { label: 'Solutions', href: ROUTES.solutions, hasDropdown: true },
  { label: 'Pricing', href: ROUTES.pricing },
  { label: 'About', href: ROUTES.about },
] as const;

export const SOLUTIONS_NAV: readonly SolutionNavItem[] = [
  { label: 'Inbox Killer', href: ROUTES.inboxKiller, badge: 'Start here' },
  { label: 'Sales Funnel', href: ROUTES.salesFunnel },
  { label: 'Web Upgrade', href: ROUTES.webUpgrade },
  { label: 'Lead Magnet Game', href: ROUTES.leadMagnetGame },
  { label: 'Managed Automation', href: ROUTES.managedAutomation, badge: 'MRR' },
] as const;

/** Footer solutions = hub + product ladder */
export const FOOTER_SOLUTIONS: readonly NavLink[] = [
  { label: 'All solutions', href: ROUTES.solutions },
  ...SOLUTIONS_NAV.map(({ label, href }) => ({ label, href })),
] as const;

export const FOOTER_COMPANY: readonly NavLink[] = [
  { label: 'How It Works', href: ROUTES.howItWorks },
  { label: 'Results', href: ROUTES.results },
  { label: 'Pricing', href: ROUTES.pricing },
  { label: 'Trust & Safety', href: ROUTES.trust },
  { label: 'About', href: ROUTES.about },
  { label: "The Founder's System", href: ROUTES.founder },
  { label: 'Blog', href: ROUTES.blog },
] as const;

export const FOOTER_ARTEFACTS: readonly NavLink[] = [
  { label: 'Automation Map sample', href: ARTEFACTS.automationMapSample },
  { label: 'Data safety playbook', href: ARTEFACTS.dataSafetyPlaybook },
  { label: 'Maintenance handover', href: ARTEFACTS.maintenanceHandover },
] as const;

export const FOOTER_LEGAL: readonly NavLink[] = [
  { label: 'Legal', href: ROUTES.legal },
] as const;

export const HEADER_CTA = {
  label: CTAS.bookAutomationMap,
  href: ROUTES.bookDiscovery,
} as const;

/** @deprecated Use HEADER_NAV — re-export shim for docs referencing NAV_ITEMS */
export const NAV_ITEMS = HEADER_NAV;
/** @deprecated Use SOLUTIONS_NAV */
export const SOLUTION_DROPDOWN = SOLUTIONS_NAV;
```

---

## Target copy spec (`conversion-copy.ts` addition)

```ts
export const FOOTER = {
  tagline:
    'Conversion systems for NL small businesses — qualify leads, reduce admin, you stay in control.',
  portfolioPrompt: 'Building something bigger?',
  portfolioLink: 'See the full architecture →',
  portfolioHref: 'https://portfolio.flexgrafik.nl',
  columnSolutions: 'Solutions',
  columnCompany: 'Company',
  columnGetStarted: 'Get started',
  columnResources: 'Resources',
} as const;
```

Export `FOOTER` from `src/content/index.ts`.

---

## Conflict resolution log

| Conflict | Resolution |
|----------|--------------|
| `conversion-pipeline` §3 cold header = „See systems” vs `site-map` §6 L3 in header | **site-map wins** — L3 Book stays (D4) |
| Header „Systems” vs footer „Results” | Same route; different labels per context (D7) |
| `ui-ux-principles` §4 „no second CTA in header” | Unchanged — one CTA only |
| Solutions nav item has `href` + dropdown | Keep `href={ROUTES.solutions}` on label; dropdown on hover/click (current pattern) |

---

## Tasks

### Task 1: Footer copy block

**Files:**
- Modify: `src/content/conversion-copy.ts`
- Modify: `src/content/index.ts`

- [x] **Step 1:** Append `FOOTER` constant (spec above) after `ABOUT` block
- [x] **Step 2:** Re-export in `index.ts` if not covered by `export * from './conversion-copy'`
- [x] **Step 3:** Run `npm run typecheck` — expect PASS

---

### Task 2: Navigation manifest

**Files:**
- Create: `src/lib/navigation.ts`

- [x] **Step 1:** Create file with full spec from **Target data spec** section
- [x] **Step 2:** Run `npm run typecheck` — expect PASS

---

### Task 3: Constants migration

**Files:**
- Modify: `src/lib/constants.ts`

- [x] **Step 1:** Delete lines 53–68 (`NAV_ITEMS`, `SOLUTION_DROPDOWN` definitions)
- [x] **Step 2:** Add at end of file:

```ts
export { HEADER_NAV as NAV_ITEMS, SOLUTIONS_NAV as SOLUTION_DROPDOWN, HEADER_NAV, SOLUTIONS_NAV } from '@/lib/navigation';
```

- [x] **Step 3:** Run `npm run typecheck` — expect PASS (Header still compiles via shim)

---

### Task 4: Header refactor

**Files:**
- Modify: `src/components/Header.tsx`

- [x] **Step 1:** Replace imports:

```ts
import { ROUTES } from '@/lib/constants';
import { HEADER_NAV, SOLUTIONS_NAV, HEADER_CTA } from '@/lib/navigation';
```

- [x] **Step 2:** Replace `NAV_ITEMS` → `HEADER_NAV`, `SOLUTION_DROPDOWN` → `SOLUTIONS_NAV`
- [x] **Step 3:** Replace hardcoded CTA with:

```tsx
<Link href={HEADER_CTA.href} className="...existing classes...">
  {HEADER_CTA.label} <span aria-hidden="true">→</span>
</Link>
```

(same for mobile CTA block)

- [x] **Step 4:** Mobile link tap targets — add `min-h-11 py-2` to mobile nav links and CTA
- [x] **Step 5:** Add `aria-expanded={dropdownOpen}` on Solutions dropdown button
- [x] **Step 6:** Run `npm run typecheck` — expect PASS

**Manual check:** Desktop nav order = Systems · How It Works · Solutions ▾ · Pricing · About · [CTA]. No Blog.

---

### Task 5: Footer refactor

**Files:**
- Modify: `src/components/Footer.tsx`

- [x] **Step 1:** Remove local `SOLUTION_LINKS` and `COMPANY_LINKS` arrays entirely
- [x] **Step 2:** Imports:

```ts
import Link from 'next/link';
import { EMAIL, WHATSAPP } from '@/lib/constants';
import {
  FOOTER_SOLUTIONS,
  FOOTER_COMPANY,
  FOOTER_ARTEFACTS,
  FOOTER_LEGAL,
  HEADER_CTA,
} from '@/lib/navigation';
import { FOOTER, POSITIONING } from '@/content/conversion-copy';
```

- [x] **Step 3:** Brand column:

```tsx
<p className="mt-1 font-mono text-xs text-[var(--qf-accent)]">{POSITIONING.label}</p>
<p className="mt-[var(--qf-sp-3)] text-[var(--qf-text-faint)]">{FOOTER.tagline}</p>
```

- [x] **Step 4:** Solutions column maps `FOOTER_SOLUTIONS`
- [x] **Step 5:** Company column maps `FOOTER_COMPANY`
- [x] **Step 6:** Get started column:

```tsx
<Link href={HEADER_CTA.href}>{HEADER_CTA.label} →</Link>
<a href={`mailto:${EMAIL}`}>{EMAIL}</a>
<a href={WHATSAPP.url} target="_blank" rel="noopener noreferrer">{WHATSAPP.label}</a>
```

- [x] **Step 7:** Add **Resources** column (5th area in bottom bar OR sub-section under Get started):

**Layout choice (locked):** Keep 4-column grid; put Legal + Artefacts in a new row above bottom bar:

```tsx
<div className="mt-[var(--qf-sp-8)] flex flex-wrap gap-x-6 gap-y-2 border-t border-[var(--qf-border)] pt-[var(--qf-sp-6)]">
  {FOOTER_LEGAL.map(...)}
  {FOOTER_ARTEFACTS.map(...)}  {/* download attribute on PDF links */}
</div>
```

- [x] **Step 8:** Bottom bar — replace Pillar 3 copy:

```tsx
<p>
  {FOOTER.portfolioPrompt}{' '}
  <a href={FOOTER.portfolioHref} target="_blank" rel="noopener noreferrer" className="text-[var(--qf-accent)]">
    {FOOTER.portfolioLink}
  </a>
</p>
```

- [x] **Step 9:** Run `npm run typecheck` — expect PASS

---

### Task 6: Root layout metadata

**Files:**
- Modify: `src/app/layout.tsx`

- [x] **Step 1:** Update `openGraph` block:

```ts
openGraph: {
  type: 'website',
  locale: 'en_US',
  url: SITE_URL,
  siteName: SITE_NAME,
  title: 'Quietforge — Conversion Systems Architect',
  description:
    'Conversion systems that qualify leads and reduce admin for NL small businesses. Human-in-the-loop. Start with a paid Automation Map.',
  images: [
    {
      url: '/og/home.svg',
      width: 1200,
      height: 630,
      alt: 'Quietforge — Conversion Systems Architect',
    },
  ],
},
```

- [x] **Step 2:** Update `twitter` block to match title/description/alt
- [x] **Step 3:** Grep `src/` for `Done-for-you` — expect 0 matches
- [x] **Step 4:** Run `npm run typecheck` — expect PASS

---

### Task 7: Strategy doc sync

**Files:**
- Modify: `docs/strategy/site-map.md` §7

- [x] **Step 1:** Add line after `proof.ts`:

```
navigation.ts (header, footer, solutions dropdown — binds to ROUTES + conversion-copy CTAS)
```

- [x] **Step 2:** Add §5 note: „Global chrome: `src/lib/navigation.ts`”

---

### Task 8: Verification gate

- [x] **Step 1:** `npm run typecheck` — PASS
- [x] **Step 2:** `npm run build` — PASS (31 routes)
- [x] **Step 3:** Grep checks:

```bash
rg "NAV_ITEMS|SOLUTION_DROPDOWN" src/ --glob "!navigation.ts" --glob "!constants.ts"
# Expect: only Header.tsx if still using shim names, or 0 if migrated to HEADER_NAV

rg "Pillar 3|Done-for-you|AI Systems" src/
# Expect: 0

rg "SOLUTION_LINKS|COMPANY_LINKS" src/
# Expect: 0
```

- [x] **Step 4:** Manual desktop: Solutions dropdown order + badges
- [x] **Step 5:** Manual mobile: 5 nav items, no Blog, CTA at bottom, links tappable
- [x] **Step 6:** Footer: Legal + 3 PDFs present; portfolio line without Pillar 3

---

### Task 9: Handoff

**Files:**
- Create: `docs/handoffs/2026-06-17-nav-footer-chrome.md`

- [x] Document: files changed, decisions applied (D1–D8), verification output, known backlog (founder, gratka footers)

---

## Self-review (spec coverage)

| Requirement | Task |
|-------------|------|
| Single nav manifest | Task 2, 3 |
| 5 header items + CTA | Task 4 |
| Blog footer-only | Task 4, 5 |
| Solutions dropdown order | Task 2 |
| Footer legal + artefacts | Task 5 |
| CTA from conversion-copy | Task 2, 4, 5 |
| OG metadata alignment | Task 6 |
| No Pillar 3 / Done-for-you | Task 5, 6, 8 |
| site-map hierarchy update | Task 7 |
| Build gate | Task 8 |

**Placeholder scan:** None — all copy and structures specified.

---

## Risk register

| Risk | Mitigation |
|------|------------|
| Circular import constants ↔ navigation | navigation imports constants only; constants re-exports navigation |
| Breaking external docs referencing NAV_ITEMS | Deprecated re-export shim in navigation.ts |
| Mobile dropdown UX regression | Manual test Task 8; no structural change to accordion |
| WhatsApp placeholder number in dev | Existing behaviour; use WHATSAPP constant |

---

## Estimated effort

| Task | Time |
|------|------|
| 1–3 Manifest + copy | ~15 min |
| 4–5 Components | ~25 min |
| 6–7 Metadata + docs | ~10 min |
| 8–9 Verify + handoff | ~15 min |
| **Total** | **~65 min** (1 OpenCode session) |

---

## Execution options (after Dowódca approval)

**1. Inline (recommended)** — Implement Tasks 1–9 in this Cursor session with build gate after Task 3 and Task 8.

**2. Staged** — Task 1–3 first (manifest only, no UI change visible), commit; then Task 4–6, commit; then verify.

**Nie zaczynać kodu bez potwierdzenia:** decyzje D1–D8 są zablokowane w planie; jeśli Dowódca chce Founder w header zamiast About — zmienić tylko D2 przed Task 2.

---

*Plan: 2026-06-17 · Author: Hermes/Cursor · Status: **COMPLETED***
