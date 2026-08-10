export const RATE_REVIEWED_ON = "August 10, 2026"

export type ResortDestination = "Mexico" | "Punta Cana"

export type PublishedPriceTier = {
  minGuests: number
  maxGuests: number
  price: number
}

export type PublishedPackageRate = {
  id: string
  name: string
  basePrice: number | null
  includedGuests?: number
  minGuests?: number
  maxGuests?: number
  perAdditionalGuest?: number
  priceTiers?: PublishedPriceTier[]
  includedVenue: string
  includedFoodBeverage: string
  rateNote: string
}

export type PublishedFoodBeverageOption = {
  id: string
  name: string
  basePrice: number
  includedGuests: number
  perAdditionalGuest: number
  description: string
}

export type ResortRateProgram = {
  id: string
  label: string
  sourceName: string
  sourceUrl: string
  packages: PublishedPackageRate[]
  foodBeverageOptions?: PublishedFoodBeverageOption[]
  conditions: string[]
}

export type ResortRateEntry = {
  id: string
  name: string
  destination: ResortDestination
  programId: string
}

const hyattSouthAsianPackage: PublishedPackageRate = {
  id: "dulha-dulhan",
  name: "Dulha & Dulhan South Asian Wedding Package",
  basePrice: 12295,
  includedGuests: 79,
  includedVenue:
    "Wedding ceremony setup with a decorated mandap, ceremony seating, beverage station, sound system, and shoe-check station for beach ceremonies.",
  includedFoodBeverage:
    "Five-event program with a welcome cocktail, Sangeet/Mehndi appetizers and buffet, ceremony beverages, and an Indian wedding-reception buffet, dessert, cake, and private bar.",
  rateNote:
    "Starting rate for up to 79 guests. Additional-guest pricing, upgrades, and some fees vary by resort and require a current written proposal.",
}

function writtenQuotePackage(note: string): PublishedPackageRate {
  return {
    id: "current-written-quote",
    name: "Current wedding proposal",
    basePrice: null,
    includedVenue: "Venue choices and any site, setup, extension, or exclusivity fees require a current written proposal.",
    includedFoodBeverage: "Menus, bar service, event duration, service charges, taxes, and per-person rates require a current written proposal.",
    rateNote: note,
  }
}

export const resortRatePrograms: ResortRateProgram[] = [
  {
    id: "hyatt-south-asian",
    label: "Hyatt Inclusive Collection — South Asian package",
    sourceName: "Hyatt Inclusive Collection: South Asian Wedding Package",
    sourceUrl: "https://www.hyattinclusivecollection.com/en/special-offers/south-asian-weddings/",
    packages: [hyattSouthAsianPackage],
    conditions: [
      "Official page lists a starting price of $12,295 for up to 79 guests and says taxes and gratuities are included for Romance packages.",
      "The package requires at least 25 rooms for three nights, or 75 cumulative room nights.",
      "Additional guests and customizations vary by resort; do not treat the starting price as a complete proposal.",
      "Offer says book by December 20, 2027; wedding date and venue remain subject to resort confirmation.",
    ],
  },
  {
    id: "moon-palace-cancun",
    label: "Moon Palace Cancun — public starting packages",
    sourceName: "Moon Palace Cancun: Weddings",
    sourceUrl: "https://www.moonpalacecancun.com/weddings",
    packages: [
      {
        id: "complimentary",
        name: "Complimentary Package",
        basePrice: 0,
        includedVenue: "Outdoor ceremony venue with chairs, pergola, wooden table, and basic audio.",
        includedFoodBeverage: "Sparkling wine and a semi-private dinner reservation are listed.",
        rateNote: "Advertised at $0; eligibility and group/room requirements must be confirmed in writing.",
      },
      {
        id: "petite",
        name: "Petite Package",
        basePrice: 2150,
        includedGuests: 10,
        maxGuests: 10,
        includedVenue: "Wedding ceremony package; exact venue availability is confirmed by the resort.",
        includedFoodBeverage: "Wedding cake is listed; meal and beverage upgrades require a current proposal.",
        rateNote: "Public starting price for up to 10 guests; guest overage is not published.",
      },
      {
        id: "classic",
        name: "Classic Package",
        basePrice: 3650,
        includedGuests: 30,
        maxGuests: 30,
        includedVenue: "Ceremony setup with chairs and a sweetheart table.",
        includedFoodBeverage: "Open bar and reception tables with linens are listed; confirm catering details in writing.",
        rateNote: "Public starting price for up to 30 guests; guest overage is not published.",
      },
      {
        id: "prestige",
        name: "Prestige Package",
        basePrice: 12000,
        includedGuests: 50,
        maxGuests: 50,
        includedVenue: "Ceremony decor plus professional lighting/audio, DJ, emcee, and dance floor.",
        includedFoodBeverage: "Cocktail-style reception with open bar, hors d'oeuvres, and wedding cake.",
        rateNote: "Public starting price for up to 50 guests; guest overage is not published.",
      },
      {
        id: "luxe",
        name: "Luxe Package",
        basePrice: 15000,
        includedGuests: 75,
        maxGuests: 75,
        includedVenue: "Ceremony with a canopy and contemporary golden structure plus a reception setup.",
        includedFoodBeverage: "Reception catering and beverage details must be confirmed in a current written proposal.",
        rateNote: "Public starting price for up to 75 guests; guest overage is not published.",
      },
    ],
    conditions: [
      "Moon Palace labels these as starting prices, not guaranteed totals.",
      "Published pages do not list guest-overage rates or itemized venue and catering upgrade prices.",
      "Group benefits and wedding credits depend on room-night and contract terms; no credit is subtracted in this calculator.",
    ],
  },
  {
    id: "lopesan-costa-bavaro",
    label: "Lopesan Costa Bávaro — public packages",
    sourceName: "Lopesan Costa Bávaro: Weddings and Events",
    sourceUrl: "https://www.lopesancostabavaro.com/en/weddings-events/",
    packages: [
      {
        id: "secretly-i-do",
        name: "Secretly I Do",
        basePrice: 999,
        includedGuests: 2,
        maxGuests: 2,
        includedVenue: "Beach or garden symbolic ceremony venue.",
        includedFoodBeverage: "Sparkling-wine toast, one-tier cake, and a private beach dinner for the couple.",
        rateNote: "Published for the wedding couple only and requires a minimum seven-night couple stay.",
      },
      {
        id: "endless-knot",
        name: "Endless Knot",
        basePrice: 1899,
        includedGuests: 10,
        maxGuests: 30,
        perAdditionalGuest: 30,
        includedVenue: "Beach or garden ceremony venue with arch, chairs, sound, and ceremony setup.",
        includedFoodBeverage: "Sparkling-wine toast, one-tier cake, and a semi-private dinner for up to 10 guests.",
        rateNote: "$1,899 for up to 10 guests, then $30 per additional adult guest; designed for no more than 30 guests.",
      },
      {
        id: "eternal-vow",
        name: "Eternal Vow",
        basePrice: 3999,
        includedGuests: 30,
        maxGuests: 50,
        perAdditionalGuest: 30,
        includedVenue: "Beach, rooftop terrace, or garden ceremony venue with ceremony setup.",
        includedFoodBeverage: "Semi-private rehearsal dinner, cocktail hour with hors d'oeuvres, cake, and semi-private dinner for up to 30 guests.",
        rateNote: "$3,999 for up to 30 guests, then $30 per additional adult guest; designed for no more than 50 guests.",
      },
      {
        id: "everlasting-love",
        name: "Everlasting Love",
        basePrice: 8599,
        includedGuests: 40,
        maxGuests: 70,
        perAdditionalGuest: 60,
        includedVenue: "Beach, rooftop terrace, or garden ceremony plus a three-hour private beachfront-terrace reception.",
        includedFoodBeverage: "Cocktail hour, cake, set-menu private dinner for up to 40 guests, and international open bar.",
        rateNote: "$8,599 for up to 40 guests, then $60 per additional adult guest; designed for no more than 70 guests.",
      },
      {
        id: "unique-glam",
        name: "Unique Glam",
        basePrice: 12999,
        minGuests: 50,
        maxGuests: 250,
        perAdditionalGuest: 85,
        priceTiers: [
          { minGuests: 50, maxGuests: 70, price: 12999 },
          { minGuests: 71, maxGuests: 99, price: 15799 },
        ],
        includedVenue: "Beach, rooftop terrace, or garden ceremony plus a four-hour private beachfront-terrace reception.",
        includedFoodBeverage: "Two-hour welcome beach cocktail, premium wedding-day cocktail, private dinner for the selected tier, cake, and premium open bar.",
        rateNote: "$12,999 for 50–70 guests; $15,799 for 71–99; then $85 per additional adult guest, up to the published 250-person design limit.",
      },
    ],
    conditions: [
      "Published extra-guest prices are adult rates; the resort says children are charged at 50%. This calculator conservatively treats every entered guest as an adult.",
      "Legal or religious ceremony fees and any item not listed in the selected package are not included.",
      "Prices and inclusions can change without notice and must be confirmed in a current resort proposal.",
    ],
  },
  {
    id: "mystique-holbox",
    label: "Mystique Holbox — published event add-ons",
    sourceName: "Mystique Holbox: Weddings",
    sourceUrl: "https://www.royaltonresorts.com/resorts/holbox/special-occasions/weddings",
    packages: [
      {
        id: "current-wedding-quote",
        name: "Wedding package — enter current resort quote below",
        basePrice: null,
        includedVenue: "No complete wedding-package or standalone venue price is published on the current page.",
        includedFoodBeverage: "Published cocktail-hour and private-dinner add-ons can be selected separately.",
        rateNote: "This source publishes event add-ons, not a complete wedding price. A current written resort quote is required.",
      },
    ],
    foodBeverageOptions: [
      {
        id: "cocktail-hour",
        name: "Cocktail hour",
        basePrice: 699,
        includedGuests: 20,
        perAdditionalGuest: 39,
        description: "One-hour standard open bar, three appetizers, cocktail tables, and one-hour sound system.",
      },
      {
        id: "private-dinner",
        name: "Private plated dinner",
        basePrice: 2800,
        includedGuests: 20,
        perAdditionalGuest: 140,
        description: "Three-hour private reception with set menu, standard open bar, tables, and linens.",
      },
      {
        id: "cocktail-and-dinner",
        name: "Cocktail hour + private plated dinner",
        basePrice: 3499,
        includedGuests: 20,
        perAdditionalGuest: 179,
        description: "The exact sum of the two separately published add-ons; it is not a separate resort package.",
      },
    ],
    conditions: [
      "The published add-on prices include taxes and service.",
      "The $3,499 combined selection and $179 additional-guest amount are arithmetic sums of the two official add-ons, not a separately named resort offer.",
      "A complete wedding package, ceremony venue, and any other events still require a current written quote.",
    ],
  },
  {
    id: "hard-rock-mexico",
    label: "Hard Rock all-inclusive Mexico — current quote required",
    sourceName: "Hard Rock Hotels: Riviera Maya Weddings",
    sourceUrl: "https://www.hardrockhotels.com/riviera-maya/weddings.aspx",
    packages: [
      writtenQuotePackage(
        "Hard Rock currently describes wedding packages, South Asian celebrations, venues, and menus, but does not publish a dependable current wedding total on this page. Enter the resort's written proposal.",
      ),
    ],
    conditions: [
      "The official wedding page describes packages and venues without a current public wedding-package price that can be calculated responsibly.",
      "Confirm every event, guest count, venue, menu, bar, production, outside-vendor fee, tax, and service charge in the current proposal.",
    ],
  },
  {
    id: "hard-rock-punta-cana",
    label: "Hard Rock Punta Cana — current quote required",
    sourceName: "Hard Rock Hotel & Casino Punta Cana: Weddings",
    sourceUrl: "https://www.hardrockhotels.com/punta-cana/weddings.aspx",
    packages: [
      writtenQuotePackage(
        "Hard Rock currently describes South Asian weddings, packages, venues, and menus, but does not publish a dependable current wedding total on this page. Enter the resort's written proposal.",
      ),
    ],
    conditions: [
      "The official wedding page describes packages and venues without a current public wedding-package price that can be calculated responsibly.",
      "Confirm every event, guest count, venue, menu, bar, production, outside-vendor fee, tax, and service charge in the current proposal.",
    ],
  },
  {
    id: "generations-riviera-maya",
    label: "Generations Riviera Maya — current quote required",
    sourceName: "Karisma Hotels & Resorts",
    sourceUrl: "https://www.karismahotels.com/",
    packages: [
      writtenQuotePackage(
        "The current public resort pages do not provide a dependable wedding-package, venue, or food-and-beverage price. Enter the property's current written proposal.",
      ),
    ],
    conditions: [
      "Do not reuse an older Karisma or Generations wedding brochure as a current rate without written confirmation.",
      "Confirm the current operator, package, event spaces, menus, vendor rules, taxes, and service charges for the actual dates.",
    ],
  },
  {
    id: "royalton-weddings",
    label: "Royalton Resorts — current quote required",
    sourceName: "Royalton Resorts: Weddings",
    sourceUrl: "https://www.royaltonresorts.com/special-occasions/weddings",
    packages: [
      writtenQuotePackage(
        "Royalton's current wedding page lists resorts and wedding options, but its publicly indexed content does not expose a dependable current total for these properties. Enter a current written proposal.",
      ),
    ],
    conditions: [
      "Package names and inclusions can differ by resort and date.",
      "Confirm event-space fees, menus, bar levels, additional guests, vendor fees, taxes, and service charges in writing.",
    ],
  },
  {
    id: "palladium-weddings",
    label: "Palladium Hotel Group — current quote required",
    sourceName: "Weddings by Palladium",
    sourceUrl: "https://www.palladiumhotelgroup.com/en/weddings",
    packages: [
      writtenQuotePackage(
        "Palladium currently describes wedding collections, but its public pricing materials direct couples to confirm newer dates. Enter a current written proposal rather than relying on an older rate sheet.",
      ),
    ],
    conditions: [
      "The publicly accessible price material reviewed was not current enough to use as an automatic 2026 rate.",
      "Confirm the collection, venues, guest overages, private events, menus, vendor fees, taxes, and service charges in writing.",
    ],
  },
  {
    id: "majestic-weddings",
    label: "Majestic Resorts — current quote required",
    sourceName: "Majestic Resorts: Weddings and Honeymoons",
    sourceUrl: "https://www.majestic-resorts.com/weddings-and-honeymoons",
    packages: [
      writtenQuotePackage(
        "Majestic describes wedding inclusions and eligibility for a complimentary package, but private events, upgrades, and the complete host cost require the property's current written proposal.",
      ),
    ],
    conditions: [
      "Complimentary-package eligibility depends on the current room-night requirement and does not make private events or upgrades free.",
      "Confirm the ceremony type, venues, private functions, menus, additional guests, taxes, and service charges in writing.",
    ],
  },
  {
    id: "iberostar-weddings",
    label: "Iberostar — custom quote required",
    sourceName: "Iberostar: Weddings",
    sourceUrl: "https://www.iberostar.com/en/weddings/",
    packages: [
      writtenQuotePackage(
        "Iberostar says its weddings are tailor-made rather than generic packages, so there is no responsible universal public package price. Enter the property's custom written proposal.",
      ),
    ],
    conditions: [
      "Iberostar describes a customized wedding process instead of a universal package price.",
      "Confirm the selected property, events, venues, menus, guest count, production, taxes, and service charges in writing.",
    ],
  },
]

const hyattMexicoResorts = [
  "Impression Isla Mujeres by Secrets",
  "Impression Moxché by Secrets",
  "Hyatt Zilara Riviera Maya",
  "Secrets Akumal Riviera Maya",
  "Secrets Aura Cozumel",
  "Secrets Bahia Mita Surf & Spa Resort",
  "Secrets Maroma Beach Riviera Cancun",
  "Secrets Moxché Playa del Carmen",
  "Secrets Playa Blanca Costa Mujeres",
  "Secrets Playa Mujeres Golf & Spa Resort",
  "Secrets Riviera Cancun Resort & Spa",
  "Secrets The Vine Cancun",
  "Secrets Tulum Resort & Beach Club",
  "Secrets Vallarta Bay Puerto Vallarta",
  "Breathless Cancun Soul Resort & Spa",
  "Breathless Riviera Cancun Resort & Spa",
  "Dreams Aventuras Riviera Maya",
  "Dreams Bahia Mita Surf & Spa Resort",
  "Dreams Cozumel Cape Resort & Spa",
  "Dreams Estrella del Mar Mazatlan Golf & Spa Resort",
  "Dreams Jade Resort & Spa",
  "Dreams Los Cabos Suites Golf Resort & Spa",
  "Dreams Natura Resort & Spa",
  "Dreams Playa Mujeres Golf & Spa Resort",
  "Dreams Riviera Cancun Resort & Spa",
  "Dreams Sapphire Resort & Spa",
  "Dreams Tulum Resort & Spa",
  "Dreams Vallarta Bay Resort & Spa",
  "Dreams Vista Cancun Golf & Spa Resort",
  "Hyatt Vivid Grand Island",
  "Sunscape Puerto Vallarta Resort & Spa",
] as const

const hyattPuntaCanaResorts = [
  "Zoëtry Agua Punta Cana",
  "Secrets Cap Cana Resort & Spa",
  "Secrets Macao Punta Cana",
  "Secrets Royal Beach Punta Cana",
  "Secrets Tides Punta Cana",
  "Breathless Punta Cana Resort & Spa",
  "Dreams Macao Beach Punta Cana",
  "Dreams Onyx Resort & Spa",
  "Dreams Royal Beach Punta Cana",
] as const

const quoteOnlyResorts: Array<Omit<ResortRateEntry, "id">> = [
  { name: "Generations Riviera Maya", destination: "Mexico", programId: "generations-riviera-maya" },
  { name: "Hard Rock Hotel Cancun", destination: "Mexico", programId: "hard-rock-mexico" },
  { name: "Hard Rock Hotel Riviera Maya", destination: "Mexico", programId: "hard-rock-mexico" },
  { name: "Grand Palladium Colonial Resort & Spa", destination: "Mexico", programId: "palladium-weddings" },
  { name: "Grand Palladium Kantenah Resort & Spa", destination: "Mexico", programId: "palladium-weddings" },
  { name: "Grand Palladium White Sand Resort & Spa", destination: "Mexico", programId: "palladium-weddings" },
  { name: "TRS Yucatan Hotel", destination: "Mexico", programId: "palladium-weddings" },
  { name: "Majestic Elegance Costa Mujeres", destination: "Mexico", programId: "majestic-weddings" },
  { name: "Majestic Mirage Costa Mujeres", destination: "Mexico", programId: "majestic-weddings" },
  { name: "Royalton CHIC Cancun", destination: "Mexico", programId: "royalton-weddings" },
  { name: "Royalton Riviera Cancun", destination: "Mexico", programId: "royalton-weddings" },
  { name: "Royalton Splash Riviera Cancun", destination: "Mexico", programId: "royalton-weddings" },
  { name: "Iberostar Selection Cancun", destination: "Mexico", programId: "iberostar-weddings" },
  { name: "Iberostar Selection Paraiso Lindo", destination: "Mexico", programId: "iberostar-weddings" },
  { name: "Iberostar Selection Paraiso Maya Suites", destination: "Mexico", programId: "iberostar-weddings" },
  { name: "Hard Rock Hotel & Casino Punta Cana", destination: "Punta Cana", programId: "hard-rock-punta-cana" },
  { name: "Grand Palladium Palace Resort & Spa", destination: "Punta Cana", programId: "palladium-weddings" },
  { name: "Grand Palladium Punta Cana Resort & Spa", destination: "Punta Cana", programId: "palladium-weddings" },
  { name: "Grand Palladium Select Bávaro", destination: "Punta Cana", programId: "palladium-weddings" },
  { name: "TRS Turquesa Hotel", destination: "Punta Cana", programId: "palladium-weddings" },
  { name: "Majestic Colonial Punta Cana", destination: "Punta Cana", programId: "majestic-weddings" },
  { name: "Majestic Elegance Punta Cana", destination: "Punta Cana", programId: "majestic-weddings" },
  { name: "Majestic Mirage Punta Cana", destination: "Punta Cana", programId: "majestic-weddings" },
  { name: "Royalton Bávaro", destination: "Punta Cana", programId: "royalton-weddings" },
  { name: "Royalton CHIC Punta Cana", destination: "Punta Cana", programId: "royalton-weddings" },
  { name: "Royalton Punta Cana", destination: "Punta Cana", programId: "royalton-weddings" },
  { name: "Royalton Splash Punta Cana", destination: "Punta Cana", programId: "royalton-weddings" },
  { name: "Iberostar Selection Bávaro Suites", destination: "Punta Cana", programId: "iberostar-weddings" },
  { name: "JOIA Bávaro by Iberostar", destination: "Punta Cana", programId: "iberostar-weddings" },
]

function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}

export const resortRateEntries: ResortRateEntry[] = [
  ...hyattMexicoResorts.map((name) => ({ id: `hyatt-${slugify(name)}`, name, destination: "Mexico" as const, programId: "hyatt-south-asian" })),
  ...hyattPuntaCanaResorts.map((name) => ({ id: `hyatt-${slugify(name)}`, name, destination: "Punta Cana" as const, programId: "hyatt-south-asian" })),
  { id: "moon-palace-cancun", name: "Moon Palace Cancun", destination: "Mexico" as const, programId: "moon-palace-cancun" },
  { id: "lopesan-costa-bavaro", name: "Lopesan Costa Bávaro Resort, Spa & Casino", destination: "Punta Cana" as const, programId: "lopesan-costa-bavaro" },
  { id: "mystique-holbox", name: "Mystique Holbox", destination: "Mexico" as const, programId: "mystique-holbox" },
  ...quoteOnlyResorts.map((resort) => ({ ...resort, id: `quote-${slugify(resort.name)}` })),
].sort((a, b) => a.destination.localeCompare(b.destination) || a.name.localeCompare(b.name))

export type PackageEstimate = {
  packageCost: number
  publishedGuestOverage: number
  missingPackagePrice: boolean
  missingGuestPricing: boolean
  outsidePublishedGuestRange: boolean
}

export function calculatePackageEstimate(packageRate: PublishedPackageRate, guestCount: number): PackageEstimate {
  const guests = Number.isFinite(guestCount) && guestCount > 0 ? Math.floor(guestCount) : 0
  const missingPackagePrice = packageRate.basePrice === null
  let packageCost = packageRate.basePrice ?? 0
  let publishedGuestOverage = 0
  let missingGuestPricing = false

  if (packageRate.priceTiers?.length && guests) {
    const tier = packageRate.priceTiers.find(({ minGuests, maxGuests }) => guests >= minGuests && guests <= maxGuests)
    if (tier) {
      packageCost = tier.price
    } else {
      const lastTier = packageRate.priceTiers[packageRate.priceTiers.length - 1]
      const firstTier = packageRate.priceTiers[0]
      if (guests < firstTier.minGuests) {
        packageCost = firstTier.price
      } else if (
        guests > lastTier.maxGuests &&
        packageRate.perAdditionalGuest &&
        (!packageRate.maxGuests || guests <= packageRate.maxGuests)
      ) {
        packageCost = lastTier.price
        publishedGuestOverage = (guests - lastTier.maxGuests) * packageRate.perAdditionalGuest
      } else if (guests > lastTier.maxGuests) {
        packageCost = lastTier.price
        missingGuestPricing = true
      }
    }
  } else if (guests && packageRate.includedGuests && guests > packageRate.includedGuests) {
    if (packageRate.perAdditionalGuest && (!packageRate.maxGuests || guests <= packageRate.maxGuests)) {
      publishedGuestOverage = (guests - packageRate.includedGuests) * packageRate.perAdditionalGuest
    } else {
      missingGuestPricing = true
    }
  }

  const outsidePublishedGuestRange = Boolean(
    guests &&
      ((packageRate.minGuests && guests < packageRate.minGuests) ||
        (packageRate.maxGuests && guests > packageRate.maxGuests)),
  )

  return {
    packageCost,
    publishedGuestOverage,
    missingPackagePrice,
    missingGuestPricing,
    outsidePublishedGuestRange,
  }
}

export function calculateFoodBeverageEstimate(option: PublishedFoodBeverageOption, guestCount: number): number {
  const guests = Number.isFinite(guestCount) && guestCount > 0 ? Math.floor(guestCount) : 0
  return option.basePrice + Math.max(0, guests - option.includedGuests) * option.perAdditionalGuest
}

export function getRateProgram(programId: string): ResortRateProgram | undefined {
  return resortRatePrograms.find(({ id }) => id === programId)
}
