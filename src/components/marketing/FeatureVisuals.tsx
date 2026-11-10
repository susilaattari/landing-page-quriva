import Image from 'next/image';
import type { ReactNode } from 'react';
import { ArrowRight, Award, Check, FileText, Mic, ShieldCheck } from 'lucide-react';

function Caption({ children }: { children: ReactNode }) {
  return <p className="mt-3 text-right text-[11px] font-medium text-muted">{children}</p>;
}

function DesktopShot({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <div>
      <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-card">
        <Image
          src={src}
          alt={alt}
          width={1440}
          height={1000}
          sizes="(max-width: 1024px) 100vw, 660px"
          className="h-auto w-full"
        />
      </div>
      <Caption>{caption}</Caption>
    </div>
  );
}

function PhoneShot({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <div className="mx-auto w-[218px] sm:w-[232px]">
      <div className="rounded-[34px] border-[6px] border-ink bg-ink p-1 shadow-preview">
        <div className="overflow-hidden rounded-[28px] bg-paper">
          <Image
            src={src}
            alt={alt}
            width={780}
            height={1688}
            sizes="232px"
            className="h-auto w-full"
          />
        </div>
      </div>
      <Caption>{caption}</Caption>
    </div>
  );
}

function SideNotes({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-[250px] space-y-2.5">{children}</div>;
}

function Note({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <div className="flex items-start gap-2.5 rounded-xl border border-line bg-white px-3 py-2.5">
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
        {icon}
      </span>
      <div>
        <p className="text-[11px] font-bold leading-tight text-ink">{title}</p>
        <p className="mt-0.5 text-[10px] leading-snug text-muted">{text}</p>
      </div>
    </div>
  );
}

export function SetoranVisual() {
  return (
    <DesktopShot
      src="/app/rekap.webp"
      alt="Rekap setoran hafalan Quriva dengan riwayat ziyadah, tasmi, rentang ayat, dan penilaian"
      caption="Tampilan asli aplikasi · rekap setoran"
    />
  );
}

export function TapVisual() {
  return (
    <div className="grid items-center gap-6 sm:grid-cols-[232px_1fr]">
      <PhoneShot
        src="/app/tap.webp"
        alt="Mode penilaian tap pada mushaf digital Quriva: satu tap lancar, dua tap tidak lancar"
        caption="Tampilan asli aplikasi · mode tap"
      />
      <SideNotes>
        <Note icon={<Check size={11} strokeWidth={3} />} title="1× tap" text="Ayat ditandai lancar." />
        <Note icon={<ArrowRight size={11} strokeWidth={2.5} />} title="2× tap" text="Ayat ditandai tidak lancar." />
        <Note icon={<ShieldCheck size={11} />} title="Penanda akhir" text="Batas setoran tersimpan, posisi berikutnya otomatis." />
      </SideNotes>
    </div>
  );
}

export function ProgressVisual() {
  return (
    <div className="grid items-center gap-6 sm:grid-cols-[232px_1fr]">
      <PhoneShot
        src="/app/pohon.webp"
        alt="Pohon hafalan 30 juz di aplikasi wali Quriva"
        caption="Tampilan asli aplikasi · pohon hafalan"
      />
      <SideNotes>
        <Note icon={<Award size={11} />} title="3 dari 30 juz" text="Capaian juz khatam terlihat langsung." />
        <Note icon={<Check size={11} strokeWidth={3} />} title="Peta 30 juz" text="Setiap juz punya status: khatam, berjalan, atau belum." />
        <Note icon={<ArrowRight size={11} />} title="Riwayat per ayat" text="Detail setoran bisa dibuka kembali." />
      </SideNotes>
    </div>
  );
}

export function TahsinVisual() {
  return (
    <div className="grid items-center gap-6 sm:grid-cols-[232px_1fr]">
      <PhoneShot
        src="/app/tahsin.webp"
        alt="Rekaman setoran suara dan koreksi ustadz di aplikasi Quriva"
        caption="Tampilan asli aplikasi · tahsin suara"
      />
      <SideNotes>
        <Note icon={<Mic size={11} />} title="Nilai tajwid" text="88/100 dari guru pembimbing." />
        <Note icon={<Check size={11} strokeWidth={3} />} title="Kelancaran" text="90/100 dengan catatan perbaikan." />
        <Note icon={<FileText size={11} />} title="Riwayat koreksi" text="Catatan guru tersimpan untuk diulang." />
      </SideNotes>
    </div>
  );
}

export function CertificateVisual() {
  return (
    <div className="grid items-center gap-6 sm:grid-cols-[232px_1fr]">
      <PhoneShot
        src="/app/sertifikat.webp"
        alt="E-sertifikat tasmi Juz 30 di aplikasi wali Quriva"
        caption="Tampilan asli aplikasi · e-sertifikat"
      />
      <SideNotes>
        <Note icon={<Award size={11} />} title="Sertifikat tasmi" text="PDF per juz, lengkap dengan nomor sertifikat." />
        <Note icon={<FileText size={11} />} title="Siap dibagikan" text="Wali dapat membuka PDF atau membagikannya." />
        <Note icon={<Check size={11} strokeWidth={3} />} title="Tercatat rapi" text="Capaian anak tersimpan di aplikasi." />
      </SideNotes>
    </div>
  );
}

export function FeatureVisual({ id }: { id: 'setoran' | 'tap' | 'progress' | 'tahsin' | 'sertifikat' }) {
  switch (id) {
    case 'setoran':
      return <SetoranVisual />;
    case 'tap':
      return <TapVisual />;
    case 'progress':
      return <ProgressVisual />;
    case 'tahsin':
      return <TahsinVisual />;
    case 'sertifikat':
      return <CertificateVisual />;
    default:
      return null;
  }
}
