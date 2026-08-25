import { DestinationLandingPage } from "@/components/destination-landing-page"
import { hyattInclusiveCollection } from "@/lib/resort-pages"
import { buildMetadata } from "@/lib/seo"

const data = hyattInclusiveCollection

export const metadata = buildMetadata({
  path: data.slug,
  title: "Indian Weddings at Hyatt Inclusive Collection Resorts",
  description: data.description,
  image: "/images/sourcing/couple-mandap.webp",
})

export default function HyattInclusiveCollectionIndianWeddingPage() {
  return <DestinationLandingPage data={data} />
}
