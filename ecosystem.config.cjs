// PM2 process config for self-hosted VPS.
// Build first: pnpm install && pnpm build
// Standalone output lives in .next/standalone. Copy static assets, then:
//   pm2 start ecosystem.config.cjs
module.exports = {
  apps: [
    {
      name: 'whileyamal',
      script: '.next/standalone/server.js',
      cwd: __dirname,
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        // 3000 = docker white-page, 3001 = docker black-page — заняты. Используем 3002.
        PORT: 3002,
        HOSTNAME: '127.0.0.1',
      },
      max_memory_restart: '512M',
    },
  ],
}
