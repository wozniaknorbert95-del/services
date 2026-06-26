/**
 * GA4 Quietforge property provision via Analytics UI (Playwright + Chrome profile).
 * Requires one-time Google login if session expired.
 */
import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '..');
const IDS_PATH = path.join(REPO_ROOT, 'config', 'ga4-quietforge.ids.json');
const PROFILE_SRC = path.join(process.env.LOCALAPPDATA ?? '', 'Google', 'Chrome', 'User Data');
const PROFILE_DST = path.join(process.env.TEMP ?? '', 'ga4-playwright-profile');

const ACCOUNT_ID = '337818458';
const SA_EMAIL = 'quietforge-ga-reader-712@flexgrafik.iam.gserviceaccount.com';

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function copyProfile() {
  if (fs.existsSync(PROFILE_DST)) {
    fs.rmSync(PROFILE_DST, { recursive: true, force: true });
  }
  fs.mkdirSync(PROFILE_DST, { recursive: true });
  // Minimal copy — cookies + preferences for auth
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
  if (fs.existsSync(netSrc)) {
    fs.cpSync(netSrc, netDst, { recursive: true });
  }
  fs.writeFileSync(path.join(PROFILE_DST, 'Local State'), fs.readFileSync(path.join(PROFILE_SRC, 'Local State')));
}

async function waitForAnalytics(page, timeoutMs = 120_000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    const url = page.url();
    if (url.includes('analytics.google.com/analytics/web') && !url.includes('accounts.google')) {
      return true;
    }
    if (url.includes('signin') || url.includes('challenge/pwd')) {
      console.log('LOGIN_REQUIRED: complete Google sign-in in the browser window (max 2 min)...');
    }
    await sleep(3000);
  }
  return false;
}

async function main() {
  console.log('Copying Chrome profile for authenticated session...');
  copyProfile();

  const context = await chromium.launchPersistentContext(PROFILE_DST, {
    channel: 'chrome',
    headless: false,
    viewport: { width: 1400, height: 900 },
    args: ['--disable-blink-features=AutomationControlled'],
  });

  const page = context.pages()[0] ?? (await context.newPage());
  await page.goto(`https://analytics.google.com/analytics/web/#/a${ACCOUNT_ID}p528764186/admin`, {
    waitUntil: 'domcontentloaded',
    timeout: 60_000,
  });

  if (!(await waitForAnalytics(page))) {
    console.error('FAIL: Google Analytics login not completed in time.');
    await context.close();
    process.exit(1);
  }

  console.log('GA loaded. Creating property Quietforge...');

  // Open account create flow via Admin
  await page.goto(`https://analytics.google.com/analytics/web/#/a${ACCOUNT_ID}p528764186/admin`, {
    waitUntil: 'domcontentloaded',
  });
  await sleep(3000);

  // Use Create menu — Polish UI: "Utwórz"
  const createBtn = page.getByRole('button', { name: /Utwórz|Create/i }).first();
  if (await createBtn.isVisible({ timeout: 10_000 }).catch(() => false)) {
    await createBtn.click();
    const propertyItem = page.getByRole('menuitem', { name: /Usług|Property/i }).first();
    if (await propertyItem.isVisible({ timeout: 5000 }).catch(() => false)) {
      await propertyItem.click();
    }
  }

  // Property creation form
  await sleep(2000);
  const nameInput = page.locator('input').filter({ hasText: '' }).first();
  const displayName = page.getByLabel(/Nazwa usługi|Property name|Display name/i).first();
  if (await displayName.isVisible({ timeout: 8000 }).catch(() => false)) {
    await displayName.fill('Quietforge');
  } else {
    await page.locator('input[type="text"]').first().fill('Quietforge');
  }

  // Timezone / currency — accept defaults if Europe/Amsterdam
  const nextBtn = page.getByRole('button', { name: /Dalej|Next|Utwórz|Create/i }).first();
  while (await nextBtn.isVisible({ timeout: 3000 }).catch(() => false)) {
    await nextBtn.click();
    await sleep(1500);
  }

  await sleep(5000);

  // Extract property ID from URL
  const url = page.url();
  const propMatch = url.match(/p(\d{6,})/);
  let propertyId = propMatch?.[1] ?? '';

  if (!propertyId) {
    // Open property selector
    await page.goto(`https://analytics.google.com/analytics/web/#/p0/admin`, { waitUntil: 'domcontentloaded' });
    await sleep(2000);
  }

  console.log('Property ID from URL:', propertyId || 'check selector manually');

  const ids = {
    display_name: 'Quietforge',
    domain: 'quietforge.flexgrafik.nl',
    account_id: ACCOUNT_ID,
    property_id: propertyId,
    measurement_id: '',
    legacy_property_id: '528764186',
    legacy_measurement_id: 'G-M24NL622DF',
    sa_email: SA_EMAIL,
    provisioned_at: new Date().toISOString(),
  };

  fs.mkdirSync(path.dirname(IDS_PATH), { recursive: true });
  fs.writeFileSync(IDS_PATH, JSON.stringify(ids, null, 2));
  console.log('Wrote', IDS_PATH);
  console.log('Complete stream + admin config in UI if wizard stopped early.');

  await context.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
