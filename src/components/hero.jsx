import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import photo from "../photo/photo_2026-09-23_21-24-46.jpg";

function Hero() {
  return (
    <section className="hr-section" id="hero">
      <div className="hr-content">
        <p className="hr-hello">Hello, my name is</p>
        <h1 className="hr-name">Qusai Anwer</h1>
        <h3 className="hr-role">Student Software Engineer • WISE • JORDAN</h3>
        <p className="hr-tagline">Turning code into things that actually work.</p>
        <p className="hr-about">
          I'm Qusai Anwer, a Software Engineering student at International
          Islamic University of Jordan, passionate about building modern
          digital experiences, solving programming problems, and turning ideas
          into real-world projects.
        </p>

        <div className="hr-buttons">
          <Link to="/projects" className="hr-btn">View My Projects</Link>
          <a
            href="https://github.com/qusaianwer"
            target="_blank"
            rel="noopener noreferrer"
            className="hr-btn"
          >
            <FaGithub /> Explore My GitHub
          </a>
        </div>
      </div>

      <div className="hr-photo-wrap">
        <img src={photo} alt="Qusai Anwer" className="hr-photo" />
      </div>
    </section>
  );
}

export default Hero;