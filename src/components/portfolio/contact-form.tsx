"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";

const recipient = "adithiruthiparambil12@gmail.com";

type FormState = { message: string; error: boolean };

export function ContactForm() {
  const [status, setStatus] = useState<FormState | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) {
      setStatus({ message: "Please check the highlighted fields and complete your name, a valid email, and a message.", error: true });
      return;
    }

    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setStatus({ message: "Please complete all three fields before continuing.", error: true });
      return;
    }

    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    try {
      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
      setStatus({
        message: "Your email app should open with this draft. Review it and press Send there; nothing is sent from this site.",
        error: false,
      });
    } catch {
      setStatus({
        message: `Could not open an email draft. Please email ${recipient} directly instead.`,
        error: true,
      });
    }
  }

  return (
    <div className="contact-form-wrap">
      <form className="contact-form" onSubmit={handleSubmit} noValidate suppressHydrationWarning>
        <div className="form-field">
          <label htmlFor="contact-name">Name</label>
          <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Your name" required minLength={2} maxLength={80} suppressHydrationWarning />
        </div>
        <div className="form-field">
          <label htmlFor="contact-email">Email</label>
          <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254} suppressHydrationWarning />
        </div>
        <div className="form-field">
          <label htmlFor="contact-message">Message</label>
          <textarea id="contact-message" name="message" placeholder="Tell me a little about what you're building…" required minLength={8} maxLength={3000} rows={5} suppressHydrationWarning />
        </div>
        <button className="button button-primary contact-submit" type="submit" suppressHydrationWarning>
          Let's Talk <ArrowUpRight size={16} aria-hidden="true" />
        </button>
        <p className="form-note">This form opens a prepared draft in your email app. You'll send it from there.</p>
        <p className="form-status" role="status" aria-live="polite" data-error={status?.error ? "true" : "false"}>
          {status?.message ?? ""}
        </p>
      </form>
    </div>
  );
}
