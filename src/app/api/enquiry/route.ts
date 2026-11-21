import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const MAX_BODY_BYTES = 12_000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ALLOWED_SERVICES = new Set([
  "Website development",
  "Custom software & business systems",
  "Mobile app development",
  "Business automation",
  "AI solutions & integrations",
  "Digital product design",
  "Not sure yet",
]);

function clean(value: unknown, maxLength: number): string {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character] ?? character);
}

export async function POST(request: NextRequest) {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json({ message: "The enquiry is too large. Please shorten it and try again." }, { status: 413 });
  }

  const origin = request.headers.get("origin");
  const host = request.headers.get("x-forwarded-host") || request.headers.get("host");
  if (origin && host) {
    try {
      if (new URL(origin).host !== host) {
        return NextResponse.json({ message: "This request could not be verified. Please refresh the page and try again." }, { status: 403 });
      }
    } catch {
      return NextResponse.json({ message: "This request could not be verified." }, { status: 403 });
    }
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json() as Record<string, unknown>;
  } catch {
    return NextResponse.json({ message: "Please check the form and try again." }, { status: 400 });
  }

  // Silently accept bot submissions without forwarding them.
  if (clean(body.website, 200)) {
    return NextResponse.json({ message: "Thanks. Your enquiry has been received." });
  }

  const name = clean(body.name, 100);
  const email = clean(body.email, 254).toLowerCase();
  const organisation = clean(body.organisation, 120);
  const service = clean(body.service, 100);
  const message = clean(body.message, 5000);

  if (name.length < 2 || !EMAIL_PATTERN.test(email) || message.length < 20) {
    return NextResponse.json({ message: "Please provide your name, a valid email and a project message of at least 20 characters." }, { status: 400 });
  }
  if (!ALLOWED_SERVICES.has(service)) {
    return NextResponse.json({ message: "Please choose a valid service area." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ message: "The enquiry service is not configured yet. Please email hempongroup@gmail.com directly." }, { status: 503 });
  }

  const recipient = process.env.ENQUIRY_TO_EMAIL || process.env.CONTACT_TO_EMAIL || "hempongroup@gmail.com";
  const sender = process.env.RESEND_FROM_EMAIL || process.env.CONTACT_FROM_EMAIL || "Hempon Group <noreply@hempongroup.co.ke>";
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeOrganisation = escapeHtml(organisation || "Not provided");
  const safeService = escapeHtml(service);
  const safeMessage = escapeHtml(message).replace(/\r?\n/g, "<br>");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        reply_to: email,
        subject: `New Hempon.dev enquiry: ${service}`,
        text: `New project enquiry\n\nName: ${name}\nEmail: ${email}\nOrganisation: ${organisation || "Not provided"}\nService: ${service}\n\nMessage:\n${message}`,
        html: `<h2>New project enquiry</h2><p><strong>Name:</strong> ${safeName}</p><p><strong>Email:</strong> ${safeEmail}</p><p><strong>Organisation:</strong> ${safeOrganisation}</p><p><strong>Service:</strong> ${safeService}</p><hr><p>${safeMessage}</p>`,
      }),
      cache: "no-store",
    });

 if (!response.ok) {
  const resendError = await response.text();

  console.error(
    "Portfolio enquiry rejected by Resend:",
    response.status,
    resendError
  );

  return NextResponse.json(
    {
      message:
        "We could not deliver your enquiry just now. Please email hempongroup@gmail.com directly.",
    },
    { status: 502 }
  );
}

    return NextResponse.json({ message: "Your enquiry has been sent." });
  } catch {
    return NextResponse.json({ message: "We could not deliver your enquiry just now. Please email hempongroup@gmail.com directly." }, { status: 502 });
  }
}
