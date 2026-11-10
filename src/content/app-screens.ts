export type AppScreenCategory = 'web' | 'mobile';

export type AppScreen = {
  id: string;
  category: AppScreenCategory;
  device: 'desktop' | 'mobile';
  src: string;
  badge: string;
  role: string;
  title: string;
  summary: string;
  highlights: string[];
  alt: string;
};

/**
 * Seluruh gambar adalah tangkapan layar asli aplikasi (akun demo) di /public/app.
 * Dimensi: desktop 1440x1000, mobile 780x1688.
 */
export const APP_SCREENS: AppScreen[] = [
  {
    id: 'dashboard',
    category: 'web',
    device: 'desktop',
    src: '/app/dashboard.webp',
    badge: 'Web Admin',
    role: 'Admin & pimpinan lembaga',
    title: 'Dashboard yang merangkum seluruh halaqah.',
    summary:
      'Ringkasan santri, guru, halaqah, dan capaian hafalan dalam satu layar, sehingga pimpinan tidak perlu menunggu rekap manual.',
    highlights: ['Ringkasan santri, guru, dan halaqah', 'Capaian hafalan lembaga', 'Satu pintu untuk admin'],
    alt: 'Dashboard admin Quriva menampilkan ringkasan santri, guru, halaqah, dan capaian hafalan',
  },
  {
    id: 'input-setoran',
    category: 'web',
    device: 'desktop',
    src: '/app/setoran.webp',
    badge: 'Web Admin & Guru',
    role: 'Admin & guru',
    title: 'Catat setoran dalam satu formulir ringkas.',
    summary:
      'Pilih santri, jenis setoran, surah, rentang ayat, dan predikat. Catatan evaluasi tajwid ikut tersimpan bersama setoran.',
    highlights: ['Ziyadah, tasmi\u2019, dan muroja\u2019ah', 'Rentang ayat dan predikat', 'Catatan evaluasi tajwid'],
    alt: 'Formulir input setoran hafalan santri di web Quriva dengan pilihan surah, rentang ayat, dan predikat',
  },
  {
    id: 'rekap',
    category: 'web',
    device: 'desktop',
    src: '/app/rekap.webp',
    badge: 'Web Admin',
    role: 'Admin & koordinator tahfidz',
    title: 'Rekap setoran tanpa menyalin buku catatan.',
    summary:
      'Riwayat ziyadah dan tasmi\u2019 tersusun otomatis lengkap dengan rentang ayat dan penilaian, siap ditinjau kapan saja.',
    highlights: ['Riwayat per santri dan halaqah', 'Rentang ayat dan penilaian', 'Siap dievaluasi kapan saja'],
    alt: 'Rekap setoran hafalan Quriva dengan riwayat ziyadah, tasmi, rentang ayat, dan penilaian',
  },
  {
    id: 'tap',
    category: 'mobile',
    device: 'mobile',
    src: '/app/tap.webp',
    badge: 'Android \u00b7 Guru',
    role: 'Guru pembimbing',
    title: 'Nilai per ayat langsung di mushaf digital.',
    summary:
      'Satu tap menandai lancar, dua tap menandai tidak lancar. Penanda akhir menentukan batas setoran dan posisi berikutnya terisi otomatis.',
    highlights: ['1\u00d7 tap: lancar', '2\u00d7 tap: tidak lancar', 'Posisi berikutnya otomatis'],
    alt: 'Mode penilaian tap pada mushaf digital Quriva: satu tap lancar, dua tap tidak lancar',
  },
  {
    id: 'tahsin',
    category: 'mobile',
    device: 'mobile',
    src: '/app/tahsin.webp',
    badge: 'Android \u00b7 Tahsin',
    role: 'Peserta & guru',
    title: 'Koreksi bacaan lewat rekaman suara.',
    summary:
      'Peserta mengirim rekaman, guru memberi nilai tajwid dan kelancaran beserta catatan perbaikan yang tersimpan sebagai riwayat.',
    highlights: ['Voice note peserta', 'Nilai tajwid dan kelancaran', 'Catatan koreksi guru'],
    alt: 'Rekaman setoran suara dan koreksi ustadz di aplikasi Quriva',
  },
  {
    id: 'wali-home',
    category: 'mobile',
    device: 'mobile',
    src: '/app/wali-home.webp',
    badge: 'Android \u00b7 Wali',
    role: 'Orang tua / wali',
    title: 'Wali melihat progres anak setiap hari.',
    summary:
      'Progres hafalan, capaian juz, dan pengingat muroja\u2019ah ada di beranda aplikasi wali, tanpa harus menunggu laporan dari guru.',
    highlights: ['Progres hafalan anak', 'Capaian juz', 'Pengingat muroja\u2019ah'],
    alt: 'Aplikasi wali Quriva menampilkan progres hafalan, capaian juz, dan pengingat murojaah',
  },
  {
    id: 'riwayat',
    category: 'mobile',
    device: 'mobile',
    src: '/app/riwayat.webp',
    badge: 'Android \u00b7 Wali',
    role: 'Orang tua / wali',
    title: 'Riwayat setoran lengkap, bisa diunduh.',
    summary:
      'Wali dapat memfilter riwayat berdasarkan jenis setoran dan periode, membaca catatan mutabaah, lalu mengunduh rekap dalam format CSV.',
    highlights: ['Filter jenis dan periode', 'Catatan mutabaah per setoran', 'Unduh rekap CSV'],
    alt: 'Rekap dan riwayat hafalan anak di aplikasi wali Quriva dengan filter periode dan unduh rekap',
  },
  {
    id: 'pohon',
    category: 'mobile',
    device: 'mobile',
    src: '/app/pohon.webp',
    badge: 'Android \u00b7 Wali',
    role: 'Orang tua / wali',
    title: 'Peta 30 juz yang memotivasi.',
    summary:
      'Setiap juz punya status khatam, berjalan, atau belum dimulai, sehingga posisi hafalan anak terlihat sekilas.',
    highlights: ['Peta hafalan 30 juz', 'Status per juz', 'Detail setoran bisa dibuka'],
    alt: 'Pohon hafalan 30 juz di aplikasi wali Quriva',
  },
  {
    id: 'sertifikat',
    category: 'mobile',
    device: 'mobile',
    src: '/app/sertifikat.webp',
    badge: 'Android \u00b7 Wali',
    role: 'Orang tua / wali',
    title: 'E-sertifikat tasmi\u2019 per juz dalam PDF.',
    summary:
      'Apresiasi untuk santri yang menyelesaikan tasmi\u2019, lengkap dengan nomor sertifikat dan bisa dibuka atau dibagikan oleh wali.',
    highlights: ['PDF per juz', 'Nomor sertifikat', 'Bisa dibagikan'],
    alt: 'E-sertifikat tasmi Juz 30 di aplikasi wali Quriva',
  },
];

