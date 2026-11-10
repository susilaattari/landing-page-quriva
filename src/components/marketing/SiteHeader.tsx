'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/content/landing';
import { loginLink, registerLink } from '@/lib/config';
import { buttonClass } from '@/components/ui/button-styles';
import TrackedLink from '@/components/ui/TrackedLink';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        return;
      }

      if (event.key !== 'Tab' || !dialogRef.current) return;

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter((element) => element.offsetParent !== null);

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
      menuButtonRef.current?.focus();
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-200 ${
        scrolled || open
          ? 'border-line bg-paper shadow-card'
          : 'border-transparent bg-paper'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-content items-center justify-between gap-4 px-5 sm:px-8 lg:h-20">
        <a href="/#top" className="flex items-center gap-2.5" aria-label="Quriva — beranda">
          <span className="h-9 w-9 overflow-hidden rounded-xl shadow-card">
            <Image src="/logo.png" alt="" width={36} height={36} className="h-9 w-9 object-cover" priority />
          </span>
          <span className="text-[17px] font-extrabold tracking-[-0.02em] text-ink">Quriva</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigasi utama">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={`/${link.href}`}
              className="text-sm font-semibold text-muted transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={loginLink()}
            className={buttonClass({ variant: 'ghost', size: 'sm', className: 'px-3' })}
          >
            Masuk
          </a>
          <TrackedLink
            href={registerLink()}
            event="cta_primary_click"
            eventProps={{ placement: 'header' }}
            className={buttonClass({ variant: 'primary', size: 'sm' })}
          >
            Daftar
          </TrackedLink>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <TrackedLink
            href={registerLink()}
            event="cta_primary_click"
            eventProps={{ placement: 'header_mobile' }}
            className={buttonClass({ variant: 'primary', size: 'sm', className: 'px-3.5' })}
          >
            Daftar
          </TrackedLink>
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Buka menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white text-ink"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {open ? (
        <div
          ref={dialogRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu navigasi"
          className="fixed inset-0 z-50 flex flex-col bg-paper lg:hidden"
        >
          <div className="flex h-16 items-center justify-between border-b border-line px-5">
            <span className="flex items-center gap-2.5">
              <span className="h-9 w-9 overflow-hidden rounded-xl">
                <Image src="/logo.png" alt="" width={36} height={36} className="h-9 w-9 object-cover" />
              </span>
              <span className="text-[17px] font-extrabold text-ink">Quriva</span>
            </span>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Tutup menu"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white text-ink"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex flex-1 flex-col gap-1 px-5 py-6" aria-label="Navigasi mobile">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={`/${link.href}`}
                onClick={() => setOpen(false)}
                className="border-b border-line/70 py-4 text-lg font-semibold text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="space-y-2 border-t border-line px-5 py-6">
            <TrackedLink
              href={registerLink()}
              event="cta_primary_click"
              eventProps={{ placement: 'mobile_menu' }}
              className={buttonClass({ variant: 'primary', size: 'lg', className: 'w-full' })}
            >
              Mulai Kelola Hafalan
            </TrackedLink>
            <a
              href={loginLink()}
              className={buttonClass({ variant: 'secondary', size: 'lg', className: 'w-full' })}
            >
              Masuk akun
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
