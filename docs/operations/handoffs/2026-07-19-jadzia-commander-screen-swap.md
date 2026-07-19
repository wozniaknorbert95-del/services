# Handoff — Jadzia Commander Start screen swap (2026-07-19)

**Repo:** quietforge.flexgrafik.nl · **Build:** `npm run build` ✅ (36 routes / sitemap 26)

## Cel / Goal
Replace outdated fixture Start PNG with Commander’s live Start screenshot everywhere that asset is served.

## Co zrobiono / What changed
- Swapped `public/gratka/jadzia-commander-home.png` + bench `docs/operations/media/jadzia-commander-bench/home.png` (same SHA256).
- Updated alt/captions in `proof.ts` + `conversion-copy.ts` (queue action, not fixture “pick a priority / redacted”).
- Left `jadzia-commander-data-health.png` unchanged (Analityka view).

## Pliki / Files

| File | Action |
|------|--------|
| `public/gratka/jadzia-commander-home.png` | replace |
| `docs/operations/media/jadzia-commander-bench/home.png` | replace |
| `src/content/proof.ts` | caption/alt update |
| `src/content/conversion-copy.ts` | caption/alt update |

## Weryfikacja / Verification
- PNG hash match public ↔ bench
- Image shows live Start: CS follow-up form + MAPA SYSTEMU (no filled JWT)
- Paths still `/gratka/jadzia-commander-home.png` via `proof.ts` / spearhead / gallery

## Post-deploy smoke (Dowódca)
1. Home Jadzia spearhead → new Start chrome
2. `/results/jadzia-coi/` gallery Start tab → same PNG
3. Hard refresh if CDN caches old asset

## Następny krok / Next steps
- Commit + push when Dowódca says ship
- Optional: crop auth strip later if JWT UI feels too “logged-out operator” for portfolio
