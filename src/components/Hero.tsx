import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home"
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-white to-light-card dark:from-dark-bg dark:to-dark-card"
    >
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-6 animate-slideUp">
            <p className="text-accent-pink dark:text-accent-cyan font-medium">Hello, I'm</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-light-text dark:text-dark-text">
              Rahul Sharma
            </h1>
            <h2 className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-300 font-medium">
               Full Stack Developer & Front-end Expert | Freelencer
            </h2>
            <p className="text-light-muted dark:text-dark-muted max-w-lg">
              I create beautiful, responsive web experiences using cutting-edge technologies. Specialized in React,
               TypeScript, and modern UI principles, with strong full-stack capabilities and a deep understanding of SEO to ensure performance and discoverability.

            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={scrollToProjects}
                className="px-6 py-3 rounded-full bg-primary-600 text-white font-medium
                  hover:bg-primary-700 hover:shadow-lg transition-all duration-300 flex items-center gap-2"
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="https://drive.google.com/file/d/1XXsPzK_XgI07FcHM_zqJCA1k51PuR8s-/view"
                     target="_blank"
                      rel="noopener noreferrer"
                 className="px-6 py-3 rounded-full border-2 border-accent-pink dark:border-accent-cyan text-light-text dark:text-dark-text font-medium transition-all duration-300 hover:bg-light-card dark:hover:bg-dark-card"
>
                   Download CV
               </a>

            </div>
          </div>
          
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <div className="relative">
             
              <img 
                src="https://i.postimg.cc/wBS2Mgcp/Whats-App-Image-2025-06-02-at-16-19-33-cf3b26cd.jpg" 
                alt="Rahul Sharma" 
                className="w-90 h-150 sm:w-72 sm:h-72 object-cover rounded-rectangle-full border-4 border-white dark:border-dark-bg 
                  shadow-xl relative z-10"
              />
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-dark-bg rounded-full p-3 shadow-lg z-20">
                <div className="bg-primary-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold">
                  
                </div>
                <span className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 whitespace-nowrap
                  text-sm font-medium text-light-text dark:text-dark-text">
                  
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;