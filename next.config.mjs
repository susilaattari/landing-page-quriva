/** @type {import('next').NextConfig} */
const APP_URL = process.env.NEXT_PUBLIC_APP_URL;

// Redirect path lama di apex ke aplikasi. Dipertahankan minimal 12 bulan.
const legacyRedirects = APP_URL
  ? [
      { source: '/login', destination: `${APP_URL}/login`, statusCode: 301 },
      { source: '/register', destination: `${APP_URL}/register`, statusCode: 301 },
      { source: '/dashboard', destination: `${APP_URL}/dashboard`, statusCode: 301 },
      { source: '/dashboard/:path*', destination: `${APP_URL}/dashboard/:path*`, statusCode: 301 },
      { source: '/superadmin', destination: `${APP_URL}/superadmin/dashboard`, statusCode: 301 },
      { source: '/superadmin/:path*', destination: `${APP_URL}/superadmin/:path*`, statusCode: 301 },
    ]
  : [];

const standardRedirects = [
  { source: '/delete-account', destination: '/hapus-akun', statusCode: 301 },
  { source: '/data-deletion', destination: '/hapus-akun', statusCode: 301 },
  { source: '/account-deletion', destination: '/hapus-akun', statusCode: 301 },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [...standardRedirects, ...legacyRedirects];
  },
};

export default nextConfig;
