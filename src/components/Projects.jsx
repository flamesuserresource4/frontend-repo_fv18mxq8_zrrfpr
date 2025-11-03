import { ExternalLink, Layout, PenTool, Palette } from 'lucide-react';

const projects = [
  {
    title: 'SaaS Analytics Dashboard',
    tag: 'Web App • 2024',
    summary:
      'End-to-end redesign focused on clarity and speed. Introduced a modular design system, dark mode, and advanced filters.',
    badges: ['Design System', 'Accessibility', 'Dark Mode'],
    accent: 'from-indigo-500 to-cyan-400',
  },
  {
    title: 'Fintech Mobile Banking',
    tag: 'Mobile • 2023',
    summary:
      'Created a secure, friendly onboarding and money movement experience with delightful micro-interactions.',
    badges: ['Onboarding', 'Motion', 'Usability'],
    accent: 'from-fuchsia-500 to-rose-400',
  },
  {
    title: 'E‑commerce Growth Toolkit',
    tag: 'Platform • 2022',
    summary:
      'Optimized product discovery and checkout with data-led experiments and personalized recommendations.',
    badges: ['A/B Testing', 'Conversion', 'IA'],
    accent: 'from-emerald-500 to-teal-400',
  },
];

function ProjectCard({ project }) {
  return (
    <div className="group relative rounded-2xl border border-neutral-200/70 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 backdrop-blur p-6 overflow-hidden">
      <div className={`absolute -top-20 -right-20 h-56 w-56 rounded-full bg-gradient-to-br ${project.accent} opacity-20 blur-2xl`} aria-hidden />
      <div className="flex items-center gap-3">
        <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${project.accent}`} />
        <div>
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{project.title}</h3>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">{project.tag}</p>
        </div>
      </div>
      <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-300">{project.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.badges.map((b) => (
          <span key={b} className="text-xs px-2.5 py-1 rounded-full border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300">
            {b}
          </span>
        ))}
      </div>
      <div className="mt-5 flex items-center gap-4 text-sm">
        <a href="#" className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-700">
          Case study <ExternalLink size={14} />
        </a>
        <a href="#" className="inline-flex items-center gap-1 text-neutral-600 hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-white">
          Prototype <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-indigo-50/40 to-transparent dark:via-indigo-500/5" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Selected Work</p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold">Impactful projects</h2>
            <p className="mt-2 text-neutral-600 dark:text-neutral-300 max-w-2xl">
              A snapshot of multi-platform work spanning research, interaction, and systematized UI.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-3 text-sm text-neutral-500 dark:text-neutral-400">
            <Layout size={16} /> Layouts
            <PenTool size={16} /> Interactions
            <Palette size={16} /> Visual
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
