# Quietforge Portfolio Repositioning — Implementation Plan (generated)

> Session: AI Systems Architect repositioning (content/structure only).
> Source of truth for copy: `portfolio-sekcje/` prepared assets.
> Do not merge without owner approval.

---

## 1. Context Map (claim → backing source)

| Claim on site | Backing source | Wording if unbacked |
|---|---|---|
| 12-step internal workflow → 5 client phases | `flexgrafik-meta/docs/core/workflow-manual.md` — 6 phases, 12 steps (PLAN & FRAME → ITERATE & HANDOFF) | Keep as "same workflow my own systems use" — process proof |
| AI workforce: planner → coder → tester → review | `flexgrafik-meta/docs/core/agents.md` — Strategist / Planner / Builder / QA hierarchy | Verbatim — matches terminal snippets on site |
| Single source of truth, agent cards, fixed rules | `workflow-manual.md` §2.3 Brain as SSoT; `agents.md` §3 Agent Cards | Verbatim in How I work closing note |
| Human-in-the-loop — nothing sends without approval | `WhyThisWorks.tsx` existing copy; `global-rules.md` §2.2 manual deploy | Verbatim |
| Paid Automation Map as first step | `FinalCtaBand.tsx`, `PRICING.discovery` (€290) | Verbatim |
| No lock-in, README + handover | `global-rules.md` §2.3 1-1-1; artefact `03-maintenance-handover.md` | Verbatim |
| EU data, scoped access, service accounts | `global-rules.md` §2.1 stack (VPS EU); conservative copy in section 3 | Keep "can run on test inbox", "on request" |
| Case 1 — Inbox Killer live, 100+ messages/scan | `SpearheadSpotlight.tsx`, blog post `under-the-hood-how-inbox-killer-works.mdx` | Measurement: estimate only |
| Case 2 — FastAPI + LangGraph on VPS | `global-rules.md` §2.1 "Python + FastAPI + SQLite on VPS"; `agents.md` Jadzia orchestration | No client name; "agent engine · production" |
| Case 3 — 7-step SPA configurator | `global-rules.md` §1.3 Wizard-Only, §4.5 7-step wizard | "Sales Funnel Engine" label |
| Case 4 — Rotterdam accounting office | KFA engagement (anonymised); scope from `4-case-studies/section.md` | "in delivery" — no outcomes yet |
| Multi-agent ecosystem runs real business | Owner ecosystem (FlexGrafik repos); described generically | No fabricated metrics |
| "A dozen real jobs across industries" | Owner background — qualitative, no employer names | Keep as-is (no invented credentials) |

**Downgrades applied:** All case study Measurement lines use estimate / process proof / in delivery — zero `[X]` placeholders.

---

## 2. Codebase findings

### Framework & routing
- **Stack:** Next.js App Router (`src/app/`), React 19, TypeScript strict, Tailwind v4, Framer Motion.
- **Home:** [`src/app/page.tsx`](src/app/page.tsx) — composes section components.
- **Results:** [`src/app/results/page.tsx`](src/app/results/page.tsx) — replace `CASES` with section 4.
- **Book discovery:** [`src/app/book-discovery/page.tsx`](src/app/book-discovery/page.tsx) — all CTAs → `ROUTES.bookDiscovery`.

### Design system (source of truth)
- Tokens: [`src/app/globals.css`](src/app/globals.css) — `--qf-bg`, `--qf-bg-raised`, `--qf-accent`, `--qf-text-dim`, spacing, mono font.
- UI primitives: `Section`, `Card`, `Eyebrow`, `Button`, `Badge`, `ProcessStep`.
- Home sections pattern: `border-t border-[var(--qf-border)] py-[var(--qf-sp-24)]`, `max-w-[var(--qf-maxw)]`, Framer Motion `fadeIn`.

### Insertion points (README §3)
```
HERO → Pain → Inbox Killer → Ladder → Why this works →
  [NEW] About → How I work → Trust & Safety →
  ResultsTeaser → FinalCtaBand
```
`/results` — full section 4 replacement.

### qf-* → repo class map (preview.html → production)

| Preview (`qf-*`) | Repo mapping |
|---|---|
| `.qf-section` | `<section className="border-t … py-[var(--qf-sp-24)]">` or `<Section>` |
| `.qf-section.qf-alt` | `bg-[var(--qf-bg-raised)]` alternate band |
| `.qf-wrap` | `mx-auto max-w-[var(--qf-maxw)] px-[var(--qf-sp-6)]` |
| `.qf-eyebrow` | `<Eyebrow>` (adds `//` prefix) |
| `.qf-h2` | default `h2` styles from globals |
| `.qf-h3` | `text-[var(--qf-fs-lg)] font-bold` |
| `.qf-lead` | `text-[var(--qf-text-dim)] text-[var(--qf-fs-lg)] max-w-[var(--qf-maxw-narrow)]` |
| `.qf-body` | `text-[var(--qf-text-dim)] leading-relaxed` |
| `.qf-grid` | `grid gap-[var(--qf-sp-6)] sm:grid-cols-2 lg:grid-cols-3` |
| `.qf-card` | `<Card hover>` |
| `.qf-kicker` | `font-mono text-[var(--qf-info)] text-sm` |
| `.qf-split` | `grid gap-[var(--qf-sp-8)] lg:grid-cols-[1.3fr_1fr]` |
| `.qf-chips` | stacked `<Card>` list items |
| `.qf-cta` | `<Button href={ROUTES.bookDiscovery} withArrow>` |
| `.qf-steps` / `.qf-step` | flex row cards with mono step number |
| `.qf-tag` | `<Badge>` |
| `.qf-deliver` | `font-mono text-[var(--qf-accent)] text-sm` |
| `.qf-forwhom` | `font-mono text-[var(--qf-info)] text-sm` |
| `.qf-note` | `border-l-2 border-[var(--qf-border)] pl-4 text-[var(--qf-text-dim)] text-sm` |
| `.qf-cases` / `.qf-case` | responsive grid of `<Card>` |
| `.qf-case-meta` | `font-mono text-[var(--qf-accent)] text-xs` |
| `.qf-real` | `border-l-2 border-[var(--qf-accent)] pl-3 text-[var(--qf-text)]` |
| `.qf-measure` | `font-mono text-[var(--qf-text-faint)] text-xs` |

**Rule:** No parallel `qf-*` CSS layer in globals — Tailwind + existing tokens only.

---

## 3. Work breakdown (dependency order)

### Task 1 — About: AI Systems Architect
- **Files:** `src/components/home/AboutArchitect.tsx`, `src/app/page.tsx`
- **Insert:** after `<WhyThisWorks />`
- **DoD:** 3 cards + split layout responsive; verbatim lead; CTA → `/book-discovery/`; first-person Norbert.

### Task 2 — How I work
- **Files:** `src/components/home/HowIWork.tsx`, `src/app/page.tsx`
- **Insert:** after `<AboutArchitect />`
- **DoD:** 5 phases, tags visible; phase 1 links Automation Map sample; phase 5 links Maintenance artefact.

### Task 3 — Trust & Safety
- **Files:** `src/components/home/TrustSafety.tsx`, `src/app/page.tsx`
- **Insert:** after `<HowIWork />`, before `<ResultsTeaser />`
- **DoD:** 6 cards; "For whom" line; playbook link in closing note.

### Task 4 — Case studies (/results)
- **Files:** `src/app/results/page.tsx`
- **DoD:** 4 process-proof cases; zero `[X]`; anonymised; CTA → book-discovery.

### Task 5 — Artefacts
- **Files:** `public/artefacts/*.md`, `src/lib/constants.ts` (`ARTEFACTS`)
- **Wire:** How I work (phases 1 & 5), Trust & Safety (playbook), FinalCtaBand (sample link optional)
- **DoD:** Download links resolve to public markdown files.

---

## 4. Risks & mitigations

| Risk | Mitigation |
|---|---|
| Style drift from preview teal palette | Map to amber `--qf-accent` tokens only |
| Unbacked metrics on case studies | Process-proof Measurement lines only |
| Mobile timeline overflow | `flex-col` on small screens; `min-w-0` on grids |
| Broken artefact links | Serve from `public/artefacts/` with constants |
| Route regression | All CTAs use `ROUTES.bookDiscovery` |

---

## 5. Rollback plan

- Branch: `feat/repositioning-ai-architect`
- Commits (one per task): `feat: add About section`, `feat: add How I work`, `feat: add Trust & Safety`, `feat: rework results case studies`, `feat: wire portfolio artefacts`
- Revert: `git revert` per commit or drop branch

---

## 6. Out of scope (this session)

- Visual redesign / polish pass
- Real client metrics
- PDF export of artefacts (markdown download only)
- New routes beyond `/results` update
- Deploy (owner approval required per global-rules §2.2)

---

## 7. Global Definition of Done

- [ ] All 4 sections in README §3 order on home + /results reworked
- [ ] Existing design system only — no parallel CSS
- [ ] Every claim backed or downgraded per Context Map
- [ ] No client names; English first-person Norbert voice
- [ ] 3 artefacts linked from matching sections
- [ ] Responsive 360/768/1280; semantic headings; build + typecheck pass
- [ ] PR on preview branch — no auto-merge
