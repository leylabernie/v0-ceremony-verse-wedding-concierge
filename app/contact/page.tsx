import { ContactPage } from "@/components/pages/contact-page";
import { buildMetadata, buildServiceSchema, buildBreadcrumb, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/contact/",
  title: "Schedule a Free CeremonyVerse Wedding Consultation",
  description:
    "Schedule a free consultation from anywhere in the USA or Canada about India wedding sourcing, the $300 feasibility plan, or Gujarati and Hindu planning in Mexico or Punta Cana.",
});

const serviceSchema = buildServiceSchema({
  name: "Free Wedding Sourcing or Destination Planning Consultation",
  description:
    "Free 30-minute introductory consultation to review the wedding vision, guest count, timeline, and budget, then identify whether India sourcing, the $300 feasibility plan, or a destination-planning scope is the right next step.",
  url: "/contact/",
  category: "Wedding Planning and India Wedding Sourcing Consultation",
  areaServed: ["United States", "Canada", "Mexico", "Punta Cana, Dominican Republic"],
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Schedule Free Consultation", url: "/contact/" },
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
