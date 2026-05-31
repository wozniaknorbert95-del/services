import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal & Privacy | FlexGrafik Digital',
  description: 'Privacy policy, terms of service, and GDPR compliance for FlexGrafik Digital.',
};

export default function LegalPage() {
  return (
    <main className="px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-[var(--color-text-primary)]">Legal & Privacy</h1>

        <div className="mt-10 space-y-10">
          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">
              Privacy Policy
            </h2>
            <div className="mt-4 space-y-3 text-[var(--color-text-secondary)]">
              <p>
                FlexGrafik Digital respects your privacy. This policy explains how we collect,
                use, and protect your personal data.
              </p>
              <p>
                <strong className="text-[var(--color-text-primary)]">Data we collect:</strong>{' '}
                Name, email address, and business information provided through our contact forms
                or Calendly booking.
              </p>
              <p>
                <strong className="text-[var(--color-text-primary)]">How we use it:</strong>{' '}
                To respond to inquiries, deliver services, and send relevant updates. We never sell
                your data.
              </p>
              <p>
                <strong className="text-[var(--color-text-primary)]">Your rights:</strong>{' '}
                Under GDPR, you have the right to access, correct, or delete your data. Contact
                us at hello@flexgrafik.nl.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">
              Terms of Service
            </h2>
            <div className="mt-4 space-y-3 text-[var(--color-text-secondary)]">
              <p>
                By using our services, you agree to these terms. Services are provided as
                described on our website. No guarantees of specific business outcomes are made.
              </p>
              <p>
                <strong className="text-[var(--color-text-primary)]">Payment:</strong> Setup fees
                are due before work begins. Monthly fees are billed in advance.
              </p>
              <p>
                <strong className="text-[var(--color-text-primary)]">Cancellation:</strong>{' '}
                Monthly services can be cancelled anytime with 7 days notice. You retain all your
                data.
              </p>
              <p>
                <strong className="text-[var(--color-text-primary)]">Liability:</strong>{' '}
                FlexGrafik Digital liability is limited to the amount paid for services in the
                preceding 12 months.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)]">Contact</h2>
            <p className="mt-4 text-[var(--color-text-secondary)]">
              For any legal or privacy questions, contact us at{' '}
              <a
                href="mailto:hello@flexgrafik.nl"
                className="text-[var(--color-accent)] hover:underline"
              >
                hello@flexgrafik.nl
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
