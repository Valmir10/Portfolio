import { useState } from "react";
import "../styles/Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header-container">
      <nav className="header-nav">
        <a href="#about" className="header-link">
          About
        </a>
        <a href="#experince" className="header-link">
          Experience
        </a>
        <a href="#projects" className="header-link">
          Projects
        </a>
        <a href="#contact" className="header-link">
          Contact
        </a>
      </nav>

      <div className="resume-header-container">
        <a
          href={import.meta.env.BASE_URL + "Resume/Valmir-Resume English.pdf"}
          download
          className="resume-link"
        >
          <button>Resume</button>
        </a>
      </div>

      <button
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`mobile-nav ${menuOpen ? "mobile-nav-open" : ""}`}>
        <a href="#about" onClick={closeMenu}>
          About
        </a>
        <a href="#experince" onClick={closeMenu}>
          Experience
        </a>
        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>
        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
        <a
          href={import.meta.env.BASE_URL + "Resume/Valmir-Resume English.pdf"}
          download
          onClick={closeMenu}
          className="mobile-nav-resume"
        >
          Resume
        </a>
      </div>
    </header>
  );
};

export default Header;
