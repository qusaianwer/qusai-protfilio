import { useState } from "react";
import { skillCategories } from "../data/skillsData";
import { FaGraduationCap, FaAward, FaLightbulb, FaLaptopCode } from "react-icons/fa";

function About() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCategories =
    activeCategory === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeCategory);

  return (
    <section className="ab-section" id="about">
      <div className="ab-container">
        {/* Section Header */}
        <div className="ab-header">
          <div className="section-eyebrow">
            <FaLaptopCode className="eyebrow-icon" /> Background & Competencies
          </div>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Engineering solid foundations, embracing cutting-edge automation, and solving real-world challenges.
          </p>
        </div>

        {/* Narrative & Education Grid */}
        <div className="ab-overview-grid">
          {/* Bio Story */}
          <div className="ab-bio-card">
            <h3 className="ab-card-title">
              <FaLightbulb className="ab-title-icon" /> Engineering Philosophy
            </h3>
            <p>
              I'm <strong>Qusai Anwer</strong>, a Software Engineering student at the{" "}
              <strong>World Islamic Sciences & Education University (WISE)</strong> in Amman, Jordan. 
              My journey in software is driven by a deep fascination with turning raw logic and algorithms into 
              intuitive, dependable software products.
            </p>
            <p>
              Beyond traditional development, I actively specialize in <strong>AI workflow automation</strong> using{" "}
              <strong>n8n</strong> and autonomous agents, bridging the gap between cutting-edge AI capabilities 
              and local business operations.
            </p>
            <p>
              Through my YouTube channel <strong>Q3V</strong>, I share tutorials on Java, data structures, and 
              algorithmic problem solving, believing that teaching is one of the highest forms of mastery.
            </p>

            <div className="ab-quote-box">
              <p className="ab-quote">
                "Code is more than syntax; it is the craft of solving human and operational problems with precision and clarity."
              </p>
            </div>
          </div>

          {/* Education & Academic Card */}
          <div className="ab-education-card">
            <h3 className="ab-card-title">
              <FaGraduationCap className="ab-title-icon" /> Academic Foundation
            </h3>
            <div className="ab-edu-item">
              <div className="ab-edu-badge">In Progress</div>
              <h4 className="ab-edu-degree">B.Sc. in Software Engineering</h4>
              <p className="ab-edu-inst">
                World Islamic Sciences & Education University (WISE)
              </p>
              <p className="ab-edu-loc">Amman, Jordan • جامعة العلوم الإسلامية العالمية</p>
              
              <div className="ab-coursework">
                <span className="ab-cw-title">Key Core Disciplines:</span>
                <ul className="ab-cw-list">
                  <li>Data Structures & Algorithms Analysis</li>
                  <li>Object-Oriented Programming (Java & C++)</li>
                  <li>Relational Databases & SQL Schema Design</li>
                  <li>Software Architecture & Quality Assurance</li>
                  <li>Distributed Systems & Web Technologies</li>
                </ul>
              </div>
            </div>

            <div className="ab-goal-box">
              <div className="ab-goal-header">
                <FaAward className="ab-goal-icon" />
                <h4>Career Objective</h4>
              </div>
              <p>
                To innovate as a versatile Software Engineer by delivering high-leverage products, architecting 
                resilient AI automation systems, and contributing to impactful engineering teams worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Skills Matrix */}
        <div className="ab-skills-section">
          <div className="ab-skills-header">
            <h3 className="ab-skills-title">Technical Skills & Tooling</h3>
            <div className="ab-category-tabs">
              <button
                className={`ab-tab-btn ${activeCategory === "all" ? "active" : ""}`}
                onClick={() => setActiveCategory("all")}
              >
                All Skills
              </button>
              {skillCategories.map((cat) => (
                <button
                  key={cat.id}
                  className={`ab-tab-btn ${activeCategory === cat.id ? "active" : ""}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.title}
                </button>
              ))}
            </div>
          </div>

          <div className="ab-skills-grid">
            {filteredCategories.map((category) => (
              <div className="ab-skill-category-card" key={category.id}>
                <div className="ab-cat-header">
                  <h4 className="ab-cat-title">{category.title}</h4>
                  <span className="ab-cat-desc">{category.description}</span>
                </div>

                <div className="ab-cat-chips">
                  {category.skills.map((skill) => (
                    <div className="ab-skill-chip" key={skill.name}>
                      <span className="skill-dot" style={{ backgroundColor: skill.color || "var(--cyan)" }} />
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-badge">{skill.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
