import { MetadataRoute } from 'next'
import { regionalPages } from '@/lib/regional-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.ceremonyverse.com'

  // Pages sorted by priority — highest value pages first
  const pages: MetadataRoute.Sitemap = [
    // ─── PRIORITY 1.0: Home ───
    { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },

    // ─── PRIORITY 0.9: Main Service & High-Value Landing Pages ───
    { url: `${baseUrl}/services/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/services/bridal-lehengas/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/buy-bridal-lehenga-from-india-usa/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/buy-sherwani-from-india-usa/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/buy-indian-wedding-outfits-from-india/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/shop-from-india/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/kanchipuram-silk-sarees-usa/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },

    // ─── PRIORITY 0.8: Core Conversion & Informational Pages ───
    { url: `${baseUrl}/how-it-works/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/free-guides/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/blog/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/partner-with-us/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/bridesmaid-and-family-outfits-from-india/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/wedding-accessories-and-ceremony-items-from-india/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/intercultural-indian-weddings/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // ─── PRIORITY 0.8: Ceremony-Specific Landing Pages ───
    { url: `${baseUrl}/mehndi-outfits-usa/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/sangeet-outfits-usa/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/baraat-outfits-usa/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/south-indian-christian-wedding-outfits-usa/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/gujarati-wedding-outfits-usa/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/indian-wedding-guest-outfits-usa/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // ─── PRIORITY 0.7: Programmatic Regional Pages ───
    ...regionalPages.map((page) => ({
      url: `${baseUrl}/weddings/${page.slug}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),

    // ─── PRIORITY 0.7: Geographic & Special Topic Pages ───
    { url: `${baseUrl}/indian-wedding-shopping-texas/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/indian-wedding-shopping-california/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/indian-wedding-shopping-new-york/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/indian-wedding-shopping-new-jersey/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/indian-destination-wedding-planner-mexico/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/avoid-indian-wedding-shopping-scams/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },

    // ─── PRIORITY 0.7: Core Blog Posts ───
    { url: `${baseUrl}/blog/indian-wedding-outfit-scams-nri-brides/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/indian-wedding-outfit-checklist-every-ceremony/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/how-much-does-bridal-lehenga-cost-india-2026/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/how-to-buy-sherwani-from-india-usa/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/how-to-coordinate-bridesmaid-lehengas-india-usa/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/shipping-indian-wedding-outfits-usa-customs-duties/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/when-to-order-indian-wedding-outfits-nri-bride/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog/nri-bride-lehenga-sourcing-new-jersey-story/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },

    // ─── PRIORITY 0.6: Supporting Blog Posts ───
    { url: `${baseUrl}/blog/south-indian-christian-wedding-outfit-guide/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blog/nri-wedding-planning-timeline/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blog/how-to-buy-bridal-lehenga-from-india-usa/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blog/gujarati-wedding-outfit-guide/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blog/us-tariffs-indian-wedding-outfits-2026/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/blog/nri-bridal-lehenga-sizing-guide/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },

    // ─── PRIORITY 0.5: Utility Pages ───
    { url: `${baseUrl}/faq/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
  ]

  return pages
}
