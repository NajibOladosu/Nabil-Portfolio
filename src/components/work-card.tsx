"use client";

import { useRef } from "react";
import type { Work } from "@/lib/data";
import { Reveal } from "@/components/reveal";

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export function WorkCard({ work, showTags = false }: { work: Omit<Work, "group" | "home">; showTags?: boolean }) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onPointerMove = (e: React.PointerEvent<HTMLAnchorElement>) => {
    if (!matchMedia("(pointer:fine)").matches || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.transition = "transform .1s ease";
    ref.current.style.transform = `perspective(900px) rotateY(${px * 6}deg) rotateX(${-py * 6}deg) translateY(-6px)`;
  };
  const onPointerLeave = () => {
    if (!ref.current) return;
    ref.current.style.transition = "transform .4s ease";
    ref.current.style.transform = "";
  };

  return (
    <Reveal>
      <a
        ref={ref}
        href={work.link}
        target={work.link.startsWith("http") ? "_blank" : undefined}
        rel="noopener"
        className="work-card"
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
      >
        <div className="work-card-head">
          <div className="work-card-head-row">
            <span className="work-card-cat">{work.cat}</span>
            <span className="work-card-pub">{work.pub}</span>
          </div>
          <h3 className="work-card-title">{work.title}</h3>
        </div>
        <div className="work-card-body">
          <div className="work-card-topic">{work.topic}</div>
          <p className="work-card-summary">{work.summary}</p>
          {showTags && (
            <div className="work-card-tags">
              {work.tags.map((tg) => (
                <span key={tg} className="tag tag-outline">
                  {tg}
                </span>
              ))}
            </div>
          )}
          <div className="work-card-foot">
            <span className="work-card-badge">{work.badge}</span>
            <span className="work-card-read">
              Read <ArrowIcon />
            </span>
          </div>
        </div>
      </a>
    </Reveal>
  );
}
