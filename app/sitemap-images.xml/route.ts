/**
 * Comprehensive Image Sitemap for Google Images & Visual Rich Snippet Discovery.
 *
 * Maps real, verified image assets in /public/images/ across core destination,
 * resort, planning, wardrobe-sourcing, and editorial guide URLs so Google Images
 * and mobile rich results index visual previews across every topic cluster.
 */

const baseUrl = 'https://www.ceremonyverse.com'

interface ImageAsset {
  src: string
  title?: string
}

interface ImageEntry {
  url: string
  images: (string | ImageAsset)[]
}

const imageSitemapEntries: ImageEntry[] = [
  {
    url: `${baseUrl}/`,
    images: [
      { src: '/images/proof/family-destination-baarat.webp', title: 'Baraat celebration at a family destination wedding in Mexico' },
      { src: '/images/proof/family-wedding-mandap-couple.webp', title: 'Couple beneath a floral Mandap at a family destination wedding in Mexico' },
      { src: '/images/proof/prior-outfit-couple.webp', title: 'Coordinated Indian bridal lehenga and groom sherwani sourcing' },
      { src: '/images/proof/prior-outfit-wedding-party.webp', title: 'Coordinated Indian wedding party outfits sourced from India' },
      { src: '/images/proof/prior-outfit-groomsmen.webp', title: 'Coordinated groomsmen Indian wedding outfits' },
    ],
  },
  {
    url: `${baseUrl}/real-weddings/`,
    images: [
      { src: '/images/proof/family-destination-baarat.webp', title: 'Family Hindu destination wedding Baraat in Mexico' },
      { src: '/images/proof/family-wedding-mandap-couple.webp', title: 'Outdoor floral Mandap ceremony at a Mexico resort' },
    ],
  },
  {
    url: `${baseUrl}/nri-gujarati-wedding-planning-guide/`,
    images: [
      { src: '/images/proof/family-destination-baarat.webp', title: 'NRI Gujarati destination wedding planning guide' },
      { src: '/images/proof/family-wedding-mandap-couple.webp', title: 'Gujarati Hindu Mandap ceremony in Mexico' },
    ],
  },
  {
    url: `${baseUrl}/indian-destination-wedding-planner-mexico/`,
    images: [
      { src: '/images/services-hero.webp', title: 'Indian destination wedding planning across Mexico' },
      { src: '/images/proof/family-wedding-mandap-couple.webp', title: 'Multi-day Hindu destination wedding in Mexico' },
    ],
  },
  {
    url: `${baseUrl}/gujarati-destination-wedding-mexico/`,
    images: [
      { src: '/images/proof/family-destination-baarat.webp', title: 'Gujarati destination wedding in Mexico' },
      { src: '/images/sourcing/couple-mandap.webp', title: 'Hindu wedding Mandap ceremony in Mexico' },
    ],
  },
  {
    url: `${baseUrl}/destinations/`,
    images: [
      { src: '/images/sourcing/couple-mandap.webp', title: 'Indian destination weddings in Mexico, Jamaica, and Punta Cana' },
    ],
  },
  {
    url: `${baseUrl}/destinations/cancun-indian-wedding/`,
    images: [{ src: '/images/sourcing/couple-mandap.webp', title: 'Indian destination wedding in Cancun' }],
  },
  {
    url: `${baseUrl}/destinations/riviera-maya-indian-wedding/`,
    images: [{ src: '/images/proof/family-wedding-mandap-couple.webp', title: 'Indian destination wedding in Riviera Maya' }],
  },
  {
    url: `${baseUrl}/destinations/los-cabos-indian-wedding/`,
    images: [{ src: '/images/sourcing/couple-mandap.webp', title: 'Indian destination wedding in Los Cabos' }],
  },
  {
    url: `${baseUrl}/destinations/jamaica-indian-wedding/`,
    images: [{ src: '/images/proof/family-destination-baarat.webp', title: 'Indian destination wedding in Jamaica' }],
  },
  {
    url: `${baseUrl}/destinations/punta-cana-indian-wedding/`,
    images: [{ src: '/images/sourcing/couple-mandap.webp', title: 'Indian destination wedding in Punta Cana' }],
  },
  {
    url: `${baseUrl}/resorts/`,
    images: [{ src: '/images/proof/family-wedding-mandap-couple.webp', title: 'Resort wedding package profiles for Indian weddings' }],
  },
  {
    url: `${baseUrl}/resorts/moon-palace-cancun-indian-wedding/`,
    images: [{ src: '/images/sourcing/couple-mandap.webp', title: 'Indian wedding planning profile for Moon Palace Cancun' }],
  },
  {
    url: `${baseUrl}/resorts/hard-rock-riviera-maya-indian-wedding/`,
    images: [{ src: '/images/proof/family-wedding-mandap-couple.webp', title: 'Indian wedding planning profile for Hard Rock Riviera Maya' }],
  },
  {
    url: `${baseUrl}/resorts/lopesan-costa-bavaro-indian-wedding/`,
    images: [{ src: '/images/sourcing/couple-mandap.webp', title: 'Indian wedding planning profile for Lopesan Costa Bavaro' }],
  },
  {
    url: `${baseUrl}/resorts/hyatt-inclusive-collection-indian-wedding/`,
    images: [{ src: '/images/proof/family-destination-baarat.webp', title: 'Indian weddings at Hyatt Inclusive Collection resorts' }],
  },
  {
    url: `${baseUrl}/how-it-works/`,
    images: [{ src: '/images/live-video-shopping-india.webp', title: 'Live video review and documented wedding planning process' }],
  },
  {
    url: `${baseUrl}/buy-indian-wedding-outfits-from-india/`,
    images: [
      { src: '/images/pastel-indian-wedding-party-ai-inspiration.webp', title: 'Coordinated pastel Indian wedding party palette inspiration' },
      { src: '/images/sourcing/real-lehenga-shop.webp', title: 'Indian bridal boutique outfit sourcing' },
      { src: '/images/india-market-sourcing.webp', title: 'Direct wedding wardrobe sourcing from India' },
    ],
  },
  {
    url: `${baseUrl}/buy-bridal-lehenga-from-india-usa/`,
    images: [
      { src: '/images/hero-lehenga.webp', title: 'Custom Indian bridal lehenga sourced for USA brides' },
      { src: '/images/bridal-hero.webp', title: 'Traditional bridal lehenga craftsmanship' },
      { src: '/images/services-bridal-gold.webp', title: 'Gold embroidered bridal lehenga sourced from India' },
    ],
  },
  {
    url: `${baseUrl}/services/bridal-lehengas/`,
    images: [
      { src: '/images/hero-bridal.webp', title: 'Bridal lehenga sourcing concierge for USA and Canada' },
      { src: '/images/sourcing/lehenga-shop.webp', title: 'Bridal lehenga selection and customization review' },
    ],
  },
  {
    url: `${baseUrl}/lehenga-for-destination-wedding-mexico/`,
    images: [{ src: '/images/sourcing/bride-traditional.webp', title: 'Lightweight bridal lehenga styling for a beach destination wedding' }],
  },
  {
    url: `${baseUrl}/buy-sherwani-from-india-usa/`,
    images: [
      { src: '/images/groom-hero.webp', title: 'Custom groom sherwani sourced from India to USA' },
      { src: '/images/services-groom.webp', title: 'Groom sherwani and bandhgala tailoring coordination' },
    ],
  },
  {
    url: `${baseUrl}/groomsmen-outfit-coordination-new-jersey/`,
    images: [
      { src: '/images/sourcing/groomsmen-lavender.webp', title: 'Coordinated pastel groomsmen kurta and jacket outfits' },
      { src: '/images/services-groomsmen.webp', title: 'Coordinated groomsmen wedding attire from India' },
    ],
  },
  {
    url: `${baseUrl}/bridesmaid-and-family-outfits-from-india/`,
    images: [
      { src: '/images/services-bridesmaids.webp', title: 'Coordinated bridesmaid lehengas and sarees from India' },
      { src: '/images/sourcing/bridesmaid-green.webp', title: 'Coordinated green bridesmaid lehenga styling' },
    ],
  },
  {
    url: `${baseUrl}/kanchipuram-silk-sarees-usa/`,
    images: [
      { src: '/images/sourcing/kanchipuram-saree.webp', title: 'Authentic Kanchipuram silk saree sourced from India' },
      { src: '/images/kanchipuram-maroon-silk.jpg', title: 'Maroon pure zari Kanchipuram silk saree' },
      { src: '/images/kanchipuram-red-silk.jpg', title: 'Bridal red Kanchipuram silk saree' },
      { src: '/images/kanchipuram-pink-silk.jpg', title: 'Pink Kanchipuram silk wedding saree' },
      { src: '/images/kanchipuram-orange-silk.jpg', title: 'Orange temple-border Kanchipuram silk saree' },
      { src: '/images/kanchipuram-dark-purple.jpg', title: 'Dark purple Kanchipuram silk saree' },
      { src: '/images/kanchipuram-multicolour.jpg', title: 'Multicolour Kanchipuram silk saree' },
    ],
  },
  {
    url: `${baseUrl}/banarasi-silk-sarees-usa/`,
    images: [
      { src: '/images/kanchipuram-gold-tissue.jpg', title: 'Gold tissue zari silk wedding saree from India' },
      { src: '/images/kanchipuram-tissue-dual.jpg', title: 'Dual-tone tissue silk bridal saree' },
    ],
  },
  {
    url: `${baseUrl}/blog/how-to-choose-indian-wedding-jewelry-usa/`,
    images: [
      { src: '/images/services-jewelry-real.webp', title: 'Indian bridal Kundan and Polki jewelry sets' },
      { src: '/images/sourcing/bridal-jewelry.webp', title: 'Bridal necklace and earring set coordination' },
      { src: '/images/jewelry-set-1-green-kundan.webp', title: 'Green Kundan bridal necklace set' },
      { src: '/images/jewelry-set-2-green-polki.webp', title: 'Polki emerald bridal jewelry set' },
      { src: '/images/jewelry-set-3-green-necklace.webp', title: 'Layered Indian bridal necklace set' },
      { src: '/images/jewelry-set-4-gold-pearl.webp', title: 'Gold and pearl Indian wedding necklace set' },
    ],
  },
  {
    url: `${baseUrl}/guest-logistics-gift-checklist/`,
    images: [
      { src: '/images/services-welcomebags.webp', title: 'Destination wedding welcome bags and guest gifts' },
      { src: '/images/services-gifts.webp', title: 'Indian wedding favors and family return gifts' },
    ],
  },
  {
    url: `${baseUrl}/blog/mexico-wedding-wardrobe-sourcing-from-india/`,
    images: [
      { src: '/images/sourcing/couple-portrait.webp', title: 'Couple wearing custom India-sourced destination wedding outfits' },
      { src: '/images/sourcing/bride-traditional.webp', title: 'Bride in traditional Gujarati wedding attire' },
    ],
  },
]

function escapeXml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

export async function GET(): Promise<Response> {
  const xmlParts: string[] = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
  ]

  for (const entry of imageSitemapEntries) {
    xmlParts.push('  <url>')
    xmlParts.push(`    <loc>${escapeXml(entry.url)}</loc>`)
    for (const item of entry.images) {
      const src = typeof item === 'string' ? item : item.src
      const title = typeof item === 'string' ? undefined : item.title
      const imgUrl = src.startsWith('http') ? src : `${baseUrl}${src}`
      xmlParts.push('    <image:image>')
      xmlParts.push(`      <image:loc>${escapeXml(imgUrl)}</image:loc>`)
      if (title) {
        xmlParts.push(`      <image:title>${escapeXml(title)}</image:title>`)
      }
      xmlParts.push('    </image:image>')
    }
    xmlParts.push('  </url>')
  }

  xmlParts.push('</urlset>')

  return new Response(xmlParts.join('\n'), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}
