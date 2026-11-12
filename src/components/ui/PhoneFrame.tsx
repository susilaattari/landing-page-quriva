'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { shimmerBlurDataUrl } from '@/lib/image-shimmer';

interface PhoneFrameProps {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  badge?: string;
  widthClass?: string;
}

/**
 * Komponen mockup smartphone modern (Android / iOS style) dengan bezel tipis,
 * pill speaker / notch kamera, dan shadow realistis.
 * Dilengkapi skeleton shimmer loading agar tidak tampak kosong saat gambar di-load.
 */
export default function PhoneFrame({
  src,
  alt,
  priority = false,
  sizes = '260px',
  className = '',
  badge,
  widthClass = 'w-[200px] sm:w-[230px]',
}: PhoneFrameProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
  }, [src]);

  return (
    <div className={`relative mx-auto ${widthClass} select-none ${className}`}>
      {/* Bodi luar ponsel */}
      <div className="relative rounded-[34px] sm:rounded-[40px] border-[5px] sm:border-[7px] border-[#181d24] bg-[#181d24] p-0.5 shadow-preview ring-1 ring-white/10">
        {/* Notch / Speaker Pill di bagian atas */}
        <div className="absolute top-2 sm:top-2.5 left-1/2 -translate-x-1/2 z-20 flex h-3 sm:h-3.5 w-14 sm:w-16 items-center justify-center rounded-full bg-black/90">
          <span className="h-1.5 w-1.5 rounded-full bg-[#1e2329] ring-1 ring-white/10 mr-1.5" />
          <span className="h-0.5 w-3 rounded-full bg-[#2d333b]" />
        </div>

        {/* Layar ponsel (dengan rasio tetap 780/1688) */}
        <div className="relative aspect-[780/1688] w-full overflow-hidden rounded-[27px] sm:rounded-[32px] bg-[#FAF8F2]">
          {/* Skeleton Shimmer Loading Placeholder */}
          <div
            className={`absolute inset-0 z-10 flex flex-col items-center justify-center gap-2 bg-gradient-to-b from-sand via-line/40 to-sand transition-opacity duration-300 ${
              isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}
            aria-hidden={isLoaded}
          >
            {/* Shimmer pulse effect */}
            <div className="absolute inset-0 animate-pulse bg-gradient-to-b from-transparent via-white/40 to-transparent" />

            {/* Spinner loader */}
            <div className="relative z-10 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-white/90 shadow-card backdrop-blur-sm">
              <span className="h-4 w-4 sm:h-5 sm:w-5 animate-spin rounded-full border-2 border-brand/20 border-t-brand" />
            </div>
            <span className="relative z-10 text-[9px] sm:text-[10px] font-semibold text-muted">
              Memuat...
            </span>
          </div>

          {/* Gambar Tangkapan Layar Asli */}
          <Image
            src={src}
            alt={alt}
            width={780}
            height={1688}
            priority={priority}
            sizes={sizes}
            placeholder="blur"
            blurDataURL={shimmerBlurDataUrl(780, 1688)}
            onLoad={() => setIsLoaded(true)}
            className={`h-auto w-full object-cover transition-all duration-500 ease-out ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.02]'
            }`}
          />
        </div>
      </div>

      {/* Badge opsional */}
      {badge && (
        <span className="absolute -top-2.5 right-2 inline-flex items-center gap-1 rounded-full bg-brand px-2.5 py-0.5 text-[9px] sm:text-[10px] font-bold text-white shadow-md z-20">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-200" />
          {badge}
        </span>
      )}
    </div>
  );
}
