// CONTENT-ONLY UPDATE: Preserve the existing consultation experience while refining Gujarati–Mexico metadata.
import { ContactPage } from "@/components/pages/contact-page";
import { buildMetadata, buildServiceSchema, buildBreadcrumb, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/contact/",
  title: "Schedule a Free 30-Minute CeremonyVerse Consultation",
  description:
    "Schedule a free first consultation for Gujarati or Hindu family-centered destination-wedding planning in Mexico or Punta Cana, or for optional paid India wedding-outfit sourcing.",
});

const serviceSchema = buildServiceSchema({
  name: "Free 30-Minute Destination Wedding or India Outfit Sourcing Consultation",
  description:
    "The first 30-minute consultation is free and requires no payment or contract. CeremonyVerse reviews family priorities, destination, guest count, timing, local-planning needs, and budget scope before explaining any separate paid next step.",
  url: "/contact/",
  category: "Destination Wedding Planning and India Outfit Sourcing Consultation",
  areaServed: ["United States", "Canada", "Mexico", "Punta Cana, Dominican Republic"],
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Schedule a Free 30-Minute Consultation", url: "/contact/" },
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
