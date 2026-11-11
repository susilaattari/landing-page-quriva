import Image from 'next/image';

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
  return (
    <div className={`relative mx-auto ${widthClass} select-none ${className}`}>
      {/* Bodi luar ponsel */}
      <div className="relative rounded-[34px] sm:rounded-[40px] border-[5px] sm:border-[7px] border-[#181d24] bg-[#181d24] p-0.5 shadow-preview ring-1 ring-white/10">
        {/* Notch / Speaker Pill di bagian atas */}
        <div className="absolute top-2 sm:top-2.5 left-1/2 -translate-x-1/2 z-20 flex h-3 sm:h-3.5 w-14 sm:w-16 items-center justify-center rounded-full bg-black/90">
          <span className="h-1.5 w-1.5 rounded-full bg-[#1e2329] ring-1 ring-white/10 mr-1.5" />
          <span className="h-0.5 w-3 rounded-full bg-[#2d333b]" />
        </div>

        {/* Layar ponsel */}
        <div className="relative overflow-hidden rounded-[27px] sm:rounded-[32px] bg-paper">
          <Image
            src={src}
            alt={alt}
            width={780}
            height={1688}
            priority={priority}
            sizes={sizes}
            className="h-auto w-full object-cover"
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
