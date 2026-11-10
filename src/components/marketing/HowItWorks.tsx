import { HOW_IT_WORKS } from '@/content/landing';
import SectionHeading from '@/components/ui/SectionHeading';

export default function HowItWorks() {
  return (
    <section id="cara-kerja" className="scroll-mt-24 border-b border-line py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading
          eyebrow="Cara kerja"
          title="Tiga langkah sebelum setoran pertama tercatat."
          description="Tidak perlu migrasi besar. Mulai dari satu halaqah, lalu tambah guru dan santri saat siap."
        />

        <ol className="mt-10 grid gap-0 border-t border-line md:grid-cols-3 lg:mt-14">
          {HOW_IT_WORKS.map((step, index) => (
            <li
              key={step.step}
              className={`relative py-6 md:py-8 ${
                index > 0 ? 'border-t border-line md:border-l md:border-t-0 md:pl-8 lg:pl-10' : 'md:pr-8'
              }`}
            >
              <span className="text-[11px] font-bold tabular-nums text-gold-ink">{step.step}</span>
              <h3 className="mt-3 text-lg font-bold text-ink">{step.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
