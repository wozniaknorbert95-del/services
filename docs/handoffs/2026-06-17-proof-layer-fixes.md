# Handoff — Proof layer + IntentRouter mini-screens (2026-06-17)

## Cel sesji

Naprawa rozjazdów po audycie VCMS/proof/conversion path: BTS tylko VCMS, poprawki screenKey na routes, mini-screens w IntentRouter z `proof.ts`, uzupełnienie luk per repo (trust, meta), cleanup techniczny.

## Fazy (plan `proof_layer_fixes`)

| Faza | Zakres | Status |
|------|--------|--------|
| 1 | `BehindTheScenes` — tylko `vcmsDashboard`, `conflictReport`, `auditLog` + video vcms | Done |
| 2 | `lead-magnet-game` — `screenKey="leadMagnet"`, `caseStudyHref=resultsLeadMagnet` | Done |
| 3 | `ModulePreviewThumb` + integracja w `IntentRouter` (7 modułów z ready screens) | Done |
| 4 | trust Observability, owner-ecosystem thumbs + meta artefact, agent workflowMap | Done |
| 5 | layout keywords, `/digital-modernization/` → `/solutions/web-upgrade/` | Done |
| 6 | typecheck, build, grep, handoff | Done |

## Pliki zmienione

| Plik | Akcja |
|------|--------|
| `src/components/home/BehindTheScenes.tsx` | `VCMS_SCREEN_KEYS` — bez agentCards/workflowMap |
| `src/app/solutions/lead-magnet-game/page.tsx` | screenKey + caseStudyHref fix |
| `src/components/ui/ModulePreviewThumb.tsx` | **Create** — thumb z `proof.screens`, `size` default/sm |
| `src/components/home/IntentRouter.tsx` | `<ModulePreviewThumb screenKey={module.screenKey} />` nad h3 |
| `src/app/trust/page.tsx` | Sekcja Observability — `adminDashboard` + link Managed Automation |
| `src/app/results/owner-ecosystem/page.tsx` | Thumbs per repo; flexgrafik-meta → Automation Map sample |
| `src/app/results/agent-orchestrator/page.tsx` | Panel `workflowMap` w children CaseStudyLayout |
| `src/app/layout.tsx` | keywords: `conversion systems` zamiast `done-for-you systems` |
| `next.config.ts` | redirect `/digital-modernization/` → web-upgrade |
| `src/app/digital-modernization/page.tsx` | `redirect()` fallback |

## Weryfikacja

```text
npm run typecheck  — PASS
npm run build      — PASS (31 routes)
```

Grep:

- `[FILL` w `src/components/home/` — 0 trafień
- BTS: 3 VCMS screens + video (agent screens przeniesione do case study agent-orchestrator)

## Checklist DevTools (manual)

1. Home `#governance`: 3 obrazy VCMS + video, bez agent-cards/workflow-map
2. IntentRouter: 7 kart z thumb (Automation Map bez thumb — OK)
3. `/solutions/lead-magnet-game/` → `lead-magnet.png`, case link → `/results/lead-magnet/`
4. `/trust/` — sekcja Observability z admin dashboard
5. `/results/owner-ecosystem/` — thumbs na kartach repo + meta artefact link
6. `/results/agent-orchestrator/` — workflow map panel pod hero proof
7. `/digital-modernization/` → redirect na web-upgrade
8. Conversion path: Systems nav → Results → case → book-discovery

## Świadomie poza scope

- IntentRouter Phase B: animacja/video per `module.videoKey`
- Case study video placeholders (`inboxKiller`, `wizard`, …)
- `/founder/` Conversion Systems copy
- `public/gratka/*.md` PDF footers
- `CaseStudyLayout` `study: any` typing

## Następny krok

Deploy na `master` (Vercel CD) → DevTools audit checklist powyżej na produkcji.
