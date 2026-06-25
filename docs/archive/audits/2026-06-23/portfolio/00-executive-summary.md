# Portfolio Audit — Quietforge (flexgrafik-services.vercel.app)

**Date:** 2026-06-23  
**URL:** https://flexgrafik-services.vercel.app/  
**Skills used:** `nielsen-heuristics-audit` · `ui-design-review` · `ux-audit` gates  
**Persona:** NL ZZP/SME owner, English-readable, checks proof before €290 Automation Map  
**Routes crawled:** 21/21 HTTP 200  
**Evidence:** `../inventory.json`, `../assets/`

---

## Executive verdict

| Dimension | Score | Grade |
|-----------|-------|-------|
| Nielsen heuristics (avg) | **3.9 / 5** | B+ |
| UI design review (avg) | **4.2 / 5** | A− |
| Conversion / funnel | **3.6 / 5** | B |
| Technical / UX gates | **2.8 / 5** | C+ |
| **Overall portfolio** | **3.9 / 5** | **B+ — Conditional Pass** |

**One-line:** Agency-grade visual system and copy architecture; undermined by console 404s (footer PDF prefetch), placeholder video frames, and product naming drift.

**Deploy note:** AUD-S01 (FlexGrafik proof copy) + AUD-L01 (JSON-LD sameAs) + footer PDF fix are **in repo** — not yet on Vercel until next deploy.

---

## UX hard gates (ux-audit)

| Gate | Threshold | Live Vercel | Post-fix (local) |
|------|-----------|-------------|------------------|
| Console errors | 0 | ❌ 17 on `/` (3 unique PDF `_rsc` 404s × prefetch) | ✅ after Footer `<a>` fix |
| Console warnings | 0 | ✅ 0 | ✅ |
| Network 5xx | 0 | ✅ 0 | ✅ |
| Routes 200 | all | ✅ 21/21 | ✅ |
| axe / Lighthouse | ≥95 | ⚠️ not run (Windows EPERM) | pending CI |

**Root cause (404):** `Footer.tsx` used Next.js `<Link>` for `.pdf` artefacts → RSC prefetch `?_rsc=…` → 404. **Fixed:** native `<a download>` for PDF links.

---

## Top findings (priority)

| ID | Sev | Finding | Fix |
|----|-----|---------|-----|
| AUD-P01 | P1 | Console 404 on footer PDF prefetch | ✅ Footer `<a>` — deploy |
| AUD-P02 | P1 | `[FILL: founder video]` on `/founder/` | Record 60–90s Loom or hide section per site-map |
| AUD-P03 | P1 | `[FILL: InboxKiller video]` on solution page | Same — or poster + static diagram only |
| AUD-P04 | P2 | H1 "Telegram Deployment Agent" vs "Inbox Killer" | Align title to spearhead name |
| AUD-P05 | P2 | Home 14 sections — long mobile scroll | Sticky CTA from section 3 |
| AUD-P06 | P2 | WhatsApp in footer only — not hero | Ghost CTA + real `NEXT_PUBLIC_WHATSAPP_URL` |
| AUD-P07 | P3 | `portfolio.flexgrafik.nl` footer link | Verify destination or point to `/results/owner-ecosystem/` |
| AUD-P08 | P3 | FlexGrafik proof copy | ✅ AUD-S01 in repo — deploy |

---

## What works (professional signals)

- Dark/amber terminal aesthetic matches `DESIGN-SYSTEM.md` — Linear/Vercel tier
- Problem → System → Effect on solution pages (screenshot: inbox-killer)
- Transparent pricing (`from €1,490`, Automation Map process)
- Intent color system on home modules
- Named objections, anti-positioning, HITL trust layer
- Footer structure: Solutions / Company / Get started / Resources
- WhatsApp + email in footer get-started column

---

## Deliverable index

| File | Contents |
|------|----------|
| [01-nielsen-heuristics.md](./01-nielsen-heuristics.md) | 10 heuristics scored |
| [02-ui-design-review.md](./02-ui-design-review.md) | 10 visual dimensions |
| [03-findings-backlog.md](./03-findings-backlog.md) | Full finding list |

---

*Skills: `.agents/skills/nielsen-heuristics-audit`, `.agents/skills/ui-design-review`*
