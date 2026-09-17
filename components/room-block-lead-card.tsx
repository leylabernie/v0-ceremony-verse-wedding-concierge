"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

/**
 * Lead-capture card for the South Asian room-block guide — offers Mini's
 * Master Room-Block Spreadsheet Tracker in exchange for first name, email,
 * and expected wedding date. POSTs to the site's lead-capture backend
 * (/api/lead-capture), the same endpoint the calculators and chat widget use,
 * so the lead lands in the existing CRM/webhook/follow-up pipeline.
 *
 * Design: gold brand border (#7a6841) on the site's light paper background,
 * visually distinct from the article body per the guide's spec.
 */
export function RoomBlockLeadCard() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [weddingDate, setWeddingDate] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    if (!firstName.trim() || !email.trim()) {
      setError("Please add your first name and email.");
      return;
    }

    setStatus("submitting");
    setError("");

    try {
      const response = await fetch("/api/lead-capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: firstName.trim(),
          email: email.trim(),
          source: "room-block-tracker",
          calculatorType: "master-room-block-spreadsheet",
          targetDates: weddingDate.trim(),
          pageUrl:
            typeof window !== "undefined" ? window.location.href : "/blog/south-asian-destination-wedding-guide/",
          website,
        }),
      });

      if (!response.ok) throw new Error("Request failed");

      trackEvent("room_block_tracker_lead", { source: "blog-guide" });
      setStatus("success");
    } catch {
      setStatus("error");
      setError(
        "Something went wrong. Please email hello@ceremonyverse.com and we'll send the tracker directly.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="my-4 rounded-2xl border-2 border-[#7a6841] bg-[#f8f6f2] p-7">
        <p className="font-serif text-2xl font-semibold text-[#7a6841]">
          Check your inbox
        </p>
        <p className="mt-2 leading-7 text-[#4d403a]">
          Mini&apos;s Master Room-Block Spreadsheet Tracker is on its way to{" "}
          <strong>{email}</strong>, along with the building-assignment and
          day-pass questions from this guide. Mini or her assistant will follow
          up with the next practical step.
        </p>
      </div>
    );
  }

  return (
    <div className="my-4 rounded-2xl border-2 border-[#7a6841] bg-[#f8f6f2] p-7">
      <p className="font-serif text-2xl font-semibold leading-snug text-[#7a6841]">
        Planning a South Asian Resort Wedding? Download Mini&apos;s Master
        Room-Block Spreadsheet Tracker.
      </p>
      <p className="mt-2 leading-7 text-[#4d403a]">
        The tracker Mini&apos;s families actually use — buildings and floors,
        flight manifests, dietary notes, day-pass guests, and payment deadlines,
        all in one sheet. Free.
      </p>
      <form onSubmit={handleSubmit} className="mt-5 grid gap-3 sm:grid-cols-3">
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
        <label className="flex flex-col text-sm font-medium text-[#4d403a]">
          <span className="sr-only">First name</span>
          <input
            type="text"
            required
            placeholder="First Name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            className="rounded-lg border border-[#e6dfd5] bg-white px-3 py-2.5 text-sm text-[#2f2f2f] outline-none focus:border-[#7a6841]"
          />
        </label>
        <label className="flex flex-col text-sm font-medium text-[#4d403a]">
          <span className="sr-only">Email address</span>
          <input
            type="email"
            required
            placeholder="Email Address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="rounded-lg border border-[#e6dfd5] bg-white px-3 py-2.5 text-sm text-[#2f2f2f] outline-none focus:border-[#7a6841]"
          />
        </label>
        <label className="flex flex-col text-sm font-medium text-[#4d403a]">
          <span className="sr-only">Expected wedding date</span>
          <input
            type="text"
            placeholder="Expected Wedding Date"
            value={weddingDate}
            onChange={(event) => setWeddingDate(event.target.value)}
            className="rounded-lg border border-[#e6dfd5] bg-white px-3 py-2.5 text-sm text-[#2f2f2f] outline-none focus:border-[#7a6841]"
          />
        </label>
        <div className="sm:col-span-3">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex items-center justify-center rounded-full bg-[#7a6841] px-8 py-3 text-sm font-bold text-white transition hover:bg-[#5e4a40] disabled:opacity-60"
          >
            {status === "submitting" ? "Sending…" : "Send Me the Tracker"}
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
