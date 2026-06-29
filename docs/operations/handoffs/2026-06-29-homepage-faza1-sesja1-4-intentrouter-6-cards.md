# Handoff — Homepage Faza 1 Sesja 1.4 IntentRouter 6 cards (2026-06-29)

**Repo:** services.flexgrafik.nl · **Build:** ✅ PASS (34 routes) · **Typecheck:** ✅ PASS · **Branch:** master

## Cel / Goal

Sesja 1.4 (`page-feature`) — refactor sekcji #7 `IntentRouter` per `mapa.txt` sekcja 7 + `site-map.md §3 v3.0` row 7 + `SR-06` amend:
- **6 business cards** (hide `flex-vcms` + `flexgrafik-meta` — governance + method, internal)
- Mocno skrócone opisy (1–2 zdania) + status LIVE/PARTIAL
- De-jargon `jadzia-core` statusNote (`GA4`, `WP SSH` → "orders, leads, content")
- Zachować: outcome-first labels, StatusBadge, filter dim (nie ukrywa), IntentBadges

## Co zrobiono / What changed

### `src/content/ecosystem.ts` — homeVisible + homeStatusNote + getHomeRepos()

| Dodane | Szczegóły |
|--------|-----------|
| `homeVisible?: boolean` | Nowe optional pole w `EcosystemRepo` — default true via convention; `false` na `flex-vcms` + `flexgrafik-meta` |
| `homeStatusNote?: string` | Nowe optional pole — de-jargonised short version dla home; fallback do `statusNote` |
| `getHomeRepos()` | Helper — filtruje `ECOSYSTEM_REPOS` by `homeVisible !== false` (zwraca 6 rows) |

### `homeVisible: false` (2 repo hidden z home)

| RepoKey | Role | Powód ukrycia |
|---------|------|---------------|
| `flex-vcms` | Governance layer | Governance pokazane jako **row w BuiltVsPlanned** (sekcja 6, T4) — nie jako pick card; pełne na `/results/owner-ecosystem/` |
| `flexgrafik-meta` | Method / Automation Map | Internal method — nie biznesowy moduł do pick; pełne na `/how-it-works/` (Featured card #3) + `/founder/` |

### `homeStatusNote` (de-jargonised short, per mapa.txt "max 2–3 linie tekstu")

| RepoKey | `statusNote` (full) | `homeStatusNote` (home) |
|---------|---------------------|-------------------------|
| `jadzia-core` | `LIVE: orders INT-002 · leads · GA4 · content calendar · WP SSH · sales chat · worker HITL` (**jargon**) | `Orders, leads and content tracked live — procurement brain on roadmap.` (**de-jargon, 1 zdanie**) |
| `flexgrafik-nl` | `LIVE: generic sales chat · PLANNED: qualification agent` | `Live sales chat — qualification agent on roadmap.` (krótsze) |

**Pozostałe 4 home repos** (zzpackage, app.flexgrafik.nl, agent-os, agent-os-ui) — bez `homeStatusNote` (fallback "Running on FlexGrafik operations — see live proof.")

### `src/components/home/IntentRouter.tsx` — use getHomeRepos()

| Zmiana | Old | New |
|--------|-----|-----|
| Import | `ECOSYSTEM_REPOS, INTENT_ROUTER_HEADER, getIntentMeta, type IntentId` | `getHomeRepos, INTENT_ROUTER_HEADER, getIntentMeta, type IntentId, type EcosystemRepo` (removed `ECOSYSTEM_REPOS`) |
| `sortReposForIntent` param type | `repos: typeof ECOSYSTEM_REPOS` | `repos: readonly EcosystemRepo[]` |
| `homeRepos` | — | `useMemo(() => getHomeRepos(), [])` |
| `sortedRepos` | `sortReposForIntent(ECOSYSTEM_REPOS, activeIntent)` / `[...ECOSYSTEM_REPOS]` | `sortReposForIntent(homeRepos, activeIntent)` / `[...homeRepos]` |
| `recommended` (no intent) | `ECOSYSTEM_REPOS.find(r => r.flagship) ?? ECOSYSTEM_REPOS[0]` | `homeRepos.find(r => r.flagship) ?? homeRepos[0]` (flagship flex-vcms hidden — falls back to zzpackage which is also flagship) |
| `filterLabel` count | `ECOSYSTEM_REPOS.length` (8) | `homeRepos.length` (6) |
| Card statusNote | `{repo.statusNote}` | `{repo.homeStatusNote ?? repo.statusNote}` |

## Strategy Check

| Rule | Status | Note |
|------|--------|------|
| Home order (site-map §3 v3.0 LOCKED, 9 sections) | ✅ | sekcja 7 — no order change |
| Page arc Problem→System→Effect | ✅ | outcome-first labels preserved |
| Single L3 / header = L3 Book | ✅ | footer CTA preserved (Book Map primary, See systems secondary) |
| Intent badge on every card (§4) | ✅ | IntentBadges preserved na wszystkich 6 kartach |
| Positioning (Conversion Systems Architect) | ✅ | no positioning change |
| Anti-chaos: site-map.md updated w/ page.tsx | ✅ N/A | no page.tsx change |
| SR-06 (home 6 business cards, hide flex-vcms + flexgrafik-meta) | ✅ | implemented via homeVisible + getHomeRepos() |
| SR-12 (governance proof compact on home) | ✅ | flex-vcms hidden z IntentRouter ale pokazany w BuiltVsPlanned row (sekcja 6) |
| MR-11 (no LangGraph/MCP/GA4/WP SSH SMB-facing) | ✅ | jadzia homeStatusNote de-jargonised |

**Verdict:** COMPLIANT

## Pliki / Files

| File | Action |
|------|--------|
| `src/content/ecosystem.ts` | edit — + `homeVisible`, + `homeStatusNote` (2 rows), + `getHomeRepos()`, `homeVisible: false` na flex-vcms + flexgrafik-meta |
| `src/components/home/IntentRouter.tsx` | edit — use `getHomeRepos()` + `homeStatusNote ?? statusNote`; remove `ECOSYSTEM_REPOS` import |
| `docs/operations/handoffs/2026-06-29-homepage-faza1-sesja1-4-intentrouter-6-cards.md` | new — ten handoff |

## Weryfikacja / Verification

```bash
npm run typecheck   # PASS
npm run build       # PASS (34 routes)
git diff --stat     # 2 files changed, 35 ins / 10 del
```

## Post-deploy smoke (Commander)

Po push master → Vercel CD:
1. `https://quietforge.flexgrafik.nl/` — sekcja 7 (IntentRouter) renderuje **6 kart** (nie 8)
2. Brak `flex-vcms` (Governance layer) kart — pokazane w BuiltVsPlanned sekcja 6
3. Brak `flexgrafik-meta` (Method / Automation Map) kart — link w Featured card #3
4. Jadzia COI karta: statusNote "Orders, leads and content tracked live" (nie "GA4, WP SSH, INT-002")
5. Filter label pokazuje "Showing 6 production modules" (nie 8)
6. Filter dim działa (kliknij intent chip — non-matching cards dim, nie znikają)
7. StatusBadge LIVE/PARTIAL na każdej karcie
8. Footer CTA: "Book Automation Map" + "See the systems" działają
9. `ECOSYSTEM_REPOS` (8 repos) nadal dostępne na `/results/owner-ecosystem/` + `/founder/` (nie zmienione)

## Następne kroki

1. **Commit + push** (czeka na GO Dowódcy)
2. **Sesja 1.5** (`page-feature`) — refactor sekcji #8: `HowIWork` skrócony. 5 kroków bez "AI agents orchestrate", "fixed rules". Skupić na korzyściach (safety, clarity, no lock-in).
3. **Sesja 1.6** (`page-feature`) — refactor sekcji #9: `TrustAndObjections` (~50% shorter) + `Pricing` + `FinalCtaBand` połączone + LOS link "See full architecture →".
4. **Sesja 1.7** — W1 N/A (ResultsTeaser usunięte z home w sesji 1.3)
5. **Faza 2** — UX (CTA distribution, mobile, dead code cleanup, seo)

## Uwagi

- `ECOSYSTEM_REPOS` (8 repos) — nadal exported z `ecosystem.ts`, używane na `/results/owner-ecosystem/`, `/founder/`, `/results/*` case study pages. Nie usunięte.
- `ORDER_INTENT_REPO_KEYS` w IntentRouter — zawiera `flex-vcms` + `flexgrafik-meta` (hidden), ale sort function działa (nie znajdzie ich w homeRepos, falls back to 99). Bez zmian.
- `SectionProgress` PROGRESS_GROUPS — "proof" group ma teraz tylko `repo-router` (było 4 sekcje); update w sesji 2.1.
- `HOME_SECTIONS` w `ecosystem.ts` (15 entries) — stale list; update w sesji 2.1.
- Grid `lg:grid-cols-4` z 6 kartami = 4 + 2 (second row). Visual OK; optionally `lg:grid-cols-3` = 2 rows of 3 — decision w Faza 2 mobile optimization.
- Anti-chaos rule 1 (page.tsx → site-map §3): N/A — brak zmian w page.tsx
- Anti-chaos rule 2 (HARD rule → skill): N/A — brak canon edit (SR-06 zaktualizowane w sesji 1.0)
- Anti-chaos rule 4 (handoff): ✅ ten plik
