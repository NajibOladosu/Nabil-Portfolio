"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/data";

type FormState = { name: string; email: string; project: string };
type Errors = Partial<Record<keyof FormState, string>>;

const ArrowIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
const CheckIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--color-bg)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
// FormSubmit forwards the submission to this inbox. The first ever submission sends an activation email there.
const ENDPOINT = `https://formsubmit.co/ajax/${site.email}`;

export function ContactForm({
  subject = "New message from your writing portfolio",
  emailPlaceholder = "you@publication.com",
  projectLabel = "About the project",
  projectPlaceholder = "A gaming vertical that needs evergreen guides...",
}: {
  subject?: string;
  emailPlaceholder?: string;
  projectLabel?: string;
  projectPlaceholder?: string;
}) {
  const [form, setForm] = useState<FormState>({ name: "", email: "", project: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "failed">("idle");

  const setField = (key: keyof FormState, value: string) => {
    setForm((s) => ({ ...s, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const next: Errors = {};
    if (!form.name.trim()) next.name = "Tell me your name";
    if (!EMAIL_RE.test(form.email)) next.email = "A valid email, please";
    if (!form.project.trim() || form.project.trim().length < 10) next.project = "A sentence or two about the work";
    if (Object.keys(next).length) {
      setErrors(next);
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.project.trim(),
          _subject: subject,
          _template: "table",
          _captcha: "false",
          _honey: new FormData(e.currentTarget).get("_honey") ?? "",
        }),
      });
      const data = await res.json().catch(() => ({}));
      setStatus(res.ok && String(data.success) === "true" ? "sent" : "failed");
    } catch {
      setStatus("failed");
    }
  };

  const resetForm = () => {
    setStatus("idle");
    setForm({ name: "", email: "", project: "" });
    setErrors({});
  };

  if (status === "sent") {
    return (
      <div className="contact-sent">
        <div className="contact-sent-icon">
          <CheckIcon />
        </div>
        <h3 className="contact-sent-title">Message sent.</h3>
        <p className="contact-sent-copy">Thanks! I&rsquo;ll get back to you within a day. In the meantime, feel free to browse the work.</p>
        <button type="button" onClick={resetForm} className="btn btn-secondary" style={{ marginTop: 22 }}>
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="contact-form">
      {/* Spam trap: hidden from people, filled in by bots. */}
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: "none" }} />
      <div className="field">
        <label htmlFor="name">Your name</label>
        <input
          id="name"
          className="input"
          type="text"
          value={form.name}
          onChange={(e) => setField("name", e.target.value)}
          placeholder="Jane Ito"
        />
        {errors.name && <div className="field-error">{errors.name}</div>}
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          className="input"
          type="email"
          value={form.email}
          onChange={(e) => setField("email", e.target.value)}
          placeholder={emailPlaceholder}
        />
        {errors.email && <div className="field-error">{errors.email}</div>}
      </div>
      <div className="field">
        <label htmlFor="project">{projectLabel}</label>
        <textarea
          id="project"
          className="input"
          value={form.project}
          onChange={(e) => setField("project", e.target.value)}
          placeholder={projectPlaceholder}
        />
        {errors.project && <div className="field-error">{errors.project}</div>}
      </div>
      {status === "failed" && (
        <div className="field-error" role="alert" style={{ marginBottom: 14 }}>
          That didn&rsquo;t go through. Please try again, or <a href={`mailto:${site.email}`}>email me directly</a>.
        </div>
      )}
      <button type="submit" className="btn btn-primary btn-block" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : <>Send it over <ArrowIcon /></>}
      </button>
    </form>
  );
}
