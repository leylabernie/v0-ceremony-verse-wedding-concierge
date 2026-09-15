"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/analytics";
import {
  destinationNameFromSlug,
  extractDestinationSlug,
} from "@/lib/widget-config";

/**
 * Inline lead-capture offer shown AFTER a calculator's results are displayed.
 *
 * It never gates the calculator itself — the calculator is fully usable without
 * submitting. On submit it POSTs to /api/lead-capture with the calculator
 * context and (optional) results snapshot.
 *
 * Design: uses existing brand tokens (--cv-accent #7a6841, --cv-border) and the
 * site's rounded-full button system. No new colors introduced.
 */
export function CalculatorLeadCapture({
  calculatorType,
  results,
  className = "",
}: {
  /** Short identifier, e.g. "budget-planner", "guest-logistics". */
  calculatorType: string;
  /** Optional snapshot of the current results to email/store. */
  results?: unknown;
  className?: string;
}) {
  const pathname = usePathname() || "";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    if (!name.trim() || !email.trim()) {
      setError("Please add your first name and email.");
      return;
    }

    setStatus("submitting");
    setError("");

    const destinationSlug = extractDestinationSlug(pathname);
    const destination = destinationNameFromSlug(destinationSlug) ?? "";

    try {
      const response = await fetch("/api/lead-capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          whatsapp: whatsapp.trim(),
          source: "calculator",
          calculatorType,
          results,
          destination,
          pageUrl:
            typeof window !== "undefined" ? window.location.href : pathname,
          website,
        }),
      });

      if (!response.ok) throw new Error("Request failed");

      trackEvent("calculator_lead_capture", { calculatorType });
      setStatus("success");
    } catch {
      setStatus("error");
      setError(
        "Something went wrong. Please email hello@ceremonyverse.com and we'll send your results.",
      );
    }
  }

  if (status === "success") {
    return (
      <div
        className={`rounded-2xl border border-[#e6dfd5] bg-[#f8f6f2] p-6 text-[#2f2f2f] ${className}`.trim()}
      >
        <p className="font-serif text-xl font-semibold text-[#7a6841]">
          Check your inbox
        </p>
        <p className="mt-2 text-sm leading-6 text-[#4d453d]">
          Your results and the 5 Decision Questions are on their way. Mini or her
          assistant will follow up with the next practical step.
        </p>
      </div>
    );
  }

  return (
    <div
      className={`rounded-2xl border border-[#e6dfd5] bg-[#f8f6f2] p-6 ${className}`.trim()}
    >
      <p className="font-serif text-xl font-semibold text-[#7a6841]">
        📩 Email me these results + the 5 Decision Questions
      </p>
      <p className="mt-2 text-sm leading-6 text-[#4d453d]">
        We&apos;ll send a copy of what you just built, plus the five questions to
        ask before signing any resort proposal. No spam.
      </p>
      <form onSubmit={handleSubmit} className="mt-4 grid gap-3 sm:grid-cols-3">
        {/* Honeypot field — visually hidden, ignored by humans. */}
        <input
          type="text"
          name="website"
          value={website}
          onChange={(event) => setWebsite(event.target.value)}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />
        <label className="flex flex-col text-sm font-medium text-[#4d453d]">
          <span className="sr-only">First name</span>
          <input
            type="text"
            required
            placeholder="First name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="rounded-lg border border-[#e6dfd5] bg-white px-3 py-2.5 text-sm text-[#2f2f2f] outline-none focus:border-[#7a6841]"
          />
        </label>
        <label className="flex flex-col text-sm font-medium text-[#4d453d]">
          <span className="sr-only">Email</span>
          <input
            type="email"
            required
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="rounded-lg border border-[#e6dfd5] bg-white px-3 py-2.5 text-sm text-[#2f2f2f] outline-none focus:border-[#7a6841]"
          />
        </label>
        <label className="flex flex-col text-sm font-medium text-[#4d453d]">
          <span className="sr-only">WhatsApp (optional)</span>
          <input
            type="tel"
            placeholder="WhatsApp (optional)"
            value={whatsapp}
            onChange={(event) => setWhatsapp(event.target.value)}
            className="rounded-lg border border-[#e6dfd5] bg-white px-3 py-2.5 text-sm text-[#2f2f2f] outline-none focus:border-[#7a6841]"
          />
        </label>
        <div className="sm:col-span-3">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex items-center justify-center rounded-full bg-[#7a6841] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#5e4a40] disabled:opacity-60"
          >
            {status === "submitting" ? "Sending…" : "Email me my results"}
          </button>
          {error ? (
            <p className="mt-2 text-sm text-[#a13b2f]" role="alert">
              {error}
            </p>
          ) : null}
        </div>
      </form>
    </div>
  );
}
