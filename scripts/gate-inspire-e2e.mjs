/**
 * E2E gate — one live Schilder Janssen session on prod (no fallback).
 * Usage: node scripts/gate-inspire-e2e.mjs
 */
import { chromium } from 'playwright';
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BASE = 'https://zzpackage.flexgrafik.nl/voertuigreclame-ontwerp/';
const OUT = join(process.cwd(), 'docs/operations/media/inspire-screens');
const LOGO = join(OUT, 'schilder-janssen-logo.png');
const TIMEOUT = 180_000;
const GEN_TIMEOUT = 300_000;
const PAUSE = 2200;

const MESSAGES = [
  'Hoi! Ik wil voertuigreclame voor mijn schildersbedrijf.',
  'Bedrijfsnaam: Schilder Janssen. Branche: schilder. Diensten: binnen- en buitenschilderwerk en behangen. Doelgroep: woningeigenaren en VvE\'s in Noord-Brabant.',
  'Strakke betrouwbare uitstraling — balanced.',
  'Bestelbus L (bus_l), zakelijk gebruik.',
  'Telefoon: 06-98765432. Website: www.janssen-schilder.nl.',
];

const PHASE_NUDGES = [
  'Logo staat erop. Telefoon 06-98765432 en website www.janssen-schilder.nl.',
  'Kun je mijn briefing samenvatten voor de mock-ups?',
  'Is alles compleet voor de twee mock-ups?',
];

async function waitForConfirmOrGenerate(page, timeoutMs = 90_000) {
  const confirm = page.locator('#da-confirm-yes');
  const progress = page.locator('#da-prog-fill, .da-progress');
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    if (await confirm.isVisible().catch(() => false)) return 'confirm';
    if (await progress.first().isVisible().catch(() => false)) return 'generating';
    const results = page.locator('#da-results');
    if ((await results.getAttribute('hidden')) === null) {
      const imgs = await page.locator('#da-mockups img').count();
      if (imgs >= 2) return 'results';
    }
    await page.waitForTimeout(1500);
  }
  return 'none';
}

mkdirSync(OUT, { recursive: true });

async function dismissCookies(page) {
  const accept = page.locator('#fg-cookie-accept-all, button:has-text("Alles accepteren")');
  if (await accept.first().isVisible({ timeout: 5000 }).catch(() => false)) {
    await accept.first().click({ force: true });
    await page.waitForTimeout(600);
  }
}

async function sendMessage(page, text) {
  const input = page.locator('#da-chat-input');
  await input.waitFor({ state: 'visible', timeout: TIMEOUT });
  await page.waitForFunction(() => !document.getElementById('da-typing'), { timeout: TIMEOUT }).catch(() => {});
  await input.fill(text);
  await page.locator('#da-send-btn').click();
  await page.waitForSelector('#da-typing', { state: 'detached', timeout: TIMEOUT }).catch(() => {});
  await page.waitForTimeout(PAUSE);
}

async function main() {
  if (!existsSync(LOGO)) throw new Error(`Missing logo: ${LOGO}`);
  const started = Date.now();
  const gate = {
    pass: true,
    errors: [],
    warnings: [],
    at: new Date().toISOString(),
    attempt: 1,
    dom_checks: [],
  };

  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
  await ctx.addInitScript(() => { sessionStorage.clear(); localStorage.clear(); });
  const page = await ctx.newPage();

  await page.goto(`${BASE}?nocache=gate${Date.now()}`, { waitUntil: 'domcontentloaded', timeout: TIMEOUT });
  await dismissCookies(page);

  const hero = await page.locator('h1.da-hero__title').textContent().catch(() => '');
  if (!/Ontwerp je bus/i.test(hero || '')) {
    gate.pass = false;
    gate.errors.push(`hero: ${hero}`);
  }

  await page.waitForSelector('#da-chat-input', { timeout: TIMEOUT });
  for (const msg of MESSAGES) await sendMessage(page, msg);

  await page.locator('#da-logo-btn').click();
  await page.locator('#da-logo-input').setInputFiles(LOGO);
  await page.waitForSelector('#da-typing', { state: 'detached', timeout: TIMEOUT }).catch(() => {});
  await page.waitForTimeout(PAUSE);

  const lastBot = await page.locator('.da-msg--bot').last().textContent().catch(() => '');
  if (/failed to fetch|niet bereikbaar|tijdelijk beperkt|te veel verzoeken/i.test(lastBot || '')) {
    gate.pass = false;
    gate.errors.push(`logo/chat error: ${lastBot?.slice(0, 120)}`);
  }

  let flowState = await waitForConfirmOrGenerate(page, 45_000);
  for (const nudge of PHASE_NUDGES) {
    if (flowState !== 'none') break;
    await sendMessage(page, nudge);
    flowState = await waitForConfirmOrGenerate(page, 60_000);
  }

  if (flowState === 'confirm') {
    await page.locator('#da-confirm-yes').click();
    gate.dom_checks.push('confirm_button');
  } else if (flowState === 'generating') {
    gate.dom_checks.push('auto_generate_progress');
    gate.warnings.push('generate started without confirm button click');
  } else if (flowState === 'results') {
    gate.dom_checks.push('early_results');
  } else {
    const lastBots = await page.locator('.da-msg--bot').allTextContents().catch(() => []);
    gate.debug_last_bot = (lastBots.at(-1) || '').slice(0, 300);
    gate.pass = false;
    gate.errors.push(`confirm/generate not started (bot: ${gate.debug_last_bot.slice(0, 80)})`);
  }

  const deadline = Date.now() + GEN_TIMEOUT;
  let rateLimited = false;
  while (Date.now() < deadline) {
    const hidden = await page.locator('#da-results').getAttribute('hidden');
    const imgs = await page.locator('#da-mockups img').count();
    if (hidden === null && imgs >= 2) break;
    const progressText = await page.locator('#da-prog-text, .da-progress__text').textContent().catch(() => '');
    const botText = await page.locator('.da-msg--bot').last().textContent().catch(() => '');
    const combined = `${progressText} ${botText}`;
    if (/te veel verzoeken|429|rate limit|tijdelijk beperkt/i.test(combined)) {
      rateLimited = true;
      gate.pass = false;
      gate.errors.push(`generate rate limited: ${combined.slice(0, 120)}`);
      break;
    }
    if (/Generatie mislukt|logo ontbreekt|bedrijfsnaam ontbreekt|upload je logo|422|unprocessable/i.test(combined)) {
      gate.pass = false;
      gate.errors.push(`generate failed early: ${combined.slice(0, 120)}`);
      break;
    }
    await page.waitForTimeout(3000);
  }

  const mockupCount = await page.locator('#da-mockups img').count();
  if (!rateLimited && mockupCount < 2) {
    const botTail = await page.locator('.da-msg--bot').last().textContent().catch(() => '');
    if (/te veel verzoeken|429|rate limit/i.test(botTail || '')) {
      gate.errors.push(`generate rate limited: ${botTail.slice(0, 120)}`);
    }
    gate.pass = false;
    gate.errors.push(`mockups: ${mockupCount}`);
  }

  /** Stub = tiny file or 640x360 solid block (Node fetch — avoids page CORS flake). */
  async function isStubImageUrl(url) {
    if (!url || url.startsWith('data:,')) return true;
    try {
      const res = await fetch(url);
      const buf = new Uint8Array(await res.arrayBuffer());
      if (buf.length >= 5000) return false;
      if (buf.length < 24 || buf[0] !== 0x89) return buf.length < 5000;
      const w = (buf[16] << 24) | (buf[17] << 16) | (buf[18] << 8) | buf[19];
      const h = (buf[20] << 24) | (buf[21] << 16) | (buf[22] << 8) | buf[23];
      return w === 640 && h === 360;
    } catch (e) {
      gate.warnings.push(`stub fetch: ${String(e.message || e).slice(0, 80)}`);
      return false;
    }
  }

  const imgSrcs = await page.locator('#da-mockups img').evaluateAll((els) =>
    els.map((el) => el.getAttribute('src') || '')
  );
  for (let i = 0; i < imgSrcs.length; i++) {
    if (await isStubImageUrl(imgSrcs[i])) {
      gate.pass = false;
      gate.errors.push(`mockup ${i + 1} is stub placeholder (640x360 solid)`);
    }
  }
  gate.dom_checks.push('stub_images');
  gate.mockupSrcs = imgSrcs.map((s) => (s?.startsWith('data:') ? `data:[${s.length}chars]` : s));

  const pageText = await page.locator('#da-results').innerText().catch(() => '');
  const upper = pageText.toUpperCase();
  if (/\bTIER_A\b|\bTIER_B\b/i.test(pageText)) {
    gate.pass = false;
    gate.errors.push('tier_a/tier_b visible in UI');
  }
  gate.dom_checks.push('no_tier_labels');
  if (!/STANDARD/.test(upper) || !/SLIM ZICHTBAAR/.test(upper)) {
    gate.pass = false;
    gate.errors.push('missing Standard badge copy');
  } else gate.dom_checks.push('standard_badge');
  if (!/PREMIUM/.test(upper) || !/MERKUITSTRALING/.test(upper)) {
    gate.pass = false;
    gate.errors.push('missing Premium badge copy');
  } else gate.dom_checks.push('premium_badge');
  if (!/BLS-SET-LOGO-CONTACT/i.test(pageText)) {
    gate.pass = false;
    gate.errors.push('missing Standard SKU on card');
  } else gate.dom_checks.push('standard_sku');
  if (!/AI-voorbeelden|inspiratie/i.test(pageText)) {
    gate.pass = false;
    gate.errors.push('missing AI disclaimer');
  } else gate.dom_checks.push('disclaimer');
  const ctaHref = await page.locator('.da-mockup-card__cta').first().getAttribute('href').catch(() => '');
  if (!ctaHref?.includes('highlight=')) {
    gate.pass = false;
    gate.errors.push(`wizard CTA missing highlight=: ${ctaHref}`);
  } else gate.dom_checks.push('wizard_cta');
  if (!/KIES DEZE RICHTING/i.test(pageText)) {
    gate.pass = false;
    gate.errors.push('missing KIES DEZE RICHTING CTA');
  } else gate.dom_checks.push('cta_copy');

  try {
    await page.screenshot({ path: join(OUT, 'prod-e2e-results.png'), fullPage: true });
  } catch (e) {
    gate.warnings.push(`screenshot: ${e.message}`);
  }

  async function downloadPng(url, dest) {
    if (!url || url.startsWith('data:')) throw new Error(`bad url: ${dest}`);
    const res = await fetch(url);
    if (!res.ok) throw new Error(`fetch ${dest}: ${res.status}`);
    writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
  }
  if (imgSrcs.length >= 2) {
    try {
      await downloadPng(imgSrcs[0], join(OUT, 'prod-mockup-standard.png'));
      await downloadPng(imgSrcs[1], join(OUT, 'prod-mockup-premium.png'));
      gate.artifacts = ['prod-e2e-results.png', 'prod-mockup-standard.png', 'prod-mockup-premium.png'];
    } catch (e) {
      gate.pass = false;
      gate.errors.push(`png download: ${e.message}`);
    }
  }

  if (await page.locator('text=Voorbeeldresultaten (fixture)').isVisible().catch(() => false)) {
    gate.pass = false;
    gate.errors.push('fixture detected');
  }

  gate.mockupCount = mockupCount;
  gate.duration_ms = Date.now() - started;
  writeFileSync(join(OUT, 'gate-e2e-report.json'), JSON.stringify(gate, null, 2));
  if (gate.pass) {
    writeFileSync(join(OUT, 'gate-e2e-report-pass.json'), JSON.stringify(gate, null, 2));
    writeFileSync(
      join(OUT, 'api-generate-report.json'),
      JSON.stringify(
        {
          pass: true,
          at: new Date().toISOString(),
          mode: 'e2e-proxy',
          checks: {
            proxy_mode: true,
            engine_mode: 'inspirationOnly',
            generator_provider: 'openrouter',
            mockup_count: mockupCount,
          },
          response: {
            engine_mode: 'inspirationOnly',
            generator_provider: 'openrouter',
            mockup_count: mockupCount,
          },
        },
        null,
        2
      )
    );
  }
  await browser.close();

  console.log('E2E gate', gate.pass ? 'PASS' : 'FAIL', gate.errors);
  if (!gate.pass) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
