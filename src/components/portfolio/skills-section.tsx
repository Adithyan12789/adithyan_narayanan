import { Reveal } from "@/components/portfolio/reveal";

const skillGroups = [
  {
    title: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  },
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "React Native", "Redux Toolkit", "Tailwind CSS", "Bootstrap", "Responsive Design"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication", "Role-Based Access Control (RBAC)", "Socket.io"],
  },
  {
    title: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
  },
  {
    title: "Architecture & Concepts",
    items: ["MVC Pattern", "Repository Pattern", "Service Architecture", "API Integration", "State Management"],
  },
  {
    title: "Cloud & Deployment",
    items: ["Git & GitHub", "CI/CD Basics", "Docker", "Server Deployment", "Vercel", "Render", "Bunny.net", "Wasabi Cloud Storage"],
  },
  {
    title: "Tools & AI",
    items: ["Postman", "Figma", "AWS", "Vapi AI", "Google Gemini"],
  },
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
