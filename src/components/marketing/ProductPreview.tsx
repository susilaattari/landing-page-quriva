import Image from 'next/image';
import {
  BarChart3,
  BookOpen,
  HeartHandshake,
  LayoutDashboard,
  Users,
} from 'lucide-react';

const bars = [42, 64, 50, 78, 58, 88, 70];
const days = ['S', 'S', 'R', 'K', 'J', 'S', 'A'];

export default function ProductPreview() {
  return (
    <div className="relative">
      <div
        className="overflow-hidden rounded-2xl border border-line bg-white shadow-preview"
        aria-hidden="true"
      >
        <div className="flex h-10 items-center gap-2 border-b border-line bg-[#FCFBF7] px-3">
          <span className="h-2 w-2 rounded-full bg-line-strong/30" />
          <span className="h-2 w-2 rounded-full bg-line-strong/30" />
          <span className="h-2 w-2 rounded-full bg-line-strong/30" />
          <span className="ml-3 rounded-md border border-line bg-white px-2 py-0.5 text-[9px] font-medium text-muted">
            app.quriva.tech/dashboard
          </span>
          <span className="ml-auto rounded-full bg-brand-soft px-2 py-0.5 text-[9px] font-bold text-brand">
            Data contoh
          </span>
        </div>

        <div className="grid h-[332px] grid-cols-[62px_1fr]">
          <div className="flex flex-col border-r border-line bg-[#FCFBF7] px-1.5 py-2.5">
            <div className="mx-auto mb-3 flex h-7 w-7 items-center justify-center overflow-hidden rounded-lg">
              <Image src="/logo.png" alt="" width={28} height={28} className="h-7 w-7 object-cover" />
            </div>
            {[
              { icon: LayoutDashboard, active: true },
              { icon: Users, active: false },
              { icon: BookOpen, active: false },
              { icon: BarChart3, active: false },
              { icon: HeartHandshake, active: false },
            ].map(({ icon: Icon, active }, index) => (
              <div
                key={index}
                className={`mb-1 flex items-center justify-center rounded-md py-1.5 ${
                  active ? 'bg-brand text-white' : 'text-muted'
                }`}
              >
                <Icon size={11} strokeWidth={1.8} />
              </div>
            ))}
            <div className="mt-auto flex items-center justify-center">
              <span className="h-5 w-5 rounded-full bg-gold-soft" />
            </div>
          </div>

          <div className="bg-[#FBFCFB] p-2.5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[8px] font-medium text-muted">Assalamualaikum,</p>
                <p className="text-[11px] font-bold leading-tight text-ink">Ustadz Hafidz</p>
              </div>
              <div className="rounded-md border border-line bg-white px-1.5 py-0.5 text-[7px] font-semibold text-muted">
                Senin, 12 Rabiul Awal
              </div>
            </div>

            <div className="mt-2 grid grid-cols-3 gap-1.5">
              {[
                { label: 'Santri aktif', value: '128' },
                { label: 'Setoran hari ini', value: '42' },
                { label: 'Halaqah', value: '8' },
              ].map((item) => (
                <div key={item.label} className="rounded-lg border border-line bg-white p-1.5">
                  <p className="text-[6.5px] font-medium text-muted">{item.label}</p>
                  <p className="text-[13px] font-bold leading-tight text-ink tabular-nums">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-2 rounded-lg border border-line bg-white p-2">
              <div className="flex items-center justify-between">
                <p className="text-[7.5px] font-bold text-ink">Setoran 7 hari terakhir</p>
                <p className="text-[6.5px] font-semibold text-brand">+12%</p>
              </div>
              <div className="mt-2 flex h-[58px] items-end gap-1.5">
                {bars.map((height, index) => (
                  <div key={index} className="flex flex-1 flex-col items-center gap-1">
                    <div
                      className={`w-full rounded-sm ${index === 5 ? 'bg-brand' : 'bg-brand-soft'}`}
                      style={{ height: `${height * 0.55}px` }}
                    />
                    <span className="text-[6px] font-medium text-muted">{days[index]}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-2 rounded-lg border border-line bg-white p-2">
              <div className="flex items-center justify-between">
                <p className="text-[7.5px] font-bold text-ink">Setoran terbaru</p>
                <p className="text-[6.5px] font-semibold text-brand">Lihat semua</p>
              </div>
              <div className="mt-1.5 space-y-1.5">
                {[
                  { name: 'Ahmad Fauzi', detail: 'Al-Falaq 1\u20135', status: 'Lancar', ok: true },
                  { name: 'Fatimah Az-Zahra', detail: 'An-Nas 1\u20134', status: 'Tidak lancar', ok: false },
                ].map((row) => (
                  <div key={row.name} className="flex items-center gap-1.5">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-sand text-[6px] font-bold text-ink">
                      {row.name.charAt(0)}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[7px] font-semibold text-ink">{row.name}</p>
                      <p className="text-[6px] text-muted">{row.detail}</p>
                    </div>
                    <span
                      className={`rounded-full px-1.5 py-0.5 text-[6px] font-bold ${
                        row.ok ? 'bg-brand-soft text-brand' : 'bg-[#FDF2E3] text-warning'
                      }`}
                    >
                      {row.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-5 left-3 hidden items-center gap-2 rounded-xl border border-line bg-white px-3 py-2 shadow-card sm:flex">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-soft text-brand">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <div>
          <p className="text-[10px] font-bold leading-tight text-ink">Setoran tersimpan</p>
          <p className="text-[9px] text-muted">Posisi berikutnya terisi otomatis</p>
        </div>
      </div>

      <p className="mt-5 text-right text-[11px] font-medium text-muted">
        Pratinjau antarmuka &middot; data contoh
      </p>
    </div>
  );
}
