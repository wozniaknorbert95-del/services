# GA4 one-offs — ZZPackage property access

Historical Playwright scripts (2026-06) to grant `quietforge-ga-reader-712@flexgrafik.iam.gserviceaccount.com` Viewer on **ZZPackage Shop** property `528785553`.

**Portfolio SSoT:** Quietforge analytics = property `543331587` / `G-LY0E7MW0HF` — use [`ga4-provision-ui.mjs`](../../ga4-provision-ui.mjs).

| Script | Notes |
|--------|--------|
| `ga4-add-zzpackage-viewer.mjs` | v1 — profile copy |
| `ga4-add-zzpackage-viewer-v2.mjs` | v2 — screenshots to `docs/archive/operations/` |
| `ga4-add-zzpackage-viewer-live-profile.mjs` | live Chrome profile (Chrome must be closed) |

Run from repo root only if ZZPackage MCP access is needed again:

```bash
node scripts/archive/ga4-oneoffs/ga4-add-zzpackage-viewer-live-profile.mjs
```
