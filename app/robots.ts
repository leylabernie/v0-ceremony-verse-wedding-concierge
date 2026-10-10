import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo'

export default function robots(): MetadataRoute.Robots {
  // Keep existing crawler permissions. Search crawling and model training
  // are separate purposes; allowing a crawler does not guarantee inclusion.
  const excludedPaths = ['/_next/data/', '/api/', '/404/', '/internal-resources/']
  const aiCrawlers = [
    'GPTBot',            // OpenAI model-training crawler
    'ChatGPT-User',      // ChatGPT user-initiated browsing
    'OAI-SearchBot',     // OpenAI Search crawler
    'PerplexityBot',     // Perplexity.ai
    'Perplexity-User',   // Perplexity user-initiated browsing
    'Google-Extended',   // Google generative-AI use control
    'ClaudeBot',         // Anthropic Claude
    'anthropic-ai',      // Anthropic
    'Applebot-Extended', // Apple Intelligence
    'CCBot',             // Common Crawl (feeds many AI datasets)
  ].map((ua) => ({ userAgent: ua, allow: '/', disallow: excludedPaths }))

  return {
    rules: [
      ...aiCrawlers,
      {
        userAgent: '*',
        allow: [
          '/',
          // CRITICAL: Allow Next.js static assets (JS/CSS/fonts) and optimized images.
          // A blanket "Disallow: /_next/" previously blocked Googlebot from fetching
          // all CSS/JS required for rendering, which caused pages to appear as
          // unstyled/broken content in Google's rendering engine. That is the #1
          // reason an otherwise-good site gets stuck in "Crawled - currently not
          // indexed" or drops out of the index entirely.
          // See: https://developers.google.com/search/docs/crawling-indexing/rendering
          '/_next/static/',
          '/_next/image/',
        ],
        disallow: excludedPaths,
      },
    ],
    sitemap: [
      `${SITE_URL}/sitemap.xml`,
      `${SITE_URL}/sitemap-images.xml`,
    ],
    host: SITE_URL,
  }
}
