# Handoff — Logo remediation (2026-06-24)

## Cel

Naprawa amatorskiego wyglądu logo w headerze: wordmark typograficzny zamiast miniatury PNG; graficzne logo jako subtelny watermark w hero.

## Diagnoza

PNG 1024×1024 skalowany do 36px w headerze → nieczytelny. Design system (`DESIGN-SYSTEM.md` §8) przewiduje `▍ quietforge` (`.qf-logo`), nie grafikę w nav.

## Dostawa

| Element | Rozwiązanie |
|---------|-------------|
| Header | `BrandLogo` → tekst `▍ quietforge`, mono 16px / 20px desktop |
| Footer | Ten sam wordmark (16px) |
| Hero | `BrandWatermark` — PNG 480px max, opacity 4%, ukryty `<820px` |
| Favicon | Bez zmian — PNG w `layout.tsx` |

## Pliki

- `src/components/ui/BrandLogo.tsx` — wordmark
- `src/components/ui/brand-logo.css` — wordmark + watermark
- `src/components/ui/BrandWatermark.tsx` — nowy
- `src/components/home/HeroSection.tsx` — watermark + z-index
- `src/lib/constants.ts` — `BRAND_WORDMARK`
- `docs/plans/2026-06-24-logo-remediation-plan.md`

## Weryfikacja

```text
npm run build — PASS (33 routes)
```

## Następny krok (opcjonalnie)

- Wizualny smoke test na produkcji po deployu
- Rozważyć dedykowany SVG wordmark pod PDF/OG
