import { useState, useEffect, memo } from "react";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaYoutube, FaArrowRight, FaEnvelope } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import photo from "../photo/photo_optimized.jpg";

const roles = [
  "Software Engineer",
  "AI & Workflow Automator",
  "Full-Stack Web Developer",
  "Computer Science Instructor (Q3V)"
];

// Leaf component for dynamic role rotations — prevents Hero from re-rendering every 3.2s
const RoleRotator = memo(function RoleRotator() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    let timeout = 0;
    const interval = setInterval(() => {
      if (document.hidden) return;
      setFade(false);
      timeout = setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setFade(true);
      }, 250);
    }, 3200);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <span className={`hr-role-text ${fade ? "fade-in" : "fade-out"}`}>
      {roles[roleIndex]}
    </span>
  );
});

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hr-section" id="hero">
      <div className="hr-container">
        <div className="hr-content">
          {/* Status Badge */}
          <div className="hr-badge">
            <span className="hr-badge-dot" />
            <span className="hr-badge-text">Available for Projects & Engineering Roles</span>
            <HiSparkles className="hr-badge-icon" />
          </div>

          <div className="hr-intro">Hello, my name is</div>
          <h1 className="hr-name">
            Qusai <span className="hr-name-gradient">Anwer</span>
          </h1>

          {/* Dynamic Animated Role (Isolated Re-render) */}
          <div className="hr-role-wrapper">
            <span className="hr-role-prefix">Specializing in</span>
            <RoleRotator />
          </div>

          {/* Education & Location Chip */}
          <div className="hr-location-chip">
            <span className="hr-loc-icon">🎓</span>
            <span>Software Engineering • <strong>WISE University</strong> • Amman, Jordan</span>
          </div>

          <p className="hr-tagline">
            Turning complex code and workflows into high-impact digital realities.
          </p>

          <p className="hr-bio">
            I am a Software Engineering student at the <strong>World Islamic Sciences & Education University (WISE)</strong> in Amman, Jordan. 
            Passionate about building scalable applications, architecting autonomous <strong>AI & n8n automation pipelines</strong>, 
            and demystifying computer science concepts through practical education.
          </p>

          {/* Primary Action Buttons */}
          <div className="hr-buttons">
            <button
              onClick={() => navigate("/projects")}
              className="hr-btn hr-btn-primary"
            >
              Explore My Work <FaArrowRight className="btn-icon-right" />
            </button>

            <a
              href="https://github.com/qusaianwer"
              target="_blank"
              rel="noopener noreferrer"
              className="hr-btn hr-btn-secondary"
            >
              <FaGithub /> GitHub
            </a>

            <a
              href="https://youtube.com/@q3v_203?si=nJ_gJDI9gQJcoDzD"
              target="_blank"
              rel="noopener noreferrer"
              className="hr-btn hr-btn-secondary"
            >
              <FaYoutube className="yt-icon" /> Q3V Channel
            </a>

            <button
              onClick={() => navigate("/contact")}
              className="hr-btn hr-btn-ghost"
            >
              <FaEnvelope /> Get In Touch
            </button>
          </div>
        </div>

        {/* Profile Avatar with Radiant Cyber Glow */}
        <div className="hr-photo-container">
          <div className="hr-photo-glow" />
          <div className="hr-photo-ring">
            <img
              src={photo}
              alt="Qusai Anwer"
              className="hr-photo"
              width="320"
              height="320"
              fetchPriority="high"
              decoding="async"
            />
            <div className="hr-photo-badge" title="WISE Software Engineer">
              <span>WISE SE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Hero);
