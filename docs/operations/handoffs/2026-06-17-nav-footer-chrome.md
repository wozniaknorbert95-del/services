# Handoff — Nav + Footer chrome (2026-06-17)

## Cel sesji

Jeden manifest nawigacji (`src/lib/navigation.ts`) dla Header + Footer, zgodność z Conversion Systems Architect canon, bez duplikatów linków i starego copy (Pillar 3 / Done-for-you).

## Dostawa etapowa

| Stage | Zakres | Status |
|-------|--------|--------|
| 1 | `conversion-copy.ts` FOOTER + `navigation.ts` + `constants.ts` migracja | Done |
| 2 | `Header.tsx`, `Footer.tsx`, `layout.tsx` OG/twitter | Done |
| 3 | `conversion-pipeline.md` v2.2, `site-map.md` §6–§7 | Done |
| 4 | typecheck + build + grep + handoff + plan | Done |

## Decyzje zastosowane (D1–D8)

- Header: **Systems** → `/results/`, 5 pozycji, **Blog** tylko w footerze
- CTA header: **L3 Book Automation Map** (`HEADER_CTA` z `CTAS.bookAutomationMap`)
- Footer company: label **Results** (ten sam href co Systems w headerze)
- Solutions dropdown: Inbox → Sales Funnel → Web → Lead Magnet → Managed (badges)
- Footer: legal + 3 PDF artefakty, WhatsApp, portfolio line bez Pillar 3
- Brak redesignu wizualnego — struktura + copy + manifest

## Rozwiązanie konfliktu canon

| Konflikt | Rozwiązanie |
|----------|-------------|
| conversion-pipeline §3 cold header vs site-map §6 L3 w headerze | **site-map wygrywa** — L3 Book w headerze; L1 via Systems nav; Phase 2 traffic-aware w dokumencie |
| Header Systems vs footer Results | Ten sam route, różne etykiety kontekstowe (D7) |

## Pliki zmienione

| Plik | Akcja |
|------|--------|
| `src/content/conversion-copy.ts` | `FOOTER` block |
| `src/lib/navigation.ts` | Create — HEADER_NAV, SOLUTIONS_NAV, FOOTER_*, HEADER_CTA |
| `src/lib/constants.ts` | Usunięto NAV_ITEMS/SOLUTION_DROPDOWN; Stage 4: usunięto re-export z navigation (cykl importów) |
| `src/components/Header.tsx` | Manifest + a11y dropdown + mobile tap targets |
| `src/components/Footer.tsx` | Manifest + FOOTER copy, legal/artefacts |
| `src/app/layout.tsx` | OG/twitter Conversion Systems Architect |
| `docs/strategy/conversion-pipeline.md` | v2.2 — header CTA |
| `docs/strategy/site-map.md` | §6 header CTA, §7 hierarchy + navigation.ts |

## Weryfikacja (Stage 4)

```text
npm run typecheck  — PASS
npm run build      — PASS (31 routes)
```

Grep (rg):

- Pillar 3 | Done-for-you | AI Systems w src/ — 0 trafień
- SOLUTION_LINKS | COMPANY_LINKS w src/ — 0 trafień

Header: import HEADER_NAV z @/lib/navigation; brak Blog w Header.tsx.

## Fix w Stage 4

**Problem:** npm run build — Failed to collect configuration for /about — Cannot access before initialization (cykl constants.ts ↔ navigation.ts przez re-export w constants).

**Fix:** Usunięto export-from navigation z constants.ts. Shim NAV_ITEMS / SOLUTION_DROPDOWN tylko w navigation.ts (deprecated).

## Backlog (poza scope)

- /founder/ rewrite
- public/gratka/*.md PDF footer strings
- Sticky CTA / traffic-aware header CTA (Phase 2)
- /digital-modernization/ orphan route

## Następny krok

Commit + push (Vercel CD) po review Dowódcy — nie commitowano w Stage 4.

## Authority chain

site-map.md §5–6 → conversion-pipeline.md §3, §6 → src/lib/navigation.ts → Header/Footer
