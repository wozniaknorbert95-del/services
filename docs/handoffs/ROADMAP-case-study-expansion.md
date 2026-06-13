# Roadmap — Case Study Expansion (sales gratka per client)

> **Status:** CS-1 complete (2026-06-13). CS-2 next.  
> **Owner decision:** 1 case study = 1 sesja OpenCode/Cursor (Reguła 1-1-1).  
> **Cel:** Każdy przykład z `/results` rozbudowany jako materiał, który klient może przekazać wewnętrznie (accountant, partner, developer) — sprzedażowo, faktowo, bez zmyślonych liczb.

---

## Zasady nienaruszalne

1. **No fabricated metrics** — estimate / process proof / in delivery until real numbers exist.
2. **Anonymise clients** — Case 4 stays „a Rotterdam accounting office"; no KFA name.
3. **FlexGrafik/Jadzia** — opis generycznie jako „owner ecosystem", nie brand dump.
4. **Every gratka ends with CTA** → `/book-discovery/` (Automation Map).
5. **Reuse design system** — `--qf-*` tokens, dark/mono, same as site.

---

## Case 01 — The self-running back-office (Inbox Killer)

### Obecny stan (live)
- Card on `/results` + teaser on home
- Spearhead section + blog post `under-the-hood-how-inbox-killer-works`
- Terminal: `classify → plan → diff → approve`

### Docelowa gratka (sesja CS-1)
| Deliverable | Format | Purpose |
|---|---|---|
| **Inbox Flow Diagram** | SVG/PDF one-pager | „This is what happens to your email" — visual for non-technical owner |
| **Before/After workflow** | 2-column printable | As-is chaos → to-be with HITL gate |
| **Optional:** dedicated `/results/inbox-killer` sub-page | Route | Deeper than card, lighter than full solution page |

### Copy hooks (factual)
- 100+ messages/scan (process proof from live system)
- Nothing sends without approval
- Estimate ~ few hours/week — per client confirmation

### Files likely touched
- `src/app/results/` or `src/app/case-studies/inbox-killer/`
- `public/gratka/inbox-killer-flow.svg`
- Link from case card → „Download flow diagram"

### DoD
- [x] Downloadable asset, no `[X]`
- [x] Links from `/results` case 01
- [x] CTA → book-discovery
- [x] `npm run build` pass

---

## Case 02 — Multi-agent orchestrator (Jadzia-Core)

### Obecny stan
- Card describes FastAPI + LangGraph + VPS, SSoT, agent cards, 12-step workflow
- Measurement: architecture diagram on request

### Docelowa gratka (sesja CS-2)
| Deliverable | Format | Purpose |
|---|---|---|
| **Architecture one-pager** | PDF (anonimised) | „How a multi-agent business runs without spreadsheet chaos" |
| **Agent card sample** | 1-page PDF | Shows planner/coder/tester/review contracts — enterprise-safe for SMB |
| **Workflow map** | 5-phase client view | Maps internal 12-step → client-readable (reuse `HowIWork` logic) |

### Source of truth
- `flexgrafik-meta/docs/core/workflow-manual.md`
- `flexgrafik-meta/docs/core/agents.md`
- `jadzia-core` (VPS stack — no secrets in repo)

### DoD
- [ ] Diagram + agent card sample downloadable
- [ ] Zero client names, zero fake uptime %
- [ ] CTA on every PDF footer

---

## Case 03 — Self-service quote & onboarding (Wizard)

### Obecny stan
- 7-step configurator, open pricing, payment
- Measurement: fewer manual quote emails (to be quantified)

### Docelowa gratka (sesja CS-3)
| Deliverable | Format | Purpose |
|---|---|---|
| **Configurator journey map** | PDF 1-pager | 7 steps visualised — „what your client sees" |
| **ROI framing sheet** | PDF | „Manual quote vs self-service" — qualitative, not fake € saved |
| **Link to live wizard** | External (if public) | Optional „see it live" — only if zzpackage is stable for demo |

### Source of truth
- `global-rules.md` §1.3 Wizard-Only, §4.5 7-step flow
- `zzpackage.flexgrafik.nl` — verify live state before claiming in copy

### DoD
- [ ] Journey map matches real wizard steps (verify in repo)
- [ ] No invented conversion rates

---

## Case 04 — Advisory firm modernisation (KFA anonymised)

### Obecny stan
- Full scope designed, AVG layer, staged delivery
- Measurement: in delivery

### Docelowa gratka (sesja CS-4)
| Deliverable | Format | Purpose |
|---|---|---|
| **Scope summary (anonim.)** | PDF 2-page | Web upgrade + qualification-only AI assistant + content engine |
| **AVG / data-processing layer** | 1-page summary | Not legal advice — „what we agree before we start" |
| **Staged delivery timeline** | Visual | Phases without fake launch dates |

### Source of truth
- KFA engagement docs (local/meta — never client name in public assets)
- Mirror `TrustSafety` + `data-safety-playbook.md`

### DoD
- [ ] „Rotterdam accounting office" only — no KFA identifier
- [ ] „Qualification only, no tax advice" prominent
- [ ] Status honest: in delivery until live

---

## Recommended session order

```
Session N+1: Portfolio 100% (Hero + OG + PDF + polish)  ← NEXT
Session CS-1: Inbox Killer gratka  ← DONE 2026-06-13
Session CS-2: Orchestrator gratka
Session CS-3: Wizard gratka
Session CS-4: Advisory firm gratka (after KFA milestones if possible)
```

**Why this order:** CS-1 is live proof (strongest sales). CS-4 last — outcomes still in delivery.

---

## VCMS / Agent OS hook

When scheduling in Mission Control:
- **Module:** `services` (Quietforge)
- **Task type:** one case per ticket
- **Handoff template:** `docs/handoffs/YYYY-MM-DD-case-study-[slug].md`
- **Verify:** `npm run build` before commit; no deploy without Dowódca approval (Zasada 11)
