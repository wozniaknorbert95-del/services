/**
 * Shared Playwright screen capture → MP4 pipeline for gratka demo videos.
 * Requires: playwright (devDep). FFmpeg via @ffmpeg-installer/ffmpeg (optional dep).
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

/**
 * Convert Playwright webm to H.264 MP4 (1920×1080, crf 23).
 * @returns {boolean} true when mp4 exists and > minBytes
 */
export function webmToMp4(webmPath, mp4Path, minBytes = 100_000) {
  const ffmpeg = resolveFfmpeg();
  if (!ffmpeg) {
    console.warn(
      'FFmpeg not found. Install @ffmpeg-installer/ffmpeg or set FFMPEG_PATH.',
    );
    console.warn(`WebM retained at ${webmPath} — convert manually before shipping.`);
    return false;
  }

  const result = spawnSync(
    ffmpeg,
    [
      '-y',
      '-i',
      webmPath,
      '-c:v',
      'libx264',
      '-crf',
      '23',
      '-pix_fmt',
      'yuv420p',
      '-movflags',
      '+faststart',
      mp4Path,
    ],
    { stdio: 'inherit' },
  );

  if (result.status !== 0) {
    console.error('FFmpeg conversion failed');
    return false;
  }

  const size = statSync(mp4Path).size;
  console.log(`MP4 written: ${mp4Path} (${(size / 1024).toFixed(0)} KB)`);
  return size >= minBytes;
}

export async function launchRecordingBrowser() {
  ensureDirs();
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: VIEWPORT,
    recordVideo: { dir: TMP_DIR, size: VIEWPORT },
    locale: 'nl-NL',
  });
  const page = await context.newPage();
  return { browser, context, page };
}

export async function finalizeRecording(context, browser, outputName) {
  await context.close();
  await browser.close();

  const webmName = findLatestWebm(TMP_DIR);
  if (!webmName) {
    throw new Error('No Playwright webm recording found in .tmp-video/');
  }

  const webmPath = join(TMP_DIR, webmName);
  const mp4Path = join(OUT_DIR, outputName);

  const ok = webmToMp4(webmPath, mp4Path);
  try {
    unlinkSync(webmPath);
  } catch {
    /* ignore */
  }

  if (!ok) {
    const fallback = join(OUT_DIR, outputName.replace(/\.mp4$/, '.webm'));
    renameSync(webmPath, fallback);
    console.warn(`Fallback: ${fallback} — run FFmpeg to produce ${outputName}`);
    return { path: fallback, ready: false };
  }

  return { path: mp4Path, ready: true };
}

export async function acceptCookiesIfPresent(page) {
  const btn = page.getByRole('button', { name: /alles accepteren/i });
  if (await btn.count()) {
    await btn.click();
    await pause(page, 500);
  }
}
