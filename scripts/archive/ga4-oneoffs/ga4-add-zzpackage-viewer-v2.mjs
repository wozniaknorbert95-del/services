/**
 * Add quietforge GA reader SA as Viewer on ZZPackage GA4 property (528785553).
 * v2: longer waits, wait for Analytics shell, screenshot on failure.
 */
import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROFILE_SRC = path.join(process.env.LOCALAPPDATA ?? '', 'Google', 'Chrome', 'User Data');
const PROFILE_DST = path.join(process.env.TEMP ?? '', 'ga4-zzpackage-viewer-v2');
const SA_EMAIL = 'quietforge-ga-reader-712@flexgrafik.iam.gserviceaccount.com';
const ACCESS_URL =
  'https://analytics.google.com/analytics/web/#/a337818458p528785553/admin/property/access-management';
const PROOF = path.join(__dirname, '..', '..', 'docs', 'archive', 'operations', 'ga4-zzpackage-viewer-proof.png');

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function copyProfile() {
  if (fs.existsSync(PROFILE_DST)) fs.rmSync(PROFILE_DST, { recursive: true, force: true });
  fs.mkdirSync(PROFILE_DST, { recursive: true });
  const defaultSrc = path.join(PROFILE_SRC, 'Default');
  const defaultDst = path.join(PROFILE_DST, 'Default');
  fs.mkdirSync(defaultDst, { recursive: true });
  for (const name of ['Cookies', 'Login Data', 'Preferences', 'Secure Preferences', 'Web Data']) {
    const s = path.join(defaultSrc, name);
    const d = path.join(defaultDst, name);
    if (fs.existsSync(s)) fs.copyFileSync(s, d);
  }
  const netSrc = path.join(defaultSrc, 'Network');
  const netDst = path.join(defaultDst, 'Network');
  if (fs.existsSync(netSrc)) fs.cpSync(netSrc, netDst, { recursive: true });
  const localState = path.join(PROFILE_SRC, 'Local State');
  if (fs.existsSync(localState)) fs.copyFileSync(localState, path.join(PROFILE_DST, 'Local State'));
}

async function waitAnalyticsReady(page, timeoutMs = 180_000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    const url = page.url();
    if (url.includes('accounts.google.com')) {
      await sleep(3000);
      continue;
    }
    if (url.includes('analytics.google.com')) {
      const body = await page.locator('body').innerText().catch(() => '');
      if (!body.includes('Wczytuję') && !body.includes('Loading') && body.length > 200) {
        const hasAdmin = await page.getByText(/Property access|Dostęp do usługi|Toegang tot property/i).first().isVisible({ timeout: 5000 }).catch(() => false);
        if (hasAdmin) return true;
      }
    }
    await sleep(4000);
  }
  return false;
}

async function main() {
  copyProfile();
  const context = await chromium.launchPersistentContext(PROFILE_DST, {
    channel: 'chrome',
    headless: false,
    viewport: { width: 1440, height: 900 },
  });
  const page = context.pages()[0] ?? (await context.newPage());
  await page.goto(ACCESS_URL, { waitUntil: 'domcontentloaded', timeout: 120_000 });

  if (!(await waitAnalyticsReady(page))) {
    await page.screenshot({ path: PROOF, fullPage: true });
    console.error('FAIL: Analytics admin not ready');
    await context.close();
    process.exit(1);
  }

  console.log('Analytics ready:', page.url());

  const plus = page.locator('button, [role="button"]').filter({ hasText: /\+|Add users|Dodaj użytkowników/i }).first();
  if (await plus.isVisible({ timeout: 20_000 }).catch(() => false)) {
    await plus.click();
    await sleep(2000);
  }

  const email = page.locator('input[type="email"], input[type="text"]').first();
  await email.waitFor({ state: 'visible', timeout: 15_000 });
  await email.fill(SA_EMAIL);
  await sleep(1000);

  const viewer = page.getByText(/^Viewer$|^Czytelnik$|^Lezer$/i).first();
  if (await viewer.isVisible({ timeout: 5000 }).catch(() => false)) await viewer.click();

  const add = page.getByRole('button', { name: /Add|Dodaj|Toevoegen/i }).last();
  if (await add.isVisible({ timeout: 5000 }).catch(() => false)) {
    await add.click();
    await sleep(5000);
  }

  await page.screenshot({ path: PROOF, fullPage: true });
  console.log('DONE add attempt for', SA_EMAIL);
  await context.close();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
