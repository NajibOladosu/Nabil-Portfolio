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
                onClick={() => setFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container work-page-grid">
        <div className="work-grid">
          {filtered.map((w) => (
            <WorkCard key={w.link} work={w} showTags />
          ))}
        </div>
      </div>
    </>
  );
}
