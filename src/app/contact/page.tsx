import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";
import { services, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Nabil Ibrahim-Oladosu for SEO anime, manga and gaming articles, rapid newsroom coverage, or content planning and research.",
};

const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);
const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export default function ContactPage() {
  return (
    <div className="page-enter">
      <section className="container contact-hero">
        <div>
          <span className="eyebrow">Contact</span>
          <h1 className="contact-title">Let&rsquo;s make something rank.</h1>
          <p className="contact-lede">
            Have a beat, a backlog of briefs, or a vertical that deserves more traffic? Tell me what you&rsquo;re building. Articles delivered within 24–48 hours.
          </p>
          <div className="contact-links">
            <a href={`mailto:${site.email}`} className="contact-link">
              <span className="contact-link-label">{site.email}</span>
              <ArrowIcon />
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener" className="contact-link">
              <span className="contact-link-label">LinkedIn</span>
              <ArrowIcon />
            </a>
            <a href={site.github} target="_blank" rel="noopener" className="contact-link">
              <span className="contact-link-label">GitHub</span>
              <ArrowIcon />
            </a>
          </div>
          <p className="contact-note">Available for freelance &amp; full-time writing roles, usually replying within a day.</p>
        </div>

        <div>
          <ContactForm />
        </div>
      </section>

      <section className="container services-section">
        <Reveal>
          <div className="services-head">
            <span className="section-kicker">What I offer</span>
            <h2 className="section-title" style={{ fontSize: "clamp(26px,3.4vw,40px)", maxWidth: "18ch" }}>
              Three ways to work together.
            </h2>
          </div>
        </Reveal>
        <div className="services-grid">
          {services.map((sv) => (
            <Reveal key={sv.t}>
              <div className="service-card">
                <h3 className="service-title">{sv.t}</h3>
                <p className="service-copy">{sv.d}</p>
                <div className="service-items">
                  {sv.items.map((it) => (
                    <div key={it} className="service-item">
                      <CheckIcon /> {it}
                    </div>
                  ))}
                </div>
                <div className="service-turn">
                  <span className="tag tag-accent-2">{sv.turn}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
