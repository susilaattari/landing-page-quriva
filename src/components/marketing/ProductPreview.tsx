import Image from 'next/image';
import LaptopFrame from '@/components/ui/LaptopFrame';
import PhoneFrame from '@/components/ui/PhoneFrame';
import { Smartphone, Laptop, Sparkles } from 'lucide-react';

/**
 * Tampilan visual produk di bagian Hero:
 * Menampilkan mockup Laptop (Dashboard Web Admin) bersama mockup Ponsel (Aplikasi Android Wali & Guru)
 * secara berlapis (duo device display) untuk menegaskan ekosistem lengkap Quriva.
 */
export default function ProductPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[560px] lg:max-w-none pt-2 pb-8 sm:pb-10">
      {/* 1. Mockup Laptop - Dashboard Admin */}
      <div className="relative">
        <LaptopFrame
          src="/app/dashboard.webp"
          alt="Dashboard admin Quriva menampilkan ringkasan santri, guru, halaqah, dan capaian hafalan di laptop"
          priority
          sizes="(max-width: 1024px) 100vw, 560px"
          badge="Web Admin & Guru"
        />

        {/* Badge status Live di kanan atas laptop */}
        <div className="absolute -top-3 right-3 sm:-top-3.5 sm:right-5 hidden sm:flex items-center gap-2 rounded-xl border border-line bg-white/95 px-3 py-1.5 shadow-card backdrop-blur-sm z-20">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[11px] font-bold text-ink">Dashboard Live</span>
        </div>
      </div>

      {/* 2. Mockup Ponsel - Aplikasi Mobile Wali & Guru (Overlapping di foreground kanan bawah) */}
      <div className="absolute -bottom-4 -right-1 sm:-bottom-6 sm:right-2 lg:-bottom-6 lg:-right-3 z-30 drop-shadow-2xl">
        <PhoneFrame
          src="/app/wali-home.webp"
          alt="Aplikasi mobile wali Quriva menampilkan capaian juz dan progres hafalan"
          priority
          widthClass="w-[130px] sm:w-[165px] lg:w-[185px]"
          sizes="(max-width: 640px) 130px, 185px"
          badge="App Wali & Guru"
        />
      </div>

      {/* 3. Floating Card Ekosistem di kiri bawah */}
      <div className="absolute -bottom-2 left-2 sm:-bottom-4 sm:left-4 z-30 hidden sm:flex items-center gap-2.5 rounded-2xl border border-line bg-white/95 px-3.5 py-2 shadow-lift backdrop-blur-sm">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-soft text-brand">
          <Sparkles size={15} />
        </div>
        <div>
          <p className="text-[11px] font-bold leading-tight text-ink">Duo Ekosistem</p>
          <p className="text-[10px] text-muted">Web admin + aplikasi Android</p>
        </div>
      </div>

      {/* Caption catatan akun demo */}
      <p className="mt-8 text-right text-[11px] font-medium text-muted sm:mt-10">
        Tampilan asli Quriva &middot; web & aplikasi Android
      </p>
    </div>
  );
}
