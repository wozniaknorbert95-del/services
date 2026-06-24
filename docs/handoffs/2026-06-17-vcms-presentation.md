# Handoff — VCMS presentation closure (2026-06-17)

## Cel sesji

**Tylko prezentacja VCMS** na services.flexgrafik.nl — jak governance layer jest pokazany klientowi (home, IntentRouter, BTS, owner-ecosystem, assety). **Nie** nav w Solutions, **nie** funnel audit P0.

---

## Gdzie VCMS jest widoczny

| Miejsce | Co pokazuje | Status |
|---------|-------------|--------|
| Home `IntentRouter` (m5) | Karta „VCMS (Governance Layer)”, thumb `vcms-dashboard.svg`, link → `#why-vcms` | ✅ |
| Home `IntentRouter` (intent **order**) | VCMS pierwszy w sortowaniu + copy „including VCMS governance” | ✅ |
| Home `OwnerEcosystemTeaser` | 1 linia + diagram z VCMS hub | ✅ |
| Home `BehindTheScenes` (`#governance`) | 3 screeny VCMS + video `vcms-demo.mp4` + feature badges | ✅ |
| Home `SystemArchitecture` | Node „VCMS — Command centre + data” | ✅ |
| Home metadata / `conversion-copy` | „Custom VCMS” w proof line | ✅ |
| `/results/owner-ecosystem/` | Karta `flex-vcms` + sekcja `id="why-vcms"` | ✅ |
| `/results/owner-ecosystem/` flow step 06 | Supervision — Flex-VCMS | ✅ |
| `/results/` hub | Ecosystem diagram z VCMS | ✅ |
| `ecosystem.ts` m5 + repo #5 | Manifest: route, screenKey, intents | ✅ |
| `proof.ts` | screens, video, `vcmsFeatureStatus` | ✅ |
| `public/gratka/vcms-*.svg` + `audit-log.svg` + `conflict-report.svg` | Proof assety | ✅ (encoding naprawiony lokalnie) |
| `public/gratka/vcms-demo.mp4` | 69s demo (~4 MB) | ✅ |
| `ProofScreenImage` | SVG → native `<img>`, raster → `next/image` | ✅ |
| `ModulePreviewThumb` | Thumb z `proof.screens` | ✅ |
| Nav Solutions / footer company | **Brak VCMS** (kanon) | ✅ świadomie |
| Produkcja Vercel | Assety 200 OK | ✅ |
| DNS `services.flexgrafik.nl` | Nie rozwiązuje | ⚠️ użyj Vercel URL do weryfikacji |

---

## Co naprawiono w sesji (cumulative)

| Fix | Opis |
|-----|------|
| BTS filter | Tylko `vcmsDashboard`, `conflictReport`, `auditLog` — bez agent screens |
| Clickable cards | `IntentRouter` — cała karta w `<Link>` |
| `#why-vcms` anchor | `ROUTES.resultsOwnerEcosystemWhyVcms` + `id="why-vcms"` na owner-ecosystem |
| `ProofScreenImage` | SVG przez `<img>` (bez next/image quirks) |
| `ModulePreviewThumb` | Mini-screens w IntentRouter + owner-ecosystem repo cards |
| Video self-host | `videos.vcms` → `/gratka/vcms-demo.mp4`, `ready: true` |
| SVG encoding | Usunięto mojibake (`ï¿½`, `â€"`, `âœ"`) → ASCII-safe w 3 SVG |
| Nav revert | VCMS poza Solutions dropdown (osobna sesja funnel) |

---

## Co działa — dowód

```text
npm run typecheck  — PASS
npm run build      — PASS (31 routes)

public/gratka/vcms-demo.mp4     — exists, 4 095 252 bytes
public/gratka/vcms-dashboard.svg — valid SVG, ASCII text
public/gratka/audit-log.svg      — valid SVG
public/gratka/conflict-report.svg — valid SVG

Produkcja (Vercel):
  200 image/svg+xml  /gratka/vcms-dashboard.svg
  200 video/mp4      /gratka/vcms-demo.mp4
  200 text/html      /results/owner-ecosystem/
```

**Ścieżka klienta (kanon):** Header **Systems** → `/results/` → owner-ecosystem → `#why-vcms`  
Alternatywnie: Home order intent → VCMS karta → `#why-vcms` lub Home `#governance` → case study link.

---

## Otwarte (tylko VCMS)

| Item | Uwaga |
|------|-------|
| Deploy SVG fix | Encoding fix jest lokalny — push na `master` żeby Vercel podmienił SVG |
| `services.flexgrafik.nl` DNS | Vercel URL działa; custom domain do skonfigurowania poza repo |
| `vcms-demo-poster.jpg` | Opcjonalny poster — brak, video działa bez |

---

## Świadomie poza scope

- **Nav VCMS w Solutions** — nie; governance = proof under Systems
- **Funnel P0** (np. inbox-killer wrong page) — osobna sesja
- **IntentRouter video per module** — Phase B, nie blokuje prezentacji
- **Case study video placeholders** — poza VCMS

---

## Następny krok

1. Push SVG encoding fix → Vercel CD
2. Po deploy: DevTools → Home `#governance` + order intent + `/results/owner-ecosystem/#why-vcms`
3. DNS `services.flexgrafik.nl` — jeśli potrzebne, poza tą sesją

**Sesja VCMS presentation: zamknięta.**
