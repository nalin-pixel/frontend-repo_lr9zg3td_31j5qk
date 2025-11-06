import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Highlights from './components/Highlights.jsx';
import CoursesPreview from './components/CoursesPreview.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900 dark:from-slate-950 dark:to-slate-900">
      <Navbar />
      <main id="home" role="main">
        <Hero />
        <Highlights />
        <CoursesPreview />
      </main>
      <Footer />
    </div>
  );
}
