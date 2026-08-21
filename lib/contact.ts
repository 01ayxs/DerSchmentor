export type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  message: string;
};

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
  return (
    typeof payload.name === "string" &&
    payload.name.trim().length > 0 &&
    typeof payload.email === "string" &&
    payload.email.includes("@") &&
    typeof payload.message === "string" &&
    payload.message.trim().length > 0 &&
    (payload.company === undefined || typeof payload.company === "string")
  );
}
