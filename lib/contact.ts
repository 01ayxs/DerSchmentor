export type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  message: string;
};

export type ContactResponse =
  | { success: true; message: string }
  | { success: false; message: string };

export const contactEndpoint = "/api/contact";

export function contactPayloadFromFormData(formData: FormData): ContactPayload {
  const company = String(formData.get("company") ?? "").trim();

  return {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    ...(company ? { company } : {}),
    message: String(formData.get("message") ?? "").trim(),
  };
}

export function isContactPayload(value: unknown): value is ContactPayload {
  if (!value || typeof value !== "object") return false;

  const payload = value as Partial<ContactPayload>;
  const email = typeof payload.email === "string" ? payload.email.trim() : "";

  return (
    typeof payload.name === "string" &&
    payload.name.trim().length >= 2 &&
    payload.name.trim().length <= 120 &&
    email.length <= 254 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
    typeof payload.message === "string" &&
    payload.message.trim().length >= 10 &&
    payload.message.trim().length <= 5000 &&
    (payload.company === undefined || (typeof payload.company === "string" && payload.company.length <= 160))
  );
}
