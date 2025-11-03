import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;
