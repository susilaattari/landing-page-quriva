'use client';

import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { track } from '@/lib/analytics';

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  event: string;
  eventProps?: Record<string, string | number | boolean | undefined>;
};

export default function TrackedLink({
  href,
  children,
  event,
  eventProps,
  onClick,
  ...rest
}: TrackedLinkProps) {
  return (
    <a
      href={href}
      onClick={(event_) => {
        track(event, eventProps);
        onClick?.(event_);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
