//page.tsx

import { AboutSection } from "@/components/portfolio/about-section";
import { ApproachSection } from "@/components/portfolio/approach-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { Footer } from "@/components/portfolio/footer";
import { HeroSection } from "@/components/portfolio/hero-section";
import { Navbar } from "@/components/portfolio/navbar";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { ServicesSection } from "@/components/portfolio/services-section";
import { SkillsSection } from "@/components/portfolio/skills-section";
import { TechMarquee } from "@/components/portfolio/tech-marquee";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <TechMarquee />
        <ProjectsSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ApproachSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
