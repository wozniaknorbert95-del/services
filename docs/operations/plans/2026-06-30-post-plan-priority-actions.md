---
status: "[ACTIVE]"
title: "Post-Plan Priority Actions — quietforge.flexgrafik.nl"
owner: "Norbert Wozniak"
created: "2026-06-30"
updated: "2026-06-30"
version: "1.0"
classification: "L2 — execution plan (post homepage v3.0)"
parent: "docs/operations/plans/2026-06-29-homepage-master-brief.md §9"
upstream:
  - "../../canons/strategy-rules.md"
  - "../../canons/ops-rules.md"
  - "2026-06-30-faza-1-3-complete.md"
---

# Post-Plan Priority Actions

> **Context:** Homepage v3.0 COMPLETE (Faza 1–4, 10 commits, Lighthouse 100/100/100). This plan covers the 6 most important out-of-scope items identified during Faza 4 verification, prioritized by business impact.

---

## Priority Matrix

| # | Item | Priority | Effort | Business Impact | Blocker? |
|---|------|----------|--------|-----------------|----------|
| **1** | Book Discovery — backend submission | **P0** | Medium | 🔴 Critical — form collects data but sends nowhere | Revenue blocker |
| **2** | ESLint cleanup (7 errors + 4 warnings) | **P1** | Low | 🟡 Code quality + build discipline | No |
| **3** | CLS 0.35 → <0.1 (font loading fix) | **P1** | Low | 🟡 Perf score, user experience | No |
| **4** | WhatsApp pilot page — expand content | **P2** | Medium | 🟢 Proof asset completeness | No |
| **5** | Founder page — video placeholder | **P2** | Low | 🟢 Consistency with proof manifest | No |
| **6** | Pricing drift — structural cleanup | **P3** | Low | 🟢 Code hygiene | No |

---

## §1 Book Discovery — Backend Submission (P0)

### Problem
`BookDiscoveryForm.tsx` collects 7 fields (name, company, email, URL, pain points, budget, availability) but on submit only calls `trackEvent()` and sets local `submitted = true`. **No API call, no email, no webhook.** The copy says "I'll send a payment link within 24 hours" — but the data goes nowhere.

### Constraints
- Site uses `output: 'export'` (static export) — **no Next.js API routes**
- Secrets must be in `.env.local` (gitignored)
- Must respect AVG/GDPR (NL market)

### Options

| Option | Pros | Cons | Effort |
|--------|------|------|--------|
| **A. Formspree** (`formspree.io`) | No backend code, AVG-compliant (EU servers), free tier 50 subs/mo | External dependency, branding on free tier | 1 session |
| **B. EmailJS** (`emailjs.com`) | Client-side only, no server, templates | Client-side = API key exposure (mitigated by domain lock) | 1 session |
| **C. Getform** (`getform.io`) | Simple webhook, EU servers | Less known, smaller community | 1 session |
| **D. Vercel Edge Function** (separate deploy) | Full control, no third-party form service | Additional deploy pipeline, complexity | 2 sessions |
| **E. mailto: fallback** | Zero dependencies, works immediately | Opens email client, poor UX, no tracking | 30 min |

### Recommendation
**Option A (Formspree)** — best balance of simplicity, AVG compliance, and EU hosting. Free tier (50 submissions/mo) covers SMB lead volume. Upgrade path available.

### Implementation Plan
1. Create Formspree account + endpoint (Commander manual)
2. Add `NEXT_PUBLIC_FORMSPREE_ENDPOINT` to `.env.local` + Vercel env
3. Update `BookDiscoveryForm.tsx` — replace local submit with `fetch()` to Formspree
4. Add loading state + error handling
5. Update success message to reference 24h response SLA
6. Test: submit form → verify Formspree dashboard → verify email notification
7. Add AVG consent checkbox (required for NL market)

### Env Required
```
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/{form_id}
```

### Commander Action
- Create Formspree account at `formspree.io` (use Norbert Wozniak email)
- Create form "Automation Map Booking"
- Add endpoint to Vercel project env (production + preview)

---

## §2 ESLint Cleanup (P1)

### Errors (7)

| # | File | Line | Error | Fix |
|---|------|------|-------|-----|
| 1 | `src/app/not-found.tsx` | 12 | JSX comment textnode | Wrap in `{/* */}` |
| 2 | `src/app/pricing/page.tsx` | 289 | `any` cast `(tier as any).star` | Type the `star` property or use optional chaining |
| 3 | `src/components/home/IntentRouter.tsx` | 143 | JSX comment textnode | Wrap in `{/* */}` |
| 4 | `src/components/ui/Eyebrow.tsx` | 16 | JSX comment textnode | Wrap in `{/* */}` |
| 5 | `src/components/ui/ProofMediaGrid.tsx` | 26 | JSX comment textnode | Wrap in `{/* */}` |
| 6 | `src/components/ui/ProofMediaGrid.tsx` | 38 | JSX comment textnode | Wrap in `{/* */}` |
| 7 | `src/lib/home-intent.tsx` | 39 | setState in useEffect | Move to state initializer or use lazy initialization |

### Warnings (4)

| # | File | Line | Warning | Fix |
|---|------|------|---------|-----|
| 1 | `src/app/how-it-works/page.tsx` | 4 | Unused `Card` import | Remove import |
| 2 | `src/app/pricing/page.tsx` | 10 | Unused `PRICING` import | Remove import |
| 3 | `src/components/solutions/SolutionLayout.tsx` | 1 | Unused `ReactNode` import | Remove import |
| 4 | `src/components/ui/ProofScreenSlot.tsx` | 15 | Unused `screenKey` param | Remove or prefix with `_` |

### Implementation Plan
- Single session: fix all 7 errors + 4 warnings
- Verify: `npx eslint "src/**/*.{ts,tsx}"` → 0 problems

---

## §3 CLS 0.35 → <0.1 (P1)

### Root Cause
Google Fonts `@import` with `display=swap` — JetBrains Mono renders in fallback first, then swaps, causing layout shift on all monospace elements (badges, labels, captions, code blocks).

### Fix
1. Add `<link rel="preconnect" href="https://fonts.googleapis.com">` to `layout.tsx`
2. Add `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>` to `layout.tsx`
3. Replace `@import` in `globals.css` with `@font-face` using `font-display: optional`
4. Alternatively: self-host JetBrains Mono woff2 files in `public/fonts/`

### Implementation Plan
- Option A (preconnect + preload): 1 session, minimal change
- Option B (self-host): 1 session, eliminates external dependency entirely
- Verify: Lighthouse CLS < 0.1

### Recommendation
**Option B (self-host)** — eliminates external dependency, full control over font loading, no network request to Google. JetBrains Mono woff2 files are ~50KB total for weights 400–700.

---

## §4 WhatsApp Pilot Page — Expand Content (P2)

### Problem
Page is 57 lines — renders only hero + empty video placeholder + CTA. No system detail, no measurement data, no screenshots. Compared to other case studies (lead-magnet has 7-screen gallery), this is thin.

### What Exists
- `whatsappPilotVideoPlaceholder` in `proof.ts` (ready: true)
- `whatsapp-discovery-pilot-case-study.ts` with full copy strings
- Page uses custom layout (not `CaseStudyLayout`)

### Implementation Plan
1. Add measurement section from `proof.ts` `whatsappPilot` case measurement
2. Add system detail section (6–8 question async flow → scored brief → pilot stage)
3. Add screenshot placeholder (or actual screenshot if available)
4. Consider migrating to `CaseStudyLayout` for consistency
5. Verify: page has comparable depth to other case studies

---

## §5 Founder Page — Video Placeholder (P2)

### Problem
`proof.ts` defines `founder` video slot (120s, ready: false) but founder page renders no video section. Other pages with video placeholders render empty states gracefully.

### Implementation Plan
1. Add video placeholder section to `founder/page.tsx` using `VideoSlot` component
2. Use `proof.ts` `founder` video config
3. Empty state shows "Video walkthrough — PLANNED" (consistent with WhatsApp pilot)
4. Verify: page renders correctly with empty video slot

---

## §6 Pricing Drift — Structural Cleanup (P3)

### Problem
- `pricing/page.tsx` has unused `PRICING` import (warning)
- `(tier as any).star` violates TypeScript strict
- Two different pricing views on same page (Path section + Build tiers table) — not contradictory but confusing

### Implementation Plan
1. Remove unused `PRICING` import
2. Fix `any` cast — type the `star` property properly
3. Add comment explaining the two-view structure (Path vs Build tiers)
4. Verify: no ESLint warnings on pricing files

---

## Execution Order

```
Session A: ESLint cleanup (§2) + Pricing drift (§6) — quick wins, 1 session
Session B: CLS fix (§3) — font self-host or preconnect, 1 session
Session C: Book Discovery backend (§1) — requires Commander Formspree setup first
Session D: WhatsApp pilot expand (§4) — content expansion, 1 session
Session E: Founder video placeholder (§5) — quick add, 30 min
```

**Total:** 5 sessions + 1 Commander action (Formspree setup)

---

## Dependencies

| Session | Depends On |
|---------|------------|
| A | None |
| B | None |
| C | Commander creates Formspree endpoint |
| D | None |
| E | None |

---

*Created: 2026-06-30 · Owner: Norbert Wozniak · Next: Session A (ESLint + Pricing cleanup)*
