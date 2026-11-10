type EventProps = Record<string, string | number | boolean | undefined>;

type AnalyticsWindow = Window & {
  plausible?: (event: string, options?: { props?: EventProps }) => void;
  gtag?: (...args: unknown[]) => void;
  dataLayer?: Record<string, unknown>[];
};

export function track(event: string, props?: EventProps) {
  if (typeof window === 'undefined') return;

  const target = window as AnalyticsWindow;

  if (typeof target.plausible === 'function') {
    target.plausible(event, { props });
    return;
  }

  if (typeof target.gtag === 'function') {
    target.gtag('event', event, props);
    return;
  }

  target.dataLayer = target.dataLayer || [];
  target.dataLayer.push({ event, ...props });
}
