import { ArrowDownToLine, Briefcase, Calendar, MapPin } from "lucide-react";
import { Reveal } from "@/components/portfolio/reveal";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  isCurrent?: boolean;
  description: string[];
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Orbitcode Innovation Pvt. Ltd",
    role: "Full-Stack Developer",
    period: "Aug. 2025 – Present",
    location: "Hyderabad, India",
    type: "Full-time",
    isCurrent: true,
    description: [
      "Architected and delivered scalable full-stack web applications using React, Node.js, Express.js, MongoDB, and MySQL.",
      "Engineered high-throughput RESTful APIs supporting both responsive web applications and Flutter mobile client backends.",
      "Optimized database indexing, query execution, and backend routines, substantially reducing API response times and server latency.",
      "Implemented enterprise-grade JWT authentication and granular Role-Based Access Control (RBAC) to safeguard protected application resources.",
      "Collaborated cross-functionally with engineers and stakeholders to establish clean code standards, review PRs, and ship features ahead of schedule.",
    ],
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "MySQL", "REST APIs", "Flutter Backend", "RBAC", "JWT"],
  },
  {
    company: "Freelancing",
    role: "Full-Stack Developer",
    period: "2025",
    location: "Remote",
    type: "Contract",
    description: [
      "Delivered end-to-end web applications, custom RESTful APIs, and responsive UI systems tailored to client requirements.",
      "Owned technical architecture decisions, database modeling, and full lifecycle development from initial wireframes to production handoff.",
      "Converted Figma and UI/UX specifications into high-performance, pixel-perfect interfaces using React, Next.js, and modern CSS.",
      "Managed cloud deployments, domain configurations, and production environments ensuring high availability and zero-downtime releases.",
    ],
    skills: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Cloud Hosting"],
  },
  {
    company: "Brototype Bootcamp",
    role: "MERN Stack Developer Trainee",
    period: "2023 – 2025",
    location: "Ernakulam, India",
    type: "Intensive Apprenticeship",
    description: [
      "Completed rigorous, project-driven software development training covering advanced MERN stack architecture and system design.",
      "Engineered multiple production-grade web applications incorporating MVC architecture, the Repository Pattern, and clean code principles.",
      "Mastered data structures, asynchronous programming, WebSockets/Socket.io, and scalable backend services through real-world simulations.",
    ],
    skills: ["MERN Stack", "System Architecture", "MVC", "Repository Pattern", "Data Structures", "Socket.io"],
  },
];

const education = {
  institution: "GHSS Villadam",
  degree: "Bio-Science Higher Secondary",
  period: "2020 – 2023",
  location: "Thrissur, Kerala, India",
};

export function ExperienceSection() {
  return (
    <section className="section-shell" id="experience" aria-labelledby="experience-title">
      <div className="container mx-auto w-full max-w-[1480px] px-[var(--gutter)]">
        <Reveal className="section-heading">
          <p className="eyebrow section-index">04 / Experience</p>
          <h2 id="experience-title">
            Where I’ve worked<br />
            <em>&amp; shipped software.</em>
          </h2>
        </Reveal>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <Reveal className="experience-card" key={exp.company} delay={index * 0.05}>
              <div className="experience-header">
                <div className="experience-role-wrap">
                  <div className="experience-company-line">
                    <h3 className="experience-company">{exp.company}</h3>
                    {exp.isCurrent && (
                      <span className="experience-badge experience-badge-current">
                        <span className="availability-pulse" aria-hidden="true" />
                        Current
                      </span>
                    )}
                  </div>
                  <p className="experience-role">{exp.role}</p>
                </div>

                <div className="experience-meta">
                  <span className="experience-meta-item">
                    <Calendar size={13} aria-hidden="true" />
                    {exp.period}
                  </span>
                  <span className="experience-meta-item">
                    <MapPin size={13} aria-hidden="true" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <ul className="experience-bullets">
                {exp.description.map((point, i) => (
                  <li key={i} className="experience-bullet">
                    <span className="experience-bullet-dot" aria-hidden="true">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="experience-skills">
                {exp.skills.map((skill) => (
                  <span className="skill-item experience-skill-pill" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Education & Resume CTA row */}
        <Reveal className="experience-footer-row" delay={0.15}>
          <div className="education-box">
            <span className="education-label">Education</span>
            <div className="education-details">
              <strong>{education.institution}</strong>
              <p>{education.degree} · {education.location} ({education.period})</p>
            </div>
          </div>

          <div className="experience-cta-wrap">
            <a className="button button-quiet" href="/resume">
              View Online Resume
            </a>
            <a
              className="button button-primary"
              href="/Adithyan_narayanan.pdf"
              download="Adithyan_Narayanan_Resume.pdf"
            >
              <ArrowDownToLine size={16} aria-hidden="true" />
              Download PDF
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
