---
description: Zakończenie sesji. Tworzy handoff doc z podsumowaniem zmian, stanu buildu i następnych kroków.
---

# /handoff — services.flexgrafik.nl

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
- Routes: [lista]

## Files Changed
| File | Action |
|---|---|
| `src/...` | [New / Modified / Deleted] |

## Decisions
| Decyzja | Uzasadnienie |
|---|---|
| [co] | [dlaczego] |

## Blockers
| Bloker | Rozwiązanie |
|---|---|
| [co blokuje] | [jak rozwiązać] |

## State
- portfolio: [stan]
- services: [stan — URL, build, DNS]
- KFA meeting: [data, status]

## Next Steps
1. [krok 1]
2. [krok 2]
```

## Don't
- Nie pomijaj build results.
- Nie zostawiaj nieudokumentowanych decyzji.
- Nie commituj bez weryfikacji `npm run build`.

## Done when
Handoff doc istnieje w `docs/handoffs/YYYY-MM-DD-[feature].md` i zawiera:
- [ ] Build results (PASS + liczba stron)
- [ ] Files changed
- [ ] Decisions log
- [ ] Next steps (2-3 konkretne)
