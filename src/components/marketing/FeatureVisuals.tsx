import Image from 'next/image';
import type { ReactNode } from 'react';
import { Award, Check, FileText, Mic, Play } from 'lucide-react';

function PreviewFrame({ children, label }: { children: ReactNode; label: string }) {
  return (
    <div className="relative">
      <div
        className="overflow-hidden rounded-2xl border border-line bg-white shadow-card"
        aria-hidden="true"
      >
        {children}
      </div>
      <p className="mt-3 text-right text-[11px] font-medium text-muted">Pratinjau &middot; {label}</p>
    </div>
  );
}

export function SetoranVisual() {
  return (
    <PreviewFrame label="form setoran">
      <div className="flex items-center justify-between border-b border-line bg-[#FCFBF7] px-4 py-2.5">
        <p className="text-[11px] font-bold text-ink">Setoran baru</p>
        <span className="rounded-full bg-brand-soft px-2 py-0.5 text-[9px] font-bold text-brand">Ziyadah</span>
      </div>
      <div className="space-y-3 p-4">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sand text-[11px] font-bold text-ink">
            A
          </span>
          <div>
            <p className="text-[11px] font-bold text-ink">Ahmad Fauzi</p>
            <p className="text-[9px] text-muted">Kelas 7A &middot; Halaqah Ustadz Hafidz</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {['Ziyadah', 'Muroja\u2019ah', 'Tasmi\u2019'].map((type, index) => (
            <span
              key={type}
              className={`rounded-lg border px-2 py-1 text-[9px] font-semibold ${
                index === 0
                  ? 'border-brand bg-brand-soft text-brand'
                  : 'border-line bg-white text-muted'
              }`}
            >
              {type}
            </span>
          ))}
        </div>

        <div className="rounded-xl border border-line bg-[#FBFCFB] p-3">
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-bold text-ink">Al-Falaq</p>
            <p className="text-[9px] text-muted">Ayat 1&ndash;5</p>
          </div>
          <div className="mt-2 grid grid-cols-5 gap-1.5">
            {[1, 2, 3, 4, 5].map((ayah) => (
              <span
                key={ayah}
                className="flex h-7 items-center justify-center rounded-md border border-line bg-white text-[9px] font-semibold text-ink"
              >
                {ayah}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-brand-soft px-3 py-2">
          <p className="text-[9px] font-semibold text-brand">3 lancar &middot; 2 tidak lancar</p>
          <span className="rounded-lg bg-brand px-2.5 py-1 text-[9px] font-bold text-white">Simpan</span>
        </div>
      </div>
    </PreviewFrame>
  );
}

export function TapVisual() {
  const rows = [
    { ayah: 1, status: 'Lancar', ok: true },
    { ayah: 2, status: 'Lancar', ok: true },
    { ayah: 3, status: 'Tidak lancar', ok: false },
    { ayah: 4, status: 'Lancar', ok: true },
    { ayah: 5, status: 'Belum dinilai', ok: null },
  ];

  return (
    <PreviewFrame label="penilaian tap">
      <div className="flex items-center justify-between border-b border-line bg-[#FCFBF7] px-4 py-2.5">
        <p className="text-[11px] font-bold text-ink">Penilaian per ayat</p>
        <span className="text-[9px] font-semibold text-muted">Al-Falaq</span>
      </div>
      <div className="space-y-1.5 p-4">
        {rows.map((row) => (
          <div key={row.ayah} className="flex items-center gap-2.5 rounded-lg border border-line bg-white px-2.5 py-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-sand text-[8px] font-bold text-ink">
              {row.ayah}
            </span>
            <div className="h-1 flex-1 rounded-full bg-line" />
            <span
              className={`rounded-full px-2 py-0.5 text-[8px] font-bold ${
                row.ok === true
                  ? 'bg-brand-soft text-brand'
                  : row.ok === false
                    ? 'bg-[#FDF2E3] text-warning'
                    : 'bg-sand text-muted'
              }`}
            >
              {row.status}
            </span>
          </div>
        ))}
        <div className="mt-2 flex items-center justify-between rounded-lg bg-brand-deep px-3 py-2">
          <p className="text-[9px] font-semibold text-white/80">Akhir setoran: ayat 4</p>
          <p className="text-[9px] font-bold text-gold-soft">Lanjut ke ayat 5 &rarr;</p>
        </div>
      </div>
    </PreviewFrame>
  );
}

export function ProgressVisual() {
  return (
    <PreviewFrame label="rekap progres">
      <div className="flex items-center justify-between border-b border-line bg-[#FCFBF7] px-4 py-2.5">
        <p className="text-[11px] font-bold text-ink">Perjalanan hafalan</p>
        <span className="text-[9px] font-semibold text-muted">Ahmad Fauzi</span>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[8px] font-bold uppercase tracking-wider text-muted">Peta 30 juz</p>
            <p className="text-[16px] font-bold leading-tight text-ink">20 juz selesai</p>
            <p className="text-[9px] text-muted">dari target 30 juz</p>
          </div>
          <div className="relative h-14 w-14">
            <svg viewBox="0 0 80 80" className="h-full w-full -rotate-90">
              <circle cx="40" cy="40" r="34" fill="none" stroke="#ECFDF5" strokeWidth="7" />
              <circle
                cx="40"
                cy="40"
                r="34"
                fill="none"
                stroke="#047857"
                strokeWidth="7"
                strokeLinecap="round"
                strokeDasharray="142 214"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-[12px] font-bold text-ink">
              67%
            </span>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-10 gap-1">
          {Array.from({ length: 30 }).map((_, index) => (
            <span
              key={index}
              className={`aspect-square rounded-[3px] ${
                index < 20 ? 'bg-brand' : index < 22 ? 'bg-gold/60' : 'bg-sand'
              }`}
            />
          ))}
        </div>
        <div className="mt-2 flex items-center gap-3 text-[7.5px] font-medium text-muted">
          <span className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" /> Selesai
          </span>
          <span className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-gold/60" /> Berjalan
          </span>
          <span className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-sand" /> Berikutnya
          </span>
        </div>
      </div>
    </PreviewFrame>
  );
}

export function TahsinVisual() {
  const bars = [10, 20, 32, 18, 40, 26, 14, 36, 22, 30, 16, 26, 38, 20, 12, 28, 34, 18, 24, 14];

  return (
    <PreviewFrame label="setoran suara">
      <div className="flex items-center justify-between border-b border-line bg-[#FCFBF7] px-4 py-2.5">
        <p className="text-[11px] font-bold text-ink">Tahsin &middot; Setoran suara</p>
        <span className="rounded-full bg-gold-soft px-2 py-0.5 text-[9px] font-bold text-gold-ink">Baru</span>
      </div>
      <div className="space-y-3 p-4">
        <div className="flex items-center gap-3 rounded-xl border border-line bg-[#FBFCFB] p-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-white">
            <Play size={14} fill="currentColor" />
          </span>
          <div className="flex flex-1 items-center gap-[3px]">
            {bars.map((height, index) => (
              <span
                key={index}
                className={`w-[3px] rounded-full ${index < 7 ? 'bg-brand' : 'bg-line-strong/30'}`}
                style={{ height: `${height}px` }}
              />
            ))}
          </div>
          <span className="text-[9px] font-semibold text-muted">0:42</span>
        </div>

        <div className="rounded-xl border border-line bg-white p-3">
          <div className="flex items-center gap-1.5">
            <Mic size={11} className="text-brand" />
            <p className="text-[9px] font-bold text-ink">Koreksi ustadz</p>
          </div>
          <p className="mt-1 text-[9px] leading-relaxed text-muted">
            Bacaan juz 30 sudah lancar. Perhatikan panjang mad pada ayat 3 dan 4.
          </p>
          <div className="mt-2 flex gap-1.5">
            <span className="rounded-md bg-brand-soft px-2 py-1 text-[8px] font-bold text-brand">Kelancaran baik</span>
            <span className="rounded-md bg-gold-soft px-2 py-1 text-[8px] font-bold text-gold-ink">Perbaiki mad</span>
          </div>
        </div>
      </div>
    </PreviewFrame>
  );
}

export function CertificateVisual() {
  return (
    <PreviewFrame label="sertifikat & lencana">
      <div className="p-4">
        <div className="relative overflow-hidden rounded-xl border-2 border-gold/50 bg-[#FFFDF7] p-4">
          <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
            <defs>
              <pattern id="cert-khatam" width="48" height="48" patternUnits="userSpaceOnUse">
                <g fill="none" stroke="#A67C1A" strokeWidth="0.8">
                  <rect x="12" y="12" width="24" height="24" />
                  <rect x="12" y="12" width="24" height="24" transform="rotate(45 24 24)" />
                </g>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cert-khatam)" opacity="0.12" />
          </svg>

          <div className="relative flex items-start justify-between">
            <span className="h-8 w-8 overflow-hidden rounded-md">
              <Image src="/logo.png" alt="" width={32} height={32} className="h-8 w-8 object-cover" />
            </span>
            <FileText size={14} className="text-gold-ink" />
          </div>
          <p className="relative mt-3 text-[8px] font-bold uppercase tracking-[0.18em] text-gold-ink">
            Sertifikat Tasmi&rsquo;
          </p>
          <p className="relative mt-1 text-[18px] font-bold leading-tight text-ink">Juz 30</p>
          <p className="relative mt-1 text-[9px] text-muted">Ahmad Fauzi &middot; Pesantren Al-Hikmah</p>
          <div className="relative mt-3 flex items-end justify-between border-t border-gold/30 pt-2">
            <div>
              <p className="text-[7px] text-muted">Nomor</p>
              <p className="text-[8px] font-semibold text-ink">CERT/ALH/2026/J30</p>
            </div>
            <span className="rounded-full bg-brand-soft px-2 py-1 text-[7px] font-bold text-brand">PDF siap dibagikan</span>
          </div>
        </div>

        <div className="mt-2.5 flex items-center gap-2 rounded-xl border border-line bg-white px-3 py-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold-soft text-gold-ink">
            <Award size={13} />
          </span>
          <div className="flex-1">
            <p className="text-[9px] font-bold text-ink">Lencana Juz 30</p>
            <p className="text-[8px] text-muted">Diberikan setelah tasmi&rsquo; selesai</p>
          </div>
          <Check size={12} className="text-brand" />
        </div>
      </div>
    </PreviewFrame>
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
