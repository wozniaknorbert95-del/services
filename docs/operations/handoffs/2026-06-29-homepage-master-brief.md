# Handoff — Homepage Master Brief Faza 0 (2026-06-29)

**Repo:** services.flexgrafik.nl · **Build:** N/A (docs-only sesja) · **Branch:** master (clean)

## Cel / Goal

Profesjonalne przygotowanie do realizacji planu Dowódcy `C:\Users\FlexGrafik\Desktop\plan home page.txt` — Faza 0 (0.1 weryfikacja, 0.2 master brief, 0.3 propozycja struktury). Zero kodu — tylko dokument decyzyjny.

## Klasyfikacja vibe-init

`docs-task` + `risky` (wynik analizy: plan wymaga amend HARD rules SR-01/SR-06/SR-12 w Fazie 1)

## Co zrobiono / What changed

### 0.1 Weryfikacja stanu repo (read-only)
- Wczytane: `docs/README.md`, `docs/canons/vision-system.md`, `docs/canons/marketing-rules.md`, `docs/canons/strategy-rules.md`, `docs/canons/ux-rules.md`, `docs/canons/proof-rules.md`, `docs/strategy/marketing-strategy.md`, `docs/strategy/conversion-pipeline.md`, `docs/strategy/ui-ux-principles.md`, `docs/strategy/site-map.md`, `docs/strategy/gtm/README.md` + `01-two-brand-model.md` + `02-channel-architecture.md` + `03-linkedin-principles.md` + `04-audience-and-messaging.md` + `05-content-pillars.md` + `06-roadmap-90-days.md` + `07-post-playbook.md` + `08-investor-track.md`, `docs/audits/2026-06-25/quietforge-ux-ia.md`
- `src/app/page.tsx` (15 sekcji), `src/content/conversion-copy.ts`, `src/content/ecosystem.ts` (HOME_SECTION_MARKERS)
- Inwentaryzacja 17 komponentów home (delegowana do explore agenta): loc, CTA count, jargon watch, canon compliance, 5 martwych komponentów zidentyfikowanych

### 0.2 + 0.3 Master brief + propozycja struktury
- Nowy dokument: `docs/operations/plans/2026-06-29-homepage-master-brief.md` (~36 KB, 12 sekcji po decyzjach Dowódcy)
- Zawiera: §1 kontekst, §2 mapa konfliktów z HARD rules, §3 dwie opcje struktury (A=9 sekcji, B=8 sekcji) + notka Opcja A+ wybrana, §4 master brief copy, §5 pierwotna sekwencja sesji (zastąpiona §12), §6 ryzyka, §7 6 pytań blocking (rozstrzygnięte), §8 anti-chaos checklist, §9 out of scope, §10 następny krok, **§11 Commander Decisions (mapa.txt)**, **§12 Zaktualizowana sekwencja wykonawcza (16 sesji)**

## Kluczowe ustalenia

1. **Faza 0 GTM pack = zrobiona** (M0.2 CLOSED 2026-06-29, commit `8d6af0a`) — plan Dowódcy zaczyna się efektywnie od Fazy 1
2. **3 konflikty z HARD rules** wymagające decyzji Dowódcy:
   - SR-01 (home order LOCKED 13/15 sekcji) vs plan chce 8–9
   - SR-06 (IntentRouter zawsze 8 repo) vs plan chce 6–7 kart
   - SR-12 (governance proof na home) vs plan chce wywalić governance/LOS
3. **5 martwych komponentów** w `src/components/home/`: `WhyThisWorks`, `TrustSafety`, `SystemArchitecture`, `OwnerEcosystemTeaser` (do usunięcia w Fazie 2.4) + `IntentFilterChips` (aktywny transitivnie)
4. **2 MR-11 VIOLATION dziś shipped** (below fold, P2/P3): `BuiltVsPlanned` compact (`LangGraph HITL pipeline`) + `ResultsTeaser` effect lines (`Langfuse`, `WP SSH`, `GA4`)
5. ~~Rekomendacja agenta: Opcja A (9 sekcji, zachowawcza)~~ → **Decyzja Dowódcy: Opcja A+** (9 sekcji + IntentRouter 6 kart — hybryda A+B, wymaga amend SR-06 + SR-12)
6. **2 repo do ukrycia w IntentRouter** (rekomendacja agenta, potwierdzenie w sesji 1.4): `flex-vcms` (governance — przeniesione) + `flexgrafik-meta` (method — internal). Pozostaje 6 kart biznesowych.
7. **4 tensions T1–T4** rozstrzygnięte w §11.7 briefu (governance w Honesty Gate vs VCMS ukryty; SR-12 amend scope; SR-06 amend scope; BuiltVsPlanned 4 wiersze: Wizard, Jadzia, Agent OS, Governance)

## Pliki / Files

| File | Action |
|------|--------|
| `docs/operations/plans/2026-06-29-homepage-master-brief.md` | new — master brief Faza 0 (36 KB, 12 sekcji, APPROVED po decyzjach mapa.txt) |
| `docs/operations/handoffs/2026-06-29-homepage-master-brief.md` | new — ten handoff (zaktualizowany po decyzjach) |

## Weryfikacja / Verification

```bash
# N/A — sesja docs-only, bez zmian w src/
# Master brief jest dokumentem decyzyjnym, nie kodem
```

## Post-deploy smoke (Commander)

N/A — brak deploy (docs-only, brak zmian w `src/`).

## Następne kroki (BLOCKING — czeka na Dowódcę)

> **✅ ZAKTUALIZOWANE — Commander decisions received `C:\Users\FlexGrafik\Desktop\mapa.txt` 2026-06-29. Wszystkie 6 pytań rozstrzygnięte.**

### Uzasadnienie aktualizacji (sesja 2 — decyzje Dowódcy)

Commander dostarczył `mapa.txt` z kompletnymi odpowiedziami. Brief zaktualizowany:
- Frontmatter: `status` → `[APPROVED — COMMANDER DECISIONS RECEIVED 2026-06-29]` + `commander_decisions` field
- §2.1: 3 decyzje blocking rozstrzygnięte (Opcja A+, 6 kart, usunięcie LivingSystemTeaser+BehindTheScenes)
- §3: notka "WYBRANO: Opcja A+" na początku
- §5: notka "ZASTĄPIONE przez §12"
- §7: wszystkie 6 pytań przekreślone z odpowiedziami + referencjami do §11
- §11 (nowy): Commander Decisions — mapa pytań→odpowiedzi, zatwierdzona struktura 9 sekcji, szczegółowe wytyczne per sekcja, zasady językowe/UX, co zostaje/usuwane, metryki sukcesu, 4 tensions T1–T4 do rozstrzygnięcia w sesji 1.0
- §12 (nowy): Zaktualizowana sekwencja wykonawcza — 16 sesji (1.0 canon amend + 1.1–1.7 refactor + 2.1–2.4 UX + 3.1–3.3 docs + 4.1–4.3 verify)

### Następny krok (READY)

1. ~~Commander review master brief~~ ✅ DONE (mapa.txt)
2. ~~Wybór Opcja A vs Opcja B~~ ✅ DONE (Opcja A+)
3. **Sesja 1.0** (`risky`, scope-lock) — amend `site-map.md §3` + `SR-01` + `SR-06` + `SR-12` + `strategy-check` skill sync (wszystkie canon edits w jednej sesji, anti-chaos rule 2)
4. **Faza 1** — 7 sesji wykonawczych (1.1–1.7: refactor + copy polish W1–W3)
5. **Faza 2** — 4 sesje (UX, mobile, cleanup, seo)
6. **Faza 3** — 3 sesje (GTM docs sync)
7. **Faza 4** — 2 sesje (verify + Commander HITL)

**Status: READY dla sesji 1.0.** Wszystkie decyzje blocking rozstrzygnięte.

## Uwagi

- Anti-chaos rule 1 (page.tsx → site-map §2): N/A — brak zmian w `src/app/page.tsx` w tej sesji
- Anti-chaos rule 2 (HARD rule → canon + skill): N/A — brak canon edit w tej sesji (canon edit dopiero w sesji 1.0 po akceptacji)
- Anti-chaos rule 4 (handoff co sesja): ✅ ten plik
- Niecommitowane — czeka na wyraźne polecenie Dowódcy (Zasada opencode: commit tylko na wyraźne żądanie)
- Plan Dowódcy zakładał "Cursor" jako executor — my używamy opencode, zasady te same (zero zgadywania, read_file przed edycją)
