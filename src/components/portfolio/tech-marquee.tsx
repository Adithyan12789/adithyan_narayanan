const technologies = ["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"];

export function TechMarquee() {
  return (
    <div className="tech-marquee">
      <p className="sr-only">Core technologies: React, Next.js, TypeScript, Node.js, MongoDB, and Tailwind CSS.</p>
      <div className="marquee-track" aria-hidden="true">
        {[0, 1].map((group) => (
          <div className="marquee-group" key={group}>
            {technologies.map((technology) => (
              <span className="marquee-item" key={`${group}-${technology}`}>
                {technology}<span className="marquee-star">✳</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
