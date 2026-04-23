import { MetadataRoute } from "next";

const BASE_URL = "https://www.ceremonyverse.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    // Core pages
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/shop-from-india", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/buy-bridal-lehenga-from-india-usa", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/buy-sherwani-from-india-usa", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/bridesmaid-and-family-outfits-from-india", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/wedding-accessories-and-ceremony-items-from-india", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/buy-indian-wedding-outfits-from-india", priority: 0.9, changeFrequency: "monthly" as const },

    // Service pages
    { path: "/services/bridal-lehengas", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/services/intercultural-indian-weddings", priority: 0.8, changeFrequency: "monthly" as const },

    // Ceremony & outfit landing pages
    { path: "/mehndi-outfits-usa", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/sangeet-outfits-usa", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/baraat-outfits-usa", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/kanchipuram-silk-sarees-usa", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/gujarati-wedding-outfits-usa", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/punjabi-sikh-wedding-outfits-usa", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/south-indian-christian-wedding-outfits-usa", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/bengali-wedding-outfits-usa", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/pakistani-muslim-wedding-outfits-usa", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/indian-wedding-guest-outfits-usa", priority: 0.7, changeFrequency: "monthly" as const },

    // Location pages
    { path: "/indian-wedding-shopping-new-jersey", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/indian-wedding-shopping-new-york", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/indian-wedding-shopping-california", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/indian-wedding-shopping-texas", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/indian-wedding-shopping-canada", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/indian-wedding-shopping-uk", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/indian-wedding-shopping-australia", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/indian-wedding-shopping-new-zealand", priority: 0.7, changeFrequency: "monthly" as const },

    // Guide & content pages
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/how-it-works", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/pricing", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/nri-indian-wedding-shopping-guide", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/ceremonyverse-vs-shopping-direct-from-india", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/free-guides", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/real-weddings", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/press", priority: 0.6, changeFrequency: "monthly" as const },

    // Blog index
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },

    // Blog posts
    { path: "/blog/how-to-buy-bridal-lehenga-from-india-usa", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/blog/nri-wedding-planning-timeline", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/blog/gujarati-wedding-outfit-guide", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/blog/south-indian-christian-wedding-outfit-guide", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/blog/us-tariffs-indian-wedding-outfits-2026", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/blog/punjabi-sikh-wedding-outfit-guide", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/blog/how-much-does-bridal-lehenga-from-india-cost", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/blog/indian-wedding-shopping-without-going-to-india", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/blog/sabyasachi-alternatives-nri-brides", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/blog/how-many-outfits-for-indian-wedding", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/blog/what-non-indian-partner-should-wear-indian-wedding", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/blog/nri-groom-outfit-guide-sherwani-from-india", priority: 0.8, changeFrequency: "monthly" as const },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
