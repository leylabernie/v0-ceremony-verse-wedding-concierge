"use client";

import React from "react";

/**
 * Client-only FAQ accordion item.
 *
 * Extracted from home-page.tsx so the homepage can be a Server Component
 * (no "use client" at the top of the page). The only interactive bit on
 * the homepage is this FAQ toggle — keeping it isolated means React
 * runtime + useState only ships for this small component, not for the
 * entire 1000-line page.
 */
export function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ borderBottom: "1px solid #e6dfd5" }}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="font-medium text-sm md:text-base" style={{ color: "#1f1f1f" }}>{question}</span>
        <span
          className="shrink-0 text-lg transition-transform"
          style={{ color: "#7a6841", transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </button>
      {open && (
        <p className="text-sm leading-relaxed pb-5" style={{ color: "#4d403a" }}>{answer}</p>
      )}
    </div>
  );
}
