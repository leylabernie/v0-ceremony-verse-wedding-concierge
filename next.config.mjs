/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: false },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [360, 414, 640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  trailingSlash: true,
  async redirects() {
    return [
      { source: '/services', destination: '/indian-destination-wedding-planner-mexico/', permanent: true },
      { source: '/indian-wedding-coordination-mexico', destination: '/indian-destination-wedding-planner-mexico/', permanent: true },
      { source: '/consultation', destination: '/contact/', permanent: true },
      { source: '/sourcing-disclaimer', destination: '/contact', permanent: true },
      { source: '/menu-planner', destination: '/planning-tools/budget/', permanent: true },
      { source: '/resources', destination: '/free-guides/', permanent: true },
      { source: '/resources/:path*', destination: '/free-guides/', permanent: true },
      { source: '/link-to-us', destination: '/about/', permanent: true },
      { source: '/services/intercultural-indian-weddings', destination: '/indian-destination-wedding-planner-mexico/', permanent: true },
      { source: '/south-indian-christian-wedding-outfits-usa', destination: '/blog/south-indian-christian-wedding-outfit-guide/', permanent: true },
      { source: '/shop-from-india', destination: '/buy-indian-wedding-outfits-from-india/', permanent: true },
      { source: '/blog/nri-bridal-lehenga-sizing-guide', destination: '/blog/how-to-take-lehenga-measurements-at-home/', permanent: true },
      { source: '/blog/how-to-buy-bridal-lehenga-from-india-usa', destination: '/how-to-buy-bridal-lehenga-from-india-to-usa/', permanent: true },
      { source: '/blog/how-to-buy-bridal-lehenga-from-india-usa/', destination: '/how-to-buy-bridal-lehenga-from-india-to-usa/', permanent: true },
      { source: '/blog/how-to-buy-sherwani-from-india-usa', destination: '/buy-sherwani-from-india-usa/', permanent: true },
      { source: '/blog/how-to-buy-sherwani-from-india-usa/', destination: '/buy-sherwani-from-india-usa/', permanent: true },
      { source: '/indian-bridal-wear-california', destination: '/indian-wedding-shopping-california/', permanent: true },
      { source: '/indian-bridal-wear-texas', destination: '/indian-wedding-shopping-texas/', permanent: true },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'ceremonyverse.com' }],
        destination: 'https://www.ceremonyverse.com/:path*',
        permanent: true,
      },
      { source: '/indian-wedding-shopping-uk', destination: '/', permanent: true },
      { source: '/indian-wedding-shopping-australia', destination: '/', permanent: true },
      { source: '/indian-wedding-shopping-new-zealand', destination: '/', permanent: true },
      { source: '/indian-wedding-planner-philadelphia', destination: '/indian-destination-wedding-planner-mexico/', permanent: true },
      { source: '/home', destination: '/', permanent: true },
      { source: '/shopping-from-india', destination: '/buy-indian-wedding-outfits-from-india/', permanent: true },
      { source: '/forms/virtual-shopping', destination: '/buy-indian-wedding-outfits-from-india/', permanent: true },
      { source: '/journey', destination: '/how-it-works', permanent: true },
      { source: '/our-story', destination: '/about', permanent: true },
      { source: '/wedding-glossary', destination: '/faq', permanent: true },
      { source: '/refund-policy', destination: '/terms', permanent: true },
      { source: '/baraat-outfit-shopping', destination: '/baraat-outfits-usa', permanent: true },
      { source: '/indian-wedding-outfits-shipping-to-usa', destination: '/blog/shipping-indian-wedding-outfits-usa-customs-duties', permanent: true },
      { source: '/blog/gujarati-wedding-planning-guide', destination: '/blog/gujarati-wedding-outfit-guide', permanent: true },
      { source: '/blog/how-i-sourced-my-sons-mexico-wedding-outfits-from-surat', destination: '/blog/mexico-wedding-wardrobe-sourcing-from-india/', permanent: true },
      { source: '/blog/sherwani-vs-bandhgala-groom-guide', destination: '/blog', permanent: true },
      { source: '/blog/sherwani-vs-bandhgala-groom-guide/', destination: '/blog/', permanent: true },
      { source: '/blog/nri-guide-perfect-fits-custom-indian-wedding-attire', destination: '/blog/how-to-take-lehenga-measurements-at-home/', permanent: true },
      { source: '/blog/nri-guide-perfect-fits-custom-indian-wedding-attire/', destination: '/blog/how-to-take-lehenga-measurements-at-home/', permanent: true },
      { source: '/blog/indian-destination-wedding-mexico-complete-guide', destination: '/indian-destination-wedding-planner-mexico/', permanent: true },
      { source: '/blog/indian-destination-wedding-mexico-complete-guide/', destination: '/indian-destination-wedding-planner-mexico/', permanent: true },
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [{ key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' }],
      },
      { source: '/wedding-accessories-and-ceremony-items-from-india', headers: [{ key: 'X-Robots-Tag', value: 'noindex, follow' }] },
      { source: '/destinations/jamaica-indian-wedding', headers: [{ key: 'X-Robots-Tag', value: 'noindex, follow' }] },
      { source: '/blog/south-indian-christian-wedding-outfit-guide', headers: [{ key: 'X-Robots-Tag', value: 'noindex, follow' }] },
      { source: '/terms', headers: [{ key: 'X-Robots-Tag', value: 'noindex, follow' }] },
    ]
  },
}

export default nextConfig
