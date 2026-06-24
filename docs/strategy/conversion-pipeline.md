# Conversion Pipeline — User Flow, Navigation & Qualification

**Version:** 2.2  
**Status:** Canonical — binding for IA, CTAs, and funnel logic  
**Changelog:** 2.2 — Header CTA aligned with site-map §6 (L3 default); nav manifest → `navigation.ts`  
**Primary funnel:** High-ticket qualification (proof before call)

---

## 1. Strategic funnel (enterprise model)

Visitors do not get a generic "Contact us" path. They move through **recognition → proof → qualification → conversation**.

```
Visitor
   │
   ▼
Landing (Home / Intent-matched entry)
   │  Pain recognition + architect positioning
   ▼
Hard Proof
   │  Case studies · VCMS / Behind the scenes · Metrics · Video
   ▼
Clinical Qualification
   │  Wizard (zzpackage) or Book Discovery with expectations set
   ▼
Strategy Call
   │  Automation Map session — pre-paid or pre-qualified only
   ▼
Client
```

### Why this order

| Stage | Buyer state | Site job |
|-------|-------------|----------|
| Landing | Skeptical, scanning | Earn 10 seconds — one clear outcome |
| Proof | "Show me it's real" | Evidence over claims |
| Qualification | "Is this for me?" | Filter budget/fit before your time |
| Strategy call | Committed explorer | Close discovery → project scope |

**Anti-pattern:** Primary CTA "Email me" above proof on cold traffic.

---

## 2. System architecture flow (buyer education)

Display on Home and proof pages — teaches **what they're buying**:

```
Visitor → Landing → Wizard → AI Assistant → Lead Qualification → VCMS → Quote → Client
```

This is the **product story**, not the navigation menu. Use in diagrams, animations, and case studies.

Sales-motion animation (when used):

```
Lead → Wizard → AI → VCMS → Quote → Sale
```

Motion rules: [ui-ux-principles.md](./ui-ux-principles.md) §6.

---

## 3. CTA tiers (three levels)

Every major page exposes up to three commitment levels. Never more than **one primary** filled button per viewport section.

| Tier | User intent | Default labels | Typical href |
|------|-------------|----------------|--------------|
| **L1 — Explore** | Browse proof, low friction | See results · Explore systems · View architecture | `/results/`, `#los-teaser`, `/how-it-works/` |
| **L2 — Watch demo** | See it work | Watch walkthrough · See the wizard | Video embed, Loom, `EXTERNAL.zzpackageWizard` |
| **L3 — Book / Chat** | Ready to talk | Book Automation Map · Start WhatsApp chat | `/book-discovery/` · WhatsApp deep link |

L3 has **two complementary paths:** (a) paid Automation Map / scheduled session, (b) async WhatsApp qualification agent.

### Header CTA (binding — aligned with site-map.md §6)

**Default (shipped):** single L3 button in header — **Book your Automation Map** → `/book-discovery/`.

| Element | Label | Href | Source |
|---------|-------|------|--------|
| Header CTA (global) | Book your Automation Map | `/book-discovery/` | `HEADER_CTA` in `src/lib/navigation.ts` |
| L1 in nav | Systems | `/results/` | First item in `HEADER_NAV` |

**Phase 2 (not shipped):** traffic-aware header CTA via session flag — cold could swap to L1 „See systems”; returning could swap to WhatsApp. Do not implement without updating **both** this section and site-map.md §6 in the same session.

### Hero CTA (desktop vs mobile)

| Viewport | Primary (filled) | Secondary |
|----------|------------------|-----------|
| Desktop | See systems (cold) or Book (warm) | See the wizard (2 min) — L2 |
| Mobile | **Chat on WhatsApp** (L3) | Book Automation Map (secondary ghost) |

### Sticky CTA

- Appears after user scrolls past **Built vs Planned** (`data-home-section="built-vs-planned"`, home §3).
- Mobile: sticky bottom bar — **WhatsApp primary**, Book Automation Map secondary; uses `HEADER_CTA` from `navigation.ts`.
- Desktop floating pill: Phase 2 (not shipped).
- Final CTA band remains the page closer.

| Location | L1 | L2 | L3 |
|----------|----|----|-----|
| Hero | Secondary text link | Optional | **Primary button** |
| After proof block | Primary | Optional video | Secondary |
| End of page (Final CTA band) | — | Optional | **Primary only** |
| Header (global) | Nav links (Systems = L1 proof) | — | **L3 Book Automation Map** (see site-map.md §6) |
| Pricing | Compare tiers | Demo link on flagship | Book for selected tier |

**Rule:** Final section of every money page = one L3 CTA. No competing primaries.

---

## 4. User flows (personas)

### Flow A — Cold visitor (default)

```
Google / referral → Home Hero
  → IntentRouter (self-segment pain)
  → Results teaser OR case study detail
  → Behind the scenes / System metrics
  → Book Discovery (L3)
```

### Flow B — Solution-aware visitor

```
Nav: Solutions → Inbox Killer / Sales Funnel / etc.
  → Product page (Problem → System → Effect)
  → Linked case study
  → Book Discovery OR Wizard demo (L2)
```

### Flow C — Proof-first visitor

```
Nav: Results → Case study detail
  → Artefact download (Automation Map sample)
  → How I Work (process trust)
  → Book Discovery
```

### Flow D — Price shopper

```
Nav: Pricing
  → Tier comparison + discovery fee explained
  → Book Discovery (not silent checkout for custom work)
```

### Flow E — Returning visitor

```
Prior visit / artefact download → Home or Results
  → Recognised warmth (mention sample in book-discovery)
  → WhatsApp chat OR Book Discovery (skip basics)
```

### Flow F — Mobile-first abandon

```
Mobile Home → partial scroll → sticky CTA
  → WhatsApp (primary) OR Results
  → Re-engage via wizard L2 if bounced from zzpackage
```

### Flow G — WhatsApp entry

```
Paid ad / referral / QR → WhatsApp deep link
  → Agent conversation (6–8 questions)
  → Lead scored → brief to Norbert
  → Optional call → quote
```

---

## 5. Wizard & qualification logic

The **Wizard** (`https://zzpackage.flexgrafik.nl/`) is a **sales process engine**, not a contact form.

### What the site must communicate about the wizard

| Capability | Message |
|------------|---------|
| Qualification | Filters fit before human time |
| Personalisation | Path adapts to answers |
| Automation | Routing and notifications behind the scenes |
| Scoring | Lead priority surfaced to operator |
| Routing | Right offer or next step per segment |

### On-site treatment

- Tease on Home (`OwnerEcosystemTeaser`, IntentRouter) with **L2** link to live wizard
- Never label as "contact form" or "quick quote form"
- Pair with architecture diagram showing wizard in the stack

### Book Discovery (`/book-discovery/`)

Entry to **paid Automation Map** (€290). Page must:

1. Set expectation: paid session, deliverable artefact
2. State who it's for / not for
3. Link to proof (sample artefact PDF)
4. Single L3 submit path
5. **Warm lead line:** *Already downloaded the Automation Map sample? Mention it — skip the basics, go straight to scoping.*

### WhatsApp qualification path

1. User opts in (AVG — see brain.md)
2. Agent asks 6–8 qualification questions in chat
3. Answers scored (backend) — thresholds not shown in public copy
4. Qualified → brief + optional calendar link to Norbert
5. Unqualified → self-serve redirect (lead magnet / starter content)

**Failure modes:** see §11.

### Lead scoring rules (qualification gates)

| Signal | Action |
|--------|--------|
| Budget below €199 project floor | Lead magnet PDF + email capture; **no** Automation Map or strategy CTA as primary |
| Budget €199–€1,199 | Emphasise discovery + starter solutions (Inbox Killer tier) |
| Budget €1,200+ | Full solutions + case studies + Book Discovery / WhatsApp |
| Needs "website only" | Web Upgrade path + exception copy (marketing-strategy §2) |
| Enterprise / RFP language | Soft redirect to portfolio domain |

**Public copy (no threshold numbers):** On `/pricing/` and `/solutions/*`: *If your budget is below €1,200, start with the Automation Map to scope before committing.*

Scoring implementation lives in wizard/WhatsApp backend — **site copy must not promise calls to unqualified traffic**.

---

## 6. Information architecture

### Navigation (target canon)

**Header primary nav** — maximum 5 items + 1 CTA:

| Label | Route | Role |
|-------|-------|------|
| Systems | `/results/` or future `/systems/` | Proof hub (case studies) |
| How It Works | `/how-it-works/` | Process trust |
| Solutions | dropdown | Productised entry points |
| Pricing | `/pricing/` | Commercial clarity |
| About | `/founder/` or `/about/` | Founder story |
| **CTA** | `/book-discovery/` | Book Automation Map |

**Solutions dropdown** (product ladder):

1. Inbox Killer — `Start here` badge
2. Sales Funnel
3. Web Upgrade
4. Lead Magnet Game
5. Managed Automation — `MRR` badge

**VCMS proof placement:** Governance layer — not a product SKU. Lives under **Systems** (`/results/`) → owner-ecosystem case study → `#why-vcms`. Do not list VCMS in Solutions dropdown or footer company column.

**Footer:** Solutions links + legal + artefacts; repeat single L3. Company column: **Systems & results** → `/results/`. Data source: `src/lib/navigation.ts`.

### Global chrome (binding)

| Surface | Data source |
|---------|-------------|
| Header nav + CTA | `src/lib/navigation.ts` → `HEADER_NAV`, `HEADER_CTA` |
| Solutions dropdown | `SOLUTIONS_NAV` |
| Footer columns | `FOOTER_SOLUTIONS`, `FOOTER_COMPANY`, `FOOTER_ARTEFACTS`, `FOOTER_LEGAL` |
| CTA / footer copy strings | `src/content/conversion-copy.ts` → `CTAS`, `FOOTER` |

### Routes map (current codebase)

| Route | Funnel role |
|-------|-------------|
| `/` | Landing + proof stack |
| `/results/` | Proof hub |
| `/results/*` | Case study detail |
| `/solutions/*` | Product entry |
| `/how-it-works/` | Process |
| `/pricing/` | Commercial |
| `/book-discovery/` | L3 conversion |
| `/founder/`, `/about/` | Credibility |
| `/trust/` | Safety / playbook |
| External wizard | L2 qualification demo |

### IA rules

1. **Every route has one funnel job** — document in page metadata comment or handoff
2. No orphan pages without nav or internal link path
3. New routes require: OG image, sitemap entry, strategy alignment note in handoff
4. Product pages link to **one** case study minimum
5. Blog is **L1 nurture** — not primary nav for conversion sprint

### Home section order

**Binding:** Home section order, component names, and funnel jobs are defined in **[site-map.md §2](./site-map.md)**. Do not ship a different home stack without updating that document in the same session.

#### WhyThisWorks copy contract

Four named objections with one-line rebuttals — copy lives in `src/content/conversion-copy.ts`:

| Objection | Rebuttal |
|-----------|----------|
| Price | €290 is a filter, not a hidden cost — you get a written Map |
| Trust | No fake logos — see my own ecosystem running in production |
| Timing | First deploy in ~2 weeks vs 3-month agency cycles |
| Scope creep | Wizard scope-locks the brief before any code |

#### Retention block (`/how-it-works/`)

**After delivery: what's next** — ongoing optimization, Managed Automation tier, quarterly review (3 lines minimum).

---

## 7. Page-level conversion contracts

### Home `/`

- One L3 above fold (hero)
- Minimum two proof sections before second L3
- IntentRouter must route to proof, not only pricing

### Product `/solutions/*`

- H1 = outcome for ICP
- Case study link required
- CTA: L3 or L2 demo depending on product maturity

### Results `/results/*`

- Schema per marketing-strategy.md §7
- End with L3
- Video slot reserved even if placeholder

### Pricing `/pricing/`

- Discovery fee visible upfront
- Per-tier floor **and** ceiling ranges (e.g. Inbox Killer €1,200–€4,800)
- Tier anchors ≥ global minimum checkout rules
- Budget qualification copy (see §5)
- No hidden "contact for price" on flagship offers

---

## 11. Failure modes & recovery

| Failure | User sees | Recovery action |
|---------|-----------|-----------------|
| Wizard (zzpackage) down | Banner: wizard temporarily unavailable | Link to WhatsApp chat or Book Discovery |
| Calendar full | Message + async WhatsApp option | Join waitlist email or chat |
| WhatsApp agent offline | Offline notice + email fallback | `hello@flexgrafik.nl` + link to `/book-discovery/` |
| Payment failed | Clear error + retry | Retry payment or contact |
| User silent 48h (WhatsApp) | Automated nudge (backend) | Link to `/book-discovery/` in nudge |

Every broken flow must offer **one** obvious next step — never a dead end.

---

## 8. Measurement & honesty

| Claim type | Allowed on live site |
|------------|---------------------|
| Delivered metric | Yes, with context |
| Process-proof ("in delivery", "measured in pilot") | Yes, label clearly |
| Estimate / projection | Yes, label **estimate** |
| Placeholder `[X]` | **No** |
| Competitor comparison | Avoid unless factual |

---

## 9. Agent implementation gate

Before changing routes, nav (`src/lib/navigation.ts`, `Header`), or CTAs:

1. Read this document + marketing-strategy.md + **site-map.md §5–6**
2. State which flow (A–D) the change serves
3. Map CTAs to L1/L2/L3
4. Confirm no new orphan routes
5. Handoff must include funnel job per touched route

---

## 10. Review checklist

- [ ] Primary funnel is proof → qualification → call
- [ ] Header has single L3 CTA
- [ ] Wizard positioned as sales engine
- [ ] Each page has one funnel job
- [ ] CTA tiers not mixed (no two primaries per section)
- [ ] Scoring/budget gates reflected in copy
- [ ] Sitemap + internal links support Flow A–D

---

*Pairs with [marketing-strategy.md](./marketing-strategy.md) and [ui-ux-principles.md](./ui-ux-principles.md).*
