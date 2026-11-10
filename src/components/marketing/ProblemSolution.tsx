import { ArrowRight, Check, X } from 'lucide-react';
import { PROBLEMS } from '@/content/landing';
import SectionHeading from '@/components/ui/SectionHeading';

export default function ProblemSolution() {
  return (
    <section className="border-b border-line bg-sand py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <SectionHeading
          eyebrow="Masalahnya"
          title="Hafalan tidak seharusnya hilang di buku catatan."
          description="Bukan karena guru kurang teliti, tetapi karena catatan, rekap, dan laporan wali berjalan di tempat yang berbeda."
        />

        <div className="mt-9 border-t border-line-strong/30 lg:mt-12">
          {PROBLEMS.map((item) => (
            <div
              key={item.before}
              className="grid gap-3 border-b border-line-strong/30 py-5 sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-6 sm:py-6"
            >
              <div className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-danger">
                  <X size={12} strokeWidth={2.8} />
                </span>
                <p className="text-sm leading-relaxed text-muted sm:text-[15px]">{item.before}</p>
              </div>

              <ArrowRight size={16} className="hidden text-gold-ink sm:block" />

              <div className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand text-white">
                  <Check size={12} strokeWidth={3} />
                </span>
                <p className="text-sm font-semibold leading-relaxed text-ink sm:text-[15px]">{item.after}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
