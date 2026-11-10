import { ArrowRight, Check } from 'lucide-react';
import { GUARDIAN } from '@/content/landing';
import PhonePreview from './PhonePreview';

export default function GuardianSection() {
  return (
    <section className="border-b border-line bg-sand py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-content items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <PhonePreview />
        </div>

        <div className="lg:col-span-7">
          <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.16em] text-gold-ink">
            <span className="h-px w-8 bg-gold/60" aria-hidden="true" />
            <span>{GUARDIAN.eyebrow}</span>
          </div>
          <h2 className="mt-4 text-balance text-3xl font-bold leading-[1.15] tracking-[-0.02em] text-ink sm:text-4xl">
            {GUARDIAN.title}
          </h2>
          <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
            {GUARDIAN.description}
          </p>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {GUARDIAN.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2.5 text-sm text-ink">
                <Check size={16} className="mt-0.5 shrink-0 text-brand" strokeWidth={2.7} />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-xs text-muted">{GUARDIAN.footnote}</p>

          <a
            href="#harga"
            className="mt-6 inline-flex min-h-[44px] items-center gap-2 text-sm font-bold text-brand hover:text-brand-strong"
          >
            Lihat paket yang tersedia
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
