import { Briefcase, Code2, Mail } from "lucide-react";
import { ContactForm } from "@/components/portfolio/contact-form";
import { Reveal } from "@/components/portfolio/reveal";

export function ContactSection() {
  return (
    <section className="section-shell contact-section" id="contact" aria-labelledby="contact-title">
      <div className="container contact-grid mx-auto w-full max-w-[1480px] px-[var(--gutter)]">
        <Reveal>
          <p className="eyebrow"><span className="eyebrow-dot" /> 07 / Start a conversation</p>
          <h2 className="contact-title" id="contact-title">Have a problem<br /><em>worth solving?</em></h2>
          <p className="contact-description">
            I’m open to exciting development opportunities, collaborative projects, and conversations about building great products.
          </p>
          <a className="contact-email" href="mailto:adithiruthiparambil12@gmail.com">
            <Mail size={16} aria-hidden="true" /> adithiruthiparambil12@gmail.com
          </a>
          <div className="contact-socials">
            <a className="inline-link" href="https://github.com/Adithyan12789" target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <Code2 size={15} aria-hidden="true" /> GitHub
            </a>
            <a className="inline-link" href="https://www.linkedin.com/in/adithyannarayanan1/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
              <Briefcase size={15} aria-hidden="true" /> LinkedIn
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
