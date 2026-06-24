import SolutionLayout from '@/components/solutions/SolutionLayout';
import { ROUTES } from '@/lib/constants';
import {
  leadMagnetExperienceName,
  leadMagnetInsight,
  leadMagnetSolution,
} from '@/content/lead-magnet-case-study';

export const metadata = {
  title: 'Gamified lead system — qualified ZZP leads without cold forms',
};

export default function LeadMagnetGamePage() {
  return (
    <SolutionLayout
      title="Turn cold traffic into qualified ZZP leads — with a system, not a form."
      problem="Static landing pages lose Dutch ZZP audiences before they commit. A form at the top gets ignored — traffic scans and leaves with no context and no reason to return."
      systemItems={[
        {
          title: 'Experience-first capture',
          body: `${leadMagnetExperienceName} — a branded Canvas game on a custom engine, not a generic embed or brochure page.`,
        },
        {
          title: 'Register gate before play',
          body: 'Name and email before the first act — qualified intent, not anonymous bounce traffic.',
        },
        {
          title: 'Reward ladder + leaderboard',
          body: leadMagnetInsight.body,
        },
        {
          title: 'Wizard bridge with coupon',
          body: leadMagnetSolution.body,
        },
        {
          title: 'Instrumented funnel',
          body: 'Every step tracked in GA4 — see where players drop and when they convert to self-service quoting.',
        },
      ]}
      effectBeforeAfter={{
        before: [
          'Visitors land, scan, and leave — no engagement hook.',
          'Cold forms collect junk or nothing at all.',
          'Sales team gets contacts with zero context about intent.',
        ],
        after: [
          'More qualified starts — play earns attention before the ask.',
          'Longer sessions — progression acts and season ranking keep players on site.',
          'Warm wizard handoff — discount code routes to the same configurator paying clients use.',
        ],
      }}
      screenKey="leadMagnet"
      caseStudyHref={ROUTES.resultsLeadMagnet}
      priceKey="leadMagnetGame"
    />
  );
}
