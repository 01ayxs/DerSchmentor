"use client";

import { FormEvent } from "react";
import { Send } from "lucide-react";
import { siteLinks } from "@/lib/site-data";
import { contactEndpoint, contactPayloadFromFormData } from "@/lib/contact";

export function ContactForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const payload = contactPayloadFromFormData(new FormData(event.currentTarget));
    const subject = `Anfrage über derschmentor.de von ${payload.name}`;
    const body = [`Name: ${payload.name}`, `E-Mail: ${payload.email}`, payload.company ? `Unternehmen: ${payload.company}` : "", "", payload.message]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${siteLinks.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} data-endpoint={contactEndpoint} className="grid gap-5" aria-describedby="form-notice">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="form-field">
          <span>Name</span>
          <input type="text" name="name" autoComplete="name" required placeholder="Dein Name" />
        </label>
        <label className="form-field">
          <span>E-Mail</span>
          <input type="email" name="email" autoComplete="email" required placeholder="du@beispiel.de" />
        </label>
      </div>
      <label className="form-field">
        <span>Unternehmen <em>optional</em></span>
        <input type="text" name="company" autoComplete="organization" placeholder="Unternehmen oder Marke" />
      </label>
      <label className="form-field">
        <span>Nachricht</span>
        <textarea name="message" required rows={6} placeholder="Erzähl uns von deiner Idee …" />
      </label>
      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
        <button type="submit" className="group inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-medium text-black transition-transform duration-300 hover:-translate-y-0.5">
          Nachricht senden
          <Send aria-hidden="true" className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
        <p id="form-notice" className="max-w-md text-xs leading-relaxed text-white/38">
          Öffnet dein E-Mail-Programm und adressiert die Nachricht an {siteLinks.contactEmail}.
        </p>
      </div>
    </form>
  );
}
