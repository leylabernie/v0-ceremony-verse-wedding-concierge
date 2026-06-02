import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.ceremonyverse.com'
  
  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${baseUrl}/journey`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${baseUrl}/free-guides`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    
    // --- ADDED THESE TWO MISSING PAGES ---
    { url: `${baseUrl}/consultation`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/sourcing-disclaimer`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
  ]

  const locationPages = [
    '/indian-wedding-shopping-new-jersey',
    '/indian-wedding-shopping-new-york',
    '/indian-wedding-shopping-california',
    '/indian-wedding-shopping-texas',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  const ceremonyPages = [
    '/mehndi-outfit-shopping',
    '/sangeet-outfit-shopping',
    '/baraat-outfit-shopping',
    '/gujarati-wedding-shopping',
    '/south-indian-christian-wedding-shopping',
    '/intercultural-indian-weddings',
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const blogPosts = [
    '/how-to-plan-mehndi-outfit',
    '/intercultural-wedding-outfit-guide',
  ].map(route => ({
    url: `${baseUrl}/blog${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...locationPages, ...ceremonyPages, ...blogPosts]
}
