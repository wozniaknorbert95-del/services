'use client';

import { useEffect } from 'react';
import Button from '@/components/ui/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-[var(--qf-sp-6)] text-center">
      <h1 className="mb-4 text-[var(--qf-fs-3xl)] text-[var(--qf-text)]">Something went wrong</h1>
      <p className="mb-8 max-w-md text-[var(--qf-text-dim)]">
        An unexpected error occurred. Try refreshing the page or return to the home screen.
      </p>
      <div className="flex gap-4">
        <Button onClick={reset} variant="primary">
          Try again
        </Button>
        <Button href="/" variant="secondary">
          Back to home
        </Button>
      </div>
    </div>
  );
}
