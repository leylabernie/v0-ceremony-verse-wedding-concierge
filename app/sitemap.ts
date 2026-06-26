import { MetadataRoute } from 'next'

const baseUrl = 'https://www.ceremonyverse.com'

interface SitemapEntry {
  url: string
  lastModified?: Date | string
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority?: number
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // Pages sorted by priority — highest value pages first
  const pages: SitemapEntry[] = [
    // ─── HIGHEST PRIORITY: Commercial pages ───
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/services/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pricing/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/how-it-works/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/free-guides/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // ─── HIGH PRIORITY: Blog listing ───
    {
      url: `${baseUrl}/blog/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // ─── HIGH PRIORITY: Commercial landing pages (keyword-targeted) ───
    {
      url: `${baseUrl}/buy-bridal-lehenga-from-india-usa/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/buy-sherwani-from-india-usa/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/buy-indian-wedding-outfits-from-india/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/shop-from-india/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/kanchipuram-silk-sarees-usa/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/avoid-indian-wedding-shopping-scams/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    // ─── MEDIUM-HIGH: Service sub-pages ───
    {
      url: `${baseUrl}/services/bridal-lehengas/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/intercultural-indian-weddings/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/bridesmaid-and-family-outfits-from-india/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/wedding-accessories-and-ceremony-items-from-india/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/indian-destination-wedding-planner-mexico/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // ─── MEDIUM: Ceremony-specific pages ───
    {
      url: `${baseUrl}/mehndi-outfits-usa/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/sangeet-outfits-usa/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/baraat-outfits-usa/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/south-indian-christian-wedding-outfits-usa/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/gujarati-wedding-outfits-usa/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/indian-wedding-guest-outfits-usa/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // ─── MEDIUM: State pages ───
    {
      url: `${baseUrl}/indian-wedding-shopping-texas/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/indian-wedding-shopping-california/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/indian-wedding-shopping-new-york/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/indian-wedding-shopping-new-jersey/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // ─── MEDIUM-HIGH: Core blog posts (top traffic drivers) ───
    {
      url: `${baseUrl}/blog/indian-wedding-outfit-scams-nri-brides/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/indian-wedding-outfit-checklist-every-ceremony/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/how-much-does-bridal-lehenga-cost-india-2026/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/how-to-buy-sherwani-from-india-usa/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/how-to-coordinate-bridesmaid-lehengas-india-usa/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/shipping-indian-wedding-outfits-usa-customs-duties/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/when-to-order-indian-wedding-outfits-nri-bride/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/nri-bride-lehenga-sourcing-new-jersey-story/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/nri-bridal-lehenga-sizing-guide/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // ─── MEDIUM: Supporting blog posts ───
    {
      url: `${baseUrl}/blog/south-indian-christian-wedding-outfit-guide/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/nri-wedding-planning-timeline/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/how-to-buy-bridal-lehenga-from-india-usa/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/gujarati-wedding-outfit-guide/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/us-tariffs-indian-wedding-outfits-2026/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },

    // ─── LOWER: Utility pages ───
    {
      url: `${baseUrl}/faq/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/partner-with-us/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
  ]

  // Convert to Next.js sitemap format.
  // NOTE: Next.js MetadataRoute.Sitemap does NOT natively support the Google
  // image-sitemap extension. Including `images` here causes the image objects
  // to be stringified as "[object Object]" in the XML output, which Google
  // Search Console rejects as "Invalid URL" errors. Image sitemap entries
  // are emitted separately via app/sitemap-images.xml/route.ts.
  return pages.map((p) => ({
    url: p.url,
    lastModified: p.lastModified as Date | undefined,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }))
}
