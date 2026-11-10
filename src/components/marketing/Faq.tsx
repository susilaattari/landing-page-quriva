'use client';

import { Plus } from 'lucide-react';
import { FAQS } from '@/content/landing';
import { SUPPORT_EMAIL, SUPPORT_WHATSAPP, whatsappLink } from '@/lib/config';
import { track } from '@/lib/analytics';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 border-b border-line py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-content gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeading
            eyebrow="FAQ"
            title="Pertanyaan yang sering diajukan."
            description="Belum menemukan jawabannya? Tim kami bisa membantu lewat WhatsApp atau email."
          />
          <div className="mt-6 space-y-1 text-sm">
            <a
              href={whatsappLink('Assalamualaikum, saya ingin bertanya tentang Quriva.')}
              target="_blank"
              rel="noreferrer"
              className="block font-semibold text-brand hover:text-brand-strong"
            >
              WhatsApp tim Quriva
            </a>
            <a href={`mailto:${SUPPORT_EMAIL}`} className="block text-muted hover:text-ink">
              {SUPPORT_EMAIL}
            </a>
            {!SUPPORT_WHATSAPP ? (
              <p className="text-xs text-muted">Nomor WhatsApp belum diatur.</p>
            ) : null}
          </div>
        </div>

        <div className="border-t border-line lg:col-span-8">
          {FAQS.map((item) => (
            <details
              key={item.question}
              className="group border-b border-line py-4"
              onToggle={(event) => {
                if ((event.currentTarget as HTMLDetailsElement).open) {
                  track('faq_open', { question: item.question });
                }
              }}
            >
              <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 text-left text-sm font-semibold text-ink marker:hidden [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                <Plus
                  size={18}
                  className="shrink-0 text-brand transition-transform duration-200 group-open:rotate-45"
                />
              </summary>
              <p className="max-w-2xl pb-1 pt-2 text-sm leading-relaxed text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
