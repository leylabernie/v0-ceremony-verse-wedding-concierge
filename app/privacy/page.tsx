import Link from "next/link"
import { buildBreadcrumb, buildMetadata, JsonLd } from "@/lib/seo"

export const metadata = buildMetadata({
  path: "/privacy/",
  title: "Privacy Notice — CeremonyVerse",
  description:
    "How CeremonyVerse collects, uses, shares, and protects information submitted through its wedding consultation, sourcing, and destination-planning services.",
  keywords: ["CeremonyVerse privacy notice", "wedding consultation privacy", "wedding concierge data privacy"],
})

const breadcrumbSchema = buildBreadcrumb([{ name: "Privacy Notice", url: "/privacy/" }])

const sectionClass = "mt-10"
const headingClass = "font-serif text-2xl font-semibold text-[#1f1f1f] sm:text-3xl"
const paragraphClass = "mt-4 leading-8 text-[#4d403a]"
const listClass = "mt-4 list-disc space-y-3 pl-6 leading-7 text-[#4d403a]"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#1f1f1f]">
      <JsonLd id="schema-breadcrumb" data={breadcrumbSchema} />

      <section className="bg-[#1f1f1f] px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c5a059]">CeremonyVerse · Privacy</p>
          <h1 className="mt-4 font-serif text-4xl font-semibold sm:text-6xl">Privacy Notice</h1>
          <p className="mt-5 text-sm text-white/70">Last updated: August 10, 2026</p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <p className="text-lg leading-8 text-[#4d403a]">
          This notice explains what CeremonyVerse collects through this website and during client work, why it is
          used, when it may be shared, and how to contact us about your information. The consultation form is for
          wedding-planning and sourcing inquiries; submitting it does not enroll you in marketing.
        </p>

        <section className={sectionClass}>
          <h2 className={headingClass}>1. Information you provide</h2>
          <p className={paragraphClass}>Depending on how you use the service, you may provide:</p>
          <ul className={listClass}>
            <li>Name, email address, phone or WhatsApp number, and referral source.</li>
            <li>Home country or region and delivery destination when relevant to the requested service.</li>
            <li>Wedding timeframe, destination, guest and event estimates, travel origins, and budget range.</li>
            <li>Priorities, cultural or dietary requirements, sourcing needs, and other details you choose to share.</li>
            <li>Communications, approvals, measurements, addresses, and transaction records if you become a client.</li>
          </ul>
          <p className={paragraphClass}>
            Do not submit passport numbers, payment-card details, medical records, or sensitive documents through the
            consultation form. Payment-card information, if a payment service is offered, is handled by the applicable
            payment provider rather than the consultation form.
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>2. Website and attribution information</h2>
          <p className={paragraphClass}>
            The website records the landing page, referring page, and campaign parameters associated with a
            consultation request. Google Analytics is loaded after a visitor first interacts with the site and may
            receive device, browser, referral, page, and interaction information under the site&apos;s analytics
            configuration. Website hosting and security systems may also generate routine request and error logs.
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>3. How information is used</h2>
          <ul className={listClass}>
            <li>Respond to inquiries and decide whether the requested service and timing are a practical fit.</li>
            <li>Prepare, provide, and administer selected wedding-planning or India-sourcing services.</li>
            <li>Maintain approvals, logistics, communications, invoicing, and business records.</li>
            <li>Measure website performance, lead sources, and service interest.</li>
            <li>Prevent spam, misuse, security incidents, and unlawful activity.</li>
            <li>Meet applicable accounting, tax, legal, or dispute-resolution obligations.</li>
          </ul>
          <p className={paragraphClass}>
            Marketing messages are sent only when there is a separate basis to do so. You may ask to stop receiving
            marketing at any time.
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>4. When information may be shared</h2>
          <p className={paragraphClass}>CeremonyVerse may share the minimum information reasonably needed with:</p>
          <ul className={listClass}>
            <li>Website hosting, analytics, form-delivery, email, messaging, file-storage, accounting, and payment providers.</li>
            <li>Resorts, venues, carriers, vendors, or other service providers involved in a client&apos;s selected work.</li>
            <li>Professional advisers, insurers, or authorities when reasonably necessary or legally required.</li>
            <li>A successor organization in a business reorganization, subject to applicable privacy obligations.</li>
          </ul>
          <p className={paragraphClass}>
            A consultation request is not automatically distributed to wedding vendors. Information is shared for
            active work only when it is relevant to the selected service or otherwise authorized.
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>5. Retention</h2>
          <p className={paragraphClass}>
            Inquiry information is kept only as long as reasonably needed to respond, follow up where appropriate,
            protect the service, and maintain necessary business records. Client, transaction, tax, contract, and
            dispute records may be kept longer when required for the applicable purpose or by law. Information that is
            no longer needed is deleted, anonymized, or placed beyond routine use where practical.
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>6. Your choices and requests</h2>
          <p className={paragraphClass}>
            Depending on where you live and which law applies, you may have rights to ask about, access, correct,
            delete, restrict, or object to certain uses of your personal information. You may also withdraw a marketing
            consent or ask not to receive marketing. CeremonyVerse may need to verify your identity and may retain
            information where an exception or legal obligation applies.
          </p>
          <p className={paragraphClass}>
            Send a request to{" "}
            <a href="mailto:bhamini@ceremonyverse.com?subject=Privacy%20request" className="font-semibold text-[#7a6841] underline">
              bhamini@ceremonyverse.com
            </a>
            . Official explanations of privacy rights are available from the{" "}
            <a href="https://oag.ca.gov/privacy/ccpa" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#7a6841] underline">
              California Attorney General
            </a>{" "}
            and the{" "}
            <a href="https://www.edpb.europa.eu/sme/be-compliant/respect-individuals-rights_en" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#7a6841] underline">
              European Data Protection Board
            </a>
            , and Canadian privacy information is available from the{" "}
            <a href="https://www.priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/the-personal-information-protection-and-electronic-documents-act-pipeda/" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#7a6841] underline">
              Office of the Privacy Commissioner of Canada
            </a>
            . Those resources do not mean every law applies to every request.
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>7. Security and international processing</h2>
          <p className={paragraphClass}>
            CeremonyVerse uses reasonable administrative and technical safeguards appropriate to the information and
            service. No internet transmission or storage method can be guaranteed completely secure. Service providers
            and wedding vendors may process information in the United States, India, Mexico, the Dominican Republic,
            or other places relevant to the selected service.
          </p>
          <p className={paragraphClass}>
            Links to resorts, carriers, insurers, payment services, government resources, and other third-party sites
            are provided for convenience or project administration. Those services have their own terms and privacy
            practices; CeremonyVerse does not control their websites or promise their availability, security, or content.
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>8. Children</h2>
          <p className={paragraphClass}>
            The website and consultation form are intended for adults arranging wedding services. Please do not submit
            personal information about a child unless it is necessary for active wedding logistics and you are
            authorized to provide it.
          </p>
        </section>

        <section className={sectionClass}>
          <h2 className={headingClass}>9. Changes and contact</h2>
          <p className={paragraphClass}>
            This notice may be updated when the website, service providers, or data practices change. The current date
            will appear above. Questions can be sent to{" "}
            <a href="mailto:bhamini@ceremonyverse.com" className="font-semibold text-[#7a6841] underline">
              bhamini@ceremonyverse.com
            </a>{" "}
            or through the <Link href="/contact/" className="font-semibold text-[#7a6841] underline">consultation page</Link>.
          </p>
        </section>
      </article>
    </main>
  )
}
