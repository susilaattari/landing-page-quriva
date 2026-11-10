'use client';

import { useRef, useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { SEGMENTS } from '@/content/landing';
import { registerLink } from '@/lib/config';
import { track } from '@/lib/analytics';
import { buttonClass } from '@/components/ui/button-styles';
import TrackedLink from '@/components/ui/TrackedLink';
import SectionHeading from '@/components/ui/SectionHeading';

export default function SegmentExplorer() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const segment = SEGMENTS[active];

  const select = (index: number) => {
    setActive(index);
    track('segment_select', { segment: SEGMENTS[index].id });
  };

  const onKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = SEGMENTS.length - 1;
    let next: number | null = null;

    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = index === last ? 0 : index + 1;
    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = index === 0 ? last : index - 1;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = last;

    if (next !== null) {
      event.preventDefault();
      select(next);
      tabRefs.current[next]?.focus();
    }
  };

  return (
    <section id="segmen" className="border-b border-line py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading
          eyebrow="Untuk siapa"
          title="Satu platform, tiga cara memulai."
          description="Pilih konteks Anda untuk melihat bagian yang paling relevan. Struktur dan harga tetap sama."
        />

        <div className="mt-9 border-y border-line lg:mt-12">
          <div className="grid lg:grid-cols-12">
            <div
              role="tablist"
              aria-label="Pilih jenis lembaga"
              className="grid grid-cols-3 lg:col-span-4 lg:flex lg:flex-col"
            >
              {SEGMENTS.map((item, index) => {
                const selected = index === active;
                return (
                  <button
                    key={item.id}
                    ref={(element) => {
                      tabRefs.current[index] = element;
                    }}
                    role="tab"
                    id={`segment-tab-${item.id}`}
                    aria-selected={selected}
                    aria-controls={`segment-panel-${item.id}`}
                    tabIndex={selected ? 0 : -1}
                    onClick={() => select(index)}
                    onKeyDown={(event) => onKeyDown(event, index)}
                    className={`group flex min-h-[64px] flex-col items-start justify-center gap-1 border-b px-3 py-3 text-left transition-colors lg:flex-row lg:items-center lg:gap-3 lg:border-b-0 lg:border-l-2 lg:px-5 lg:py-6 ${
                      selected
                        ? 'border-b-gold bg-white text-ink lg:border-l-gold'
                        : 'border-b-line border-l-transparent text-muted hover:bg-white/60 hover:text-ink'
                    }`}
                  >
                    <span
                      className={`text-[10px] font-bold tabular-nums lg:text-[11px] ${
                        selected ? 'text-gold-ink' : 'text-muted'
                      }`}
                    >
                      {item.index}
                    </span>
                    <span className="text-[11px] font-semibold leading-tight lg:text-sm">
                      {item.label}
                    </span>
                    <ArrowRight
                      size={15}
                      className={`ml-auto hidden transition-transform lg:block ${
                        selected ? 'translate-x-0 text-gold-ink' : '-translate-x-1 text-transparent'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            <div
              role="tabpanel"
              id={`segment-panel-${segment.id}`}
              aria-labelledby={`segment-tab-${segment.id}`}
              className="border-t border-line px-5 py-7 sm:px-7 lg:col-span-8 lg:border-l lg:border-t-0 lg:px-10 lg:py-10"
            >
              <div key={segment.id} className="animate-fade-in">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-gold-ink">
                  {segment.short}
                </p>
                <h3 className="mt-3 text-balance text-2xl font-bold leading-tight tracking-[-0.01em] text-ink sm:text-[28px]">
                  {segment.title}
                </h3>
                <p className="mt-3 max-w-xl text-pretty text-sm leading-relaxed text-muted sm:text-base">
                  {segment.description}
                </p>

                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {segment.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5 text-sm text-ink">
                      <Check size={16} className="mt-0.5 shrink-0 text-brand" strokeWidth={2.6} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-col gap-3 border-t border-line pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-md text-xs leading-relaxed text-muted">{segment.note}</p>
                  <TrackedLink
                    href={registerLink()}
                    event="cta_primary_click"
                    eventProps={{ placement: 'segment', segment: segment.id }}
                    className={buttonClass({ variant: 'primary', size: 'sm', className: 'shrink-0' })}
                  >
                    {segment.ctaLabel}
                    <ArrowRight size={15} />
                  </TrackedLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
