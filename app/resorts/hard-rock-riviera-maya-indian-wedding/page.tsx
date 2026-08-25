import { DestinationLandingPage } from "@/components/destination-landing-page"
import { hardRockRivieraMaya } from "@/lib/resort-pages"
import { buildMetadata } from "@/lib/seo"

const data = hardRockRivieraMaya

export const metadata = buildMetadata({
  path: data.slug,
  title: "Indian Wedding at Hard Rock Riviera Maya",
  description: data.description,
  image: "/images/sourcing/couple-mandap.webp",
})

export default function HardRockRivieraMayaIndianWeddingPage() {
  return <DestinationLandingPage data={data} />
}
