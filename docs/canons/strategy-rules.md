---
status: "[ACTIVE]"
title: "Strategy Rules — Enforceable IA & Funnel"
owner: "Norbert Wozniak"
updated: "2026-06-25"
classification: "L2 — HARD rules (binding)"
supersedes: "brain.md §5 (partial)"
---

# Strategy Rules

> **Format:** HARD = agent must comply. Violation → stop and report `KONFLIKT Z SR-XX`.  
> **Detail:** [site-map.md](../strategy/site-map.md) · [conversion-pipeline.md](../strategy/conversion-pipeline.md)

## Agent duty

Before home or money-page work: load this file + `site-map.md` §3 (home order).  
On violation: cite rule ID, winner doc, proposed fix. Do not ship silent drift.

---

## Home & layout

**SR-01 (HARD)** — Home section order is LOCKED to 13 sections in `site-map.md` §3 (buyer-first: pain before deep architecture).  
*Violation:* Reverting to arch-first order (full LOS at §2) or adding `OwnerEcosystemTeaser` / `SystemArchitecture` SMB pipeline on home.  
*Source:* site-map §3

**SR-02 (HARD)** — Forbidden on home until explicit Commander decision: `EcosystemVideo`, second hero rewrite, "AI Systems Architect" label, `SystemArchitecture`, full `OwnerEcosystemTeaser` on home.  
*Violation:* Re-introducing SMB Visitor→Client pipeline on home or arch-first layout before pain/proof.  
*Source:* site-map §3–§4 (home contracts); SR-02 anti-patterns above

**SR-03 (HARD)** — Anti-chaos: any change to `src/app/page.tsx` or home section order MUST update `site-map.md` §3 in the same session.  
*Violation:* Merged PR with page.tsx diff and no site-map update.  
*Source:* AGENTS.md, strategy README

**SR-04 (HARD)** — One L3 CTA above the fold on home (hero primary = Book Automation Map).  
*Violation:* "Book Strategy Call" or email as primary above fold.  
*Source:* site-map §2 contracts, conversion-pipeline §3

**SR-05 (HARD)** — Minimum two proof sections before a second L3 on home.  
*Source:* site-map §2 contracts

**SR-06 (HARD)** — `IntentRouter` always shows all 8 repos (`ECOSYSTEM_REPOS`); intent filter dims only, never hides cards.  
*Source:* site-map §2, §3

---

## Funnel & navigation

**SR-07 (HARD)** — Primary funnel: Landing → Hard Proof → Qualification → Strategy Call. Anti-pattern: "Email me" primary on cold traffic.  
*Source:* conversion-pipeline §1

**SR-08 (HARD)** — Header CTA is always L3 Book → `/book-discovery/`. L1 proof = Systems nav → `/results/`.  
*Source:* site-map §6, conversion-pipeline §3

**SR-09 (HARD)** — Every new route requires: OG image, sitemap entry, handoff, site-map §5 update if public.  
*Source:* AGENTS.md §9–10

**SR-10 (HARD)** — Each route has exactly one funnel job. No multi-purpose money pages.  
*Source:* brain.md guardrails (v2), conversion-pipeline

---

## Two-track separation

**SR-11 (HARD)** — `portfolio.flexgrafik.nl` content (enterprise AI) MUST NOT appear on quietforge.  
*Source:* vision-system §2, marketing-rules MR-12

**SR-12 (HARD)** — quietforge shows governed ecosystem proof (LOS, Built vs Planned, 8-repo map) — not zero-repo zero-jargon mode.  
*Source:* portfolio truth-sync 2026-06-25

---

## Commercial path

**SR-13 (HARD)** — Wizard (`zzpackage.flexgrafik.nl`) is commercial spearhead #1 on portfolio; Inbox Killer is B2B product module, not jadzia-core repo definition.  
*Source:* site-map §3, vision-system §3

**SR-14 (HARD)** — Qualification paths: Wizard and/or Book Discovery with expectations set — no unqualified "free call" as only path.  
*Source:* conversion-pipeline §1

**SR-15 (HARD)** — All public prices come from `src/content/pricing.ts` (single matrix). Forbidden live fragments: `from €99/mo` for Managed Automation, `from €290/mo` for maintenance, swapped Web Upgrade / Sales Funnel ranges.  
*Source:* site-map §8, marketing-strategy §8

**SR-18 (HARD)** — Book Discovery copy must match UI: fallback = *Request Automation Map slot* + payment link after fit check; checkout model only when payment + calendar are live. Forbidden main submit: `Send enquiry`.  
*Source:* conversion-pipeline §5, site-map §9

---

## Ecosystem display

**SR-16 (HARD)** — Built vs Planned on home is **compact** (max 4 rows + link to full map on owner-ecosystem); full 8-row table on `/results/owner-ecosystem/`. Data from `readiness.ts` — honest LIVE/PARTIAL/PLANNED labels.  
*Source:* site-map §3 #5, proof-rules

**SR-17 (SOFT)** — Home arc is buyer-first: pain → proof → honesty gate → architecture teaser — do not revert to full LOS at §2 without Commander + site-map update.

---

*18 rules · Detail in strategy canon · Changes require `updated` bump + strategy-check skill sync*
