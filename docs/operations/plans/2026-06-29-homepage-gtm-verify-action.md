---
status: "[ACTIVE]"
title: "Plan działania — weryfikacja M0.2 + gate M1.1"
owner: "Norbert Wozniak"
updated: "2026-06-29"
classification: "Operations plan — verification"
parent: "./2026-06-29-homepage-gtm-faza-0.md"
deploy_commit: "c363d1f"
verified_by: "Agent smoke 2026-06-29 (prod fetch + browser CDP)"
---

# Plan działania — weryfikacja M0.2 + gate M1.1

> **Werdykt agenta (2026-06-29):** Produkcja **https://quietforge.flexgrafik.nl/** ma Fazę 0 live. **M0.2 = PASS z 2 uwagami** (mobile L3 na krawędzi viewport; jargon w ResultsTeaser card #1 below fold). **M1.1 odblokowane po Commander sign-off poniżej.**

---

## Wyniki weryfikacji (automatyczna + live)

### A. Repo / CI — PASS

| Check | Wynik | Kiedy |
|-------|-------|-------|
| `npm run typecheck` | ✅ PASS | 2026-06-29 |
| `npm run build` | ✅ PASS (34 routes) | 2026-06-29 |
| Git clean / synced origin | ✅ `c363d1f` | 2026-06-29 |
| Grep hero: no 8-repo / Eight parts / terminal | ✅ PASS | 2026-06-29 |
| `page.tsx` DualBrand + Featured order | ✅ PASS | 2026-06-29 |

### B. Produkcja — smoke test

| # | Test | Wynik | Dowód |
|---|------|-------|-------|
| B1 | 5s desktop — QF sell / FG proof / Map | ✅ PASS | Dual-brand + Featured + hero L3 na live |
| B2 | Mobile — L3 bez scroll | ⚠️ **PARTIAL** | Hero CTA na dole viewport (mobile emu); **header L3 zawsze widoczny** |
| B3 | Dual-brand pod hero | ✅ PASS | „Quietforge sells… FlexGrafik runs it live” |
| B4 | Featured 3 karty €290 | ✅ PASS | href: `/book-discovery/`, `/results/`, `/how-it-works/` |
| B5 | Hero bez terminal/8-repo, 3 beaty | ✅ PASS | P→S→E + wizard screenshot + LIVE |
| B6 | IntentRouter badges, no repo dump | ✅ PASS | Tytuł outcome-first; 8× badge; brak „Eight parts” |
| B7 | Book Discovery copy = form | ✅ PASS | „Request slot” + „payment link within 24h” + form CTA |
| B8 | Sticky mobile | ⏳ | Nie testowane scroll automation — kod OK (trigger built-vs-planned) |

### C. LinkedIn — MANUAL (Commander)

| # | Akcja | Wynik |
|---|-------|-------|
| C1 | Featured → book-discovery | ⏳ Commander |
| C2 | Featured → results | ⏳ Commander |
| C3 | Featured → how-it-works | ⏳ Commander |
| C4 | Services €290 | ⏳ Commander |

---

## Uwagi (nie blokują M1.1, Faza B)

| # | Obserwacja | Gdzie | Priorytet |
|---|------------|-------|-----------|
| W1 | Case card „Eight repos, one supervised system” + effect „8-repo governance” | ResultsTeaser sekcja 8 | P2 Faza B |
| W2 | Spearhead terminal mock | Sekcja 6 below fold | P2 (defer) |
| W3 | BuiltVsPlanned lead „governance scans” | Sekcja 7 | P3 copy polish |
| W4 | Sticky WhatsApp primary (nie Map) | Mobile chrome | P2 — wymaga site-map §3 amendment |

---

## Plan działania — kolejność

### Faza V1 — Commander (dziś, ~15 min)

| Krok | Akcja | Done |
|------|-------|------|
| V1.1 | Otwórz home na telefonie — 5s test własnymi oczami | ☐ |
| V1.2 | Kliknij Featured 3 karty — URL OK | ☐ |
| V1.3 | Kliknij Dual-brand oba linki | ☐ |
| V1.4 | `/book-discovery/` — przeczytaj + mental match form | ☐ |
| V1.5 | **Sign-off M0.2** — reply „M0.2 OK” lub lista poprawek | ☐ |

### Faza V2 — LinkedIn manual (po V1.5, ~10 min)

| Krok | Akcja | Done |
|------|-------|------|
| V2.1 | LinkedIn Featured slot 1 → `quietforge.flexgrafik.nl/book-discovery/` | ☐ |
| V2.2 | Featured slot 2 → `/results/` | ☐ |
| V2.3 | Featured slot 3 → `/how-it-works/` | ☐ |
| V2.4 | Services: Automation Map €290 → book-discovery | ☐ |

### Faza M1 — Pierwszy post B2B (po V2)

| Krok | Akcja | Ref |
|------|-------|-----|
| M1.1 | Post P1 Inbox Killer | [07-playbook #1](../../strategy/gtm/07-post-playbook.md) |
| M1.2 | CTA w komentarzu + UTM `inbox-killer` | [03-linkedin-principles P2](../../strategy/gtm/03-linkedin-principles.md) |
| M1.3 | Checklist P5 (post ↔ home) | [07 checklist](../../strategy/gtm/07-post-playbook.md) |

### Faza B — Opcjonalne poprawki (osobne sesje)

| Krok | Co | Sesja |
|------|-----|-------|
| B1 | ResultsTeaser owner-ecosystem card — de-jargon title/effect | 1 komponent |
| B2 | Spearhead terminal → screenshot only | 1 komponent |
| B3 | StickyCta Map-primary + site-map §3 chrome | plan + kod |
| B4 | Pricing SSoT drift audit | osobna sesja AUD |

---

## Gate summary

```text
M0.2 PASS (agent) ──► Commander sign-off V1 ──► LinkedIn Featured V2 ──► M1.1 post
                              │
                              └── jeśli FAIL → Faza B fix → re-smoke
```

**Agent recommendation:** **Odblokuj M1.1** po V1.5 Commander — landing spełnia GTM v2 P0; W1–W4 to polish below/around fold, nie regresja konwersji cold traffic.

---

*Verified: 2026-06-29 · Prod URL live · Commits through `c363d1f`*
