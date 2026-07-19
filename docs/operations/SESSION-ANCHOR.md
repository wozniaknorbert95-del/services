# SESSION-ANCHOR — Live Session Pointer

**Updated:** 2026-07-19 · **Status:** READY TO SHIP · **Home IA v4.0**  
**Build:** `npm run typecheck` ✅ · `npm run build` ✅ (26 sitemap routes)  
**Handoff:** [`handoffs/2026-07-19-home-ia-v4.md`](./handoffs/2026-07-19-home-ia-v4.md)

---

## WYNIK (lokalnie)

| Item | Status |
|------|--------|
| site-map §3 v4.0 | ✅ |
| Home 7 sections (Pain only router) | ✅ |
| Spearhead + metrics strip | ✅ |
| WhyItWorks merged KEEP | ✅ |
| IntentRouter on `/solutions/` | ✅ |
| DualBrand / Featured off home | ✅ |

---

## NASTĘPNY KROK (Commander)

1. **Ship** — commit + push do `master` (Vercel CD)  
2. Post-deploy smoke z handoffu  
3. Smoke mobile fold na telefonie  

---

## WEEKLY GA4

```bash
GOOGLE_APPLICATION_CREDENTIALS=~/.config/quietforge-ga-sa.json npm run ga4:gate
```

---

*Maintainer: update at end of every session*
