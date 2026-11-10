import { Check } from 'lucide-react';
import { FEATURES } from '@/content/landing';
import SectionHeading from '@/components/ui/SectionHeading';
import { FeatureVisual } from './FeatureVisuals';

export default function FeatureShowcase() {
  return (
    <section id="fitur" className="scroll-mt-24 border-b border-line py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading
          eyebrow="Fitur inti"
          title="Dari setoran pertama sampai laporan untuk wali."
          description="Setiap bagian terhubung: guru mencatat sekali, admin melihat rekap, dan wali menerima kabar tanpa bertanya."
        />

        <div className="mt-12 lg:mt-16">
          {FEATURES.map((feature, index) => {
            const reversed = index % 2 === 1;
            return (
              <article
                key={feature.id}
                id={`fitur-${feature.id}`}
                className={`grid items-center gap-8 lg:grid-cols-12 lg:gap-14 ${
                  index > 0 ? 'mt-14 border-t border-line pt-12 lg:mt-20 lg:pt-16' : ''
                }`}
              >
                <div className={`lg:col-span-5 ${reversed ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-bold tabular-nums text-gold-ink">{feature.index}</span>
                    <span className="h-px w-6 bg-gold/50" aria-hidden="true" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-gold-ink">
                      {feature.eyebrow}
                    </span>
                  </div>
                  <h3 className="mt-3 text-balance text-2xl font-bold leading-tight tracking-[-0.01em] text-ink sm:text-[28px]">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-pretty text-sm leading-relaxed text-muted sm:text-base">
                    {feature.description}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {feature.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5 text-sm text-ink">
                        <Check size={15} className="mt-0.5 shrink-0 text-brand" strokeWidth={2.7} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`lg:col-span-7 ${reversed ? 'lg:order-1' : ''}`}>
                  <FeatureVisual id={feature.id} />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
