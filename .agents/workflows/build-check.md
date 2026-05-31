---
description: Pre-commit build and TypeScript verification for services/
---

# Build Check — services.flexgrafik.nl

## Purpose
Ensure code compiles, types are correct, and static export produces valid HTML before any commit.

## Steps

1. Ensure you're in `services/` directory
2. Run: `npm run build`
3. Verify output:
   - "Compiled successfully" with no errors
   - "Generating static pages" completes for all routes
   - `dist/` directory exists with `index.html` and route folders (`inbox-killer/`, `digital-modernization/`, `legal/`)
4. Run: `npm run typecheck` (alias: `npx tsc --noEmit`)
5. Verify: zero TypeScript errors, zero `any` types
6. If errors exist: fix them first. Never commit with `--no-verify`.

## Acceptance Criteria
- [ ] `npm run build` exits with code 0
- [ ] `dist/` contains `index.html`, `inbox-killer/index.html`, `digital-modernization/index.html`, `legal/index.html`
- [ ] `npm run typecheck` exits with code 0
- [ ] No console warnings about missing metadata or OG images

## Troubleshooting

| Error | Fix |
|---|---|
| `Cannot find module '@/components/...'` | Check `tsconfig.json` paths mapping. Ensure file exists. |
| `Event handlers cannot be passed to Client Component props` | Server Component cannot have `onSubmit`. Extract form to `'use client'` component. |
| `Image optimization disabled` | Expected — we use `unoptimized: true` in `next.config.ts` for static export. |
