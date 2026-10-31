"use client";

import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { umbrellas, visibilityLabel } from "@/lib/dev-data";

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);
const OutIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

const FILTERS = [{ key: "all", label: "All" }, ...umbrellas.map((u) => ({ key: u.slug, label: u.title }))];

export function UmbrellaGrid() {
  const [filter, setFilter] = useState("all");
  const shown = filter === "all" ? umbrellas : umbrellas.filter((u) => u.slug === filter);

  return (
    <>
      <div className="container">
        <div className="filter-scroll">
          <div className="seg">
            {FILTERS.map((f) => (
              <button key={f.key} type="button" className="seg-opt" data-active={filter === f.key} onClick={() => setFilter(f.key)}>
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {shown.map((u) => (
        <section key={u.slug} id={u.slug} className="container section" style={{ scrollMarginTop: 96 }}>
          <Reveal>
            <div style={{ marginBottom: 26, maxWidth: "62ch" }}>
              <span className="section-kicker">{u.kicker}</span>
              <h2 className="section-title">{u.title}</h2>
              <p className="service-copy" style={{ fontSize: 16 }}>{u.summary}</p>
            </div>
          </Reveal>
          <div className="services-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gridAutoRows: "auto" }}>
            {u.projects.map((p) => (
              <Reveal key={p.slug}>
                <article id={p.slug} className="service-card" style={{ height: "100%", scrollMarginTop: 96 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, marginBottom: 10 }}>
                    <span className="section-kicker" style={{ margin: 0 }}>
                      {p.partOf ? `Part of ${p.partOf}` : p.kind}
                    </span>
                    <span className={p.visibility === "public" ? "tag tag-accent-2" : "tag tag-neutral"}>{visibilityLabel[p.visibility]}</span>
                  </div>
                  <h3 className="service-title">{p.title}</h3>
                  <p className="service-copy">{p.summary}</p>
                  {p.highlights.length > 0 && (
                    <div className="service-items">
                      {p.highlights.map((h) => (
                        <div key={h} className="service-item">
                          <CheckIcon /> {h}
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="service-turn">
                    <div className="work-card-tags">
                      {p.stack.map((s) => (
                        <span key={s} className="tag tag-outline">
                          {s}
                        </span>
                      ))}
                    </div>
                    {p.links && (
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 18px", marginTop: 16 }}>
                        {p.links.map((l) => (
                          <a key={l.href} href={l.href} target="_blank" rel="noopener" className="footer-link">
                            {l.label} <OutIcon />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
