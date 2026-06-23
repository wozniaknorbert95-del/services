# Handoff — Repo skill library (2026-06-24)

**Repo:** services.flexgrafik.nl · **Build:** `npm run build` ✅ (33 routes)

## Cel / Goal

Stworzyć kuratorowaną bibliotekę 10 repo-specyficznych Agent Skills w `.agents/skills/<slug>/SKILL.md`, używanych w każdej sesji. Format frontmatter zgodny z istniejącymi skillami (`ui-design-review`, `nielsen-heuristics-audit`), żeby Cursor je ładował. Treść EN, zwięzła i actionable.

## Co zrobiono / What changed

Dodano 10 skilli + indeks. Każdy ma: frontmatter (`name` + `description` z triggerem), "When to Use", krok-po-kroku procedurę, repo-specyficzne komendy/ścieżki, format outputu, guardrails.

**4 nazwane (wymagane):**
- `vibeinit` — bootstrap sesji: czyta canon w kolejności z AGENTS.md → git status/branch → handoffs → anchor CO/DLACZEGO/NASTĘPNY KROK
- `verify` — bramka jakości: `typecheck` + `lint` + `build` + `audit-404s.mjs` + ReadLints → tabela pass/fail; build MUST pass before commit (§8)
- `rootcause` — systematic debugging: reproduce → isolate → hypothesize → minimal fix → verify; bez band-aidów
- `handoff` — pisze `docs/handoffs/YYYY-MM-DD-[feature].md` wg konwencji repo

**6 wybranych (senior judgment):**
- `ship` — bezpieczny commit + push do master (Vercel CD): review diff, conventional msg, NIGDY `.cursor/`/secrets, post-deploy smoke
- `strategy-check` — zgodność z canon: LOCKED home order (site-map §2), intent colors (§4), single-L3, Problem→System→Effect, anti-chaos (sync site-map.md)
- `proof-check` — integralność proof: zero `[FILL:]`, realne metryki, ProofScreenSlot/VideoSlot assets, claims traceable do `src/content/*`
- `section-build` — dyscyplina komponentów: 1/sesja, max 8 utils/element (→ qf-*), dark tokens, prefers-reduced-motion, mobile-first
- `og-route` — kompletność nowej route: OG image + sitemap + robots + metadata (§9–10)
- `design-review` — szybka bramka design-system (sharp corners --qf-radius, borders not shadows, no gradients, qf-* tokeny) — uzupełnia głębszy `ui-design-review`

Rationale: pokrywają pełną pętlę sesji (bootstrap → build → compliance → verify → handoff → ship) bez duplikowania zakresu dwóch istniejących skilli audytowych. `design-review` to lekka bramka tokenowa per-sesja; `ui-design-review`/`nielsen-heuristics-audit` zostają jako głębokie audyty na żądanie.

## Pliki / Files

| File | Action |
|------|--------|
| `.agents/skills/vibeinit/SKILL.md` | new |
| `.agents/skills/verify/SKILL.md` | new |
| `.agents/skills/rootcause/SKILL.md` | new |
| `.agents/skills/handoff/SKILL.md` | new |
| `.agents/skills/ship/SKILL.md` | new |
| `.agents/skills/strategy-check/SKILL.md` | new |
| `.agents/skills/proof-check/SKILL.md` | new |
| `.agents/skills/section-build/SKILL.md` | new |
| `.agents/skills/og-route/SKILL.md` | new |
| `.agents/skills/design-review/SKILL.md` | new |
| `.agents/skills/README.md` | new (index, 10 + 2 audit) |
| `docs/handoffs/2026-06-24-skill-library.md` | new (this) |

## MCP integrations referenced

- `user-chrome-devtools` — live smoke w `verify`/`rootcause`/`design-review`/`proof-check`/`og-route` (`navigate_page`, `list_console_messages`, `list_network_requests`, `take_screenshot`, `resize_page`/`emulate`, `lighthouse_audit`)
- `plugin-figma-figma` — design-to-code w `design-review` (`get_design_context`) → mapowanie do `qf-*` tokenów
- MCP wpleciony tylko tam, gdzie dodaje wartość (nie forsowany).

## Weryfikacja / Verification

```bash
npm run build   # PASS (33 routes, exit 0)
```

Skille to dokumenty (md) — nie wpływają na bundle; build potwierdza brak regresji w repo.

## Następny krok / Next steps

- Używać `vibeinit` na starcie każdej sesji; zamykać `handoff` → `ship`.
- Opcjonalnie: dopisać do `AGENTS.md` wskaźnik na `.agents/skills/README.md` jako kanoniczny session loop.
- Rozważyć skill `i18n` gdy ruszy NL hreflang (deferred epic, ui-ux-principles §16).
