import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Children, type ReactNode } from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Strip leading // from eyebrow labels — Eyebrow and .qf-eyebrow add the prefix. */
export function stripEyebrowPrefix(label: string): string {
  return label.replace(/^\s*\/\/\s*/, "");
}

export function normalizeEyebrowChildren(children: ReactNode): ReactNode {
  return Children.map(children, (child) => {
    if (typeof child === "string") {
      return stripEyebrowPrefix(child);
    }
    return child;
  });
}
