# Site Map — services.flexgrafik.nl (BINDING)

**Version:** 1.0  
**Status:** Canonical — single source for home layout, 8-repo map, intent colors, routes  
**Supersedes:** `Tak to ma być/Mapa Strony Filar 2.md` for implementation order (Filar 2 remains reference for copy tone)  
**Vision reference:** [inspiracja pro.md](../../inspiracja%20pro.md) (BLOKI 1–15)

> Agents: do not change `src/app/page.tsx` without updating **§2** in this file in the same session.

---

## §1 Site goal

> **"Can this person design and deploy a system that improves my business?"**

**Positioning:** Conversion Systems Architect — see [marketing-strategy.md §2](./marketing-strategy.md).

**Page arc (every money page):** Problem → System → Effect — never Feature → Feature → Feature.

---

## §2 HOME — section order (LOCKED)

| # | Section | Component | Inspiracja | Funnel job |
|---|---------|-----------|------------|------------|
| 1 | Hero | `HeroSection` | BLOK 2 | Who / for whom / outcome / proof line / L3 CTA |
| 2 | System pipeline | `SystemArchitecture` | BLOK 7, 10 | Visitor → Client education |
| 3 | Intent router | `IntentRouter` | BLOK 7, 8, 15 | 8 modules + 5 intent colors |
| 4 | Pain grid | `PainGrid` | BLOK 1 | Pain recognition → solution link |
| 5 | Spearhead | `SpearheadSpotlight` | Filar 2 | Inbox Killer = start here |
| 6 | Ecosystem map | `OwnerEcosystemTeaser` | 8 repos | 8 repos · 1 supervised system |
| 7 | Metrics | `SystemMetrics` | BLOK 8 | Numbers from `proof.ts` + intent colors |
| 8 | Results teaser | `ResultsTeaser` | BLOK 3, 12 | Problem → System → Effect cards |
| 9 | Behind the scenes | `BehindTheScenes` | BLOK 6 | VCMS + screens from manifest |
| 10 | How I work | `HowIWork` | REPO 7 | Map → Hand over |
| 11 | Trust & objections | `TrustAndObjections` | BLOK 6, 8 | HITL/EU/AVG cards + 4 named objections (`data-home-section`: `trust-safety`, `why-this-works`) |
| 12 | Pricing | `sections/Pricing` | BLOK 13 | 4 tiers + L3 |
| 13 | Final CTA | `FinalCtaBand` | BLOK 13 | Single L3 close |

**Chrome (not numbered sections):** `SectionProgress` (left rail + mobile scroll bar), `StickyCta` (mobile).

### Forbidden on home (until explicit decision)

| Item | Reason |
|------|--------|
| `EcosystemVideo` | Video placeholders read as unfinished — videos are last phase |
| Second hero rewrite | Positioning locked in `conversion-copy.ts` |
| AI Systems Architect label | Superseded by Conversion Systems Architect |

### Home contracts

- One L3 above fold (hero primary = Book Automation Map)
- Minimum two proof sections before second L3
- `IntentRouter` routes to proof routes, not only pricing
- Every module/pain/case card: ≥1 intent color badge (§4)

---

## §3 Eight repos (binding)

Data source: `src/content/ecosystem.ts` → `ECOSYSTEM_REPOS`

| # | Repo key | Role | Intent colors | Screen key | Proof route |
|---|----------|------|---------------|------------|-------------|
| 1 | zzpackage | Sales funnel engine | money, efficiency | wizardCheckout | `/results/sales-funnel/` |
| 2 | app.flexgrafik.nl | Lead magnet game | money | leadMagnet | `/results/lead-magnet/` |
| 3 | jadzia-core | Inbox Killer ★ spearhead | time, calm | inboxLanes | `/results/inbox-killer/` |
| 4 | agent-os | Agent workforce | time, efficiency | agentCards | `/results/agent-orchestrator/` |
| 5 | flex-vcms | Governance ★ | order, calm | vcmsDashboard | `/results/owner-ecosystem/` |
| 6 | flexgrafik-nl | Portal / web upgrade | money, order | portalAssistant | `/solutions/web-upgrade/` |
| 7 | flexgrafik-meta | Method / Automation Map | order, money | — | `/how-it-works/` |
| 8 | agent-os-ui | Observability | order, efficiency | adminDashboard | `/trust/` |

★ = flagship proof (VCMS governance + Inbox Killer spearhead)

---

## §4 Intent colors (binding)

Data source: `src/content/ecosystem.ts` → `INTENT_LEGEND`

| Token | Meaning (EN) | CSS var | Tailwind text |
|-------|--------------|---------|---------------|
| time | Saves your time | `--fx-time` | `text-fx-time` |
| money | Raises revenue / profit | `--fx-money` | `text-fx-money` |
| order | Orders systems and processes | `--fx-order` | `text-fx-order` |
| calm | Reduces stress and chaos | `--fx-calm` | `text-fx-calm` |
| efficiency | Increases team efficiency | `--fx-efficiency` | `text-fx-efficiency` |

**Rule:** Every module card (`IntentRouter`), pain card (`PainGrid`), and results hub card must show ≥1 intent badge.

---

## §5 Route map

```
/                          → HOME (§2)
/results/                  → Proof hub (≥6 cards)
/results/inbox-killer/
/results/sales-funnel/
/results/lead-magnet/
/results/agent-orchestrator/
/results/advisory-modernisation/
/results/owner-ecosystem/
/solutions/                → Product ladder hub
/solutions/inbox-killer/   ★ spearhead
/solutions/web-upgrade/
/solutions/sales-funnel/
/solutions/lead-magnet-game/
/solutions/managed-automation/  ★ MRR
/how-it-works/
/pricing/
/book-discovery/           → L3 conversion (Automation Map)
/founder/ · /about/
/trust/
/blog/                     → L1 nurture
```

**Case study pages:** `CaseStudyLayout` — 7 sections (Problem → Stack → Proof slots).  
**Solution pages:** `SolutionLayout` — 6 sections — **all** including `managed-automation`.

---

## §6 CTA tiers (BLOK 13 — canon)

| Tier | Labels | Where |
|------|--------|-------|
| L1 Explore | See systems · See results | Hero secondary, nav Systems/Results |
| L2 Watch demo | See the wizard (2 min) | IntentRouter, OwnerEcosystem, EXTERNAL.zzpackageWizard |
| L3 Book | **Book your Automation Map** | Header, hero primary, final band, pricing, footer |

**Header CTA rule:** Global header button is always L3 Book (not L1 „See systems”). L1 proof access = **Systems** nav item → `/results/`. Traffic-aware header swap = Phase 2 only (see conversion-pipeline.md §3).

**Forbidden:** "Book Strategy Call" as primary CTA.

---

## §7 Content file hierarchy

```
inspiracja pro.md (vision)
    ↓
site-map.md (this file — layout + routes + global chrome)
    ↓
ecosystem.ts (modules, repos, intents, HOME_SECTIONS)
conversion-copy.ts (hero, objections, CTAS, FOOTER, anti-positioning)
proof.ts (metrics, screens, videos, pricing, case measurements)
metrics-display.ts (home metrics presentation)
navigation.ts (header nav, footer columns, solutions dropdown)
    ↓
src/components + src/app
```

Videos: fill `proof.ts` in **last phase** — never show `[FILL]` video placeholders on home.

---

*Owner: Norbert Wozniak · Locked: 2026-06-17*
