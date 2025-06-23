import { Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const quickLinks = ['Home', 'About', 'Skills', 'Projects', 'Testimonials',  'Contact'];
  
  return (
    <footer className="bg-white dark:bg-dark-bg border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-xl font-bold text-light-text dark:text-dark-text">
              RAHUL SHARMA<span className="text-accent-pink dark:text-accent-cyan">.</span>
            </h2>
            <p className="mt-4 text-light-muted dark:text-dark-muted">
              Front-end developer specializing in creating beautiful, functional web experiences with modern technologies.
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-light-text dark:text-dark-text mb-4">Quick Links</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2">
              {quickLinks.map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-light-muted dark:text-dark-muted hover:text-accent-pink 
                      dark:hover:text-accent-cyan transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-light-text dark:text-dark-text mb-4">Services</h3>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2">
              {['Web Development', 'SEO Optimization', 'Frontend Consulting', 'Code Review', 'Performance Optimization'].map((service) => (
                <li key={service}>
                  <a 
                    href="#"
                    className="text-light-muted dark:text-dark-muted hover:text-accent-pink 
                      dark:hover:text-accent-cyan transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-light-text dark:text-dark-text mb-4">Connect</h3>
            <div className="flex space-x-4 mb-6">
              <a 
                href="https://github.com/Sharmaji08"
                className="p-2 rounded-full bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text
                  hover:bg-accent-pink hover:text-white dark:hover:bg-accent-cyan dark:hover:text-dark-bg 
                  transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/rahul-sharma-485508211/"
                className="p-2 rounded-full bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text
                  hover:bg-accent-pink hover:text-white dark:hover:bg-accent-cyan dark:hover:text-dark-bg 
                  transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://x.com/RahulSharma7217"
                className="p-2 rounded-full bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text
                  hover:bg-accent-pink hover:text-white dark:hover:bg-accent-cyan dark:hover:text-dark-bg 
                  transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-light-card dark:bg-dark-card 
                text-light-text dark:text-dark-text hover:bg-accent-pink hover:text-white 
                dark:hover:bg-accent-cyan dark:hover:text-dark-bg transition-all duration-300"
            >
              <ArrowUp className="w-4 h-4" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-light-muted dark:text-dark-muted">
            © {new Date().getFullYear()} Rahul Sharma. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;