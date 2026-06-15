import SolutionLayout from '@/components/solutions/SolutionLayout';
import { ROUTES } from '@/lib/constants';

export const metadata = {
  title: 'Telegram Deployment Agent',
};

export default function InboxKillerPage() {
  return (
    <SolutionLayout
      title="Telegram Deployment Agent"
      problem="Small edits to the codebase normally require opening an IDE, setting up your environment, and pushing changes — an hour of friction for a one-line hotfix."
      systemItems={[
        { title: 'Listens', body: 'Agent receives instructions through a secure Telegram chat.' },
        { title: 'Plans', body: 'It figures out what files to modify and connects securely via SSH.' },
        { title: 'Diffs', body: 'Sends you a git diff right in Telegram so you know exactly what changes.' },
        { title: 'You approve', body: 'Only upon your "yes" does the agent commit, push, and restart the service.' },
      ]}
      effectBeforeAfter={{
        before: [
          'Deployments require a laptop and full IDE setup.',
          'Small hotfixes are postponed because of environment friction.',
          'Missing audit logs for on-the-fly fixes.'
        ],
        after: [
          'Deploy hotfixes from your phone while on the go.',
          'Changes are version-controlled automatically.',
          'Full history and approval logging directly in Telegram.'
        ]
      }}
      screenKey="inboxLanes"
      videoKey="inboxKiller"
      caseStudyHref={ROUTES.resultsInboxKiller}
      priceKey="singleSystem"
    />
  );
}
