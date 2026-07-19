---
name: strategy-check
description: Verify changes comply with the strategy canon for services.flexgrafik.nl — LOCKED home order (site-map §3 v4.0, 7 sections), intent colors (§4), single-L3 rule, Problem→System→Effect arc, CTA tiers, IntentRouter 6 cards on /solutions/. Flags drift and enforces the anti-chaos rule (update site-map.md when page.tsx changes). Invoke before/after any home or money-page work.
---

# strategy-check — Strategy Canon Compliance

The canon (`docs/canons/strategy-rules.md` + `docs/strategy/*`) is the single source of truth for layout, copy, nav, and CTAs. This skill catches drift before it ships and enforces the anti-chaos rule so docs and code never diverge.

## When to Use This Skill

Invoke this skill when:
- Editing `src/app/page.tsx` or any home section component
- Editing a money page (`/solutions/*`, `/results/*`, `/pricing/`, `/book-discovery/`)
- Changing navigation, CTAs, or section order
- Reviewing whether a proposed change is canon-compliant before building it

## Procedure

### Step 1 — Load the relevant canon

`docs/canons/strategy-rules.md` (enforceable HARD rules), `docs/strategy/site-map.md` (primary), plus `conversion-pipeline.md` (CTA tiers) and `marketing-rules.md` / `marketing-strategy.md` (positioning) as needed.

### Step 2 — Check against binding rules

**Home order (site-map §3 v4.0 — LOCKED):** 7 sections — Hero → PainGrid (only router, no IntentFilterChips) → SpearheadSpotlight (metrics strip inside, no separate SystemMetrics) → BuiltVsPlanned (compact, 4 rows: Wizard/Jadzia/Agent OS/Governance) → WhyItWorks (method + safety + objections, one H2) → Pricing → FinalCtaBand. IntentRouter (6 business cards) lives on `/solutions/`, not home. Forbidden on home: `DualBrandBand`, `FeaturedStrip`, standalone `SystemMetrics`, `IntentRouter`, `EcosystemVideo`, `OwnerEcosystemTeaser`, `LivingSystemTeaser`, `BehindTheScenes`, `ResultsTeaser` (standalone), `SystemArchitecture`, second hero rewrite, "AI Systems Architect" label, terminal mock blocks, full LOS/8-repo/governance sections. Full LOS + 8-repo + governance on `/results/owner-ecosystem/`.

**Page arc:** every money page is **Problem → System → Effect**, never Feature → Feature → Feature.

**Single L3 contract:** one L3 above the fold (hero primary = *Book Automation Map*). Header CTA is always L3 Book. Forbidden: "Book Strategy Call" as primary CTA. Min two proof sections before a second L3.

**Intent colors (§4):** every module card (`IntentRouter`), pain card (`PainGrid`), and results card shows ≥1 intent badge using tokens `--fx-time/money/order/calm/efficiency` (`text-fx-*`). No invented colors.

**Positioning:** Conversion Systems Architect. Reject portfolio-grid framing (`ui-ux-principles.md` §1).

### Step 3 — Enforce the anti-chaos rule

If `src/app/page.tsx` or home section order changed → **`site-map.md` §3 MUST be updated in the same session** (`AGENTS.md`, `README.md`). Verify the table reflects reality; update it if not.

### Step 4 — Report drift

## Output Format

```markdown
## Strategy Check — <page/component>

| Rule | Status | Note |
|------|--------|------|
| Home order (site-map §3 v3.0 LOCKED, 9 sections) | ✅ / ❌ | <deviation> |
| Page arc Problem→System→Effect | ✅ / ❌ | |
| Single L3 / header = L3 Book | ✅ / ❌ | |
| Intent badge on every card (§4) | ✅ / ❌ | |
| Positioning (Conversion Systems Architect) | ✅ / ❌ | |
| Anti-chaos: site-map.md updated w/ page.tsx | ✅ / ⚠️ N/A / ❌ | |

**Verdict:** COMPLIANT / DRIFT — <required corrections>
```

## Guardrails

- The canon wins over `brain.md` and ad-hoc notes when they disagree (`docs/architecture/authority-chain.md`).
- Never reorder or remove a home section without updating `site-map.md` §3 the same session.
- Don't delete a proof section that sits before a CTA (funnel job).
- Content lives in `src/content/*` — change copy there, not hardcoded in components.
