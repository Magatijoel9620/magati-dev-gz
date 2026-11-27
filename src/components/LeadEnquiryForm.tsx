"use client";

import { useState } from "react";
import type { FormEvent } from "react";

const serviceOptions = [
  "Website development",
  "Custom software & business systems",
  "Mobile app development",
  "Business automation",
  "AI solutions & integrations",
  "Digital product design",
  "Not sure yet",
];

type FormState = "idle" | "sending" | "success" | "error";

export default function LeadEnquiryForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (state === "sending") return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setState("sending");
    setMessage("Sending your enquiry…");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Your enquiry could not be sent. Please use the email link below.");
      }

      form.reset();
      setState("success");
      setMessage("Thanks. Your enquiry has been sent to the Hempon Group team.");
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please use the email link below.");
    }
  }

  const fieldClass = "mt-2 w-full rounded-2xl border border-white/12 bg-black/25 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-[#d7ff65]/60 focus:ring-2 focus:ring-[#d7ff65]/10";
  const labelClass = "block text-xs font-medium tracking-wide text-white/70";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" aria-describedby="enquiry-privacy enquiry-status">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={labelClass}>
          Your name <span className="text-[#d7ff65]">*</span>
          <input className={fieldClass} name="name" autoComplete="name" minLength={2} maxLength={100} required placeholder="How should we address you?" />
        </label>
        <label className={labelClass}>
          Email address <span className="text-[#d7ff65]">*</span>
          <input className={fieldClass} type="email" name="email" autoComplete="email" maxLength={254} required placeholder="you@company.com" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className={labelClass}>
          Organisation <span className="font-normal text-white/30">(optional)</span>
          <input className={fieldClass} name="organisation" autoComplete="organization" maxLength={120} placeholder="Business or organisation" />
        </label>
        <label className={labelClass}>
          What can we help with?
          <select className={fieldClass} name="service" defaultValue="Not sure yet">
            {serviceOptions.map((option) => <option key={option} value={option} className="bg-[#101213]">{option}</option>)}
          </select>
        </label>
      </div>

      <label className={labelClass}>
        Tell us a little about the project <span className="text-[#d7ff65]">*</span>
        <textarea className={`${fieldClass} min-h-36 resize-y`} name="message" minLength={20} maxLength={5000} required placeholder="What are you trying to achieve, what is getting in the way, and what would a useful outcome look like?" />
      </label>

      {/* Honeypot: legitimate visitors should never fill this field. */}
      <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label>Leave this field empty<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p id="enquiry-privacy" className="max-w-md text-xs leading-5 text-white/35">Your details are used to respond to this enquiry. Please do not include passwords, payment details or other sensitive information.</p>
        <button type="submit" disabled={state === "sending"} className="ui-btn-primary inline-flex shrink-0 items-center justify-center rounded-full bg-[#d7ff65] px-7 py-3.5 text-sm font-semibold text-[#08090a] disabled:cursor-wait disabled:opacity-60">
          {state === "sending" ? "Sending…" : "Send enquiry ↗"}
        </button>
      </div>
      <p id="enquiry-status" role="status" aria-live="polite" className={`min-h-5 text-sm ${state === "error" ? "text-amber-200" : state === "success" ? "text-[#d7ff65]" : "text-white/45"}`}>
        {message}
      </p>
      <p className="text-xs text-white/35">Prefer email? <a className="text-white/70 underline decoration-white/25 underline-offset-4 hover:text-[#d7ff65]" href="mailto:hempongroup@gmail.com?subject=Project%20enquiry%20%E2%80%94%20Hempon.dev">hempongroup@gmail.com</a></p>
    </form>
  );
}
