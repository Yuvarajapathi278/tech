import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Apply light as default, only apply dark if explicitly saved
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
  localStorage.setItem('theme', 'light');
}

createRoot(document.getElementById('root')!).render(<App />);