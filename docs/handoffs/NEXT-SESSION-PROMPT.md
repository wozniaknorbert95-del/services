# Next Session Prompt — E-1 Owner ecosystem diagram

> **Start here.** Audit FIXes deployed. Ecosystem layer next.

---

## Stan

| Work | Status |
|---|---|
| Audit FIX-1–5 | Deployed on master |
| FIX-6 DNS | Owner — Vercel domain `services.flexgrafik.nl` |
| **E-1 Ecosystem diagram** | **Next** |

**Handoff FIX:** `docs/handoffs/2026-06-13-audit-fix-remediation.md`

---

## Źródło diagramu (screen + portfolio repo)

```
C:\Users\FlexGrafik\FlexGrafik\github\portfolio
```

Szukaj sekcji **„1. EKOSYSTEM — 8 REPO, 1 SYSTEM”** — ASCII/box diagram z warstwami:

```
GOVERNANCE          PRODUCTS
flexgrafik-meta     zzpackage (Wizard / Cash Engine)
WorkFlow            ↓
        ↓
   Flex-VCMS (Orchestrator)
   vcms-scan · repos.yaml · LLM Gateway · SSoT sync
        ↓
   ┌────────────┬──────────────┬─────────────┐
   app (game)   flexgrafik-nl  jadzia-core   │
   (Advergame)  (Brand Portal) (AI Backend)  │
        ↓
   Agent OS (Orchestration)
   LangGraph: Planner → Coder → Tester → Review → Sum
   Agent OS UI (Mission Control)
```

**Adaptacja pod Quietforge** — dodać / podkreślić:
- `services.flexgrafik.nl` — B2B sales (Automation Map)
- Inbox Killer — back-office live proof
- flexgrafik.nl = portal + chat assistant (nie tylko „brand portal”)
- zzpackage = wizard + spokojny formularz / delegacja grafikom
- flex-vcms = nadzór (conflicts=0, scan)
- jadzia = moduły ulepszane w pętli agentów
- agent-os = wykonawca (nie magia)

---

## Cel sesji E-1

### Deliverables

1. **SVG** `public/gratka/owner-ecosystem-map.svg` — dark/mono, `--qf-accent`, czytelny na mobile
2. **PDF** `public/gratka/owner-ecosystem-map.pdf` — 1-pager do forwardowania
3. **Strona** `/results/owner-ecosystem/` LUB sekcja home **„The system I run on”**
4. **Opcjonalnie:** link z CS-02 (orchestrator) do tego diagramu
5. OG `results-owner-ecosystem.svg` + sitemap

### Copy framing (B2B SMB)

> *„This is the live owner ecosystem behind the architect — patterns you can get scaled to your business.”*

Nie katalog produktów ZZP. Nie fake metrics.

### DoD

- [ ] Diagram pokazuje wszystkie moduły ze screenu + services + Inbox Killer
- [ ] VCMS jako governance layer widoczny
- [ ] Strzałki przepływu: portal → wizard → jadzia → agent-os
- [ ] CTA → `/book-discovery/` na stronie i w PDF footer
- [ ] `npm run build` pass
- [ ] Handoff `2026-06-13-e1-owner-ecosystem.md`

---

## Kolejność implementacji

```
1. Znajdź źródło w portfolio repo (md z ASCII)
2. Przerób na SVG (nie kopiuj 1:1 zielonego terminala — użyj tokenów Quietforge)
3. Markdown → PDF via generate-artefact-pdfs.mjs
4. Strona case study / sekcja home
5. Wire gratka + sitemap + OG
6. Build + handoff
```

---

## Po E-1 (backlog)

- E-2: CS-02 copy refresh (agent-os + jadzia + VCMS)
- E-3: CS-03 copy refresh (zzpackage form story)
- E-4: Home section „System I run on” jeśli nie w E-1
- DNS FIX-6 gdy Dowódca skonfiguruje domenę

---

> **Begin:** `portfolio` repo → znajdź diagram → adapt SVG → page → build.
