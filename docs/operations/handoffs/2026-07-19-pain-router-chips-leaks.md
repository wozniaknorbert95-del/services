# Handoff — Pain router chips + 9 leaks (2026-07-19)

**Repo:** quietforge.flexgrafik.nl (services) · **Build:** `npm run build` ✅  
**Status:** READY TO SHIP  
**Canon:** `docs/strategy/site-map.md` §3 **v5.1**

## Cel / Goal

Przenieść chipy intent do sekcji „Where is time or money leaking?” i wzbogacić leaki (9 kart ze stratą + fixem modułu). IntentRouter na home bez duplikatu chipów.

## Co zrobiono / What changed

- PainGrid: `IntentFilterChips` + 9 kart (`costLine` / `fixLine` / `moduleLabel`)
- IntentRouter: `showChips={false}` na home; `/solutions/` nadal z chipami
- Canon + strategy-check → v5.1

## Pliki / Files

| File | Action |
|------|--------|
| `src/components/home/PainGrid.tsx` | chips + richer cards |
| `src/components/home/IntentRouter.tsx` | `showChips` prop |
| `src/content/ecosystem.ts` | PAIN_GRID ×9 + header filters |
| `src/app/page.tsx` | `IntentRouter showChips={false}` |
| `src/app/globals.css` | `.qf-pain-fix` / module |
| `docs/strategy/site-map.md` | §3 v5.1 |
| `.agents/skills/strategy-check/SKILL.md` | sync |

## Weryfikacja / Verification

```bash
npm run typecheck   # pass
npm run build       # pass
```

## Post-deploy smoke (Dowódca)

1. `/` — 5 chipów **w** sekcji Pain (nie dopiero przy modules)
2. `/` — 9 leak cards; Quote first; filter dims pain + modules
3. `/` — IntentRouter **bez** drugiego rzędu chipów
4. `/solutions/` — IntentRouter **z** chipami

## Następny krok / Next steps

- **ship** na komendę Dowódcy
