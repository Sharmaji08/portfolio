import { Code, PenTool, Lightbulb } from 'lucide-react';

const AboutCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="p-6 rounded-xl bg-light-card dark:bg-dark-card shadow-md hover:shadow-lg 
      transition-all duration-300 flex flex-col items-center text-center group">
      <div className="p-4 rounded-full bg-primary-100 dark:bg-primary-900 mb-4 
        text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-light-text dark:text-dark-text">{title}</h3>
      <p className="text-light-muted dark:text-dark-muted">{description}</p>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-light-text dark:text-dark-text">
            About Me
          </h2>
          <div className="w-24 h-1 bg-accent-pink dark:bg-accent-cyan mx-auto mt-4 mb-6"></div>
          <p className="max-w-2xl mx-auto text-light-muted dark:text-dark-muted">
            I'm a passionate developer focused on crafting elegant solutions and high-converting 
            landing pages with modern technologies.

          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-slideUp">
            <h3 className="text-2xl font-bold mb-4 text-light-text dark:text-dark-text">
              My Journey
            </h3>
            <p className="text-light-muted dark:text-dark-muted mb-4">
              I'm a passionate developer dedicated to crafting seamless, high-performance web experiences with a focus on elegant design, intuitive UX, and scalable architecture.
                   I've had the privilege of working on
              diverse projects across multiple industries. My passion for clean code and user-centered
              design drives me to create impactful digital experiences.
            </p>
            <p className="text-light-muted dark:text-dark-muted mb-6">
              I'm constantly exploring new technologies and methodologies to enhance my skills and deliver
              cutting-edge solutions. My approach combines technical expertise with creative problem-solving
              to address complex challenges.
            </p>
            
            <div className="grid grid-cols-2 gap-4 text-light-text dark:text-dark-text">
              <div className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-accent-pink dark:bg-accent-cyan mr-2"></span>
                <span>React.js Expert</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-accent-pink dark:bg-accent-cyan mr-2"></span>
                <span>TypeScript Developer</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-accent-pink dark:bg-accent-cyan mr-2"></span>
                <span>SEO Optimization Maven</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-accent-pink dark:bg-accent-cyan mr-2"></span>
                <span>Front-end Specialist</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <AboutCard 
              icon={<Code className="w-6 h-6" />}
              title="Development"
              description="Building robust web applications with React, TypeScript, and modern frameworks."
            />
            <AboutCard 
              icon={<PenTool className="w-6 h-6" />}
              title="Design"
              description="Creating intuitive user interfaces with a focus on aesthetics and usability."
            />
            <AboutCard 
              icon={<Lightbulb className="w-6 h-6" />}
              title="Problem Solving"
              description="Applying analytical thinking to overcome technical challenges efficiently."
            />
            <AboutCard 
              icon={<Code className="w-6 h-6" />}
              title="Optimization"
              description="Enhancing performance and accessibility for seamless user experiences."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;