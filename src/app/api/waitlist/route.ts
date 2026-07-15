/**
 * Waitlist endpoint — POST /api/waitlist
 * Sends waitlist sign-up to INTAKE_TO (quietforge@flexgrafik.nl) via SMTP.
 * Guards: server-side validation, in-memory rate limit per IP.
 * Binding: docs/operations/handoffs/2026-07-15-intake-email.md
 */
import { NextResponse } from 'next/server';
import { checkRateLimit, sendWaitlistEmail } from '@/lib/email';

function getClientIp(req: Request): string {
  const forwarded = req.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return req.headers.get('x-real-ip') ?? 'unknown';
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request): Promise<NextResponse> {
  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: 'INVALID_JSON' }, { status: 400 });
  }

  const ip = getClientIp(req);
  if (!checkRateLimit(ip)) {
    return NextResponse.json({ ok: false, error: 'RATE_LIMIT' }, { status: 429 });
  }

  const email = (typeof body.email === 'string' ? body.email : '').trim();
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: 'VALIDATION' }, { status: 422 });
  }

  const referrer = typeof body.referrer === 'string' ? body.referrer : '';

  const result = await sendWaitlistEmail({ email, referrer });
  if (!result.ok) {
    return NextResponse.json({ ok: false, error: result.error }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}