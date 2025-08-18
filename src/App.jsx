import About from "./components/About";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Publications />
      <Skills />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;