import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../photo/photo_2026-09-23_21-24-46.jpg";

function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav className="nv-bar">
      <Link to="/" className="nv-logo" onClick={close}>
        <img src={logo} alt="Qusai" className="nv-logo-img" />
        <span>Qusai</span>
      </Link>

      <button
        className="nv-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>

      <ul className={open ? "nv-links nv-open" : "nv-links"}>
        <li><NavLink to="/" end onClick={close}>Home</NavLink></li>
        <li><a href="/#about" onClick={close}>About</a></li>
        <li><NavLink to="/services" onClick={close}>Services</NavLink></li>
        <li><NavLink to="/projects" onClick={close}>My project</NavLink></li>
        <li><NavLink to="/contact" onClick={close}>Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;