---
name: rootcause
description: Systematic debugging for services.flexgrafik.nl. Reproduce → isolate → hypothesize → minimal fix → verify. No band-aids, no guess-and-check. Invoke on any bug, build/type failure, broken layout, console error, or unexpected behavior before proposing a fix.
---

# rootcause — Systematic Debugging

Disciplined debugging that finds and fixes the *actual* cause instead of patching symptoms. The cost of a wrong guess is a broken deploy (Vercel CD auto-deploys `master`), so evidence precedes edits.

## When to Use This Skill

Invoke this skill when:
- A build, typecheck, or lint fails for a non-obvious reason
- A page renders wrong, a section is missing, or layout collapses
- Console errors / network 4xx-5xx appear in smoke tests
- Behavior differs between local `dev` and production
- A "fix" was already attempted and didn't hold (stop guessing — restart here)

## Procedure

### Step 1 — Reproduce (get a deterministic failure)

- State expected vs. actual in one sentence each.
- Reproduce locally: `npm run dev` (or `npm run build` for build/type bugs).
- For runtime/visual bugs use MCP `user-chrome-devtools`: `navigate_page` → `list_console_messages` + `list_network_requests` → `take_screenshot`. Capture the exact error text/stack. Use `resize_page`/`emulate` if it's a responsive bug.
- If you cannot reproduce, do not proceed to fix — gather more signal.

### Step 2 — Isolate (shrink the search space)

- Read the actual error and the top frame's file:line. Open it.
- `git diff` / `git log --oneline` — did a recent change introduce it? `git stash` to confirm.
- Narrow to the smallest failing unit: one component, one content key, one CSS var.
- Trace data flow through the content hierarchy: `ecosystem.ts` → `conversion-copy.ts` → `proof.ts` → component (per `site-map.md` §7). Many "bugs" are missing/renamed content keys.

### Step 3 — Hypothesize (one cause at a time)

- Write the single most likely cause as a falsifiable statement.
- Predict what you'd see if true; check that prediction before editing.
- Reject "it might be X or Y or Z" — pick the highest-probability one and test it.

### Step 4 — Minimal fix

- Change the smallest amount of code that addresses the root cause.
- No band-aids: no `any`, no `// @ts-ignore`, no `try/catch` to swallow, no inline `style={{}}` (`ui-ux-principles.md` §11), no hardcoded values where a `qf-*` token exists.
- Keep the fix consistent with the canon and design system.

### Step 5 — Verify

- Re-run the exact reproduction from Step 1 — confirm it now passes.
- Run `verify` (typecheck + build) to confirm no regression.
- Confirm the prediction held; if not, the hypothesis was wrong — return to Step 3.

## Output Format

```markdown
## Rootcause — <short bug title>

**Symptom:** <expected vs actual>
**Reproduction:** <command / URL / steps>
**Root cause:** <the real cause, file:line>
**Why earlier attempts failed (if any):** <…>
**Fix:** <minimal change, files touched>
**Verification:** <reproduction re-run result + build/typecheck>
```

## Guardrails

- One hypothesis at a time. Evidence before edits. No shotgun changes.
- Never ship a symptom patch to make an error message disappear.
- If the fix touches `src/app/page.tsx` (home), the anti-chaos rule applies — update `site-map.md` §2 same session (see `strategy-check`).
- Always close with a real verification, not "should be fixed now".
