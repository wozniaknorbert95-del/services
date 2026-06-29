---
status: "[ACTIVE]"
title: "Strategy Rules — Enforceable IA & Funnel"
owner: "Norbert Wozniak"
updated: "2026-06-29"
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

**SR-01 (HARD)** — Home section order is LOCKED to 9 sections in `site-map.md` §3 (buyer-first: pain before deep architecture; de-jargonised per Commander decision `mapa.txt` 2026-06-29).  
*Violation:* Reverting to 15-section arch-first order, re-adding `LivingSystemTeaser` / `BehindTheScenes` / `ResultsTeaser` as standalone home sections, or adding `OwnerEcosystemTeaser` / `SystemArchitecture` on home.  
*Source:* site-map §3 (v3.0)

**SR-02 (HARD)** — Forbidden on home until explicit Commander decision: `EcosystemVideo`, second hero rewrite, "AI Systems Architect" label, `SystemArchitecture`, full `OwnerEcosystemTeaser`, `LivingSystemTeaser`, `BehindTheScenes`, `ResultsTeaser` (standalone), terminal mock blocks in hero/spearhead, full LOS/8-repo/governance sections. Full LOS + 8-repo + governance details live on `/results/owner-ecosystem/`.  
*Violation:* Re-introducing SMB Visitor→Client pipeline on home, arch-first layout before pain/proof, or re-adding removed sections.  
*Source:* site-map §3 (v3.0); SR-02 anti-patterns above; Commander decision `mapa.txt` 2026-06-29

**SR-03 (HARD)** — Anti-chaos: any change to `src/app/page.tsx` or home section order MUST update `site-map.md` §3 in the same session.  
*Violation:* Merged PR with page.tsx diff and no site-map update.  
*Source:* AGENTS.md, strategy README

**SR-04 (HARD)** — One L3 CTA above the fold on home (hero primary = Book Automation Map).  
*Violation:* "Book Strategy Call" or email as primary above fold.  
*Source:* site-map §2 contracts, conversion-pipeline §3

**SR-05 (HARD)** — Minimum two proof sections before a second L3 on home.  
*Source:* site-map §2 contracts

**SR-06 (HARD)** — `IntentRouter` on home shows 6 business-relevant cards (hide `flex-vcms` + `flexgrafik-meta` per Commander decision `mapa.txt` 2026-06-29); intent filter dims only, never hides cards. Full 8 repos (`ECOSYSTEM_REPOS`) shown on `/results/owner-ecosystem/` and `/founder/`.  
*Violation:* Showing repo keys/diagrams on home cards, or hiding cards by filter instead of dim.  
*Source:* site-map §3 (v3.0 #7), ecosystem.ts `ECOSYSTEM_REPOS`

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

**SR-12 (HARD)** — quietforge shows governed ecosystem proof: on home = `BuiltVsPlanned` compact (4 rows: Wizard, Jadzia COI, Agent OS, Governance) + "See full architecture →" link in section 9; full LOS + 8-repo + governance details on `/results/owner-ecosystem/`. Not zero-repo mode — governance proof is compact on home, full on owner-ecosystem page.  
*Source:* site-map §3 (v3.0 #6, #9), portfolio truth-sync 2026-06-25, Commander decision `mapa.txt` 2026-06-29

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

**SR-16 (HARD)** — Built vs Planned on home is **compact** (4 rows: Wizard, Jadzia COI, Agent OS, Governance + link to full map on owner-ecosystem); full 8-row table on `/results/owner-ecosystem/`. Data from `readiness.ts` — honest LIVE/PARTIAL/PLANNED labels, de-jargonised capabilities (no LangGraph/Paramiko/Langfuse).  
*Source:* site-map §3 (v3.0 #6), proof-rules, Commander decision `mapa.txt` 2026-06-29

**SR-17 (SOFT)** — Home arc is buyer-first: pain → proof → honesty gate → module pick → method → close — do not revert to full LOS/architecture sections without Commander + site-map update.

---

*18 rules · Detail in strategy canon · Changes require `updated` bump + strategy-check skill sync*
