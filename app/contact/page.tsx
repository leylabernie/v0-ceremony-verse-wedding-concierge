import { ContactPage } from "@/components/pages/contact-page";
import { buildMetadata, buildServiceSchema, buildBreadcrumb, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/contact/",
  title: "Schedule a Free 30-Minute CeremonyVerse Consultation",
  description:
    "Your first 30-minute CeremonyVerse consultation is free. Discuss India wedding sourcing or Gujarati and Hindu destination planning with no payment or contract required for the call.",
});

const serviceSchema = buildServiceSchema({
  name: "Free 30-Minute Wedding Sourcing or Destination Planning Consultation",
  description:
    "The first 30-minute introductory consultation is free and requires no payment or contract. CeremonyVerse reviews the wedding vision, guest count, timeline, and budget before explaining any separate paid next step.",
  url: "/contact/",
  category: "Wedding Planning and India Wedding Sourcing Consultation",
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
