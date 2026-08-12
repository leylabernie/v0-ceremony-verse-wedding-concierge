import { DestinationLandingPage } from "@/components/destination-landing-page"
import { destinationPages } from "@/lib/destination-pages"
import { buildMetadata } from "@/lib/seo"

const data = destinationPages.rivieraMaya

export const metadata = buildMetadata({
  path: data.slug,
  title: "Indian Destination Wedding Riviera Maya",
  description: data.description,
  image: "/images/sourcing/couple-mandap.webp",
})

export default function RivieraMayaIndianWeddingPage() {
  return <DestinationLandingPage data={data} />
}
