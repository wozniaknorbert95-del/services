# Handoff — Phase 3, Tasks 2–3: Sales Funnel + Lead Magnet Game

> **Date:** 2026-05-31  
> **Session:** OpenCode (executor)  
> **Classification:** page-feature  
> **Build:** PASS (`npm run build` + `npm run typecheck` — exit 0)

---

## ✅ Delivered

### 1. `/solutions/sales-funnel` Ladder Page
**File:** `src/app/solutions/sales-funnel/page.tsx`  
**Type:** Server Component

**Sections (copy verbatim from `Ladder Pages — Copy & Wireframe (Filar 2).md` §2):**
1. **§ A — Hero** — "Quotes, bookings and qualifying — handled." + funnel flow visual
2. **§ B — Problem** — 4 pain cards + cost line
3. **§ C — What We Do** — 4 feature cards (Guided flow / Built-in logic / Connected / Clear close)
4. **§ D — What You Get** — 4 outcome cards (Fewer emails / More completed / Clean data / Tidy pipeline)
5. **§ E — Setup + Kept Running** — Setup `from €2,400` · Managed `from €99/mo`
6. **§ F — Proof Asset** — "Built on a proven engine"
7. **§ G — FAQ** — 3 items (Payments? / Fit services? / Works with tools?)
8. **§ H — Final CTA** — "Let the funnel do the asking."

### 2. `/solutions/lead-magnet-game` Ladder Page
**File:** `src/app/solutions/lead-magnet-game/page.tsx`  
**Type:** Server Component

**Sections (copy verbatim from `Ladder Pages — Copy & Wireframe (Filar 2).md` §3):**
1. **§ A — Hero** — "Turn visitors into leads — and give them a reason to stay." + game→lead visual
2. **§ B — Problem** — 3 pain cards + cost line
3. **§ C — What We Do** — 4 feature cards (On-brand mechanic / Lead capture / Reward / Connected)
4. **§ D — What You Get** — 4 outcome cards (More leads / More time / Something to talk about / Real numbers)
5. **§ E — Setup + Kept Running** — Setup `from €2,200` · Managed `from €99/mo`
6. **§ F — Differentiator** — "Why this is different" (custom game engine)
7. **§ G — FAQ** — 3 items (Maintenance? / Match brand? / Mobile?)
8. **§ H — Final CTA** — "Make engagement your lead engine."

### 3. OG Images
- `public/og/sales-funnel.svg` — 1200×630
- `public/og/lead-magnet-game.svg` — 1200×630

### 4. Redirect update
- `vercel.json` — `/digital-modernization/` now redirects to `/solutions/web-upgrade/` (301)

---

## 📁 Files touched

| File | Action |
|------|--------|
| `src/app/solutions/sales-funnel/page.tsx` | **Created** |
| `src/app/solutions/sales-funnel/layout.tsx` | **Created** |
| `src/app/solutions/lead-magnet-game/page.tsx` | **Created** |
| `src/app/solutions/lead-magnet-game/layout.tsx` | **Created** |
| `public/og/sales-funnel.svg` | **Created** |
| `public/og/lead-magnet-game.svg` | **Created** |
| `vercel.json` | **Edited** — redirect to /solutions/web-upgrade/ |

---

## 🚦 Build gate

```bash
npm run typecheck  # PASS (exit 0)
npm run build      # PASS (exit 0, 12 static routes)
```

**Routes generated:**
- `/`
- `/solutions/`
- `/solutions/inbox-killer/`
- `/solutions/web-upgrade/` (new)
- `/solutions/sales-funnel/` (new)
- `/solutions/lead-magnet-game/` (new)
- `/inbox-killer/` (legacy)
- `/digital-modernization/` (legacy)
- `/legal/`

---

## 🎯 Phase 3 Complete

All 3 ladder pages delivered:
- [x] Web Upgrade (`/solutions/web-upgrade`)
- [x] Sales Funnel (`/solutions/sales-funnel`)
- [x] Lead Magnet Game (`/solutions/lead-magnet-game`)

**Next:** Phase 4 (Conversion & Trust Pages):
- `/solutions/managed-automation`
- `/pricing`
- `/how-it-works`
- `/results`
- `/about`

---

## 📝 Notes

- Copy pasted verbatim from source docs — zero invention.
- Prices from `src/lib/constants.ts`.
- All pages are Server Components — zero client-side JS on page level.
- No new dependencies.
