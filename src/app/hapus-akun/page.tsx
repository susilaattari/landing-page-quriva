import { ArrowLeft, Check, Clock, Database, HelpCircle, Shield, ShieldAlert, Smartphone, Trash2 } from 'lucide-react';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';
import { COMPANY_NAME, SUPPORT_EMAIL, SUPPORT_WHATSAPP, whatsappLink } from '@/lib/config';
import AccountDeletionForm from '@/components/legal/AccountDeletionForm';

export const metadata = buildMetadata({
  title: 'Penghapusan Akun & Data Pengguna',
  description:
    'Panduan resmi dan formulir permohonan penghapusan akun serta data pribadi pengguna aplikasi Quriva.',
  path: '/hapus-akun',
});

export default function AccountDeletionPage() {
  return (
    <article className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Beranda', path: '/' },
            { name: 'Penghapusan Akun & Data', path: '/hapus-akun' },
          ]),
        ]}
      />

      <a
        href="/"
        className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-brand hover:text-brand-strong"
      >
        <ArrowLeft size={16} />
        Kembali ke beranda
      </a>

      {/* Header Halaman */}
      <div className="mt-6 border-b border-line pb-8">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-700">
          <ShieldAlert size={16} />
          <span>Kebijakan Privasi &amp; Kepatuhan</span>
        </div>
        <h1 className="mt-3 text-3xl font-extrabold tracking-[-0.02em] text-ink sm:text-4xl">
          Penghapusan Akun &amp; Data Pengguna
        </h1>
        <p className="mt-3 text-base leading-relaxed text-muted">
          Quriva berkomitmen melindungi privasi dan memberikan hak penuh kepada setiap pengguna untuk mengelola,
          mengekspor, atau menghapus akun dan data pribadi mereka kapan saja.
        </p>
        <p className="mt-2 text-xs text-muted">
          Pengembang: <strong>{COMPANY_NAME}</strong> &middot; Layanan: <strong>Aplikasi Quriva (Android &amp; Web)</strong>
        </p>
      </div>

      <div className="mt-10 grid gap-12 lg:grid-cols-12">
        {/* Kolom Kiri: Informasi Kebijakan & Langkah Hapus */}
        <div className="space-y-10 lg:col-span-7">
          {/* Bagian 1: Cara Menghapus Akun */}
          <section>
            <div className="flex items-center gap-2 text-brand">
              <Smartphone size={20} />
              <h2 className="text-lg font-bold text-ink">Cara Menghapus Akun</h2>
            </div>
            <p className="mt-2 text-sm text-muted leading-relaxed">
              Anda dapat mengajukan penghapusan akun melalui salah satu dari 2 metode berikut:
            </p>

            <div className="mt-4 space-y-4">
              <div className="rounded-2xl border border-line bg-white p-4 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wide text-brand">Metode 1: Dari Aplikasi Mobile Quriva</p>
                <ol className="mt-2.5 list-decimal pl-5 space-y-1.5 text-xs text-ink leading-relaxed">
                  <li>Buka aplikasi Quriva di ponsel Android Anda dan pastikan telah login.</li>
                  <li>Buka menu <strong>Profil</strong> atau <strong>Pengaturan Akun</strong>.</li>
                  <li>Pilih opsi <strong>Keamanan &amp; Privasi Data</strong>.</li>
                  <li>Klik tombol <strong>&ldquo;Hapus Akun Saya&rdquo;</strong> di bagian bawah halaman.</li>
                  <li>Konfirmasi kata sandi dan persetujuan penghapusan akun.</li>
                </ol>
              </div>

              <div className="rounded-2xl border border-line bg-white p-4 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-wide text-gold-ink">Metode 2: Lewat Formulir Web (Halaman Ini)</p>
                <p className="mt-1.5 text-xs text-muted leading-relaxed">
                  Jika Anda telah mencopot (uninstall) aplikasi atau tidak dapat mengakses perangkat, Anda dapat
                  mengisi formulir di samping untuk mengajukan permohonan langsung kepada tim dukungan kami.
                </p>
              </div>
            </div>
          </section>

          {/* Bagian 2: Data yang Dihapus Secara Permanen */}
          <section>
            <div className="flex items-center gap-2 text-rose-700">
              <Trash2 size={20} />
              <h2 className="text-lg font-bold text-ink">Data yang Dihapus Secara Permanen</h2>
            </div>
            <p className="mt-2 text-sm text-muted leading-relaxed">
              Setelah permintaan Anda diverifikasi, sistem Quriva akan menghapus secara permanen data berikut dari basis
              data aktif:
            </p>

            <ul className="mt-3 space-y-2 text-xs text-ink leading-relaxed">
              <li className="flex items-start gap-2">
                <Check size={14} className="text-emerald-600 shrink-0 mt-0.5" strokeWidth={2.5} />
                <span>
                  <strong>Kredensial &amp; Profil:</strong> Nama lengkap, alamat email, nomor telepon/WhatsApp, kata
                  sandi terenkripsi, dan foto profil.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={14} className="text-emerald-600 shrink-0 mt-0.5" strokeWidth={2.5} />
                <span>
                  <strong>Data Sesi &amp; Perangkat:</strong> Token autentikasi sesi, token notifikasi perangkat (FCM),
                  serta riwayat perangkat terdaftar.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={14} className="text-emerald-600 shrink-0 mt-0.5" strokeWidth={2.5} />
                <span>
                  <strong>Rekaman Audio &amp; Catatan Tahsin:</strong> File rekaman suara setoran peserta dan catatan
                  perbaikan bacaan dari guru.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={14} className="text-emerald-600 shrink-0 mt-0.5" strokeWidth={2.5} />
                <span>
                  <strong>Catatan Pribadi &amp; Riwayat Setoran:</strong> Data log mutabaah dan nilai yang terkait langsung
                  dengan akun personal Anda.
                </span>
              </li>
            </ul>
          </section>

          {/* Bagian 3: Data yang Dipertahankan (Retensi) */}
          <section>
            <div className="flex items-center gap-2 text-amber-700">
              <Database size={20} />
              <h2 className="text-lg font-bold text-ink">Data yang Dipertahankan (Retensi)</h2>
            </div>
            <p className="mt-2 text-sm text-muted leading-relaxed">
              Beberapa jenis data tertentu mungkin dipertahankan sementara oleh Quriva dengan dasar hukum berikut:
            </p>

            <div className="mt-3 space-y-3">
              <div className="rounded-xl border border-line bg-sand/50 p-3.5 text-xs text-muted leading-relaxed">
                <strong className="text-ink">1. Faktur &amp; Catatan Transaksi Keuangan:</strong>
                <p className="mt-1">
                  Bukti pembayaran paket langganan disimpan sesuai kewajiban hukum perpajakan dan regulasi pembukuan
                  akuntansi keuangan Republik Indonesia hingga masa retensi legal berakhir (minimal 5 tahun).
                </p>
              </div>

              <div className="rounded-xl border border-line bg-sand/50 p-3.5 text-xs text-muted leading-relaxed">
                <strong className="text-ink">2. Data Operasional Lembaga (Peran Admin):</strong>
                <p className="mt-1">
                  Jika akun yang meminta penghapusan adalah Admin Lembaga Utama dan lembaga masih aktif menggunakan
                  layanan, kepemilikan admin wajib dialihkan terlebih dahulu kepada staf/pengurus lain sebelum akun
                  dihapus agar kegiatan belajar mengajar santri tidak terganggu.
                </p>
              </div>
            </div>
          </section>

          {/* Bagian 4: Waktu Pemrosesan & Kontak */}
          <section className="rounded-2xl border border-line bg-sand/70 p-5">
            <div className="flex items-center gap-2 text-brand">
              <Clock size={18} />
              <h3 className="text-sm font-bold text-ink">Waktu Pemrosesan &amp; Bantuan</h3>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted">
              Seluruh permintaan penghapusan data akan diverifikasi kepemilikannya dalam waktu <strong>1–3 hari kerja</strong>{' '}
              dan diproses secara permanen maksimal <strong>7 hari kerja</strong>. Konfirmasi akhir akan dikirimkan ke
              email atau nomor WhatsApp terdaftar.
            </p>

            <div className="mt-4 pt-3 border-t border-line text-xs text-muted flex flex-wrap gap-4">
              <span>
                Email:{' '}
                <a href={`mailto:${SUPPORT_EMAIL}`} className="font-semibold text-brand hover:underline">
                  {SUPPORT_EMAIL}
                </a>
              </span>
              {SUPPORT_WHATSAPP && (
                <span>
                  WhatsApp:{' '}
                  <a
                    href={whatsappLink('Halo tim Quriva, saya ingin menanyakan status penghapusan akun saya.')}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-brand hover:underline"
                  >
                    +{SUPPORT_WHATSAPP}
                  </a>
                </span>
              )}
            </div>
          </section>
        </div>

        {/* Kolom Kanan: Formulir Permintaan */}
        <div className="lg:col-span-5">
          <div className="sticky top-28">
            <AccountDeletionForm />
          </div>
        </div>
      </div>
    </article>
  );
}

