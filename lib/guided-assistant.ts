import { GOOGLE_CALENDAR_BOOKING_URL } from "@/lib/consultation-booking";

export type GuidedAssistantTopicId =
  | "destination-planning"
  | "feasibility-plan"
  | "india-sourcing"
  | "jain-catering";

export type GuidedAssistantTopic = {
  id: GuidedAssistantTopicId;
  label: string;
  question: string;
  answer: string;
};

export type GuidedAssistantAction = {
  id: "book-call" | "whatsapp-mini" | "view-pricing";
  label: string;
  href: string;
  phone?: string;
  external: boolean;
};

export const MINI_WHATSAPP_DISPLAY = "+1 (215) 341-9990";
export const MINI_WHATSAPP_URL = "https://wa.me/12153419990";
export const PRICING_PATH = "/pricing/";

export const GUIDED_ASSISTANT_ACTIONS: readonly GuidedAssistantAction[] = [
  {
    id: "book-call",
    label: "Book Free 30-Min Call",
    href: GOOGLE_CALENDAR_BOOKING_URL,
    external: true,
  },
  {
    id: "whatsapp-mini",
    label: `WhatsApp Mini (${MINI_WHATSAPP_DISPLAY})`,
    href: MINI_WHATSAPP_URL,
    phone: MINI_WHATSAPP_DISPLAY,
    external: true,
  },
  {
    id: "view-pricing",
    label: "View Pricing",
    href: PRICING_PATH,
    external: false,
  },
] as const;

export const GUIDED_ASSISTANT_TOPICS: readonly GuidedAssistantTopic[] = [
  {
    id: "destination-planning",
    label: "Mexico, Jamaica & Punta Cana planning",
    question: "How does planning work for Mexico, Jamaica, or Punta Cana?",
    answer:
      "CeremonyVerse plans Gujarati and Hindu multi-day destination weddings across Mexico (Cancún, Riviera Maya, Los Cabos, and Puerto Vallarta), Jamaica, and Punta Cana for families across the US and Canada. Published starting packages are $4,000 for Event Coordination & Management, $5,500 for Partial Planning & Coordination, and $8,000 for Full Planning & Design—covering resort proposal comparisons, room-block terms, ceremony permissions, and family logistics.",
  },
  {
    id: "feasibility-plan",
    label: "$300 Feasibility & Action Plan (Venmo)",
    question: "How does the $300 Feasibility & Action Plan work?",
    answer:
      "Start with a free 30-minute consultation on Google Calendar. If you want a written decision before committing to full planning, the optional $300 Destination Wedding Feasibility & Action Plan includes a 60-minute working session, line-by-line review of up to two current resort proposals, hidden-fee and guest-budget analysis, a written action brief, and a 20-minute follow-up. After you approve the written scope, Mini shares direct payment instructions (including Venmo for interested clients), and 100% of the $300 fee is credited toward a CeremonyVerse planning contract signed within 30 days after plan delivery.",
  },
  {
    id: "india-sourcing",
    label: "$799 Guided India Sourcing",
    question: "How does $799 Guided India Sourcing work for outfits and favors?",
    answer:
      "CeremonyVerse offers flat-fee India wardrobe and wedding-favor sourcing for US and Canadian families with zero percentage markup on garments. Guided Sourcing ($799) includes a written style and ceremony brief, 2–4 live video shopping sessions, measurement coordination, written approvals, pre-shipping review, and US/Canada shipping and customs tracking support. Full Bridal Concierge ($2,499) extends coordination to the bride, groom, and wedding party of up to eight people.",
  },
  {
    id: "jain-catering",
    label: "Jain, satvik & Gujarati catering",
    question: "How do resorts handle Jain, satvik, and Gujarati catering?",
    answer:
      "All-inclusive resorts in Mexico, Jamaica, and Punta Cana generally follow one of three paths for Gujarati, vegetarian, Jain, and satvik menus: (1) an in-house South Asian banquet kitchen, (2) a resort-approved outside Indian caterer, or (3) flying in an outside specialty chef with written kitchen-access permission. Before you sign a resort contract, CeremonyVerse helps you confirm dish-by-dish Jain (no root vegetables), satvik (no onion or garlic), prasad, and dedicated cookware requirements in writing.",
  },
] as const;

export const GUIDED_ASSISTANT_OVERVIEW =
  "Here is how CeremonyVerse can help right away:\n\n" +
  "1. Mexico, Jamaica & Punta Cana Planning: Multi-day Gujarati and Hindu destination wedding planning starting at $4,000 (Event Coordination), $5,500 (Partial Planning), and $8,000 (Full Planning & Design).\n" +
  "2. $300 Feasibility & Action Plan: A 60-minute working session and written action brief reviewing up to two resort proposals, hidden fees, and your guest budget—payable via Venmo after written scope approval, and 100% credited toward planning when you sign within 30 days.\n" +
  "3. $799 Guided India Sourcing: Flat-fee bridal, groom, wedding-party outfit, and favor sourcing from India ($799 Guided Sourcing; $2,499 Full Bridal Concierge for up to 8 people) with no percentage commission.\n" +
  "4. Jain, Satvik & Gujarati Catering: Written verification of in-house South Asian kitchens, approved outside Indian caterers, or outside-chef access, plus Jain/satvik cookware terms before you sign.\n\n" +
  `Tap any topic below, book a free 30-minute call on Google Calendar (${GOOGLE_CALENDAR_BOOKING_URL}), WhatsApp Mini at ${MINI_WHATSAPP_DISPLAY}, or view full pricing at ${PRICING_PATH}.`;

export function matchGuidedAssistantTopic(
  input: string,
): GuidedAssistantTopic | null {
  const normalized = input.trim().toLowerCase();
  if (!normalized) return null;

  for (const topic of GUIDED_ASSISTANT_TOPICS) {
    if (
      normalized === topic.id ||
      normalized === topic.label.toLowerCase() ||
      normalized === topic.question.toLowerCase()
    ) {
      return topic;
    }
  }

  const scores: Record<GuidedAssistantTopicId, number> = {
    "destination-planning": 0,
    "feasibility-plan": 0,
    "india-sourcing": 0,
    "jain-catering": 0,
  };

  if (
    /\$300|\b300\b|feasibility|action plan|venmo|proposal|proposals|quote|quotes|30[\s-]*day|credit/.test(
      normalized,
    )
  ) {
    scores["feasibility-plan"] += 3;
  }

  if (
    /\$799|\b799\b|\$2,?499|\b2499\b|sourcing|lehenga|sherwani|saree|sari|outfit|outfits|attire|wardrobe|india|favor|favors|bridal concierge/.test(
      normalized,
    )
  ) {
    scores["india-sourcing"] += 3;
  }

  if (
    /\bjain\b|satvik|sattvik|catering|caterer|food|menu|chef|kitchen|vegetarian|onion|garlic|prasad|cookware/.test(
      normalized,
    )
  ) {
    scores["jain-catering"] += 3;
  }

  if (
    /mexico|cancun|cancún|riviera maya|los cabos|cabo|puerto vallarta|jamaica|punta cana|destination|resort|room[\s-]*block|\$4,?000|\$5,?500|\$8,?000|coordination|full planning|partial planning/.test(
      normalized,
    )
  ) {
    scores["destination-planning"] += 2;
  }

  const ranked = (Object.entries(scores) as [GuidedAssistantTopicId, number][])
    .filter(([, score]) => score > 0)
    .sort((a, b) => b[1] - a[1]);

  if (
    ranked.length === 1 ||
    (ranked.length > 1 && ranked[0][1] > ranked[1][1])
  ) {
    const winningId = ranked[0][0];
    return GUIDED_ASSISTANT_TOPICS.find((t) => t.id === winningId) ?? null;
  }

  return null;
}

export type GuidedAssistantResponse = {
  reply: string;
  conversationId: string;
  mode: "guided";
  topicId: GuidedAssistantTopicId | "overview";
  quickReplies: readonly GuidedAssistantTopic[];
  actions: readonly GuidedAssistantAction[];
};

export function buildGuidedAssistantResponse(
  message: string,
  sessionId?: string,
): GuidedAssistantResponse {
  const matched = matchGuidedAssistantTopic(message);
  const conversationId =
    sessionId && sessionId.trim() ? sessionId.trim() : "guided-concierge";

  if (matched) {
    return {
      reply: matched.answer,
      conversationId,
      mode: "guided",
      topicId: matched.id,
      quickReplies: GUIDED_ASSISTANT_TOPICS,
      actions: GUIDED_ASSISTANT_ACTIONS,
    };
  }

  return {
    reply: GUIDED_ASSISTANT_OVERVIEW,
    conversationId,
    mode: "guided",
    topicId: "overview",
    quickReplies: GUIDED_ASSISTANT_TOPICS,
    actions: GUIDED_ASSISTANT_ACTIONS,
  };
}

const RATE_LIMIT = 30;
const RATE_WINDOW_MS = 60_000;
const rateBuckets = new Map<string, { count: number; resetAt: number }>();

export function isChatRateLimited(ip: string): boolean {
  const now = Date.now();
  for (const [key, bucket] of rateBuckets) {
    if (now > bucket.resetAt) rateBuckets.delete(key);
  }
  const bucket = rateBuckets.get(ip);
  if (!bucket || now > bucket.resetAt) {
    rateBuckets.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  bucket.count += 1;
  return bucket.count > RATE_LIMIT;
}

export function resetChatRateLimiterForTests(): void {
  rateBuckets.clear();
}
