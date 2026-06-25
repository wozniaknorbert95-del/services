/**
 * Record wizard Cash Engine walkthrough → public/gratka/wizard-demo.mp4
 * Usage: node scripts/record-wizard-demo.mjs
 *
 * Shot list: video-production-plan-2026-06-25.md § Video 1
 * Source: https://zzpackage.flexgrafik.nl/
 */
import {
  launchRecordingBrowser,
  finalizeRecording,
  acceptCookiesIfPresent,
  pause,
} from './lib/video-record.mjs';

const WIZARD = 'https://zzpackage.flexgrafik.nl/';
const WIZARD_FLOW = 'https://zzpackage.flexgrafik.nl/wizard/';

async function clickVolgende(page) {
  const next = page
    .getByRole('button', { name: /^volgende$/i })
    .or(page.getByRole('button', { name: /volgende stap/i }))
    .first();
  if ((await next.count()) && (await next.isEnabled().catch(() => false))) {
    await next.click();
    await pause(page, 2000);
    return true;
  }
  return false;
}

async function selectFirstPricedOption(page) {
  const priced = page.locator('button').filter({ hasText: /€/ });
  if (await priced.count()) {
    await priced.first().click({ timeout: 5000 }).catch(() => {});
    await pause(page, 1000);
    return true;
  }
  return false;
}

async function walkWizard(page) {
  // 0:00–0:08 — landing hook
  await page.goto(WIZARD, { waitUntil: 'networkidle', timeout: 90_000 });
  await pause(page, 2500);
  await acceptCookiesIfPresent(page);

  const startLink = page
    .getByRole('link', { name: /start configurator/i })
    .or(page.getByRole('button', { name: /start configurator/i }))
    .first();
  if (await startLink.count()) {
    await startLink.click();
    await pause(page, 2500);
  } else {
    await page.goto(WIZARD_FLOW, { waitUntil: 'networkidle', timeout: 90_000 });
    await pause(page, 2000);
    await acceptCookiesIfPresent(page);
  }

  // 0:08–0:22 — configure: intro + first business steps
  const startConfigurator = page.getByRole('button', { name: /start configurator/i });
  if (await startConfigurator.count()) {
    await startConfigurator.click();
    await pause(page, 2500);
  }

  await selectFirstPricedOption(page);
  await clickVolgende(page);

  // Vehicle step — deliberate selection for visual proof
  const vehicle = page.getByRole('button', { name: /bestelbus middel/i }).first();
  if (await vehicle.count()) {
    await vehicle.click();
    await pause(page, 1500);
  }
  await clickVolgende(page);

  // 0:22–0:35 — price updates through mid-funnel steps
  for (let i = 0; i < 5; i += 1) {
    await selectFirstPricedOption(page);
    const advanced = await clickVolgende(page);
    if (!advanced) break;
    await pause(page, 1200);
  }

  // Jump to checkout step via nav when available
  const checkoutNav = page.getByRole('button', { name: /^\s*9\s*$/ }).or(
    page.locator('button').filter({ hasText: /checkout/i }),
  );
  if (await checkoutNav.count()) {
    await checkoutNav.last().click().catch(() => {});
    await pause(page, 2500);
  }

  // 0:35–0:55 — checkout summary hold (no payment)
  await pause(page, 4000);
}

async function main() {
  console.log('Recording wizard demo…');
  const { browser, context, page } = await launchRecordingBrowser();
  try {
    await walkWizard(page);
  } finally {
    const result = await finalizeRecording(context, browser, 'wizard-demo.mp4');
    if (result.ready) {
      console.log('✓ wizard-demo.mp4 ready for proof.ts ready:true');
      process.exit(0);
    }
    console.error('✗ MP4 not produced — install FFmpeg or run conversion manually');
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
