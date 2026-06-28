/**
 * Create saved GA4 exploration "Quietforge Map funnel" (Playwright + Chrome profile).
 * Run: node scripts/ga4-create-exploration.mjs
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
const EXPLORATION_NAME = 'Quietforge Map funnel';

const PROFILE_SRC = path.join(process.env.LOCALAPPDATA ?? '', 'Google', 'Chrome', 'User Data');
const PROFILE_DST = path.join(process.env.TEMP ?? '', 'ga4-exploration-profile');

const FUNNEL_STEPS = [
  'book_discovery_view',
  'cta_book_map_click',
  'pricing_view',
  'intake_submit',
];

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
    try {
      fs.cpSync(netSrc, netDst, { recursive: true });
    } catch {
      console.warn('WARN: skipped Network cookies copy (Chrome may be open)');
    }
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
    await sleep(3000);
  }
  return false;
}

async function main() {
  copyProfile();

  const context = await chromium.launchPersistentContext(PROFILE_DST, {
    channel: 'chrome',
    headless: false,
    viewport: { width: 1440, height: 900 },
    args: ['--disable-blink-features=AutomationControlled'],
  });

  const page = context.pages()[0] ?? (await context.newPage());
  const hubUrl = `https://analytics.google.com/analytics/web/#/a${ACCOUNT_ID}p${PROPERTY_ID}/analysis/explorations`;
  await page.goto(hubUrl, { waitUntil: 'domcontentloaded', timeout: 60_000 });

  if (!(await waitForAnalytics(page))) {
    console.error('FAIL: Google Analytics login not completed.');
    await context.close();
    process.exit(1);
  }

  if (!page.url().includes(`p${PROPERTY_ID}`)) {
    await page.goto(hubUrl, { waitUntil: 'domcontentloaded', timeout: 60_000 });
    await sleep(3000);
  }

  if (!page.url().includes(`p${PROPERTY_ID}`)) {
    console.error(`FAIL: wrong GA property — expected p${PROPERTY_ID}, got ${page.url()}`);
    await context.close();
    process.exit(1);
  }

  await sleep(4000);

  const existing = page.getByText(EXPLORATION_NAME, { exact: true });
  if (await existing.isVisible({ timeout: 5000 }).catch(() => false)) {
    console.log(`OK: exploration "${EXPLORATION_NAME}" already exists.`);
    const finalUrl = page.url();
    await context.close();
    writeExplorationArtifact(finalUrl);
    return;
  }

  const createBtn = page.getByRole('button', { name: /Utwórz|Create/i }).first();
  if (await createBtn.isVisible({ timeout: 10_000 }).catch(() => false)) {
    await createBtn.click();
    await sleep(1500);
  }

  const funnelTpl = page.getByText(/Lejek|Funnel/i).first();
  if (await funnelTpl.isVisible({ timeout: 10_000 }).catch(() => false)) {
    await funnelTpl.click();
    await sleep(3000);
  } else {
    const blank = page.getByText(/Pusty|Blank/i).first();
    if (await blank.isVisible({ timeout: 5000 }).catch(() => false)) {
      await blank.click();
      await sleep(2000);
    }
  }

  for (let i = 0; i < FUNNEL_STEPS.length; i++) {
    const eventName = FUNNEL_STEPS[i];
    const addStep = page.getByRole('button', { name: /Dodaj krok|Add step|Dodaj etap/i }).first();
    if (i > 0 && (await addStep.isVisible({ timeout: 3000 }).catch(() => false))) {
      await addStep.click();
      await sleep(1000);
    }
    const eventInput = page.locator('input').filter({ hasText: '' }).last();
    const combo = page.getByLabel(/Zdarzenie|Event/i).last();
    if (await combo.isVisible({ timeout: 3000 }).catch(() => false)) {
      await combo.fill(eventName);
      await page.keyboard.press('Enter');
    } else if (await eventInput.isVisible({ timeout: 3000 }).catch(() => false)) {
      await eventInput.fill(eventName);
      await page.keyboard.press('Enter');
    }
    await sleep(800);
  }

  const saveBtn = page.getByRole('button', { name: /Zapisz|Save/i }).first();
  if (await saveBtn.isVisible({ timeout: 5000 }).catch(() => false)) {
    await saveBtn.click();
    await sleep(1000);
  }

  const nameInput = page.getByLabel(/Nazwa|Name/i).first();
  if (await nameInput.isVisible({ timeout: 5000 }).catch(() => false)) {
    await nameInput.fill(EXPLORATION_NAME);
  } else {
    await page.keyboard.type(EXPLORATION_NAME);
  }

  const confirmSave = page.getByRole('button', { name: /Zapisz|Save/i }).last();
  if (await confirmSave.isVisible({ timeout: 5000 }).catch(() => false)) {
    await confirmSave.click();
  }

  await sleep(4000);
  const finalUrl = page.url();
  console.log('Exploration URL:', finalUrl);
  writeExplorationArtifact(finalUrl);
  await context.close();
}

function writeExplorationArtifact(url) {
  const ids = JSON.parse(fs.readFileSync(IDS_PATH, 'utf8'));
  ids.exploration_name = EXPLORATION_NAME;
  ids.exploration_url = url;
  ids.exploration_updated_at = new Date().toISOString();
  fs.writeFileSync(IDS_PATH, JSON.stringify(ids, null, 2));
  console.log('Updated', IDS_PATH);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
