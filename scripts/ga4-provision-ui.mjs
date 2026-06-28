/**
 * GA4 Quietforge Admin verification (Playwright + Chrome profile).
 * Opens property 543331587 admin — stream, key events, explorations.
 * Run: node scripts/ga4-provision-ui.mjs
 */
import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '..');
const IDS_PATH = path.join(REPO_ROOT, 'config', 'ga4-quietforge.ids.json');

const ACCOUNT_ID = '337818458';
const PROPERTY_ID = '543331587';
const PROFILE_SRC = path.join(process.env.LOCALAPPDATA ?? '', 'Google', 'Chrome', 'User Data');
const PROFILE_DST = path.join(process.env.TEMP ?? '', 'ga4-playwright-profile');

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
      console.log('LOGIN_REQUIRED: complete Google sign-in in the browser window...');
    }
    await sleep(3000);
  }
  return false;
}

async function main() {
  console.log('Opening Quietforge GA4 Admin (property', PROPERTY_ID, ')...');
  copyProfile();

  const context = await chromium.launchPersistentContext(PROFILE_DST, {
    channel: 'chrome',
    headless: false,
    viewport: { width: 1400, height: 900 },
    args: ['--disable-blink-features=AutomationControlled'],
  });

  const page = context.pages()[0] ?? (await context.newPage());
  const adminUrl = `https://analytics.google.com/analytics/web/#/a${ACCOUNT_ID}p${PROPERTY_ID}/admin`;
  await page.goto(adminUrl, { waitUntil: 'domcontentloaded', timeout: 60_000 });

  if (!(await waitForAnalytics(page))) {
    console.error('FAIL: Google Analytics login not completed in time.');
    await context.close();
    process.exit(1);
  }

  const ids = JSON.parse(fs.readFileSync(IDS_PATH, 'utf8'));
  ids.property_id = PROPERTY_ID;
  ids.verified_admin_at = new Date().toISOString();
  ids.admin_url = adminUrl;
  fs.writeFileSync(IDS_PATH, JSON.stringify(ids, null, 2));

  console.log('OK: Quietforge Admin loaded at', adminUrl);
  console.log('Verify: Data streams → Quietforge Web, Key events, Internal traffic filter.');
  console.log('For exploration: node scripts/ga4-create-exploration.mjs');

  await sleep(3000);
  await context.close();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
