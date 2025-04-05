import "./header.css";

const Header = () => {
  return (
    <div>
      <header className="header-container">
        <div className="header-content-container">
          <div className="link-header-container">
            <a>About</a>
          </div>

          <div className="link-header-container">
            <a>Experience</a>
          </div>

          <div className="link-header-container">
            <a>Projects</a>
          </div>

          <div className="link-header-container">
            <a>Contact</a>
          </div>
        </div>

        <div className="resume-header-container ">
          <a
            href="/Resume/Resume-English.pdf"
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
