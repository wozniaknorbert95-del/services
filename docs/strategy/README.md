# Strategy Canon — services.flexgrafik.nl

> **Authority:** These documents are the single source of truth for marketing, conversion, and UX decisions on this site.  
> **Supersedes:** Ad-hoc copy, section ideas, and conflicting notes in `brain.md` §2–§5 where they disagree with strategy v2.  
> **Audience:** Hermes, OpenCode, Cursor agents, and human reviewers before any implementation session.

---

## Read order (mandatory before page work)

| Order | Document | Purpose |
|-------|----------|---------|
| 1 | [marketing-strategy.md](./marketing-strategy.md) | Positioning, ICP, message hierarchy, content blocks, proof standards |
| 2 | **[site-map.md](./site-map.md)** | **Home section order (LOCKED), 8-repo table, intent colors, routes** |
| 3 | [conversion-pipeline.md](./conversion-pipeline.md) | User flow, navigation, CTA tiers, qualification |
| 4 | [ui-ux-principles.md](./ui-ux-principles.md) | Visual hierarchy, section composition, animation policy |

**Content data:** `src/content/ecosystem.ts` + `src/content/proof.ts` + `src/content/conversion-copy.ts`  
**Visual tokens:** [DESIGN-SYSTEM.md](../../DESIGN-SYSTEM.md) + `src/app/globals.css`  
**Project memory:** [brain.md](../../brain.md) (tech stack, guardrails, deploy)  
**Agent rules:** [AGENTS.md](../../AGENTS.md)

**Anti-chaos rule:** Any change to `src/app/page.tsx` or home section order MUST update `site-map.md` in the same session.

---

## Strategy v2 — one-line summary

**Quietforge** is positioned as a **Conversion Systems Architect** for NL small businesses. The site must answer one question: *"Can this person design and deploy a system that improves my business?"* — not *"Can they build a nice website?"*

Implementation sessions MUST align copy, navigation, and section order to these documents before touching `src/`.

---

*Owner: Norbert Wozniak · Established: 2026-06-17 · Next review: after site-map canon lock*
