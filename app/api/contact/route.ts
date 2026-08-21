import { isContactPayload } from "@/lib/contact";

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  if (!isContactPayload(payload)) {
    return Response.json({ error: "Bitte alle Pflichtfelder korrekt ausfüllen." }, { status: 400 });
  }

  // Künftiger Integrationspunkt: validierte Daten an Resend übergeben.
  return Response.json({ error: "Der E-Mail-Versand ist noch nicht aktiviert." }, { status: 501 });
}
