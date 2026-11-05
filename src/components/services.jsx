import { memo } from "react";
import { useNavigate } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import {
  FaLaptopCode,
  FaRobot,
  FaNetworkWired,
  FaWhatsapp,
  FaServer,
  FaPalette,
  FaWrench,
  FaArrowRight,
  FaCheck
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

const iconMap = {
  FaLaptopCode: <FaLaptopCode />,
  FaRobot: <FaRobot />,
  FaNetworkWired: <FaNetworkWired />,
  FaWhatsapp: <FaWhatsapp />,
  FaServer: <FaServer />,
  FaPalette: <FaPalette />,
  FaWrench: <FaWrench />
};

function Services() {
  const navigate = useNavigate();

  const handleSelectService = (serviceTitle) => {
    navigate("/contact", { state: { subject: `Inquiry: ${serviceTitle}` } });
  };

  return (
    <section className="sv-section" id="services">
      <div className="sv-container">
        {/* Header */}
        <div className="sv-header">
          <div className="section-eyebrow">
            <HiSparkles className="eyebrow-icon" /> Engineering Capabilities
          </div>
          <h2 className="section-title">Services & Solutions</h2>
          <p className="section-subtitle">
            From modern responsive web applications to autonomous AI automation pipelines and messaging integrations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="sv-grid">
          {servicesData.map((s) => (
            <div className="sv-card" key={s.id}>
              <div className="sv-card-top">
                <div className="sv-icon-wrap">{iconMap[s.iconName] || <FaLaptopCode />}</div>
                <span className="sv-badge">{s.badge}</span>
              </div>

              <h3 className="sv-title">{s.title}</h3>
              <p className="sv-subtitle-text">{s.subtitle}</p>
              <p className="sv-desc">{s.desc}</p>

              {/* Deliverables */}
              <div className="sv-deliverables">
                <span className="sv-del-label">What's Included:</span>
                <ul className="sv-del-list">
                  {s.deliverables.map((item, idx) => (
                    <li key={idx}>
                      <FaCheck className="sv-check" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => handleSelectService(s.title)}
                className="sv-btn-inquire"
              >
                Inquire About This <FaArrowRight className="btn-icon-right" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Services);
