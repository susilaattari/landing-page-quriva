# Quriva Landing

Landing page marketing **Quriva** — platform monitoring hafalan Al-Qur'an untuk sekolah, rumah tahfidz, dan halaqah privat.

Aplikasi ini **terpisah** dari dashboard (`saas-tahfidz-dashboard`):

| Aplikasi | Domain | Repo |
| --- | --- | --- |
| Marketing | `quriva.tech`, `www.quriva.tech` | repo ini |
| Dashboard & portal | `app.quriva.tech`, `tenant.quriva.tech` | `saas-tahfidz-dashboard` |
| API | `api.quriva.tech` | `saas-tahfidz-api` |

Semua tautan ke aplikasi memakai URL absolut dari `NEXT_PUBLIC_APP_URL`. Tidak ada cookie atau sesi dashboard yang dibaca di sini.

## Stack

- Next.js 14 App Router, React 18, TypeScript
- Tailwind CSS + token desain dari PRD (`PRD/PRD_Landing_Page_Quriva.md`)
- Manrope (self-host via `@fontsource-variable/manrope`)
- `lucide-react`
- Tanpa dependency animasi, carousel, atau CMS

## Menjalankan

```bash
npm install
cp .env.example .env.local   # isi nilainya
npm run dev                  # http://localhost:3001
```

```bash
npm run typecheck
npm run build
npm run start
```

## Environment

| Variabel | Wajib | Contoh |
| --- | --- | --- |
| `NEXT_PUBLIC_APP_URL` | Ya | `https://app.quriva.tech` |
| `NEXT_PUBLIC_API_URL` | Ya | `https://api.quriva.tech/api` |
| `NEXT_PUBLIC_SITE_URL` | Ya | `https://quriva.tech` |
| `NEXT_PUBLIC_ROOT_DOMAIN` | Ya | `quriva.tech` |
| `NEXT_PUBLIC_COMPANY_NAME` | Ya | `PT Quriva Indonesia` |
| `NEXT_PUBLIC_SUPPORT_WHATSAPP` | Ya | `6289614072349` |
| `NEXT_PUBLIC_SUPPORT_EMAIL` | Ya | `support@quriva.com` |

Build akan gagal dengan pesan jelas jika `NEXT_PUBLIC_APP_URL` kosong. Jangan menambahkan fallback domain di kode.

## Harga

`GET ${NEXT_PUBLIC_API_URL}/packages` diambil server-side dengan `revalidate: 3600`. Katalog saat ini berisi tiga paket bulanan (Basic, Standard, Premium) dan satu paket tahunan; UI menampilkan toggle durasi yang dibentuk dari data, bukan hardcode.

Jika API gagal/timeout 2,5 detik, halaman memakai `FALLBACK_PACKAGES` dan menampilkan label bahwa harga perlu dikonfirmasi. Harga tambahan per santri **tidak** dihitung di landing; perhitungan ada di halaman pendaftaran dashboard.

## Konten

Semua copy ada di [`src/content/landing.ts`](src/content/landing.ts): headline, segmen, fitur, FAQ, CTA, footer. Ubah di satu tempat; jangan menyebar teks ke komponen.

Aturan yang dipertahankan:

- Tidak ada angka, testimoni, atau logo karangan.
- Penilaian tap hanya **Lancar / Tidak lancar / Belum dinilai**.
- Sertifikat adalah PDF, bukan barcode.
- Fitur yang dibatasi paket selalu ditandai, bukan disembunyikan.

## Visual

- `ProductPreview` dan `PhonePreview` adalah **pratinjau antarmuka dengan data contoh**, bukan screenshot produksi. Sebelum peluncuran, ganti dengan screenshot asli dari aplikasi (lihat PRD §9).
- OG image: `public/og/quriva-og.png` (1200×630), dibuat dari logo dan headline.
- Aset logo: `public/logo.png`, `icon.png`, `apple-icon.png`, `favicon.png`.

## Analytics

`src/lib/analytics.ts` mengirim event ke `window.plausible`, lalu `window.gtag`, lalu `dataLayer` — pilih salah satu saat deployment. Event yang sudah dipasang:

`cta_primary_click`, `demo_click`, `segment_select`, `pricing_view`, `pricing_period_change`, `plan_cta_click`, `faq_open`.

Tidak ada data pribadi yang dikirim. Untuk produksi, tambahkan script Plausible/GA4 di `layout.tsx` setelah keputusan tool.

## Deployment

1. Build dengan env produksi di atas.
2. Jalankan `next start -p 3001` (atau proses manager setara).
3. Arahkan apex dan `www` ke aplikasi ini; `www` 301 ke apex.
4. `app.quriva.tech` dan wildcard tenant tetap ke dashboard; `api` ke API.
5. Pastikan TLS mencakup apex, `www`, `app`, `api`, dan `*.quriva.tech`.

Redirect path lama sudah ada di [`next.config.mjs`](next.config.mjs): `/login`, `/register`, `/dashboard`, `/superadmin` → domain aplikasi (301).

### Checklist migrasi dashboard (wajib sebelum switch domain)

- [ ] Tambahkan `app` ke daftar subdomain terlarang di `middleware.ts` dan deteksi host `page.tsx`. Tanpa ini, `app.quriva.tech` dibaca sebagai tenant `app`.
- [ ] Blokir pendaftaran subdomain `app`, `www`, `api`, `admin`, `superadmin`.
- [ ] Tambahkan `noindex` untuk portal dan halaman auth di domain aplikasi.
- [ ] Batasi CORS API ke origin produksi (sekarang `origin: true`).
- [ ] Uji login, register, portal tenant, dan superadmin di `app.quriva.tech`.

## QA yang sudah dilakukan

- `tsc --noEmit` bersih.
- `next build` sukses; first load JS 99,7 kB; 8 route.
- Tidak ada client error di headless Edge.
- Tidak ada horizontal overflow di 1440, 390, dan 360 px.
- Metadata, canonical, OG, JSON-LD, sitemap, robots, redirect 301, halaman legal, dan 404 diuji via HTTP.

Belum dilakukan: Lighthouse formal, uji screen reader nyata, dan penggantian pratinjau dengan screenshot asli.
