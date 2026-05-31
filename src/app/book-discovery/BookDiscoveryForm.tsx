'use client';

import { useState } from 'react';
import Button from '@/components/ui/Button';

const PAIN_OPTIONS = [
  'Drowning in email',
  'Outdated site',
  'Manual quotes',
  'Few leads',
  'Not sure',
];

export default function BookDiscoveryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    url: '',
    pains: [] as string[],
    other: '',
  });

  const handlePainToggle = (pain: string) => {
    setFormData((prev) => ({
      ...prev,
      pains: prev.pains.includes(pain)
        ? prev.pains.filter((p) => p !== pain)
        : [...prev.pains, pain],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now: no backend / payment integration. Show confirmation.
    // In production: wire to Mollie + Calendly or email handler.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-[var(--qf-radius)] border border-[var(--qf-ok)] bg-[var(--qf-bg-raised)] p-8 max-w-2xl">
        <h3 className="text-[var(--qf-fs-lg)] font-bold text-[var(--qf-ok)] mb-2">
          Message sent.
        </h3>
        <p className="text-[var(--qf-text-dim)]">
          Thank you — I will get back to you within 24 hours with next steps and a secure payment
          link to confirm your Automation Map.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
      <div>
        <label htmlFor="bdf-name" className="block text-sm font-semibold text-[var(--qf-text)] mb-2">
          Name
        </label>
        <input
          id="bdf-name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-inset)] px-4 py-3 text-[var(--qf-text)] placeholder:text-[var(--qf-text-faint)] focus:border-[var(--qf-accent)] focus:outline-none"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="bdf-company" className="block text-sm font-semibold text-[var(--qf-text)] mb-2">
          Business name
        </label>
        <input
          id="bdf-company"
          type="text"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          className="w-full rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-inset)] px-4 py-3 text-[var(--qf-text)] placeholder:text-[var(--qf-text-faint)] focus:border-[var(--qf-accent)] focus:outline-none"
          placeholder="Company or brand name"
        />
      </div>

      <div>
        <label htmlFor="bdf-email" className="block text-sm font-semibold text-[var(--qf-text)] mb-2">
          Email
        </label>
        <input
          id="bdf-email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-inset)] px-4 py-3 text-[var(--qf-text)] placeholder:text-[var(--qf-text-faint)] focus:border-[var(--qf-accent)] focus:outline-none"
          placeholder="hello@example.com"
        />
      </div>

      <div>
        <label htmlFor="bdf-url" className="block text-sm font-semibold text-[var(--qf-text)] mb-2">
          Website / link (optional)
        </label>
        <input
          id="bdf-url"
          type="url"
          value={formData.url}
          onChange={(e) => setFormData({ ...formData, url: e.target.value })}
          className="w-full rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-inset)] px-4 py-3 text-[var(--qf-text)] placeholder:text-[var(--qf-text-faint)] focus:border-[var(--qf-accent)] focus:outline-none"
          placeholder="https://your-site.com"
        />
      </div>

      <div>
        <span className="block text-sm font-semibold text-[var(--qf-text)] mb-3">
          Your biggest pain right now
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {PAIN_OPTIONS.map((pain) => (
            <label
              key={pain}
              className={`flex items-center gap-3 rounded-[var(--qf-radius)] border px-4 py-3 cursor-pointer transition-colors ${
                formData.pains.includes(pain)
                  ? 'border-[var(--qf-accent)] bg-[var(--qf-accent-glow)]'
                  : 'border-[var(--qf-border)] bg-[var(--qf-bg-inset)] hover:border-[var(--qf-border-bright)]'
              }`}
            >
              <input
                type="checkbox"
                checked={formData.pains.includes(pain)}
                onChange={() => handlePainToggle(pain)}
                className="h-4 w-4 accent-[var(--qf-accent)]"
              />
              <span className="text-sm text-[var(--qf-text-dim)]">{pain}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="bdf-other" className="block text-sm font-semibold text-[var(--qf-text)] mb-2">
          Anything else? (optional)
        </label>
        <textarea
          id="bdf-other"
          rows={4}
          value={formData.other}
          onChange={(e) => setFormData({ ...formData, other: e.target.value })}
          className="w-full rounded-[var(--qf-radius)] border border-[var(--qf-border)] bg-[var(--qf-bg-inset)] px-4 py-3 text-[var(--qf-text)] placeholder:text-[var(--qf-text-faint)] focus:border-[var(--qf-accent)] focus:outline-none resize-y"
          placeholder="Tell me a bit about your business and what you'd like to fix..."
        />
      </div>

      <Button type="submit" size="lg">
        Send enquiry — I will reply within 24h
      </Button>

      <p className="text-xs text-[var(--qf-text-faint)]">
        No spam. No sales pressure. Your data stays yours.
      </p>
    </form>
  );
}
