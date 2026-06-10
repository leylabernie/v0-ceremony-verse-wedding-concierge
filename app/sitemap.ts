import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.ceremonyverse.com'

  // Pages sorted by priority — highest value pages first
  const pages: MetadataRoute.Sitemap = [
    // ─── HIGHEST PRIORITY: Commercial pages ───
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/services/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/how-it-works/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/free-guides/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },

    // ─── HIGH PRIORITY: Blog listing ───
    { url: `${baseUrl}/blog/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },

    // ─── MEDIUM-HIGH: Core blog posts (top traffic drivers) ───
    { url: `${baseUrl}/blog/indian-wedding-outfit-scams-nri-brides/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/indian-wedding-outfit-checklist-every-ceremony/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/how-much-does-bridal-lehenga-cost-india-2026/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/how-to-buy-sherwani-from-india-usa/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/how-to-coordinate-bridesmaid-lehengas-india-usa/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/shipping-indian-wedding-outfits-usa-customs-duties/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/when-to-order-indian-wedding-outfits-nri-bride/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/nri-bride-lehenga-sourcing-new-jersey-story/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },

    // ─── MEDIUM: Supporting blog posts ───
    { url: `${baseUrl}/blog/south-indian-christian-wedding-outfit-guide/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blog/nri-wedding-planning-timeline/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blog/how-to-buy-bridal-lehenga-from-india-usa/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blog/gujarati-wedding-outfit-guide/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blog/us-tariffs-indian-wedding-outfits-2026/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },

    // ─── LOWER: Utility pages ───
    { url: `${baseUrl}/faq/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
  ]

  return pages
}
