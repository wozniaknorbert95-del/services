# Remediation Backlog — Professional Audit Set

**Date:** 2026-06-23  
**Revision:** v2 — DECISION B confirmed; LinkedIn v1 findings retracted  
**Format:** ID · Severity · Channel · Effort · Owner

---

## OWNER DECISION — RESOLVED

**Chosen model: B — Two-brand bridge**

| Entity | Role |
|--------|------|
| **Quietforge** | Consulting arm — primary client offer |
| **FlexGrafik** | Registered company + live operating proof (not demo) |
| **flexgrafik.nl** | Physical/ZZP product surface |

LinkedIn already implements this. **No full profile rewrite required.**

---

## P0 — None (v1 P0 retracted)

v1 items AUD-X01, AUD-L02, AUD-L03 **cancelled** — based on stale LinkedIn scrape.

---

## P1 — High (fix within 1 week)

| ID | What | Why | Fix | Source | Effort |
|----|------|-----|-----|--------|--------|
| AUD-S01 | Site nie nazywa FlexGrafik tak jasno jak LinkedIn | Buyer po LI nie widzi tego samego mostu na stronie | Dodać 1 akapit na `/about/` lub hero proof line: *"FlexGrafik is the registered company where this stack runs — Quietforge is how I deploy it for you"* | `conversion-copy.ts`, `/about/` | S |
| AUD-W05 | 17 console 404s on home | UX hard gate fail; broken proof assets | Verify `/public/gratka/` on Vercel; fix image paths | `inventory.json` | M |
| AUD-W08 | WhatsApp not in hero; placeholder phone | Canon L3 orphaned | `NEXT_PUBLIC_WHATSAPP_URL` + hero ghost CTA | `constants.ts` | M |
| AUD-L09 | LinkedIn Services: "Contact for pricing" | Drift vs site €290 / €1,200+ | Update to *"Automation Map from €290 · builds from €1,200"* + link `/pricing/` | LinkedIn Services | S |
| AUD-W04 | 14-section home scroll | Attention decay | Sticky CTA from §3 OR MVP trim | `site-map.md` | L |

---

## P2 — Medium (fix within 2 weeks)

| ID | What | Why | Fix | Source | Effort |
|----|------|-----|-----|--------|--------|
| AUD-S02 | Metrics parity LI ↔ site | LI: 142 msgs, 200 SKUs; site generic | Sync honest metrics in `proof.ts` + home metrics | `proof.ts` | S |
| AUD-W02 | Inbox Killer vs Telegram Deployment Agent | Naming drift | Align solution page H1/title | solutions page | S |
| AUD-L01 | JSON-LD missing sameAs | Knowledge graph | Add LinkedIn + flexgrafik.nl to Person | `layout.tsx` | S |
| AUD-W01 | authors URL → portfolio.flexgrafik.nl | Stale metadata | Point to `/founder/` or LinkedIn | `layout.tsx` | S |
| AUD-L04 | Featured cards | Conversion surface | services.flexgrafik.nl + Automation Map PDF | LinkedIn | S |
| AUD-L10 | Services reviews empty | Trust gap | Invite advisory + ZZP clients | LinkedIn | M |
| AUD-X02 | Vanity URL `flexgrafik-quietforge` 404 | Broken if used in cards | Claim slug or standardize on active URL | LinkedIn | S |
| AUD-W09 | Hero missing wizard L2 CTA | Wizard under-promoted | Secondary "See the wizard (2 min)" | HeroSection | S |
| AUD-W10 | Lighthouse CI not run | No perf gate | CI on Linux | `lighthouse-ci.mjs` | M |

---

## P3 — Polish (backlog)

| ID | What | Why | Fix | Effort |
|----|------|-----|--------|
| AUD-L11 | Pin Quietforge systems post | Balance print activity in feed | LinkedIn | S |
| AUD-L12 | Quietforge banner on LinkedIn | Visual parity with site | Design 1584×396 banner | S |
| AUD-S03 | flexgrafik.nl → services cross-link | Ecosystem thread | Optional footer link on .nl | S |
| AUD-L06 | Connection growth | Authority signal | Organic outreach | L |
| AUD-W03 | Case study H1 tweaks | SEO | Optional | S |

---

## Cancelled (v1 errors)

| ID | Reason |
|----|--------|
| AUD-X01 | LinkedIn already has Quietforge positioning |
| AUD-L02 | Headline already correct |
| AUD-L03 | About already has Quietforge + FlexGrafik |
| AUD-L05 | Services categories already include Lead Gen, Custom Software |
| AUD-L07 | Activity audit was incomplete — downgrade to P3 pin post |

---

## Quick wins (< 2 hours)

1. AUD-L09 — LinkedIn Services pricing line (5 min)
2. AUD-L01 — JSON-LD sameAs (15 min code)
3. AUD-S01 — One paragraph FlexGrafik bridge on `/about/` (15 min copy)
4. AUD-W02 — Inbox Killer title fix (15 min)
5. AUD-W01 — Metadata authors URL (5 min)

---

## Sprint plan (revised)

### Sprint 1 — Parity (Day 1–2)
- [ ] AUD-S01, AUD-S02, AUD-L09
- [ ] AUD-L01, AUD-L04

### Sprint 2 — Site trust (Day 3–5)
- [ ] AUD-W05, AUD-W08
- [ ] AUD-W02, AUD-W01

### Sprint 3 — Polish (Week 2)
- [ ] AUD-L10, AUD-L11, AUD-L12
- [ ] AUD-W04 or sticky CTA

---

## Definition of Done (v2)

- [ ] Site explicitly names FlexGrafik as live proof (not demo)
- [ ] LinkedIn Services pricing matches site floors
- [ ] Console errors = 0 on home
- [ ] JSON-LD sameAs includes LinkedIn
- [ ] Metrics 142 msgs / 200 SKUs visible on site if claimed on LI

---

*Prior canon audit: `docs/audits/2026-06-17-canon-audit-findings.md` — still valid for site/funnel items*
