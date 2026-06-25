# Wizard video — manual recording (Commander)

**Policy:** No Playwright auto-capture. Same as VCMS: **you record in the browser**, Agent only drops the file and flips `proof.ts`.

**Target:** `public/gratka/wizard-demo.mp4` · **45–60s** · 1920×1080  
**URL:** https://zzpackage.flexgrafik.nl/

---

## Setup (5 min)

1. Chrome — jedna karta, zoom 100–110%, okno max (nie fullscreen jeśli OBS na cały monitor).
2. **OBS** lub **Win+G** (Xbox Game Bar → Record) — 1080p, 30 fps.
3. Schowaj: pasek zakładek z mailami, imiona klientów, powiadomienia.
4. Testowe konto / czysta sesja — **nie** wpisuj prawdziwego NIP/email na nagraniu.

---

## Shot list — pełna ścieżka zakupowa (klikaj powoli)

| # | Sek | Co robisz | Co musi być w kadrze |
|---|-----|-----------|----------------------|
| 1 | 0–8 | Otwórz wizard, welcome | Tytuł, progress „Stap 1 van 9” |
| 2 | 8–18 | Kliknij przez **Foundation** — wybierz opcje pakietu | Zmiana ekranu, opcje zaznaczone |
| 3 | 18–28 | **Vehicle** lub **Workwear** — 1–2 kliknięcia | Sticky cart / cena się aktualizuje |
| 4 | 28–38 | Jeszcze **jeden krok** konfiguracji (np. Premium lub Tools) | Progress bar przesuwa się |
| 5 | 38–50 | Przejdź do **podsumowania / checkout** | **Cena widoczna**, lista wyborów |
| 6 | 50–58 | Pokaż ekran **upload / formularz** (bez wysyłki) | Pola formularza lub Mollie — stop przed płatnością |
| 7 | 58–60 | Hold 2s na checkout | — |

**Zasada:** co najmniej **5 różnych ekranów** z widoczną zmianą UI. Zero statycznego kadru >5s.

---

## Po nagraniu

1. Zatrzymaj OBS → zapisz lokalnie (np. `docs/wizard video.mp4` — **gitignored**).
2. **Skompresuj przed commitem** (OBS ~40 MB → push timeout bez tego):
   ```bash
   ffmpeg -i "docs/wizard video.mp4" -c:v libx264 -crf 23 -preset medium -an -movflags +faststart public/gratka/wizard-demo.mp4
   ```
   (ffmpeg z `node_modules/@ffmpeg-installer` jeśli brak w PATH)
3. Obejrzyj raz — PII? cena czytelna? ruch?
4. Napisz Agentowi: **„wizard mp4 gotowy”** → Agent ustawi `duration` w `proof.ts` + push.
   Push dużych plików: `$env:GIT_HTTP_LOW_SPEED_LIMIT=0; $env:GIT_HTTP_LOW_SPEED_TIME=999999`

**Nie commituj** surowego OBS z `docs/` — tylko skompresowany plik w `public/gratka/`.

---

## Agent (po Twoim pliku)

```ts
// proof.ts
wizard: { url: '/gratka/wizard-demo.mp4', duration: '52s', poster: '/gratka/wizard-checkout.png', ready: true },
```

Smoke: `/solutions/sales-funnel/`, `/results/sales-funnel/` — player działa, nie pusty ekran.
