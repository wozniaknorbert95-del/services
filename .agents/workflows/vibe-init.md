---
description: Start sesji dla services.flexgrafik.nl. Ładuje brain.md, constrainty i klasyfikuje zadanie.
---

# /vibe-init — services.flexgrafik.nl

## Goal
Start sesji z pełnym kontekstem: zasady, stack, guardrails i trasa workflow.

## Input
Opis zadania od Dowódcy.

## Do
1. Wczytaj `docs/README.md` + `docs/canons/vision-system.md` + `AGENTS.md` read order.
2. Wczytaj `brain.md` (tech, deploy — nie strategia).
3. Sprawdź `package.json` — zależności i skrypty.
4. Oceń aktualny branch (`git branch --show-current`).
5. Wyciągnij GŁÓWNE OGRANICZENIA z brain.md §7 (Guardrails).
6. Określ RYZYKA w kontekście zadania.
7. Sklasyfikuj typ zadania (patrz: Klasyfikacja).

## Klasyfikacja Zadań (Router)

```
page-feature     → Nowa strona / sekcja / komponent
page-bugfix      → Bug UI, broken link, mobile issue
seo-task         → Metadata, OG, sitemap, Lighthouse
conversion-task  → Copy, CTA, layout, A/B test element
deploy-task      → Deploy, DNS, build fix
docs-task        → brain.md, workflow, handoff
content-task     → Nowe case study, project showcase, testimonial
risky            → Dotyczy layout.tsx, globals.css, next.config.ts
```

## Don't
- ZABRONIONE pisanie kodu w tej fazie.
- ZABRONIONE planowanie szczegółów wdrożenia.
- Nie zgaduj jeśli brakuje danych → zgłoś `MISSING`.

## Output

```text
TASK_CLASSIFICATION: [page-feature / page-bugfix / seo-task / conversion-task / deploy-task / docs-task / content-task / risky]
CONSTRAINTS: [Lista z brain.md §7]
RISKS: [Zagrożenia — czy dotyczy layout/globals/next.config?]
MISSING: [Brakujące dane]
ACTIVE_BRANCH: [branch name]
READY: [YES / NO]

---
CURRENT_STAGE: init
RECOMMENDED_NEXT:
  → page-feature/conversion-task: /new-page lub bezpośredni implement
  → page-bugfix: /root-cause
  → seo-task: /seo-audit
  → deploy-task: /deploy-vercel
  → docs-task: /implement (bez scope-lock)
  → content-task: /implement (bez scope-lock)
  → risky: /scope-lock (konieczny!)
WHY_NEXT: [Uzasadnienie]
---
```

## Done when
Agent zwróci ramkę READY i zaczeka na GO.
