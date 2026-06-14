# CO WYPEŁNIA KLIENT (po zakończeniu Cursora) — instrukcja

**Klient wypełnia TYLKO `src/content/proof.ts`** (oraz ew. finalne copy tekstowe). Nic poza manifestem nie wymaga zmiany kodu, aby dowody pojawiły się na stronie.

**Checklista wypełnienia:**
1. `metrics.*` — wpisz PRAWDZIWE liczby (repos, msgsPerScan, wizardSteps…). Każda musi być prawdziwa.
2. `videos.*.url` — wklej embed URL (YouTube/Vimeo/Loom) + ustaw `ready: true` + `poster`.
3. `screens.*.src` — wgraj PNG do `/public/gratka/`, wpisz ścieżkę + ustaw `ready: true`.
4. `caseMeasurements.*.value` — wpisz realną metrykę LUB capability metric + `ready: true`.
5. `pricing.*.from` — wpisz widełki („€1500", „€6000"…) + timeline + includes.

Po wypełnieniu → build → deploy. Wszystkie sloty zamienią się z placeholderów na realne dowody automatycznie.
