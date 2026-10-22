import { Reveal } from "@/components/portfolio/reveal";

const skillGroups = [
  { title: "Frontend", items: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Redux Toolkit"] },
  { title: "Backend", items: ["Node.js", "Express.js", "REST APIs", "JWT", "Socket.io"] },
  { title: "Database", items: ["MongoDB", "Mongoose", "PostgreSQL", "Firebase"] },
  { title: "Tools & deployment", items: ["Git", "GitHub", "Postman", "Docker", "Nginx", "Vercel"] },
];

export function SkillsSection() {
  return (
    <section className="section-shell" id="skills" aria-labelledby="skills-title">
      <div className="container mx-auto w-full max-w-[1480px] px-[var(--gutter)]">
        <Reveal className="section-heading">
          <p className="eyebrow section-index">03 / Technical toolkit</p>
          <h2 id="skills-title">The right tools<br /><em>for the whole stack.</em></h2>
        </Reveal>
        <div className="skills-list">
          {skillGroups.map((group, index) => (
            <Reveal className="skill-row" key={group.title} delay={index * 0.035}>
              <h3>{group.title}</h3>
              <div className="skill-items">
                {group.items.map((skill) => <span className="skill-item" key={skill}>{skill}</span>)}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
