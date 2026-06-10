import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Block Next.js static assets, API routes, and thin utility pages
        disallow: [
          '/_next/',
          '/api/',
          '/404/',
        ],
      },
    ],
    sitemap: 'https://www.ceremonyverse.com/sitemap.xml',
  }
}
