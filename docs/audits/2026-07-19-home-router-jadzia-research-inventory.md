# Research inventory — Router restore + Jadzia-first home · 2026-07-19

**Tryb:** research only (zero zmian w `page.tsx` / deploy).  
**Commander LOCK:** IntentRouter + chipy kolorów na home · PainGrid zostaje · promocja **Jadzia → VCMS → Wizard → Visualizer → Inbox**.  
**Konflikt z canonem v4:** `site-map.md` §3 v4.0 + `ui-ux-principles.md` Spearhead rule (Wizard only) + IntentRouter na `/solutions/` — wymaga **amendmentu v5** przed implementacją.

---

## 1. Router source map + restore checklist (R1)

### Pliki źródłowe (istnieją — nie skasowane)

| Path | Rola |
|------|------|
| `src/components/home/IntentRouter.tsx` | 6 kart modułów + filter dim/sort + next step |
| `src/components/home/IntentFilterChips.tsx` | 5 przycisków intent (`INTENT_LEGEND`) |
| `src/lib/home-intent.tsx` | `HomeIntentProvider` + `sessionStorage` `qf-home-intent` |
| `src/lib/intent-highlight.ts` | match / dim / sort |
| `src/components/ui/IntentBadges.tsx` | kropki kolorów na kartach |
| `src/content/ecosystem.ts` | `INTENT_LEGEND`, `ECOSYSTEM_REPOS`, `getHomeRepos()`, `INTENT_ROUTER_HEADER`, `PAIN_GRID` |
| `src/app/globals.css` | `--fx-time/money/calm/efficiency/order`, `.qf-intent-*`, leftover `.qf-pain-filters` |
| `src/components/home/PainGrid.tsx` | home pain router (v4: **bez** chipów) |
| `src/app/solutions/page.tsx` | **obecny mount** IntentRouter + Provider |
| `src/app/page.tsx` | home — brak IntentRouter / Provider |

### Intent chips (strategia kolorów) — SSoT

| id | Label (przycisk) | Legend | CSS |
|----|------------------|--------|-----|
| `time` | Save time | Saves your time | `--fx-time` (czerwony) |
| `money` | Earn more | Raises revenue / profit | `--fx-money` (zielony) |
| `calm` | Less chaos and stress | Reduces stress and chaos | `--fx-calm` (żółty) |
| `efficiency` | Raise team efficiency | Increases team efficiency | `--fx-efficiency` (fiolet) |
| `order` | Order systems and tech | Orders systems and processes | `--fx-order` (niebieski) |

**Zachowanie chipów:** toggle (ten sam = clear); dim non-match (nigdy hide); sort matches first; `order` ma specjalną kolejność repo w IntentRouter.

### `getHomeRepos()` dziś

| Pokazane (`homeVisible !== false`) | Ukryte (`homeVisible: false`) |
|------------------------------------|-------------------------------|
| zzpackage, app.flexgrafik.nl, **jadzia-core**, agent-os, flexgrafik-nl, agent-os-ui | **flex-vcms**, flexgrafik-meta |

**Commander wymaga VCMS w narracji routera** → w implementacji: `flex-vcms.homeVisible = true` (7 kart) lub osobny VCMS strip; meta zostaje off-home (method → Map / how-it-works).

### Restore checklist (następna sesja)

1. [ ] Canon: `site-map.md` §3 → **v5.0** + `strategy-check` skill  
2. [ ] `page.tsx`: wrap `HomeIntentProvider`; mount `<IntentRouter />` po PainGrid  
3. [ ] PainGrid: opcjonalnie przywrócić chipy **lub** zostawić chipy tylko nad IntentRouter (rekomendacja poniżej)  
4. [ ] `flex-vcms.homeVisible = true` + buyer-facing `homeStatusNote` (KODA / drift)  
5. [ ] Decyzja: IntentRouter zostaje też na `/solutions/` (duplikat OK dla warm nav) lub tylko home  
6. [ ] CSS: przenieść active-chip z inline `style` w `IntentFilterChips` na `data-intent` (design-system)

### Rekomendacja PainGrid ↔ IntentRouter

| Job | Komponent | Chipy? |
|-----|-----------|--------|
| „Gdzie boli?” (język klienta) | PainGrid | Nie — 4+ karty bólu |
| „Jaki benefit / który moduł?” (kolory intent) | IntentRouter | **Tak** — jedyne chipy na home |
| Shared state | `HomeIntentProvider` na całym home | Pain może *opcjonalnie* highlightować karty po intent (nice-to-have), nie musi pokazywać chipów drugi raz |

---

## 2. Problem inventory ≥12 (R2)

Źródła: `PAIN_GRID`, `ECOSYSTEM_REPOS`, `JADZIA_COI_CAPABILITIES`, case studies, `MODULE_SHOWCASE`, readiness.

| problem_id | buyer_pain (EN) | intents | module(s) | status | home_surface | source |
|------------|-----------------|---------|-----------|--------|--------------|--------|
| pain-quotes | Manual quote ping-pong before knowing if lead is serious | money, efficiency | Wizard | LIVE ~90% | Pain card + Intent card | `ecosystem.ts` PAIN_GRID |
| pain-site | Website with no trust path / CTA | money, order | Trust Portal / Web Upgrade | LIVE ~75% portal | Pain card + Intent card | PAIN_GRID |
| pain-leads | Traffic without CRM capture | money | Lead magnet | LIVE ~85% | Pain card + Intent card | PAIN_GRID |
| pain-inbox | Mixed inbox — leads/invoices/noise | time, calm | Inbox Killer | LIVE (test-env proof) | Pain card | PAIN_GRID + inbox case |
| ops-blind | No single view of leads, orders, what needs action | time, calm, order, efficiency | **Jadzia** | LIVE ~93% spine | **Spearhead #1** + Intent card | jadzia-coi.ts |
| ops-silos | Orders / leads / chat in separate silos | order, calm | Jadzia | LIVE (spine) | Pain **new** + Spearhead | jadzia before-items |
| ops-brief | No weekly synthesis — decisions in scattered notes | time, order | Jadzia weekly brief | LIVE | Spearhead bullet | jadzia-coi capabilities |
| ops-publish | Social/content publish without approval trail | calm, order | Jadzia content HITL | LIVE INT-011 | Spearhead bullet | jadzia-coi |
| gov-drift | Docs/repos drift before deploy; nobody sees conflicts | order, calm | **VCMS** + KODA | LIVE ~85% | Intent card + VCMS strip | MODULE_SHOWCASE flex-vcms |
| gov-learn | Hard to learn / control what the system knows | order | VCMS KODA + meta | DEMO/PROVEN mix | VCMS strip | proof.vcmsFeatureStatus |
| cash-checkout | Need priced path to payment without phone tennis | money, efficiency | Wizard | LIVE | Secondary proof | SPEARHEAD / sales-funnel |
| visual-intake | Complex jobs need visual direction before price | money, order | Design Intake / Visualizer | **PARTIAL** | Thin strip under Wizard | salesFunnelInspireExtension |
| eng-queue | Changes without supervised build/approve path | time, efficiency | Agent OS + Mission Control | LIVE ~90% | Intent cards (secondary) | readiness / module-showcase |

**Propozycja nowych kart Pain (implementacja):** `pain-ops-blind`, `pain-drift` (min. +2 → 6 kart). Reszta może żyć tylko w IntentRouter / Spearhead.

---

## 3. Jadzia truth table + home Spearhead draft (R3)

### Truth (nie obiecywać autonomy)

| Capability | Status | Note |
|------------|--------|------|
| Order intelligence INT-002 | LIVE | Woo → operational ledger |
| Lead unification | LIVE | Game/wizard/portal → store |
| GA4 snapshot INT-009 | LIVE | Weekly ops review |
| Supervised content INT-011 | LIVE | prepare → approve → publish |
| Commander cockpit | LIVE | Owner view + next actions |
| Weekly owner brief | LIVE | HITL draft |
| Approval queue HITL | LIVE | Not autonomous |
| Portal qualification INT-012 | **PARTIAL** | API LIVE, UX generic chat |
| Procurement Brain | **PLANNED** | Phase C |
| Full autonomous COI | **OUT OF SCOPE** | Explicit in copy |

**Readiness:** ~93% LIVE (`readiness.ts` · `caseMeasurements.jadziaCoi`).

### Assets

| Asset | Path / key | Ready? |
|-------|------------|--------|
| Architecture diagram | `/gratka/jadzia-coi-architecture.svg` | yes |
| Workflow map screen | `screens.workflowMap` → `/gratka/workflow-map.png` | yes |
| Dedicated Jadzia product screenshot (cockpit UI) | — | **GAP** — użyć workflow-map / architecture na start |
| Jadzia walkthrough video | `ECOSYSTEM_MODULES` m3 `videoKey: 'inboxKiller'` | **BUG** — misbind; brak własnego video key |
| Wizard demo video | `/gratka/wizard-demo.mp4` | yes (nadmiar vs Jadzia) |

### Gaps (promocja)

- Home Spearhead = Wizard only (`SpearheadSpotlight` + `SPEARHEAD` copy)  
- Brak `/solutions/ops-command` (lub podobnego)  
- Brak w `SOLUTIONS_NAV` / footer solutions  
- `flagship: true` na jadzia-core **i** zzpackage — konflikt UI (dwa flagship)  
- Results hub elevates Jadzia; home/nav invert that  

### Draft copy — home Jadzia Spearhead (EN, do content SSoT)

```
eyebrow: live proof · operations
badge: LIVE · ~93% spine
H2: Operations Command Layer — see what needs action.
Body: Jadzia is the owner cockpit for leads, orders and weekly decisions —
     running on the same stack as FlexGrafik. Humans approve consequential actions.
Bullets:
  - One spine for orders, leads and analytics (not three silos).
  - Weekly owner brief as a draft you approve.
  - Supervised content publish — nothing goes out without you.
Primary CTA: See Jadzia proof → /results/jadzia-coi/
Secondary CTA: Book Automation Map
```

---

## 4. VCMS buyer narrative (R4)

### Fakty SSoT

- Role: Governance layer · ~85% LIVE  
- Showcase: 8-repo scan, conflict detection, ecosystem map, audit trail, **KODA read-only assistant**  
- `vcmsFeatureStatus`: scan/conflicts/ssot = PROVEN; KODA/HITL/audit = DEMO; healthScore = PLANNED  
- Video: `/gratka/vcms-demo.mp4` ready  
- Screen: `/gratka/vcms-dashboard.svg` (+ png)  
- Vision §3: VCMS = mózg „Czy dokumentacja się zgadza?”  

### Buyer language (propozycja — bez żargonu)

> **VCMS keeps the system honest.** It scans repos and content, flags conflicts before deploy, and gives you a read-only assistant (KODA) so you can learn and control what the system knows — without guessing.

### Miejsce na home (v5)

1. IntentRouter card (włącz `homeVisible`) — intents `order`, `calm`  
2. Krótki **VCMS trust strip** po Jadzia Spearhead (screenshot/video + 3 bullets)  
3. Honesty row (już w BuiltVsPlanned)  

Nie: pełny LOS diagram na home (zostaje `/results/owner-ecosystem/`).

---

## 5. Hierarchia promocji + site-map §3 v5.0 draft (R5)

### Rank (Commander)

| Rank | Moduł | Home role |
|------|--------|-----------|
| 1 | **Jadzia** | Spearhead / Live proof #1 |
| 2 | **VCMS** | Control + knowledge strip |
| 3 | **Wizard** | Cash engine — compact secondary + try demo |
| 4 | **Visualizer / Design Intake** | PARTIAL thin strip under Wizard |
| 5 | **InboxKiller** | Operate — Pain + Intent (nie spearhead) |

### Draft home order v5.0

```text
1. Hero                         (proof strip: ops cockpit · governance · wizard live)
2. PainGrid                     (6 kart: + ops-blind + drift; bez chipów)
3. IntentRouter + chips         (7 kart: + VCMS; kolorowa świadomość)
4. JadziaSpearhead              (zamiast Wizard SPEARHEAD)
5. VcmsTrustStrip               (nowy cienki blok)
6. WizardPlusVisualizer         (compact: checkout LIVE + Design Intake PARTIAL)
7. BuiltVsPlanned compact       (reorder rows: Jadzia, VCMS, Wizard, Agent OS)
8. WhyItWorks
9. Pricing
10. FinalCta
Chrome: StickyCta · SectionProgress (groups: Start / Pick / Proof / Close)
```

### v4 → v5 delta

| Zmiana | v4 | v5 |
|--------|----|----|
| IntentRouter | `/solutions/` only | **home + optional solutions** |
| Intent chips | off home | **on home** (przy IntentRouter) |
| Spearhead | Wizard | **Jadzia** |
| VCMS | honesty row only | **router card + strip** |
| Wizard | proof #1 | secondary compact |
| Visualizer | buried in Wizard body | explicit PARTIAL strip |
| Pain cards | 4 | **6** (+ops, +drift) |

### Canon files do amend (ta sama sesja implementacji)

| File | Co |
|------|-----|
| `docs/strategy/site-map.md` §3 | v5.0 table + removed/added |
| `docs/strategy/ui-ux-principles.md` | Spearhead rule → Jadzia (Ops Command) |
| `.agents/skills/strategy-check/SKILL.md` | home order v5 |
| `docs/canons/vision-system.md` §1/§4 | jeśli public claims zmieniają „Wizard spearhead” commercial |
| `src/content/ecosystem.ts` | HOME_SECTIONS, homeVisible VCMS, PAIN_GRID+, flagship |
| `src/content/conversion-copy.ts` | `JADZIA_SPEARHEAD`, `VCMS_STRIP`, demote `SPEARHEAD` |
| `src/content/readiness.ts` | `HOME_ROW_KEYS` reorder |
| `src/lib/navigation.ts` | Ops Command w SOLUTIONS_NAV / footer |
| `scripts/audit-navigation.mjs` | markers v5 |

---

## 6. TODO — następna sesja implementacji (R6)

Skopiuj do sesji Agent (kolejność fal):

### Fala 0 — Canon
- [ ] `site-map.md` §3 → v5.0 (mapa powyżej)  
- [ ] `ui-ux-principles.md` Spearhead rule → Jadzia Ops Command Layer  
- [ ] `strategy-check` skill sync  
- [ ] SESSION-ANCHOR: Home v5 IN PROGRESS  

### Fala 1 — Router na home
- [ ] `page.tsx`: `HomeIntentProvider` + PainGrid → IntentRouter  
- [ ] `flex-vcms.homeVisible = true` + homeStatusNote (KODA / drift)  
- [ ] SectionProgress groups: Start / Pick / Proof / Close  
- [ ] Build gate  

### Fala 2 — Pain expansion
- [ ] Dodać `pain-ops-blind` → `/results/jadzia-coi/`  
- [ ] Dodać `pain-drift` → owner-ecosystem `#why-vcms`  
- [ ] Opcjonalnie: Pain highlight via shared intent (bez drugich chipów)  
- [ ] Build gate  

### Fala 3 — Jadzia Spearhead
- [ ] Content `JADZIA_SPEARHEAD` w `conversion-copy.ts`  
- [ ] Przepiąć / rename `SpearheadSpotlight` na Jadzia (asset: workflow-map lub architecture)  
- [ ] Fix `videoKey` misbind na jadzia module  
- [ ] CTA → `/results/jadzia-coi/` + Book Map  
- [ ] Build gate  

### Fala 4 — VCMS strip + Wizard demotion
- [ ] Nowy `VcmsTrustStrip` (screenshot/video + 3 bullets)  
- [ ] Compact `WizardPlusVisualizer` (try wizard + Design Intake PARTIAL links)  
- [ ] `HOME_ROW_KEYS` → jadzia, flex-vcms, zzpackage, agent-os  
- [ ] Build gate  

### Fala 5 — Nav / solutions sync
- [ ] `SOLUTIONS_NAV`: Ops Command Layer (badge Pearl / Operate) + href results lub nowy solution page  
- [ ] Footer sync  
- [ ] IntentRouter: zostawić na `/solutions/` jako mirror lub skrócić  
- [ ] Build + handoff + ship na komendę  

### Definition of Done (implementacja)
- Home: chipy intent widoczne  
- Home: Jadzia = Live proof #1  
- Home: VCMS w routerze + strip  
- Wizard + Visualizer secondary  
- Canon §3 = v5 i zgodny z `page.tsx`  
- Build zielony  

---

## 7. Ryzyka / honesty

| Ryzyko | Mitigacja |
|--------|-----------|
| Cold SMB oczekuje „quote first” | PainGrid nadal quote-first; Map CTA w hero; Jadzia = ops pearl nie zastępuje Map |
| Brak screenshotu cockpit Jadzia | Start: workflow-map / architecture; backlog: capture cockpit |
| Dwa routery = cognitive load | Chipy tylko przy IntentRouter; Pain bez chipów |
| Canon drift (Wizard spearhead w wielu docs) | Jedna sesja amend listy plików w §6 |

---

*Research complete — gotowe do zatwierdzenia inventory i sesji implementacji v5.*
