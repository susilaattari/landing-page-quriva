'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowRight, Check, Info, X } from 'lucide-react';
import type { Package } from '@/lib/packages';
import { FEATURE_ROWS } from '@/lib/packages';
import { formatIDR, formatDuration, durationLabel } from '@/lib/format';
import { PRICING_COPY } from '@/content/landing';
import { registerLink } from '@/lib/config';
import { track } from '@/lib/analytics';
import SectionHeading from '@/components/ui/SectionHeading';
import TrackedLink from '@/components/ui/TrackedLink';
import { buttonClass } from '@/components/ui/button-styles';

type PricingSectionProps = {
  packages: Package[];
  fallback: boolean;
};

export default function PricingSection({ packages, fallback }: PricingSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const durations = useMemo(
    () => Array.from(new Set(packages.map((pkg) => pkg.duration_months))).sort((a, b) => a - b),
    [packages]
  );
  const [duration, setDuration] = useState(() =>
    durations.includes(1) ? 1 : durations[0] ?? 1
  );

  useEffect(() => {
    if (!durations.includes(duration)) {
      setDuration(durations[0] ?? 1);
    }
  }, [durations, duration]);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          track('pricing_view');
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const visible = packages.filter((pkg) => pkg.duration_months === duration);
  const gridClass =
    visible.length === 1
      ? 'mx-auto w-full max-w-md'
      : visible.length === 2
        ? 'sm:grid-cols-2'
        : 'md:grid-cols-2 lg:grid-cols-3';

  return (
    <section id="harga" className="scroll-mt-24 border-b border-line bg-sand py-16 sm:py-20 lg:py-24">
      <div ref={sectionRef} className="mx-auto max-w-content px-5 sm:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow={PRICING_COPY.eyebrow}
            title={PRICING_COPY.title}
            description={PRICING_COPY.description}
          />
          <p className="max-w-sm text-xs leading-relaxed text-muted lg:text-right">{PRICING_COPY.note}</p>
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-between gap-3">
          <div
            role="group"
            aria-label="Pilih durasi paket"
            className="inline-flex rounded-xl border border-line bg-white p-1"
          >
            {durations.map((months) => {
              const active = months === duration;
              return (
                <button
                  key={months}
                  type="button"
                  aria-pressed={active}
                  onClick={() => {
                    setDuration(months);
                    track('pricing_period_change', { period: months });
                  }}
                  className={`min-h-[44px] rounded-lg px-4 text-sm font-semibold transition-colors ${
                    active ? 'bg-brand text-white' : 'text-muted hover:text-ink'
                  }`}
                >
                  {formatDuration(months)}
                </button>
              );
            })}
          </div>
          <p className="text-[11px] font-medium text-muted">
            {visible.length} paket untuk durasi {formatDuration(duration)}
          </p>
        </div>

        <p className="sr-only" aria-live="polite">
          Menampilkan paket durasi {formatDuration(duration)}
        </p>

        <div className={`mt-5 grid gap-5 ${gridClass}`}>
          {visible.map((pkg) => {
            const isComplete = FEATURE_ROWS.every((feature) => Boolean(pkg.features[feature.key]));
            return (
              <div
                key={pkg.id}
                className={`flex flex-col rounded-2xl border bg-white p-6 shadow-card ${
                  isComplete ? 'border-brand/50' : 'border-line'
                }`}
              >
                <div className="flex min-h-[24px] items-center justify-between gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-gold-ink">
                    {formatDuration(pkg.duration_months)}
                  </span>
                  {isComplete ? (
                    <span className="rounded-full bg-brand-soft px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-brand">
                      Fitur lengkap
                    </span>
                  ) : null}
                </div>

                <h3 className="mt-2 text-lg font-bold leading-tight text-ink">{pkg.name}</h3>

                <div className="mt-4">
                  <p className="text-[34px] font-extrabold leading-none tracking-[-0.03em] text-ink tabular-nums">
                    {formatIDR(pkg.price)}
                  </p>
                  <p className="mt-1.5 text-xs text-muted">{durationLabel(pkg.duration_months)}</p>
                </div>

                <div className="mt-4 rounded-xl border border-line bg-[#FBFCFB] px-3.5 py-3 text-xs">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-muted">Kapasitas</span>
                    <strong className="font-bold text-ink">{pkg.max_santri} santri</strong>
                  </div>
                  <p className="mt-1 text-[11px] leading-relaxed text-muted">
                    Tambahan santri dihitung saat pendaftaran.
                  </p>
                </div>

                <ul className="mt-5 flex-1 space-y-2.5 border-t border-line pt-5">
                  {FEATURE_ROWS.map((feature) => {
                    const enabled = Boolean(pkg.features[feature.key]);
                    return (
                      <li
                        key={feature.key}
                        className={`flex items-start gap-2 text-xs leading-relaxed ${
                          enabled ? 'text-ink' : 'text-muted'
                        }`}
                      >
                        {enabled ? (
                          <Check size={14} className="mt-0.5 shrink-0 text-brand" strokeWidth={2.8} />
                        ) : (
                          <X
                            size={14}
                            aria-hidden="true"
                            className="mt-0.5 shrink-0 text-muted/50"
                            strokeWidth={2.4}
                          />
                        )}
                        <span className={enabled ? '' : 'line-through decoration-muted/40'}>
                          {feature.label}
                          {!enabled ? <span className="sr-only"> (tidak tersedia)</span> : null}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                <TrackedLink
                  href={registerLink(pkg.code)}
                  event="plan_cta_click"
                  eventProps={{
                    plan_code: pkg.code,
                    period: pkg.duration_months,
                    price: pkg.price,
                    placement: 'pricing',
                  }}
                  className={buttonClass({
                    variant: isComplete ? 'primary' : 'secondary',
                    size: 'md',
                    className: 'mt-6 w-full',
                  })}
                >
                  Pilih paket ini
                  <ArrowRight size={15} />
                </TrackedLink>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex flex-col gap-2 text-[11px] leading-relaxed text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>{PRICING_COPY.quotaNote}</p>
          {fallback ? (
            <p className="inline-flex items-start gap-1.5 rounded-lg border border-gold/40 bg-white px-2.5 py-1.5 text-gold-ink sm:items-center">
              <Info size={13} className="mt-0.5 shrink-0 sm:mt-0" />
              Katalog harga sedang tidak dapat dimuat. Harga di atas adalah referensi terakhir; konfirmasi saat pendaftaran.
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
