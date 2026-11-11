import { ArrowUpRight, Check } from 'lucide-react';
import { HERO } from '@/content/landing';
import { DEMO_MESSAGE, registerLink, whatsappLink } from '@/lib/config';
import { buttonClass } from '@/components/ui/button-styles';
import TrackedLink from '@/components/ui/TrackedLink';
import Ornament from '@/components/ui/Ornament';
import ProductPreview from './ProductPreview';

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden border-b border-line">
      <Ornament
        className="pointer-events-none absolute -right-24 top-0 hidden h-[560px] w-[560px] opacity-60 lg:block"
        patternId="hero-khatam"
        opacity={0.5}
      />
      <div className="relative mx-auto max-w-content px-5 pb-14 pt-10 sm:px-8 lg:pb-24 lg:pt-20">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6 xl:col-span-6">
            <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.16em] text-gold-ink">
              <span className="h-px w-8 bg-gold/60" aria-hidden="true" />
              <span>{HERO.eyebrow}</span>
            </div>

            <h1
              id="hero-title"
              className="mt-5 text-balance text-[2.35rem] font-extrabold leading-[1.06] tracking-[-0.03em] text-ink sm:text-5xl lg:text-[3.9rem]"
            >
              {HERO.titleTop}
              <br />
              <span className="text-brand">{HERO.titleBottom}</span>
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
              {HERO.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <TrackedLink
                href={registerLink()}
                event="cta_primary_click"
                eventProps={{ placement: 'hero' }}
                className={buttonClass({ variant: 'primary', size: 'lg' })}
              >
                {HERO.primaryCta}
                <ArrowUpRight size={18} />
              </TrackedLink>
              <TrackedLink
                href={whatsappLink(DEMO_MESSAGE)}
                target="_blank"
                rel="noreferrer"
                event="demo_click"
                eventProps={{ placement: 'hero' }}
                className={buttonClass({ variant: 'secondary', size: 'lg' })}
              >
                {HERO.secondaryCta}
              </TrackedLink>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2.5">
              {HERO.proof.map((item) => (
                <li key={item} className="flex items-center gap-2 text-xs font-medium text-muted">
                  <Check size={14} className="text-brand" strokeWidth={2.6} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 xl:col-span-6">
            <ProductPreview />
          </div>
        </div>
      </div>
    </section>
  );
}
