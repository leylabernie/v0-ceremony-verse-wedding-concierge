import { NextRequest, NextResponse } from "next/server";

const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY || "";
const MAILCHIMP_SERVER = process.env.MAILCHIMP_SERVER || "us4";
const MAILCHIMP_AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID || "48853424d9";

const guidePdfMap: Record<string, string> = {
  "price-guide": "/india-sourcing-price-guide.pdf",
  "checklist": "/wedding-outfit-checklist.pdf",
  "timeline": "/wedding-outfit-checklist.pdf",
  "vendor-flags": "/wedding-outfit-checklist.pdf",
};

const validGuides = Object.keys(guidePdfMap);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, guide } = body;

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!guide || !validGuides.includes(guide)) {
      return NextResponse.json(
        { success: false, error: "Invalid guide selection." },
        { status: 400 }
      );
    }

    const downloadUrl = guidePdfMap[guide];

    // Call Mailchimp API
    const authString = Buffer.from(`anystring:${MAILCHIMP_API_KEY}`).toString("base64");

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
          tags: [guide],
          merge_fields: {
            FNAME: "",
            SOURCE: "free-guides",
          },
        }),
      }
    );

    if (!mcResponse.ok) {
      const errorData = await mcResponse.json();

      // Member already exists — still return success
      if (
        mcResponse.status === 400 &&
        errorData?.title === "Member Exists"
      ) {
        return NextResponse.json({ success: true, downloadUrl });
      }

      console.error("Mailchimp error:", errorData);
      return NextResponse.json(
        { success: false, error: "Something went wrong. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, downloadUrl });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error." },
      { status: 500 }
    );
  }
}
