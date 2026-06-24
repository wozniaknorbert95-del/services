# Go-live checklist — quietforge + LinkedIn + Search Console (2026-06-24)

## Status werdyktu

| Warstwa | Status | Uwagi |
|---------|--------|-------|
| Kod + deploy (`7eefcb5`) | ✅ PASS | CI success, metadata `quietforge.flexgrafik.nl` |
| `flexgrafik-services.vercel.app` | ✅ PASS | Agent OS case study 200, sitemap OK |
| DNS autorytatywny (CyberFolks) | ✅ PASS | `quietforge` → `76.76.21.21` |
| DNS publiczny (Google 8.8.8.8) | ✅ PASS | `76.76.21.21` |
| HTTPS `quietforge.flexgrafik.nl` | ✅ PASS | HTTP **200** — verified 2026-06-24 post-deploy (`9c5f9f3`) |
| Vercel domain verify | ✅ PASS | Live on custom host; lead-magnet + agent-orchestrator routes 200 |

**LinkedIn Featured + GSC — odblokowane.** Wykonaj P1 poniżej.

---

## P0 — Naprawa DNS (CyberFolks, ~5 min)

`portfolio.flexgrafik.nl` działa na **CNAME** do Vercel (`*.vercel-dns-*.com`), nie na gołym A.

### Zrób tak:

1. **Usuń** rekord **A** `quietforge` → `76.76.21.21`
2. **Dodaj** rekord **CNAME**:
   - Host: `quietforge`
   - Wartość: `cname.vercel-dns.com`
3. Vercel → [flexgrafik-services → Settings → Domains](https://vercel.com/wozniaknorbert95-dels-projects/flexgrafik-services/settings/domains) → sprawdź czy pokazuje inną wartość CNAME (project-specific) — jeśli tak, użyj **tej** z dashboardu
4. Poczekaj 5–30 min → odśwież domenę w Vercel → status **Valid**
5. Ustaw `quietforge.flexgrafik.nl` jako **Primary Domain**

### Smoke po naprawie:

```powershell
curl.exe -sI https://quietforge.flexgrafik.nl/
curl.exe -sI https://quietforge.flexgrafik.nl/results/agent-orchestrator/
```

Oczekiwane: `HTTP/1.1 200` + certyfikat Let's Encrypt.

---

## P1 — LinkedIn Featured (po HTTPS 200)

**Konto:** [linkedin.com/in/norbert-wozniak-172b76367](https://www.linkedin.com/in/norbert-wozniak-172b76367)

### Krok po kroku

1. Profil → **Add profile section** → **Recommended** → **Add featured**
2. **Add a link** → URL: `https://quietforge.flexgrafik.nl/`
   - Tytuł: `Quietforge — Conversion Systems Architect`
   - Opis: `Case studies, pricing, book your Automation Map (€290)`
3. **Add a link** → URL: `https://quietforge.flexgrafik.nl/book-discovery/`
   - Tytuł: `Book your Automation Map`
4. Opcjonalnie PDF: `https://quietforge.flexgrafik.nl/artefacts/automation-map-sample.pdf`
5. **Services** (jeśli jeszcze „Contact for pricing”):
   - Zmień na: `Automation Map from €290 · builds from €1,200`
   - Link: `https://quietforge.flexgrafik.nl/pricing/`

### Featured — docelowa lista (AUD-L04)

| # | URL | Label |
|---|-----|-------|
| 1 | `https://quietforge.flexgrafik.nl/` | Quietforge — systems & case studies |
| 2 | `https://quietforge.flexgrafik.nl/book-discovery/` | Book Automation Map (€290) |
| 3 | `https://quietforge.flexgrafik.nl/results/agent-orchestrator/` | Case study — Agent OS |
| 4 | PDF Automation Map sample | Download sample |

---

## P1 — Google Search Console (po HTTPS 200)

1. Wejdź: [search.google.com/search-console](https://search.google.com/search-console)
2. **Add property** → **URL prefix**: `https://quietforge.flexgrafik.nl/`
3. Weryfikacja (najprościej): **HTML tag** w `layout.tsx` `<head>`  
   LUB **DNS TXT** w CyberFolks (jeśli GSC poda rekord)
4. Po verify → **Sitemaps** → dodaj: `https://quietforge.flexgrafik.nl/sitemap.xml`
5. **URL Inspection** → `https://quietforge.flexgrafik.nl/results/agent-orchestrator/` → Request indexing

### Opcjonalnie (stara property)

Jeśli masz property na `services.flexgrafik.nl` — zostaw; nowa canonical to quietforge. Po dodaniu A/CNAME dla `services` redirect 301 już jest w `vercel.json`.

---

## Go / No-Go — kiedy „możemy iść dalej”

| Check | Go? |
|-------|-----|
| `https://quietforge.flexgrafik.nl/` → 200 | wymagane |
| Agent OS case study → title „Agent OS” | wymagane |
| Vercel Domains → Valid + SSL | wymagane |
| LinkedIn Featured zaktualizowane | po Go |
| GSC sitemap submitted | po Go |

**Teraz:** kod gotowy ✅ · domena custom ✅ · LinkedIn/GSC — owner action (P1 poniżej).

---

## Tymczasowy link (fallback)

https://flexgrafik-services.vercel.app/ — alias Vercel; canonical = quietforge.
