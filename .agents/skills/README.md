# Agent Skills — services.flexgrafik.nl

Repo-specific skills for the Quietforge Conversion Systems portfolio (Next.js 16 / React 19 / TS strict / Tailwind v4). Each skill lives in `<slug>/SKILL.md` with frontmatter Cursor loads automatically. Content is English; team comms stay PL (per `AGENTS.md`).

## Workflow skills (the session loop)

| Skill | Purpose | When to invoke |
|-------|---------|----------------|
| [vibeinit](./vibeinit/SKILL.md) | Session bootstrap — read canon, git state, handoffs → ADHD-friendly anchor (CO / DLACZEGO / NASTĘPNY KROK) | Start of every session |
| [section-build](./section-build/SKILL.md) | Disciplined component work — 1/session, ≤8 utils/element, qf-* tokens, dark + reduced-motion | Building/editing a home or page section |
| [strategy-check](./strategy-check/SKILL.md) | Canon compliance — LOCKED home order, intent colors, single-L3, Problem→System→Effect; enforces anti-chaos (site-map.md sync) | Home / money-page changes |
| [proof-check](./proof-check/SKILL.md) | Content integrity — no `[FILL:]`, real metrics, proof assets, claims traceable to `src/content/*` | After content edits / before shipping proof pages |
| [design-review](./design-review/SKILL.md) | Quietforge token gate — sharp corners, borders not shadows, no gradients, no inline styles | Before shipping any UI change |
| [og-route](./og-route/SKILL.md) | New-route completeness — OG image + sitemap + robots + metadata (AGENTS.md §9–10) | Adding a new `src/app` route |
| [rootcause](./rootcause/SKILL.md) | Systematic debugging — reproduce → isolate → hypothesize → minimal fix → verify; no band-aids | Any bug, build/type failure, broken layout |
| [verify](./verify/SKILL.md) | Build & quality gate — typecheck, lint, build, 404 audit, ReadLints → pass/fail table | Before every commit (build MUST pass) |
| [ship](./ship/SKILL.md) | Safe commit + push to master (Vercel CD) — diff review, no secrets/.cursor, post-deploy smoke | After `verify` PASS, on explicit request |
| [handoff](./handoff/SKILL.md) | Write `docs/operations/handoffs/YYYY-MM-DD-[feature].md` — goal, files, verification, smoke, next steps | End of every session |

## Typical session order

`vibeinit` → (`section-build` / `rootcause`) → `strategy-check` + `proof-check` + `design-review` → `verify` → `handoff` → `ship`

## Audit skills (deeper, on demand)

| Skill | Purpose |
|-------|---------|
| [ui-design-review](./ui-design-review/SKILL.md) | Full visual-quality evaluation (typography, color, hierarchy, 10 dimensions) |
| [nielsen-heuristics-audit](./nielsen-heuristics-audit/SKILL.md) | Usability audit against Nielsen's 10 heuristics |

`design-review` is the fast per-session token gate; `ui-design-review` is the comprehensive aesthetic review.

## Conventions

- Strategy canon is binding — read order in `vibeinit` / `docs/strategy/README.md`.
- Build must pass before commit (`AGENTS.md` §8). Push to `master` = production (Vercel CD).
- Never commit `.cursor/`, secrets, or unrelated untracked docs.
- MCP available where useful: `user-chrome-devtools` (live smoke / lighthouse), `plugin-figma-figma` (design-to-code).
