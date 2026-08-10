import { ContactPage } from "@/components/pages/contact-page";
import { buildMetadata, buildServiceSchema, buildBreadcrumb, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/contact/",
  title: "Book a Free CeremonyVerse Wedding Fit Call",
  description:
    "Request a free private fit call for India wedding sourcing, the $300 destination-wedding feasibility plan, or Gujarati and Hindu planning across Mexico and Punta Cana.",
});

const serviceSchema = buildServiceSchema({
  name: "Free Wedding Sourcing or Destination Planning Fit Call",
  description:
    "Free 30-minute fit call to review the wedding vision, guest count, timeline, and budget, then identify whether India sourcing, the $300 feasibility plan, or a destination-planning scope is the right next step.",
  url: "/contact/",
  category: "Wedding Planning and India Wedding Sourcing Consultation",
  areaServed: "United States, Mexico, and Punta Cana",
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Book Free Fit Call", url: "/contact/" },
]);

export default function ContactRoute() {
  return (
    <>
      <JsonLd id="schema-service" data={serviceSchema} />
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <ContactPage />
    </>
  );
}
