---
status: "[ACTIVE — Faza 3 docs sync]"
title: "GTM Strategy Pack — Quietforge × FlexGrafik"
owner: "Norbert Wozniak"
updated: "2026-06-30"
version: "2.2 — v3.0 homepage sync"
classification: "L3 — outbound / channel strategy (documentation only)"
parent: "../README.md"
---

# GTM Strategy Pack

> **Cel folderu:** Fundament **wyjścia na rynek** — dual-brand, architektura kanałów, filary treści, roadmapa 90 dni, investor track.  
> **Uwaga v2.1:** Strategia LinkedIn, zasady i kalendarz przeniesione do [`../linkedin/`](../linkedin/README.md). Ten folder = kontekst GTM, nie operacje kanałowe.

**Nie zastępuje:** [marketing-strategy.md](../marketing-strategy.md) (positioning strony), [site-map.md](../site-map.md) (IA home LOCKED), [vision-system.md](../../canons/vision-system.md) §2 (two-brand LOS), [proof-rules.md](../../canons/proof-rules.md) (uczciwość dowodów).

**LinkedIn canon (strategy, rules, calendar):** [`../linkedin/`](../linkedin/README.md) — **single source** dla operacji LinkedIn.

**Audyty (obowiązkowe przed copy/post):**
- LinkedIn: [audits/linkedin-audit-2026-06-29.md](./audits/linkedin-audit-2026-06-29.md)
- Site UX/IA: [audits/2026-06-25/quietforge-ux-ia.md](../../audits/2026-06-25/quietforge-ux-ia.md)

---

## Aktualny stan po audycie strony (2026-06-29)

| Warstwa | Ocena / stan | Wniosek strategiczny |
|---------|--------------|----------------------|
| **LinkedIn profil** (copy) | ~4.2/5 positioning | Tożsamość OK — nie rebrand |
| **LinkedIn B2B readiness** | 2.4/5 | Feed + brak Featured/CTA — nie homepage |
| **Homepage UX/IA** | **8.5/10** (v3.0, 9 sekcji) | ✅ Faza 1+2 zamknięte — de-jargon, compact, 6-card IntentRouter, CTA audit PASS, Lighthouse A11y/BP/SEO = 100 |
| **Homepage vs GTM** | ✅ **SPÓJNE** | Strona: Problem→System→Effect, dual-band, LIVE/PARTIAL, zero jargonu above fold |
| **Book Discovery** | P0 drift | Copy „pay & slot" vs formularz enquiry — naprawa osobna (site-map / funnel) |

**Jedno zdanie:** GTM pack v2 = spec · **Faza 1+2 kod shipped** (commits `0abeaf3`→`7b647d9`) · **VERIFY na produkcji** PASS · **Faza 3** = sync docs do v3.0 · Commander V1 sign-off → LinkedIn Featured V2 → Post M1.1.

---

## CO / DLACZEGO / BO (skrót)

| | |
|--|--|
| **CO** | Pakiet: dual-brand, kanały, LinkedIn, filary, roadmapa 90 dni + **wymagania homepage** |
| **DLACZEGO** | v1 pack był strategią bez mostu do audytu strony — agent/Commander nie wiedział *co naprawić na żywej stronie* |
| **BO** | Ruch z LinkedIn trafia na asset, który dziś **marnuje kliknięcia** (jargon, brak dual-brand, słaba ścieżka L3) |

---

## Read order

| # | Document | Kiedy czytać |
|---|----------|--------------|
| 1 | [01-two-brand-model.md](./01-two-brand-model.md) | Zawsze pierwszy — fundament |
| 2 | [02-channel-architecture.md](./02-channel-architecture.md) | Przed wyborem kanału; homepage jako asset |
| 3 | [05-content-pillars.md](./05-content-pillars.md) | Planowanie treści + sekcje home |
| 4 | [06-roadmap-90-days.md](./06-roadmap-90-days.md) | Plan kwartalny (homepage przed postami B2B) |
| 5 | [08-investor-track.md](./08-investor-track.md) | Tylko seria D |

**LinkedIn operacje (strategy, rules, calendar):** [`../linkedin/README.md`](../linkedin/README.md) — **nie** w tym folderze. |

---

## Zasada nadrzędna (GTM-01)

> **LinkedIn nie sprzedaje druku** — pokazuje system działający na FlexGrafik jako proof. **CTA = Quietforge B2B** (Automation Map → build).

**Rozszerzenie v2 — homepage:**

> **quietforge.flexgrafik.nl nie jest drugim FlexGrafik.** Strona główna musi w 5 sekund oddzielić: **Quietforge sprzedaje systemy B2B** · **FlexGrafik dowodzi na żywo** — bez consumer pitch druku, bez repo-dump w hero. Szczegóły: [01-two-brand-model.md](./01-two-brand-model.md), [03-linkedin-principles.md §P5](./03-linkedin-principles.md).

---

## Co wymaga aktualizacji: dokumenty vs strona (SSoT gap)

| Wymaganie (GTM v2) | Gdzie w docs | Stan kod (2026-06-29 v3.0) | VERIFY prod |
|--------------------|--------------|---------------------------|-------------|
| Dual-brand band (QF sell / FG proof) | `01`, `03` P5 | ✅ `DualBrandBand` (§2) | ✅ LIVE |
| Problem → System → Effect w hero | `04`, `05` P1 | ✅ `HERO.beats` (§1) | ✅ LIVE |
| De-jargon above fold (no 8-repo, terminal) | `03`, `04` | ✅ hero + spearhead screenshot, BuiltVsPlanned de-jargon, IntentRouter 6 cards | ✅ LIVE |
| Featured paths (Map, /results/, how-it-works) | `02`, `03` P2 | ✅ `FeaturedStrip` (§3) | ✅ LIVE |
| LIVE/PARTIAL na modułach | `05` P1, proof-rules | ✅ IntentRouter + Spearhead (§5, §7) | ✅ LIVE |
| L3 Map na pierwszym ekranie | `02`, conversion-pipeline | ✅ hero only (SR-04) | ✅ LIVE |
| Spójność post ↔ home | `07` checklist | N/A proces | ⏳ po LI Featured |
| Investor język off home | `04`, `08` | ✅ home OK | ✅ LIVE |
| 9-section structure (v3.0) | `site-map.md §3` | ✅ 13 components = 9 logical sections | ✅ LIVE |
| Lighthouse A11y/BP/SEO ≥ 95 | `brain.md §6` | ✅ 100/100/100 | ✅ LIVE |

**Legenda:** ✅ = w repo + prod verified · ⏳ = Commander manual · Faza 1+2 CLOSED · Faza 3 = docs sync.

---

## NIE

- Nie traktuj tego folderu jako listy „kliknij w LinkedIn” — to **strategia + spec homepage**, wykonanie w `src/` osobno.
- Nie publikuj postów B2B z Map CTA **zanim** homepage spełni minimum z tabeli gap (≥ P0 w docs) — [06-roadmap](./06-roadmap-90-days.md).
- Nie duplikuj cen ani pełnego ICP — linkuj [marketing-strategy.md](../marketing-strategy.md) §3 i §8.
- Nie publikuj metryk komercyjnych bez Commander — [proof-rules.md](../../canons/proof-rules.md) PR-07.
- **Nie implementuj homepage z poprzedniego planu kodu** bez przeczytania zaktualizowanego `01`–`07`.

---

## Podsumowanie dla Dowódcy

Masz **GTM pack v2** zsynchronizowany z **dwoma audytami**: LinkedIn (kim jesteś OK, feed słaby) i strona (mocny fundament, ale pokazuje architekturę zamiast bólu SMB). FlexGrafik nadal dowodzi na żywo; Quietforge sprzedaje Map → build — **homepage musi to pokazać w pierwszych 5 sekundach**, nie w sekcji 7 (IntentRouter).

**Kolejność pracy:**
1. ~~GTM pack v2 docs~~ ✅ Commander HITL 2026-06-29
2. ~~Faza 0 kod~~ ✅ shipped `3933c30`
3. ~~VERIFY prod~~ ✅ Agent PASS (Faza 1+2)
4. ~~Faza 1: Canon + struktura + komunikacja~~ ✅ 7 sesji shipped (`0abeaf3`→`025c497`)
5. ~~Faza 2: UX + dead code + Lighthouse~~ ✅ 4 sesje shipped (`bcd0e7d`→`7b647d9`)
6. **Faza 3: GTM docs sync do v3.0** ← TERAZ (ta sesja)
7. **Faza 4: Final verification** — build + typecheck + lint + audit:links
8. **LinkedIn Featured V2** — po sign-off
9. **Post M1.1** — Inbox Killer brief #1

Audyt LinkedIn 2.4/5 B2B readiness **nie jest problemem tożsamości** — to problem **ścieżki konwersji** (profil + **strona docelowa**). Seria 4/4 zostaje; strategia idzie forward przez P1–P4 z CTA w komentarzu — **ale tylko jeśli landing nie psuje zaufania**.

Egzekucja profilu LinkedIn (Featured, Services pricing) = sesja manual Commander. Egzekucja homepage = sesje agenta po tym packu.

---

*Established: 2026-06-29 · v2 site-audit sync: 2026-06-29 · Repo: services (quietforge.flexgrafik.nl)*
