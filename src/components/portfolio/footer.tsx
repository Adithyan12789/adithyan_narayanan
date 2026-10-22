import { ArrowUp, Briefcase, Code2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner mx-auto w-full max-w-[1480px] px-[var(--gutter)]">
        <p className="footer-copy">© {new Date().getFullYear()} Adithyan Narayanan · Built with care.</p>
        <nav className="footer-links" aria-label="Footer navigation">
          <a href="https://github.com/Adithyan12789" target="_blank" rel="noreferrer" aria-label="GitHub profile"><Code2 size={14} aria-hidden="true" /></a>
          <a href="https://www.linkedin.com/in/adithyannarayanan1/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Briefcase size={14} aria-hidden="true" /></a>
          <a href="#top">Back to top <ArrowUp size={13} aria-hidden="true" /></a>
        </nav>
      </div>
    </footer>
  );
}
