import { memo } from "react";
import { FaGithub, FaYoutube, FaWhatsapp, FaInstagram, FaEnvelope, FaArrowUp } from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="ft-section">
      <div className="ft-container">
        <div className="ft-top">
          <div className="ft-brand">
            <span className="ft-logo-name">Qusai Anwer</span>
            <p className="ft-tagline">
              Software Engineer & AI Automation Developer • WISE University, Jordan
            </p>
          </div>

          <div className="ft-socials">
            <a
              href="https://github.com/qusaianwer"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="ft-soc-link"
            >
              <FaGithub />
            </a>
            <a
              href="https://youtube.com/@q3v_203?si=nJ_gJDI9gQJcoDzD"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="ft-soc-link yt"
            >
              <FaYoutube />
            </a>
            <a
              href="https://wa.me/962776822441"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="ft-soc-link wa"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/qusaialdaaja?stkn=MTV2Yjd2YnA5MHJ0dA=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="ft-soc-link ig"
            >
              <FaInstagram />
            </a>
            <a
              href="mailto:qusaianwer06@gmail.com"
              aria-label="Email"
              className="ft-soc-link mail"
            >
              <FaEnvelope />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="ft-back-top"
            aria-label="Back to top"
            title="Back to top"
          >
            <FaArrowUp /> Top
          </button>
        </div>

        <div className="ft-bottom">
          <p className="ft-copy">
            © {new Date().getFullYear()} Qusai Anwer. All rights reserved. • عمان، الأردن
          </p>
          <p className="ft-built">
            Crafted with React 19, Vite & High-Performance CSS Glassmorphism.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
