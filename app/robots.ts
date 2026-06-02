import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Block Next.js static assets from being crawled (fonts, JS chunks, CSS, images)
      disallow: ['/_next/static/', '/_next/image/'],
    },
    sitemap: 'https://www.ceremonyverse.com/sitemap.xml',
  }
}
