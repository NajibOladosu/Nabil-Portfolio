"use client";

import { useState, type FormEvent } from "react";

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

export function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", project: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const setField = (key: keyof FormState, value: string) => {
    setForm((s) => ({ ...s, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next: Errors = {};
    if (!form.name.trim()) next.name = "Tell me your name";
    if (!EMAIL_RE.test(form.email)) next.email = "A valid email, please";
    if (!form.project.trim() || form.project.trim().length < 10) next.project = "A sentence or two about the work";
    if (Object.keys(next).length) {
      setErrors(next);
      return;
    }
    setSent(true);
  };

  const resetForm = () => {
    setSent(false);
    setForm({ name: "", email: "", project: "" });
    setErrors({});
  };

  if (sent) {
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
          placeholder="you@publication.com"
        />
        {errors.email && <div className="field-error">{errors.email}</div>}
      </div>
      <div className="field">
        <label htmlFor="project">About the project</label>
        <textarea
          id="project"
          className="input"
          value={form.project}
          onChange={(e) => setField("project", e.target.value)}
          placeholder="A gaming vertical that needs evergreen guides..."
        />
        {errors.project && <div className="field-error">{errors.project}</div>}
      </div>
      <button type="submit" className="btn btn-primary btn-block">
        Send it over <ArrowIcon />
      </button>
    </form>
  );
}
