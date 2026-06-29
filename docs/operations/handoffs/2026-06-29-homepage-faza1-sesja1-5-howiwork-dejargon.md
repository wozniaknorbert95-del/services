# Handoff — Homepage Faza 1 Sesja 1.5 HowIWork de-jargon (2026-06-29)

**Repo:** services.flexgrafik.nl · **Build:** ✅ PASS (34 routes) · **Typecheck:** ✅ PASS · **Branch:** master

## Cel / Goal

Sesja 1.5 (`page-feature`) — refactor sekcji #8 `HowIWork` per `mapa.txt` sekcja 8 + `site-map.md §3 v3.0` row 8:
- 5 kroków zostaje (Map → Architect → Build → Verify → Handover)
- Usunąć "AI agents orchestrate", "fixed rules", "agent cards"
- Skupić na korzyściach (safety, clarity, no lock-in)
- Zasada 1-1-1: 1 komponent (`HowIWork.tsx`)

## Co zrobiono / What changed

### `src/components/home/HowIWork.tsx` — de-jargon 3 miejsca

| Miejsce | Old (jargon) | New (benefit) |
|---------|--------------|---------------|
| Phase 03 title | "Build with an AI workforce" | "Build" |
| Phase 03 description | "The system is assembled by **AI agents I orchestrate** — planner → coder → tester → review — **against fixed rules**. That's why it's faster and leaner than billable hours." | "The system is assembled through a fixed, **supervised workflow** — faster and leaner than billable hours, with **approval gates built in**." |
| Intro paragraph | "...the same workflow my own systems use internally — the same one that runs a live **multi-agent business**. You always know what's happening..." | "...the same workflow I use for my own business — **clarity first, safety by design, no lock-in**. You always know what's happening..." |
| Bottom tagline | "This is the same workflow — **single source of truth, agent cards, fixed rules** — that runs my own production ecosystem. Not a process invented for the brochure." | "The same workflow runs my own business in production — not a process invented for the brochure. You see how it behaves **before you commit to a build**." |

### Co zostaje (per mapa.txt sekcja 8)

- ✅ 5 kroków (Map, Architect, Build, Verify, Hand over & maintain)
- ✅ Tags: "paid first step", "human-in-the-loop", "no lock-in"
- ✅ Deliverables per phase
- ✅ Artefact download links (sample Map, handover policy)
- ✅ Workflow structure (Map → Architect → Build → Verify → Handover)

### Co wywalamy (per mapa.txt sekcja 8)

- ❌ "AI agents orchestrate" (phase 03 description)
- ❌ "fixed rules" (phase 03 description + bottom tagline)
- ❌ "agent cards" (bottom tagline)
- ❌ "AI workforce" (phase 03 title)
- ❌ "multi-agent business" (intro)
- ❌ "planner → coder → tester → review" (anglojęzyczne role techniczne w opisie)

## Strategy Check

| Rule | Status | Note |
|------|--------|------|
| Home order (site-map §3 v3.0 LOCKED, 9 sections) | ✅ | sekcja 8 — no order change |
| Page arc Problem→System→Effect | ✅ | method = delivery confidence (after proof) |
| Single L3 / header = L3 Book | ✅ | no CTA in this section (text link artefacts = L2) |
| Intent badge on every card (§4) | N/A | no cards in HowIWork |
| Positioning (Conversion Systems Architect) | ✅ | no positioning change |
| Anti-chaos: site-map.md updated w/ page.tsx | ✅ N/A | no page.tsx change |
| MR-11 (no LangGraph/MCP/LLM/"AI agents orchestrate"/"fixed rules" SMB-facing) | ✅ | all flagged jargon removed |

**Verdict:** COMPLIANT

## Pliki / Files

| File | Action |
|------|--------|
| `src/components/home/HowIWork.tsx` | edit — de-jargon 3 miejsca (phase 03 title+desc, intro, tagline) |
| `docs/operations/handoffs/2026-06-29-homepage-faza1-sesja1-5-howiwork-dejargon.md` | new — ten handoff |

## Weryfikacja / Verification

```bash
npm run typecheck   # PASS
npm run build       # PASS (34 routes)
```

## Post-deploy smoke (Commander)

Po push master → Vercel CD:
1. `https://quietforge.flexgrafik.nl/` — sekcja 8 (HowIWork) 5 kroków bez zmian
2. Phase 03 tytuł "Build" (nie "Build with an AI workforce")
3. Phase 03 opis bez "AI agents", "fixed rules", "planner → coder → tester → review"
4. Intro bez "multi-agent business"
5. Bottom tagline bez "agent cards, fixed rules" — zamiast "before you commit to a build"
6. Tags "paid first step", "human-in-the-loop", "no lock-in" widoczne
7. Artefact links: "Download sample" + "Handover policy" działają

## Następne kroki

1. **Commit + push** (czeka na GO Dowódcy)
2. **Sesja 1.6** (`page-feature`) — refactor sekcji #9: `TrustAndObjections` (~50% shorter) + `Pricing` + `FinalCtaBand` połączone + LOS link "See full architecture →" do `/results/owner-ecosystem/` (SR-12 amend)
3. **Sesja 1.7** — W1 N/A (ResultsTeaser usunięte z home w sesji 1.3)
4. **Faza 2** — UX (CTA distribution, mobile, dead code cleanup, seo)

## Uwagi

- Copy hardcoded w `HowIWork.tsx` (flagged w inwentaryzacji). Zmieniam inline — HowIWork jest specyficzne dla tego komponentu (PHASES array nie współdzielone). Ekstrakcja do SSoT opcjonalna w Faza 2.
- `Card` komponent używany do phase item — zachowany, bez zmian stylu.
- Tags ("paid first step", "human-in-the-loop", "no lock-in") — korzyści-focused, zostają.
- Anti-chaos rule 1 (page.tsx → site-map §3): N/A — brak zmian w page.tsx
- Anti-chaos rule 2 (HARD rule → skill): N/A — brak canon edit
- Anti-chaos rule 4 (handoff): ✅ ten plik