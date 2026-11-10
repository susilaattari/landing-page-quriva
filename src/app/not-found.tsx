import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-content flex-col items-start px-5 py-24 sm:px-8">
      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-gold-ink">404</p>
      <h1 className="mt-3 text-3xl font-extrabold tracking-[-0.02em] text-ink sm:text-4xl">
        Halaman tidak ditemukan.
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
        Alamat yang Anda buka tidak tersedia. Kembali ke beranda, atau masuk ke aplikasi jika Anda
        sudah memiliki akun.
      </p>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <a
          href="/"
          className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-strong"
        >
          <ArrowLeft size={16} />
          Kembali ke beranda
        </a>
        <a
          href={`${process.env.NEXT_PUBLIC_APP_URL}/login`}
          className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-line-strong bg-white px-5 py-3 text-sm font-semibold text-ink hover:border-brand hover:text-brand"
        >
          Masuk ke aplikasi
        </a>
      </div>
    </div>
  );
}
