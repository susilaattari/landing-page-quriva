export function formatIDR(value: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(Number(value) || 0);
}

export function formatDuration(months: number) {
  if (months >= 12) return '1 tahun';
  return `${months} bulan`;
}

export function durationLabel(months: number) {
  if (months >= 12) return 'per lembaga / 1 tahun';
  return `per lembaga / ${months} bulan`;
}
