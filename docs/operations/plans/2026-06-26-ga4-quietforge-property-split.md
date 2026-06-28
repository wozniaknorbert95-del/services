---
status: "[EXECUTED]"
title: "Plan — GA4 Quietforge dedicated property"
owner: "Norbert Wozniak"
updated: "2026-06-26"
classification: "Operations plan"
---

# Plan: GA4 Quietforge — dedicated property

**Goal:** Commander opens GA → sees **Quietforge** → clean B2B stats. Zero mixed game traffic. Zero hostname guesswork.

**Canon:** [`ops-rules.md` OR-01](../../canons/ops-rules.md) · **Map:** [`ga4-property-map.md`](../../architecture/ga4-property-map.md)

---

## Why split (root cause)

| Issue | Impact |
|-------|--------|
| Quietforge on property `528764186` (“FlexGrafik App”) | Selector has no “Quietforge” |
| Game + B2B in one property | 28d reports dominated by `main_menu_start`, not conversion events |
| Docs used numeric ID without UI name | Agent and Commander misaligned |

**Not acceptable long-term:** “Select FlexGrafik App and filter hostname.”

---

## Approach comparison

| Option | Pros | Cons | Verdict |
|--------|------|------|---------|
| **A. New GA4 property “Quietforge”** | Clean UI, clean MCP, IBM/Google standard | No historical event migration; one-time Admin work | **RECOMMENDED** |
| B. Rename `528764186` to “Quietforge” | Fast | Breaks game analytics identity; wrong product on one property | Reject |
| C. Hostname filters forever | No GA Admin today | Permanent ambiguity; violates OR-01 | **Forbidden** |

---

## Execution phases

### Phase 1 — GA4 Admin (Chrome / GA UI) ~20 min

1. Account **FlexGrafik** → **Utwórz** → **Usługa** (property).
2. Display name: **`Quietforge`** (exact).
3. Strefa czasowa: `Europe/Amsterdam` · Waluta: `EUR`.
4. **Strumień danych** → Web → URL: `https://quietforge.flexgrafik.nl` → name: **`Quietforge Web`**.
5. Copy new **Measurement ID** `G-XXXXXXXX` → record in `ga4-property-map.md`.
6. Copy new **Property ID** `properties/NNNNNNNN` → record in map.

**Recreate config from legacy stream:**

| Admin item | Action |
|------------|--------|
| Custom dimension | `location` → display **CTA location** · scope Event |
| Key events | Mark `cta_book_map_click`, create `intake_submit` |
| Exploration | New **Quietforge Map funnel** (canon steps) | Hub URL + `ga4-create-exploration.mjs` (2026-06-28) |
| SA access | `quietforge-ga-reader-712@flexgrafik.iam.gserviceaccount.com` → **Przeglądający** on **new** property only |

### Phase 2 — Deploy wiring ~15 min

1. Vercel → `quietforge` project → Environment Variables:
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID` = **new** `G-…` (Production + Preview).
2. Redeploy production (or push empty commit if CD only on master).
3. Update repo:
   - `scripts/ga4-prod-smoke.mjs` — new measurement ID
   - `scripts/ga4-api-audit.py` — new `PROPERTY_ID`
   - `brain.md`, `RESTART-PROMPT-GA4-MCP.md`, `ga4-property-map.md` — target → current
4. `npm run build` gate.

### Phase 3 — Verification ~10 min

```bash
node scripts/ga4-prod-smoke.mjs          # new G- in collect
python scripts/ga4-api-audit.py          # new property_id; canon events appear after lag
```

**GA UI checks:**

- [ ] Selector shows **Quietforge** (own row).
- [ ] Realtime: visit prod → active user on **Quietforge** property only.
- [ ] Click hero CTA → `cta_book_map_click` in Realtime.
- [ ] Reports → no `main_menu_start` in default traffic (game gone).

### Phase 4 — Legacy cleanup ~10 min

1. **Stop** sending Quietforge traffic to old `G-M24NL622DF`:
   - After Vercel cutover verified, old stream receives zero new hits.
2. Optional: GA Admin → old stream → note “deprecated — app only” in internal doc.
3. Do **not** delete old property `528764186` — still serves **FlexGrafik App** game.

### Phase 5 — MCP + weekly ~5 min

1. Confirm SA Viewer on **new** property (not only old).
2. MCP `get_account_summaries` → lists **Quietforge** + **FlexGrafik App** separately.
3. Update weekly prompt property ID in `RESTART-PROMPT-GA4-MCP.md`.

---

## Data continuity (honest)

| Data | After split |
|------|-------------|
| Quietforge events before cutover | Stay on `528764186` (mixed with game) — **not migrated** in standard GA4 |
| Events after cutover | Clean on **Quietforge** property |
| Funnel / explorations | Recreate on new property (Phase 1) |

If Commander needs unified history later → BigQuery export (out of scope this plan).

---

## Session split (1-1-1)

| Session | Scope |
|---------|--------|
| **S1** | Phase 1 GA Admin + property map update |
| **S2** | Phase 2–3 Vercel + code + smoke |
| **S3** | Phase 4–5 cleanup + handoff |

---

## Success criteria

1. GA account picker shows **Quietforge** as named property.
2. Default reports show **only** Quietforge web traffic (no game events).
3. Prod smoke + MCP audit PASS on **new** property ID.
4. `ga4-property-map.md` reflects current = target (no TBD).
5. Handoff contains **zero** manual steps for Commander.

---

## Next action

**Execute S1** — agent creates GA4 property “Quietforge” in Admin UI and records IDs in `ga4-property-map.md`.

Commander approval: implicit from this message (“przygotuj plan” + demand for professional split).
