import { useEffect, lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Stats from "./components/stats";
import Footer from "./components/footer";
import AnimatedBackground from "./components/AnimatedBackground";
import "./App.css";

// Each page is loaded only when the visitor opens it (smaller first load)
const About = lazy(() => import("./components/about"));
const Projects = lazy(() => import("./components/projects"));
const Services = lazy(() => import("./components/services"));
const Contact = lazy(() => import("./components/contact"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <>
      <AnimatedBackground />
      <div className="App">
        <ScrollToTop />
        <Navbar />
        <main className="page-view">
          <Suspense fallback={null}>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <Stats />
                  </>
                }
              />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Hero />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
