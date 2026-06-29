# Strategy Canon — services.flexgrafik.nl

> **Authority:** These documents are the **L3 detailed** source for marketing, conversion, and UX.  
> **Enforceable HARD rules:** [`docs/canons/`](../canons/README.md) (L2 — wins on conflict).  
> **Direction:** [`docs/canons/vision-system.md`](../canons/vision-system.md) (L1).  
> **Supersedes:** Ad-hoc copy in archived `docs/archive/legacy/` and conflicting notes in old `brain.md`.  
> **Audience:** Hermes, OpenCode, Cursor agents, and human reviewers before any implementation session.

---

## Read order (mandatory before page work)

| Order | Document | Purpose |
|-------|----------|---------|
| 0 | [docs/README.md](../README.md) | Knowledge map |
| 0b | [canons/vision-system.md](../canons/vision-system.md) | North star |
| 0c | [canons/*-rules.md](../canons/README.md) | HARD rules for your task |
| 1 | [marketing-strategy.md](./marketing-strategy.md) | Positioning, ICP, message hierarchy, proof standards |
| 2 | **[site-map.md](./site-map.md)** | **Home section order (LOCKED), 8-repo table, intent colors, routes** |
| 3 | [conversion-pipeline.md](./conversion-pipeline.md) | User flow, navigation, CTA tiers, qualification |
| 4 | [ui-ux-principles.md](./ui-ux-principles.md) | Visual hierarchy, section composition, animation policy |

**Outbound / GTM (channels, LinkedIn, roadmap):** [gtm/README.md](./gtm/README.md) — dual-brand, channel architecture, 90-day roadmap (documentation only).

**LinkedIn channel canon (strategy, rules, calendar):** [linkedin/README.md](./linkedin/README.md) — single-source for LinkedIn B2B activity.

**Facebook channel canon:** [facebook/README.md](./facebook/README.md) — TBD.

**LinkedIn audit baseline:** [gtm/audits/linkedin-audit-2026-06-29.md](./gtm/audits/linkedin-audit-2026-06-29.md) + screenshots in `gtm/audits/assets/`.

**Content data:** `src/content/ecosystem.ts` + `src/content/proof.ts` + `src/content/conversion-copy.ts` — see [content-ssot.md](../architecture/content-ssot.md)  
**Visual tokens:** [DESIGN-SYSTEM.md](../../DESIGN-SYSTEM.md) + `src/app/globals.css`  
**Project memory:** [brain.md](../../brain.md) (tech stack, deploy only)  
**Agent rules:** [AGENTS.md](../../AGENTS.md)

**Anti-chaos rule:** Any change to `src/app/page.tsx` or home section order MUST update `site-map.md` in the same session.

---

## Strategy v2 — one-line summary

**Quietforge** is positioned as a **Conversion Systems Architect** for NL small businesses. The site must answer one question: *"Can this person design and deploy a system that improves my business?"* — not *"Can they build a nice website?"*

Implementation sessions MUST align copy, navigation, and section order to these documents before touching `src/`.

---

## Folder map (strategy layer)

| Path | Purpose |
|------|---------|
| `marketing-strategy.md`, `site-map.md`, `conversion-pipeline.md`, `ui-ux-principles.md` | **Site canon** — IA, funnel, UX |
| [linkedin/](./linkedin/README.md) | **LinkedIn B2B** — strategy, hard rules, 4-week calendar |
| [facebook/](./facebook/README.md) | **Facebook B2B** — TBD |
| [gtm/](./gtm/README.md) | **GTM context** — dual-brand, channel architecture, pillars, 90-day roadmap, investor track |
| [gtm/audits/](./gtm/audits/linkedin-audit-2026-06-29.md) | GTM audits (LinkedIn baseline + assets) |

---

*Owner: Norbert Wozniak · Established: 2026-06-17 · Canon structure: 2026-06-25*
