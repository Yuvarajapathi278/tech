import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full border ${
        theme === 'dark' ? 'border-white/10' : 'border-black/10'
      } ${
        theme === 'light' ? 'bg-white shadow-md' : 'bg-transparent'
      } transition-all duration-300 hover:scale-110`}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="h-4 w-4 text-yellow-400" />
      ) : (
        <Moon className="h-4 w-4 text-gray-900" />
      )}
    </button>
  );
}