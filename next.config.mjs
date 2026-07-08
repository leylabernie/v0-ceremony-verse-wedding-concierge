/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Enable Vercel's image optimization so next/image serves right-sized
    // WebP/AVIF per device instead of the original full-size file. With
    // unoptimized:true (previous setting), a 167KB hero WebP was served
    // identical to mobile and desktop — Vercel can now downscale to ~30KB
    // for mobile viewports.
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [360, 414, 640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
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
        source: '/indian-wedding-shopping-canada',
        destination: '/',
        permanent: true,
      },
      {
        source: '/indian-wedding-shopping-australia',
        destination: '/',
        permanent: true,
      },
      {
        source: '/indian-wedding-shopping-new-zealand',
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
      {
        source: '/journey',
        destination: '/how-it-works',
        permanent: true,
      },
      {
        source: '/our-story',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/wedding-glossary',
        destination: '/faq',
        permanent: true,
      },
      {
        source: '/refund-policy',
        destination: '/terms',
        permanent: true,
      },
      {
        source: '/baraat-outfit-shopping',
        destination: '/baraat-outfits-usa',
        permanent: true,
      },
      // ─── LEGACY BLOG POST SLUGS ───
      {
        source: '/indian-wedding-outfits-shipping-to-usa',
        destination: '/blog/shipping-indian-wedding-outfits-usa-customs-duties',
        permanent: true,
      },
      {
        source: '/blog/gujarati-wedding-planning-guide',
        destination: '/blog/gujarati-wedding-outfit-guide',
        permanent: true,
      },
      {
        source: '/blog/sherwani-vs-bandhgala-groom-guide',
        destination: '/blog',
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
