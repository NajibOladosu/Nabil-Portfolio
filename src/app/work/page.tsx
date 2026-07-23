import type { Metadata } from "next";
import { WorkGrid } from "@/components/work-grid";
import { works } from "@/lib/data";

export const metadata: Metadata = {
  title: "Work",
  description: "600+ SEO-optimized anime, manga and gaming articles across Soap Central, Deltia's Gaming and Game Rant — features, guides, release schedules and lore breakdowns.",
};

export default function WorkPage() {
  return (
    <div className="page-enter">
      <section className="container page-hero">
        <span className="eyebrow">The work</span>
        <h1 className="page-hero-title">Rankings, told as stories.</h1>
        <p className="page-hero-lede">
          A selection of the 600+ pieces I&rsquo;ve filed across Soap Central, Deltia&rsquo;s Gaming and Game Rant — features, guides, release schedules and lore breakdowns, each briefed for search and written for readers who stay.
        </p>
      </section>
      <WorkGrid works={works} />
    </div>
  );
}
