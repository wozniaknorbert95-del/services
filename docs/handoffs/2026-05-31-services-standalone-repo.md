# Handoff: services.flexgrafik.nl — Standalone Repo Extraction

## Context

Rozdzielenie `services.flexgrafik.nl` z monorepo `portfolio/services/` do osobnego repozytorium GitHub. Użytkownik wybrał podejście "clean start" — bez zachowania historii git.

## Deliverables

### Nowe repo standalone
- **URL**: https://github.com/wozniaknorbert95-del/services
- **Ścieżka lokalna**: `C:\Users\FlexGrafik\FlexGrafik\github\services`
- **Branch**: `master`
- **Commitów**: 2 (initial + docs update)

### Zmiany w portfolio
- Usunięto `services/` z repozytorium `portfolio`
- Commit: `chore: extract services into standalone repo`
- Push: `master -> origin/master`

### Zaktualizowane dokumenty w services/
- `brain.md` — zmieniono referencję repo z `portfolio/services/` na `wozniaknorbert95-del/services` (standalone)
- `AGENTS.md` — utworzono nowy plik z zasadami specyficznymi dla projektu services
- `.agents/workflows/vibe-init.md` — zmieniono referencję `portfolio/AGENTS.md` na lokalny `AGENTS.md`

## Build Results

| Projekt | Build | TypeScript | Strony |
|---|---|---|---|
| `services` | PASS | PASS | 7/7 |
| `portfolio` | PASS | PASS | 47/47 |

## Files Changed (w nowym repo)

| File | Action |
|---|---|
| `brain.md` | Modified — aktualizacja referencji repo |
| `AGENTS.md` | New — standalone project agents |
| `.agents/workflows/vibe-init.md` | Modified — lokalna referencja AGENTS.md |

## Decisions

| Decyzja | Uzasadnienie |
|---|---|
| Clean start (bez historii git) | Użytkownik wyraźnie wybrał — prostsze, mniej komplikacji z subtree |
| Nazwa repo: `services` | Prosta, zgodna z nazwą projektu |
| Branch: `master` | Spójność z istniejącym portfolio |
| Nie kopiowano `node_modules/`, `.next/`, `dist/`, `.env.local`, `tsconfig.tsbuildinfo` | Artefakty budowania — zostaną wygenerowane na nowo |

## Blockers

| Bloker | Rozwiązanie |
|---|---|
| Vercel Git connection wskazuje stare repo | **Manualne** — Dashboard Vercel → Project Settings → Git → zmień repo na `wozniaknorbert95-del/services` |

## Stan

- **services**: standalone repo, build PASS, deployed do `https://flexgrafik-services.vercel.app` (wciąż z starego repo do czasu zmiany w dashboard)
- **portfolio**: clean, bez services/, build PASS
- **DNS**: `services.flexgrafik.nl` wymaga A record → `76.76.21.21` (bez zmian)

## Next Steps

1. **Vercel Dashboard**: Zmień Git repo dla projektu `flexgrafik-services`
   - Idź do: https://vercel.com/wozniaknorbert95-dels-projects/flexgrafik-services/settings/git
   - Disconnect obecne repo (`portfolio`)
   - Connect nowe repo: `wozniaknorbert95-del/services`
   - Ustaw Root Directory: `/` (puste, nie `services/`)
   - Branch: `master`
2. **Verify deploy**: Push commit do nowego repo i sprawdź czy Vercel auto-deploy działa
3. **Portfolio**: Rozważ usunięcie/przeniesienie handoffów dotyczących services z `portfolio/docs/handoffs/` (opcjonalne — porządek)

---

*Session ended: 2026-05-31 | services build: PASS (7/7) | portfolio build: PASS (47/47)*
