import { DestinationLandingPage } from "@/components/destination-landing-page"
import { destinationPages } from "@/lib/destination-pages"
import { buildMetadata } from "@/lib/seo"

const data = destinationPages.losCabos

export const metadata = buildMetadata({
  path: data.slug,
  title: "Indian Destination Wedding Los Cabos",
  description: data.description,
  image: "/images/sourcing/couple-mandap.webp",
})

export default function LosCabosIndianWeddingPage() {
  return <DestinationLandingPage data={data} />
}
