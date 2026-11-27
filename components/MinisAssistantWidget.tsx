"use client";

import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { captureEvent } from "@/lib/analytics";
import { consultationBookingUrl } from "@/lib/consultation-booking";
import {
  buildGuidedAssistantResponse,
  GUIDED_ASSISTANT_ACTIONS,
  GUIDED_ASSISTANT_TOPICS,
} from "@/lib/guided-assistant";
import { conciergeIntent, conciergeTopic } from "@/lib/planning-intent";
import {
  botMeta,
  destinationNameFromSlug,
  extractDestinationSlug,
  isWidgetExcludedPath,
} from "@/lib/widget-config";

type ChatRole = "user" | "assistant";
type ChatMessage = { role: ChatRole; text: string };

const OPENING_MESSAGE =
  "Hi! I'm Mini's assistant for CeremonyVerse \uD83C\uDF38 Ask me about Mexico, Jamaica, or Punta Cana destination weddings, the $300 Feasibility & Action Plan (payable via Venmo after scope approval), $799 Guided India Sourcing, or Jain and satvik catering—or tap a topic below.";

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
  const mentionsName =
    /\byour name\b|\bmay i have your name\b|\bwhat's your name\b|\bwhat is your name\b/.test(
      t,
    );
  return mentionsEmail || mentionsName;
}

export default function MinisAssistantWidget() {
  const pathname = usePathname() || "/";
  const excluded = isWidgetExcludedPath(pathname);

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const intent = useMemo(() => conciergeIntent(messages), [messages]);
  const segment = intent.audience
    ? (`nri_${intent.audience}` as const)
    : undefined;
  const primaryTopic = useMemo(() => conciergeTopic(messages), [messages]);
  const lastClass = useRef<string | undefined>(undefined);
  useEffect(() => {
    const key = segment && `${segment}:${primaryTopic}`;
    if (segment && key !== lastClass.current) {
      captureEvent({
        name: "ai_concierge_intent_classified",
        properties: { audience_segment: segment, primary_topic: primaryTopic },
      });
    }
    lastClass.current = key;
  }, [segment, primaryTopic]);

  const handoff = (channel: "whatsapp" | "schedule_call") =>
    captureEvent({
      name: "ai_concierge_lead_converted",
      properties: { channel, audience_segment: segment ?? "unclassified" },
    });

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
  const launcherRef = useRef<HTMLButtonElement | null>(null);
  const initializedRef = useRef(false);

  const destinationName = useMemo(
    () => destinationNameFromSlug(extractDestinationSlug(pathname)),
    [pathname],
  );

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
            conversationId: conversationId ?? undefined,
            siteSource:
              typeof window !== "undefined" ? window.location.hostname : "",
          }),
        });

        const data: {
          reply?: string;
          conversationId?: string;
          error?: string;
        } | null = await res.json().catch(() => null);

        if (
          res.ok &&
          data &&
          !data.error &&
          typeof data.reply === "string" &&
          data.reply.trim()
        ) {
          if (data.conversationId) {
            setConversationId(data.conversationId);
            try {
              window.sessionStorage.setItem(sessionKey(), data.conversationId);
            } catch {
              /* ignore */
            }
          }

          const reply = data.reply.trim();
          setMessages((prev) => [...prev, { role: "assistant", text: reply }]);
          if (asksForContact(reply) && !leadSubmitted) setShowLeadForm(true);
          return;
        }

        // Zero-failure fallback: if /api/chat returns 401/402/429/500 or error,
        // automatically answer with the deterministic guided assistant in the same chat UI
        const fallback = buildGuidedAssistantResponse(
          trimmed,
          conversationId ?? undefined,
        );
        setConversationId(fallback.conversationId);
        setMessages((prev) => [
          ...prev,
          { role: "assistant", text: fallback.reply },
        ]);
      } catch {
        // Zero-failure fallback on network error
        const fallback = buildGuidedAssistantResponse(
          trimmed,
          conversationId ?? undefined,
        );
        setConversationId(fallback.conversationId);
        setMessages((prev) => [
          ...prev,
          { role: "assistant", text: fallback.reply },
        ]);
      } finally {
        setLoading(false);
      }
    },
    [conversationId, loading, leadSubmitted],
  );

  const openPanel = useCallback(() => {
    setOpen(true);
    if (!initializedRef.current) {
      initializedRef.current = true;
      setMessages([{ role: "assistant", text: OPENING_MESSAGE }]);
    }
    setTimeout(() => inputRef.current?.focus(), 120);
  }, []);

  useEffect(() => {
    if (excluded) return;
    const handler = () => openPanel();
    window.addEventListener("minis-assistant:open", handler);
    window.addEventListener("ceremonyverse:open-minis-assistant", handler);
    window.MinisAssistant = {
      open: openPanel,
      close: () => setOpen(false),
    };
    return () => {
      window.removeEventListener("minis-assistant:open", handler);
      window.removeEventListener("ceremonyverse:open-minis-assistant", handler);
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
        const result = await res.json();
        if (!res.ok || !result.success) {
          setLeadError("Couldn't save your details. Please try again.");
          return;
        }
        setLeadSubmitted(true);
        setShowLeadForm(false);
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
    <div data-minis-widget-shell className="flex justify-center px-6 py-6">
      <style>{`
        :root { --minis-mobile-clearance: calc(env(safe-area-inset-bottom, 0px) + 72px); }
        .minis-fab {
          position: relative;
          z-index: 1;
        }
        .minis-panel {
          position: fixed; right: 16px; bottom: var(--minis-mobile-clearance);
          z-index: 50; width: 400px; height: 550px; max-height: calc(100vh - 96px);
        }
        @media (min-width: 1280px) {
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
          ref={launcherRef}
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
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setOpen(false);
              setTimeout(() => launcherRef.current?.focus(), 0);
            }
          }}
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
              onClick={() => {
                setOpen(false);
                setTimeout(() => launcherRef.current?.focus(), 0);
              }}
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
            role="log"
            aria-live="polite"
            aria-relevant="additions text"
            aria-label="Chat messages"
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

            {/* 4 Core Guided Assistant Quick-Reply Topics */}
            <div
              data-guided-topics
              className="space-y-1.5 rounded-xl border bg-white p-2.5"
              style={{ borderColor: "#e6dfd5" }}
              aria-label="Guided wedding planning topics"
            >
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#6b5d47]">
                Quick answers
              </p>
              <div className="flex flex-wrap gap-1.5">
                {GUIDED_ASSISTANT_TOPICS.map((topic) => (
                  <button
                    key={topic.id}
                    type="button"
                    disabled={loading}
                    onClick={() => sendMessage(topic.question)}
                    className="rounded-full border px-2.5 py-1 text-left text-xs text-[#2b2b2b] transition hover:bg-[#f8f6f2] disabled:opacity-50"
                    style={{ borderColor: "#d9cfc0" }}
                  >
                    {topic.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3 Direct Concierge Routing Quick-Reply Actions */}
            <div
              data-guided-actions
              className="space-y-1.5 rounded-xl border bg-white p-2.5"
              style={{ borderColor: "#e6dfd5" }}
              aria-label="Direct concierge actions"
            >
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#6b5d47]">
                Direct actions
              </p>
              <div className="flex flex-wrap gap-1.5">
                {GUIDED_ASSISTANT_ACTIONS.map((action) => (
                  <a
                    key={action.id}
                    href={action.href}
                    onClick={() => {
                      if (action.id === "book-call") handoff("schedule_call");
                      if (action.id === "whatsapp-mini") handoff("whatsapp");
                    }}
                    {...(action.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold text-[#2b2b2b] transition hover:bg-[#f8f6f2]"
                    style={{ borderColor: ACCENT }}
                  >
                    {action.label}
                  </a>
                ))}
              </div>
            </div>

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

            {(intent.audience || intent.high) && (
              <aside className="space-y-2 rounded-xl border bg-white p-3 text-sm">
                {intent.audience === "parent" && (
                  <a
                    className="block underline"
                    href="/nri-gujarati-parents-guide-destination-wedding/"
                  >
                    Family planning guide: dietary needs, room blocks and guest
                    travel
                  </a>
                )}
                {intent.audience === "couple" && (
                  <a
                    className="block underline"
                    href="/nri-gujarati-wedding-timeline-12-months/"
                  >
                    Couple’s planning timeline: ceremonies, décor and attire
                  </a>
                )}
                {intent.high && (
                  <>
                    <a
                      className="block underline"
                      onClick={() => handoff("schedule_call")}
                      href="/schedule/?from=ai-concierge"
                    >
                      Book a free 30-minute call
                    </a>
                    <a
                      className="block underline"
                      onClick={() => handoff("whatsapp")}
                      href="https://wa.me/12153419990"
                    >
                      WhatsApp Mini directly
                    </a>
                  </>
                )}
              </aside>
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
                  aria-label="Your name"
                  placeholder="Your name"
                  className="mb-2 w-full rounded-lg border px-3 py-2 text-sm outline-none focus:border-[#7a6841]"
                  style={{ borderColor: "#e6dfd5" }}
                />
                <input
                  type="email"
                  value={leadEmail}
                  onChange={(e) => setLeadEmail(e.target.value)}
                  aria-label="Your email"
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
          <div
            className="border-t bg-white p-2"
            style={{ borderColor: "#e6dfd5" }}
          >
            <a
              onClick={() => handoff("schedule_call")}
              href={consultationBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 block text-center text-xs font-semibold underline"
              style={{ color: ACCENT }}
            >
              Book a free consultation on Google Calendar →
            </a>
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
                aria-label="Type your message…"
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
    </div>
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
