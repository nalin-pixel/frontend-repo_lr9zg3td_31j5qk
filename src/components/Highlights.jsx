import React from 'react';
import { ShieldCheck, Users, Trophy } from 'lucide-react';

const items = [
  {
    icon: ShieldCheck,
    title: 'Secure & Reliable',
    desc: 'JWT auth, role-based access, and robust infrastructure keep your data safe.',
  },
  {
    icon: Users,
    title: 'Dynamic CMS',
    desc: 'Manage courses, faculty, announcements, gallery, and blog in real-time.',
  },
  {
    icon: Trophy,
    title: 'Student Success',
    desc: 'Modern UX, responsive design, and accessibility to support every learner.',
  },
];

export default function Highlights() {
  return (
    <section id="features" className="py-16 md:py-20 bg-slate-50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-center">Why E‑Shiksha</h2>
        <p className="mt-2 text-center text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          A complete solution for institutes to manage content and engage students effectively.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6">
              <div className="inline-flex p-3 rounded-lg bg-indigo-600/10 text-indigo-700">
                <Icon />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
