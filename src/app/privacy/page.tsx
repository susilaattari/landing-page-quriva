import { ArrowLeft } from 'lucide-react';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Kebijakan Privasi',
  description:
    'Kebijakan privasi Quriva: data yang dikumpulkan, tujuan penggunaan, penyimpanan, dan hak lembaga.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Beranda', path: '/' },
            { name: 'Kebijakan Privasi', path: '/privacy' },
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

      <h1 className="mt-6 text-3xl font-extrabold tracking-[-0.02em] text-ink sm:text-4xl">
        Kebijakan Privasi
      </h1>
      <p className="mt-3 text-sm text-muted">Terakhir diperbarui: 22 Oktober 2026</p>

      <div className="mt-8 space-y-7 text-sm leading-relaxed text-muted">
        <section>
          <h2 className="text-base font-bold text-ink">1. Data yang kami kumpulkan</h2>
          <p className="mt-2">
            Saat mendaftar, kami menerima data lembaga dan admin seperti nama lembaga, subdomain,
            nama admin, email, dan nomor WhatsApp. Data santri, guru, wali, setoran, dan penilaian
            diinput oleh lembaga dan menjadi milik lembaga tersebut.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-ink">2. Tujuan penggunaan</h2>
          <p className="mt-2">
            Data digunakan untuk menyediakan layanan, memverifikasi akun, memproses aktivasi
            langganan, memberikan dukungan, menjaga keamanan, dan meningkatkan kualitas layanan.
            Kami tidak menjual data pribadi.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-ink">3. Penyimpanan dan keamanan</h2>
          <p className="mt-2">
            Data disimpan selama akun lembaga aktif atau selama diperlukan untuk memenuhi kewajiban
            hukum. Setiap lembaga memiliki ruang data terpisah, dan akses dibatasi berdasarkan peran
            akun (admin, guru, wali).
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-ink">4. Analitik</h2>
          <p className="mt-2">
            Halaman marketing dapat menggunakan analitik agregat untuk memahami penggunaan halaman.
            Kami tidak mengirim nama, email, nomor telepon, atau data santri ke layanan analitik.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-ink">5. Berbagi data</h2>
          <p className="mt-2">
            Data dapat diproses oleh penyedia infrastruktur dan email yang kami gunakan untuk
            menjalankan layanan. Mereka hanya memproses data sesuai instruksi kami dan tidak
            menggunakannya untuk tujuan lain.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-ink">6. Hak Anda</h2>
          <p className="mt-2">
            Lembaga dapat meminta akses, koreksi, ekspor, atau penghapusan data dengan menghubungi
            tim Quriva. Permintaan yang berkaitan dengan data santri diproses melalui admin lembaga.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-ink">7. Perubahan kebijakan</h2>
          <p className="mt-2">
            Kebijakan ini dapat diperbarui. Perubahan penting akan diinformasikan melalui kontak
            resmi lembaga.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-ink">8. Kontak</h2>
          <p className="mt-2">
            Pertanyaan tentang privasi dapat dikirim ke{' '}
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
