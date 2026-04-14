import { useState } from "react";
import "../styles/Header.css";

const downloadFiles = (files: string[]) => {
  files.forEach((file) => {
    const a = document.createElement("a");
    a.href = import.meta.env.BASE_URL + file;
    a.download = "";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
};

const resumeFiles = [
  "Resume/Valmir-Resume English.pdf",
  "Resume/Valmir-Cover-Letter-English.pdf",
];

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
        <button onClick={() => downloadFiles(resumeFiles)}>Resume</button>
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
        <button
          onClick={() => {
            downloadFiles(resumeFiles);
            closeMenu();
          }}
          className="mobile-nav-resume"
        >
          Resume
        </button>
      </div>
    </header>
  );
};

export default Header;
