import Image from 'next/image';
import { FOOTER } from '@/content/landing';
import {
  COMPANY_NAME,
  SUPPORT_EMAIL,
  SUPPORT_WHATSAPP,
  appLink,
  loginLink,
  registerLink,
  whatsappLink,
} from '@/lib/config';

const productLinks = [
  { label: 'Fitur', href: '/#fitur' },
  { label: 'Cara Kerja', href: '/#cara-kerja' },
  { label: 'Harga', href: '/#harga' },
  { label: 'FAQ', href: '/#faq' },
];

const appLinks = [
  { label: 'Masuk', href: loginLink() },
  { label: 'Daftar', href: registerLink() },
  { label: 'Demo', href: '/#demo' },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-brand-deep text-white">
      <div className="mx-auto max-w-content px-5 py-12 sm:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="h-9 w-9 overflow-hidden rounded-xl">
                <Image src="/logo.png" alt="" width={36} height={36} className="h-9 w-9 object-cover" />
              </span>
              <span className="text-lg font-extrabold tracking-[-0.02em]">Quriva</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">{FOOTER.tagline}</p>

            <div className="mt-5 space-y-1 text-sm">
              <a
                href={whatsappLink('Assalamualaikum, saya ingin bertanya tentang Quriva.')}
                target="_blank"
                rel="noreferrer"
                className="block text-white/80 hover:text-white"
              >
                WhatsApp tim Quriva
              </a>
              <a href={`mailto:${SUPPORT_EMAIL}`} className="block text-white/65 hover:text-white">
                {SUPPORT_EMAIL}
              </a>
              {!SUPPORT_WHATSAPP ? (
                <p className="text-xs text-white/70">Nomor WhatsApp belum diatur.</p>
              ) : null}
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-gold-soft">Produk</p>
            <ul className="mt-4 space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/70 hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-gold-soft">Aplikasi</p>
            <ul className="mt-4 space-y-2.5">
              {appLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-gold-soft">Legal</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href="/privacy" className="text-sm text-white/70 hover:text-white">
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a href="/terms" className="text-sm text-white/70 hover:text-white">
                  Syarat Layanan
                </a>
              </li>
              <li>
                <a href={appLink('/')} className="text-sm text-white/70 hover:text-white">
                  Portal lembaga
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/65 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY_NAME}. Seluruh hak cipta dilindungi.
          </p>
          <p>Monitoring hafalan untuk lembaga dan halaqah.</p>
        </div>
      </div>
    </footer>
  );
}
