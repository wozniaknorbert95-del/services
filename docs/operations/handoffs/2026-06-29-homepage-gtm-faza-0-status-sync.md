# Handoff — Homepage GTM Faza 0 status sync (2026-06-29)

**Repo:** services.flexgrafik.nl · **Build:** `npm run build` ✅ (34 routes) · **Typecheck:** ✅

## Cel / Goal

Zsynchronizować status planu `2026-06-29-homepage-gtm-faza-0.md` z rzeczywistym stanem po Commander sign-off M0.2. Frontmatter planu wciąż głosił `[VERIFIED — COMMANDER SIGN-OFF PENDING]` mimo że sign-off M0.2 OK nastąpił 2026-06-29 (commit `8d6af0a`) i SESSION-ANCHOR już głosił M0.2 CLOSED.

## Klasyfikacja

`docs-task` (vibe-init) — sync metadanych planu, bez kodu, bez canon edit, bez scope-lock.

## Co zrobiono / What changed

Wszystkie edycje w jednym pliku: `docs/operations/plans/2026-06-29-homepage-gtm-faza-0.md`

- **Frontmatter:** `status` → `[CLOSED — M0.2 OK 2026-06-29]`; `verified` rozszerzone o B2 partial + 4 uwagi P2/P3; dodane pola `commander_signoff` i `closed`.
- **Banner „Stan:”:** tryb dokonany — M0.2 OK + commit `8d6af0a` + M0.2 CLOSED → V2 LinkedIn → M1.1.
- **Sekcja wyników:** dodana kolumna „Commander” z ✅ M0.2 OK; C LinkedIn → ⏳ V2.
- **Tabela „Status w jednym miejscu”:** dodany wiersz „Commander sign-off (M0.2)”; LinkedIn → „MANUAL — P0 next”; M1.1 → „READY (po V2)”.
- **Gate M0.2:** linia przerobiona na tryb dokonany (V1.5 ✅ DONE → M1.1 unlocked po V2).
- **Commity (referencja):** dopełnione o `8d6af0a`, `271c31b`, `6c2068b`, `c363d1f` (M0.2 verification + sign-off trail).
- **„Po weryfikacji — następne kroki”:** krok 1 przekreślony (B1–B8 + V1.5 DONE); krok 2 = V2 LinkedIn; krok 3 = M1.1 z linkiem do `plans/2026-06-29-m1-inbox-killer-post.md`; krok 4 = Faza B W1–W4 z nazwaniem.
- **Stopka:** Next gate → V2 LinkedIn Featured → M1.1.

## Pliki / Files

| File | Action |
|------|--------|
| `docs/operations/plans/2026-06-29-homepage-gtm-faza-0.md` | edit — status sync (frontmatter + 6 sekcji) |
| `docs/operations/handoffs/2026-06-29-homepage-gtm-faza-0-status-sync.md` | new — ten handoff |

## Weryfikacja / Verification

```bash
npm run typecheck   # PASS (no src/ impact — docs-only)
npm run build       # PASS (34 routes, prebuild sitemap regen OK)
git diff --stat     # 1 file changed, ~19 ins / 16 del w plan.md
```

Git `core.autocrlf=true` — warningi LF→CRLF są kosmetyczne, diff zawiera tylko zmiany treści.

## Post-deploy smoke (Commander)

N/A — brak zmian w `src/`, brak nowej deploy wymaganej. Produkcja bez zmian (HEAD `8d6af0a` już live).

## Następne kroki

1. **Commit + push master** (Commander HITL lub agent na wyraźne polecenie) — Vercel CD nie wymaga re-deploy (docs-only), ale sync kanonu operations/ warto wypchnąć.
2. **V2** — LinkedIn Featured (3 URL + Services €290) — Commander manual, ~10 min.
3. **M1.1** — post P1 Inbox Killer — copy-paste: `plans/2026-06-29-m1-inbox-killer-post.md`.
4. **Faza B (opcjonalnie, osobne sesje per Zasada 1-1-1):**
   - W1 ResultsTeaser owner-ecosystem card de-jargon (P2)
   - W2 Spearhead terminal → screenshot only (P2 defer)
   - W3 BuiltVsPlanned „governance scans” copy polish (P3)
   - W4 StickyCta Map-primary + site-map §3 amendment (P2 — wymaga scope-lock, canon edit + skill sync)

## Uwagi

- Anti-chaos rule 1 (page.tsx → site-map §2): N/A — brak zmian w `src/app/page.tsx`.
- Anti-chaos rule 2 (HARD rule → canon + skill): N/A — brak canon edit.
- Anti-chaos rule 4 (handoff co sesja): ✅ ten plik.
- Niecommitowane — czeka na wyraźne polecenie Dowódcy (Zasada opencode: commit tylko na wyraźne żądanie).
