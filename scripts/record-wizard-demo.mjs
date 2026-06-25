/**
 * Record wizard Cash Engine walkthrough → public/gratka/wizard-demo.mp4
 *
 * Full-funnel: intro → fundament → vehicle → werkleding (cart €199+) → checkout form.
 * Usage: npm run record:wizard  |  HEADED=1 npm run record:wizard
 */
import {
  launchRecordingBrowser,
  finalizeRecording,
  acceptCookiesIfPresent,
  dwell,
  scrollToTop,
  scrollToBottom,
  waitForStep,
  clickVolgende,
  cartTotalExcl,
} from './lib/video-record.mjs';

const WIZARD = 'https://zzpackage.flexgrafik.nl/wizard/';

/** Click clothing/product stepper + via data-action (stable across locales). */
async function addProduct(page, ariaFragment) {
  const plus = page.locator(`button[data-action="plus"][aria-label*="${ariaFragment}" i]`);
  await plus.first().scrollIntoViewIfNeeded({ timeout: 15_000 });
  await plus.first().click({ timeout: 10_000 });
  await dwell(page, 2200, `+ ${ariaFragment}`);
}

async function goToStep(page, stepNum, label) {
  const nav = page.locator('button').filter({ hasText: new RegExp(`^\\s*${stepNum}\\s`, 'm') }).first();
  if (await nav.count()) {
    await nav.click();
    await dwell(page, 3000, `nav → ${label}`);
    return true;
  }
  return false;
}

async function walkWizard(page) {
  // ── Scene 1: Intro (Stap 1) ───────────────────────────────────────────
  console.log('▶ Scene 1: Intro');
  await page.goto(WIZARD, { waitUntil: 'domcontentloaded', timeout: 90_000 });
  await acceptCookiesIfPresent(page);
  await waitForStep(page, 1);
  await scrollToTop(page);
  await dwell(page, 4500, 'Stap 1 · progress bar');

  // ── Scene 2: Fundament — logo + live cart ─────────────────────────────
  console.log('▶ Scene 2–3: Fundament');
  await page.getByRole('button', { name: /start configurator/i }).click();
  await waitForStep(page, 2);
  await dwell(page, 3000, 'fundament overview');

  await page.locator('text=LOGO BRONBESTAND').first().click();
  await dwell(page, 5000, `logo selected · €${await cartTotalExcl(page)} excl.`);

  await clickVolgende(page);
  await waitForStep(page, 3);

  // ── Scene 3: Voertuig — vehicle type + product browse ─────────────────
  console.log('▶ Scene 4: Voertuig');
  await page.locator('text=CADDY / PARTNER').click({ timeout: 12_000 });
  await dwell(page, 4000, 'vehicle type');
  await page.evaluate(() => window.scrollTo({ top: 850, behavior: 'smooth' }));
  await dwell(page, 2500, 'wrap products');
  await page.locator('text=PREMIUM WRAPS').first().click().catch(() => {});
  await dwell(page, 3000, 'product option');
  await scrollToTop(page);
  await scrollToBottom(page);
  await clickVolgende(page).catch(() => {});
  const afterVehicle = await page.locator('body').innerText();
  if (!/STAP 4 ·/.test(afterVehicle)) {
    await goToStep(page, 4, 'werkleding');
  }
  await waitForStep(page, 4);

  // ── Scene 4: Werkkleding — cart grows past €199 minimum ───────────────
  console.log('▶ Scene 5: Werkkleding · cart build');
  await dwell(page, 2000, 'werkleding grid');
  await addProduct(page, 'Softshell');
  await addProduct(page, 'WERKBROEK');
  await scrollToTop(page);
  await dwell(page, 4500, `sticky cart · €${await cartTotalExcl(page)} excl.`);

  // ── Scenes 5–8: Mid-funnel steps (visible step changes) ─────────────
  console.log('▶ Scene 6–8: Mid-funnel');
  const midSteps = [
    { n: 5, label: 'eerste indruk' },
    { n: 6, label: 'zichtbaarheid' },
    { n: 7, label: 'gereedschap' },
    { n: 8, label: 'premium' },
  ];
  for (const { n, label } of midSteps) {
    await scrollToBottom(page);
    await clickVolgende(page).catch(() => {});
    const midBody = await page.locator('body').innerText();
    if (!midBody.includes(`STAP ${n} ·`)) {
      await goToStep(page, n, label);
    }
    await waitForStep(page, n);
    await dwell(page, 2500, `Stap ${n}`);
    await scrollToTop(page);
  }

  // ── Scene 9: Checkout ─────────────────────────────────────────────────
  console.log('▶ Scene 9: Checkout');
  await scrollToBottom(page);
  await clickVolgende(page).catch(() => {});
  const preCheckout = await page.locator('body').innerText();
  if (!/STAP 9 ·/.test(preCheckout)) {
    await goToStep(page, 9, 'checkout');
  }
  await page.waitForSelector('text=STAP 9 · CHECKOUT', { timeout: 25_000 });
  await waitForStep(page, 9);
  await scrollToTop(page);
  await dwell(page, 5000, 'samenvatting · minimum €199');
  await page.evaluate(() => window.scrollTo({ top: 500, behavior: 'smooth' }));
  await dwell(page, 4500, 'contact + briefing fields');
  await page.evaluate(() => window.scrollTo({ top: 900, behavior: 'smooth' }));
  await dwell(page, 4500, 'upload dropzone + AFREKENEN CTA');
}

async function probeDuration(mp4Path) {
  const { spawnSync } = await import('node:child_process');
  const { resolveFfmpeg } = await import('./lib/video-record.mjs');
  const ff = resolveFfmpeg();
  if (!ff) return null;
  const r = spawnSync(ff, ['-i', mp4Path], { encoding: 'utf8' });
  const m = (r.stderr || '').match(/Duration: (\d+):(\d+):([\d.]+)/);
  if (!m) return null;
  return Math.round(parseInt(m[1], 10) * 3600 + parseInt(m[2], 10) * 60 + parseFloat(m[3]));
}

async function main() {
  console.log('Recording wizard demo (full-funnel)…');
  const { browser, context, page, headed } = await launchRecordingBrowser();
  console.log(`  mode: ${headed ? 'HEADED' : 'headless'}`);
  page.setDefaultTimeout(20_000);

  try {
    await walkWizard(page);
  } catch (err) {
    console.error('Walk error:', err.message);
  } finally {
    const result = await finalizeRecording(context, browser, 'wizard-demo.mp4', 800_000, 68);
    if (!result.ready) {
      console.error('✗ MP4 not produced');
      process.exit(1);
    }
    const dur = await probeDuration(result.path);
    console.log(`✓ wizard-demo.mp4 · ${(result.size / 1024).toFixed(0)} KB · ~${dur}s`);
    if (result.size < 800_000 || !dur || dur < 45 || dur > 72) {
      console.error(`✗ Quality gate failed (size=${result.size}, duration=${dur})`);
      process.exit(1);
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
