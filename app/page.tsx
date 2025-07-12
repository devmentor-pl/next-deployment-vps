// app/page.tsx
import os from 'os';

export const dynamic = 'force-dynamic'

export default function HomePage() {
  const info = {
    hostname: os.hostname(),
    uptime: os.uptime(),
    platform: os.platform(),
    arch: os.arch(),
    nodeVersion: process.version,
    currentTime: new Date().toISOString(),
    env: {
      NODE_ENV: process.env.NODE_ENV,
      CUSTOM_VAR: process.env.CUSTOM_VAR || 'Not set',
    },
  };
  // ...
  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h1>System info!</h1>
      <pre style={{ background: '#f0f0f0', padding: '1rem', borderRadius: '8px' }}>
        {JSON.stringify(info, null, 2)}
      </pre>
    </main>
  );
}