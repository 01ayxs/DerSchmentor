import { Resend } from "resend";
import { isContactPayload } from "@/lib/contact";
import type { ContactResponse } from "@/lib/contact";

const recipient = "business.derschmentor@gmail.com";
const defaultSender = "DerSchmentor Website <onboarding@resend.dev>";

function json(body: ContactResponse, status = 200) {
  return Response.json(body, { status });
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return json({ success: false, message: "Die Anfrage konnte nicht gelesen werden." }, 400);
  }

  if (!isContactPayload(payload)) {
    return json({ success: false, message: "Bitte überprüfe deine Angaben und versuche es erneut." }, 400);
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured.");
    return json({ success: false, message: "Der E-Mail-Versand ist momentan nicht verfügbar." }, 503);
  }

  const resend = new Resend(apiKey);
  const safeName = payload.name.replace(/[\r\n]+/g, " ").trim();
  const lines = [
    "Neue Kontaktanfrage über derschmentor.com",
    "",
    `Name: ${safeName}`,
    `E-Mail: ${payload.email}`,
    ...(payload.company ? [`Unternehmen: ${payload.company}`] : []),
    "",
    "Nachricht:",
    payload.message,
  ];

  try {
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? defaultSender,
      to: recipient,
      replyTo: payload.email.trim(),
      subject: `Neue Anfrage von ${safeName}`,
      text: lines.join("\n"),
    });

    if (error) {
      console.error("Resend rejected the contact email:", error.message);
      return json({ success: false, message: "Die Nachricht konnte nicht gesendet werden. Bitte versuche es später erneut." }, 502);
    }

    return json({ success: true, message: "Danke! Deine Nachricht wurde erfolgreich gesendet." });
  } catch (error) {
    console.error("Contact email delivery failed:", error);
    return json({ success: false, message: "Die Nachricht konnte nicht gesendet werden. Bitte versuche es später erneut." }, 500);
  }
}
