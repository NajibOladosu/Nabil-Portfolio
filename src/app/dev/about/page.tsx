import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { site, education } from "@/lib/data";
import { WRITING_URL, devPillars, aiPhases, stack, devExperience } from "@/lib/dev-data";

export const metadata: Metadata = {
  title: "About",
  description: "Nabil Ibrahim-Oladosu, a full-stack software engineer who came to software from mechanical engineering, working across Angular, Ionic, Node, Go and AWS.",
};

const ArrowIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function DevAboutPage() {
  return (
    <div className="page-enter">
      <section className="container about-hero">
        <Reveal>
          <figure className="about-portrait">
            <div className="about-portrait-inner" aria-label="Portrait of Nabil">
              N
            </div>
          </figure>
        </Reveal>
        <div>
          <span className="eyebrow">About · Lagos, Nigeria</span>
          <h1 className="about-title">{site.fullName}.</h1>
          <p className="about-copy">
            I&rsquo;m a full-stack software engineer at Tireda Technologies. I work across Angular and Ionic frontends, Node and Go APIs, and the AWS infrastructure under them, and I take features from the API contract all the way to release.
          </p>
          <p className="about-copy">
            I came to software from mechanical engineering. I started with small Unity games, moved into Angular, and now spend as much time on queues, payment webhooks and database connections as on the screens people tap.
          </p>
          <p className="about-copy">
            I also write professionally, with 600+ published articles, so I can explain technical work clearly to people who aren&rsquo;t engineers. That side of my work lives in my{" "}
            <a href={WRITING_URL} style={{ color: "var(--color-accent)" }}>
              writing portfolio
            </a>
            .
          </p>
        </div>
      </section>

      <section className="container pillars">
        <div className="pillars-grid">
          {devPillars.map((p) => (
            <Reveal key={p.num}>
              <div className="pillar-num">{p.num}</div>
              <h3 className="pillar-title">{p.title}</h3>
              <p className="pillar-copy">{p.copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container section" style={{ paddingTop: "clamp(24px,4vw,56px)" }}>
        <Reveal>
          <div style={{ marginBottom: 26 }}>
            <span className="section-kicker">How I work with AI</span>
            <h2 className="section-title" style={{ fontSize: "clamp(26px,3.4vw,40px)", maxWidth: "20ch" }}>
              A pair programmer I review, not an autopilot.
            </h2>
          </div>
        </Reveal>
        <div className="phase-grid">
          {aiPhases.map((ph) => (
            <Reveal key={ph.p}>
              <div className="phase-card">
                <span className="tag tag-accent">{ph.m}</span>
                <h3 className="phase-title">{ph.p}</h3>
                <p className="phase-copy">{ph.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container side-by-side">
        <Reveal>
          <span className="side-label">Toolkit</span>
          <div className="skills-cloud">
            {stack.map((sk) => (
              <span key={sk} className="tag tag-neutral">
                {sk}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <span className="side-label">Experience</span>
          <div className="timeline">
            {devExperience.map((e) => (
              <div key={e.role} className="timeline-row">
                <div className="timeline-top">
                  <span className="timeline-role">{e.role}</span>
                  <span className="timeline-time">{e.time}</span>
                </div>
                <div className="timeline-org">{e.org}</div>
                <p className="timeline-note">{e.note}</p>
              </div>
            ))}
            <div className="timeline-row">
              <div className="timeline-top">
                <span className="timeline-role">{education.deg}</span>
                <span className="timeline-time">{education.time}</span>
              </div>
              <div className="timeline-org">{education.school} · Second Class Upper</div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container cta-section">
        <Reveal>
          <div className="cta-banner cta-banner--split">
            <h2 className="cta-title cta-title--sm">Let&rsquo;s build something that holds up in production.</h2>
            <Link data-magnetic href="/contact" className="btn btn-primary">
              Get in touch <ArrowIcon />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
