---
status: "[ACTIVE]"
title: "GTM Strategy Pack — Quietforge × FlexGrafik"
owner: "Norbert Wozniak"
updated: "2026-06-29"
version: "2.0 — site-audit sync"
classification: "L3 — outbound / channel strategy (documentation only)"
parent: "../README.md"
---

# GTM Strategy Pack

> **Cel folderu:** Jedno miejsce na strategię **wyjścia na rynek** (kanały, LinkedIn, treści, investor track) — oraz **wymagania spójności z homepage** zanim ruszy implementacja w `src/`.

**Nie zastępuje:** [marketing-strategy.md](../marketing-strategy.md) (positioning strony), [site-map.md](../site-map.md) (IA home LOCKED), [vision-system.md](../../canons/vision-system.md) §2 (two-brand LOS), [proof-rules.md](../../canons/proof-rules.md) (uczciwość dowodów).

**Audyty (obowiązkowe przed copy/post):**
- LinkedIn: [audits/linkedin-audit-2026-06-29.md](./audits/linkedin-audit-2026-06-29.md)
- Site UX/IA: [audits/2026-06-25/quietforge-ux-ia.md](../../audits/2026-06-25/quietforge-ux-ia.md)

---

## Aktualny stan po audycie strony (2026-06-29)

| Warstwa | Ocena / stan | Wniosek strategiczny |
|---------|--------------|----------------------|
| **LinkedIn profil** (copy) | ~4.2/5 positioning | Tożsamość OK — nie rebrand |
| **LinkedIn B2B readiness** | 2.4/5 | Feed + brak Featured/CTA — nie homepage |
| **Homepage UX/IA** | 7.2/10 flow, 6.5/10 konwersja | **Architektura za wcześnie**, jargon techniczny, dual-brand niewidoczny |
| **Homepage vs GTM** | ROZJAZD | Strona mówi „8-repo / terminal”; GTM mówi Problem→System→Effect |
| **Book Discovery** | P0 drift | Copy „pay & slot” vs formularz enquiry — naprawa osobna (site-map / funnel) |

**Jedno zdanie:** GTM pack v2 = spec · **Faza 0 kod shipped** (`3933c30`) · **VERIFY na produkcji** (plan: [homepage-gtm-faza-0.md](../../operations/plans/2026-06-29-homepage-gtm-faza-0.md)) przed postami LinkedIn M1.1.

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
| 3 | [03-linkedin-principles.md](./03-linkedin-principles.md) | Przed LinkedIn + przed zmianami home |
| 4 | [04-audience-and-messaging.md](./04-audience-and-messaging.md) | Przed copy B2B vs investor |
| 5 | [05-content-pillars.md](./05-content-pillars.md) | Planowanie treści + sekcje home |
| 6 | [06-roadmap-90-days.md](./06-roadmap-90-days.md) | Plan kwartalny (homepage przed postami B2B) |
| 7 | [07-post-playbook.md](./07-post-playbook.md) | Pisanie posta + wersja homepage |
| 8 | [08-investor-track.md](./08-investor-track.md) | Tylko seria D |

---

## Zasada nadrzędna (GTM-01)

> **LinkedIn nie sprzedaje druku** — pokazuje system działający na FlexGrafik jako proof. **CTA = Quietforge B2B** (Automation Map → build).

**Rozszerzenie v2 — homepage:**

> **quietforge.flexgrafik.nl nie jest drugim FlexGrafik.** Strona główna musi w 5 sekund oddzielić: **Quietforge sprzedaje systemy B2B** · **FlexGrafik dowodzi na żywo** — bez consumer pitch druku, bez repo-dump w hero. Szczegóły: [01-two-brand-model.md](./01-two-brand-model.md), [03-linkedin-principles.md §P5](./03-linkedin-principles.md).

---

## Co wymaga aktualizacji: dokumenty vs strona (SSoT gap)

| Wymaganie (GTM v2) | Gdzie w docs | Stan kod (2026-06-29) | VERIFY prod (Commander) |
|--------------------|--------------|----------------------|-------------------------|
| Dual-brand band (QF sell / FG proof) | `01`, `03` P5 | ✅ `DualBrandBand` | ⏳ B3 |
| Problem → System → Effect w hero | `04`, `05` P1 | ✅ `HERO.beats` + ResultsTeaser | ⏳ B5 |
| De-jargon above fold (no 8-repo, terminal) | `03`, `04` | ✅ hero; spearhead terminal below fold | ⏳ B5 |
| Featured paths (Map, /results/, how-it-works) | `02`, `03` P2 | ✅ `FeaturedStrip` | ⏳ B4 + LI Featured |
| LIVE/PARTIAL na modułach | `05` P1, proof-rules | ✅ IntentRouter + Spearhead | ⏳ B6 |
| L3 Map na pierwszym ekranie | `02`, conversion-pipeline | ✅ hero + Featured | ⏳ B2 mobile |
| Spójność post ↔ home | `07` checklist | N/A proces | ⏳ po LI Featured |
| Investor język off home | `04`, `08` | ✅ home OK | ⏳ /founder/ low risk |

**Legenda:** ✅ = w repo/master · ⏳ = smoke test na quietforge.flexgrafik.nl · Gate M0.2 = wszystkie VERIFY przed M1.1.

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
3. **VERIFY prod** ✅ Agent PASS — **Commander V1 sign-off** ← **teraz** ([verify-action](../../operations/plans/2026-06-29-homepage-gtm-verify-action.md))
4. **LinkedIn Featured V2** — po sign-off
5. **Post M1.1** — Inbox Killer brief #1

Audyt LinkedIn 2.4/5 B2B readiness **nie jest problemem tożsamości** — to problem **ścieżki konwersji** (profil + **strona docelowa**). Seria 4/4 zostaje; strategia idzie forward przez P1–P4 z CTA w komentarzu — **ale tylko jeśli landing nie psuje zaufania**.

Egzekucja profilu LinkedIn (Featured, Services pricing) = sesja manual Commander. Egzekucja homepage = sesje agenta po tym packu.

---

*Established: 2026-06-29 · v2 site-audit sync: 2026-06-29 · Repo: services (quietforge.flexgrafik.nl)*
