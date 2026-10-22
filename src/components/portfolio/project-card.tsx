import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-row">
      <div className="project-visual">
        <div className="browser-frame">
          <div className="browser-chrome" aria-hidden="true">
            <span className="browser-dot" />
            <span className="browser-dot" />
            <span className="browser-dot" />
            <span className="browser-address" />
          </div>
          {project.demo ? (
            <a 
              href={project.demo.href} 
              target="_blank" 
              rel="noreferrer"
              className="project-image-wrap"
              aria-label={`View ${project.name} live demo`}
            >
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                sizes="(max-width: 760px) 92vw, (max-width: 1050px) 47vw, 650px"
                quality={82}
              />
            </a>
          ) : (
            <div className="project-image-wrap">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                sizes="(max-width: 760px) 92vw, (max-width: 1050px) 47vw, 650px"
                quality={82}
              />
            </div>
          )}
        </div>
      </div>

      <div className="project-copy">
        <div className="project-meta">
          <span>{project.number} / Case study</span>
          <span>{project.eyebrow}</span>
        </div>
        <h3>{project.name}</h3>
        <p className="project-summary">{project.summary}</p>
        <p className="project-contribution"><strong>Built:</strong> {project.contribution}</p>
        <ul className="project-highlights" aria-label={`${project.name} key features`}>
          {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
        </ul>
        <div className="project-tags" aria-label={`${project.name} technologies`}>
          {project.stack.map((technology) => <span className="project-tag" key={technology}>{technology}</span>)}
        </div>
        <div className="project-links">
          {project.demo && (
            <a className="inline-link" href={project.demo.href} target="_blank" rel="noreferrer">
              {project.demo.label} <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          )}
          {project.sources.map((source) => (
            <a className="inline-link" href={source.href} target="_blank" rel="noreferrer" key={source.href}>
              {source.label} <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
