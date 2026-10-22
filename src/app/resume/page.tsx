import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownToLine, ArrowLeft, ExternalLink, Globe, Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Resume — Adithyan Narayanan | Full-Stack Developer",
  description:
    "Official resume of Adithyan Narayanan — Full-Stack Developer specializing in React, Next.js, Node.js, Express, MongoDB, and TypeScript.",
};

export default function ResumePage() {
  return (
    <div className="resume-page-wrapper">
      <header className="resume-topbar print:hidden">
        <div className="resume-container resume-topbar-inner">
          <Link href="/" className="inline-link resume-back-link">
            <ArrowLeft size={16} aria-hidden="true" /> Back to Portfolio
          </Link>
          <div className="resume-actions">
            <a
              href="/Adithyan_narayanan.pdf"
              download="Adithyan_Narayanan_Resume.pdf"
              className="button button-primary"
            >
              <ArrowDownToLine size={15} aria-hidden="true" /> Download PDF
            </a>
          </div>
        </div>
      </header>

      <main className="resume-sheet">
        {/* Header */}
        <section className="resume-header">
          <h1 className="resume-name">Adithyan Narayanan</h1>
          <p className="resume-title">Full-Stack Developer</p>
          <div className="resume-contact-bar">
            <span>
              <Phone size={13} aria-hidden="true" /> +91 8891768287
            </span>
            <span>·</span>
            <a href="mailto:adithiruthiparambil12@gmail.com">
              <Mail size={13} aria-hidden="true" /> adithiruthiparambil12@gmail.com
            </a>
            <span>·</span>
            <span>
              <MapPin size={13} aria-hidden="true" /> Thrissur, Kerala, India
            </span>
          </div>

          <div className="resume-links-bar">
            <a
              href="https://linkedin.com/in/adithyannarayanan1"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/adithyannarayanan1
            </a>
            <span>·</span>
            <a
              href="https://github.com/Adithyan12789"
              target="_blank"
              rel="noreferrer"
            >
              github.com/Adithyan12789
            </a>
            <span>·</span>
            <a
              href="https://portfolio-adithyan-two.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              <Globe size={13} aria-hidden="true" /> portfolio-adithyan-two.vercel.app
            </a>
          </div>
        </section>

        {/* Professional Summary */}
        <section className="resume-section">
          <h2 className="resume-section-heading">Professional Summary</h2>
          <p className="resume-summary-text">
            Results-driven Full-Stack Developer with proven expertise in architecting and delivering
            high-performance web applications, scalable RESTful APIs, and cross-platform backends.
            Specialized in TypeScript, React, Next.js, Node.js, Express, MongoDB, and PostgreSQL. Experienced in
            implementing robust authentication systems (JWT, RBAC), cloud deployments, and translating complex
            system designs into clean, maintainable code.
          </p>
        </section>

        {/* Experience */}
        <section className="resume-section">
          <h2 className="resume-section-heading">Work Experience</h2>

          <div className="resume-entry">
            <div className="resume-entry-header">
              <div>
                <h3 className="resume-entry-title">Orbitcode Innovation Pvt. Ltd</h3>
                <p className="resume-entry-subtitle">Full-Stack Developer</p>
              </div>
              <div className="resume-entry-meta">
                <span>Aug. 2025 – Present</span>
                <span>Hyderabad, India</span>
              </div>
            </div>
            <ul className="resume-bullets">
              <li>
                Architected and shipped scalable full-stack web applications utilizing <strong>React, Node.js, Express.js, MongoDB, and MySQL</strong>.
              </li>
              <li>
                Designed, implemented, and benchmarked robust <strong>RESTful APIs</strong> supporting both web applications and <strong>Flutter mobile backends</strong>.
              </li>
              <li>
                Optimized application performance and significantly improved API response times through database indexing, query optimization, and architectural refactoring.
              </li>
              <li>
                Engineered secure <strong>JWT authentication</strong> and granular <strong>Role-Based Access Control (RBAC)</strong> mechanisms to enforce strict security boundaries.
              </li>
              <li>
                Collaborated closely with cross-functional engineering teams to maintain high code standards, conduct peer reviews, and resolve critical bottlenecks.
              </li>
            </ul>
          </div>

          <div className="resume-entry">
            <div className="resume-entry-header">
              <div>
                <h3 className="resume-entry-title">Freelance</h3>
                <p className="resume-entry-subtitle">Full-Stack Developer</p>
              </div>
              <div className="resume-entry-meta">
                <span>2025</span>
                <span>Remote</span>
              </div>
            </div>
            <ul className="resume-bullets">
              <li>
                Delivered full-cycle web applications, responsive user interfaces, and custom backend services using the <strong>MERN stack</strong> and <strong>Next.js</strong>.
              </li>
              <li>
                Handled client technical discovery, architecture design, database modeling, and deployment strategies independently.
              </li>
              <li>
                Converted UI/UX designs from Figma into pixel-perfect, accessible, and responsive user interfaces using modern CSS and Tailwind CSS.
              </li>
              <li>
                Configured and managed cloud servers, automated CI/CD workflows, and monitored production environments ensuring zero-downtime client handoffs.
              </li>
            </ul>
          </div>

          <div className="resume-entry">
            <div className="resume-entry-header">
              <div>
                <h3 className="resume-entry-title">Brototype Bootcamp</h3>
                <p className="resume-entry-subtitle">MERN Stack Developer Trainee</p>
              </div>
              <div className="resume-entry-meta">
                <span>2023 – 2025</span>
                <span>Ernakulam, India</span>
              </div>
            </div>
            <ul className="resume-bullets">
              <li>
                Completed an intensive, 1,000+ hour practical software engineering curriculum centered on modern MERN stack development and enterprise software patterns.
              </li>
              <li>
                Engineered multiple production-grade web applications applying <strong>MVC architecture</strong>, the <strong>Repository Pattern</strong>, and clean code conventions.
              </li>
              <li>
                Strengthened deep competency in asynchronous programming, system design, data structures, and real-time communication via WebSockets.
              </li>
            </ul>
          </div>
        </section>

        {/* Selected Projects */}
        <section className="resume-section">
          <h2 className="resume-section-heading">Featured Projects</h2>

          <div className="resume-entry">
            <div className="resume-entry-header">
              <div>
                <h3 className="resume-entry-title">
                  Interview Ninja — AI-Powered Interview Preparation Platform
                </h3>
                <p className="resume-entry-tech">
                  Next.js, TypeScript, Google Gemini API, Vapi AI, Firebase, Tailwind CSS
                </p>
              </div>
              <div className="resume-entry-meta">
                <a
                  href="https://interviewninja-dun.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="resume-link"
                >
                  Live Demo <ExternalLink size={11} aria-hidden="true" />
                </a>
              </div>
            </div>
            <ul className="resume-bullets">
              <li>
                Built an interactive mock interview platform utilizing Google Gemini and Vapi AI for real-time voice and conversational technical evaluations.
              </li>
              <li>
                Implemented Firebase authentication and real-time database synchronisation to track applicant performance analytics.
              </li>
            </ul>
          </div>

          <div className="resume-entry">
            <div className="resume-entry-header">
              <div>
                <h3 className="resume-entry-title">
                  TicketHive — Full-Stack Movie Ticket Booking System
                </h3>
                <p className="resume-entry-tech">
                  MongoDB, Express.js, React.js, Node.js, JWT, Tailwind CSS
                </p>
              </div>
              <div className="resume-entry-meta">
                <a
                  href="https://ticket-hive-main.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="resume-link"
                >
                  Live Demo <ExternalLink size={11} aria-hidden="true" />
                </a>
              </div>
            </div>
            <ul className="resume-bullets">
              <li>
                Engineered a cinema ticketing application with interactive theatre seat layouts, showtime scheduling, and JWT-secured booking transactions.
              </li>
            </ul>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="resume-section">
          <h2 className="resume-section-heading">Technical Skills</h2>
          <div className="resume-skills-grid">
            <div className="resume-skill-line">
              <strong>Languages:</strong> JavaScript (ES6+), TypeScript, HTML5, CSS3
            </div>
            <div className="resume-skill-line">
              <strong>Frontend:</strong> React.js, Next.js, React Native, Redux Toolkit, Tailwind CSS, Bootstrap, Responsive UI/UX
            </div>
            <div className="resume-skill-line">
              <strong>Backend:</strong> Node.js, Express.js, RESTful APIs, JWT Authentication, Role-Based Access Control (RBAC), Socket.io
            </div>
            <div className="resume-skill-line">
              <strong>Databases:</strong> MongoDB, PostgreSQL, MySQL, Firebase
            </div>
            <div className="resume-skill-line">
              <strong>Architecture:</strong> MVC, Repository Pattern, Service Architecture, API Integration, State Management
            </div>
            <div className="resume-skill-line">
              <strong>Cloud &amp; DevOps:</strong> Git, GitHub, CI/CD Basics, Docker, Server Deployment, Wasabi Cloud Storage, Bunny.net CDN, Vercel, Render
            </div>
            <div className="resume-skill-line">
              <strong>Tools &amp; APIs:</strong> Postman, Figma, AWS, Vapi AI, Google Gemini API
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="resume-section">
          <h2 className="resume-section-heading">Education</h2>
          <div className="resume-entry">
            <div className="resume-entry-header">
              <div>
                <h3 className="resume-entry-title">GHSS Villadam</h3>
                <p className="resume-entry-subtitle">Bio-Science Higher Secondary Education</p>
              </div>
              <div className="resume-entry-meta">
                <span>2020 – 2023</span>
                <span>Thrissur, Kerala, India</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
