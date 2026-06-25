/**
 * Shared Playwright screen capture → MP4 pipeline for gratka demo videos.
 */
import { chromium } from 'playwright';
import { mkdirSync, readdirSync, statSync, unlinkSync, renameSync } from 'node:fs';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

export const VIEWPORT = { width: 1920, height: 1080 };
export const OUT_DIR = join(process.cwd(), 'public/gratka');
export const TMP_DIR = join(process.cwd(), '.tmp-video');

export function ensureDirs() {
  mkdirSync(OUT_DIR, { recursive: true });
  mkdirSync(TMP_DIR, { recursive: true });
}

export function pause(page, ms) {
  return page.waitForTimeout(ms);
}

export function resolveFfmpeg() {
  try {
    const { path: ffmpegPath } = require('@ffmpeg-installer/ffmpeg');
    return ffmpegPath;
  } catch {
    return process.env.FFMPEG_PATH ?? null;
  }
}

export function findLatestWebm(dir) {
  const files = readdirSync(dir)
    .filter((f) => f.endsWith('.webm'))
    .map((f) => ({ f, mtime: statSync(join(dir, f)).mtimeMs }))
    .sort((a, b) => b.mtime - a.mtime);
  return files[0]?.f ?? null;
}

export function webmToMp4(webmPath, mp4Path, minBytes = 100_000, maxDurationSec = null) {
  const ffmpeg = resolveFfmpeg();
  if (!ffmpeg) {
    console.warn('FFmpeg not found — WebM retained at', webmPath);
    return false;
  }

  const args = maxDurationSec
    ? [
        '-y', '-sseof', `-${maxDurationSec}`, '-i', webmPath,
        '-c:v', 'libx264', '-crf', '23', '-pix_fmt', 'yuv420p',
        '-movflags', '+faststart', mp4Path,
      ]
    : [
        '-y', '-ss', '1.5', '-i', webmPath,
        '-c:v', 'libx264', '-crf', '23', '-pix_fmt', 'yuv420p',
        '-movflags', '+faststart', mp4Path,
      ];

  const result = spawnSync(ffmpeg, args, { stdio: 'inherit' });

  if (result.status !== 0) return false;
  const size = statSync(mp4Path).size;
  console.log(`MP4 written: ${mp4Path} (${(size / 1024).toFixed(0)} KB)`);
  return size >= minBytes;
}

/** @param {{ slowMo?: number }} [opts] */
export async function launchRecordingBrowser(opts = {}) {
  ensureDirs();
  const headed = process.env.HEADED === '1';
  const slowMo = opts.slowMo ?? (headed ? 50 : 0);

  const browser = await chromium.launch({
    headless: !headed,
    slowMo,
    args: ['--disable-blink-features=AutomationControlled'],
  });

  const context = await browser.newContext({
    viewport: VIEWPORT,
    recordVideo: { dir: TMP_DIR, size: VIEWPORT },
    locale: 'nl-NL',
    colorScheme: 'dark',
  });

  const page = await context.newPage();
  return { browser, context, page, headed, slowMo };
}

export async function finalizeRecording(context, browser, outputName, minBytes = 500_000, maxDurationSec = null) {
  await context.close();
  await browser.close();

  const webmName = findLatestWebm(TMP_DIR);
  if (!webmName) throw new Error('No Playwright webm recording found in .tmp-video/');

  const webmPath = join(TMP_DIR, webmName);
  const mp4Path = join(OUT_DIR, outputName);
  const ok = webmToMp4(webmPath, mp4Path, minBytes, maxDurationSec);

  try { unlinkSync(webmPath); } catch { /* ignore */ }

  if (!ok) {
    const fallback = join(OUT_DIR, outputName.replace(/\.mp4$/, '.webm'));
    renameSync(webmPath, fallback);
    return { path: fallback, ready: false, size: 0 };
  }

  return { path: mp4Path, ready: true, size: statSync(mp4Path).size };
}

export async function acceptCookiesIfPresent(page) {
  const btn = page.getByRole('button', { name: /alles accepteren/i });
  if (await btn.count()) {
    await btn.click();
    await pause(page, 600);
  }
}

export async function dwell(page, ms, label) {
  if (label) console.log(`  ⏱ ${label} (${(ms / 1000).toFixed(1)}s)`);
  await pause(page, ms);
}

export async function scrollToTop(page) {
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
  await pause(page, 400);
}

export async function scrollToBottom(page) {
  await page.evaluate(() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }));
  await pause(page, 1200);
}

export async function scrollBy(page, y) {
  await page.evaluate((scrollY) => window.scrollTo({ top: scrollY, behavior: 'smooth' }), y);
  await pause(page, 1200);
}

export async function waitForStep(page, stepNum) {
  await page.waitForSelector(`text=STAP ${stepNum} ·`, { timeout: 20_000 }).catch(() => {});
  await pause(page, 800);
}

export async function clickVolgende(page) {
  const btn = page.getByRole('button', { name: /^volgende$/i });
  await btn.scrollIntoViewIfNeeded().catch(() => {});
  if (!(await btn.count())) return false;
  if (!(await btn.isEnabled().catch(() => false))) return false;
  await btn.click();
  await pause(page, 3500);
  return true;
}

export async function clickGeenSkip(page, label) {
  const el = page.locator(`text=${label}`).first();
  if (await el.count()) {
    await el.scrollIntoViewIfNeeded().catch(() => {});
    await el.click();
    await pause(page, 2000);
    return true;
  }
  return false;
}

export async function cartTotalExcl(page) {
  const body = await page.locator('body').innerText();
  return body.match(/TOTAAL EXCL\. BTW\s*\n€\s*([\d.,]+)/)?.[1] ?? '?';
}
