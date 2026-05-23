import './App.css';
import Navbar from './component/NavBar/navbar';
import Hero from './component/Hero/Hero';
import About from './component/About/About';
import Skills from './component/Skills/Skills';
import Projects from './component/Projects/Projects';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/footer';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <main className="app-content">
        <Hero/>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;