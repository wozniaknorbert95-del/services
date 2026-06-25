# Handoff — Phase 2, Task 2: Inbox Killer Spearhead (`/solutions/inbox-killer`)

> **Date:** 2026-05-31  
> **Session:** OpenCode (executor)  
> **Classification:** page-feature  
> **Build:** PASS (`npm run build` + `npm run typecheck` — exit 0, zero warnings)

---

## ✅ Delivered

### 1. `/solutions/inbox-killer` Spearhead Page
**File:** `src/app/solutions/inbox-killer/page.tsx`  
**Type:** Server Component (metadata lives in layout)

**Sections (top → bottom), copy verbatim from `Inbox Killer — Copy & Wireframe (Filar 2).md`:**
1. **§ A — Hero** — "Spearhead · Start here" eyebrow, H1 "Inbox Killer — get your mornings back.", subhead, primary CTA → Book Discovery, secondary → #how-it-works, control line (✓ approval), visual: inbox → sorted lanes
2. **§ B — Problem** — H2 "If your inbox runs your day, this is for you.", 3 pain cards, cost-of-inaction line
3. **§ C — How It Works** — "Five quiet steps", new `ProcessStepHorizontal` component (5 steps: Reads → Sorts → Prioritises → Drafts → You approve ✋), step 5 highlighted with accent
4. **§ D — What You Get** — 4 outcome cards (Hours back / No more lost leads / A calmer business / You, in charge)
5. **§ E — Control & Safety** — H2 + paragraph + 3 reassurance cards (Approval by default / Your data, your boundaries / Always reversible)
6. **§ F — Setup + Kept Running** — 2-column pricing cards: Setup (from €1,200) + Managed Automation (from €99/mo)
7. **§ G — Under the Hood** — lower-emphasis card, H3 "For the technically curious", link to Pillar 3 (portfolio)
8. **§ H — FAQ** — 5 collapsible `FaqItem`s (Does it send emails / Will it work with my email / Will replies sound like me / How long / Why is Discovery paid)
9. **§ I — Final CTA Band** — "Get your inbox — and your mornings — back." → Book Discovery

### 2. Layout with Metadata
**File:** `src/app/solutions/inbox-killer/layout.tsx`  
- Title: `Inbox Killer — email that sorts itself | Quietforge`
- OG image: `/og/solutions-inbox-killer.svg`

### 3. OG Image
**File:** `public/og/solutions-inbox-killer.svg`  
- 1200×630 SVG, Quietforge terminal aesthetic

### 4. Redirects (Vercel)
**File:** `vercel.json` (new)  
- `/inbox-killer/` → `/solutions/inbox-killer/` (301)
- `/digital-modernization/` → `/solutions/` (301) — temporary until `/solutions/web-upgrade/` ships in Phase 3

> Note: `next.config.ts` `redirects()` does **not** work with `output: 'export'`. Vercel platform-level redirects in `vercel.json` are the correct approach for static export.

---

## 🔧 Pre-flight fixes (applied before page build)

| Fix | File | Why |
|-----|------|-----|
| Button `<a>` → `<Link>` | `src/components/ui/Button.tsx` | Full page reload on every CTA — fixed with Next.js client-side navigation |
| `ProcessStepHorizontal` | `src/components/ui/ProcessStepHorizontal.tsx` | Copy doc requires horizontal 5-step flow (Reads→Sorts→Prioritises→Drafts→Approve), not vertical spine |

---

## 📁 Files touched

| File | Action |
|------|--------|
| `src/app/solutions/inbox-killer/page.tsx` | **Created** — 9-section spearhead page |
| `src/app/solutions/inbox-killer/layout.tsx` | **Created** — Metadata export |
| `public/og/solutions-inbox-killer.svg` | **Created** — 1200×630 OG image |
| `src/components/ui/Button.tsx` | **Edited** — `<a>` → `<Link>` |
| `src/components/ui/ProcessStepHorizontal.tsx` | **Created** — Horizontal step flow component |
| `vercel.json` | **Created** — Platform redirects for old URLs |
| `next.config.ts` | **Edited** — Removed non-functional `redirects()` |

---

## 🚦 Build gate

```bash
npm run typecheck  # PASS (exit 0)
npm run build      # PASS (exit 0, zero warnings)
```

**Routes generated (static):**
- `/`
- `/solutions/`
- `/solutions/inbox-killer/`
- `/inbox-killer/` (legacy, to be redirected by Vercel)
- `/digital-modernization/` (legacy, to be redirected by Vercel)
- `/legal/`

---

## 🎯 Next: Phase 2 complete — Phase 3 (Ladder Pages)

Per plan v2, remaining Phase 2 tasks were:
- [x] `/solutions` hub
- [x] `/solutions/inbox-killer` spearhead
- [x] Redirects for old URLs

**Phase 3** next: `/solutions/web-upgrade`, `/solutions/sales-funnel`, `/solutions/lead-magnet-game`.

---

## 📝 Notes

- All copy pasted verbatim from `Inbox Killer — Copy & Wireframe (Filar 2).md` — zero invention.
- Prices pulled from `src/lib/constants.ts` (`PRICING.inboxKiller.from`, `PRICING.care`).
- No new dependencies.
- Page is a Server Component — all client interactivity (FAQ collapse, animations) is encapsulated in child UI primitives.
