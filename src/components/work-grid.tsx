"use client";

import { useState } from "react";
import type { Work, WorkGroup } from "@/lib/data";
import { WorkCard } from "@/components/work-card";

const FILTERS: { key: WorkGroup | "all"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "list", label: "Features & Lists" },
  { key: "analysis", label: "Lore & Analysis" },
  { key: "releases", label: "News & Releases" },
];

export function WorkGrid({ works }: { works: Work[] }) {
  const [filter, setFilter] = useState<WorkGroup | "all">("all");
  const [shown, setShown] = useState(24);
  const filtered = filter === "all" ? works : works.filter((w) => w.group === filter);

  return (
    <>
      <div className="container">
        <div className="filter-scroll">
          <div className="seg">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                type="button"
                className="seg-opt"
                data-active={filter === f.key}
                onClick={() => { setFilter(f.key); setShown(24); }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container work-page-grid">
        <div className="work-grid">
          {filtered.slice(0, shown).map((w) => (
            <WorkCard key={w.link} work={w} showTags />
          ))}
        </div>
        {shown < filtered.length && (
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <button type="button" className="btn btn-secondary" onClick={() => setShown(shown + 24)}>
              Show more ({filtered.length - shown} left)
            </button>
          </div>
        )}
      </div>
    </>
  );
}
