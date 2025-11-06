import React from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';

const sampleCourses = [
  { id: 1, title: 'Computer Science', level: 'Undergraduate', desc: 'Programming, Data Structures, Algorithms' },
  { id: 2, title: 'Business Administration', level: 'Postgraduate', desc: 'Marketing, Finance, HRM' },
  { id: 3, title: 'Physics', level: 'Undergraduate', desc: 'Mechanics, Electromagnetism, Quantum' },
];

export default function CoursesPreview() {
  return (
    <section id="courses" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Popular Courses</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">A glimpse of programs offered. Full list coming from the dashboard.</p>
          </div>
          <a href="#" className="hidden md:inline-flex items-center gap-2 text-indigo-600 hover:underline">
            View all
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleCourses.map(course => (
            <article key={course.id} className="group rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 hover:shadow-md transition">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-indigo-600/10 text-indigo-700">
                  <BookOpen />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{course.title}</h3>
                  <p className="text-xs text-slate-500">{course.level}</p>
                </div>
              </div>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{course.desc}</p>
              <button className="mt-4 inline-flex items-center gap-2 text-sm text-indigo-600 group-hover:gap-3 transition">
                Learn more <ArrowRight size={14} />
              </button>
            </article>
          ))}
        </div>

        <div className="mt-6 md:hidden">
          <a href="#" className="inline-flex items-center gap-2 text-indigo-600 hover:underline">
            View all
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
