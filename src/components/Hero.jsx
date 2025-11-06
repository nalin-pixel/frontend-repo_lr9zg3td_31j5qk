import React from 'react';
import { Rocket, Star } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6sIHk2M0oYh4i7cO/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white dark:from-slate-900/70 dark:via-slate-900/60 dark:to-slate-900 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="pointer-events-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 ring-1 ring-indigo-200 mb-6">
              <Star size={16} />
              <span className="text-xs font-medium">Welcome to E‑Shiksha</span>
            </div>
            <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Transform Learning with a Modern, Dynamic Institute Website
            </h1>
            <p className="mt-4 md:mt-6 text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
              A professional platform for courses, faculty, announcements, admissions, and a powerful admin dashboard—fully dynamic and mobile friendly.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#courses" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-indigo-600 text-white shadow hover:bg-indigo-500">
                <Rocket size={18} /> Explore Courses
              </a>
              <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
