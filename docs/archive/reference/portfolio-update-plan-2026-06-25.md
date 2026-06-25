---
status: "[ACTIVE]"
title: "Portfolio Update Plan — Quietforge × FlexGrafik Ecosystem Truth"
date: "2026-06-25"
owner: "Norbert Wozniak (Dowódca)"
executor: "services repo agent"
deadline: "2026-06-25 (LinkedIn launch)"
canonical_truth: "flexgrafik-meta/docs/core/ (snapshot 2026-06-24)"
live_url: "https://quietforge.flexgrafik.nl/"
---

# Portfolio Update Plan — Quietforge

> **CO:** Zaktualizować quietforge.flexgrafik.nl tak, aby prezentował **prawdziwy** ekosystem FlexGrafik 2026-06-24 — z uczciwym podziałem LIVE vs PLANNED — gotowy pod LinkedIn jutro.  
> **DLACZEGO:** Strona miesza produkt B2B (Inbox Killer spearhead) z rzeczywistością kodu (Wizard Cash Engine, Jadzia ~35% COI, portal chat = generic sales). Inwestor i klient SMB widzą **inny system** niż ten udokumentowany w `flexgrafik-meta`.  
> **NASTĘPNY KROK:** Agent w repo `services` wykonuje P0 według `AGENT-IMPLEMENTATION-PROMPT.md`.

---

## 0. Root cause — dlaczego poprzedni agent się zaciął

| Przyczyna | Dowód | Fix na przyszłość |
|-----------|-------|-------------------|
| **Glob `**/*` na repo services** | Timeout ~680s — skanuje `node_modules/`, `.next/` (~100k+ plików) | Używać `Get-ChildItem` top-level lub `glob` z wykluczeniem `node_modules` |
| **WebFetch MCP** | Timeout równoległy z globem | `Invoke-WebRequest -TimeoutSec 15` w PowerShell działa (121KB HTML w ~3s) |
| **Subagent `explore` + readonly** | Nie mógł zapisać plików planu; utknął w pętli odczytu | Plan pisze parent agent; implementacja = osobny agent w `services` |
| **Multitask end-turn** | Parent zakończył turę bez fallbacku gdy worker nie wrócił | Zawsze mieć timeout + ręczny fallback (ten dokument) |

---

## 1. Executive summary

Quietforge (repo `services`, domena `quietforge.flexgrafik.nl`) to **Next.js 16 B2B portfolio** pozycjonujące Norberta jako Conversion Systems Architect. Wizualnie i strukturalnie strona jest **zaawansowana** (8-repo map, VCMS, Agent OS, case studies) — ale **treść architektury i roli modułów jest nieaktualna względem kanonu `flexgrafik-meta/docs/core/` z 2026-06-24**.

### Najgroźniejsze kłamstwa (świadome lub nie) na stronie dziś

1. **jadzia-core = „Inbox Killer spearhead"** + „orders, jadzia.db" — kod to WP SSH agent + `customer_agent` chat; brak `order_node`, brak WC webhook.
2. **Portal „chat assistant"** — sugeruje inteligentną kwalifikację; AS-IS = ten sam `customer_agent` co Wizard (`verification-audit.md` GAP-V01).
3. **Wizard „9 steps"** na home vs **„7 steps"** na `/results/owner-ecosystem/` — wewnętrzna sprzeczność + rozjazd ze strategią biznesową.
4. **Brak LOS** (Living Operating System) — inwestor widzi SMB pipeline, nie governance-first architekturę z `living-system-architecture.md`.
5. **Brak tabeli Built vs Planned** — wymagana przez `investor-vision-angel.md` i `traction-honesty-framework.md`.

### Co jest OK (nie psuć)

- Pozycjonowanie Quietforge / Conversion Systems Architect
- Model two-brand (Quietforge deploys → FlexGrafik runs) — zgodny z audytem 2026-06-23 DECISION B
- Agent OS case study (5-node LangGraph, hybrid VPS) — zgodny z AS-IS ~90%
- VCMS governance narrative — zgodny (Conflicts: 0)
- Gamified lead system / app case study — zgodny ~85%
- Design system, PROVEN/DEMO/PLANNED labels w `proof.ts`

---

## 2. AS-IS audit — live site (2026-06-25)

**Źródło:** `Invoke-WebRequest https://quietforge.flexgrafik.nl/` + kod `src/content/*.ts`

### 2.1 Homepage — co mówi dziś

| Sekcja | Treść live | Problem |
|--------|------------|---------|
| Hero | „8-repo ecosystem · VCMS governance" | OK |
| Hero terminal | `9 steps · 200+ SKUs · scored leads` | Wizard steps: kod mówi 9, strategia 7 — trzeba ujednolicić z wyjaśnieniem |
| Pipeline (8 kroków) | Visitor→…→Client (SMB funnel) | To jest **lejek klienta**, nie **architektura ekosystemu** — mylące dla LinkedIn tech audience |
| Intent Router | 8 modułów produktowych | Mapowanie repo błędne (patrz §3) |
| Spearhead | **Inbox Killer** | Priorytet ekosystemu = **Wizard Cash Engine** + Jadzia COI (nie Inbox jako rdzeń jadzia-core) |
| Owner ecosystem teaser | VCMS + Agent OS | OK kierunek |
| Metrics | „5 systems live" | Definicja niejasna; brak etykiet LIVE/PLANNED |
| Results | Agent OS, Inbox, Wizard, Game | OK struktura |

### 2.2 `/results/owner-ecosystem/` — rozjazdy wewnętrzne

| Element | Tekst live | Kanon AS-IS |
|---------|------------|-------------|
| Flow 01 Entry | „portal + **chat assistant** routes visitors" | Chat = generic sales (`customer_agent`), nie qualification |
| Flow 02 Revenue | „**7 steps**" wizard | `proof.ts` + hero = **9 steps** |
| Flow 04 Operations | „jadzia-core — **orders**, automation, **jadzia.db**" | Orders PLANNED; jadzia.db bez order ingestion |
| Repo #3 | „**Inbox Killer — spearhead**" | jadzia-core repo = AI backend; Inbox Killer = **oferta B2B**, nie to co repo robi w prod |
| Repo #6 | „Portal / web upgrade" | flexgrafik.nl = trust portal; TO-BE = Portal Qualification Agent |
| Repo #8 | „Observability" → agent-os-ui | OK rola; źle przypisany w `ecosystem.ts` do modułu „Maintenance" |

### 2.3 Pliki źródłowe — mapa prawdy

| Plik | Rola | Stan |
|------|------|------|
| `src/content/ecosystem.ts` | SSoT modułów/repo | **Wymaga P0 sync** |
| `src/content/proof.ts` | Metryki, claims | **Wymaga P0 sync** |
| `src/content/conversion-copy.ts` | Copy home | Review P0 |
| `src/app/results/owner-ecosystem/page.tsx` | Architektura map | **Wymaga P0 rewrite** |
| `brain.md` §3 | „Zero LangGraph, zero repo" | **STALE** — sprzeczne z live site |
| `docs/strategy/*` | Marketing canon | Review po P0 |

---

## 3. TO-BE — co strona MUSI mówić (kanon 2026-06-24)

### 3.1 Trzy mózgi (z `ecosystem-blueprint.md`)

| Mózg | System | Rola na portfolio |
|------|--------|-------------------|
| **Governance** | VCMS + flexgrafik-meta | Immunologia — scan, conflicts, rules |
| **Business COI** | Jadzia (jadzia-core) | Sense→Think→Act loop (TO-BE); dziś: chat + WP agent (LIVE) |
| **Engineering** | Agent OS + agent-os-ui | Weryfikacja i kod po HITL |

### 3.2 Osiem repo — uczciwe opisy (EN, client-facing)

| # | Repo | Rola AS-IS (LIVE) | TO-BE (oznaczone) |
|---|------|-------------------|-------------------|
| 1 | zzpackage | Wizard Cash Engine, Mollie checkout ~90% | Order webhook → Jadzia |
| 2 | app.flexgrafik.nl | Lead magnet game + wizard bridge ~85% | TikTok attribution loop |
| 3 | jadzia-core | WP SSH agent + sales chat widget ~35% vs COI vision | COI nodes: order, lead, analytics |
| 4 | agent-os | LangGraph 5-node HITL pipeline ~90% | Spawn from Jadzia Planner |
| 5 | flex-vcms | Ecosystem scan, governance ~85% | Business roles in UI |
| 6 | flexgrafik-nl | Trust portal + CTAs ~75% | Portal Qualification Agent (post-angel) |
| 7 | flexgrafik-meta | Constitution + investor docs | Living docs SSoT |
| 8 | agent-os-ui | Mission Control dashboard ~85% | Ops cockpit (nie COI dashboard) |

### 3.3 Dwa poziomy narracji (nie mieszać)

| Poziom | Odbiorca | Co pokazujemy |
|--------|----------|---------------|
| **A — SMB buyer** | ZZP NL | Pipeline: pain → Automation Map → moduł → HITL |
| **B — Investor / tech** | LinkedIn, angel | LOS diagram, Built vs Planned, demo links, AI economics link |

Strona musi mieć **wyraźny most** między A i B (np. sekcja „Building something bigger?" → `/results/owner-ecosystem/` + nowa sekcja „Architecture truth").

### 3.4 Linki live demo (obowiązkowe P0)

| Demo | URL |
|------|-----|
| Wizard | https://zzpackage.flexgrafik.nl/ |
| Game | https://app.flexgrafik.nl/ |
| Portal | https://flexgrafik.nl/ |
| Mission Control | https://os.flexgrafik.nl/ (lub aktualny URL z agent-os-ui) |

---

## 4. Gap matrix

| ID | Lokalizacja | Current | Required | Sev | Task |
|----|-------------|---------|----------|-----|------|
| GAP-01 | `ecosystem.ts` repo #3 | Inbox Killer spearhead | Jadzia COI (LIVE: chat+WP agent; TO-BE: COI nodes) | **P0** | PF-01 |
| GAP-02 | `owner-ecosystem/page.tsx` flow 04 | orders, jadzia.db live | Honest: PLANNED order_node; LIVE widget+SSH | **P0** | PF-02 |
| GAP-03 | `owner-ecosystem` flow 01 | chat assistant routes | AS-IS: generic sales chat; TO-BE: qualification agent | **P0** | PF-02 |
| GAP-04 | `proof.ts` vs owner page | 9 vs 7 wizard steps | Jedna liczba + footnote (UI screens vs business steps) | **P0** | PF-03 |
| GAP-05 | Home `SystemArchitecture` | SMB 8-step only | Dodać LOS teaser lub link + nie mylić z repo arch | **P0** | PF-04 |
| GAP-06 | Brak sekcji | — | Built vs Planned table (8 modułów) | **P0** | PF-05 |
| GAP-07 | `SpearheadSpotlight` | Inbox Killer only | Wizard Cash Engine jako proof #1; Inbox jako produkt B2B | **P0** | PF-06 |
| GAP-08 | `ecosystem.ts` m8 | AI Advisory | Trust Portal; qualification PLANNED | **P1** | PF-07 |
| GAP-09 | `ecosystem.ts` m7 | Maintenance → agent-os-ui | Mission Control / Observability | **P1** | PF-07 |
| GAP-10 | `proof.ts` workflowSteps:7 | „jadzia pipeline" | Agent OS = 5 nodes; jadzia ≠ 7-step workflow | **P0** | PF-03 |
| GAP-11 | Investor path | brak | Link do investor pack / architecture docs | **P1** | PF-08 |
| GAP-12 | `brain.md` §3 | zero LangGraph | Mark STALE; pointer do strategy v2 | **P1** | PF-09 |
| GAP-13 | OG/meta | generic | Update po copy P0 | **P1** | PF-10 |
| GAP-14 | `metrics.systemsLive` | „5" bez definicji | Tabela 8 repo z % readiness | **P0** | PF-05 |
| GAP-15 | Case study ordering | Inbox #1 | Owner ecosystem / Wizard first dla LinkedIn | **P1** | PF-11 |

---

## 5. Fazy wdrożenia

### Phase P0 — Jutro LinkedIn (4–6h agent work)

Wszystkie taski PF-01 … PF-06 + PF-03 + PF-05. Deploy manual (Zasada 11).

### Phase P1 — Tydzień 1

PF-07 … PF-11, OG tags, brain.md cleanup.

### Phase P2 — Post-angel

Video slots fill, investor PDF export, VCMS repos.yaml decision.

---

## 6. Task breakdown (z DoD)

### PF-01 — Napraw mapowanie jadzia-core w ecosystem manifest

| Pole | Wartość |
|------|---------|
| **Pliki** | `src/content/ecosystem.ts`, `src/content/proof.ts` (jeśli metryki) |
| **Zmiana** | Repo #3: `role: 'Chief Operating Intelligence (COI)'` z sublabel `LIVE: sales chat + WP agent · TO-BE: order/lead/analytics nodes`. Usuń `flagship: true` dla Inbox lub przenieś flagship na zzpackage. Moduł m3 (Inbox Killer) zostaje jako **produkt B2B** z `repoKey` opcjonalnie `jadzia-core` ale z disclaimerem w opisie. |
| **Copy EN (propozycja)** | *"Jadzia — business operating intelligence. Today: supervised WP automation and wizard chat. Roadmap: unified orders, leads and analytics in one COI loop."* |
| **Zależności** | Brak |
| **Ryzyko** | Zbyt techniczny copy — balansuj z `conversion-copy.ts` tone |
| **DoD** | [ ] `ECOSYSTEM_REPOS[2].role` nie zawiera „Inbox Killer spearhead" [ ] `grep -r "Inbox Killer — spearhead" src/` = 0 hits [ ] Owner ecosystem page używa danych z `ecosystem.ts` (nie hardcode) [ ] `npm run build` exit 0 |

---

### PF-02 — Rewrite owner-ecosystem flow + honesty labels

| Pole | Wartość |
|------|---------|
| **Pliki** | `src/app/results/owner-ecosystem/page.tsx` |
| **Zmiana** | `FLOW_STEPS` sync z kanonem: Entry (portal, generic chat LIVE / qual PLANNED), Revenue (wizard + steps footnote), Leads (game), Operations (Jadzia COI honest), Execution (Agent OS), Supervision (VCMS). Każdy krok: badge `LIVE` / `PARTIAL` / `PLANNED`. |
| **Copy EN flow 04** | *"jadzia-core — COI layer. Live today: WordPress SSH agent and wizard sales chat. Planned: order ingestion, lead unification, weekly strategy brief."* |
| **Zależności** | PF-01 |
| **DoD** | [ ] Brak twierdzenia „orders live" bez badge PLANNED [ ] Portal chat opisany jako generic sales (nie qualification) [ ] Flow steps czytają z shared constant (np. `src/content/owner-ecosystem.ts` nowy plik) [ ] Mobile layout OK na 375px [ ] `npm run build` exit 0 |

---

### PF-03 — Ujednolicenie metryk wizard + workflow

| Pole | Wartość |
|------|---------|
| **Pliki** | `src/content/proof.ts`, `src/components/home/HeroSection.tsx`, `owner-ecosystem/page.tsx` |
| **Zmiana** | `metrics.wizardSteps`: użyć `"9"` z `footnote: "9 UI screens; 7 business decision stages"` LUB zmienić na `"7+2"` — **decyzja:** zostaw 9 jako UI truth, dodaj `wizardBusinessSteps: "7"` i używaj konsekwentnie. `workflowSteps`: zmień label z jadzia na `agentOsNodes: "5"`; usuń mylące `workflowSteps: "7"`. |
| **Zależności** | Brak |
| **DoD** | [ ] Hero i owner-ecosystem używają tych samych kluczy z `proof.ts` [ ] Brak sprzeczności 7 vs 9 bez footnote [ ] SystemMetrics komponent pokazuje poprawne labele [ ] Build pass |

---

### PF-04 — LOS architecture section (investor bridge)

| Pole | Wartość |
|------|---------|
| **Pliki** | Nowy: `src/components/home/LivingSystemTeaser.tsx`, `src/content/los-copy.ts`, `src/app/page.tsx` (import po SystemArchitecture lub w OwnerEcosystemTeaser) |
| **Zmiana** | Sekcja `// architecture_truth` z 5 warstwami LOS (Sense, Think, Orchestrate, Act, Guard) — skrót z `living-system-architecture.md`. CTA: *"See full owner ecosystem map →"*. Podtytuł: *"Governance-first — not autonomous AI."* |
| **Zależności** | PF-02 |
| **DoD** | [ ] Sekcja widoczna na home między SystemArchitecture a IntentRouter [ ] `data-home-section="los-teaser"` dla testów [ ] 5 warstw LOS nazwanych [ ] Link do `/results/owner-ecosystem/` [ ] `prefers-reduced-motion` respected [ ] Build pass |

---

### PF-05 — Built vs Planned table + readiness metrics

| Pole | Wartość |
|------|---------|
| **Pliki** | Nowy: `src/content/readiness.ts`, `src/components/home/BuiltVsPlanned.tsx`, update `SystemMetrics.tsx` |
| **Zmiana** | Tabela 8 repo z kolumnami: Module, LIVE %, Key capability, Status badge. Dane z `as-is-inventory.md` §1. Zastąp mylące `systemsLive: "5"` czytelną metryką: *"8 repos · 6 production-touching · COI roadmap active"*. |
| **Zależności** | PF-01 |
| **DoD** | [ ] 8 wierszy zgodnych z meta AS-IS [ ] Brak fabricated MRR/revenue [ ] Badge LIVE/PARTIAL/PLANNED na każdym [ ] Sekcja na home lub owner-ecosystem (minimum: owner-ecosystem) [ ] Build pass |

---

### PF-06 — Spearhead rebalance (Wizard first)

| Pole | Wartość |
|------|---------|
| **Pliki** | `src/components/home/SpearheadSpotlight.tsx`, opcjonalnie `src/content/conversion-copy.ts` |
| **Zmiana** | Opcja A (minimal): dodać nad Inbox blok *"Proof stack #1: Wizard Cash Engine — live checkout"*. Opcja B (recommended): zamienić spearhead na **Wizard + Cash Engine** z CTA `Try the wizard (2 min)`; Inbox Killer przenieść do Pain Grid / Solutions bez „spearhead" w hero flow. |
| **Zależności** | PF-03 |
| **DoD** | [ ] Pierwszy „spearhead" na home odnosi się do zzpackage LIVE [ ] CTA do https://zzpackage.flexgrafik.nl/ [ ] Inbox Killer nadal dostępny w Solutions [ ] Build pass |

---

### PF-07 — Fix module cards m7/m8 (P1)

| Pole | Wartość |
|------|---------|
| **Pliki** | `src/content/ecosystem.ts`, routes w `src/lib/constants.ts` |
| **Zmiana** | m7: `Mission Control (Observability)` → agent-os-ui. m8: `Trust Portal` → flexgrafik-nl. |
| **DoD** | [ ] Intent Router pokazuje poprawne nazwy [ ] Linki `/results/` działają [ ] Build pass |

---

### PF-08 — Investor / architecture links (P1)

| Pole | Wartość |
|------|---------|
| **Pliki** | `src/app/results/owner-ecosystem/page.tsx`, `src/app/founder/page.tsx` lub footer |
| **Zmiana** | Blok *"For investors & technical partners"* z linkami zewnętrznymi do publicznych demo + tekst *"Architecture documentation available on request"* (nie linkuj prywatnego repo). Opcjonalnie: `/architecture` static page z LOS mermaid jako SVG w `/public/`. |
| **DoD** | [ ] Sekcja investor visible on owner-ecosystem [ ] 4 demo links działają (HTTP 200) [ ] Brak linków do prywatnych ścieżek lokalnych |

---

### PF-09 — brain.md stale marker (P1)

| Pole | Wartość |
|------|---------|
| **Pliki** | `brain.md` |
| **Zmiana** | §3 Track 4: oznacz **SUPERSEDED 2026-06-25** — site teraz pokazuje ecosystem proof z kontekstem B2B. |
| **DoD** | [ ] §3 ma banner STALE [ ] Pointer do `docs/strategy/marketing-strategy.md` |

---

### PF-10 — OG/meta refresh (P1)

| Pole | Wartość |
|------|---------|
| **Pliki** | `src/app/page.tsx`, `src/app/results/owner-ecosystem/page.tsx`, `/public/og/*.svg` |
| **Zmiana** | OG description mention: *"8-repo governed ecosystem · Wizard live · honest built vs planned"*. |
| **DoD** | [ ] `og:description` updated [ ] Twitter card match [ ] Build pass |

---

### PF-11 — Case study order (P1)

| Pole | Wartość |
|------|---------|
| **Pliki** | `src/lib/case-studies.ts`, `src/components/home/ResultsTeaser.tsx` |
| **Zmiana** | Owner ecosystem + Sales Funnel przed Inbox Killer w teasers. |
| **DoD** | [ ] Home results teaser order updated [ ] Build pass |

---

## 7. Content blocks — gotowe fragmenty EN (do wklejenia)

### 7.1 Hero proof line (replace `HERO.proofLine` candidate)

```
Quietforge deploys the same governed stack that runs FlexGrafik — my registered company. Wizard checkout, game leads, portal, Agent OS and VCMS supervision are live; COI automation is on the roadmap with human gates throughout.
```

### 7.2 Built vs Planned — nagłówek

```
// honesty_gate
What is live today vs what is on the roadmap. No inflated metrics — evidence from production code and governance scans (Conflicts: 0).
```

### 7.3 Portal chat disclaimer

```
The homepage chat is a supervised sales assistant (shared with the wizard). A dedicated industry qualification agent is planned — discovery first, checkout in the wizard.
```

### 7.4 Jadzia one-liner

```
Jadzia is the Chief Operating Intelligence layer — not a chatbot. Live: WP automation and wizard chat. Next: orders, leads and analytics in one governed loop.
```

---

## 8. SEO / meta / OG checklist

| Item | P0 | DoD |
|------|-----|-----|
| Title tag home | ✓ | Contains Quietforge + Conversion Systems |
| Meta description | ✓ | Mentions governed ecosystem + honest positioning |
| `og:image` | P1 | Reflects 8-repo not inbox-only |
| JSON-LD `sameAs` LinkedIn | P1 | AUD-L01 from remediation backlog |
| Canonical URL quietforge.flexgrafik.nl | ✓ | `SITE_URL` in constants |
| hreflang | — | N/A (EN only) |

---

## 9. Performance / a11y / mobile

| Check | Command / method | Pass criteria |
|-------|----------------|---------------|
| Build | `npm run build` | Exit 0, `dist/` generated |
| Lint | `npm run lint` | 0 errors |
| Typecheck | `tsc --noEmit` | 0 errors |
| Broken images | grep `src=` + curl each | 0 × 404 on home |
| axe (optional) | browser devtools | 0 critical |
| Mobile 375px | manual / Playwright | No horizontal scroll on home |

---

## 10. Deploy checklist (Zasada 11 — Dowódca only)

```powershell
Set-Location C:\Users\FlexGrafik\FlexGrafik\github\services
npm run build
# Dowódca: review dist/ locally (npx serve dist)
# Dowódca: git commit + push → Vercel auto deploy
# Smoke po deploy:
# - https://quietforge.flexgrafik.nl/
# - https://quietforge.flexgrafik.nl/results/owner-ecosystem/
# - Wizard CTA → zzpackage.flexgrafik.nl
```

**Rollback:** `git revert <commit>` + push; Vercel instant rollback do poprzedniego deploymentu.

---

## 11. Blockers — wymagają Dowódcy przed/po P0

| ID | Pytanie | Default jeśli brak odpowiedzi |
|----|---------|-------------------------------|
| BL-01 | Mission Control URL publiczny? | Użyj `os.flexgrafik.nl` lub ukryj link do potwierdzenia |
| BL-02 | Spearhead: Wizard czy Inbox? | **Wizard** (kanon Cash Engine priority) |
| BL-03 | Czy pokazywać % readiness na stronie? | Tak — z meta AS-IS inventory |
| BL-04 | Traction numbers (leads/orders)? | **Nie** — unless Dowódca fills `traction-honesty-framework.md` |

---

## 12. Metryki sukcesu planu

1. LinkedIn post może linkować do `/results/owner-ecosystem/` bez wstydu
2. Zero twierdzeń „orders live" / „qualification agent live" bez badge
3. 7 vs 9 wizard steps wyjaśnione w jednym miejscu
4. Jadzia = COI framing, Inbox = product offer
5. LOS widoczny dla tech audience
6. Build + deploy smoke PASS

---

## Changelog

| Data | Zmiana |
|------|--------|
| 2026-06-25 | Initial plan — ecosystem truth sync for LinkedIn launch |
