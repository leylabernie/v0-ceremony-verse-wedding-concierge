import { ThankYouPage } from "./thank-you-client";
import { buildMetadata, buildBreadcrumb, JsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  path: "/thank-you",
  title: "Thank You — CeremonyVerse Consultation Request Received",
  description:
    "Thank you for reaching out to CeremonyVerse. We will respond within 24 hours to schedule your free consultation.",
  noIndex: true,
});

const breadcrumbSchema = buildBreadcrumb([
  { name: "Thank You", url: "/thank-you/" },
]);

export default function Page() {
  return (
    <>
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />
      <ThankYouPage />
    </>
  );
}
