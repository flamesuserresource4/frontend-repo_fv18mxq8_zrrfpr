import { Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-neutral-200/70 dark:border-neutral-800 bg-gradient-to-br from-white to-white/60 dark:from-neutral-900 dark:to-neutral-900/40 backdrop-blur p-8">
          <div className="grid gap-10 md:grid-cols-3 items-center">
            <div className="md:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-bold">Let’s build something delightful</h2>
              <p className="mt-2 text-neutral-600 dark:text-neutral-300 max-w-xl">
                Available for product design, prototyping, and design systems work. I usually reply within 24 hours.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
                <a
                  href="mailto:hello@ava.design?subject=Project%20Inquiry"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-sm hover:shadow-md transition-shadow"
                >
                  <Mail size={18} /> Email me
                </a>
                <div className="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-300">
                  <MapPin size={16} /> Remote • Worldwide
                </div>
              </div>
            </div>
            <div className="md:col-span-1">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const data = new FormData(e.currentTarget);
                  const name = data.get('name');
                  const msg = encodeURIComponent(`Hi Ava, I'm ${name}. I'd love to talk about…`);
                  window.location.href = `mailto:hello@ava.design?subject=Hello%20Ava&body=${msg}`;
                }}
                className="space-y-3"
              >
                <div>
                  <label className="block text-xs font-medium text-neutral-600 dark:text-neutral-300">Name</label>
                  <input name="name" required className="mt-1 w-full rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/60 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-600 dark:text-neutral-300">Email</label>
                  <input type="email" name="email" required className="mt-1 w-full rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/60 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-600 dark:text-neutral-300">Message</label>
                  <textarea name="message" rows="4" className="mt-1 w-full rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white/80 dark:bg-neutral-900/60 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <button type="submit" className="w-full inline-flex justify-center rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2.5 font-medium">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-neutral-500 dark:text-neutral-500">
          © {new Date().getFullYear()} Ava — UI/UX Designer. All rights reserved.
        </p>
      </div>
    </section>
  );
}
