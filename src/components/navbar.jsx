import { useState, useEffect, memo } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../photo/photo_optimized.jpg";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 1. Zero-cost passive scroll listener with rAF throttle & state-boundary checking
  useEffect(() => {
    let ticking = false;
    let lastScrolled = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isPast = window.scrollY > 30;
          if (isPast !== lastScrolled) {
            lastScrolled = isPast;
            setScrolled(isPast);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop (passive)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setOpen(false);
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className={`nv-header ${scrolled ? "nv-scrolled" : ""}`}>
        <nav className="nv-bar" aria-label="Main Navigation">
          <Link
            to="/"
            className="nv-logo"
            onClick={() => setOpen(false)}
          >
            <div className="nv-logo-wrap">
              <img
                src={logo}
                alt="Qusai Anwer"
                className="nv-logo-img"
                width="40"
                height="40"
                loading="lazy"
                decoding="async"
              />
              <span className="nv-status-dot" title="Available for opportunities" />
            </div>
            <div className="nv-logo-text">
              <span className="nv-logo-name">Qusai Anwer</span>
              <span className="nv-logo-sub">Software Engineer</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="nv-links nv-desktop-links">
            {navLinks.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) => `nv-link ${isActive ? "active" : ""}`}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="nv-actions">
            <Link to="/contact" className="nv-cta-btn">
              Let's Talk
            </Link>

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
            <img
              src={logo}
              alt="Qusai Anwer"
              className="nv-logo-img"
              width="40"
              height="40"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <div className="nv-logo-name">Qusai Anwer</div>
            <div className="nv-logo-sub">Software Engineer • WISE</div>
          </div>
        </div>

        <ul className="nv-drawer-links">
          {navLinks.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.to}
                end={item.to === "/"}
                onClick={() => setOpen(false)}
                className="nv-drawer-link"
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="nv-drawer-footer">
          <Link to="/contact" onClick={() => setOpen(false)} className="nv-drawer-cta">
            Get In Touch
          </Link>
        </div>
      </div>
    </>
  );
}

export default memo(Navbar);
