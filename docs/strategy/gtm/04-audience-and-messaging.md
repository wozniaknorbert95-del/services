---
status: "[ACTIVE]"
title: "Audience & Messaging — B2B vs Investor"
owner: "Norbert Wozniak"
updated: "2026-06-29"
version: "2.0 — site-audit sync"
classification: "L3 — GTM messaging"
upstream:
  - "../marketing-strategy.md"
  - "./08-investor-track.md"
---

# Audience & Messaging

---

## CO

Dwa **osobne** odbiorcy i dwa **osobne** zestawy komunikatów — bez mieszania na jednym feedzie LinkedIn B2B.

| Track | Priorytet | Odbiorca | Pytanie w głowie odbiorcy |
|-------|-----------|----------|---------------------------|
| **A — B2B Quietforge** | **#1 (90 dni)** | NL ZZP / small BV, EN-friendly | *Can this architect deploy a system that improves my business?* |
| **D — Investor** | **#2 (później)** | Angel / strategic / compute partner | *Is this a credible platform with live proof and upside?* |

Pełny ICP i anti-ICP: [marketing-strategy.md](../marketing-strategy.md) §3.

---

## DLACZEGO

Audyt: Post 4 i video #investorready przyciągają **founders i inwestorów**, nie właściciela SMB z chaosem w inboxie. Priorytet A wymaga **innego języka** niż priorytet D — ten sam profil, **różne serie treści**.

---

## BO

Jeden post „szukam inwestora i robię automatyzacje” = oba audytoria czują się nieadresowane. B2B kupujący boi się „niedokończonego produktu”; inwestor potrzebuje platform story — to są **różne leady**.

---

## Track A — B2B Quietforge

### Kto (skrót — kanon)

- Geografia: Netherlands
- Entity: ZZP, small BV, professional services, specialist e-commerce
- Pain: inbox chaos, manual quotes, weak capture, scattered tools
- Budget signal: Automation Map €290+; projects normally €1,200+
- **Not for:** brochure-only, sub-€199 impulse, enterprise procurement theatre

Źródło: [marketing-strategy.md §3](../marketing-strategy.md)

### Message hierarchy (obowiązkowy)

```text
Problem → System → Effect
```

Rozszerzenie strony: [marketing-strategy.md §4](../marketing-strategy.md)

### Słownik — mów / nie mów

| Mów (outcome first) | Nie mów (primary) |
|---------------------|-------------------|
| Qualified leads, less admin, controlled workflow | „AI chatbot”, „web designer” |
| Automation Map — 60–90 min, credited | „Free call”, „email me” |
| LIVE on my business (wizard, inbox) | „80% done”, „need money” |
| Human-in-the-loop on every critical step | Full autonomy hype |

### Przykłady komunikatów, które **nie działają** na homepage (Track A)

Te frazy są OK w warstwie technicznej (/founder/, investor) — **NIE** above fold na quietforge:

| Komunikat (obecny / ryzykowny) | Dlaczego zły dla SMB na home | Zamiast tego (homepage) |
|--------------------------------|------------------------------|-------------------------|
| „8-repo governance” / terminal mock | Architektura zamiast bólu | Problem: inbox chaos → System: classified workflow → Effect: fewer missed leads |
| „Eight parts of the ecosystem” | Repo dump — ICP nie wie co wybrać | IntentRouter **below** Featured strip; problem labels bez kluczy repo |
| „LangGraph / Agent OS / MCP” | Techniczny hook — audyt MR-11 | Outcome: „you approve every send” |
| „Pay & pick a slot” (gdy form = enquiry) | Dysonans zaufania — audyt P0 | Jeden model: albo checkout, albo „Apply for Map — reply in 24h” |
| FlexGrafik druk / oklejenie CTA | Consumer pitch na stronie B2B | FlexGrafik tylko w dual-brand band + /results/ jako proof |
| „Platform seeking capital” | Track D na Track A surface | Off homepage; investor = [08](./08-investor-track.md) |

### Core question (immutable)

> **Can Norbert design and deploy a system that improves my business?**

[marketing-strategy.md §1](../marketing-strategy.md)

### CTA ladder (LinkedIn → site)

1. **L3** Book Automation Map — `/book-discovery/`
2. **L2** See live systems — `/results/`
3. **L1** Try wizard (proof only, nie primary CTA na LI B2B post)

[conversion-pipeline.md](../conversion-pipeline.md)

---

## Track D — Investor (osobna ścieżka)

**Status:** Zaplanowany **po** stabilizacji feedu B2B i uzupełnieniu commercial traction (UNKNOWN w PR-08).

**Nie na głównym feedzie B2B w Q2 2026.**

Szczegóły: [08-investor-track.md](./08-investor-track.md)

### Kto (orientacyjnie)

- Angel pre-seed (decyzja z rozmowy)
- Founderzy po exit, którzy rozumieją ops + tech
- Partner strategiczny (print / SaaS) — opcjonalnie później

### Message (inna oś niż B2B)

| B2B (A) | Investor (D) |
|---------|--------------|
| Twój inbox, twój quote chaos | Platform for service businesses; print = first vertical |
| €290 Map | Use of funds, runway, team — UNKNOWN kwoty w docs bez Commander |
| Case: inbox 142 msgs | LOS, 8-repo governance, Agent OS LIVE |

**Narracja platformowa** (kierunek, nie liczby): flexgrafik-meta investor docs — poza scope tego packa; link tylko jako referencja wewnętrzna.

---

## Macierz: ten sam fakt, dwa komunikaty

| Fakt (proof) | Track A (SMB) | Track D (investor) |
|--------------|---------------|---------------------|
| Wizard on zzpackage | „Serious leads self-qualify before you spend time” | „Revenue layer LIVE — Cash Engine” |
| 8-repo + VCMS | „Governance — fewer surprises before deploy” | „SSoT + scan — platform discipline” |
| FlexGrafik print ops | „Same stack I run daily — not a demo” | „First vertical in production” |
| Jadzia PARTIAL | „Orders + chat LIVE; roadmap named honestly” | „COI spine; Procurement Brain Phase C” |
| **Homepage hero (above fold)** | Problem→System→Effect + L3 Map · dual-brand band · **no repo dump** | LOS diagram · 8-repo · terminal aesthetic · investor platform story |

---

## NIE (anty-wzorce messaging)

| NIE | Track |
|-----|-------|
| Investor ask w poście B2B | A |
| Consumer druk CTA | A |
| „Agency” / „we” bez delivery partner context | A ([marketing-strategy §11](../marketing-strategy.md)) |
| Fake client logos | A + D |
| PMF / MRR bez Commander data | D ([proof-rules](../../canons/proof-rules.md) PR-07) |
| Mieszać A i D w jednym poście | Oba |
| **Mieszać Track A i D na homepage** | A — hero, Featured, primary CTA = Map only |
| **Consumer + B2B pitch w jednej sekcji home** | A — FlexGrafik = proof layer, nie druk |
| Repo/architecture dump above fold | A — [quietforge-ux-ia](../../audits/2026-06-25/quietforge-ux-ia.md) |

---

## UNKNOWN (Commander)

| Pole | Wpływ |
|------|-------|
| Min. commercial metrics dla investor | Blokuje public investor series |
| Ticket size / pre-money (angel) | Tylko prywatny deck / DM — nie w GTM docs bez sign-off |
| Named investor persona (NL vs EU vs PL diaspora) | Doprecyzuje ton serii D |

Template: [commercial-traction-template.md](../../operations/commander/commercial-traction-template.md)

---

## Powiązane

- [04 — nie, 05-content-pillars](./05-content-pillars.md)
- [07-post-playbook.md](./07-post-playbook.md) — tylko Track A briefs
- [08-investor-track.md](./08-investor-track.md)
