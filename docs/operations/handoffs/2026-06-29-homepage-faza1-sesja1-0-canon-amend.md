# Handoff — Homepage Master Brief Faza 1 Sesja 1.0 canon amend (2026-06-29)

**Repo:** services.flexgrafik.nl · **Build:** N/A (canon docs-only) · **Typecheck:** ✅ PASS · **Branch:** master

## Cel / Goal

Sesja 1.0 (`risky`, scope-lock) — amend canon przed Fazą 1 refactor kodu. Wszystkie HARD rule edits w jednej sesji per anti-chaos rule 2 (HARD rule edit → canon + relevant skill sync same session).

## Klasyfikacja vibe-init

`risky` (canon edit: `site-map.md §3` + `strategy-rules.md` SR-01/SR-02/SR-06/SR-12/SR-16/SR-17 + `strategy-check` skill sync)

## Co zrobiono / What changed

### Canon amend (3 pliki)

| Plik | Zmiana | Szczegóły |
|------|--------|-----------|
| `docs/strategy/site-map.md` | §3 zastąpione v3.0 | 15→9 sekcji per `mapa.txt`; nowa tabela z component(s), funnel job, content rule; nota v3.0 + referencja do master brief §11; chrome zachowane (StickyCta trigger po sekcji 6); "Removed from home" block |
| `docs/canons/strategy-rules.md` | `updated` 2026-06-25→2026-06-29; SR-01, SR-02, SR-06, SR-12, SR-16, SR-17 amended | Szczegóły poniżej |
| `.agents/skills/strategy-check/SKILL.md` | Sync (anti-chaos rule 2) | Description + Step 2 home order + Output Format zaktualizowane do 9 sekcji + 6 kart IntentRouter |

### Szczegóły amend SR-XX

| Rule | Old | New |
|------|-----|-----|
| **SR-01** | "LOCKED to 13 sections" | "LOCKED to 9 sections" + violation list rozszerzone (LivingSystemTeaser, BehindTheScenes, ResultsTeaser standalone) |
| **SR-02** | Forbidden list bez nowych sekcji | + `LivingSystemTeaser`, `BehindTheScenes`, `ResultsTeaser` (standalone), terminal mock blocks, full LOS/8-repo/governance sections |
| **SR-06** | "always shows all 8 repos" | "home shows 6 business-relevant cards (hide `flex-vcms` + `flexgrafik-meta`); full 8 repos on `/results/owner-ecosystem/` and `/founder/`" |
| **SR-12** | "quietforge shows governed ecosystem proof (LOS, Built vs Planned, 8-repo) — not zero-repo mode" | "on home = BuiltVsPlanned compact (4 rows) + link w sekcji 9; full LOS + 8-repo + governance on `/results/owner-ecosystem/`" |
| **SR-16** | "max 4 rows + link" | "4 rows: Wizard, Jadzia COI, Agent OS, Governance + de-jargonised capabilities (no LangGraph/Paramiko/Langfuse)" |
| **SR-17** | "pain → proof → honesty gate → architecture teaser" | "pain → proof → honesty gate → module pick → method → close" |

### site-map.md §3 v3.0 — nowa struktura 9 sekcji

| # | Sekcja | Component(s) |
|---|--------|--------------|
| 1 | Hero | `HeroSection` |
| 2 | Dual-brand | `DualBrandBand` |
| 3 | Featured paths | `FeaturedStrip` |
| 4 | Pain router | `PainGrid` |
| 5 | Live proof — Wizard | `SpearheadSpotlight` + `SystemMetrics` compact |
| 6 | Honesty gate | `BuiltVsPlanned` compact (4 rows: Wizard, Jadzia COI, Agent OS, Governance) |
| 7 | Pick your module | `IntentRouter` (6 business cards, hide flex-vcms + flexgrafik-meta) |
| 8 | How it works | `HowIWork` |
| 9 | Trust + Pricing + Final CTA | `TrustAndObjections` + `Pricing` + `FinalCtaBand` |

**Removed from home:** `LivingSystemTeaser`, `BehindTheScenes`, `ResultsTeaser` (standalone) — pełne na `/results/owner-ecosystem/`.

## Pliki / Files

| File | Action |
|------|--------|
| `docs/strategy/site-map.md` | edit — §3 v3.0 (15→9 sekcji) |
| `docs/canons/strategy-rules.md` | edit — SR-01/SR-02/SR-06/SR-12/SR-16/SR-17 + `updated` bump |
| `.agents/skills/strategy-check/SKILL.md` | edit — sync (anti-chaos rule 2) |
| `docs/operations/handoffs/2026-06-29-homepage-faza1-sesja1-0-canon-amend.md` | new — ten handoff |

## Weryfikacja / Verification

```bash
npm run typecheck   # PASS (canon docs-only, brak zmian w src/)
git diff --stat     # 3 files changed (site-map, strategy-rules, skill)
```

Anti-chaos rule 2 (HARD rule edit → canon + skill sync): ✅ `strategy-check` skill zaktualizowany w tej samej sesji.

## Post-deploy smoke (Commander)

N/A — brak zmian w `src/`, brak deploy wymagany. Produkcja bez zmian funkcjonalnie.

## Następne kroki

1. **Commit + push** (czeka na GO Dowódcy)
2. **Sesja 1.1** (`page-feature`) — refactor `src/app/page.tsx`: nowa kolejność 9 sekcji + usunięcie importów `LivingSystemTeaser` + `BehindTheScenes` + `ResultsTeaser` (zachować komponenty dla `/results/owner-ecosystem/`)
3. **Sesja 1.2** — refactor sekcji #5 (Spearhead + SystemMetrics, W2: terminal → screenshot)
4. **Sesja 1.3** — refactor sekcji #6 (BuiltVsPlanned 4 rows, W3 de-jargon, T4)
5. **Sesja 1.4** — refactor sekcji #7 (IntentRouter 6 kart)
6. **Sesje 1.5–1.7** — sekcje #8, #9, W1 copy polish

## Uwagi

- Anti-chaos rule 1 (page.tsx → site-map §3): N/A — brak zmian w `src/app/page.tsx` w tej sesji (canon amended upfront, przed kodem)
- Anti-chaos rule 2 (HARD rule → canon + skill): ✅ `strategy-check` skill zaktualizowany w tej samej sesji
- Anti-chaos rule 4 (handoff co sesja): ✅ ten plik
- `marketing-strategy.md §7 Home message order` wciąż opisuje 11-punktową sekwencję (stare) — do aktualizacji w Fazie 3 sesja 3.3 (GTM docs sync) razem z `ui-ux-principles.md §6 Home composition` (13-punktowa)
- `ux-ui-pro-udit.md` line 29 wciąż mówi "13 sekcji" — to audit historyczny, nie kanon (archive/audits), zostaje AS-IS
- Niecommitowane — czeka na GO Dowódcy (Zasada opencode: commit tylko na wyraźne żądanie)
