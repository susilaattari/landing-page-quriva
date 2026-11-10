const required = (value: string | undefined, name: string) => {
  if (!value) {
    throw new Error(
      `${name} belum diisi. Salin .env.example ke .env.local lalu isi nilainya sebelum build.`
    );
  }
  return value.replace(/\/$/, '');
};

// Gunakan akses statis agar Next.js dapat meng-inline nilai NEXT_PUBLIC_* di bundle client.
export const APP_URL = required(process.env.NEXT_PUBLIC_APP_URL, 'NEXT_PUBLIC_APP_URL');
export const API_URL = (process.env.NEXT_PUBLIC_API_URL || '').replace(/\/$/, '');
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://quriva.tech').replace(/\/$/, '');
export const ROOT_DOMAIN = process.env.NEXT_PUBLIC_ROOT_DOMAIN || 'quriva.tech';
export const COMPANY_NAME = process.env.NEXT_PUBLIC_COMPANY_NAME || 'PT Quriva Indonesia';
export const SUPPORT_EMAIL = process.env.NEXT_PUBLIC_SUPPORT_EMAIL || 'support@quriva.com';
export const SUPPORT_WHATSAPP = (process.env.NEXT_PUBLIC_SUPPORT_WHATSAPP || '').replace(/\D/g, '');

export const appLink = (path = '') => `${APP_URL}${path}`;
export const registerLink = (planCode?: string) =>
  planCode ? `${APP_URL}/register?plan=${encodeURIComponent(planCode)}` : `${APP_URL}/register`;
export const loginLink = () => `${APP_URL}/login`;

export function whatsappLink(message?: string) {
  if (!SUPPORT_WHATSAPP) return `mailto:${SUPPORT_EMAIL}`;
  const query = message ? `?text=${encodeURIComponent(message)}` : '';
  return `https://wa.me/${SUPPORT_WHATSAPP}${query}`;
}

export const DEMO_MESSAGE =
  'Assalamualaikum, saya ingin melihat demo Quriva dengan data contoh. Mohon informasi jadwalnya.';

export const CANONICAL = SITE_URL;
