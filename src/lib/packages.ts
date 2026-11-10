import { API_URL } from './config';

export type PackageFeatures = {
  hafalan?: boolean;
  tahsin_audio?: boolean;
  badges?: boolean;
  certificates?: boolean;
  lms?: boolean;
  chat?: boolean;
  spaced_repetition?: boolean;
  pricing_type?: string;
  [key: string]: unknown;
};

export type Package = {
  id: number;
  name: string;
  code: string;
  price: number;
  max_santri: number;
  duration_months: number;
  extra_price_per_user: number;
  features: PackageFeatures;
};

export type PackagesResult = {
  packages: Package[];
  fallback: boolean;
};

const FALLBACK: Package[] = [
  {
    id: 1,
    name: 'Paket Basic',
    code: 'basic',
    price: 299000,
    max_santri: 50,
    duration_months: 1,
    extra_price_per_user: 5000,
    features: {
      hafalan: true,
      tahsin_audio: false,
      badges: false,
      certificates: false,
      lms: false,
      chat: false,
      spaced_repetition: false,
    },
  },
  {
    id: 2,
    name: 'Paket Standard',
    code: 'standard',
    price: 599000,
    max_santri: 150,
    duration_months: 1,
    extra_price_per_user: 5000,
    features: {
      hafalan: true,
      tahsin_audio: true,
      badges: true,
      certificates: false,
      lms: false,
      chat: true,
      spaced_repetition: false,
    },
  },
  {
    id: 3,
    name: 'Paket Premium',
    code: 'premium',
    price: 999000,
    max_santri: 500,
    duration_months: 1,
    extra_price_per_user: 5000,
    features: {
      hafalan: true,
      tahsin_audio: true,
      badges: true,
      certificates: true,
      lms: true,
      chat: true,
      spaced_repetition: true,
    },
  },
  {
    id: 5,
    name: 'Paket 1 Tahun',
    code: 'thn-1',
    price: 600000,
    max_santri: 10,
    duration_months: 12,
    extra_price_per_user: 5000,
    features: {
      hafalan: true,
      tahsin_audio: true,
      badges: true,
      certificates: true,
      lms: true,
      chat: true,
      spaced_repetition: true,
    },
  },
];

function parseFeatures(value: unknown): PackageFeatures {
  if (!value) return {};
  if (typeof value === 'string') {
    try {
      return JSON.parse(value) as PackageFeatures;
    } catch {
      return {};
    }
  }
  return value as PackageFeatures;
}

function normalize(raw: Record<string, unknown>): Package {
  return {
    id: Number(raw.id) || 0,
    name: String(raw.name || 'Paket Quriva'),
    code: String(raw.code || ''),
    price: Number(raw.price) || 0,
    max_santri: Number(raw.max_santri) || 10,
    duration_months: Number(raw.duration_months) || 1,
    extra_price_per_user: Number(raw.extra_price_per_user) || 0,
    features: parseFeatures(raw.features),
  };
}

export async function getPackages(): Promise<PackagesResult> {
  if (!API_URL) {
    return { packages: FALLBACK, fallback: true };
  }

  try {
    const response = await fetch(`${API_URL}/packages`, {
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(2500),
      headers: { Accept: 'application/json' },
    });

    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const payload = (await response.json()) as { data?: unknown };
    const list = Array.isArray(payload?.data) ? payload.data : [];

    if (list.length === 0) throw new Error('Katalog paket kosong');

    return {
      packages: (list as Record<string, unknown>[])
        .map(normalize)
        .sort((a, b) => a.duration_months - b.duration_months),
      fallback: false,
    };
  } catch (error) {
    console.warn('[pricing] memakai fallback:', error instanceof Error ? error.message : error);
    return { packages: FALLBACK, fallback: true };
  }
}

export const FEATURE_ROWS: { key: keyof PackageFeatures; label: string }[] = [
  { key: 'hafalan', label: 'Setoran ziyadah, muroja\u2019ah, tasmi\u2019' },
  { key: 'tahsin_audio', label: 'Tahsin voice note & koreksi' },
  { key: 'badges', label: 'Lencana prestasi' },
  { key: 'chat', label: 'Chat halaqah' },
  { key: 'certificates', label: 'E-sertifikat tasmi (PDF)' },
  { key: 'lms', label: 'LMS video & sesi' },
  { key: 'spaced_repetition', label: 'Pengingat muroja\u2019ah' },
];
