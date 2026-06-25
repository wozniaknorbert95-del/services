---
status: "[ACTIVE]"
title: "Vision System — Portfolio & LOS Direction"
owner: "Norbert Wozniak (Dowódca)"
updated: "2026-06-25"
classification: "L1 — North star (binding for prioritisation)"
references:
  - "../../flexgrafik-meta/docs/core/living-system-architecture.md"
  - "../../flexgrafik-meta/docs/core/ecosystem-blueprint.md"
  - "../../flexgrafik-meta/docs/core/master-plan.md"
  - "../../flexgrafik-meta/docs/core/to-be-target-state.md"
---

# Vision System — Quietforge × FlexGrafik LOS

> **Sterownik kierunku:** Ten dokument trzyma stery rozwoju systemu i portfolio. Nie duplikuje pełnej architektury LOS — wskazuje na konstytucję w `flexgrafik-meta/docs/core/`.

**Commander HITL:** [ ] Przeczytane i zatwierdzone przez Dowódcę (wymagane przed użyciem jako public "system vision")

---

## §1 North Star

**Conversion Systems Architect** buduje i pokazuje **governance-first Living Operating System (LOS)** na skali solo AI-operated firmy — nie kolejny chatbot ani agencja webowa.

Jedno zdanie:

> Zarabiać na Wizard Cash Engine (marża ≥60%, AOV 400–700 €), skalując operacje przez trzy mózgi AI (VCMS / Jadzia COI / Agent OS) z pełną kontrolą Dowódcy (HITL + Zasada 11).

**Upstream:** [living-system-architecture.md](../../flexgrafik-meta/docs/core/living-system-architecture.md)

---

## §2 Two-brand model

| Brand | Asset | Audience | Portfolio job |
|-------|-------|----------|---------------|
| **Quietforge** | `quietforge.flexgrafik.nl` (repo `services`) | SMB B2B + investor bridge | "Can this architect deploy a system?" |
| **FlexGrafik** | Wizard, portal, game, ops | NL ZZP consumer | Revenue + proof of LOS in production |

**Rule:** Quietforge **deploys and explains**; FlexGrafik **runs and earns**. Portfolio shows honest LIVE state — never consumer ZZP pricing as primary CTA on wrong track.

**Decision reference:** Audit 2026-06-23 DECISION B (two-brand separation maintained).

---

## §3 Trzy mózgi (professional division)

| Mózg | System | Pytanie | AS-IS (2026-06-24) |
|------|--------|---------|---------------------|
| **Governance** | VCMS + flexgrafik-meta | "Czy dokumentacja się zgadza?" | VCMS scan 8 repo, Conflicts: 0 |
| **Operations** | Jadzia COI | "Co się dzieje w biznesie? Co robimy?" | ~35–95% wizji COI — WP SSH, chat, weekly brief; pełne nody = następna fala |
| **Engineering** | Agent OS + Mission Control | "Jak zaimplementować? Czy testy przechodzą?" | 5-node LangGraph HITL ~90% LIVE |

Portfolio home §2 pokazuje pełną LOS (6 warstw + Memory + life loop) — **edukacja**, nie obietnica pełnej autonomii.

**Upstream:** [ecosystem-blueprint.md](../../flexgrafik-meta/docs/core/ecosystem-blueprint.md) · [jadzia-operating-charter.md](../../flexgrafik-meta/docs/core/jadzia-operating-charter.md)

---

## §4 Fazy rozwoju (Phase A / B / C)

Z [to-be-target-state.md](../../flexgrafik-meta/docs/core/to-be-target-state.md):

| Phase | Portfolio może obiecywać | Portfolio NIE może obiecywać |
|-------|--------------------------|------------------------------|
| **A — Bootstrap** | Tech MVP LIVE, honest Built vs Planned, LOS diagram, Wizard spearhead | PMF, MRR figures without Commander data |
| **B — Post-angel** | Case study PDFs, growth engine links, deeper qualification story | Full portal qualification agent AS-IS |
| **C — Stretch** | B2B LOS white-label (far future) | Multi-tenant SaaS bez decyzji Dowódcy |

**Current phase:** A (tech traction strong, commercial TBD — uczciwie nazwane).

---

## §5 Osobisty wektor — Norbert Wozniak

| Horizon | Direction |
|---------|-----------|
| **Now** | Solo Conversion Systems Architect + AI-operated ops |
| **12 mies.** | Angel-ready LOS narrative + commercial traction snapshot (Commander-filled) |
| **24 mies.** | Skalowanie bez zatrudniania — Jadzia COI + Agent OS jako force multiplier |
| **Nigdy** | "Agencja od wszystkiego" — jeden lejek Wizard, jeden system |

**Investor entry:** [investor-vision-angel.md](../../flexgrafik-meta/docs/core/investor-vision-angel.md)

---

## §6 Decision rights

| Decision | Owner | AI role |
|----------|-------|---------|
| Strategic direction | **Dowódca** | Propose (Jadzia Strategist) |
| Code merge / deploy prod | **Dowódca** (Zasada 11) | Agent OS execute after HITL |
| Doc canon change | **Dowódca** approve | VCMS scan + handoff |
| Kaizen / new module | **Dowódca** | Kaizen filter — max 3 props/week |
| Commercial metrics publish | **Dowódca only** | Never invent |

**Life loop:** Sense → Interpret → Propose → Verify → **Decide (0% AI)** → Act → Learn

---

## §7 Anti-goals (świadome NIE)

- Fake uptime %, invented MRR, or "orders live" without WC webhook evidence
- Piąty moduł produktowy bez decyzji Dowódcy (master-plan guard)
- Klasyczny sklep / listing produktów (Wizard-only — meta global-rules)
- Pełna autonomia AI bez HITL na write paths
- Mieszanie enterprise portfolio (`portfolio.flexgrafik.nl`) z SMB quietforge copy
- Tech jargon w SMB-facing hero (LangGraph, MCP w hero = fail)

---

## §8 Portfolio implications per audience

| Audience | Show | Hide / qualify |
|----------|------|----------------|
| **SMB buyer** | Pain → System → Effect, Wizard CTA, Automation Map | Repo names optional; LOS = credibility not overwhelm |
| **Tech / LinkedIn** | 8-repo map, Built vs Planned, Agent OS case study | AS-IS disclaimers on Jadzia COI % |
| **Investor** | LOS layers, governance, honesty framework | Commercial §2.2 until Commander fills |

**Live expression:** `src/content/readiness.ts` + `/results/owner-ecosystem/`

---

## §9 Review cadence

| Event | Action |
|-------|--------|
| Quarterly | Commander reviews this doc + meta master-plan |
| After meta AS-IS refresh | Sync `readiness.ts` + ecosystem-bridge.md |
| After major home change | Verify vision §8 still matches site-map |
| Before LinkedIn / investor call | HITL checkbox § top + traction-honesty §2.2 |

---

*Established: 2026-06-25 · Next review: 2026-09-25 or post-Phase B gate*
