import Image from 'next/image';
import { Bell, BookOpen, Home, Medal, User } from 'lucide-react';

export default function PhonePreview() {
  return (
    <div className="relative mx-auto w-[248px]">
      <div className="rounded-[38px] border-[7px] border-ink bg-ink p-1 shadow-preview">
        <div className="relative h-[472px] overflow-hidden rounded-[31px] bg-paper" aria-hidden="true">
          <div className="absolute left-1/2 top-1.5 z-20 h-4 w-20 -translate-x-1/2 rounded-full bg-ink" />

          <div className="relative overflow-hidden bg-brand-deep px-4 pb-14 pt-7 text-white">
            <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
              <defs>
                <pattern id="phone-khatam" width="56" height="56" patternUnits="userSpaceOnUse">
                  <g fill="none" stroke="#D4A53C" strokeWidth="1">
                    <rect x="14" y="14" width="28" height="28" />
                    <rect x="14" y="14" width="28" height="28" transform="rotate(45 28 28)" />
                    <circle cx="28" cy="28" r="6" />
                  </g>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#phone-khatam)" opacity="0.16" />
            </svg>

            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-7 w-7 overflow-hidden rounded-lg">
                  <Image src="/logo.png" alt="" width={28} height={28} className="h-7 w-7 object-cover" />
                </span>
                <span className="text-[13px] font-bold">Quriva</span>
              </div>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10">
                <Bell size={11} />
              </span>
            </div>

            <p className="relative mt-4 text-[9px] text-white/70">Assalamualaikum,</p>
            <p className="relative text-[15px] font-bold leading-tight">Bunda Aisyah</p>
            <p className="relative mt-0.5 text-[9px] text-white/65">Wali dari Ahmad Fauzi &middot; Kelas 7A</p>
          </div>

          <div className="relative -mt-10 px-3">
            <div className="rounded-2xl border border-line bg-white p-3 shadow-card">
              <div className="flex items-center gap-3">
                <div className="relative h-[62px] w-[62px] shrink-0">
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
                      strokeDasharray="145 214"
                    />
                  </svg>
                  <span className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-[14px] font-bold leading-none text-ink">68%</span>
                    <span className="text-[6px] font-medium text-muted">progres</span>
                  </span>
                </div>
                <div>
                  <p className="text-[7px] font-bold uppercase tracking-wider text-muted">Perjalanan hafalan</p>
                  <p className="text-[13px] font-bold leading-tight text-ink">Juz 30</p>
                  <p className="mt-0.5 text-[8px] text-muted">22 dari 37 surah</p>
                  <p className="mt-1 inline-flex rounded-full bg-brand-soft px-1.5 py-0.5 text-[7px] font-bold text-brand">
                    Terus bertambah
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-3">
              <div className="flex items-center justify-between">
                <p className="text-[9px] font-bold text-ink">Setoran terakhir</p>
                <p className="text-[7px] font-semibold text-brand">Riwayat</p>
              </div>
              <div className="mt-1.5 space-y-1.5">
                {[
                  { surah: 'Al-Falaq', range: 'ayat 1\u20135', time: 'Hari ini', status: 'Lancar' },
                  { surah: 'An-Nas', range: 'ayat 1\u20134', time: 'Kemarin', status: 'Diulang' },
                ].map((row) => (
                  <div key={row.surah} className="flex items-center gap-2 rounded-xl border border-line bg-white px-2 py-1.5">
                    <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-sand text-[8px] font-bold text-ink">
                      {row.surah.charAt(0)}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[8px] font-bold text-ink">{row.surah}</p>
                      <p className="text-[6.5px] text-muted">
                        {row.range} &middot; {row.time}
                      </p>
                    </div>
                    <span className="rounded-full bg-brand-soft px-1.5 py-0.5 text-[6px] font-bold text-brand">
                      {row.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-2.5 rounded-xl border border-dashed border-gold/50 bg-gold-soft/30 px-2 py-1.5">
              <p className="text-[7px] font-bold text-ink">Pengingat muroja&rsquo;ah</p>
              <p className="text-[6.5px] leading-snug text-muted">
                Al-Falaq sudah 3 hari tidak diulang. Yuk, dampingi di rumah.
              </p>
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 flex items-center justify-around border-t border-line bg-white px-3 py-2">
            {[Home, BookOpen, Medal, User].map((Icon, index) => (
              <span
                key={index}
                className={`flex flex-col items-center gap-0.5 ${
                  index === 0 ? 'text-brand' : 'text-muted'
                }`}
              >
                <Icon size={12} strokeWidth={1.8} />
                <span className="text-[5.5px] font-semibold">
                  {['Beranda', 'Hafalan', 'Lencana', 'Profil'][index]}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-4 text-center text-[11px] font-medium text-muted">
        Pratinjau aplikasi wali &middot; data contoh
      </p>
    </div>
  );
}
