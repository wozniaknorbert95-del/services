# Handoff — Phase 3, Task 1: Web Upgrade Ladder (`/solutions/web-upgrade`)

> **Date:** 2026-05-31  
> **Session:** OpenCode (executor)  
> **Classification:** page-feature  
> **Build:** PASS (`npm run build` + `npm run typecheck` — exit 0)

---

## ✅ Delivered

### 1. `/solutions/web-upgrade` Ladder Page
**File:** `src/app/solutions/web-upgrade/page.tsx`  
**Type:** Server Component

**Sections (top → bottom), copy verbatim from `Ladder Pages — Copy & Wireframe (Filar 2).md` §1:**
1. **§ A — Hero** — "Ladder · grow from here" eyebrow, H1 "A website that finally earns its keep.", subhead, CTA → Book Discovery, trust line (✓ lightweight), visual: before → after wireframe
2. **§ B — Problem** — "When your site quietly costs you clients", 4 pain cards + cost line
3. **§ C — What We Do** — 4 feature cards (Audit / Mobile-first layout / Lead capture / Real tracking)
4. **§ D — What You Get** — 4 outcome cards (Proud to share / More enquiries / Clarity / Speed)
5. **§ E — Setup + Kept Running** — 2-column pricing: Setup `from €1,800` · Managed `from €99/mo`
6. **§ F — Under the Hood** — lower-emphasis card, link to Pillar 3
7. **§ G — FAQ** — 3 collapsible items (Start from scratch? / Edit it? / How long?)
8. **§ H — Final CTA** — "Turn your site into your hardest-working salesperson."

### 2. Layout with Metadata
**File:** `src/app/solutions/web-upgrade/layout.tsx`  
- Title: `Conversion Web Upgrade — a site that converts | Quietforge`
- OG image: `/og/web-upgrade.svg`

### 3. OG Image
**File:** `public/og/web-upgrade.svg` — 1200×630 SVG

---

## 📁 Files touched

| File | Action |
|------|--------|
| `src/app/solutions/web-upgrade/page.tsx` | **Created** |
| `src/app/solutions/web-upgrade/layout.tsx` | **Created** |
| `public/og/web-upgrade.svg` | **Created** |

---

## 🚦 Build gate

```bash
npm run typecheck  # PASS (exit 0)
npm run build      # PASS (exit 0, 10 static routes)
```

**New route:** `/solutions/web-upgrade`

---

## 🎯 Next: Phase 3, Task 2 (`/solutions/sales-funnel`)

Second ladder page per `Ladder Pages — Copy & Wireframe (Filar 2).md` §2.

---

## 📝 Notes

- Copy pasted verbatim from source doc — zero invention.
- Prices from `src/lib/constants.ts` (`PRICING.webUpgrade.from`, `PRICING.discovery`).
- Server Component — zero client-side JS on page level.
- No new dependencies.

