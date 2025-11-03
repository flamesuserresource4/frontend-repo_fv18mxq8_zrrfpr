import Spline from '@splinetool/react-spline';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[92vh] w-full overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0" aria-hidden>
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradients over the scene (non-blocking) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white/90 dark:from-black/70 dark:via-black/20 dark:to-black/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20 grid md:grid-cols-12 items-center gap-10">
        <div className="md:col-span-7">
          <p className="inline-flex items-center gap-2 text-xs font-medium px-2.5 py-1.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100 dark:bg-indigo-500/10 dark:text-indigo-300 dark:border-indigo-500/30">
            <CheckCircle size={14} /> 6+ years crafting interfaces
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-600 dark:from-white dark:via-neutral-200 dark:to-neutral-400 bg-clip-text text-transparent">
            Product-focused UI/UX Designer
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl">
            I design modern, usable, and accessible products — from 0→1 explorations to end-to-end design systems. I combine research, motion, and prototyping to ship delightful experiences.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-sm hover:shadow-md transition-shadow"
            >
              View selected work <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 text-neutral-800 dark:text-neutral-100"
            >
              Get in touch
            </a>
          </div>
          <div className="mt-8 grid grid-cols-2 sm:flex sm:flex-row gap-6 text-sm text-neutral-500 dark:text-neutral-400">
            <div>
              <p className="font-semibold text-neutral-900 dark:text-white">SaaS</p>
              <p>Dashboards & Design Systems</p>
            </div>
            <div>
              <p className="font-semibold text-neutral-900 dark:text-white">Mobile</p>
              <p>iOS & Android Prototypes</p>
            </div>
            <div>
              <p className="font-semibold text-neutral-900 dark:text-white">E-commerce</p>
              <p>Conversion & UX Audits</p>
            </div>
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="relative p-2 rounded-2xl border border-white/60 dark:border-white/10 bg-white/30 dark:bg-white/5 backdrop-blur">
            <div className="rounded-xl p-6 bg-white/70 dark:bg-neutral-900/60 border border-white/60 dark:border-white/10">
              <p className="text-sm text-neutral-600 dark:text-neutral-300">Featured capability</p>
              <h3 className="mt-2 text-xl font-semibold">High-fidelity prototyping</h3>
              <p className="mt-2 text-neutral-600 dark:text-neutral-300">
                Motion, interaction, and micro-animations to bring concepts to life.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-center gap-2"><span className="text-emerald-500">•</span> Interactive flows</li>
                <li className="flex items-center gap-2"><span className="text-emerald-500">•</span> Usability testing</li>
                <li className="flex items-center gap-2"><span className="text-emerald-500">•</span> Design tokens</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
