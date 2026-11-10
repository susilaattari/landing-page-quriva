import type { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Syarat Layanan',
  description:
    'Syarat layanan Quriva: akun lembaga, langganan, pembayaran, kepemilikan data, dan penggunaan layanan.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <a
        href="/"
        className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-brand hover:text-brand-strong"
      >
        <ArrowLeft size={16} />
        Kembali ke beranda
      </a>

      <h1 className="mt-6 text-3xl font-extrabold tracking-[-0.02em] text-ink sm:text-4xl">
        Syarat Layanan
      </h1>
      <p className="mt-3 text-sm text-muted">Terakhir diperbarui: 22 Oktober 2026</p>

      <div className="mt-8 space-y-7 text-sm leading-relaxed text-muted">
        <section>
          <h2 className="text-base font-bold text-ink">1. Layanan</h2>
          <p className="mt-2">
            Quriva adalah platform untuk mencatat setoran hafalan, menilai bacaan per ayat, dan
            menyampaikan progres kepada wali. Layanan disediakan untuk lembaga, komunitas, dan
            halaqah yang mendaftar.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-ink">2. Akun dan tanggung jawab</h2>
          <p className="mt-2">
            Admin lembaga bertanggung jawab atas kebenaran data yang diinput, pengelolaan akun guru
            dan wali, serta kerahasiaan kredensial. Satu akun tidak boleh digunakan untuk mengakses
            data lembaga lain.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-ink">3. Langganan dan pembayaran</h2>
          <p className="mt-2">
            Langganan tersedia dalam pilihan durasi 1, 6, dan 12 bulan. Pembayaran dilakukan melalui
            transfer bank dan dikonfirmasi oleh tim Quriva. Akun diaktifkan setelah pembayaran
            terverifikasi. Kapasitas tambahan dihitung sesuai ketentuan paket.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-ink">4. Kepemilikan data</h2>
          <p className="mt-2">
            Data lembaga, santri, guru, dan setoran tetap menjadi milik lembaga. Quriva memproses
            data tersebut untuk menyediakan layanan dan tidak menjualnya kepada pihak lain.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-ink">5. Penggunaan yang dilarang</h2>
          <p className="mt-2">
            Pengguna dilarang menyalahgunakan layanan, mencoba mengakses data lembaga lain, mengunggah
            konten yang melanggar hukum, atau mengganggu keamanan dan ketersediaan layanan.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-ink">6. Ketersediaan layanan</h2>
          <p className="mt-2">
            Kami berupaya menjaga layanan tetap tersedia, tetapi pemeliharaan atau gangguan teknis
            dapat terjadi. Kami tidak menjanjikan layanan bebas gangguan sepenuhnya.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-ink">7. Penghentian</h2>
          <p className="mt-2">
            Akun dapat dihentikan jika langganan berakhir atau terjadi pelanggaran syarat. Lembaga
            dapat meminta ekspor data sebelum penghentian permanen.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-ink">8. Perubahan dan kontak</h2>
          <p className="mt-2">
            Syarat ini dapat diperbarui. Pertanyaan dapat dikirim ke{' '}
            <a href="mailto:support@quriva.com" className="font-semibold text-brand hover:text-brand-strong">
              support@quriva.com
            </a>
            .
          </p>
        </section>
      </div>
    </article>
  );
}
