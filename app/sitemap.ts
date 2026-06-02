import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.ceremonyverse.com'

  // ONLY pages that ACTUALLY exist as standalone pages on your live website
  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/how-it-works`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/free-guides`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
  ]

  return staticPages
}
