/**
 * Add quietforge GA reader SA as Viewer on ZZPackage GA4 property (528785553).
 * Uses Chrome profile copy for authenticated Google session.
 */
import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROFILE_SRC = path.join(process.env.LOCALAPPDATA ?? '', 'Google', 'Chrome', 'User Data');
const PROFILE_DST = path.join(process.env.TEMP ?? '', 'ga4-zzpackage-viewer-profile');
const SA_EMAIL = 'quietforge-ga-reader-712@flexgrafik.iam.gserviceaccount.com';
const ACCESS_URL =
  'https://analytics.google.com/analytics/web/#/a337818458p528785553/admin/property/access-management';

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function copyProfile() {
  if (fs.existsSync(PROFILE_DST)) {
    fs.rmSync(PROFILE_DST, { recursive: true, force: true });
  }
  fs.mkdirSync(PROFILE_DST, { recursive: true });
  const defaultSrc = path.join(PROFILE_SRC, 'Default');
  const defaultDst = path.join(PROFILE_DST, 'Default');
  fs.mkdirSync(defaultDst, { recursive: true });
  for (const name of ['Cookies', 'Login Data', 'Preferences', 'Secure Preferences', 'Web Data']) {
    const s = path.join(defaultSrc, name);
    const d = path.join(defaultDst, name);
    if (fs.existsSync(s)) fs.copyFileSync(s, d);
  }
  const localState = path.join(PROFILE_SRC, 'Local State');
  if (fs.existsSync(localState)) {
    fs.copyFileSync(localState, path.join(PROFILE_DST, 'Local State'));
  }
}

async function main() {
  console.log('Copying Chrome profile...');
  copyProfile();

  const context = await chromium.launchPersistentContext(PROFILE_DST, {
    channel: 'chrome',
    headless: false,
    viewport: { width: 1400, height: 900 },
  });

  const page = context.pages()[0] ?? (await context.newPage());
  await page.goto(ACCESS_URL, { waitUntil: 'domcontentloaded', timeout: 120_000 });
  await sleep(8000);

  if (page.url().includes('accounts.google.com')) {
    console.error('LOGIN_REQUIRED: complete Google sign-in in browser window (120s)...');
    const deadline = Date.now() + 120_000;
    while (Date.now() < deadline) {
      if (page.url().includes('analytics.google.com') && !page.url().includes('accounts.google')) break;
      await sleep(3000);
    }
  }

  if (!page.url().includes('analytics.google.com')) {
    console.error('FAIL: not on Analytics after login wait');
    await context.close();
    process.exit(1);
  }

  console.log('On Analytics admin. Adding SA viewer...');

  const addBtn = page.getByRole('button', { name: /Add users|Dodaj użytkowników|Gebruikers toevoegen/i }).first();
  if (await addBtn.isVisible({ timeout: 15_000 }).catch(() => false)) {
    await addBtn.click();
    await sleep(2000);
  }

  const emailInput = page.getByRole('textbox').first();
  if (await emailInput.isVisible({ timeout: 10_000 }).catch(() => false)) {
    await emailInput.fill(SA_EMAIL);
  }

  const viewerRole = page.getByText(/Viewer|Czytelnik|Lezer/i).first();
  if (await viewerRole.isVisible({ timeout: 5000 }).catch(() => false)) {
    await viewerRole.click();
  }

  const submit = page.getByRole('button', { name: /Add|Dodaj|Toevoegen/i }).last();
  if (await submit.isVisible({ timeout: 5000 }).catch(() => false)) {
    await submit.click();
    await sleep(3000);
  }

  console.log('DONE: attempted SA add for', SA_EMAIL);
  await page.screenshot({ path: path.join(__dirname, '..', 'docs', 'operations', 'ga4-zzpackage-viewer-proof.png'), fullPage: true });
  await context.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
