import { DestinationLandingPage } from "@/components/destination-landing-page"
import { moonPalaceCancun } from "@/lib/resort-pages"
import { buildMetadata } from "@/lib/seo"

const data = moonPalaceCancun

export const metadata = buildMetadata({
  path: data.slug,
  title: "Indian Wedding at Moon Palace Cancún",
  description: data.description,
  image: "/images/sourcing/couple-mandap.webp",
})

export default function MoonPalaceCancunIndianWeddingPage() {
  return <DestinationLandingPage data={data} />
}
