# PLAN DZIAŁANIA PER REPO (Proof Capture)

**Ostatnia aktualizacja:** 2026-06-15  
**Manifest:** `src/content/proof.ts` · **Assety:** `public/gratka/`  
**Legenda:** ✅ GOTOWE (Agent) · 🔶 CZĘŚCIOWE · ⏳ DOWÓDCA · ❌ BLOKADA

---

## STATUS GLOBALNY

| Kategoria | Gotowe | Czeka na Dowódcę |
|---|---|---|
| Screenshots (`screens`) | **8 / 9** | `auditLog` |
| Wideo (`videos`) | **0 / 7** | Wszystkie Loomy |
| Metryki (`metrics`) | **11 / 11** | — |
| Case measurements | **4 / 4** | — |
| Pricing (`pricing`) | **1 / 4** | `singleSystem`, `ecosystem`, `maintenance` |

---

## REPO 1: flex-vcms (The Governance Layer)

**Slot:** `screens.vcmsDashboard` · `videos.vcms`

### ✅ AGENT — ZROBIONE
- [x] Uruchomiono VCMS Gateway (`localhost:8001`)
- [x] Screenshot dashboardu → `public/gratka/vcms-dashboard.png`
- [x] `proof.ts` → `vcmsDashboard.ready: true`

### ⏳ DOWÓDCA
- [ ] Loom `videos.vcms` (75s): `vcms-scan.js`, konflikty między modułami
- [ ] Wklej embed URL + `ready: true` w `proof.ts`

---

## REPO 2: agent-os-ui (Admin Dashboard & Observability)

**Slot:** `screens.adminDashboard`

### ✅ AGENT — ZROBIONE
- [x] Dev server UI (`localhost:3000`)
- [x] Screenshot panelu tasków/logów → `public/gratka/admin-dashboard.png`
- [x] `proof.ts` → `adminDashboard.ready: true`

### ⏳ DOWÓDCA (opcjonalnie)
- [ ] Uruchom realny task w Agent OS, odśwież screen z żywymi logami (lepszy dowód niż dummy data)

---

## REPO 3: agent-os (Multi-agent workforce)

**Slot:** `screens.agentCards` · `screens.workflowMap` · `videos.agentOs`

### ✅ AGENT — ZROBIONE
- [x] `agent-cards.png` — karty agentów z Mission Control UI (dummy data w dev)
- [x] `workflow-map.png` — render z `orchestrator-architecture.svg` (prawdziwy artefakt architektury LangGraph)
- [x] `proof.ts` → `agentCards.ready: true`, `workflowMap.ready: true`

### ⏳ DOWÓDCA
- [ ] Loom `videos.agentOs` (60s): task przez pipeline Planner→Coder→Tester→Reviewer
- [ ] (Opcjonalnie) Zamień `workflow-map.png` na screen z live LangGraph UI, jeśli dostępny

---

## REPO 4: jadzia-core (Inbox Killer ★ spearhead)

**Slot:** `screens.inboxLanes` · `screens.auditLog` · `videos.inboxKiller`

### 🔶 AGENT — CZĘŚCIOWE
- [x] `inbox-lanes.png` — render z `inbox-killer-flow.svg` (prawdziwy diagram: lead/client/invoice/noise + HITL gate)
- [x] `proof.ts` → `inboxLanes.ready: true`
- [ ] `audit-log.png` — **brak lokalnej bazy `jadzia.db`** w workspace; nie wymyślaj

### ⏳ DOWÓDCA
- [ ] Screenshot logów SQLite (`jadzia.db`) lub panelu audytu z VPS
- [ ] Loom `videos.inboxKiller` (60s): Telegram → draft → Git Diff → naciśnij TAK
- [ ] `auditLog.ready: true` po wrzuceniu PNG

---

## REPO 5: zzpackage.flexgrafik.nl (Sales Funnel / Wizard)

**Slot:** `screens.wizardCheckout` · `videos.wizard`

### ✅ AGENT — ZROBIONE
- [x] Live capture z `https://zzpackage.flexgrafik.nl/wizard/` — 9-step stepper + koszyk €249 + €301,29 incl. BTW
- [x] `public/gratka/wizard-checkout.png`
- [x] `proof.ts` → `wizardCheckout.ready: true`

### ⏳ DOWÓDCA
- [ ] Zweryfikuj stawki w wizardzie przed publikacją (min. €199 floor)
- [ ] Loom `videos.wizard` (45s): ścieżka klienta do checkoutu

---

## REPO 6: app.flexgrafik.nl (Lead Magnet Game)

**Slot:** `screens.leadMagnet` · `videos.leadMagnet`

### ✅ AGENT — ZROBIONE
- [x] Live capture z `https://app.flexgrafik.nl/` — landing gry + CTA „Speel de game"
- [x] `public/gratka/lead-magnet.png`
- [x] `proof.ts` → `leadMagnet.ready: true`

### ⏳ DOWÓDCA
- [ ] (Opcjonalnie) Zamień na screen z momentu email capture / leaderboard po wygranej
- [ ] Loom `videos.leadMagnet` (45s): gameplay → win → kod rabatowy

---

## REPO 7: flexgrafik-nl (Portal Customer-facing)

**Slot:** `screens.portalAssistant`

### 🔶 AGENT — CZĘŚCIOWE
- [x] Live capture z `https://flexgrafik.nl/` — customer-facing portal hero
- [x] `public/gratka/portal-assistant.png`
- [x] `proof.ts` → `portalAssistant.ready: true`
- [ ] Chat-widget (`chat-widget.js`) nie załadował się w sesji capture — brak dowodu asystenta

### ⏳ DOWÓDCA
- [ ] Screenshot z otwartym chat-widgetem (kwalifikacja klienta)
- [ ] Zamień PNG, jeśli widgetowy screen jest lepszy

---

## REPO 8: flexgrafik-meta + services (Metodologia & Całość)

**Slot:** `videos.ecosystem` · `videos.founder` · `pricing.*` · `caseMeasurements`

### ✅ AGENT — ZROBIONE (kod + manifest)
- [x] `caseMeasurements` → wszystkie `ready: true` (tekst z kodu, nie fantazja)
- [x] `metrics` → wypełnione z `docs/13_DANE_PER_REPO_GOTOWE.md`
- [x] Komponenty Fazy 2/3: `SystemMetrics`, `BehindTheScenes`, `VideoSlot`, `PricingSection` na home
- [x] Build produkcyjny przechodzi (`npm run build`)

### ⏳ DOWÓDCA
- [ ] Loom `videos.ecosystem` (90s): lot ptaka VCMS + Agent OS + mapa ekosystemu
- [ ] Loom `videos.founder` (120s, opcjonalnie)
- [ ] Finalne stawki w `pricing.singleSystem`, `pricing.ecosystem`, `pricing.maintenance`

---

## KOLEJNOŚĆ DLA DOWÓDCY (najwyższy ROI)

1. **Pricing** — wpisz widełki € w `proof.ts` (strona już renderuje placeholdery `[FILL]`)
2. **Loom inboxKiller** — najmocniejszy showcase sprzedażowy
3. **Loom ecosystem** — slot widoczny na home (`OwnerEcosystemTeaser`)
4. **audit-log.png** — screenshot z VPS/Telegram dla klientów regulowanych
5. Reszta Loomów per moduł

---

## DEPLOY

- **CD:** push do `master` → Vercel auto-deploy (`services.flexgrafik.nl`)
- **DNS:** jeśli domena własna nie działa, sprawdź A record `76.76.21.21` (Cyber-Folks)
- Po deploy: odśwież stronę — 8 screenów powinno zamienić szare placeholdery na realne obrazy
