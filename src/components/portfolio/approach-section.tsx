import { Reveal } from "@/components/portfolio/reveal";

const principles = [
  { title: "Understand the problem", copy: "Start with the people using the product and the job it needs to do." },
  { title: "Make the layers fit", copy: "Connect thoughtful interface work with APIs, data, and authentication." },
  { title: "Keep it maintainable", copy: "Prefer clear structure and reliable patterns over cleverness for its own sake." },
  { title: "Ship and refine", copy: "Get a working application into the world, then debug and improve it with care." },
];

export function ApproachSection() {
  return (
    <section className="section-shell" aria-labelledby="approach-title">
      <div className="container mx-auto w-full max-w-[1480px] px-[var(--gutter)]">
        <Reveal className="section-heading">
          <p className="eyebrow section-index">04 / My approach</p>
          <h2 id="approach-title">Good software is<br /><em>built with intent.</em></h2>
        </Reveal>
        <p className="approach-intro">
          I like the practical side of building: solving the whole problem, keeping the code understandable, and making sure the finished experience works for real people.
        </p>
        <div className="approach-list">
          {principles.map((principle, index) => (
            <Reveal className="approach-item" key={principle.title} delay={index * 0.045}>
              <span className="approach-number">0{index + 1}</span>
              <h3>{principle.title}</h3>
              <p>{principle.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
