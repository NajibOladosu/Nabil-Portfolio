import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { WorkCard } from "@/components/work-card";
import { Marquee } from "@/components/marquee";
import { devStats, umbrellas, visibilityLabel, bugs, stack } from "@/lib/dev-data";

const ArrowIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
const PinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const QuoteIcon = () => (
  <svg width="46" height="46" viewBox="0 0 24 24" fill="var(--color-accent)" className="quote-mark">
    <path d="M9.5 6C6.5 6 4 8.5 4 11.5c0 2.6 1.9 4.5 4.3 4.5 1 0 1.7-.3 1.7-.3S9.3 18 6.5 18v2c5 0 6.5-4 6.5-8.5C13 8.2 11.5 6 9.5 6zm9 0C15.5 6 13 8.5 13 11.5c0 2.6 1.9 4.5 4.3 4.5 1 0 1.7-.3 1.7-.3S18.3 18 15.5 18v2c5 0 6.5-4 6.5-8.5C22 8.2 20.5 6 18.5 6z" />
  </svg>
);

export default function DevHome() {
  const featured = umbrellas.flatMap((u) => u.projects.filter((p) => p.home).map((p) => ({ ...p, umbrella: u.title })));

  return (
    <div className="page-enter">
      <section className="container hero">
        <h1 className="hero-title">Full-stack software, from the database to the last pixel.</h1>
        <p className="hero-lede">
          I&rsquo;m Nabil, a full-stack engineer. I design APIs, build web and mobile apps in TypeScript, Angular and Go, and ship them on AWS, caring as much about the parts users never see as the parts they do.
        </p>
        <div className="hero-meta">
          <span className="hero-meta-item">
            <PinIcon /> Lagos, Nigeria · Remote or relocation
          </span>
          <span className="hero-meta-item">
            <span className="status-dot" /> Open to software engineering roles
          </span>
        </div>
        <div className="hero-actions">
          <Link data-magnetic href="/work" className="btn btn-primary">
            See the work <ArrowIcon />
          </Link>
          <Link data-magnetic href="/contact" className="btn btn-secondary">
            Get in touch
          </Link>
        </div>
      </section>

      <Reveal>
        <div className="container stats-grid">
          {devStats.map((s) => (
            <div key={s.l}>
              <div className="stat-num">{s.n}</div>
              <div className="stat-label">{s.l}</div>
            </div>
          ))}
        </div>
      </Reveal>

      <section className="container section">
        <Reveal>
          <div className="section-head">
            <div>
              <span className="section-kicker">Selected work</span>
              <h2 className="section-title">Built end to end, and still running.</h2>
            </div>
            <Link href="/work" className="section-link">
              View all work <ArrowIcon />
            </Link>
          </div>
        </Reveal>
        <div className="work-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))" }}>
          {featured.map((p) => (
            <WorkCard
              key={p.slug}
              work={{ cat: p.umbrella, pub: visibilityLabel[p.visibility], title: p.title, topic: p.kind, summary: p.summary, badge: p.stack.slice(0, 3).join(" · "), link: `/work#${p.slug}`, tags: [] }}
            />
          ))}
        </div>
      </section>

      <Marquee items={stack} label="What I build with" />

      <section className="container section">
        <Reveal>
          <div style={{ marginBottom: 26 }}>
            <span className="section-kicker">Bugs I&rsquo;ve chased</span>
            <h2 className="section-title" style={{ fontSize: "clamp(26px,3.4vw,40px)", maxWidth: "20ch" }}>
              Found from the failure signature, fixed at the root.
            </h2>
          </div>
        </Reveal>
        <div className="phase-grid">
          {bugs.map((b) => (
            <Reveal key={b.t}>
              <div className="phase-card">
                <span className="tag tag-accent">{b.tag}</span>
                <h3 className="phase-title">{b.t}</h3>
                <p className="phase-copy">{b.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal>
        <div className="container quote-section">
          <QuoteIcon />
          <blockquote className="quote-text">
            AI drafts the boilerplate. Every design call, every review and every line that ships is mine.
          </blockquote>
          <figcaption className="quote-cite">Nabil, on the workflow</figcaption>
        </div>
      </Reveal>

      <section className="container cta-section">
        <Reveal>
          <div className="cta-banner">
            <h2 className="cta-title">Have something that needs building end to end?</h2>
            <p className="cta-lede">
              Web apps, mobile apps, APIs and the cloud they run on. I&rsquo;m open to full-time roles, remote or with relocation.
            </p>
            <Link data-magnetic href="/contact" className="btn btn-primary" style={{ marginTop: 28 }}>
              Get in touch <ArrowIcon />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
