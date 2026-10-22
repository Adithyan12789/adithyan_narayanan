import Image from "next/image";
import { ArrowDown, ArrowDownToLine, ArrowRight, Briefcase, Code2 } from "lucide-react";
import { Reveal } from "@/components/portfolio/reveal";

export function HeroSection() {
  return (
    <section className="hero-section" id="top" aria-labelledby="hero-title">
      <div className="container hero-layout mx-auto w-full max-w-[1480px] px-[var(--gutter)]">
        <div className="hero-copy">
          <Reveal>
            <span className="availability"><span className="availability-pulse" aria-hidden="true" /> Open to Opportunities</span>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="eyebrow hero-kicker">FULL-STACK DEVELOPER · KERALA, INDIA</p>
            <h1 className="hero-title" id="hero-title" aria-label="I build digital experiences that turn complex ideas into products.">
              <span className="hero-copy-desktop" aria-hidden="true">
                <span>I build digital</span>{" "}
                <span>experiences that</span>{" "}
                <span>turn complex ideas</span>{" "}
                <span className="hero-accent">into products.</span>
              </span>
              <span className="hero-copy-mobile" aria-hidden="true">
                <span>I build digital</span>{" "}
                <span>experiences</span>{" "}
                <span>that turn</span>{" "}
                <span>complex ideas</span>{" "}
                <span className="hero-accent">into products.</span>
              </span>
            </h1>
            <p className="hero-description">
              Full Stack Developer focused on building modern web applications, scalable backend systems, and intuitive user experiences.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore My Work <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a className="button button-quiet" href="/Adithyan%20Narayanan.pdf" download="Adithyan Narayanan.pdf">
                <ArrowDownToLine size={15} aria-hidden="true" /> Download Resume
              </a>
              <div className="hero-socials" aria-label="Social profiles">
                <a className="social-icon-link" href="https://github.com/Adithyan12789" target="_blank" rel="noreferrer" aria-label="GitHub profile">
                  <Code2 size={17} aria-hidden="true" />
                </a>
                <a className="social-icon-link" href="https://www.linkedin.com/in/adithyannarayanan1/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
                  <Briefcase size={17} aria-hidden="true" />
                </a>
              </div>
            </div>
          </Reveal>
          <a className="hero-scroll" href="#work">
            <ArrowDown size={13} aria-hidden="true" /> Scroll to explore <span className="hero-scroll-line" aria-hidden="true" />
          </a>
        </div>

        <Reveal className="hero-visual-wrap" delay={0.16} distance={22}>
          <div className="hero-visual">
            <span className="hero-corner-mark" aria-hidden="true" />
            <div className="hero-photo">
              <Image
                src="/images/adithyan-portrait.jpg"
                alt="Portrait of Adithyan Narayanan"
                fill
                priority
                sizes="(max-width: 760px) 76vw, (max-width: 1050px) 36vw, 390px"
                quality={85}
              />
              <div className="hero-photo-caption">
                <span>Adithyan Narayanan</span>
                <span>01 / Kerala</span>
              </div>
            </div>
            <div className="hero-visual-note hero-note-top">
              <span>Currently building</span>
              <span>Complete web products</span>
            </div>
            <div className="hero-visual-note hero-note-bottom">
              <span>Core stack</span>
              <span>React · Next · Node</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
