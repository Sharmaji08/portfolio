import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  category: 'web' | 'mobile' | 'design';
}

const projects: Project[] = [
  {
    id: 1,
    title: 'EchoSpeak',
    description: 'This project uses React to convert written text into spoken words (Text-to-Speech) and also captures spoken input to convert it into text (Speech-to-Text). It leverages Web Speech API to provide an interactive and accessible user experience.',
    image: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
    demoUrl: 'https://echo-speak.vercel.app/',
    githubUrl: 'https://github.com/Sharmaji08/EchoSpeak',
    category: 'web',
  },
  {
    id: 2,
    title: 'Protfolio',
    description: 'This is a personal portfolio website built with React and Tailwind CSS to showcase my projects, skills, experience, and freelance services. It features responsive design, light/dark mode, smooth animations, and an interactive contact section for professional engagement.',
    image: 'https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['ReactJs', 'Typscript', 'Redux' , 'Tailwind'],
    demoUrl: '#',
    githubUrl: '#',
    category: 'mobile',
  },
  {
    id: 3,
    title: 'Fitness Tracker UI',
    description: 'A sleek user interface design for a fitness tracking application with workout planning and progress visualization.',
    image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['Figma', 'Adobe XD', 'UI/UX'],
    demoUrl: '#',
    githubUrl: 'https://github.com/Sharmaji08',
    category: 'design',
  },
  {
    id: 4,
    title: 'Task Management Platform',
    description: 'A collaborative project management tool with task assignment, progress tracking, and team communication features.',
    image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    demoUrl: '#',
    githubUrl: 'https://github.com/Sharmaji08',
    category: 'web',
  },
];

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);
  
  return (
    <section id="projects" className="py-24 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-light-text dark:text-dark-text">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-accent-pink dark:bg-accent-cyan mx-auto mt-4 mb-6"></div>
          <p className="max-w-2xl mx-auto text-light-muted dark:text-dark-muted">
            Explore a selection of my recent work across various domains and technologies.
          </p>
        </div>

        <div className="flex justify-center mb-8 space-x-4">
          {['all', 'web', 'mobile', 'design'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full capitalize transition-all duration-300
                ${activeFilter === filter 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-white dark:bg-dark-card text-light-text dark:text-dark-text hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-light-card dark:bg-dark-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative overflow-hidden h-60">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 
                  flex items-end justify-between p-4">
                  <a 
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full text-light-text hover:bg-accent-pink hover:text-white transition-colors duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full text-light-text hover:bg-accent-pink hover:text-white transition-colors duration-300"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-light-text dark:text-dark-text">
                  {project.title}
                </h3>
                <p className="text-light-muted dark:text-dark-muted mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="text-xs px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/50 
                        text-primary-700 dark:text-primary-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#"
            className="inline-block px-6 py-3 rounded-full border-2 border-accent-pink dark:border-accent-cyan
              text-light-text dark:text-dark-text font-medium hover:bg-accent-pink hover:text-white
              dark:hover:bg-accent-cyan dark:hover:text-dark-bg transition-all duration-300"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;