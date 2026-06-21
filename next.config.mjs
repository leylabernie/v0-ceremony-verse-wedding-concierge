/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  async redirects() {
    return [
      // ─── EXISTING REDIRECTS ───
      {
        source: '/consultation',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/sourcing-disclaimer',
        destination: '/contact',
        permanent: true,
      },
      // ─── DOMAIN NORMALIZATION: non-www → www ───
      {
        source: '/:path*',
        has: [
          { type: 'host', value: 'ceremonyverse.com' },
        ],
        destination: 'https://www.ceremonyverse.com/:path*',
        permanent: true,
      },
      // ─── OFF-BRAND GEOGRAPHIC PAGES ───
      {
        source: '/indian-wedding-shopping-uk',
        destination: '/',
        permanent: true,
      },
      {
        source: '/indian-wedding-planner-philadelphia',
        destination: '/services',
        permanent: true,
      },
      // ─── LEGACY PAGES ───
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/shopping-from-india',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/forms/virtual-shopping',
        destination: '/services',
        permanent: true,
      },
    ]
  },
  // ─── SECURITY HEADERS ───
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
    ]
  },
}

export default nextConfig
