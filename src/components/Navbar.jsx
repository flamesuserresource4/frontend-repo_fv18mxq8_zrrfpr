import { useState, useEffect } from 'react';
import { Rocket } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur bg-white/70 dark:bg-neutral-900/60 border-b border-black/5' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <button onClick={() => scrollTo('hero')} className="inline-flex items-center gap-2 font-semibold text-neutral-900 dark:text-white">
          <span className="p-2 rounded-lg bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-cyan-400 text-white shadow-sm">
            <Rocket size={18} />
          </span>
          <span>UX by Ava</span>
        </button>
        <div className="hidden sm:flex items-center gap-6 text-sm">
          <button onClick={() => scrollTo('projects')} className="hover:text-indigo-600 transition-colors">Projects</button>
          <button onClick={() => scrollTo('experience')} className="hover:text-indigo-600 transition-colors">Experience</button>
          <button onClick={() => scrollTo('contact')} className="hover:text-indigo-600 transition-colors">Contact</button>
        </div>
      </nav>
    </header>
  );
}
