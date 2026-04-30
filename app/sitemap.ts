import { MetadataRoute } from "next";

const BASE_URL = "https://www.ceremonyverse.com";

interface SitemapEntry {
  path: string;
  priority: number;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  lastModified?: string; // ISO date string
  images?: string[]; // relative paths to images on the page
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: SitemapEntry[] = [
    // Core pages
    { path: "/", priority: 1.0, changeFrequency: "weekly", lastModified: "2026-04-23", images: ["/images/hero-lehenga.jpg", "/images/live-video-shopping-india.jpg"] },
    { path: "/shop-from-india", priority: 0.9, changeFrequency: "weekly", lastModified: "2026-04-15", images: ["/images/hero-lehenga.jpg"] },
    { path: "/buy-bridal-lehenga-from-india-usa", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-04-10", images: ["/images/services-bridal-gold.jpg"] },
    { path: "/buy-sherwani-from-india-usa", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-04-10", images: ["/images/services-groom.jpg"] },
    { path: "/bridesmaid-and-family-outfits-from-india", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-03-20", images: ["/images/services-bridesmaids.jpg"] },
    { path: "/wedding-accessories-and-ceremony-items-from-india", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-03-20", images: ["/images/services-jewelry-real.jpg"] },
    { path: "/buy-indian-wedding-outfits-from-india", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-04-10", images: ["/images/hero-lehenga.jpg"] },

    // Service pages
    { path: "/services", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-04-05" },
    { path: "/services/bridal-lehengas", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-04-10", images: ["/images/services-bridal-gold.jpg"] },
    { path: "/services/intercultural-indian-weddings", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-03-15" },

    // Contact page
    { path: "/contact", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-04-01" },

    // Ceremony & outfit landing pages
    { path: "/mehndi-outfits-usa", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-03-10" },
    { path: "/sangeet-outfits-usa", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-03-10" },
    { path: "/baraat-outfits-usa", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-03-10" },
    { path: "/kanchipuram-silk-sarees-usa", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-04-05", images: ["/images/kanchipuram-red-silk.jpg"] },
    { path: "/gujarati-wedding-outfits-usa", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-03-15" },
    { path: "/punjabi-sikh-wedding-outfits-usa", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-03-15" },
    { path: "/south-indian-christian-wedding-outfits-usa", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-03-15" },
    { path: "/bengali-wedding-outfits-usa", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-03-15" },
    { path: "/pakistani-muslim-wedding-outfits-usa", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-03-15" },
    { path: "/indian-wedding-guest-outfits-usa", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-03-10" },

    // Location pages
    { path: "/indian-wedding-shopping-new-jersey", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-03-01" },
    { path: "/indian-wedding-shopping-new-york", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-03-01" },
    { path: "/indian-wedding-shopping-california", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-03-01" },
    { path: "/indian-wedding-shopping-texas", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-03-01" },
    { path: "/indian-wedding-shopping-canada", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-03-01" },
    { path: "/indian-wedding-shopping-uk", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-03-01" },
    { path: "/indian-wedding-shopping-australia", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-03-01" },
    { path: "/indian-wedding-shopping-new-zealand", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-03-01" },

    // Guide & content pages
    { path: "/about", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-04-01" },
    { path: "/how-it-works", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-04-10" },
    { path: "/faq", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-05-01" },
    { path: "/pricing", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-04-15" },
    { path: "/nri-indian-wedding-shopping-guide", priority: 0.9, changeFrequency: "monthly", lastModified: "2026-04-20" },
    { path: "/ceremonyverse-vs-shopping-direct-from-india", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-04-05" },
    { path: "/free-guides", priority: 0.7, changeFrequency: "monthly", lastModified: "2026-04-10" },
    { path: "/real-weddings", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-03-20" },
    { path: "/press", priority: 0.6, changeFrequency: "monthly", lastModified: "2026-02-01" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly", lastModified: "2026-01-15" },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly", lastModified: "2026-01-15" },

    // Blog index
    { path: "/blog", priority: 0.8, changeFrequency: "weekly", lastModified: "2026-04-23" },

    // Blog posts (most recently published first)
    { path: "/blog/how-to-buy-bridal-lehenga-from-india-usa", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-04-20", images: ["/images/hero-lehenga.jpg"] },
    { path: "/blog/nri-wedding-planning-timeline", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-04-15" },
    { path: "/blog/gujarati-wedding-outfit-guide", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-04-10" },
    { path: "/blog/south-indian-christian-wedding-outfit-guide", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-04-05" },
    { path: "/blog/us-tariffs-indian-wedding-outfits-2026", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-04-18", images: ["/images/india-market-sourcing.jpg"] },
    { path: "/blog/punjabi-sikh-wedding-outfit-guide", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-03-25" },
    { path: "/blog/how-much-does-bridal-lehenga-from-india-cost", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-03-20" },
    { path: "/blog/indian-wedding-shopping-without-going-to-india", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-03-15" },
    { path: "/blog/sabyasachi-alternatives-nri-brides", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-03-10" },
    { path: "/blog/how-many-outfits-for-indian-wedding", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-03-05" },
    { path: "/blog/what-non-indian-partner-should-wear-indian-wedding", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-02-28" },
    { path: "/blog/nri-groom-outfit-guide-sherwani-from-india", priority: 0.8, changeFrequency: "monthly", lastModified: "2026-02-20" },
  ];

  return routes.map(({ path, priority, changeFrequency, lastModified, images }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: lastModified ? new Date(lastModified) : new Date("2026-04-01"),
    changeFrequency,
    priority,
    // Note: Next.js sitemap doesn't natively support image extensions,
    // but Google can discover images through on-page content and structured data.
    // Images are tracked via JSON-LD image fields instead.
  }));
}
