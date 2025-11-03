import { CheckCircle2 } from 'lucide-react';

const items = [
  {
    title: 'Senior Product Designer',
    org: 'Freelance / Contract',
    period: '2022 — Present',
    points: [
      'Led 0→1 product discovery and MVP launches for SaaS teams',
      'Built multi-brand design systems with tokens and theming',
      'Shipped motion prototypes improving task success by 18%'
    ],
  },
  {
    title: 'UI/UX Designer',
    org: 'Growth-focused Startups',
    period: '2019 — 2022',
    points: [
      'Redesigned core funnels to increase conversion and retention',
      'Partnered with engineering to optimize handoff and QA',
      'Applied research insights to improve accessibility (WCAG)'
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-medium uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Background</p>
        <h2 className="mt-2 text-2xl sm:text-3xl font-bold">6 years of hands-on design</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {items.map((role) => (
            <div key={role.title} className="rounded-2xl border border-neutral-200/70 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/60 backdrop-blur p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold">{role.title}</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">{role.org}</p>
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">{role.period}</p>
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                {role.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2">
                    <CheckCircle2 size={16} className="mt-0.5 text-emerald-500" />
                    <span className="text-neutral-700 dark:text-neutral-300">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
