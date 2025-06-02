import "../styles/Header.css";

const Header = () => {
  return (
    <div>
      <header className="header-container">
        <div className="header-content-container">
          <div className="link-header-container">
            <a href="#about">About</a>
          </div>

          <div className="link-header-container">
            <a href="#experince">Experience</a>
          </div>

          <div className="link-header-container">
            <a href="#projects">Projects</a>
          </div>

          <div className="link-header-container">
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="resume-header-container ">
          <a
            // href="/Resume/Resume-English.pdf"
            href="public/Resume/Resume-English.pdf"
            download
            className="resume-link-container"
          >
            <button>Resume</button>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
