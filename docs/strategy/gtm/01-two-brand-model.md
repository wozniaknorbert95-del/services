---
status: "[ACTIVE]"
title: "Two-Brand Model — FlexGrafik × Quietforge"
owner: "Norbert Wozniak"
updated: "2026-06-29"
classification: "L3 — GTM foundation"
upstream:
  - "../../canons/vision-system.md"
  - "../marketing-strategy.md"
---

# Two-Brand Model

---

## CO

Dwa brandy, jedna rzeczywistość operacyjna:

| Brand | Rola GTM | Jedno zdanie |
|-------|----------|--------------|
| **FlexGrafik** | RUN + EARN + **PROOF** | Holenderska drukarnia / ZZP — na niej **działa** silnik (wizard, inbox, LOS). |
| **Quietforge** | DEPLOY + EXPLAIN + **SELL B2B** | Conversion Systems Architect — **wdraża** ten sam typ systemu u innych NL SMB. |

Profil LinkedIn: [linkedin.com/in/flexgrafik-quietforge](https://www.linkedin.com/in/flexgrafik-quietforge) — **jedno konto**, oba brandy widoczne, ale **job sprzedażowy = Quietforge**.

---

## DLACZEGO

1. **Kupujący B2B** pyta: *„Czy ten architekt dowozi system, który poprawia mój biznes?”* — nie *„czy drukuje naklejki?”*
2. **Bez żywej firmy** Quietforge brzmi jak agencja z deckiem. FlexGrafik jest **laboratorium produkcyjnym**, nie case study mock-up.
3. **Jeden LinkedIn** ma sens: każdy zainteresowany automatyzacją widzi, że silnik **pracuje na prawdziwej firmie** — to główny moat ([marketing-strategy.md](../marketing-strategy.md) §10, self-as-client).

Skomplikowanie jest **funkcjonalne**, nie do „uproszczenia” przez jeden consumer pitch na wszystkich kanałach.

---

## BO

- Jeśli LinkedIn = oferta druku → trafiasz ZZP szukających oklejenia, nie architekta systemów (audyt: stare posty flexgrafik.nl, magnesy — 44–101 imp, zły ICP).
- Jeśli Quietforge bez FlexGrafik → brak wiarygodności LIVE/PARTIAL ([proof-rules.md](../../canons/proof-rules.md)).
- Jeśli FlexGrafik bez Quietforge na LinkedIn → marnujesz kanał B2B (priorytet A).

**Reguła z vision-system §2:** Quietforge **deploys and explains**; FlexGrafik **runs and earns**.

---

## Diagram — jak to działa razem

```mermaid
flowchart TB
  subgraph flex [FlexGrafik_RUN_EARN_PROOF]
    Print[Print_ops_NL]
    Wizard[Wizard_zzpackage]
    Game[Lead_magnet_app]
    Jadzia[Jadzia_COI_PARTIAL]
  end
  subgraph qf [Quietforge_DEPLOY_SELL]
    Site[quietforge.flexgrafik.nl]
    Map[Automation_Map]
    Build[Client_builds]
  end
  subgraph channels [Channels]
    LI[LinkedIn_Quietforge_B2B]
    FB[Facebook_FlexGrafik]
    TT[TikTok_FlexGrafik]
    GMB[Google_Business_FlexGrafik]
  end
  flex -->|live_proof| LI
  flex --> FB
  flex --> TT
  flex --> GMB
  LI --> Site
  Site --> Map
  Map --> Build
```

---

## Diagram — co widzi odbiorca na LinkedIn

```mermaid
flowchart LR
  Visitor[LinkedIn_visitor]
  Visitor --> Story[Founder_story_FlexGrafik_origin]
  Visitor --> Proof[Production_proof_wizard_inbox_LOS]
  Visitor --> Offer[Quietforge_offer_Map_and_builds]
  Story -.->|supports_trust| Proof
  Proof -->|must_lead_to| Offer
```

**Kolejność narracji na feedzie (docelowa):** Problem → System → Effect → **Book Automation Map** — nie odwrotnie.

---

## Kanały × brand (skrót)

Pełna tabela: [02-channel-architecture.md](./02-channel-architecture.md).

| Kanał | Główny brand | FlexGrafik na tym kanale |
|-------|--------------|---------------------------|
| LinkedIn | Quietforge B2B | Tylko jako **proof** i founder context |
| Facebook | FlexGrafik | Primary — druk, ZZP, lokalnie |
| TikTok | FlexGrafik | Primary — wizualny druk / ZZP |
| Google Business | FlexGrafik | Primary — lokalne usługi |
| quietforge.flexgrafik.nl | Quietforge | FlexGrafik w /results/, /founder/ |

---

## Audyt LinkedIn jako kontekst (2026-06-29)

| Obserwacja | Implikacja strategiczna |
|------------|-------------------------|
| Positioning copy ~4.2/5 | **Nie przepisywać tożsamości** — kierunek OK |
| B2B readiness 2.4/5 | **Luka = konwersja i treść feedu**, nie „kim jesteś” |
| Feed investor-heavy, 0× quietforge link | **Rozjazd kanału z priorytetem A** — naprawa przez **nową treść**, nie kasowanie historii |
| Brak Featured / jawnego Map CTA | Strategia mówi *dokąd* prowadzić; wykonanie profilu osobno |

Źródło: [linkedin-audit-2026-06-29.md](./audits/linkedin-audit-2026-06-29.md)

---

## NIE (anty-wzorce)

| NIE | Dlaczego |
|-----|----------|
| „Jedna marka, jeden pitch” na wszystkich kanałach | Rozmywa B2B i consumer |
| LinkedIn post: „zamów oklejenie / magnesy” | Kanał consumer — FB/TikTok/GMB |
| Quietforge bez wzmianki że system **żyje** na FlexGrafik | Brzmi jak software house |
| FlexGrafik jako **główna oferta** na LinkedIn | Mylisz ICP z drukarnią |
| Procent „80% gotowe” zamiast LIVE/PARTIAL | [proof-rules.md](../../canons/proof-rules.md) — honesty gate |
| Investor ask na głównym feedzie B2B | [08-investor-track.md](./08-investor-track.md) — osobna ścieżka |

---

## Powiązane dokumenty

- [vision-system.md](../../canons/vision-system.md) §2 — binding two-brand
- [marketing-strategy.md](../marketing-strategy.md) — ICP, pricing, message hierarchy
- [02-channel-architecture.md](./02-channel-architecture.md)
- [03-linkedin-principles.md](./03-linkedin-principles.md)
