import React from 'react';
import { School, Menu, Moon, Sun } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [dark, setDark] = React.useState(false);

  React.useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 dark:bg-slate-900/80 border-b border-slate-200/60 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-indigo-600 text-white">
              <School size={20} />
            </div>
            <span className="font-semibold text-lg tracking-tight">E‑Shiksha</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#courses" className="hover:text-indigo-600">Courses</a>
            <a href="#features" className="hover:text-indigo-600">Highlights</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
            <button
              onClick={() => setDark(v => !v)}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
              <span className="hidden sm:inline">{dark ? 'Light' : 'Dark'}</span>
            </button>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-slate-200 dark:border-slate-700"
            onClick={() => setOpen(o => !o)}
            aria-label="Open menu"
          >
            <Menu />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-3">
            <a href="#courses" className="py-1" onClick={() => setOpen(false)}>Courses</a>
            <a href="#features" className="py-1" onClick={() => setOpen(false)}>Highlights</a>
            <a href="#contact" className="py-1" onClick={() => setOpen(false)}>Contact</a>
            <button
              onClick={() => { setDark(v => !v); setOpen(false); }}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-slate-200 dark:border-slate-700 w-max"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
              <span>{dark ? 'Light mode' : 'Dark mode'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
