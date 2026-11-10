import Image from 'next/image';

export default function ProductPreview() {
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-preview">
        <Image
          src="/app/dashboard.webp"
          alt="Dashboard admin Quriva menampilkan ringkasan santri, guru, halaqah, dan capaian hafalan"
          width={1440}
          height={1000}
          priority
          sizes="(max-width: 1024px) 100vw, 480px"
          className="h-auto w-full"
        />
      </div>

      <div className="absolute -bottom-4 left-4 hidden items-center gap-2 rounded-xl border border-line bg-white px-3 py-2 shadow-card sm:flex">
        <span className="h-6 w-6 overflow-hidden rounded-md">
          <Image src="/logo.png" alt="" width={24} height={24} className="h-6 w-6 object-cover" />
        </span>
        <div>
          <p className="text-[10px] font-bold leading-tight text-ink">Dashboard institusi</p>
          <p className="text-[9px] text-muted">Tampilan asli aplikasi</p>
        </div>
      </div>

      <p className="mt-5 text-right text-[11px] font-medium text-muted">
        Tampilan asli Quriva &middot; akun demo
      </p>
    </div>
  );
}
