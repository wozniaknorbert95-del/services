# Executive Summary — Professional Audit Set

**Date:** 2026-06-23  
**Revision:** v2 — owner correction (LinkedIn Services + About reviewed)  
**Scope:** Quietforge (`flexgrafik-services.vercel.app` → `services.flexgrafik.nl`) + LinkedIn + `flexgrafik.nl`  
**Method:** Agency multi-discipline review + owner-provided LinkedIn profile content

---

## Correction (v1 → v2)

**v1 error:** LinkedIn was scored from a stale public scrape (login wall blocked Playwright). That scrape showed only an old FlexGrafik print About — **not** the current profile with Quietforge Services, headline, and dual-brand narrative.

**Owner model (confirmed — DECISION B):**

| Entity | Role |
|--------|------|
| **Quietforge** | Consulting arm — **main service** delivered to Dutch ZZP/SME clients |
| **FlexGrafik** | Registered company + **live operating proof** — not a demo; the ecosystem runs a real print/design business |

LinkedIn already implements this bridge. The real gap is **site ↔ LinkedIn parity** (site under-explains FlexGrafik-as-proof) and **technical/funnel** items — not a total brand fracture.

---

## Verdict (revised)

| Channel | v1 | **v2** | Status |
|---------|-----|--------|--------|
| Website (Quietforge) | 3.8 | **3.8** | Solid — P1 technical/funnel fixes |
| LinkedIn | 1.5 | **4.1** | **Strong** Services + About; minor gaps |
| flexgrafik.nl | 4.2 | **4.2** | Coherent print/ZZP product |
| Cross-channel | 1.8 | **3.6** | Drift, not fracture — align site to LinkedIn story |

**Overall:** **Conditional Pass** on positioning. **Fail** on UX hard gate (console 404s).

---

## Top 5 findings (revised)

### P1 — Site nie mówi tak jasno jak LinkedIn: „FlexGrafik = live proof”

LinkedIn Services i About mówią wprost: Quietforge deployuje tę samą architekturę co w FlexGrafik. Strona (`quietforge` header, case studies) mówi o ecosystem — ale **słabiej eksponuje FlexGrafik jako zarejestrowaną firmę i operating case**, nie demo. Buyer po LinkedIn → site może nie zobaczyć tego samego mostu.

**Fix:** Hero proof line lub `/founder/` — jedno zdanie: *"FlexGrafik is the registered company where this stack runs in production — Quietforge is how I deploy it for you."*

### P1 — Console 404 storm on proof-heavy pages

Home: **17 console errors** (404). Fails `ux-audit` hard gate. Undermines "production systems" claim regardless of copy quality.

### P1 — LinkedIn pricing vs site pricing

LinkedIn Services: **"Contact for pricing"**. Site: transparent €290 Automation Map, €1,200+ builds. Drift — SMB buyer expects consistency.

**Fix:** LinkedIn Services pricing → *"Automation Map from €290 · builds from €1,200"* or link to `/pricing/`.

### P2 — JSON-LD + vanity URL

- `layout.tsx` Person missing `sameAs` LinkedIn
- `flexgrafik-quietforge` vanity URL still 404 if used in materials

### P2 — Product naming: Inbox Killer vs Telegram Deployment Agent

Solution page title/H1 drift from canon.

---

## What works (keep — including LinkedIn)

- **Headline:** `Conversion Systems Architect @ Quietforge | Delivering Automated Solutions` ✅
- **About:** Quietforge architect paragraph + FlexGrafik ecosystem founder paragraph ✅
- **Services (Quietforge):** Full product ladder — Inbox Killer, Sales Funnel, Web Upgrade, Lead Magnet, Managed Automation ✅
- **FlexGrafik company block:** 8-repo, VCMS, Wizard 200+ SKUs, inbox 142 msgs — matches site proof ✅
- **Positioning line:** *"systems that proved themselves on my own business"* — aligns with canon ✅
- **Site visual system** — dark/amber Quietforge identity ✅

---

## Removed from P0 (was wrong in v1)

- ~~LinkedIn headline = Eigenaar FlexGrafik~~ — **incorrect**; current headline is Quietforge
- ~~LinkedIn About 100% print~~ — **incorrect**; About leads with Quietforge
- ~~Full LinkedIn rewrite required~~ — **not needed**; tune pricing, Featured, site parity

---

## Recommended sequence

1. **Site copy** — FlexGrafik-as-live-proof bridge (1 paragraph, hero or founder)
2. **P1** Fix console 404s on Vercel
3. **P1** LinkedIn Services pricing alignment
4. **P1** WhatsApp CTA + env var on site
5. **P2** JSON-LD sameAs, Inbox Killer naming, Featured cards → services site

---

## Deliverable index

| File | Contents |
|------|----------|
| [01-consistency-matrix.md](./01-consistency-matrix.md) | Revised cross-channel scorecard |
| [02-website-audit.md](./02-website-audit.md) | Site disciplines (unchanged technical findings) |
| [03-linkedin-audit.md](./03-linkedin-audit.md) | **Full owner-provided profile audit** |
| [04-remediation-backlog.md](./04-remediation-backlog.md) | Revised P0–P3 |
| [05-scorecards.md](./05-scorecards.md) | Revised scores |

---

*v2 Owner input: 2026-06-23 · Methodology: [docs/plans/2026-06-23-professional-audit-plan.md](../../plans/2026-06-23-professional-audit-plan.md)*
