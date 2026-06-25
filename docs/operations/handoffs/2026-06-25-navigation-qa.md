# Handoff — Navigation QA + menu/footer audit closure (2026-06-25)

**Repo:** services.flexgrafik.nl · **Build:** `npm run build` ✅ (34 routes) · **Ship:** `1da5aab` on `master`

## Cel / Goal

Close LOS/nav gaps, verify home sections and all navigation paths, fix menu/footer audit findings (footer Architecture LOS deep link), deploy, and confirm production smoke.

## Co zrobiono / What changed

### Session A — LOS gaps + nav QA (`b4a6d89`)
- LOS PDF pipeline (`los-architecture.md/pdf`), download buttons on results + owner-ecosystem
- `HashScroll` v1 + section ids + scroll CSS for home anchors
- Footer **About** restored; WhatsApp case #08 link on `/results/`
- `audit-navigation.mjs`, `audit-navigation-extended.mjs`, `legal.svg` OG

### Session B — Menu/footer audit + deploy (`1da5aab`)
- **Bug fix:** footer **Architecture (LOS)** → `/results/owner-ecosystem/#los` did not scroll on production — `HashScroll` now retries at 0/100/400/1200/2500 ms until `#los` is in viewport
- **Dedicated audit:** `scripts/audit-menu-footer.mjs` — header, dropdown, footer columns, mobile menu, company hrefs, `#los` scroll
- **npm scripts:** `audit:navigation`, `audit:menu-footer`
- **Canon:** `conversion-pipeline.md` §6 — header = Founder's System, About footer-only

## Pliki / Files

| File | Action |
|------|--------|
| `src/components/layout/HashScroll.tsx` | update — retry scroll |
| `scripts/audit-menu-footer.mjs` | new |
| `scripts/audit-navigation.mjs` | new (prior commit) |
| `scripts/audit-navigation-extended.mjs` | new (prior commit) |
| `package.json` | update — audit npm scripts |
| `docs/strategy/conversion-pipeline.md` | update — header/footer canon |
| `docs/strategy/site-map.md` | update — §6 footer (prior) |
| `src/lib/navigation.ts`, `Header.tsx`, `Footer.tsx` | nav audit (prior `dfd4760`) |

## Weryfikacja / Verification

```bash
npm run typecheck                          # pass
npm run build                              # pass (34 routes)
rg '\[FILL:' src/                          # 0 matches
npm run audit:navigation -- http://localhost:3001     # PASS
npm run audit:menu-footer -- http://localhost:3001    # PASS (10/10)
```

## Post-deploy smoke (executed 2026-06-25 · `1da5aab`)

**Production:** https://quietforge.flexgrafik.nl

| Check | Result |
|-------|--------|
| `npm run audit:navigation -- https://quietforge.flexgrafik.nl` | **PASS** |
| `npm run audit:menu-footer -- https://quietforge.flexgrafik.nl` | **PASS** — incl. `#los` in view |
| `node scripts/audit-navigation-extended.mjs https://quietforge.flexgrafik.nl` | **PASS** |

### Menu/footer audit checklist (all ✅ on prod)

| ID | Rule |
|----|------|
| header-nav-count | 5 items + Solutions button |
| header-cta-l3 | Book Automation Map → `/book-discovery/` |
| solutions-dropdown | All solutions + 5 products |
| footer-solutions | Matches `FOOTER_SOLUTIONS` |
| footer-company | Matches `FOOTER_COMPANY` (incl. About + Architecture LOS) |
| footer-no-whatsapp-dup | WhatsApp only in SocialLinks |
| footer-company-hrefs | All HTTP 200 |
| footer-arch-los-anchor | **Architecture (LOS) scrolls to `#los`** |
| mobile-menu | Header + solutions sub-links |

## Następny krok / Next steps

- Deferred: desktop StickyCta pill; remove deprecated `owner-ecosystem-map.svg`
- Re-run `npm run audit:menu-footer -- https://quietforge.flexgrafik.nl` after any nav/footer change
