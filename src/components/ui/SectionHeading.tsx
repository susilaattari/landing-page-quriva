import type { ReactNode } from 'react';

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'light',
  className = '',
}: SectionHeadingProps) {
  const centered = align === 'center';

  return (
    <div className={`${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`}>
      <div
        className={`flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.16em] ${
          tone === 'dark' ? 'text-gold-soft' : 'text-gold-ink'
        } ${centered ? 'justify-center' : ''}`}
      >
        <span className={`h-px w-8 ${tone === 'dark' ? 'bg-gold-soft/70' : 'bg-gold/60'}`} aria-hidden="true" />
        <span>{eyebrow}</span>
      </div>
      <h2
        className={`mt-4 text-balance text-3xl font-bold leading-[1.15] tracking-[-0.02em] sm:text-4xl ${
          tone === 'dark' ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-pretty text-base leading-relaxed sm:text-lg ${
            tone === 'dark' ? 'text-white/75' : 'text-muted'
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
