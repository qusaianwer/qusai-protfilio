import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa"
function Hero() {
  return (
    <section className="hero" id="hero">
      <h1>Hello, my name is " Qusai Anwer "</h1>
      <h3>Student Software Engineer • WISE • JORDAN </h3>
      <p>Turning code into things that actually work.</p>
      <p>I’m Qusai Anwer, a Software Engineering student at International Islamic University of Jordan, passionate about building modern digital experiences, solving programming problems, and turning ideas into real-world projects.</p>
      <Link to="/projects">
        <button>View My Projects</button>
        </Link>
      <a href="https://github.com/qusaianwer"><button><FaGithub className="btn-icon"/> Explore My GitHub</button></a>
      
    </section>
  );
}

export default Hero;