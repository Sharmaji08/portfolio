import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const handleScrollToContact = () => {
  const section = document.getElementById('Contact');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    console.log('Scroll triggered');

  }
};


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Testimonials', 'Contact'];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
        ${scrolled ? 'bg-white/90 dark:bg-dark-bg/90 backdrop-blur-sm shadow-md' : 'bg-transparent'}
      `}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span 
              className="text-xl font-bold cursor-pointer text-light-text dark:text-dark-text"
              onClick={() => scrollToSection('home')}
            >
              RAHUL SHARMA<span className="text-accent-pink dark:text-accent-cyan">.</span>
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex flex-wrap justify-center space-x-4 lg:space-x-6">
              {navItems.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="px-2 py-1 text-light-text dark:text-dark-text hover:text-accent-pink 
                      dark:hover:text-accent-cyan transition-colors duration-300 font-medium text-sm lg:text-base"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            <button
            onClick={handleScrollToContact}
              className="hidden lg:block px-4 py-2 rounded-full bg-primary-600 text-white
                hover:bg-primary-700 transition-all duration-300 font-medium text-sm"
            >
              Hire Me
            </button>
            
            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-md text-light-text dark:text-dark-text
                hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-white/95 dark:bg-dark-bg/95 backdrop-blur-sm 
          animate-fadeIn overflow-y-auto">
          <nav className="container mx-auto px-4 py-6">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="w-full text-left px-4 py-3 rounded-lg text-lg font-medium
                      text-light-text dark:text-dark-text hover:bg-gray-100 dark:hover:bg-gray-800 
                      transition-colors duration-300"
                  >
                    {item}
                  </button>
                </li>
              ))}
              <li>
                <button
                onClick={handleScrollToContact}
                  className="w-full px-4 py-3 rounded-lg text-lg font-medium text-white
                    bg-primary-600 hover:bg-primary-700 transition-colors duration-300"
                >
                  Hire Me
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;