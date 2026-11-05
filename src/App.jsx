import { useEffect } from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Stats from "./components/stats";
import About from "./components/about";
import Projects from "./components/projects";
import Services from "./components/services";
import Contact from "./components/contact";
import Footer from "./components/footer";
import AnimatedBackground from "./components/AnimatedBackground";
import "./App.css";

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else if (location.pathname !== "/") {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return (
    <>
      <AnimatedBackground />
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <main id="main-content">
                <Hero />
                <Stats />
                <About />
                <Projects />
                <Services />
                <Contact />
              </main>
            }
          />
          <Route
            path="/projects"
            element={
              <main className="page-view">
                <div className="page-view-bar">
                  <Link to="/" className="page-view-back-btn">
                    <FaArrowLeft /> Back to Full Overview
                  </Link>
                </div>
                <Projects />
              </main>
            }
          />
          <Route
            path="/services"
            element={
              <main className="page-view">
                <div className="page-view-bar">
                  <Link to="/" className="page-view-back-btn">
                    <FaArrowLeft /> Back to Full Overview
                  </Link>
                </div>
                <Services />
              </main>
            }
          />
          <Route
            path="/contact"
            element={
              <main className="page-view">
                <div className="page-view-bar">
                  <Link to="/" className="page-view-back-btn">
                    <FaArrowLeft /> Back to Full Overview
                  </Link>
                </div>
                <Contact />
              </main>
            }
          />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
