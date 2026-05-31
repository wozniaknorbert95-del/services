'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';

export default function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="mt-4 flex flex-col gap-3 sm:flex-row"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      {submitted ? (
        <p className="w-full rounded-lg border border-[var(--color-green)] bg-[var(--color-green-dim)] px-4 py-3 text-sm text-[var(--color-green)]">
          Thank you! We will contact you when modernization opens.
        </p>
      ) : (
        <>
          <input
            type="email"
            placeholder="your@email.com"
            required
            className="flex-1 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] focus:outline-none"
          />
          <Button type="submit" variant="primary">
            Notify Me
          </Button>
        </>
      )}
    </form>
  );
}
