import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface LandingPageProps {
  onGetStarted: () => void;
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen transition-colors duration-300 relative overflow-hidden">
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

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="mb-8 text-6xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 animate-fade-in drop-shadow-2xl">
            Welcome To My Portfolio
          </h1>

          <p className="mb-12 text-xl md:text-2xl text-slate-800 dark:text-slate-200 max-w-3xl mx-auto font-semibold drop-shadow-md bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm py-3 px-6 rounded-full border border-white/20 dark:border-slate-700/30">
            Discover my journey in cloud computing and DevOps engineering
          </p>

          <button
            onClick={onGetStarted}
            className="group relative px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 dark:from-blue-500 dark:to-purple-500 dark:hover:from-blue-600 dark:hover:to-purple-600 text-white rounded-full shadow-2xl shadow-blue-500/30 dark:shadow-blue-500/20 hover:shadow-blue-500/50 dark:hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105"
          >
            <span className="flex items-center gap-3">
              Let's Get Started
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}