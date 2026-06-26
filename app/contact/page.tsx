import { ContactPage } from "@/components/pages/contact-page";
import { buildMetadata, buildServiceSchema, buildBreadcrumb, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/contact",
  title: "Book a Free Indian Wedding Sourcing Consultation",
  description:
    "Book a free 30-minute consultation with CeremonyVerse. Tell us about your wedding, your vision, and your timeline — we'll recommend exactly what level of sourcing support you need.",
});

const serviceSchema = buildServiceSchema({
  name: "Free Wedding Sourcing Consultation",
  description:
    "Free 30-minute consultation to review your wedding vision, timeline, and budget, and recommend the right level of sourcing support.",
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
