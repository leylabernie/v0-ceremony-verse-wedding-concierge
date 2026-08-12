import { DestinationLandingPage } from "@/components/destination-landing-page"
import { destinationPages } from "@/lib/destination-pages"
import { buildMetadata } from "@/lib/seo"

const data = destinationPages.jamaica

export const metadata = buildMetadata({
  path: data.slug,
  title: "Indian Destination Wedding Jamaica",
  description: data.description,
  image: "/images/proof/family-destination-baarat.webp",
})

export default function JamaicaIndianWeddingPage() {
  return <DestinationLandingPage data={data} />
}
