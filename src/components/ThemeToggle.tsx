import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Toggle } from '@/components/ui/toggle';
import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const handleToggle = () => {
    toggleTheme(); // Toggle the theme and persist it in localStorage
  };

  return (
    <Toggle
      pressed={theme === 'light'}
      onPressedChange={handleToggle}
      aria-label="Toggle theme"
      className={`border ${theme === 'dark' ? 'border-white/10' : 'border-black/10'} rounded-full w-10 h-10 p-0 ${theme === 'light' ? 'bg-white shadow-md' : 'bg-transparent'} transition-all duration-300 hover:scale-110`}
    >
      {theme === 'dark' ? (
        <Sun className="h-4 w-4 text-yellow-400 animate-pulse" />
      ) : (
        <Moon className="h-4 w-4 text-gray-900" />
      )}
    </Toggle>
  );
}