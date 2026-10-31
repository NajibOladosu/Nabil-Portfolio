import { site } from "@/lib/data";

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export function SiteFooter({ tagline }: { tagline: string }) {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div>
          <div className="footer-brand">
            {site.name}
            <span className="nav-dot">.</span>
          </div>
          <p className="footer-tagline">{tagline}</p>
        </div>
        <div className="footer-links">
          <a href={`mailto:${site.email}`} className="footer-link">
            Email <ArrowIcon />
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener" className="footer-link">
            LinkedIn <ArrowIcon />
          </a>
          <a href={site.github} target="_blank" rel="noopener" className="footer-link">
            GitHub <ArrowIcon />
          </a>
        </div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} {site.fullName}. Crafted, not generated.</div>
    </footer>
  );
}
