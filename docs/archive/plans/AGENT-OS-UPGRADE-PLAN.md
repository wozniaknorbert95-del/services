# Agent OS — Upgrade Plan (Portfolio + Hybrid 24/7)

**Status:** DRAFT — do review przez zewnętrzną agencję, potem implementacja sesja-po-sesji w `agent-os`  
**Data:** 2026-06-17  
**Autor:** Senior AI System Architect (Cursor)  
**Audience:** Dowódca + agencja review + executor (OpenCode/Cursor)

> **Uwaga:** Nav/footer chrome plan: `docs/plans/2026-06-17-nav-footer-chrome-plan.md` (completed 2026-06-17). Agent OS as-is audit belongs in `agent-os/docs/audit/` when written.

---

## 1. Executive summary

**Cel produktu:** Agent OS = jedno narzędzie portfolio (orkiestracja + HITL), technicznie **dwa repo** (`agent-os` + `agent-os-ui`).

**Cel operacyjny:** System działa **24/7 na VPS** jako control plane; **małe taski** wykonują się na VPS; **duże taski** (kod, git, OpenCode, testy) uruchamiają się na **lokalnej stacji Dowódcy**, sterowane zdalnie z Mission Control.

**Wzorzec branżowy:** GitHub Actions (controller w chmurze) + self-hosted runner (Twój PC) — nie merge repo, nie „wszystko w Dockerze”.

**Stan dziś (MVP):** Graf LangGraph + HITL działa lokalnie (Windows + OpenCode). Prod compose istnieje, ale **nie obsługuje** pełnej egzekucji w kontenerze. Brak auth, README pusty, drift typów UI↔API.

**Poziom docelowy:** Portfolio jak VCMS — honesty labels (LIVE/DEMO/LOCAL-ONLY), diagram + wideo + screenshoty, udowodniony kontrakt API, demo script 60s.

---

## 2. Docelowy obraz — jak Agent OS ma działać

### 2.1 Jedno narzędzie, dwie warstwy runtime

```
┌─────────────────────────────────────────────────────────────────┐
│  VPS 24/7 — CONTROL PLANE (zawsze online)                        │
│  • FastAPI :8080 — API, kolejka, HITL state, audit log          │
│  • PostgreSQL — tasks + checkpoints (nie SQLite na prod)         │
│  • Mission Control UI :443 — approve/reject z telefonu/laptopa   │
│  • Auth (API key / Traefik middleware)                           │
│  • Worker registry — kto jest online (vps-worker, local-worker)│
└───────────────────────────┬─────────────────────────────────────┘
                            │ HTTPS (task dispatch, heartbeats)
        ┌───────────────────┴───────────────────┐
        ▼                                       ▼
┌───────────────────┐                 ┌───────────────────────────┐
│ VPS LIGHT WORKER  │                 │ LOCAL HEAVY WORKER         │
│ (w compose)       │                 │ (Windows, Twój PC)          │
│ • LLM-only tasks  │                 │ • OpenCode + git + testy     │
│ • plan / summarize│                 │ • pełne MODULE_PATHS         │
│ • read-only ops   │                 │ • Coder + Tester nodes       │
│ • małe taski <N   │                 │ • duże taski / multi-file    │
└───────────────────┘                 └───────────────────────────┘
```

### 2.2 Profile wykonania (task contract)

Każdy task ma `execution_profile`:

| Profile | Gdzie działa | Przykłady | Wymagania |
|---------|--------------|-----------|-----------|
| `vps` | VPS worker | Plan tekstowy, podsumowanie, analiza bez zapisu repo | Worker online na VPS |
| `local` | Stacja Dowódcy | Coder diff, pytest/npm test, commit, handoff | `local-worker` online + heartbeat <30s |
| `auto` | Router decyduje | Domyślny dla operatora | Reguły w `task_router.py` |

**Reguły `auto` (propozycja):**

- Zapis do repo / `target_file` / git → **wymusz `local`**
- Tylko LLM, brak modułu lub moduł `agent-os` (meta) → **`vps`**
- Moduł produktowy + diff → **`local`**
- Jeśli `local-worker` offline → status `WAITING_WORKER` (nie FAILED)

### 2.3 Graf LangGraph — podział węzłów

| Node | Runtime domyślny | Uzasadnienie |
|------|------------------|--------------|
| Planner | VPS | LLM + read context (sync z VCMS index opcjonalnie) |
| Coder | **LOCAL worker** | OpenCode, filesystem, git |
| Tester | **LOCAL worker** | npm/pytest w klonach repo |
| Reviewer (HITL) | VPS (state only) | Pauza; decyzja człowieka w UI |
| Summarizer | VPS lub LOCAL | Handoff file + commit → LOCAL jeśli git write |

Control plane **zawsze** trzyma prawdę o stanie taska — worker raportuje wyniki przez API.

### 2.4 Przepływ operatora (24/7)

1. Dowódca tworzy task w Mission Control (VPS) — z telefonu lub laptopa.
2. System przypisuje profil + kolejkuje.
3. **Mały task:** VPS worker kończy → opcjonalnie HITL → DONE.
4. **Duży task:** VPS Planner → job na kolejce `local` → PC Dowódcy (worker daemon) przejmuje → Coder/Tester → wraca diff na VPS → **REVIEWING** → approve w UI → Summarizer/commit lokalnie → status DONE na VPS.
5. Restart VPS / PC nie gubi taska (Postgres + worker requeue).

### 2.5 Granice (nie negocjować)

- **Zasada 11:** brak auto-deploy na produkcję klienta.
- **VCMS ≠ Agent OS:** governance scan vs execution/HITL (canon `agent-boundaries.md`).
- **Portfolio honesty:** każda capability ma label LIVE | DEMO | LOCAL-ONLY | VPS-ONLY.

---

## 3. Product Contract (portfolio-facing)

### 3.1 Nazwa i obietnica

**Agent OS** — *Graph-based task orchestration with human approval gates for multi-repo product work.*

**Skład produktu (jedna linia portfolio):**

> Backend orchestrator + Mission Control dashboard — two deployable parts, one operator experience.

### 3.2 Public capabilities (co możesz pokazać)

| Capability | Label docelowy | Dowód portfolio |
|------------|----------------|-----------------|
| Task queue + status lifecycle | LIVE | API + UI screenshot |
| HITL approve/reject | LIVE | Screenshot + 15s clip |
| Multi-repo targeting | LIVE (local) | Module list + 1 real handoff |
| 24/7 task intake | LIVE | VPS health + create from mobile |
| Remote heavy execution | LIVE | Local worker online indicator |
| Auto-deploy to client prod | **NOT OFFERED** | Zasada 11 w copy |

### 3.3 API contract (minimum portfolio-grade)

- Wersjonowane `/api/v1/*`
- OpenAPI publikowane + JSON Schema `TaskResponse`
- Endpointy worker protocol (nowe — sekcja 5)
- `GET /api/v1/modules` — jedna lista modułów (koniec driftu z UI)
- `GET /api/v1/workers` — status local/vps online
- Auth: `Authorization: Bearer` na wszystkich mutacjach

---

## 4. Definition of Done — Agent OS (portfolio)

Agent OS uznajemy za **portfolio-ready** gdy **wszystkie** punkty P0 są spełnione:

### P0 — Must ship

- [ ] **ADR-001** Execution model (control plane VPS + local worker) zatwierdzony na piśmie
- [ ] **README** (agent-os) — architektura, quickstart, link do Mission Control
- [ ] **PRODUCT.md** — contract §3 + honesty table
- [ ] VPS stack 24/7: compose + Postgres + restart policy + healthcheck
- [ ] **Auth** na API (min. bearer token; Traefik basic jako warstwa 2)
- [ ] **Local worker daemon** — instalowalny na Windows, heartbeat, pull jobs
- [ ] **Task profiles** — `vps` | `local` | `auto` w API i UI (pole formularza)
- [ ] **E2E bez LLM** — `verify_reject_flow.py` PASS w CI
- [ ] **E2E z LLM** — `e2e_smoke.py` PASS (manual lub scheduled)
- [ ] **Demo script 60s** — `docs/demo/OPERATOR-DEMO.md` (kroki nagrania)
- [ ] **Portfolio pack** — 3× SVG/PNG + 1× wideo ≤90s + case study sync (`/results/agent-orchestrator/`)

### P1 — Professional polish

- [ ] OpenAPI → generated TS types w agent-os-ui
- [ ] Aggregate history endpoint (koniec N+1)
- [ ] Coder `target_file` validation
- [ ] Audit log approve/reject (kto, kiedy, IP)
- [ ] `services.flexgrafik.nl` w MODULE_PATHS
- [ ] CORS restricted do UI domain

### P2 — Nice to have

- [ ] WebSocket log streaming
- [ ] Postgres checkpointer (LangGraph)
- [ ] VCMS context injection do Planner (read-only index)

---

## 5. Architektura techniczna — zmiany w agent-os

### 5.1 Nowe komponenty (repo `agent-os`)

| Komponent | Opis |
|-----------|------|
| `src/workers/registry.py` | Rejestr workerów, heartbeat, capabilities |
| `src/workers/router.py` | `execution_profile` → kolejka vps/local |
| `src/workers/local_protocol.py` | API: claim job, report progress, submit diff |
| `tools/local_worker.py` | Daemon Windows: poll VPS, run Coder/Tester lokalnie |
| `docs/adr/ADR-001-hybrid-execution.md` | Decyzja architektoniczna |
| `docs/PRODUCT.md` | Portfolio contract |
| `openapi.yaml` lub export z FastAPI | Kontrakt |

### 5.2 Nowe endpointy (propozycja)

| Method | Path | Rola |
|--------|------|------|
| GET | `/api/v1/modules` | Lista modułów + profile default |
| GET | `/api/v1/workers` | Workers online |
| POST | `/api/v1/workers/register` | Worker rejestracja (key) |
| POST | `/api/v1/workers/heartbeat` | Keep-alive |
| POST | `/api/v1/jobs/claim` | Worker pobiera job (local/vps) |
| POST | `/api/v1/jobs/{id}/progress` | Logi / status partial |
| POST | `/api/v1/jobs/{id}/complete` | Diff, test_result, artifacts |

Istniejące `/api/v1/tasks/*` pozostają — control plane API dla UI.

### 5.3 VPS 24/7 — compose docelowy

```
traefik + agent-os (API) + agent-os-ui + postgres + vps-worker (sidecar)
```

- Volume: `postgres_data`, `agent_os_data` (artefakty)
- **Nie** mount całego `C:\Users\...\github` na VPS
- Secrets: `OPENROUTER_API_KEY`, `AGENT_OS_API_KEY`, `WORKER_LOCAL_KEY`

### 5.4 Local worker — wymagania PC

- Windows 11, OpenCode na PATH, klony repo w `FLEXGRAFIK_ROOT`
- Usługa: `uv run python tools/local_worker.py` (startup przy logowaniu lub NSSM)
- Outbound HTTPS do VPS tylko — brak inbound portów na PC

---

## 6. Portfolio — wizualizacja (jak VCMS)

### 6.1 Co robimy (rekomendacja)

| Asset | Typ | Gdzie | Priorytet |
|-------|-----|-------|-----------|
| Architecture diagram | **SVG statyczny** (już częściowo: `orchestratorArchitectureSvg`) | `/results/agent-orchestrator/` | P0 |
| HITL flow (5 kroków) | **SVG animowany CSS** (jak VCMS intent colors) — nie nagrywać backendu | services case study | P0 |
| Mission Control screenshot | PNG/WebP z prawdziwego UI | proof.ts `adminDashboard` | P0 |
| Operator demo | **Nagranie ekranu 60–90s** (Mission Control + approve) — jak `vcms-demo.mp4` | `public/gratka/agent-os-demo.mp4` | P1 |
| Live backend animation | **NIE** na portfolio | — | Odrzucone |

### 6.2 Dlaczego nie „animacja backendu na żywo”

- LangGraph wewnętrznie ≠ zrozumiałe dla klienta SMB
- Ryzyko ujawnienia ścieżek, kluczy, logów
- VCMS standard: **statyczny dowód + ekran operatora + honesty label**
- Animacja = **uproszczony przepływ biznesowy** (Planner→Coder→Tester→Review→Ship), nie debug log

### 6.3 Copy parity z VCMS

Każdy asset w `proof.ts`:

```ts
caption: "... — LIVE on VPS | LOCAL worker for code | DEMO fixture"
```

---

## 7. Plan implementacji — sesje (1-1-1)

| Sesja | Repo | Cel | Exit criteria |
|-------|------|-----|---------------|
| **S1** | agent-os | ADR-001 + PRODUCT.md + README | Dowódca approve ADR |
| **S2** | agent-os | Auth middleware + OpenAPI + `/modules` | typecheck + smoke |
| **S3** | agent-os | Postgres + compose dev + health 24/7 | VPS health 7 dni |
| **S4** | agent-os | Worker registry + protocol (bez UI) | local_worker connects |
| **S5** | agent-os | Router profiles + WAITING_WORKER | auto→local gdy git |
| **S6** | agent-os | Integracja Coder/Tester z worker | e2e_smoke PASS |
| **S7** | services | Portfolio pack + case study update | build PASS |
| **S8** | agent-os-ui | Form profile + worker status + types z OpenAPI | *po backend S6* |

**Szacunek:** 6–8 sesji backend przed UI polish.

---

## 8. As-is gaps (z rekonesansu — input do agencji)

| ID | Gap | P0/P1 |
|----|-----|-------|
| G1 | README pusty | P0 |
| G2 | Brak auth | P0 |
| G3 | Windows-hardcoded MODULE_PATHS | P0 |
| G4 | Docker nie uruchomi OpenCode/graph | P0 — rozwiązane przez hybrid |
| G5 | SQLite na prod | P1 |
| G6 | Drift MODULES UI vs backend | P1 |
| G7 | CORS `*` | P1 |
| G8 | Brak `services` w module map | P1 |
| G9 | Coder target_file accuracy | P1 |
| G10 | Deploy docs stub | P0 dla VPS |

---

## 9. Pytania do zewnętrznej agencji (review checklist)

1. Czy hybrid control-plane + local worker to właściwy model dla 1-osobowego studia?
2. Czy worker protocol (claim/complete) wystarczy, czy od razu WebSocket?
3. Postgres vs SQLite — minimalny prod threshold?
4. Auth: API key vs OAuth2 device flow dla local worker?
5. Czy portfolio wideo 60s wystarczy vs interaktywny diagram?
6. Kolejność sesji S1–S8 — co przyspieszy time-to-portfolio?
7. Ryzyka prawne/AVG — logi tasków na VPS z diffami klientów?

---

## 10. Out of scope (ta faza)

- Merge `agent-os` + `agent-os-ui` w jedno repo
- Włożenie HITL do flex-vcms
- Auto-deploy na produkcję klienta
- Publiczny multi-tenant SaaS
- Pełna zamiana Hermes/OpenCode przez Agent OS

---

## 11. Następny krok dla Dowódcy

1. Przekaż **ten plik** agencji do review (sekcja 9).
2. Uzupełnij prawdziwy audyt as-is → `agent-os/docs/audit/2026-06-17-portfolio-readiness.md`.
3. Wróć z **ulepszonym planem** — wtedy Sesja S1 (ADR + README) w repo `agent-os`.

---

*Plan przygotowany na podstawie: SESSION-ANCHOR, faza5 handoff, VCMS agent-boundaries, infra/prod compose, rekonesans ekosystemu 2026-06-17.*
