import Image from 'next/image';

interface LaptopFrameProps {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  badge?: string;
}

/**
 * Komponen mockup laptop realistis untuk menampilkan tangkapan layar web (dashboard / rekap).
 * Dirancang proporsional dengan bezel layar, kamera web, deck keyboard bertekstur,
 * dan notch pembuka laptop di bagian bawah.
 */
export default function LaptopFrame({
  src,
  alt,
  priority = false,
  sizes = '(max-width: 1024px) 100vw, 640px',
  className = '',
  badge,
}: LaptopFrameProps) {
  return (
    <div className={`relative mx-auto w-full select-none ${className}`}>
      {/* Layar / Lid Laptop */}
      <div className="relative overflow-hidden rounded-t-[14px] sm:rounded-t-[20px] border-[5px] sm:border-[8px] border-[#1b1f24] bg-[#1b1f24] shadow-2xl">
        {/* Indikator Lensa Kamera Web */}
        <div className="absolute top-1 sm:top-1.5 left-1/2 -translate-x-1/2 flex items-center gap-1 z-20">
          <span className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-[#374151] ring-1 ring-white/20" />
        </div>

        {/* Tampilan Layar */}
        <div className="relative overflow-hidden rounded-t-sm sm:rounded-t-md bg-white">
          <Image
            src={src}
            alt={alt}
            width={1440}
            height={1000}
            priority={priority}
            sizes={sizes}
            className="h-auto w-full object-cover object-top"
          />
        </div>
      </div>

      {/* Bagian Bawah / Base Deck Laptop */}
      <div className="relative mx-auto -mt-0.5 h-2.5 sm:h-3.5 w-[105%] -translate-x-[2.4%] rounded-b-lg sm:rounded-b-xl bg-gradient-to-b from-[#383e47] via-[#24282e] to-[#181a1f] shadow-[0_16px_36px_rgba(15,31,26,0.18)]">
        {/* Lekukan pembuka laptop (thumb notch) di tengah */}
        <div className="absolute left-1/2 top-0 h-1 sm:h-1.5 w-12 sm:w-16 -translate-x-1/2 rounded-b-md bg-[#131518]" />
      </div>

      {/* Bayangan halus di bawah laptop */}
      <div className="mx-auto -mt-0.5 h-2 w-[85%] rounded-full bg-ink/15 blur-md" aria-hidden="true" />

      {/* Badge opsional */}
      {badge && (
        <span className="absolute -top-3 left-4 hidden sm:inline-flex items-center gap-1.5 rounded-full bg-brand-deep/95 px-3 py-1 text-[10px] font-bold tracking-wide text-white shadow-md backdrop-blur-sm z-20">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          {badge}
        </span>
      )}
    </div>
  );
}
