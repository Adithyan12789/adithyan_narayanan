import { Reveal } from "@/components/portfolio/reveal";

export function AboutSection() {
  return (
    <section className="section-shell" id="about" aria-labelledby="about-title">
      <div className="container about-grid mx-auto w-full max-w-[1480px] px-[var(--gutter)]">
        <Reveal>
          <p className="eyebrow"><span className="eyebrow-dot" /> 02 / A little about me</p>
          <h2 className="about-title" id="about-title">Engineer by mindset.<br /><em>Builder by passion.</em></h2>
        </Reveal>
        <Reveal className="about-copy" delay={0.1}>
          <p>
            I’m Adithyan, a Full Stack Developer based in Kerala, India. I enjoy building complete web products, working through engineering problems, and making digital experiences feel intuitive from the first interaction.
          </p>
          <p>
            My work moves between the interface and the systems behind it: shaping responsive frontends, designing APIs and data models, and getting applications ready to ship. I care about clear architecture, maintainable code, and the details that make software feel effortless.
          </p>
          <div className="about-callout">
            <div>
              <strong>Product thinking · Clean code · Human interfaces</strong>
              <span>Full-stack craft, from first wireframe to final deploy</span>
            </div>
            <span className="about-signal" aria-hidden="true">✳</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
