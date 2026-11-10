import { TRUST_POINTS } from '@/content/landing';
import SectionHeading from '@/components/ui/SectionHeading';

export default function TrustSection() {
  return (
    <section id="keamanan" className="scroll-mt-24 border-b border-line py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-content gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Kepercayaan"
            title="Data lembaga tetap milik lembaga."
            description="Quriva dibuat untuk banyak lembaga. Karena itu akses dan data dipisahkan sejak awal, bukan ditambahkan belakangan."
          />
        </div>

        <div className="grid gap-0 border-t border-line sm:grid-cols-2 lg:col-span-7">
          {TRUST_POINTS.map((point, index) => (
            <div
              key={point.title}
              className={`py-6 sm:py-7 ${
                index % 2 === 0 ? 'sm:border-r sm:border-line sm:pr-6' : 'sm:pl-6'
              } ${index > 1 ? 'border-t border-line' : ''}`}
            >
              <span className="text-[11px] font-bold tabular-nums text-gold-ink">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-2 text-base font-bold text-ink">{point.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
