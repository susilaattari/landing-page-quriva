#!/usr/bin/env bash
# Rilis update Quriva Landing di VPS.
# Pakai:  bash deploy/deploy.sh
set -euo pipefail

APP_DIR="${APP_DIR:-/root/home/quriva-landing}"
cd "$APP_DIR"

echo "==> Node: $(node -v)  npm: $(npm -v)"

if [ ! -f .env.production ]; then
  echo "ERROR: .env.production belum ada. Salin dari .env.example lalu isi nilainya." >&2
  exit 1
fi

echo "==> Tarik kode terbaru"
git pull --ff-only origin main

echo "==> Install dependency (memastikan tailwindcss & build tools terpasang)"
npm ci --include=dev

echo "==> Bersihkan cache build lama (.next)"
rm -rf .next

echo "==> Typecheck"
npm run typecheck

echo "==> Build produksi (NEXT_PUBLIC_* dibaca saat tahap ini)"
npm run build

echo "==> Muat ulang proses"
if pm2 describe quriva-landing >/dev/null 2>&1; then
  pm2 reload ecosystem.config.cjs --update-env
else
  pm2 start ecosystem.config.cjs
fi
pm2 save

echo "==> Cek lokal"
sleep 3
curl -fsS -o /dev/null -w "HTTP %{http_code}\n" http://127.0.0.1:3001/
pm2 status quriva-landing

