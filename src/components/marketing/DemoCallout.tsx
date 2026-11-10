import { ArrowUpRight } from 'lucide-react';
import { DEMO_CALLOUT } from '@/content/landing';
import { DEMO_MESSAGE, whatsappLink } from '@/lib/config';
import { buttonClass } from '@/components/ui/button-styles';
import TrackedLink from '@/components/ui/TrackedLink';

export default function DemoCallout() {
  return (
    <section id="demo" className="scroll-mt-24 border-b border-line py-12 sm:py-14">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-gold/40 bg-white p-6 shadow-card sm:flex-row sm:items-center sm:p-8">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-gold-ink">
              {DEMO_CALLOUT.eyebrow}
            </p>
            <h2 className="mt-2 text-xl font-bold text-ink sm:text-2xl">{DEMO_CALLOUT.title}</h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">{DEMO_CALLOUT.description}</p>
          </div>

          <TrackedLink
            href={whatsappLink(DEMO_MESSAGE)}
            target="_blank"
            rel="noreferrer"
            event="demo_click"
            eventProps={{ placement: 'demo_callout' }}
            className={buttonClass({ variant: 'primary', size: 'md', className: 'shrink-0' })}
          >
            {DEMO_CALLOUT.cta}
            <ArrowUpRight size={16} />
          </TrackedLink>
        </div>
      </div>
    </section>
  );
}
