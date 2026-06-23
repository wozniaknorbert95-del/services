---
name: verify
description: Build and quality gate for services.flexgrafik.nl. Runs the canonical checks (npm run build, npm run typecheck, lint, 404 audit, ReadLints on changed files) and reports a pass/fail table. Invoke before every commit — build MUST pass before commit (AGENTS.md §8).
---

# verify — Build & Quality Gate

The mandatory gate between "changed code" and "commit". Binding rule from `AGENTS.md` §8 and `ui-ux-principles.md` §11: **`npm run build` must pass before any commit**. TypeScript is strict — zero `any`.

## When to Use This Skill

Invoke this skill when:
- About to commit or push (always — non-negotiable)
- Finishing a component/page session (`section-build`) or a bugfix (`rootcause`)
- Verifying nothing broke after a refactor or dependency change
- Before writing a `handoff` (the handoff records the verification result)

## Procedure

### Step 1 — Static + build checks (local)

Run from repo root, in order. Stop and fix on first failure (don't stack errors):

```bash
npm run typecheck    # tsc --noEmit — zero errors, zero `any`
npm run lint         # next lint
npm run build        # runs prebuild sitemap gen + next build — MUST pass
```

`npm run build` also regenerates the sitemap via `scripts/generate-sitemap.mjs` (prebuild hook). Note the route count in the output (e.g. "33 routes") for the handoff.

### Step 2 — Lints on changed files

Use ReadLints on the files you actually touched (don't widen scope to the whole repo). Fix any lints you introduced; only fix pre-existing lints if trivial and related.

### Step 3 — Content integrity (if content/proof touched)

```bash
rg '\[FILL:' src/    # expect 0 matches — no placeholders shipped
```

For deeper content auditing, hand off to `proof-check`.

### Step 4 — Live smoke (post-deploy or on demand)

`scripts/audit-404s.mjs` runs against the deployed Vercel URL (Playwright), so it is a **post-deploy** check, not a pre-commit one:

```bash
node scripts/audit-404s.mjs   # expect failed: [] per route
```

**Live smoke via MCP (`user-chrome-devtools`)** — when verifying a running `npm run dev` or production page:
- `navigate_page` → target URL
- `list_console_messages` → expect 0 errors/warnings
- `list_network_requests` → expect 0 `4xx`/`5xx`
- `take_screenshot` → visual sanity (desktop + `resize_page`/`emulate` mobile)
- `lighthouse_audit` → Accessibility ≥ 95 target (`ui-ux-principles.md` §9)

## Output Format

```markdown
## Verify — <date> · <branch>

| Check | Command | Result |
|-------|---------|--------|
| Typecheck | npm run typecheck | ✅ / ❌ <n errors> |
| Lint | npm run lint | ✅ / ❌ |
| Build | npm run build | ✅ <n routes> / ❌ |
| Changed-file lints | ReadLints | ✅ / ❌ <files> |
| Placeholders | rg '\[FILL:' src/ | ✅ 0 / ❌ <n> |
| 404 audit (post-deploy) | node scripts/audit-404s.mjs | ✅ / ❌ / ⏭ skipped |

**Verdict:** PASS — safe to commit / FAIL — fix before commit
**Notes:** <route count, any waivers>
```

## Guardrails

- **Never** commit on a failing build (AGENTS.md §8). PASS verdict is required input to `ship`.
- Fix the root cause of failures, not the symptom — escalate to `rootcause` for non-obvious build/type errors.
- `audit-404s.mjs` hits the **live** Vercel URL; don't treat its result as a pre-merge gate for un-deployed changes.
- Report exact numbers (error counts, route count) — no "looks fine" without evidence.
