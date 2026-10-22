import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/portfolio/project-card";
import { Reveal } from "@/components/portfolio/reveal";

export function ProjectsSection() {
  return (
    <section className="section-shell" id="work" aria-labelledby="work-title">
      <div className="container mx-auto w-full max-w-[1480px] px-[var(--gutter)]">
        <Reveal className="section-heading">
          <p className="eyebrow section-index">01 / Selected work</p>
          <h2 id="work-title">Different problems.<br /><em>Thoughtful builds.</em></h2>
        </Reveal>
        <div className="project-list">
          {projects.map((project) => <ProjectCard key={project.number} project={project} />)}
        </div>
      </div>
    </section>
  );
}
