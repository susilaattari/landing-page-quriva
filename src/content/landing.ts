export type SegmentId = 'sekolah' | 'kelompok' | 'personal';

export type Segment = {
  id: SegmentId;
  index: string;
  label: string;
  short: string;
  title: string;
  description: string;
  bullets: string[];
  note: string;
  ctaLabel: string;
};

export type FeatureId = 'setoran' | 'tap' | 'progress' | 'tahsin' | 'sertifikat';

export type Feature = {
  id: FeatureId;
  index: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
};

export const NAV_LINKS = [
  { href: '#contoh-aplikasi', label: 'Contoh Aplikasi' },
  { href: '#fitur', label: 'Fitur' },
  { href: '#cara-kerja', label: 'Cara Kerja' },
  { href: '#harga', label: 'Harga' },
  { href: '#faq', label: 'FAQ' },
] as const;

export const HERO = {
  eyebrow: 'Monitoring hafalan Al-Qur\u2019an',
  titleTop: 'Setiap ayat terpantau.',
  titleBottom: 'Setiap hafalan terdampingi.',
  description:
    'Quriva menghubungkan guru, koordinator, dan wali dalam satu alur monitoring hafalan \u2014 dari setoran harian dan penilaian per ayat sampai laporan yang bisa dibaca orang tua.',
  primaryCta: 'Mulai Kelola Hafalan',
  secondaryCta: 'Lihat Demo',
  proof: [
    'Web untuk koordinator dan guru',
    'Aplikasi Android untuk guru dan wali',
    'Data terpisah per lembaga',
  ],
} as const;

export const SEGMENTS: Segment[] = [
  {
    id: 'sekolah',
    index: '01',
    label: 'Sekolah & Pesantren',
    short: 'Banyak halaqah, banyak guru, banyak wali.',
    title: 'Satu dashboard untuk Koordinator,guru, dan wali.',
    description:
      'Kelola banyak halaqah, pantau setoran tiap guru, dan beri wali laporan yang bisa dibaca \u2014 tanpa menyusun ulang rekap dari buku catatan.',
    bullets: [
      'Rekap setoran per santri, kelas, dan halaqah',
      'Akses terpisah untuk koordinator, guru, dan wali',
      'E-sertifikat tasmi dan LMS pada paket yang menyertakannya',
    ],
    note: 'Cocok untuk pesantren, sekolah Islam, dan yayasan dengan banyak halaqah.',
    ctaLabel: 'Daftar Sekolah / Pesantren',
  },
  {
    id: 'kelompok',
    index: '02',
    label: 'Rumah Tahfidz',
    short: 'Mulai dari 10 santri, tumbuh tanpa ganti sistem.',
    title: 'Mulai kecil, tumbuh tanpa ganti sistem.',
    description:
      'Satu tempat untuk santri, guru, dan setoran harian. Tambah kapasitas saat komunitas bertambah, tanpa migrasi data.',
    bullets: [
      'Kapasitas sesuai paket, tambah kuota dari dashboard',
      'Absensi dan jadwal halaqah dalam alur yang sama',
      'Mode tanpa wali untuk komunitas mandiri',
    ],
    note: 'Cocok untuk rumah tahfidz, majelis, dan komunitas halaqah.',
    ctaLabel: 'Daftar Rumah Tahfidz',
  },
  {
    id: 'personal',
    index: '03',
    label: 'Halaqah Privat',
    short: 'Untuk ustad privat dan kelompok kecil.',
    title: 'Catatan rapi, tanpa beban administrasi.',
    description:
      'Catat setoran, tunjukkan progres, dan beri laporan sederhana kepada peserta atau orang tua \u2014 tanpa harus mengelola data wali.',
    bullets: [
      'Mode non-pesantren tanpa kewajiban data wali',
      'Riwayat setoran dan penilaian per ayat',
      'Tetap bisa menambah peserta saat kelompok membesar',
    ],
    note: 'Bukan akun individu: pendaftaran atas nama halaqah atau kelas.',
    ctaLabel: 'Daftar Halaqah Privat',
  },
];

export const PROBLEMS = [
  {
    before: 'Catatan setoran tersebar di buku dan WhatsApp',
    after: 'Satu riwayat per santri yang bisa ditelusuri',
  },
  {
    before: 'Rekap bulanan disusun ulang dari catatan',
    after: 'Rekap tersedia saat guru menyimpan setoran',
  },
  {
    before: 'Wali menunggu laporan dari guru',
    after: 'Wali melihat progres anaknya langsung dari aplikasi',
  },
] as const;

export const FEATURES: Feature[] = [
  {
    id: 'setoran',
    index: '01',
    eyebrow: 'Setoran',
    title: 'Setoran tercatat rapi, bukan di buku terpisah.',
    description:
      'Ziyadah, muroja\u2019ah, dan tasmi\u2019 tersimpan dengan rentang ayat, penilaian, dan riwayat yang bisa dibuka kembali.',
    bullets: ['Riwayat per santri', 'Rekap otomatis', 'Rentang ayat yang jelas'],
  },
  {
    id: 'tap',
    index: '02',
    eyebrow: 'Penilaian',
    title: 'Nilai per ayat dengan satu tap.',
    description:
      'Satu tap menandai lancar, dua tap menandai tidak lancar. Penanda akhir menentukan batas setoran, lalu posisi berikutnya terisi otomatis.',
    bullets: ['Lancar atau tidak lancar', 'Penanda akhir setoran', 'Posisi berikutnya otomatis'],
  },
  {
    id: 'progress',
    index: '03',
    eyebrow: 'Progres',
    title: 'Progres yang bisa dilihat, bukan ditanyakan.',
    description:
      'Rekap per santri dan halaqah, plus peta hafalan yang menunjukkan posisi setiap juz dalam perjalanan 30 juz.',
    bullets: ['Peta 30 juz', 'Rekap per kelas', 'Riwayat per ayat'],
  },
  {
    id: 'tahsin',
    index: '04',
    eyebrow: 'Tahsin',
    title: 'Koreksi bacaan dengan suara.',
    description:
      'Peserta mengirim rekaman, guru memberi koreksi kelancaran dan tajwid di tempat yang sama dengan catatan setoran.',
    bullets: ['Voice note peserta', 'Koreksi guru', 'Riwayat tahsin'],
  },
  {
    id: 'sertifikat',
    index: '05',
    eyebrow: 'Apresiasi',
    title: 'Apresiasi yang terlihat.',
    description:
      'E-sertifikat tasmi dalam PDF dan lencana prestasi untuk menjaga motivasi santri \u2014 bisa dibagikan oleh wali.',
    bullets: ['Sertifikat tasmi PDF', 'Lencana prestasi', 'Bagikan ke keluarga'],
  },
];

export const GUARDIAN = {
  eyebrow: 'Untuk wali',
  title: 'Wali melihat progres, bukan menunggu laporan.',
  description:
    'Aplikasi Android untuk wali menampilkan riwayat setoran, posisi hafalan, dan sertifikat anak dalam satu tempat.',
  bullets: [
    'Riwayat setoran dan penilaian per ayat',
    'Peta hafalan 30 juz',
    'Pengingat muroja\u2019ah pada paket yang menyertakannya',
    'Sertifikat tasmi dalam PDF',
  ],
  footnote: 'Aplikasi wali tersedia untuk Android.',
} as const;

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Daftar dan pilih paket',
    description: 'Isi data lembaga, pilih kapasitas, dan verifikasi email.',
  },
  {
    step: '02',
    title: 'Siapkan data',
    description: 'Tambahkan guru, kelas, dan santri; tentukan siapa yang mendampingi.',
  },
  {
    step: '03',
    title: 'Mulai memantau',
    description: 'Guru mencatat setoran, koordinator melihat rekap, wali mengikuti progres.',
  },
] as const;

export const TRUST_POINTS = [
  {
    title: 'Data terpisah per lembaga',
    description: 'Setiap lembaga memiliki ruang datanya sendiri. Akun hanya mengakses data lembaganya.',
  },
  {
    title: 'Akses dibatasi per peran',
    description: 'koordinator, guru, dan wali melihat bagian yang sesuai dengan tugasnya.',
  },
  {
    title: 'Wali hanya melihat anaknya',
    description: 'Akun wali tidak dapat membuka data santri lain di lembaga yang sama.',
  },
  {
    title: 'Kuota lewat persetujuan',
    description: 'Permintaan tambahan kuota diproses dan disetujui oleh admin quriva.',
  },
] as const;

export const PRICING_COPY = {
  eyebrow: 'Harga',
  title: 'Mulai dari halaqah kecil.',
  description:
    'Harga per lembaga, bukan per pengguna. Kapasitas dan fitur berbeda tiap paket; tambahan santri dihitung transparan saat pendaftaran.',
  note: 'Harga ditampilkan dari katalog aktif. Pembayaran melalui transfer bank dan dikonfirmasi oleh tim Quriva.',
  quotaNote: 'Butuh lebih dari kapasitas paket? Ajukan tambahan kuota dari dashboard setelah akun aktif.',
} as const;

export const DEMO_CALLOUT = {
  eyebrow: 'Demo',
  title: 'Ingin melihat alurnya lebih dulu?',
  description:
    'Kami bisa menunjukkan demo dengan data contoh lewat WhatsApp \u2014 tanpa perlu menyiapkan data lembaga.',
  cta: 'Minta demo',
} as const;

export const FAQS = [
  {
    question: 'Apa itu Quriva?',
    answer:
      'Quriva adalah platform untuk mencatat setoran hafalan, menilai bacaan per ayat, dan menyampaikan progres kepada wali. koordinator dan guru dapat memakai web; guru dan wali juga memakai aplikasi Android.',
  },
  {
    question: 'Apakah hanya untuk pesantren?',
    answer:
      'Tidak. Quriva mendukung pesantren dan sekolah dengan wali santri, serta komunitas, rumah tahfidz, dan halaqah privat yang berjalan tanpa data wali.',
  },
  {
    question: 'Berapa biayanya?',
    answer:
      'Tersedia beberapa paket bulanan dan paket 1 tahun. Harga, kapasitas, dan fitur tiap paket ditampilkan di bagian Harga. Tambahan santri dihitung saat pendaftaran, dan rinciannya terlihat sebelum Anda menyelesaikan formulir.',
  },
  {
    question: 'Apakah wali mendapat aplikasi?',
    answer:
      'Ya. Wali memakai aplikasi Android untuk melihat riwayat setoran, progres hafalan, sertifikat, dan materi yang dibagikan lembaga.',
  },
  {
    question: 'Apakah data antar lembaga tercampur?',
    answer:
      'Tidak. Setiap lembaga memiliki ruang data sendiri, dan akses dibatasi berdasarkan peran akun.',
  },
  {
    question: 'Bagaimana cara menambah kuota santri?',
    answer:
      'Setelah akun aktif, admin lembaga dapat mengajukan tambahan kuota dari dashboard. Pengajuan diproses dan disetujui oleh admin quriva.',
  },
  {
    question: 'Bisakah melihat demo sebelum mendaftar?',
    answer:
      'Bisa. Hubungi tim kami melalui WhatsApp untuk melihat alur dengan data contoh, atau langsung mendaftar dan tim akan mendampingi aktivasi.',
  },
  {
    question: 'Bagaimana pembayarannya?',
    answer:
      'Pembayaran dilakukan melalui transfer bank. Setelah transfer, konfirmasi ke tim Quriva agar akun diaktifkan.',
  },
  {
    question: 'Apakah ada sertifikat untuk santri?',
    answer:
      'Ya, e-sertifikat tasmi dalam bentuk PDF per juz, tersedia pada paket yang menyertakan fitur ini.',
  },
  {
    question: 'Apakah cocok untuk halaqah kecil atau privat?',
    answer:
      'Cocok. Pilih mode non-pesantren saat mendaftar; sistem tidak mewajibkan data wali, dan kapasitas dapat ditambah saat peserta bertambah.',
  },
] as const;

export const FINAL_CTA = {
  title: 'Mulai dari satu halaqah. Pantau setiap ayat.',
  description:
    'Daftarkan lembaga atau halaqah Anda, dan lihat bagaimana setoran berubah menjadi laporan yang bisa dibaca wali.',
  cta: 'Mulai Kelola Hafalan',
  note: 'Harga mengikuti katalog aktif \u00b7 Aktivasi setelah konfirmasi pembayaran',
} as const;

export const FOOTER = {
  tagline: 'Platform monitoring hafalan dan tahsin Al-Qur\u2019an.',
  columns: [
    {
      title: 'Produk',
      links: [
        { label: 'Contoh Aplikasi', href: '#contoh-aplikasi' },
        { label: 'Fitur', href: '#fitur' },
        { label: 'Cara Kerja', href: '#cara-kerja' },
        { label: 'Harga', href: '#harga' },
        { label: 'FAQ', href: '#faq' },
      ],
    },
    {
      title: 'Aplikasi',
      links: [
        { label: 'Masuk', href: '/login', external: true },
        { label: 'Daftar', href: '/register', external: true },
        { label: 'Demo', href: '#demo' },
      ],
    },
  ],
} as const;
