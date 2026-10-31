import { Reveal } from "@/components/reveal";

export function Marquee({ items, label = "Series I cover" }: { items: string[]; label?: string }) {
  const loop = items.concat(items);
  return (
    <section className="marquee-section">
      <Reveal>
        <div className="container marquee-head">
          <span className="side-label">{label}</span>
        </div>
        <div className="marquee-track">
          {loop.map((c, i) => (
            <span key={`${c}-${i}`} className="marquee-item">
              {c}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
