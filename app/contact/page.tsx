import { ContactPage } from "@/components/pages/contact-page";
import { buildMetadata, buildServiceSchema, buildBreadcrumb, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/contact/",
  title: "Book a Free CeremonyVerse Wedding Consultation",
  description:
    "Request a private CeremonyVerse consultation for India wedding sourcing or Gujarati and Hindu destination planning across Mexico and in Punta Cana.",
});

const serviceSchema = buildServiceSchema({
  name: "Free Wedding Sourcing or Destination Planning Consultation",
  description:
    "Free 30-minute consultation to review the wedding vision, guest count, timeline, and budget, then recommend India sourcing or the right destination-planning and family-support scope.",
  url: "/contact/",
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Book Consultation", url: "/contact/" },
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
