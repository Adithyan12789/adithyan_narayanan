"use client";

import { useEffect, useState } from "react";
import { ArrowDownToLine, Menu, X } from "lucide-react";

const navItems = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateScroll = () => setIsScrolled(window.scrollY > 16);
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });

    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.1, 0.35, 0.7] },
    );
    sections.forEach((section) => observer.observe(section));

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("keydown", closeOnEscape);
      observer.disconnect();
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="sr-only focus:not-sr-only" href="#main-content">
        Skip to content
      </a>
      <header className={`site-header${isScrolled ? " is-scrolled" : ""}${menuOpen ? " menu-open" : ""}`}>
        <div className="nav-inner">
          <a className="brand-mark" href="#top" aria-label="Adithyan Narayanan — back to top" onClick={closeMenu}>
            <span className="brand-symbol" aria-hidden="true">AN</span>
            <span>Adithyan Narayanan<span className="brand-period">.</span></span>
          </a>
          <nav className={`nav-links${menuOpen ? " is-open" : ""}`} aria-label="Main navigation" id="mobile-navigation">
            {navItems.map((item) => (
              <a
                className={`nav-link${activeSection === item.id ? " is-active" : ""}`}
                href={`#${item.id}`}
                key={item.id}
                aria-current={activeSection === item.id ? "location" : undefined}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <a className="button button-primary nav-cta" href="/Adithyan%20Narayanan.pdf" download="Adithyan Narayanan.pdf" onClick={closeMenu}>
              <ArrowDownToLine size={15} aria-hidden="true" /> Resume
            </a>
          </nav>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </header>
    </>
  );
}
