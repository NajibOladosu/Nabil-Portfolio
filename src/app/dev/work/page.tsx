import type { Metadata } from "next";
import { UmbrellaGrid } from "@/components/umbrella-grid";

export const metadata: Metadata = {
  title: "Work",
  description: "MAMVest, JustPayroll, the Go API rewrite and the Tireda website, plus the Blank card game and Unity games: the work of Nabil Ibrahim-Oladosu.",
};

export default function DevWorkPage() {
  return (
    <div className="page-enter">
      <section className="container page-hero">
        <span className="eyebrow">The work</span>
        <h1 className="page-hero-title">Production apps, and the games that got me here.</h1>
        <p className="page-hero-lede">
          Each card says whether you can open it. Company tools like the backoffice and the Go API are internal, so they&rsquo;re described here but not linked.
        </p>
      </section>
      <UmbrellaGrid />
    </div>
  );
}
