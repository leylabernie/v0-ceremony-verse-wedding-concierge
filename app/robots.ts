import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // This tells Google to stop crawling your static font/media files
      disallow: '/_next/static/media/', 
    },
    sitemap: 'https://www.ceremonyverse.com/sitemap.xml',
  }
}
