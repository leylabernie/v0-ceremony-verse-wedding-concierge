import { NextRequest, NextResponse } from "next/server";
import { createHash } from "crypto";

/**
 * Lead Capture API Route
 *
 * Accepts lead submissions from:
 * - Exit-intent popup (email only)
 * - Style quiz (email + phone + quiz answers)
 * - Any future lead forms
 *
 * Sends to Mailchimp with appropriate tags and merge fields.
 * Falls back gracefully if Mailchimp is not configured.
 */

const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY || "";
const MAILCHIMP_SERVER = process.env.MAILCHIMP_SERVER || "us4";
const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID || "";

type LeadSource = "exit_popup" | "style_quiz" | "sticky_cta" | "free_guide";

interface LeadPayload {
  email: string;
  firstName?: string;
  phone?: string;
  source: LeadSource;
  quizAnswers?: {
    style?: string;
    tradition?: string;
    budget?: string;
    timeline?: string;
    wantsChecklist?: boolean;
  };
}

const VALID_SOURCES: LeadSource[] = [
  "exit_popup",
  "style_quiz",
  "sticky_cta",
  "free_guide",
];

export async function POST(req: NextRequest) {
  try {
    const body: LeadPayload = await req.json();
    const { email, firstName, phone, source, quizAnswers } = body;

    // ── Validate required fields ──
    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!source || !VALID_SOURCES.includes(source)) {
      return NextResponse.json(
        { success: false, error: "Invalid lead source." },
        { status: 400 }
      );
    }

    // ── Build Mailchimp tags based on source ──
    const tags: string[] = [source];

    if (quizAnswers) {
      if (quizAnswers.style) tags.push(`style_${quizAnswers.style}`);
      if (quizAnswers.tradition) tags.push(`trad_${quizAnswers.tradition}`);
      if (quizAnswers.budget) tags.push(`budget_${quizAnswers.budget}`);
      if (quizAnswers.timeline) tags.push(`timeline_${quizAnswers.timeline}`);
      if (quizAnswers.wantsChecklist) tags.push("wants_checklist");
    }

    // ── If Mailchimp is configured, send the lead ──
    if (MAILCHIMP_API_KEY && MAILCHIMP_AUDIENCE_ID) {
      const authString = Buffer.from(
        `anystring:${MAILCHIMP_API_KEY}`
      ).toString("base64");

      const mergeFields: Record<string, string> = {
        SOURCE: source,
      };

      if (firstName) {
        mergeFields.FNAME = firstName;
      }

      if (phone) {
        mergeFields.PHONE = phone;
      }

      if (quizAnswers?.style) {
        mergeFields.STYLE = quizAnswers.style;
      }

      if (quizAnswers?.tradition) {
        mergeFields.TRAD = quizAnswers.tradition;
      }

      if (quizAnswers?.budget) {
        mergeFields.BUDGET = quizAnswers.budget;
      }

      if (quizAnswers?.timeline) {
        mergeFields.TLINE = quizAnswers.timeline;
      }

      const mcResponse = await fetch(
        `https://${MAILCHIMP_SERVER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members`,
        {
          method: "POST",
          headers: {
            Authorization: `Basic ${authString}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email_address: email,
            status: "subscribed",
            tags,
            merge_fields: mergeFields,
          }),
        }
      );

      if (!mcResponse.ok) {
        const errorData = await mcResponse.json();

        // Member already exists — update their tags instead
        if (
          mcResponse.status === 400 &&
          errorData?.title === "Member Exists"
        ) {
          const subscriberHash = createHash("md5")
            .update(email.toLowerCase())
            .digest("hex");

          await fetch(
            `https://${MAILCHIMP_SERVER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_AUDIENCE_ID}/members/${subscriberHash}/tags`,
            {
              method: "POST",
              headers: {
                Authorization: `Basic ${authString}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                tags: tags.map((t) => ({ name: t, status: "active" })),
              }),
            }
          );

          return NextResponse.json({
            success: true,
            message: "Lead updated with new tags.",
          });
        }

        console.error("Mailchimp error:", errorData);
        return NextResponse.json(
          {
            success: false,
            error: "Something went wrong. Please try again.",
          },
          { status: 500 }
        );
      }

      return NextResponse.json({
        success: true,
        message: "Lead captured successfully.",
      });
    }

    // ── Mailchimp not configured — log and return success anyway ──
    console.log(
      `[LEAD CAPTURE] source=${source} email=${email} name=${firstName || ""} phone=${phone || ""}`,
      quizAnswers ? `quiz=${JSON.stringify(quizAnswers)}` : ""
    );

    return NextResponse.json({
      success: true,
      message:
        "Lead received (Mailchimp not configured — check server logs).",
    });
  } catch (error) {
    console.error("Lead capture error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error." },
      { status: 500 }
    );
  }
}
