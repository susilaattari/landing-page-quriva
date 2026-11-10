import { ArrowUpRight } from 'lucide-react';
import { FINAL_CTA } from '@/content/landing';
import { DEMO_MESSAGE, registerLink, whatsappLink } from '@/lib/config';
import { buttonClass } from '@/components/ui/button-styles';
import TrackedLink from '@/components/ui/TrackedLink';
import Ornament from '@/components/ui/Ornament';

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-brand-deep text-white">
      <Ornament
        className="pointer-events-none absolute -right-20 -top-20 h-[420px] w-[420px]"
        color="#D4A53C"
        opacity={0.22}
        patternId="final-khatam"
      />
      <div className="relative mx-auto max-w-content px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.16em] text-gold-soft">
              <span className="h-px w-8 bg-gold-soft/60" aria-hidden="true" />
              <span>Mulai sekarang</span>
            </div>
            <h2 className="mt-4 max-w-2xl text-balance text-3xl font-bold leading-[1.12] tracking-[-0.02em] sm:text-4xl lg:text-[42px]">
              {FINAL_CTA.title}
            </h2>
            <p className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-white/75 sm:text-base">
              {FINAL_CTA.description}
            </p>
            <p className="mt-5 text-xs text-white/70">{FINAL_CTA.note}</p>
          </div>

          <div className="flex flex-col gap-3 lg:col-span-5 lg:items-end">
            <TrackedLink
              href={registerLink()}
              event="cta_primary_click"
              eventProps={{ placement: 'final_cta' }}
              className={buttonClass({ variant: 'inverse', size: 'lg', className: 'w-full lg:w-auto' })}
            >
              {FINAL_CTA.cta}
              <ArrowUpRight size={18} />
            </TrackedLink>
            <TrackedLink
              href={whatsappLink(DEMO_MESSAGE)}
              target="_blank"
              rel="noreferrer"
              event="demo_click"
              eventProps={{ placement: 'final_cta' }}
              className={buttonClass({ variant: 'outline-inverse', size: 'lg', className: 'w-full lg:w-auto' })}
            >
              Lihat demo dulu
            </TrackedLink>
          </div>
        </div>
      </div>
    </section>
  );
}
