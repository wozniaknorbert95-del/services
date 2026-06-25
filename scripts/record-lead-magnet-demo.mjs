/**
 * Record lead magnet game walkthrough → public/gratka/lead-magnet-demo.mp4
 * Usage: node scripts/record-lead-magnet-demo.mjs
 *
 * Shot list: video-production-plan-2026-06-25.md § Video 4
 * Source: https://app.flexgrafik.nl/
 */
import {
  launchRecordingBrowser,
  finalizeRecording,
  acceptCookiesIfPresent,
  pause,
} from './lib/video-record.mjs';

const APP = 'https://app.flexgrafik.nl/';

async function main() {
  console.log('Recording lead-magnet demo…');
  const { browser, context, page } = await launchRecordingBrowser();
  try {
    // 0:00–0:08 — start screen
    await page.goto(APP, { waitUntil: 'networkidle', timeout: 90_000 });
    await pause(page, 3000);
    await acceptCookiesIfPresent(page);

    // 0:08–0:18 — entry gate
    const play = page.getByRole('button', { name: /speel de game/i });
    if (await play.count()) {
      await play.click();
      await pause(page, 2500);
    }

    // 0:18–0:30 — gameplay (guest path)
    const guest = page.getByRole('button', { name: /spelen als gast/i });
    if (await guest.count()) {
      await guest.click();
      await pause(page, 5000);
    } else {
      const nameInput = page.getByPlaceholder(/bouwbob/i);
      if (await nameInput.count()) {
        await nameInput.fill('Demo Player');
        const emailInput = page.getByPlaceholder(/bedrijf\.nl/i);
        if (await emailInput.count()) await emailInput.fill('demo@example.com');
        const privacy = page.getByText(/akkoord zzp-voorwaarden/i);
        if (await privacy.count()) await privacy.click();
        const submit = page.getByRole('button', { name: /toegang verlenen/i });
        if (await submit.count()) {
          await submit.click();
          await pause(page, 5000);
        }
      }
    }

    // 0:30–0:40 — reward / leaderboard
    const rang = page.getByRole('button', { name: /ranglijst/i }).first();
    if (await rang.count()) {
      await rang.click();
      await pause(page, 4000);
    }

    // 0:40–0:45 — wizard bridge hint
    await page.goto(APP, { waitUntil: 'networkidle', timeout: 60_000 });
    await pause(page, 2000);
    const rangAgain = page.getByRole('button', { name: /ranglijst/i }).first();
    if (await rangAgain.count()) {
      await rangAgain.click();
      await pause(page, 3000);
    }
    await pause(page, 2000);
  } finally {
    const result = await finalizeRecording(context, browser, 'lead-magnet-demo.mp4');
    if (!result.ready) {
      console.error('MP4 not produced — check FFmpeg.');
      process.exit(1);
    }
    console.log('✓ lead-magnet-demo.mp4 ready');
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
