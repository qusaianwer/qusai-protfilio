import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../photo/photo_2026-09-23_21-24-46.jpg";

const navLinks = [
  { label: "Home", href: "#hero", route: "/" },
  { label: "About", href: "#about", route: "/" },
  { label: "Projects", href: "#projects", route: "/projects" },
  { label: "Services", href: "#services", route: "/services" },
  { label: "Contact", href: "#contact", route: "/contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Scrollspy on home page
      if (location.pathname === "/") {
        const sections = ["hero", "about", "projects", "services", "contact"];
        const scrollPosition = window.scrollY + 200;

        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i]);
          if (el && el.offsetTop <= scrollPosition) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setOpen(false);

    if (location.pathname === "/") {
      const targetId = item.href.replace("#", "");
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const targetId = item.href.replace("#", "");
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
    }
  };

  return (
    <>
      <header className={`nv-header ${scrolled ? "nv-scrolled" : ""}`}>
        <nav className="nv-bar" aria-label="Main Navigation">
          <Link
            to="/"
            className="nv-logo"
            onClick={(e) => handleNavClick(e, { href: "#hero" })}
          >
            <div className="nv-logo-wrap">
              <img src={logo} alt="Qusai Anwer" className="nv-logo-img" />
              <span className="nv-status-dot" title="Available for opportunities" />
            </div>
            <div className="nv-logo-text">
              <span className="nv-logo-name">Qusai Anwer</span>
              <span className="nv-logo-sub">Software Engineer</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="nv-links nv-desktop-links">
            {navLinks.map((item) => {
              const isActive =
                location.pathname === "/"
                  ? activeSection === item.href.replace("#", "")
                  : location.pathname === item.route;

              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`nv-link ${isActive ? "active" : ""}`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="nv-actions">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, { href: "#contact" })}
              className="nv-cta-btn"
            >
              Let's Talk
            </a>

            <button
              className="nv-toggle"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Backdrop & Menu */}
      <div
        className={`nv-backdrop ${open ? "nv-backdrop-active" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <div className={`nv-mobile-drawer ${open ? "nv-drawer-open" : ""}`}>
        <div className="nv-drawer-head">
          <div className="nv-logo-wrap">
            <img src={logo} alt="Qusai Anwer" className="nv-logo-img" />
          </div>
          <div>
            <div className="nv-logo-name">Qusai Anwer</div>
            <div className="nv-logo-sub">Software Engineer • WISE</div>
          </div>
        </div>

        <ul className="nv-drawer-links">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className="nv-drawer-link"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nv-drawer-footer">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, { href: "#contact" })}
            className="nv-drawer-cta"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
