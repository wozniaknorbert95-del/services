import type { Metadata } from 'next';
import { EMAIL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Legal & Privacy',
  description:
    'Privacy policy, terms of service, and GDPR compliance for Quietforge.',
  openGraph: {
    title: 'Legal & Privacy',
    description: 'Privacy policy, terms of service, and GDPR compliance.',
    images: [
      {
        url: '/og/legal.svg',
        width: 1200,
        height: 630,
        alt: 'Legal & Privacy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legal & Privacy',
    description: 'Privacy policy, terms of service, and GDPR compliance.',
    images: ['/og/legal.svg'],
  },
};

export default function LegalPage() {
  return (
    <main className="px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-[var(--qf-text)]">Legal & Privacy</h1>

        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-xl font-semibold text-[var(--qf-text)]">
              Privacy Policy
            </h2>
            <div className="mt-4 space-y-3 text-[var(--qf-text-dim)]">
              <p>
                Quietforge respects your privacy. This policy explains how we collect,
                use, and protect your personal data.
              </p>
              <p>
                <strong className="text-[var(--qf-text)]">Data we collect:</strong>{' '}
                Name, email address, and business information provided through our contact forms
                or Calendly booking.
              </p>
              <p>
                <strong className="text-[var(--qf-text)]">How we use it:</strong>{' '}
                To respond to inquiries, deliver services, and send relevant updates. We never sell
                your data.
              </p>
              <p>
                <strong className="text-[var(--qf-text)]">WhatsApp discovery agent:</strong>{' '}
                By starting a chat you explicitly opt in to qualification questions. Messages are
                retained for up to 90 days for follow-up. You may request deletion at any time via{' '}
                {EMAIL}.
              </p>
              <p>
                <strong className="text-[var(--qf-text)]">Your rights:</strong>{' '}
                Under GDPR/AVG, you have the right to access, correct, or delete your data. Contact
                us at {EMAIL}.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--qf-text)]">
              Terms of Service
            </h2>
            <div className="mt-4 space-y-3 text-[var(--qf-text-dim)]">
              <p>
                By using our services, you agree to these terms. Services are provided as
                described on our website. No guarantees of specific business outcomes are made.
              </p>
              <p>
                <strong className="text-[var(--qf-text)]">Payment:</strong> Setup fees
                are due before work begins. Monthly fees are billed in advance.
              </p>
              <p>
                <strong className="text-[var(--qf-text)]">Cancellation:</strong>{' '}
                Monthly services can be cancelled anytime with 7 days notice. You retain all your
                data.
              </p>
              <p>
                <strong className="text-[var(--qf-text)]">Liability:</strong>{' '}
                Quietforge liability is limited to the amount paid for services in the
                preceding 12 months.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--qf-text)]">Contact</h2>
            <p className="mt-4 text-[var(--qf-text-dim)]">
              For any legal or privacy questions, contact us at{' '}
              <a
                href={`mailto:${EMAIL}`}
                className="text-[var(--qf-accent)] hover:underline"
              >
                {EMAIL}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
