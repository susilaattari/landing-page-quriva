export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'inverse'
  | 'outline-inverse'
  | 'ghost';

type ButtonOptions = {
  variant?: ButtonVariant;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors duration-150 ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 ' +
  'focus-visible:ring-offset-paper disabled:pointer-events-none disabled:opacity-50';

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-brand text-white shadow-card hover:bg-brand-strong',
  secondary: 'border border-line-strong bg-surface text-ink hover:border-brand hover:text-brand',
  inverse: 'bg-white text-brand-deep hover:bg-brand-soft',
  'outline-inverse': 'border border-white/40 text-white hover:bg-white/10',
  ghost: 'text-ink hover:text-brand',
};

const sizes = {
  sm: 'min-h-[44px] px-4 py-2 text-sm',
  md: 'min-h-[44px] px-5 py-3 text-sm',
  lg: 'min-h-[48px] px-6 py-3.5 text-base',
};

export function buttonClass({ variant = 'primary', size = 'md', className = '' }: ButtonOptions = {}) {
  return [base, variants[variant], sizes[size], className].filter(Boolean).join(' ');
}
