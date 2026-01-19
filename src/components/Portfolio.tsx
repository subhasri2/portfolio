import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Hero } from './Hero';
import { Experience } from './Experience';
import { Skills } from './Skills';
import { Projects } from './Projects';
import { Education } from './Education';
import { Hobbies } from './Hobbies';
import { BottomNav } from './BottomNav';
import { useEffect, useState } from 'react';

import { ContactModal } from './ContactModal';

export function Portfolio() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen text-slate-900 dark:text-slate-100 transition-colors duration-300 pb-24">
      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="fixed top-8 right-8 p-4 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-full shadow-lg transition-all duration-300 z-50"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? (
          <Sun className="w-6 h-6 text-yellow-400" />
        ) : (
          <Moon className="w-6 h-6 text-slate-700" />
        )}
      </button>

      <Hero />
      <div className="flex flex-col gap-10">
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Hobbies />
      </div>

      {/* Get In Touch Section */}
      <div className="py-16 text-center">
        <button
          onClick={() => setIsContactModalOpen(true)}
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-blue-500 dark:to-purple-500 dark:hover:from-blue-600 dark:hover:to-purple-600 text-white text-lg font-bold rounded-full transition-all duration-300 shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105"
        >
          Get In Touch
        </button>
      </div>

      <BottomNav onOpenContact={() => setIsContactModalOpen(true)} />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  );
}
