/**
 * Capture 7 unique lead-magnet gallery screenshots from production.
 * Usage: node scripts/capture-lead-magnet-gallery.mjs
 */
import { chromium } from 'playwright';
import { join } from 'node:path';

const OUT = join(process.cwd(), 'public/gratka');
const APP = 'https://app.flexgrafik.nl/';
const WIZARD = 'https://zzpackage.flexgrafik.nl/';

async function shot(page, name, opts = {}) {
  const path = join(OUT, name);
  await page.screenshot({ path, ...opts });
  console.log('saved', name);
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({
    viewport: { width: 1280, height: 800 },
    deviceScaleFactor: 2,
  });
  const page = await ctx.newPage();

  await page.goto(APP, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(1500);

  // 01 — start screen (hero)
  await shot(page, 'lead-magnet-start.png');

  // 03 — reward ladder section
  const rewards = page.getByRole('heading', { name: /wat kun je winnen/i });
  if (await rewards.count()) {
    await rewards.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    await shot(page, 'lead-magnet-reward.png', { clip: { x: 0, y: 0, width: 1280, height: 800 } });
  }

  // 04 — leaderboard (first pass; wizard bridge captured after gameplay)
  const rang = page.getByRole('button', { name: /ranglijst/i }).first();
  if (await rang.count()) {
    await rang.click();
    await page.waitForTimeout(2000);
    await shot(page, 'lead-magnet-leaderboard.png');
    await page.keyboard.press('Escape');
    await page.waitForTimeout(500);
  }

  // 02 — entry gate / play CTA area
  await page.goto(APP, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(1000);
  const acceptCookies = page.getByRole('button', { name: /alles accepteren/i });
  if (await acceptCookies.count()) {
    await acceptCookies.click();
    await page.waitForTimeout(500);
  }
  const playBtn = page.getByRole('button', { name: /speel de game/i });
  if (await playBtn.count()) {
    await playBtn.click();
    await page.waitForTimeout(2000);
    await shot(page, 'lead-magnet-entry-gate.png');

    const nameInput = page.getByPlaceholder(/bouwbob/i);
    const emailInput = page.getByPlaceholder(/bedrijf\.nl/i);
    const guestBtn = page.getByRole('button', { name: /spelen als gast/i });
    if (await guestBtn.count()) {
      await guestBtn.click();
      await page.waitForTimeout(4000);
      await shot(page, 'lead-magnet-gameplay.png');
    } else if (await nameInput.count()) {
      await nameInput.fill('Portfolio Demo');
      await emailInput.fill('demo@flexgrafik.nl');
      const privacy = page.getByText(/akkoord zzp-voorwaarden/i);
      if (await privacy.count()) {
        await privacy.click();
      }
      const submit = page.getByRole('button', { name: /toegang verlenen/i });
      if (await submit.count()) {
        await submit.click();
        await page.waitForTimeout(4000);
        await shot(page, 'lead-magnet-gameplay.png');
      }
    }
  }

  // 06 — wizard bridge (crop redeem panel from leaderboard)
  await page.goto(APP, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(1000);
  if (await acceptCookies.count()) {
    await acceptCookies.click();
    await page.waitForTimeout(500);
  }
  const rangAgain = page.getByRole('button', { name: /ranglijst/i }).first();
  if (await rangAgain.count()) {
    await rangAgain.click();
    await page.waitForTimeout(2000);
    const redeem = page.getByText(/score verzilveren|naar zzp wizard/i).first();
    if (await redeem.count()) {
      const box = await redeem.evaluate((el) => {
        const card = el.closest('section, div[class*="border"], div[class*="panel"]') ?? el.parentElement;
        return card?.getBoundingClientRect();
      });
      if (box && box.width > 0) {
        await shot(page, 'lead-magnet-wizard-bridge.png', {
          clip: {
            x: Math.max(0, box.x - 24),
            y: Math.max(0, box.y - 24),
            width: Math.min(1280, box.width + 48),
            height: Math.min(800, box.height + 48),
          },
        });
      }
    }
  }

  // 05 — mobile gameplay
  await ctx.close();
  await browser.close();

  const mobileBrowser = await chromium.launch({ headless: true });
  const mobileCtx = await mobileBrowser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
  });
  const mPage = await mobileCtx.newPage();
  await mPage.goto(APP, { waitUntil: 'networkidle', timeout: 60000 });
  await mPage.waitForTimeout(1000);
  const mCookies = mPage.getByRole('button', { name: /alles accepteren/i });
  if (await mCookies.count()) {
    await mCookies.click();
    await mPage.waitForTimeout(500);
  }
  const mPlay = mPage.getByRole('button', { name: /speel de game/i });
  if (await mPlay.count()) {
    await mPlay.click();
    await mPage.waitForTimeout(1500);
    const mGuest = mPage.getByRole('button', { name: /spelen als gast/i });
    if (await mGuest.count()) {
      await mGuest.click();
      await mPage.waitForTimeout(4000);
    }
  }
  await shot(mPage, 'lead-magnet-mobile.png');
  await mobileCtx.close();
  await mobileBrowser.close();

  // 07 — wizard conversion handoff
  const wizardBrowser = await chromium.launch({ headless: true });
  const wCtx = await wizardBrowser.newContext({
    viewport: { width: 1280, height: 800 },
    deviceScaleFactor: 2,
  });
  const wPage = await wCtx.newPage();
  await wPage.goto(WIZARD, { waitUntil: 'networkidle', timeout: 60000 });
  await wPage.waitForTimeout(2000);
  await shot(wPage, 'lead-magnet-conversion-handoff.png');
  await wCtx.close();
  await wizardBrowser.close();

  console.log('done — 7 gallery assets in public/gratka/');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
