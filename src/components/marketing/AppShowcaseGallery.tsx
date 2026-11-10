'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, ChevronLeft, ChevronRight, Check, Laptop, Smartphone, X, ZoomIn } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import TrackedLink from '@/components/ui/TrackedLink';
import { buttonClass } from '@/components/ui/button-styles';
import { APP_SCREENS, type AppScreen, type AppScreenCategory } from '@/content/app-screens';
import { DEMO_MESSAGE, registerLink, whatsappLink } from '@/lib/config';
import { track } from '@/lib/analytics';

type Filter = 'all' | AppScreenCategory;

const FILTER_LABELS: Record<Filter, string> = {
  all: 'Semua',
  web: 'Web Admin',
  mobile: 'Aplikasi Android',
};

function Screenshot({ screen, priority = false, large = false }: { screen: AppScreen; priority?: boolean; large?: boolean }) {
  if (screen.device === 'desktop') {
    return (
      <div className="overflow-hidden rounded-xl border border-line bg-white shadow-card">
        <Image
          src={screen.src}
          alt={screen.alt}
          width={1440}
          height={1000}
          priority={priority}
          sizes={large ? '(max-width: 1024px) 100vw, 900px' : '(max-width: 1024px) 100vw, 640px'}
          className="h-auto w-full"
        />
      </div>
    );
  }

  return (
    <div className={`mx-auto ${large ? 'w-[260px] sm:w-[300px]' : 'w-[220px] sm:w-[250px]'}`}>
      <div className="rounded-[34px] border-[6px] border-ink bg-ink p-1 shadow-preview">
        <div className="overflow-hidden rounded-[28px] bg-paper">
          <Image
            src={screen.src}
            alt={screen.alt}
            width={780}
            height={1688}
            priority={priority}
            sizes={large ? '300px' : '250px'}
            className="h-auto w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default function AppShowcaseGallery() {
  const [filter, setFilter] = useState<Filter>('all');
  const [activeId, setActiveId] = useState(APP_SCREENS[0].id);
  const [zoomed, setZoomed] = useState(false);

  const visible = useMemo(
    () => (filter === 'all' ? APP_SCREENS : APP_SCREENS.filter((s) => s.category === filter)),
    [filter]
  );
  const counts = useMemo(
    () => ({
      all: APP_SCREENS.length,
      web: APP_SCREENS.filter((s) => s.category === 'web').length,
      mobile: APP_SCREENS.filter((s) => s.category === 'mobile').length,
    }),
    []
  );

  const active = visible.find((s) => s.id === activeId) ?? visible[0];
  const index = visible.findIndex((s) => s.id === active.id);

  const select = useCallback(
    (id: string) => {
      setActiveId(id);
      track('app_screen_view', { screen: id });
    },
    []
  );

  const step = useCallback(
    (delta: number) => {
      const next = visible[(index + delta + visible.length) % visible.length];
      select(next.id);
    },
    [index, select, visible]
  );

  const changeFilter = (next: Filter) => {
    setFilter(next);
    const list = next === 'all' ? APP_SCREENS : APP_SCREENS.filter((s) => s.category === next);
    if (!list.some((s) => s.id === activeId)) setActiveId(list[0].id);
  };

  useEffect(() => {
    if (!zoomed) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setZoomed(false);
      if (event.key === 'ArrowRight') step(1);
      if (event.key === 'ArrowLeft') step(-1);
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [zoomed, step]);

  return (
    <section
      id="contoh-aplikasi"
      aria-labelledby="contoh-aplikasi-title"
      className="scroll-mt-24 border-b border-line bg-sand py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <SectionHeading
              eyebrow="Contoh aplikasi"
              title={<span id="contoh-aplikasi-title">Lihat tampilan asli yang akan dipakai lembaga Anda.</span>}
              description="Semua gambar adalah tangkapan layar aplikasi Quriva dengan akun demo: web untuk admin dan guru, aplikasi Android untuk guru dan wali."
            />
          </div>

          <div
            role="group"
            aria-label="Filter tampilan aplikasi"
            className="inline-flex self-start rounded-xl border border-line bg-white p-1 shadow-card"
          >
            {(Object.keys(FILTER_LABELS) as Filter[]).map((key) => (
              <button
                key={key}
                type="button"
                aria-pressed={filter === key}
                onClick={() => changeFilter(key)}
                className={`min-h-[40px] rounded-lg px-3.5 text-xs font-bold transition-colors sm:text-sm ${
                  filter === key ? 'bg-brand text-white' : 'text-muted hover:text-brand'
                }`}
              >
                {FILTER_LABELS[key]} <span className="opacity-70">({counts[key]})</span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid items-center gap-8 rounded-3xl border border-line bg-white p-5 shadow-card sm:p-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-sand/70 p-4 sm:p-6">
              <button
                type="button"
                onClick={() => setZoomed(true)}
                className="group relative block w-full cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                aria-label={`Perbesar: ${active.title}`}
              >
                <Screenshot screen={active} priority />
                <span className="pointer-events-none absolute right-3 top-3 inline-flex items-center gap-1 rounded-lg bg-ink/80 px-2 py-1 text-[11px] font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  <ZoomIn size={12} /> Perbesar
                </span>
              </button>

              <div className="mt-5 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  className={buttonClass({ variant: 'secondary', size: 'sm', className: 'px-3' })}
                  aria-label="Tampilan sebelumnya"
                >
                  <ChevronLeft size={16} />
                </button>
                <p className="text-xs font-semibold text-muted" aria-live="polite">
                  {index + 1} / {visible.length}
                </p>
                <button
                  type="button"
                  onClick={() => step(1)}
                  className={buttonClass({ variant: 'secondary', size: 'sm', className: 'px-3' })}
                  aria-label="Tampilan berikutnya"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1 text-[11px] font-bold text-brand">
              {active.device === 'desktop' ? <Laptop size={13} /> : <Smartphone size={13} />}
              {active.badge}
            </span>
            <p className="mt-3 text-[11px] font-bold uppercase tracking-[0.14em] text-gold-ink">{active.role}</p>
            <h3 className="mt-2 text-balance text-2xl font-bold leading-tight tracking-[-0.01em] text-ink sm:text-[28px]">
              {active.title}
            </h3>
            <p className="mt-3 text-pretty text-sm leading-relaxed text-muted sm:text-base">{active.summary}</p>

            <ul className="mt-5 space-y-2.5">
              {active.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-ink">
                  <Check size={15} className="mt-0.5 shrink-0 text-brand" strokeWidth={2.7} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <TrackedLink
                href={registerLink()}
                event="cta_primary_click"
                eventProps={{ placement: 'app_showcase', screen: active.id }}
                className={buttonClass({ variant: 'primary', size: 'md' })}
              >
                Mulai berlangganan
                <ArrowUpRight size={16} />
              </TrackedLink>
              <TrackedLink
                href={whatsappLink(DEMO_MESSAGE)}
                target="_blank"
                rel="noreferrer"
                event="demo_click"
                eventProps={{ placement: 'app_showcase', screen: active.id }}
                className={buttonClass({ variant: 'secondary', size: 'md' })}
              >
                Minta demo
              </TrackedLink>
            </div>
          </div>
        </div>

        <ul className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-5 lg:grid-cols-9" aria-label="Pilih tampilan aplikasi">
          {visible.map((screen) => {
            const selected = screen.id === active.id;
            return (
              <li key={screen.id}>
                <button
                  type="button"
                  onClick={() => select(screen.id)}
                  aria-current={selected}
                  aria-label={screen.title}
                  className={`block w-full overflow-hidden rounded-xl border bg-white p-1 transition-all ${
                    selected ? 'border-brand ring-2 ring-brand/30' : 'border-line hover:border-brand/50'
                  }`}
                >
                  <span className="relative block aspect-[4/3] overflow-hidden rounded-lg bg-sand">
                    <Image
                      src={screen.src}
                      alt=""
                      fill
                      sizes="120px"
                      className="object-cover object-top"
                    />
                  </span>
                  <span className="mt-1 block truncate px-1 text-[10px] font-bold text-muted">{screen.badge}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {zoomed && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm"
          onClick={() => setZoomed(false)}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-white p-4 shadow-preview sm:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-gold-ink">{active.badge}</p>
                <h3 className="text-lg font-bold text-ink">{active.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setZoomed(false)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-line text-muted hover:text-ink"
                aria-label="Tutup"
              >
                <X size={18} />
              </button>
            </div>
            <Screenshot screen={active} large />
          </div>
        </div>
      )}
    </section>
  );
}
