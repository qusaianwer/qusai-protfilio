import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import Services from './components/services';
import AnimatedBackground from './components/AnimatedBackground';
import './App.css';

function App() {
  return (
    <>
      <AnimatedBackground />
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                
              </>
            }
          />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <footer>© 2026 Qusai. جميع الحقوق محفوظة</footer>
      </div>
    </>
  );
}

export default App;
