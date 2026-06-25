# Portfolio Recovery Plan — Quietforge + Agent OS

**Date:** 2026-06-23  
**Owner:** Norbert Wozniak  
**Status:** ACTIVE — execute in order below  
**Repos:** `services` (portfolio) · `agent-os` · `agent-os-ui` · VCMS orchestration

---

## Executive summary

Audyt i Sprint 1 naprawiły **trust killers** (spearhead content, placeholders, social, WhatsApp).  
Następny etap to **powrót do trybu rozbudowy portfolio** — ten sam rytm co VCMS / case studies / proof manifest — z równoległą ścieżką **Agent OS S7** (portfolio pack), gdy backend ma minimum do pokazania.

**Zasada:** 1 sesja = 1 moduł = build gate. Deploy tylko po `npm run build` PASS. Zasada 11 — brak auto-deploy klienta.

---

## Faza A — DONE (deploy 2026-06-23)

| # | Deliverable | Status |
|---|-------------|--------|
| A1 | Sprint 0: social, JSON-LD, FlexGrafik proof, PDF footer fix | ✅ shipped `b2808be` |
| A2 | Sprint 1: `[FILL:]` → ProofEmptyState, Inbox Killer rewrite, legacy redirect | ✅ code ready |
| A3 | Hero WhatsApp + wizard + StickyCta mobile | ✅ |
| A4 | WhatsApp `+31 687286151` (`wa.me/31687286151`) | ✅ constants |
| A5 | `npm run build` + `audit-404s.mjs` console=0 | ✅ pre-deploy |
| A6 | Push `master` → Vercel CD | ⏳ this session |

**Post-deploy smoke (5 min):**

```text
/solutions/inbox-killer/     → H1 "Inbox Killer", not Telegram
/results/inbox-killer/       → classify lanes case study
/inbox-killer/               → 301/redirect to solutions
/                            → mobile sticky CTA after System Metrics
Hero + Footer + /about/      → WhatsApp opens +31687286151
```

---

## Faza B — Services portfolio (Sprint 2–3, ~2 tygodnie)

Źródło szczegółów: `docs/plans/2026-06-23-ux-ui-improvement-plan.md`

### B1 — Conversion polish (Sprint 2, tydzień 1)

| Priorytet | Task | Exit |
|-----------|------|------|
| P1 | Home Pricing section: **1 primary CTA** per viewport (nie 4× Book na kartach) | Nielsen H7 |
| P1 | `/book-discovery/` — jawny link do Automation Map sample PDF w hero | funnel warmth |
| P2 | Footer `portfolio.flexgrafik.nl` → `/results/owner-ecosystem/` | H4 |
| P2 | `/pricing/` — hero hint €290 Automation Map | H5 |
| ✅ | Wizard L2 w hero | done Sprint 1 |

**Sesje OpenCode (propozycja):**

1. `Pricing.tsx` — competing primaries fix  
2. `book-discovery/page.tsx` — PDF link w hero  
3. `conversion-copy.ts` + Footer — link clarity  

### B2 — Proof expansion (portfolio DNA, tydzień 2)

Kontynuacja wzorca z `2026-06-13-cs1-inbox-killer-gratka.md` i `ROADMAP-case-study-expansion.md`:

| SKU / asset | Co brakuje | Dowód |
|-------------|------------|-------|
| **Owner ecosystem** | VCMS screenshot refresh + honesty labels | `proof.ts` screens |
| **Agent orchestrator** | Case study polish + measurement line | `/results/agent-orchestrator/` |
| **Sales funnel** | Gratka PDF parity check | existing SVG/PDF |
| **Founder video** | 60–90s Loom OR keep empty state | `videos.founder.ready` |
| **Inbox Killer video** | Screen record classification lanes | `videos.inboxKiller.ready` |

**Reguła proof manifest:** każda zmiana screen/video → `src/content/proof.ts` + build.

### B3 — Home trim (decision gate)

Audit rekomenduje skrócenie 14 sekcji. **Nie ruszać bez aktualizacji `site-map.md` §2.**

| Opcja | Opis | Ryzyko |
|-------|------|--------|
| **B3a (zalecane)** | „Phase 2” collapse: BehindTheScenes + HowIWork → jedna sekcja accordion | Średnie — wymaga site-map |
| **B3b** | MVP mode: ukryj sekcje 11–13 na mobile only | Niskie |
| **B3c** | Status quo do Sprint 4 | Zero risk |

**Decyzja Dowódcy przed sesją B3.**

---

## Faza C — Agent OS portfolio track (parallel, gated)

Źródło: `docs/plans/AGENT-OS-UPGRADE-PLAN.md`

### C0 — Co blokowało portfolio Agent OS

| Bloker | Stan | Co potrzeba od Dowódcy |
|--------|------|------------------------|
| As-is audit w repo | Nav/footer plan → `docs/plans/2026-06-17-nav-footer-chrome-plan.md` | Prawdziwy audit → `agent-os/docs/audit/` |
| Brak LIVE proof labels | MVP lokalny | Honesty: LIVE / LOCAL-ONLY / DEMO per capability |
| Backend P0 gaps | README, auth, hybrid worker | S1–S6 w `agent-os` |
| Portfolio pack (S7) | Czeka na S6 e2e | **To jest sesja services** |

### C1 — Minimal data pack dla S7 (services)

Zanim `services` dostanie pełną stronę Agent OS, zbierz **1 folder dowodów**:

```text
docs/agent-os-proof/
  mission-control-screenshot.png    (approve/reject UI)
  task-lifecycle-diagram.svg        (Planner→Coder→Tester→HITL)
  agent-os-demo.mp4                 (60s, jak vcms-demo)
  honesty-labels.md                 (co LIVE vs LOCAL-ONLY)
  one-real-handoff.md               (link do docs/handoffs z agent-os)
```

**Bez tego:** zostaw obecny case study + architecture SVG — nie dodawaj `[FILL:]` ani „live animation”.

### C2 — Kolejność sesji Agent OS (backend first)

| Sesja | Repo | Cel | Blokuje portfolio? |
|-------|------|-----|-------------------|
| S1 | agent-os | ADR-001 + PRODUCT.md + README | Tak — bez README brak zaufania |
| S2 | agent-os | Auth + OpenAPI + `/modules` | Tak |
| S3–S5 | agent-os | Postgres + worker registry + router | Tak — 24/7 story |
| S6 | agent-os | Coder/Tester e2e smoke | **Gate dla S7** |
| **S7** | **services** | Case study update + proof.ts + gratka assets | Portfolio visible |
| S8 | agent-os-ui | Worker status + types z OpenAPI | Polish |

**Parallel rule:** Faza B (services) może iść **równolegle** z S1–S5. **S7 services** dopiero po S6 PASS lub świadome DEMO-only label.

### C3 — S7 services — scope (1 sesja)

| Plik | Zmiana |
|------|--------|
| `src/app/results/agent-orchestrator/page.tsx` | Copy + measurement z prawdziwego run |
| `src/content/proof.ts` | `videos.agentOs`, screens, honesty caption |
| `public/gratka/` | diagram + opcjonalnie demo mp4 |
| `docs/strategy/site-map.md` | jeśli nowa sekcja home |

---

## Faza D — Operacyjny rytm (VCMS)

Każda sesja portfolio:

```text
1. VCMS scan (conflicts = 0)
2. Wybierz 1 moduł z tego planu
3. Implement → npm run build
4. Handoff docs/handoffs/YYYY-MM-DD-*.md
5. Push services/master (Vercel auto) — deploy prod manual verify
```

**Orchestrator:** Hermes planuje · OpenCode/Cursor executuje · Dowódca approve przed push dużych zmian.

---

## Timeline (realistyczny)

| Tydzień | Services | Agent OS |
|---------|----------|----------|
| **W23 (teraz)** | Deploy Sprint 1 + smoke | Zbierz proof pack C1 |
| **W24** | Sprint 2 (B1) | S1–S2 ADR + auth |
| **W25** | Sprint 3 proof (B2) | S3–S5 workers |
| **W26** | B3 home trim (jeśli approve) | S6 e2e → **S7 portfolio** |
| **W27** | Sprint 4 Lighthouse/a11y | S8 UI polish |

---

## Success metrics

| Metric | Baseline (audit) | Target |
|--------|------------------|--------|
| Nielsen avg | 3.9 | ≥ 4.3 |
| `[FILL:]` on money pages | 0 post-S1 | 0 |
| Spearhead conversion path | broken | `/solutions/inbox-killer/` canon |
| Agent OS portfolio | waiting on data | S7 live with honesty labels |
| Console errors home | 0 | 0 maintained |

---

## Decisions needed from Dowódca

1. **B3 home trim** — opcja a / b / c?  
2. **Agent OS S7** — czekać na S6 e2e czy publikować DEMO-only wcześniej?  
3. **Founder + Inbox video** — nagrać Loom w tym tygodniu czy empty state do Q3?

---

## Immediate next action (po deploy)

1. ✅ Verify production smoke (lista Faza A)  
2. **Sesja 1 Sprint 2:** `Pricing.tsx` competing primaries  
3. **Równolegle:** uzupełnij `docs/agent-os-proof/` (screenshot + 60s clip)  
4. Przekaż `AGENT-OS-UPGRADE-PLAN.md` §9 do review — lub approve i start S1 w `agent-os`

---

*Plan łączy: UX improvement plan · funnel audit · Agent OS upgrade plan · AGENTS.md 1-1-1*
