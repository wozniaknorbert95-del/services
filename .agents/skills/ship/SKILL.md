---
name: ship
description: Safe commit + push to master for services.flexgrafik.nl (Vercel auto-deploys master). Reviews git status/diff/log, writes a conventional message, NEVER commits .cursor/ or secrets, pushes, and prints a post-deploy smoke reminder. Invoke only after verify passes.
---

# ship — Safe Commit & Deploy

Pushing to `master` triggers Vercel CD → production. This skill makes that safe: verified build, clean diff review, no secrets, no stray files.

## When to Use This Skill

Invoke this skill when:
- A session's work is complete and `verify` returned PASS
- The user explicitly asks to commit / push / deploy
- A `handoff` has been (or is about to be) written

Do NOT invoke to commit speculative or unverified work.

## Procedure

### Step 1 — Preconditions

- `verify` verdict = PASS (build green). If not, stop and fix first.
- Confirm the user actually asked to commit (commit only on explicit request).

### Step 2 — Review what will ship

Run in parallel and read carefully:

```bash
git status
git diff           # staged + unstaged
git log --oneline -5   # match message style
```

Identify every file. **Exclude from the commit:**
- `.cursor/` (screenshots, plans) — never commit
- secrets / env: `.env*`, credentials, tokens, keys
- unrelated untracked docs not part of this session's scope

Stage explicitly (`git add <path>`), not blindly `git add -A`, when untracked noise is present.

### Step 3 — Commit (conventional message via HEREDOC)

```bash
git commit -m "$(cat <<'EOF'
<type>: <concise what + why>

<optional body: key changes, canon docs updated>
EOF
)"
```

Types: `feat` / `fix` / `refactor` / `docs` / `chore`. One logical change per commit. Mention if `site-map.md` was updated alongside `page.tsx`.

### Step 4 — Push

```bash
git push origin master
```

Never force-push `master`. Never `--no-verify`.

### Step 5 — Post-deploy reminder

## Output Format

```markdown
## Shipped — <commit subject>

**Commit:** <hash> · **Branch:** master → Vercel CD
**Files:** <n committed> · **Excluded:** <.cursor / untracked docs, if any>

### Post-deploy smoke (Dowódca)
- node scripts/audit-404s.mjs → failed: [] per route
- Live: <key route> renders correct H1 / section
- <env vars to confirm in Vercel, if any>
```

## Guardrails

- Build MUST pass before commit (AGENTS.md §8) — `ship` depends on `verify` PASS.
- NEVER commit `.cursor/`, `.env*`, secrets, or unrelated untracked docs.
- NEVER update git config; never force-push or skip hooks.
- Deploy is auto via push to `master` — there is no manual prod step here, but flag risky changes to the owner before pushing.
- Pair with `handoff` so every deploy has a paper trail.
