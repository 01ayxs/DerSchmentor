import { Resend } from "resend";
import { isContactPayload } from "@/lib/contact";
import type { ContactResponse } from "@/lib/contact";
import { createContactEmail } from "@/lib/server/contact-email";

const recipient = "business.derschmentor@gmail.com";

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
  const fromEmail = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !fromEmail) {
    console.error("Resend environment variables are not configured.");
    return json({ success: false, message: "Der E-Mail-Versand ist momentan nicht verfügbar." }, 503);
  }

  const resend = new Resend(apiKey);
  const email = createContactEmail(payload);

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: recipient,
      replyTo: payload.email.trim(),
      subject: email.subject,
      html: email.html,
      text: email.text,
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
