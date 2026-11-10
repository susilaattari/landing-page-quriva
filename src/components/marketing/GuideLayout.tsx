import type { ReactNode } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import JsonLd from '@/components/seo/JsonLd';
import { registerLink } from '@/lib/config';
import { buttonClass } from '@/components/ui/button-styles';
import TrackedLink from '@/components/ui/TrackedLink';

type GuideLayoutProps = {
  title: string;
  description: string;
  updated: string;
  readingTime: string;
  breadcrumb: { name: string; path: string }[];
  jsonLd: Record<string, unknown>[];
  children: ReactNode;
};

export default function GuideLayout({
  title,
  description,
  updated,
  readingTime,
  breadcrumb,
  jsonLd,
  children,
}: GuideLayoutProps) {
  return (
    <article className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <JsonLd data={jsonLd} />

      <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-xs text-muted">
        {breadcrumb.map((item, index) => (
          <span key={item.path} className="flex items-center gap-2">
            {index > 0 ? <span aria-hidden="true">/</span> : null}
            {index === breadcrumb.length - 1 ? (
              <span className="font-semibold text-ink">{item.name}</span>
            ) : (
              <Link href={item.path} className="hover:text-brand">
                {item.name}
              </Link>
            )}
          </span>
        ))}
      </nav>

      <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.16em] text-gold-ink">
        <span className="h-px w-8 bg-gold/60" aria-hidden="true" />
        <span>Panduan</span>
      </div>

      <h1 className="mt-4 text-balance text-3xl font-extrabold leading-[1.12] tracking-[-0.02em] text-ink sm:text-4xl">
        {title}
      </h1>
      <p className="mt-4 text-pretty text-base leading-relaxed text-muted sm:text-lg">{description}</p>
      <p className="mt-4 text-xs text-muted">
        Diperbarui {updated} &middot; {readingTime}
      </p>

      <div className="mt-8 space-y-7 border-t border-line pt-8 text-sm leading-relaxed text-muted sm:text-[15px]">
        {children}
      </div>

      <div className="mt-10 rounded-2xl border border-gold/40 bg-white p-6 shadow-card">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-gold-ink">Langkah berikutnya</p>
        <h2 className="mt-2 text-xl font-bold text-ink">Lihat Quriva dengan data lembaga Anda.</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Mulai dari satu halaqah, atau minta demo dengan data contoh untuk melihat alurnya lebih dulu.
        </p>
        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <TrackedLink
            href={registerLink()}
            event="cta_primary_click"
            eventProps={{ placement: 'guide' }}
            className={buttonClass({ variant: 'primary', size: 'md' })}
          >
            Mulai Kelola Hafalan
            <ArrowRight size={15} />
          </TrackedLink>
          <a href="/#harga" className={buttonClass({ variant: 'secondary', size: 'md' })}>
            Lihat paket
          </a>
        </div>
      </div>
    </article>
  );
}
