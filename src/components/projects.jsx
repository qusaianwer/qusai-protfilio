import { useState, memo } from "react";
import { projectsData, projectCategories } from "../data/projectsData";
import { FaYoutube, FaDownload, FaExternalLinkAlt, FaCode, FaCheckCircle, FaWindows, FaAndroid } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter(
          (p) => p.category === activeCategory || (activeCategory === "all")
        );

  return (
    <section className="pj-section" id="projects">
      <div className="pj-container">
        {/* Header */}
        <div className="pj-header">
          <div className="section-eyebrow">
            <FaCode className="eyebrow-icon" /> Portfolio & Production Work
          </div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of software applications, automation pipelines, and educational platforms I have architected and deployed.
          </p>

          {/* Category Filter Tabs */}
          <div className="pj-filter-tabs">
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`pj-tab-btn ${activeCategory === cat.id ? "active" : ""}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="pj-grid">
          {filteredProjects.map((project) => {
            // Render Under Construction Card
            if (project.underConstruction) {
              return (
                <div className="pj-card p4-card" key={project.id} role="status">
                  <div className="p4-inner">
                    <svg
                      className="p4-gear"
                      viewBox="0 0 24 24"
                      width="48"
                      height="48"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="3.2" />
                      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h0a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v0a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
                    </svg>

                    <span className="pj-badge pj-badge-upcoming">In Development</span>
                    <h3 className="p4-title">{project.title}</h3>
                    <p className="p4-sub">
                      Under Active Architecture
                      <span className="p4-dots" aria-hidden="true"><i /><i /><i /></span>
                    </p>

                    <div className="p4-bar" aria-hidden="true"><span /></div>
                    <p className="p4-note">{project.description}</p>

                    <div className="pj-tech-list" style={{ justifyContent: "center", marginTop: "16px" }}>
                      {project.technologies.map((t) => (
                        <span className="pj-tech-tag" key={t}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            // Standard Featured Project Card
            return (
              <div className="pj-card" key={project.id}>
                <div className="pj-card-top">
                  <div className="pj-card-meta">
                    <span className="pj-badge">{project.categoryLabel}</span>
                    {project.featured && (
                      <span className="pj-featured-pill">
                        <HiSparkles /> Featured
                      </span>
                    )}
                  </div>
                  <span className="pj-role-tag">{project.role}</span>
                </div>

                <h3 className="pj-title">{project.title}</h3>
                <p className="pj-tagline">{project.tagline}</p>

                <p className="pj-description">{project.description}</p>

                {/* Highlights List */}
                <div className="pj-highlights">
                  <span className="pj-hl-heading">Key Features & Architecture:</span>
                  <ul className="pj-hl-list">
                    {project.highlights.map((hl, idx) => (
                      <li key={idx}>
                        <FaCheckCircle className="pj-check-icon" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Badges */}
                <div className="pj-tech-wrap">
                  <span className="pj-tech-label">Tech Stack:</span>
                  <div className="pj-tech-list">
                    {project.technologies.map((tech) => (
                      <span className="pj-tech-tag" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions: Links / Downloads */}
                <div className="pj-actions">
                  {/* YouTube Link */}
                  {project.links &&
                    project.links.map((link) => {
                      if (link.type === "youtube") {
                        return (
                          <a
                            key={link.label}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pj-btn pj-btn-yt"
                          >
                            <FaYoutube className="btn-icon" /> {link.label}
                          </a>
                        );
                      }
                      if (link.type === "github") {
                        return (
                          <a
                            key={link.label}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pj-btn pj-btn-gh"
                          >
                            <FaCode className="btn-icon" /> {link.label}
                          </a>
                        );
                      }
                      return (
                        <a
                          key={link.label}
                          href={link.url}
                          className="pj-btn pj-btn-secondary"
                        >
                          <FaExternalLinkAlt className="btn-icon" /> {link.label}
                        </a>
                      );
                    })}

                  {/* ExpTrack Downloads */}
                  {project.downloads && (
                    <div className="pj-download-group">
                      {project.downloads.map((dl) => (
                        <a
                          key={dl.platform}
                          href={dl.url}
                          download={dl.filename}
                          className="pj-dl-btn"
                          title={`Download ${dl.filename} (${dl.size})`}
                        >
                          <span className="pj-dl-icon">
                            {dl.platform.includes("Windows") ? <FaWindows /> : <FaAndroid />}
                          </span>
                          <span className="pj-dl-info">
                            <span className="pj-dl-name">{dl.platform}</span>
                            <span className="pj-dl-size">{dl.size}</span>
                          </span>
                          <FaDownload className="pj-dl-arrow" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default memo(Projects);
