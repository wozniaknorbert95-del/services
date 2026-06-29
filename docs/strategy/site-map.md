# Site Map — quietforge.flexgrafik.nl

**Version:** 2.0  
**Status:** Canonical — post-audit IA, home layout, routes, CTA hierarchy  
**Supersedes:** Site Map v1.0 home order and route exposure rules  
**Audit reference:** [`docs/audits/2026-06-25/quietforge-ux-ia.md`](../audits/2026-06-25/quietforge-ux-ia.md) · 2026-06-25

> Core decision the site must answer: **“Can this person design and deploy a system that improves my business?”**  
> Home must now lead with buyer pain and proof before deep architecture.

---

## §1 Site goal

Quietforge is a **Conversion Systems Architect** for NL small businesses and professional services.

The site does not sell isolated websites, chatbots, scripts or design work. It sells supervised conversion and operations systems that:

1. qualify leads,
2. reduce admin,
3. create a repeatable client-acquisition flow,
4. keep the human in control.

**Canonical page arc:**

```text
Problem → Working system → Proof → Safety → Price → Next step
```

Never ship a page that reads as:

```text
Feature → Feature → Feature → Contact me
```

---

## §2 Primary navigation

### Header — maximum 5 items + 1 CTA

| Label | Route | Funnel role |
|---|---|---|
| Systems & Results | `/results/` | Proof hub; shows what is already running |
| Solutions | dropdown | Problem/offer selection |
| How It Works | `/how-it-works/` | Process trust |
| Pricing | `/pricing/` | Commercial clarity |
| Founder’s System | `/founder/` | Founder credibility + owner ecosystem story |
| **Book Automation Map** | `/book-discovery/` | L3 conversion |

### Solutions dropdown

| Label | Route | Badge | Price display |
|---|---|---|---|
| Inbox Killer | `/solutions/inbox-killer/` | Start here | €1,200–€4,800 |
| Web Upgrade | `/solutions/web-upgrade/` | Conversion site | €1,800–€5,500 |
| Sales Funnel / Wizard Cash Engine | `/solutions/sales-funnel/` | Quote + checkout | €2,400–€6,500 |
| Lead Magnet Game | `/solutions/lead-magnet-game/` | Acquisition | €2,200–€6,500 |
| Managed Automation | `/solutions/managed-automation/` | Monthly | €349–€890/mo |

**Important naming fix:**

- **Web Upgrade** = website modernisation + lead capture.
- **Sales Funnel / Wizard Cash Engine** = quotes, bookings, configurator, checkout, qualification.

These must never be swapped on `/solutions/`, cards, pricing or metadata.

---

## §3 HOME — section order

The previous home placed full architecture too early. Version 2.0 uses a buyer-first sequence.

| # | Section | Component | Funnel job | Primary content rule |
|---|---|---|---|---|
| 1 | Hero | `HeroSection` | 5-second clarity | Who / for whom / outcome / proof strip / L3 CTA |
| 2 | Pain router | `PainGrid` | Recognition | “Choose your leak”: inbox, website, quotes, traffic |
| 3 | Proof strip | `SystemMetrics` compact | Immediate credibility | 4 verified numbers with outcome translation |
| 4 | Spearhead proof | `SpearheadSpotlight` | Live system proof #1 | Wizard Cash Engine as working checkout, not slide deck |
| 5 | Honesty gate | `BuiltVsPlanned` compact | Trust | Live / Partial / Planned, max 4 rows + link to full map |
| 6 | Results teaser | `ResultsTeaser` | Proof selection | Problem → System → Effect cards |
| 7 | System router | `IntentRouter` | Self-segmentation | 8 repos visible, but outcome-first labels |
| 8 | LOS teaser | `LivingSystemTeaser` | Explain why it works | Simplified Sense → Decide → Act → Learn; full LOS linked |
| 9 | Governance proof | `BehindTheScenes` / `VCMSProof` | Risk removal | VCMS/HITL proof; screenshots only if real or labelled demo |
| 10 | Method | `HowIWork` | Delivery confidence | Map → Architect → Build → Verify → Handover |
| 11 | Trust & objections | `TrustAndObjections` | Remove risk | HITL / EU data / AVG / no lock-in / objections |
| 12 | Pricing | `Pricing` | Commercial clarity | Same price matrix as `/pricing/` |
| 13 | Final CTA | `FinalCtaBand` | Close | One L3 action only |

### Home chrome

- `SectionProgress`: allowed if non-distracting.
- `StickyCta`: mobile only, appears after honesty gate.
- Sticky mobile primary: **Ask on WhatsApp**; secondary: **Book Automation Map**.
- Desktop primary CTA remains **Book Automation Map**.

---

## §4 Hero contract

Every home hero must include exactly these elements in order:

1. Eyebrow: `// Conversion Systems Architect for NL small business`
2. H1: outcome-first, no “AI-powered” headline.
3. Lead: max 2 sentences.
4. Proof strip: 3–4 short verified claims.
5. CTA row: one primary, one secondary, optional WhatsApp text link.

### Recommended hero copy

**H1**  
Conversion systems that qualify leads, reduce admin and keep humans in control.

**Lead**  
For Dutch small businesses that are tired of manual quotes, inbox chaos and websites that do not turn visitors into pipeline. I design the system, wire the workflow, and keep approval gates where they belong.

**Proof strip**  
Live wizard checkout · 8-repo governance · HITL approval · EU-hosted

**CTA**  
Primary: `Book Automation Map` → `/book-discovery/`  
Secondary: `See live systems` → `/results/`  
Tertiary text: `Ask on WhatsApp` → WhatsApp deep link

---

## §5 Route map

```text
/                                → Home
/results/                        → Proof hub
/results/inbox-killer/           → Case study
/results/sales-funnel/           → Case study
/results/lead-magnet/            → Case study
/results/agent-orchestrator/     → Case study
/results/jadzia-coi/             → Case study
/results/advisory-modernisation/ → Case study, anonymised / in delivery
/results/owner-ecosystem/        → Full LOS + governance proof

/solutions/                      → Productised systems hub
/solutions/inbox-killer/         → Product page
/solutions/web-upgrade/          → Product page
/solutions/sales-funnel/         → Product page
/solutions/lead-magnet-game/     → Product page
/solutions/managed-automation/   → Product page

/how-it-works/                   → Process trust
/pricing/                        → Pricing clarity
/book-discovery/                 → Paid Automation Map booking
/founder/                        → Founder’s System
/about/                          → Formal profile; footer only
/trust/                          → Safety, AVG, HITL
/legal/                          → Legal / privacy
/blog/                           → L1 nurture
```

### Draft / hidden route

`/results/whatsapp-discovery-pilot/` must be **noindex and removed from public sitemap/results hub** until it has a full case-study structure:

- Problem
- System
- 6–8 question flow
- Scoring output
- HITL gate
- Status: Pilot
- Proof asset or deliberate static walkthrough
- CTA

---

## §6 Sitemap priority guidance

| Route type | Sitemap priority | Changefreq |
|---|---:|---|
| `/` | 1.0 | weekly |
| Primary commercial: `/solutions/`, `/pricing/`, `/book-discovery/` | 0.9 | weekly |
| Proof/process: `/results/`, `/how-it-works/`, `/founder/`, `/trust/` | 0.8 | weekly |
| Solution detail pages | 0.75 | weekly |
| Case studies | 0.7 | monthly |
| Blog | 0.5 | monthly |
| Legal/About utility | 0.3 | yearly/monthly |
| Draft/pilot incomplete pages | noindex; not in sitemap | — |

---

## §7 Eight repos — public presentation rule

Data source remains `src/content/ecosystem.ts` → `ECOSYSTEM_REPOS`.

Public-facing cards must use this hierarchy:

```text
Business outcome first
System name second
Tech/repo name third
```

| Repo key | Public outcome label | System label | LOS layers | Proof route |
|---|---|---|---|---|
| `zzpackage` | Quote, price and checkout in one guided flow | Wizard Cash Engine | Sense · Act | `/results/sales-funnel/` |
| `app.flexgrafik.nl` | Turn cold traffic into qualified handoffs | Lead magnet game | Sense | `/results/lead-magnet/` |
| `jadzia-core` | Know which leads, orders and ops need action | Jadzia COI | Think · Act | `/results/jadzia-coi/` |
| `agent-os` | Build and test changes through a fixed agent workflow | Agent OS | Orchestrate · Act | `/results/agent-orchestrator/` |
| `flex-vcms` | Stop content and repo drift before deploy | Governance layer | Sense · Guard | `/results/owner-ecosystem/#why-vcms` |
| `flexgrafik-nl` | Give visitors a trustworthy conversion portal | Trust Portal | Sense | `/solutions/web-upgrade/` |
| `flexgrafik-meta` | Start every project with a written operating map | Method / Automation Map | Guard · Memory | `/how-it-works/` |
| `agent-os-ui` | See tasks, approvals, history and cost | Mission Control | Orchestrate | `/trust/` |

---

## §8 Price source of truth

All pages must use the same commercial matrix.

| Offer | Public price |
|---|---:|
| Automation Map | €290, credited toward first project |
| Inbox Killer | €1,200–€4,800 |
| Web Upgrade | €1,800–€5,500 |
| Sales Funnel / Wizard Cash Engine | €2,400–€6,500 |
| Lead Magnet Game | €2,200–€6,500 |
| Single System Build | from €1,490, only when scope is smaller than a named package |
| Ecosystem / Multi-System Build | €3,490–€12,000 |
| Managed Automation | €349–€890/mo |

Forbidden live price fragments:

- `from €99/mo` for Managed Automation
- `from €290/mo` for Maintenance, unless the whole pricing matrix is changed
- mismatched Sales Funnel/Web Upgrade ranges
- “contact for price” on named offers

---

## §9 Book Discovery route contract

`/book-discovery/` is a paid Automation Map conversion page.

The page must not mix paid-booking language with a generic enquiry form.

### Required flow

```text
Understand value → See what is included → Pay €290 → Pick slot → Intake → Confirmation
```

If payment/calendar is not technically live, the page must switch copy to **Request Automation Map slot** and clearly state that a payment link follows after fit check.

### Preferred professional target

Primary CTA: `Pay €290 and pick a slot`  
Secondary: `Download sample Map`  
Fallback: `Ask a question on WhatsApp`

Form submit must never say only “Send enquiry” while the page promises payment and slot selection.

---

## §10 Footer

Footer may expose more links than the header, but must preserve hierarchy.

**Company:** Systems & Results · How It Works · Pricing · Trust · Founder · About · Blog  
**Solutions:** Inbox Killer · Web Upgrade · Sales Funnel · Lead Magnet Game · Managed Automation  
**Artefacts:** Automation Map sample · Data safety playbook · LOS diagram · Handover policy  
**Legal:** Privacy · Terms · Contact

WhatsApp appears once in social/contact area, not repeated in every footer column.

---

## §11 Home implementation checklist

Before shipping home:

- [ ] Pain appears before deep architecture.
- [ ] Hero has one primary action.
- [ ] Pricing matches §8 everywhere.
- [ ] Web Upgrade and Sales Funnel are not swapped.
- [ ] Built vs Planned is compact on home and detailed on owner ecosystem page.
- [ ] Every proof card uses Problem → System → Effect.
- [ ] No unfinished video placeholders.
- [ ] `/results/whatsapp-discovery-pilot/` is hidden or complete.
- [ ] Mobile has no horizontal overflow.
- [ ] Sticky CTA appears only after enough proof.

---

*Owner: Norbert Wozniak · Updated post-audit: 2026-06-25*
