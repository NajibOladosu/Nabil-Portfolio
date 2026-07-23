import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { WorkCard } from "@/components/work-card";
import { Marquee } from "@/components/marquee";
import { stats, pubs, series, works } from "@/lib/data";

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

export default function Home() {
  const featured = works.filter((w) => w.home);

  return (
    <div className="page-enter">
      <section className="container hero">
        <span className="eyebrow">
          <span className="eyebrow-rule" />
          SEO content writer
        </span>
        <h1 className="hero-title">Words that rank. Stories worth the binge.</h1>
        <p className="hero-lede">
          I&rsquo;m Nabil — I turn fast-moving anime, manga &amp; gaming discourse and release schedules into sharp, SEO-optimized articles with high organic reach.
        </p>
        <div className="hero-meta">
          <span className="hero-meta-item">
            <PinIcon /> Lagos, Nigeria · Remote
          </span>
          <span className="hero-meta-item">
            <span className="status-dot" /> Available for freelance &amp; full-time
          </span>
        </div>
        <div className="hero-actions">
          <Link data-magnetic href="/work" className="btn btn-primary">
            See the work <ArrowIcon />
          </Link>
          <Link data-magnetic href="/contact" className="btn btn-secondary">
            Start a project
          </Link>
        </div>
      </section>

      <Reveal>
        <div className="container stats-grid">
          {stats.map((s) => (
            <div key={s.l}>
              <div className="stat-num">{s.n}</div>
              <div className="stat-label">{s.l}</div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal>
        <div className="container pubs-strip">
          <span className="pubs-label">Published on</span>
          {pubs.map((p) => (
            <span key={p} className="pubs-name">
              {p}
            </span>
          ))}
        </div>
      </Reveal>

      <section className="container section">
        <Reveal>
          <div className="section-head">
            <div>
              <span className="section-kicker">Selected work</span>
              <h2 className="section-title">Pieces that earned their rankings.</h2>
            </div>
            <Link href="/work" className="section-link">
              View all work <ArrowIcon />
            </Link>
          </div>
        </Reveal>
        <div className="work-grid">
          {featured.map((w) => (
            <WorkCard key={w.link} work={w} />
          ))}
        </div>
      </section>

      <Marquee items={series} />

      <Reveal>
        <div className="container quote-section">
          <QuoteIcon />
          <blockquote className="quote-text">
            AI accelerates the research. Every final sentence, judgment call and character read is 100% human.
          </blockquote>
          <figcaption className="quote-cite">— Nabil, on the workflow</figcaption>
        </div>
      </Reveal>

      <section className="container cta-section">
        <Reveal>
          <div className="cta-banner">
            <h2 className="cta-title">Have a beat that deserves to rank?</h2>
            <p className="cta-lede">
              Features, guides, release schedules and evergreen explainers — researched, keyword-mapped and written to earn the click and keep it. Delivered in 24–48 hours.
            </p>
            <Link data-magnetic href="/contact" className="btn btn-primary" style={{ marginTop: 28 }}>
              Start a project <ArrowIcon />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
