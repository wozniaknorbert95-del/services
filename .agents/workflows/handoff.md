---
description: Session anchor + /handoff workflow — services.flexgrafik.nl
updated: 2026-06-16
---

# SESSION ANCHOR — 2026-06-16

> **Live:** https://flexgrafik-services.vercel.app/  
> **Branch:** `master` @ `4bea589`  
> **Następna sesja:** Homepage IA + nawigacja (priorytet P0)

---

## Co dziś domknięte (VCMS + proof)

| Commit | Co |
|--------|-----|
| `c85c527` | IntentRouter EN, ROUTES linki, pricing fallbacks |
| `7212aec` | Proof SVG (Conflicts:0), pricing `ecosystem.summary`, SVG render |
| `4bea589` | P2: advisory measurement, Why VCMS on owner-ecosystem, `#governance` |

**VCMS kanon (nie psuć):**
- One-liner: *governance layer — scans repos/rules before production*
- HITL = Agent OS review gates, **nie** VCMS UI
- Badge: PROVEN / DEMO / PLANNED z `proof.ts` → `vcmsFeatureStatus`
- SSoT proof: `src/content/proof.ts`

**Build:** `npm run build` + `typecheck` PASS · 29 routes

---

## Werdykt eksperta (live audit) — 8/10 content, 4/10 ścieżka

### Problem główny: **homepage za długa, VCMS schowany, IntentRouter mylący**

Obecny stack sekcji (`src/app/page.tsx`):

```
1.  HeroSection
2.  IntentRouter          ← "Find your path" — VCMS link → owner-ecosystem (8 repo)
3.  PainGrid
4.  SpearheadSpotlight    ← Inbox Killer
5.  LadderTeaser
6.  WhyThisWorks
7.  AboutArchitect
8.  OwnerEcosystemTeaser ← teaser 8 repo, bez głębokiego VCMS proof
9.  SystemMetrics
10. HowIWork
11. TrustSafety
12. ResultsTeaser
13. BehindTheScenes     ← VCMS vitrina (video, proof) — ~70% scroll depth
14. PricingSection
15. FinalCtaBand
```

**15 sekcji = scroll hell.** Klient techniczny nie dojeżdża do `#governance`. Klient SMB gubi się wcześniej.

### Rozjazd nawigacji

| Element | Dokąd prowadzi | Problem |
|---------|----------------|---------|
| IntentRouter VCMS → Details | `/results/owner-ecosystem/` | Diagram 8 repo, nie governance proof |
| IntentRouter eyebrow | „Find your path” | Brak VCMS/governance w nav (`Header.tsx`) |
| OwnerEcosystemTeaser | ecosystem map | Duplikat owner-ecosystem, VCMS tylko w 1 linii |
| BehindTheScenes | `#governance` | Najlepszy asset VCMS — na końcu strony |
| Nav Solutions dropdown | 5 produktów SMB | **Zero** VCMS / Governance / Ecosystem |

**VCMS jest na home, ale nie ma do niego ścieżki.** „Find your path” wysyła do repoz, nie do proof.

---

## JUTRO — Sesja: Navigation & Homepage IA (profeska)

### Cel

Skrócić i ułożyć homepage tak, żeby **3 persony** miały jasną ścieżkę w ≤3 kliknięcia / 2 ekrany scroll:

1. **SMB owner** (Inbox / Wizard) → Automation Map
2. **Technical buyer** (dev/partner) → VCMS governance proof → owner-ecosystem
3. **Ecosystem buyer** → Pricing Ecosystem tier → case study

### Zakres (1 sesja = IA + 1–2 komponenty, nie mega-diff)

**Faza A — Plan (must do first, 30 min)**
- [ ] Mapa person + desired path (diagram w handoff)
- [ ] Nowa kolejność sekcji homepage (max 8–9 bloków)
- [ ] Decyzja: co zostaje na `/`, co na `/how-it-works`, `/results/owner-ecosystem`, ewent. `/founder`

**Faza B — Implementacja (pick priority)**

| Priorytet | Zadanie | Pliki |
|-----------|---------|-------|
| P0 | **IntentRouter:** VCMS Details → `/#governance` (nie owner-ecosystem) | `IntentRouter.tsx` |
| P0 | **Nav:** dodać „The System” lub „Governance” → `/#governance` lub `/results/owner-ecosystem` | `constants.ts`, `Header.tsx` |
| P0 | **Homepage reorder:** BehindTheScenes wyżej (po IntentRouter lub po OwnerEcosystem teaser) | `page.tsx` |
| P1 | **Merge / cut:** SystemMetrics + OwnerEcosystemTeaser → jeden blok „Live stack” | nowy komponent lub teaser refactor |
| P1 | **Skrócić:** AboutArchitect + WhyThisWorks → skondensować lub przenieść na `/about` | `page.tsx` |
| P2 | **Sticky subnav** na home: Map · Proof · Pricing · Book | nowy `HomeSubnav.tsx` |

### Propozycja docelowej kolejności (draft do zatwierdzenia)

```
Hero
IntentRouter (find your path — links fixed)
BehindTheScenes (#governance)     ← VCMS vitrina wcześniej
OwnerEcosystemTeaser (skrócony)   ← link do full case study
SpearheadSpotlight (Inbox)
ResultsTeaser (4 cases, compact)
HowIWork (skrócony)
PricingSection
TrustSafety (1 band)
FinalCtaBand
```

**Wyrzucić z home (przenieść):** PainGrid, LadderTeaser, WhyThisWorks, AboutArchitect (duże), SystemMetrics (duplikat liczb)

### Nie ruszać w tej sesji

- Copy VCMS kanonu (już OK)
- `proof.ts` wartości (już OK)
- Solutions pages `[FILL]` — osobna sesja
- Agent OS materials — **dopiero po IA profeska** (Dowódca przygotuje jak VCMS)

### DoD jutrzejszej sesji

- [ ] Homepage ≤9 sekcji, VCMS proof w pierwszych 2 viewportach (mobile + desktop)
- [ ] IntentRouter VCMS → `#governance`
- [ ] Nav ma ścieżkę do governance/ecosystem
- [ ] Live smoke: 3 user flows (SMB / technical / ecosystem) — zapisane w handoff
- [ ] `npm run build` PASS
- [ ] Handoff `docs/handoffs/2026-06-17-homepage-ia-navigation.md`

---

## Po IA — backlog (Agent OS)

Gdy navigation = profeska, Dowódca przygotowuje materiały Agent OS analogicznie do VCMS:

| VCMS (done) | Agent OS (next) |
|-------------|-----------------|
| `proof.ts` vcms video + screens | agent OS video slot + screens |
| BehindTheScenes section | sekcja na home lub `/results/agent-orchestrator` |
| owner-ecosystem VCMS block | deepen CS-02 copy + proof grid |
| pricing ecosystem line | już jest „Agent OS setup” |

Referencja: `docs/handoffs/2026-06-16-vcms-live-audit-fixes.md`

---

## Pliki kluczowe

| Plik | Rola |
|------|------|
| `src/app/page.tsx` | Kolejność sekcji home |
| `src/components/home/IntentRouter.tsx` | Find your path + module links |
| `src/components/home/BehindTheScenes.tsx` | `#governance` VCMS vitrina |
| `src/components/Header.tsx` | Global nav |
| `src/lib/constants.ts` | NAV_ITEMS, ROUTES |
| `src/content/proof.ts` | SSoT metrics, pricing, VCMS status |

---

## Blockers

| Bloker | Status |
|--------|--------|
| Deploy | OK — Vercel CD on push |
| DNS services.flexgrafik.nl | Owner action (Vercel alias) — nie blokuje IA |

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
