# Content files — fill order

Four files power the live site. **Read `docs/strategy/site-map.md` first.**

| File | Purpose |
|------|---------|
| `ecosystem.ts` | 8 modules, 8 repos, intent colors, pain grid, home section markers |
| `conversion-copy.ts` | Hero, positioning, objections, about copy — binding EN strings |
| `proof.ts` | Metrics, screens, videos, pricing, case measurements |
| `metrics-display.ts` | How metrics render on home (labels, outcomes, intent colors) |

Barrel import: `src/content/index.ts`

## Fill order

1. **`ecosystem.ts`** — rarely changes; defines structure (modules, routes, intents).
2. **`conversion-copy.ts`** — edit hero/objections when positioning shifts (with site-map update).
3. **`proof.ts`** — fill metrics, confirm screens exist in `/public/gratka/`, set `ready: true`.
4. **`metrics-display.ts`** — only when adding/removing metric cards on home.

## Videos (last phase)

Do **not** enable video placeholders on home. When a Loom/embed is ready:

- Set `videos.*.url` in `proof.ts`
- Set `ready: true`
- Videos appear on case studies / behind-the-scenes only — not home hero or ecosystem teaser.

## Screens

When PNG/SVG exists in `public/gratka/`:

- Match path in `proof.ts` → `screens.*.src`
- Set `ready: true`

## Pricing

`pricing.singleSystem`, `ecosystem`, `maintenance` — fill `from` / timeline / includes when ready.

Components read these files automatically — no JSX edits needed for new proof data.
