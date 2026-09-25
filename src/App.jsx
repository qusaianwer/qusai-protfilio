import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />

      <footer>
        © 2026 Qusai. جميع الحقوق محفوظة</footer>
    </div>
  );
}

export default App;