import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/portfolio/reveal";

const services = [
  {
    title: "Frontend Development",
    description: "Responsive interfaces with React and Next.js, built around clear structure, accessible patterns, and considered interaction.",
  },
  {
    title: "Full Stack Applications",
    description: "End-to-end web products connecting the user experience to data, authentication, and the application logic behind it.",
  },
  {
    title: "Backend APIs & Authentication",
    description: "Node.js and Express APIs, JWT-based access, and data models that keep the application's moving parts connected.",
  },
  {
    title: "Responsive UI Engineering",
    description: "Careful implementation across screen sizes, with keyboard access, readable content, and reduced-motion support.",
  },
];

export function ServicesSection() {
  return (
    <section className="section-shell" aria-labelledby="services-title">
      <div className="container mx-auto w-full max-w-[1480px] px-[var(--gutter)]">
        <Reveal className="section-heading">
          <p className="eyebrow section-index">05 / Engineering strengths</p>
          <h2 id="services-title">From first screen<br /><em>to production.</em></h2>
        </Reveal>
        <div className="service-list">
          {services.map((service, index) => (
            <Reveal className="service-row" key={service.title} delay={index * 0.04}>
              <span className="service-number">0{index + 1}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ArrowUpRight className="service-arrow" size={18} aria-hidden="true" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
