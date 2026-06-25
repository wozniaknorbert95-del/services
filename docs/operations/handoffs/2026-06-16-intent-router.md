# Handoff: Intent Router & Unified Terminal Theme
**Data:** 2026-06-16
**Temat:** Wdrożenie Intent Routera (widoku z modułami opartymi o filtry potrzeb klienta) oraz ujednolicenie bazowego motywu ciemnego z wyróżnieniami dla repozytorium `flex-vcms`.

## Zrealizowane Zadania
1. **Unified Theme (`src/app/globals.css`)**
   - Skonfigurowano nową wspólną bazę CSS (Dark Terminal theme).
   - Wprowadzono współdzieloną paletę kolorów-korzyści:
     - `--fx-time` (Czerwony - oszczędza czas)
     - `--fx-money` (Zielony - zarabia więcej)
     - `--fx-order` (Niebieski - porządkuje systemy)
     - `--fx-calm` (Żółty - mniej chaosu)
     - `--fx-efficiency` (Fiolet - efektywność zespołu)
   - Zintegrowano specyficzne zmienne dla repozytorium `flex-vcms` oparte na data atrybucie `body[data-app="flex-vcms"]`.

2. **Intent Router (`src/components/home/IntentRouter.tsx`)**
   - Stworzono responsywny komponent z animacjami `framer-motion`.
   - Zaimplementowano 5 głównych "przycisków intencji", które pełnią rolę filtrów modułów.
   - Umieszczono pasek legendy wizualnej.
   - Dodano grid kart z modułami powiązanymi z poszczególnymi efektami (kolorami).
   - Zbudowano końcową sekcję CTA z auto-sugestią pierwszego polecanego modułu.

3. **Integracja na Home (`src/app/page.tsx`)**
   - Komponent `IntentRouter` wpięty pod `HeroSection`.

## Następne kroki (Next steps)
- [ ] Dalsze dopracowywanie designu i mapowania realnych linków oraz tekstów sprzedażowych w `IntentRouter.tsx` (dane pochodzą z tablic statycznych wewnątrz komponentu).
- [ ] Zmiana reszty komponentów na stronie na nowy set CSS-ów (czystka pozostałości z `--qf-*`).
