/**
 * PM2 process file untuk Quriva Landing (marketing).
 * Port 3001 dipilih agar tidak bentrok dengan dashboard (3000) dan API (8099)
 * yang berjalan di VPS yang sama. Bind ke 127.0.0.1 supaya hanya Traefik yang
 * dapat mengakses aplikasi ini.
 *
 * Jalankan dari folder proyek:
 *   pm2 start ecosystem.config.cjs
 *   pm2 save
 */
module.exports = {
  apps: [
    {
      name: 'quriva-landing',
      cwd: __dirname,
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 3001 -H 127.0.0.1',
      env: {
        NODE_ENV: 'production',
      },
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      max_memory_restart: '450M',
      kill_timeout: 5000,
    },
  ],
};

