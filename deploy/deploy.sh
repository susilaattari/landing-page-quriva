#!/usr/bin/env bash
# Rilis update Quriva Landing di VPS.
# Pakai:  bash deploy/deploy.sh
set -euo pipefail

APP_DIR="${APP_DIR:-/root/home/landing-page-quriva}"
cd "$APP_DIR"

echo "==> Node: $(node -v)  npm: $(npm -v)"

if [ ! -f .env.production ]; then
  echo "ERROR: .env.production belum ada. Salin dari .env.example lalu isi nilainya." >&2
  exit 1
fi

echo "==> Tarik kode terbaru"
git pull --ff-only origin main

echo "==> Install dependency (memastikan tailwindcss & build tools terpasang)"
npm install --include=dev

echo "==> Bersihkan cache build lama (.next)"
rm -rf .next

echo "==> Typecheck"
npm run typecheck

echo "==> Build produksi (NEXT_PUBLIC_* dibaca saat tahap ini)"
npm run build

echo "==> Muat ulang proses (restart fresh untuk memuat bundle CSS baru)"
if pm2 describe quriva-landing >/dev/null 2>&1; then
  pm2 restart quriva-landing --update-env
else
  pm2 start ecosystem.config.cjs
fi
pm2 save

echo "==> Cek lokal"
sleep 3
curl -fsS -o /dev/null -w "HTTP %{http_code} untuk halaman utama\n" http://127.0.0.1:3001/

echo "==> Cek ketersediaan aset Tailwind CSS"
CSS_PATH=$(curl -s http://127.0.0.1:3001/ | grep -o '/_next/static/css/[^"]*\.css' | head -n 1 || true)
if [ -n "$CSS_PATH" ]; then
  echo "Aset CSS terdeteksi: $CSS_PATH"
  curl -fsS -o /dev/null -w "HTTP %{http_code} untuk CSS bundle (Harus 200)\n" "http://127.0.0.1:3001$CSS_PATH"
else
  echo "PERINGATAN: Tidak ditemukan link CSS pada respon HTML!"
fi
pm2 status quriva-landing

