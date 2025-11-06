import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold text-lg">E‑Shiksha Institute</h4>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Empowering learners with quality education and technology.
            </p>
          </div>
          <div>
            <h5 className="font-semibold">Contact</h5>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-center gap-2"><Phone size={16}/> +91 98765 43210</li>
              <li className="flex items-center gap-2"><Mail size={16}/> contact@e-shiksha.edu</li>
              <li className="flex items-center gap-2"><MapPin size={16}/> 221B Learning St, Knowledge City</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold">Get Updates</h5>
            <form className="mt-3 flex gap-2">
              <input type="email" required placeholder="Your email" className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <button className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-500">Join</button>
            </form>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-800 text-sm text-slate-500 flex flex-col sm:flex-row justify-between">
          <p>© {new Date().getFullYear()} E‑Shiksha. All rights reserved.</p>
          <p>Built with love for education.</p>
        </div>
      </div>
    </footer>
  );
}
