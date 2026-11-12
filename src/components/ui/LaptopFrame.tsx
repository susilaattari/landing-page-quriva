'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { shimmerBlurDataUrl } from '@/lib/image-shimmer';

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
 * Dilengkapi efek skeleton shimmer dan transisi fade-in halus saat gambar sedang dimuat,
 * sehingga tidak ada area kosong (blank) saat halaman pertama kali dibuka atau di-reload.
 */
export default function LaptopFrame({
  src,
  alt,
  priority = false,
  sizes = '(max-width: 1024px) 100vw, 640px',
  className = '',
  badge,
}: LaptopFrameProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Reset status loading setiap kali src gambar berubah (misal saat berganti tab galeri)
  useEffect(() => {
    setIsLoaded(false);
  }, [src]);

  return (
    <div className={`relative mx-auto w-full select-none ${className}`}>
      {/* Layar / Lid Laptop */}
      <div className="relative overflow-hidden rounded-t-[14px] sm:rounded-t-[20px] border-[5px] sm:border-[8px] border-[#1b1f24] bg-[#1b1f24] shadow-2xl">
        {/* Indikator Lensa Kamera Web */}
        <div className="absolute top-1 sm:top-1.5 left-1/2 -translate-x-1/2 flex items-center gap-1 z-20">
          <span className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-[#374151] ring-1 ring-white/20" />
        </div>

        {/* Tampilan Layar (dengan rasio tetap 1440/1000 agar tidak loncat / CLS 0) */}
        <div className="relative aspect-[1440/1000] w-full overflow-hidden rounded-t-sm sm:rounded-t-md bg-[#FAF8F2]">
          {/* Skeleton Shimmer Loading Placeholder (muncul sebelum gambar terunduh) */}
          <div
            className={`absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-sand via-line/40 to-sand transition-opacity duration-300 ${
              isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
            aria-hidden={isLoaded}
          >
            {/* Shimmer pulse effect */}
            <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-transparent via-white/40 to-transparent" />

            {/* Spinner loader elegan */}
            <div className="relative z-10 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-2xl bg-white/90 shadow-card backdrop-blur-sm">
              <span className="h-5 w-5 sm:h-6 sm:w-6 animate-spin rounded-full border-2 border-brand/20 border-t-brand" />
            </div>
            <span className="relative z-10 text-[10px] sm:text-xs font-semibold tracking-wide text-muted">
              Memuat pratinjau...
            </span>
          </div>

          {/* Gambar Tangkapan Layar Asli */}
          <Image
            src={src}
            alt={alt}
            width={1440}
            height={1000}
            priority={priority}
            sizes={sizes}
            placeholder="blur"
            blurDataURL={shimmerBlurDataUrl(1440, 1000)}
            onLoad={() => setIsLoaded(true)}
            className={`h-auto w-full object-cover object-top transition-all duration-500 ease-out ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.01]'
            }`}
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
