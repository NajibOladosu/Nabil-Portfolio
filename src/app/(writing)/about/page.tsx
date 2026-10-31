import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { phases, skills, experience, education, site } from "@/lib/data";
import { DEV_URL } from "@/lib/dev-data";

export const metadata: Metadata = {
  title: "About",
  description: "Nabil Ibrahim-Oladosu, freelance anime, manga and gaming writer with a background in frontend development, pairing AI-accelerated research with 100% human prose.",
};

const ArrowIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const PILLARS = [
  { num: "01", title: "Trend-first, SEO-native", copy: "I read the fandom and the SERP together: tracking releases and discourse, then mapping the keywords that turn a moment into recurring search traffic." },
  { num: "02", title: "Newsroom discipline", copy: "7+ pieces a week, 40+ in a first month, delivered to spec and self-published in WordPress with sourced media and clean metadata." },
  { num: "03", title: "Fluent in the fandom", copy: "No faking it: every claim is checked against the official manga chapters and episodes. Zero-hallucination, canon-accurate." },
];

export default function AboutPage() {
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
            I&rsquo;m a freelance entertainment writer specializing in anime, manga and gaming. Over the past few years I&rsquo;ve filed 600+ publication-ready pieces for outlets like Soap Central and Deltia&rsquo;s Gaming, plus feature bylines at Game Rant.
          </p>
          <p className="about-copy">
            My workflow pairs trend identification with structured keyword strategy: high-volume, newsroom-standard articles on tight deadlines, from breaking news and release guides to deep character analyses and ranking listicles.
          </p>
          <p className="about-copy">
            A background as a Frontend Developer (Angular, TypeScript, Tailwind) and Unity game developer gives me a structured, technical read on publishing systems and digital media workflows. That side of my work lives in my{" "}
            <a href={DEV_URL} style={{ color: "var(--color-accent)" }}>
              dev portfolio
            </a>
            .
          </p>
        </div>
      </section>

      <section className="container pillars">
        <div className="pillars-grid">
          {PILLARS.map((p) => (
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
            <span className="section-kicker">Editorial AI workflow</span>
            <h2 className="section-title" style={{ fontSize: "clamp(26px,3.4vw,40px)", maxWidth: "20ch" }}>
              AI-accelerated research. 100% human prose.
            </h2>
          </div>
        </Reveal>
        <div className="phase-grid">
          {phases.map((ph) => (
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
            {skills.map((sk) => (
              <span key={sk} className="tag tag-neutral">
                {sk}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal>
          <span className="side-label">Experience</span>
          <div className="timeline">
            {experience.map((e) => (
              <div key={e.role + e.org} className="timeline-row">
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
              <div className="timeline-org">{education.school}</div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container cta-section">
        <Reveal>
          <div className="cta-banner cta-banner--split">
            <h2 className="cta-title cta-title--sm">Let&rsquo;s put your vertical on the front page.</h2>
            <Link data-magnetic href="/contact" className="btn btn-primary">
              Start a project <ArrowIcon />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
