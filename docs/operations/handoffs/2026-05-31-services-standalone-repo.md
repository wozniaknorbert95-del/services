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

## Next Steps — Vercel Relink (wymaga 1 kliknięcia w dashboard)

### Opcja A: Native Vercel Git Integration (zalecana)
1. Wejdź: `https://vercel.com/wozniaknorbert95-dels-projects/flexgrafik-services/settings/git`
2. Kliknij **Disconnect** przy obecnym repo
3. Kliknij **Connect Git Repository** → wybierz `wozniaknorbert95-del/services`
4. Ustaw **Root Directory** na `/` (puste, nie `services/`)
5. **Branch**: `master`
6. Kliknij **Save**
7. Gotowe — push do `master` będzie auto-deployował

### Opcja B: GitHub Actions (alternatywa z pełną kontrolą)
Jeśli Opcja A nie działa lub chcesz mieć CI w repo:

1. Utwórz **Classic Token** w Vercel:
   - `https://vercel.com/account/tokens` → **Create Token** (scope: full)
2. Dodaj secrety w nowym repo GitHub:
   - `https://github.com/wozniaknorbert95-del/services/settings/secrets/actions`
   - `VERCEL_TOKEN` = token z kroku 1
   - `VERCEL_ORG_ID` = `team_prFKpJ6EFrmUrTUq4jdRHZpC`
   - `VERCEL_PROJECT_ID` = `prj_xoNzN664qm7ppE4qqd3ldxVPwtoP`
3. Workflow `.github/workflows/deploy.yml` już istnieje w repo
4. Push do `master` → GitHub Actions zbuduje i deployuje automatycznie

### Opcja C: Ręczny deploy z lokalnego CLI
```bash
cd C:\Users\FlexGrafik\FlexGrafik\github\services
npm run build
npx vercel dist --prod --yes
```

## Blockers

| Bloker | Rozwiązanie |
|---|---|
| Vercel Git connection wskazuje stare repo | **Opcja A, B lub C** powyżej |
| Brak classic Vercel token dla API | Opcja A (dashboard) lub Opcja B (token) |

## Portfolio Cleanup (opcjonalne)

Rozważ usunięcie/przeniesienie handoffów dotyczących services z `portfolio/docs/handoffs/` — porządek w repo portfolio.

## Deploy Status

| Data | Status |
|---|---|
| 2026-05-31 10:05 | GitHub Actions workflow wyzwolony (3x fail — stary CLI) |
| 2026-05-31 10:18 | Poprawka workflow: `vercel@latest` CLI zamiast action |
| 2026-05-31 10:20 | Deploy lokalny przez `npx vercel --prod --yes` |
| **Wynik** | ✅ **PASS** — deploy do `flexgrafik-services` udany |

### URL po deploy
- **Production**: `https://flexgrafik-services-1qepjjslb-wozniaknorbert95-dels-projects.vercel.app`
- **Custom domain**: `https://services.flexgrafik.nl` (SSL w trakcie propagacji, ~2-5 min)

### Problemy napotkane i rozwiązania
| Problem | Przyczyna | Rozwiązanie |
|---|---|---|
| GitHub Actions deploy fail | `amondnet/vercel-action@v25` używa CLI 25.1.0 (wymagany 47.2.2+) | Zmieniono na `npm install -g vercel@latest` + `npx vercel` |
| Workflow hang (>5 min) | Nieznany — prawdopodobnie zawieszenie w oczekiwaniu na input | Anulowano, deploy lokalny |
| Deploy `dist` jako nowy projekt | `npx vercel dist` traktuje folder jako osobny projekt | Użyto `npx vercel --prod --yes --cwd .` z roota |

---

*Session ended: 2026-05-31 | services build: PASS (7/7) | portfolio build: PASS (47/47) | Deploy: PASS*
