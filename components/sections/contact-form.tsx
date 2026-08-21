"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { contactEndpoint, contactPayloadFromFormData } from "@/lib/contact";
import type { ContactResponse } from "@/lib/contact";

type FormStatus =
  | { state: "idle"; message: string }
  | { state: "submitting"; message: string }
  | { state: "success"; message: string }
  | { state: "error"; message: string };

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>({ state: "idle", message: "" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const payload = contactPayloadFromFormData(new FormData(form));
    setStatus({ state: "submitting", message: "Nachricht wird gesendet …" });

    try {
      const response = await fetch(contactEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json().catch(() => null)) as ContactResponse | null;

      if (!response.ok || !result?.success) {
        throw new Error(result?.message || "Die Nachricht konnte nicht gesendet werden.");
      }

      form.reset();
      setStatus({ state: "success", message: result.message });
    } catch (error) {
      setStatus({
        state: "error",
        message: error instanceof Error ? error.message : "Die Nachricht konnte nicht gesendet werden.",
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5" aria-describedby="form-status" aria-busy={status.state === "submitting"}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="form-field">
          <span>Name</span>
          <input type="text" name="name" autoComplete="name" required minLength={2} maxLength={120} placeholder="Dein Name" />
        </label>
        <label className="form-field">
          <span>E-Mail</span>
          <input type="email" name="email" autoComplete="email" required maxLength={254} placeholder="du@beispiel.de" />
        </label>
      </div>
      <label className="form-field">
        <span>Unternehmen <em>optional</em></span>
        <input type="text" name="company" autoComplete="organization" maxLength={160} placeholder="Unternehmen oder Marke" />
      </label>
      <label className="form-field">
        <span>Nachricht</span>
        <textarea name="message" required minLength={10} maxLength={5000} rows={6} placeholder="Erzähl uns von deiner Idee …" />
      </label>
      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status.state === "submitting"}
          className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-medium text-black transition-[transform,opacity] duration-300 hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-60 disabled:hover:translate-y-0"
        >
          {status.state === "submitting" ? "Wird gesendet …" : "Nachricht senden"}
          <Send aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
        <p
          id="form-status"
          role={status.state === "error" ? "alert" : "status"}
          aria-live="polite"
          className={`max-w-md text-xs leading-relaxed ${status.state === "success" ? "text-white/72" : status.state === "error" ? "text-white/62" : "text-white/38"}`}
        >
          {status.message || "Deine Nachricht wird sicher über das Kontaktformular gesendet."}
        </p>
      </div>
    </form>
  );
}
