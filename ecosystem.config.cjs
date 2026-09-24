// PM2 process config for self-hosted VPS.
// Build first: pnpm install && pnpm build
// Standalone output lives in .next/standalone. Copy static assets, then:
//   pm2 start ecosystem.config.cjs
module.exports = {
  apps: [
    {
      name: 'transline',
      script: '.next/standalone/server.js',
      cwd: __dirname,
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        HOSTNAME: '0.0.0.0',
      },
      max_memory_restart: '512M',
    },
  ],
}
