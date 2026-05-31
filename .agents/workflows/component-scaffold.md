---
description: Create a new reusable React component
---

# Component Scaffold — services.flexgrafik.nl

## Purpose
Standardized pattern for creating UI components that respect design tokens, accessibility, and project conventions.

## File Location
- Feature components: `src/components/[ComponentName].tsx`
- UI primitives: `src/components/ui/[ComponentName].tsx`

## Template

```tsx
'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

/**
 * Brief description of what this component does.
 * Used in: [list parent components or pages]
 */
interface ComponentNameProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'accent';
}

export default function ComponentName({
  children,
  className,
  variant = 'default',
}: ComponentNameProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        'rounded-xl border p-6',
        variant === 'accent'
          ? 'border-[var(--color-accent)] bg-[var(--color-bg-surface)]'
          : 'border-[var(--color-border)] bg-[var(--color-bg-elevated)]',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
```

## Rules

1. **`'use client';`** — only if using hooks, Framer Motion, or browser APIs. Server Components preferred for static content.
2. **Design tokens** — import colors from `var(--color-*)` in globals.css. Never hardcode hex values.
3. **Tailwind only** — zero inline `style={{...}}`. Use `className` with utility classes.
4. **Typed props** — always export a typed interface. No `any`.
5. **JSDoc comment** — brief description + "Used in:" reference.
6. **`cn()` helper** — use `@/lib/utils` for conditional class merging.
7. **Accessibility** — focus rings, ARIA labels, semantic HTML.
8. **Mobile-first** — `sm:`, `md:`, `lg:` breakpoints. Default = mobile.

## Example Usage

```tsx
import ComponentName from '@/components/ui/ComponentName';

<ComponentName variant="accent">
  Content here
</ComponentName>
```

## Acceptance Criteria
- [ ] File created in correct directory
- [ ] Props interface exported and typed (no `any`)
- [ ] JSDoc comment present
- [ ] Uses CSS custom properties, no hardcoded values
- [ ] Zero inline styles
- [ ] Mobile-first responsive
- [ ] `prefers-reduced-motion` respected (if animated)
- [ ] `npm run build` passes
