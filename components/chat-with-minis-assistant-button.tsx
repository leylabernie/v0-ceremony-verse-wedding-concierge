"use client";

import { openMinisAssistant } from "@/components/MinisAssistantWidget";
import { trackEvent } from "@/lib/analytics";

/**
 * Secondary CTA that opens Mini's Assistant chat widget. Rendered ALONGSIDE
 * (never replacing) the existing "Schedule Free Consultation" button.
 *
 * Styled as a ghost/outline button using the existing design-system accent
 * (--cv-accent / #7a6841). No new colors are introduced. Callers may pass an
 * optional `variant` to render the light outline used on dark hero/footer
 * sections.
 */
export function ChatWithMinisAssistantButton({
  className = "",
  variant = "accent",
  source,
}: {
  className?: string;
  /** "accent" = brand outline on light bg; "light" = white outline on dark bg. */
  variant?: "accent" | "light";
  /** Optional analytics label for where the button was clicked. */
  source?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-full border px-7 py-3.5 text-sm font-semibold transition";
  const styles =
    variant === "light"
      ? "border-white text-white hover:bg-white hover:text-[#1f1f1f]"
      : "border-[#7a6841] text-[#7a6841] hover:bg-[#7a6841] hover:text-white";

  return (
    <button
      type="button"
      onClick={() => {
        trackEvent("chat_widget_open", { source: source ?? "cta_button" });
        openMinisAssistant();
      }}
      className={`${base} ${styles} ${className}`.trim()}
    >
      Chat with Mini&apos;s Assistant
    </button>
  );
}
