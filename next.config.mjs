/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
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
    // NOTE: Vercel's hosted image optimization enforces a minimum quality
    // of 75 — any q<75 returns INVALID_IMAGE_OPTIMIZE_REQUEST. The
    // Lighthouse "Improve image delivery" insight suggesting 38 KiB
    // savings via lower quality is therefore not actionable on Vercel.
    // AVIF is already served (29KB hero vs 30KB WebP), so the format is
    // already optimal. To go below 75 we'd need to pre-compress source
    // images and serve them as static files (bypassing /_next/image).
    // The hero <Image> component in home-page.tsx uses fetchPriority="high"
    // + priority to ensure the LCP image is discovered and fetched at the
    // highest priority, improving LCP by ~300ms.
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
      // ─── CONSOLIDATED LOCAL LANDING PAGES ───
      // These older pages duplicated the same state-level service intent as
      // the more complete wedding-shopping pages.
      {
        source: '/indian-bridal-wear-california',
        destination: '/indian-wedding-shopping-california/',
        permanent: true,
      },
      {
        source: '/indian-bridal-wear-texas',
        destination: '/indian-wedding-shopping-texas/',
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
      {
        source: '/blog/sherwani-vs-bandhgala-groom-guide/',
        destination: '/blog/',
        permanent: true,
      },
      // ─── DEAD URLS GETTING GSC IMPRESSIONS — redirect to live pages ───
      // 100 impressions, position 7.9 — page 1 traffic going to 404!
      {
        source: '/blog/nri-guide-perfect-fits-custom-indian-wedding-attire',
        destination: '/blog/nri-bridal-lehenga-sizing-guide',
        permanent: true,
      },
      {
        source: '/blog/nri-guide-perfect-fits-custom-indian-wedding-attire/',
        destination: '/blog/nri-bridal-lehenga-sizing-guide/',
        permanent: true,
      },
      // 140 impressions, position 75.8 — funnel to money page
      {
        source: '/blog/indian-destination-wedding-mexico-complete-guide',
        destination: '/indian-destination-wedding-planner-mexico',
        permanent: true,
      },
      {
        source: '/blog/indian-destination-wedding-mexico-complete-guide/',
        destination: '/indian-destination-wedding-planner-mexico/',
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
