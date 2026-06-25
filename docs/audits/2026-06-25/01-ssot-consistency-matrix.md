# 01 — SSoT Consistency Matrix (post-E-6)

**Date:** 2026-06-25 · **Production:** `https://quietforge.flexgrafik.nl` · **HEAD:** `78dbb4f`

---

## 1.1 Automated gates

| Gate | Result |
|------|--------|
| `npm run typecheck` | PASS |
| `npm run build` | PASS (34 routes) |
| `rg '\[FILL:' src/` | 0 matches (PR-03) |
| `rg 'TODO\|FIXME\|lorem' src/content/` | 0 matches |
| `rg '^const (BEFORE\|AFTER\|PILLARS\|SLUG)' src/app/results/` | 0 matches |
| `audit-404s.mjs` (sample routes) | PASS — no failed assets on `/`, `/results/`, `/pricing/`, `/about/`, `/book-discovery/` |
| `audit-navigation.mjs` | Routes PASS (25/25). See §1.5 for RSC asset noise |

---

## 1.2 Route → content module matrix

| Route | Layout | Content SSoT | Status | Notes |
|-------|--------|--------------|--------|-------|
| `/` | Home | `conversion-copy.ts`, `ecosystem.ts`, `proof.ts`, `readiness.ts`, `los-copy.ts`, `metrics-display.ts` | ✅ | Section order matches `site-map.md` §2 |
| `/results/agent-orchestrator/` | CaseStudyLayout | `agent-os-case-study.ts` + `proof.ts` | ✅ | E-2 |
| `/results/sales-funnel/` | CaseStudyLayout | `sales-funnel-case-study.ts` | ✅ | E-3 |
| `/results/jadzia-coi/` | CaseStudyLayout | `jadzia-coi-case-study.ts` + `jadzia-coi.ts` | ✅ | E-4 |
| `/results/lead-magnet/` | CaseStudyLayout | `lead-magnet-case-study.ts` | ✅ | — |
| `/results/inbox-killer/` | CaseStudyLayout | `inbox-killer-case-study.ts` | ✅ | E-5 |
| `/results/advisory-modernisation/` | CaseStudyLayout | `advisory-modernisation-case-study.ts` | ✅ | E-6 |
| `/results/owner-ecosystem/` | Bespoke | `owner-ecosystem.ts`, `jadzia-coi.ts`, `readiness.ts`, `live-demos.ts` | ⚠️ | Hub card copy in `case-studies.ts` not fully imported from `owner-ecosystem.ts` |
| `/results/whatsapp-discovery-pilot/` | Custom | **None** — hardcoded JSX | ❌ | E-7 backlog |
| `/solutions/inbox-killer/` | SolutionLayout | `inbox-killer-case-study.ts` (solutions exports) | ✅ | E-5b |
| `/solutions/lead-magnet-game/` | SolutionLayout | `lead-magnet-case-study.ts` | ✅ | — |
| `/solutions/sales-funnel/` | SolutionLayout | **Hardcoded** in `page.tsx` | ⚠️ | Drift vs `sales-funnel-case-study.ts` (generic copy, no Mollie/9-screen specificity) |
| `/solutions/web-upgrade/` | SolutionLayout | **Hardcoded** in `page.tsx` | ⚠️ | No `WEBSITE_ONLY_EXCEPTION`; links to advisory CS not web-specific module |
| `/solutions/managed-automation/` | SolutionLayout + FAQ | **Hardcoded** FAQ + props | ⚠️ | MRR path — no content module |
| `/results/` hub | Hub | `case-studies.ts` + `CASE_EXTRAS` inline | ⚠️ | Second copy layer; 3 display names imported, rest inline |
| `/pricing/` | Page | `proof.ts` (`pricing`) | ✅ | — |
| `/book-discovery/` | Page | `constants.PRICING` + inline sections | ⚠️ | Acceptable for form page; not in `conversion-copy.ts` |
| `/founder/`, `/about/` | Page | `conversion-copy.ts` | ✅ | — |

---

## 1.3 Product pair drift (results ↔ solutions)

| Product | Results SSoT | Solutions SSoT | Drift severity |
|---------|--------------|----------------|----------------|
| Inbox Killer | `inbox-killer-case-study.ts` | Same module (E-5b) | ✅ None |
| Lead magnet | `lead-magnet-case-study.ts` | Same module | ✅ None |
| Sales funnel / Wizard | `sales-funnel-case-study.ts` (Mollie, 9 screens, zzpackage) | Generic “guided flow / CRM” in `page.tsx` | ⚠️ **P1** — loses spearhead specificity |
| Web upgrade | Advisory bridge in `advisory-modernisation-case-study.ts` | Generic “mobile-first / GA4” in `page.tsx` | ⚠️ **P1** — no conversion-system framing |
| Managed automation | No dedicated CS | Inline FAQ on solutions page | ⚠️ **P2** — weak proof vs Wizard |

---

## 1.4 Proof manifest (`proof.ts`)

### Videos (`videos.*.ready`)

| Key | ready | url |
|-----|-------|-----|
| agentOs | true | `/gratka/agent-os-demo.mp4` |
| vcms | true | `/gratka/vcms-demo.mp4` |
| ecosystem | false | null |
| inboxKiller | false | null |
| wizard | false | null |
| leadMagnet | false | null (poster only) |
| founder | false | null |

**4/7 not ready** — L2 demo gap on cold traffic (BL-03).

### Screens (`screens.*.ready`)

All 12 `ScreenKey` entries: `ready: true`. Source files verified under `public/gratka/`.

### Case measurements (`caseMeasurements.*`)

| Key | Hub # | Live on detail page |
|-----|-------|---------------------|
| ownerEcosystem | 01 | ✅ `8 repos`, `VCMS` |
| jadziaCoi | 02 | ✅ `WC order sync`, `PLANNED` |
| salesFunnel | 03 | ✅ `Mollie`, `9 UI screens` |
| agentOs | 04 | ✅ `LangGraph`, `HITL` |
| leadMagnet | 05 | ✅ `leaderboard`, `GA4` |
| inboxKiller | 06 | ✅ `142 msgs`, `human approval` |
| advisory | 07 | ✅ `Qualification only`, `in delivery` |
| whatsapp pilot | 08 | ⚠️ Hub uses `manifestKey: ownerEcosystem` — measurement mismatch |

---

## 1.5 Live string reconciliation

Canonical phrases from each `*-case-study.ts` — grep in production HTML (2026-06-25):

| Slug | Phrases checked | Result |
|------|-----------------|--------|
| jadzia-coi | WC order sync, PLANNED, weekly strategy brief | ✅ all FOUND |
| inbox-killer | 142 msgs, human approval, Lead | ✅ all FOUND |
| sales-funnel | Mollie, 9 UI screens, zzpackage | ✅ all FOUND |
| agent-orchestrator | LangGraph, HITL, jadzia-core | ✅ all FOUND |
| lead-magnet | leaderboard, wizard, GA4 | ✅ all FOUND |
| advisory-modernisation | Qualification only, in delivery, Web Upgrade | ✅ all FOUND |
| owner-ecosystem | 8 repos, Conflicts, VCMS | ✅ all FOUND |

**Verdict:** Live production matches content modules for all standard CaseStudyLayout pages.

---

## 1.6 Audit script note — RSC asset 404 noise

`audit-navigation.mjs` reported 18× HTTP 404 for `/gratka/*.pdf` and `*.svg` with `?_rsc=` query on case-study routes. Direct requests without `?_rsc=` return **200** (verified: `advisory-delivery-timeline.pdf`, `los-architecture.svg`).

**Conclusion:** Static artefacts ship correctly; Playwright captures Next.js RSC prefetch failures — **not** user-facing broken downloads. Recommend filtering `?_rsc=` from asset404 reports in a future script fix.

---

## 1.7 Proof-check summary

| Check | Result |
|-------|--------|
| `[FILL:]` placeholders | ✅ 0 |
| Metrics on home from `proof.ts` / `metrics-display.ts` | ✅ `SystemMetrics` uses `getMetricValue` |
| Screen assets present | ✅ 12/12 |
| Video ready flags honest | ✅ false where no URL |
| Field report numbers | ⚠️ Hardcoded in `FieldReports.tsx` — not in `proof.ts`; Commander should verify “14 leads / 3 closed” (PR-07) |
| Intent badges home teasers | ✅ IntentRouter, PainGrid, ResultsTeaser |
| Intent badges `/results/` hub | ✅ `IntentBadges` on each card |

**SSoT verdict:** **STRONG** on results case studies post-E-6; **MODERATE** on solutions ladder + hub second layer.
