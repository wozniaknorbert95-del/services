import { redirect } from 'next/navigation';
import { ROUTES } from '@/lib/constants';

/** Legacy URL — canonical spearhead lives at /solutions/inbox-killer/ (Vercel 301 + in-app redirect). */
export default function LegacyInboxKillerPage() {
  redirect(ROUTES.inboxKiller);
}
