import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className="relative p-2 rounded-full transition-all duration-300 ease-in-out
        hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 
        focus:ring-accent-pink dark:focus:ring-accent-cyan"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-light-text transition-transform duration-300 hover:rotate-12" />
      ) : (
        <Sun className="w-5 h-5 text-dark-text transition-transform duration-300 hover:rotate-12" />
      )}
    </button>
  );
};

export default ThemeToggle;