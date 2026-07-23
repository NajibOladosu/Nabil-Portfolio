import { Reveal } from "@/components/reveal";

export function Marquee({ items }: { items: string[] }) {
  const loop = items.concat(items);
  return (
    <section className="marquee-section">
      <Reveal>
        <div className="container marquee-head">
          <span className="side-label">Series I cover</span>
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
