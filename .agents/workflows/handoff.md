---
description: Session anchor + /handoff workflow — services.flexgrafik.nl
updated: 2026-06-24
---

# SESSION ANCHOR — 2026-06-24

> **Live:** https://quietforge.flexgrafik.nl/  
> **Branch:** `master` @ `9c5f9f3`  
> **Następna sesja:** Lead Magnet video (CapCut beat 03) / Inbox Killer wieczorna sesja

---

## Co dziś domknięte (Lead Magnet reward ladder)

| Commit | Co |
|--------|-----|
| `9c5f9f3` | Four-tier reward ladder sync — SVG v2, Reward ladder section, gallery captions |
| `340fa4a` | Rebuild case study layout, SSoT, 7-screen gallery, GA4 outcome |
| `857c834` | SVG UTF-8 prolog and ASCII-safe text |

**Build:** `npm run build` + `typecheck` PASS · 33 routes · HTTPS quietforge 200 ✅

---

## Werdykt eksperta (Lead Magnet PRO)
Reward ladder L2–L5 live on portfolio. Season prize + purchase-bonus disclaimer shipped. Video czeka na CapCut export.

---

---

# /handoff — workflow (template)

## Goal
Zamknąć sesję z kompletnym dokumentem stanu — co zmienione, co działa, co następne.

## Input
Wynik sesji (kod, deploy, decyzje).

## Do
1. Uruchom `npm run build` — zapisz wynik.
2. Uruchom `npm run typecheck` — zapisz wynik.
3. Zidentyfikuj wszystkie zmienione pliki (`git status --short`).
4. Określ SCOPE zmian (co zrobione, co nie).
5. Zanotuj DECYZJE podjęte w trakcie sesji.
6. Zanotuj BLOKERS (co zatrzymuje kolejne kroki).
7. Utwórz handoff doc w `docs/handoffs/YYYY-MM-DD-[feature].md`.
8. **Zaktualizuj SESSION ANCHOR u góry tego pliku.**

## Handoff Template

```markdown
# Handoff: [Nazwa funkcjonalności]

## Context
[1-2 zdania co i dlaczego]

## Deliverables
[Co zostało zrobione — lista]

## Build Results
- `npm run build`: [PASS / FAIL — liczba stron]
- `npm run typecheck`: [PASS / FAIL]

## Files Changed
| File | Action |

## Decisions
| Decyzja | Uzasadnienie |

## Next Steps
1. [krok 1]
2. [krok 2]
```

## Don't
- Nie pomijaj build results.
- Nie commituj bez weryfikacji `npm run build`.
- Nie mega-diff — 1 sesja = IA lub 1 komponent.

## Done when
- [ ] SESSION ANCHOR zaktualizowany
- [ ] `docs/handoffs/YYYY-MM-DD-[feature].md` istnieje
- [ ] Build PASS
