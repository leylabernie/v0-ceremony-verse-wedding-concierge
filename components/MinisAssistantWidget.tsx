"use client";

import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  botMeta,
  destinationNameFromSlug,
  extractDestinationSlug,
  isWidgetExcludedPath,
} from "@/lib/widget-config";

/**
 * Mini's Assistant — global in-app chat widget for CeremonyVerse.
 *
 * Architecture:
 *   widget (browser)  ->  POST /api/chat (Next.js server)  ->  Abacus AI
 * The Abacus deployment token never touches the browser. This component only
 * ever talks to our own /api/chat route.
 *
 * Behaviour:
 *  - Renders nothing on excluded paths (/privacy-policy, /terms-of-service,
 *    /terms) — see isWidgetExcludedPath.
 *  - Floating "Chat with Mini's Assistant" pill/FAB in the bottom-right,
 *    lifted above the mobile sticky footer CTA.
 *  - Clicking opens a chat panel (400×550 desktop; full-width bottom drawer on
 *    mobile ≤640px).
 *  - Persists the Abacus conversation id in sessionStorage (keyed by hostname)
 *    so the thread survives page navigations.
 *  - Typing indicator + auto-scroll.
 *  - Inline name/email lead-capture form appears when the assistant asks for
 *    contact details; it POSTs to /api/lead-capture.
 *
 * NOTE: This component does NOT render a WhatsApp floating button. The site
 * already ships a global <WhatsAppButton /> in app/layout.tsx.
 */

type ChatRole = "user" | "assistant";
type ChatMessage = { role: ChatRole; text: string };

const OPENING_MESSAGE =
  "Hi! I'm Mini's assistant for CeremonyVerse \uD83C\uDF38 Are you just starting to explore destination wedding options, do you already have some resort proposals, or are you looking to book a resort stay or honeymoon?";

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL ?? "";

const ACCENT = "#7a6841";

function sessionKey(): string {
  const host =
    typeof window !== "undefined" ? window.location.hostname : "default";
  return `minis-assistant:conv:${host}`;
}

/** Heuristic: does the assistant reply ask for the visitor's contact info? */
function asksForContact(text: string): boolean {
  const t = text.toLowerCase();
  const mentionsEmail = t.includes("email");
  const mentionsName = /\byour name\b|\bmay i have your name\b|\bwhat's your name\b|\bwhat is your name\b/.test(
    t,
  );
  return mentionsEmail || mentionsName;
}

export default function MinisAssistantWidget() {
  const pathname = usePathname() || "/";
  const excluded = isWidgetExcludedPath(pathname);

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  // Lazily restore any persisted conversation id (survives page navigations).
  const [conversationId, setConversationId] = useState<string | null>(() => {
    if (typeof window === "undefined") return null;
    try {
      return window.sessionStorage.getItem(sessionKey());
    } catch {
      return null;
    }
  });
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadName, setLeadName] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [leadError, setLeadError] = useState("");

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const initializedRef = useRef(false);

  const destinationName = useMemo(
    () => destinationNameFromSlug(extractDestinationSlug(pathname)),
    [pathname],
  );

  // Auto-scroll to the newest message / typing indicator.
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading, showLeadForm]);

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || loading) return;

      setMessages((prev) => [...prev, { role: "user", text: trimmed }]);
      setInput("");
      setLoading(true);

      try {
        const res = await fetch("/api/chat/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: trimmed,
            sessionId: conversationId ?? undefined,
            siteSource:
              typeof window !== "undefined" ? window.location.hostname : "",
          }),
        });

        const data: { reply?: string; conversationId?: string; error?: string } =
          await res.json();

        if (!res.ok || data.error) {
          setMessages((prev) => [
            ...prev,
            {
              role: "assistant",
              text:
                data.error ??
                "Sorry, something went wrong. Please try again in a moment.",
            },
          ]);
          return;
        }

        if (data.conversationId) {
          setConversationId(data.conversationId);
          try {
            window.sessionStorage.setItem(sessionKey(), data.conversationId);
          } catch {
            /* ignore */
          }
        }

        const reply = data.reply ?? "";
        setMessages((prev) => [...prev, { role: "assistant", text: reply }]);
        if (asksForContact(reply) && !leadSubmitted) setShowLeadForm(true);
      } catch {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            text: "Sorry, I couldn't reach the assistant. Please try again.",
          },
        ]);
      } finally {
        setLoading(false);
      }
    },
    [conversationId, loading, leadSubmitted],
  );

  // Seed the opening message and send the first turn when the panel opens.
  const openPanel = useCallback(() => {
    setOpen(true);
    if (!initializedRef.current) {
      initializedRef.current = true;
      setMessages([{ role: "assistant", text: OPENING_MESSAGE }]);
    }
    // Focus the input shortly after the panel animates in.
    setTimeout(() => inputRef.current?.focus(), 120);
  }, []);

  // Allow CTA buttons elsewhere to open the widget.
  useEffect(() => {
    if (excluded) return;
    const handler = () => openPanel();
    window.addEventListener("minis-assistant:open", handler);
    window.MinisAssistant = {
      open: openPanel,
      close: () => setOpen(false),
    };
    return () => {
      window.removeEventListener("minis-assistant:open", handler);
    };
  }, [excluded, openPanel]);

  const submitLead = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setLeadError("");
      if (!leadName.trim() || !leadEmail.trim()) {
        setLeadError("Please enter your name and email.");
        return;
      }
      try {
        const res = await fetch("/api/lead-capture/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: leadName.trim(),
            email: leadEmail.trim(),
            source: "chat",
            destination: destinationName ?? "",
            pageUrl:
              typeof window !== "undefined" ? window.location.href : "",
          }),
        });
        if (!res.ok) {
          setLeadError("Couldn't save your details. Please try again.");
          return;
        }
        setLeadSubmitted(true);
        setShowLeadForm(false);
        // Let the bot know the contact details were shared.
        void sendMessage(
          `My name is ${leadName.trim()} and my email is ${leadEmail.trim()}.`,
        );
      } catch {
        setLeadError("Couldn't save your details. Please try again.");
      }
    },
    [leadName, leadEmail, destinationName, sendMessage],
  );

  if (excluded) return null;

  return (
    <>
      <style>{`
        :root { --minis-mobile-clearance: calc(env(safe-area-inset-bottom, 0px) + 72px); }
        .minis-fab {
          position: fixed; right: 16px; bottom: var(--minis-mobile-clearance);
          z-index: 50;
        }
        .minis-panel {
          position: fixed; right: 16px; bottom: var(--minis-mobile-clearance);
          z-index: 50; width: 400px; height: 550px; max-height: calc(100vh - 96px);
        }
        @media (min-width: 1280px) {
          .minis-fab { right: 24px; bottom: 24px; }
          .minis-panel { right: 24px; bottom: 24px; }
        }
        @media (max-width: 640px) {
          .minis-panel {
            right: 0; left: 0; bottom: 0; width: 100%;
            height: 85vh; max-height: 85vh;
            border-bottom-left-radius: 0; border-bottom-right-radius: 0;
          }
        }
        .minis-typing span {
          display: inline-block; width: 6px; height: 6px; margin: 0 1px;
          background: ${ACCENT}; border-radius: 50%; opacity: 0.4;
          animation: minis-blink 1.2s infinite both;
        }
        .minis-typing span:nth-child(2) { animation-delay: 0.2s; }
        .minis-typing span:nth-child(3) { animation-delay: 0.4s; }
        @keyframes minis-blink { 0%,80%,100% { opacity: 0.25; } 40% { opacity: 1; } }
      `}</style>

      {/* Launcher */}
      {!open && (
        <button
          type="button"
          onClick={openPanel}
          aria-label="Chat with Mini's Assistant"
          className="minis-fab inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-90"
          style={{ backgroundColor: ACCENT }}
        >
          <span aria-hidden>{botMeta.icon}</span>
          <span>Chat with Mini&apos;s Assistant</span>
        </button>
      )}

      {/* Chat panel */}
      {open && (
        <div
          className="minis-panel flex flex-col overflow-hidden rounded-2xl border bg-white shadow-2xl"
          style={{ borderColor: "#e6dfd5" }}
          role="dialog"
          aria-label="Mini's Assistant chat"
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3 text-white"
            style={{ backgroundColor: ACCENT }}
          >
            <div className="flex items-center gap-2">
              <span aria-hidden className="text-lg">
                {botMeta.icon}
              </span>
              <div className="leading-tight">
                <div className="text-sm font-semibold">{botMeta.name}</div>
                <div className="text-[11px] opacity-90">
                  CeremonyVerse concierge
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded-full p-1 text-white/90 transition hover:bg-white/20"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 space-y-3 overflow-y-auto px-3 py-3"
            style={{ backgroundColor: "#f8f6f2" }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${
                  m.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-3.5 py-2 text-sm ${
                    m.role === "user"
                      ? "text-white"
                      : "border bg-white text-[#2b2b2b]"
                  }`}
                  style={
                    m.role === "user"
                      ? { backgroundColor: ACCENT }
                      : { borderColor: "#e6dfd5" }
                  }
                >
                  {m.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div
                  className="minis-typing rounded-2xl border bg-white px-3.5 py-3"
                  style={{ borderColor: "#e6dfd5" }}
                  aria-label="Mini's Assistant is typing"
                >
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            )}

            {/* Inline lead-capture form */}
            {showLeadForm && !leadSubmitted && (
              <form
                onSubmit={submitLead}
                className="rounded-2xl border bg-white p-3 text-sm"
                style={{ borderColor: "#e6dfd5" }}
              >
                <div className="mb-2 font-medium text-[#2b2b2b]">
                  Share your details so Mini can follow up:
                </div>
                <input
                  type="text"
                  value={leadName}
                  onChange={(e) => setLeadName(e.target.value)}
                  placeholder="Your name"
                  className="mb-2 w-full rounded-lg border px-3 py-2 text-sm outline-none focus:border-[#7a6841]"
                  style={{ borderColor: "#e6dfd5" }}
                />
                <input
                  type="email"
                  value={leadEmail}
                  onChange={(e) => setLeadEmail(e.target.value)}
                  placeholder="Your email"
                  className="mb-2 w-full rounded-lg border px-3 py-2 text-sm outline-none focus:border-[#7a6841]"
                  style={{ borderColor: "#e6dfd5" }}
                />
                {leadError && (
                  <div className="mb-2 text-xs text-red-600">{leadError}</div>
                )}
                <button
                  type="submit"
                  className="w-full rounded-full py-2 text-sm font-semibold text-white transition hover:opacity-90"
                  style={{ backgroundColor: ACCENT }}
                >
                  Send my details
                </button>
              </form>
            )}
          </div>

          {/* Composer */}
          <div className="border-t bg-white p-2" style={{ borderColor: "#e6dfd5" }}>
            {CALENDLY_URL && (
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mb-2 block text-center text-xs font-semibold underline"
                style={{ color: ACCENT }}
              >
                Or book a free consultation call →
              </a>
            )}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                void sendMessage(input);
              }}
              className="flex items-end gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message…"
                disabled={loading}
                className="flex-1 rounded-full border px-4 py-2.5 text-sm outline-none focus:border-[#7a6841] disabled:opacity-60"
                style={{ borderColor: "#e6dfd5" }}
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                aria-label="Send message"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white transition hover:opacity-90 disabled:opacity-40"
                style={{ backgroundColor: ACCENT }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

/**
 * Opens the chat widget programmatically. Used by the "Chat with Mini's
 * Assistant" CTA buttons across the site.
 */
export function openMinisAssistant(): void {
  if (typeof window === "undefined") return;
  if (window.MinisAssistant?.open) {
    window.MinisAssistant.open();
    return;
  }
  window.dispatchEvent(new CustomEvent("minis-assistant:open"));
}

declare global {
  interface Window {
    MinisAssistant?: { open?: () => void; close?: () => void };
  }
}
