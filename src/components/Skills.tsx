import React from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'design' | 'other';
}

const skills: Skill[] = [
  { name: 'React', level: 95, category: 'frontend' },
  { name: 'TypeScript', level: 90, category: 'frontend' },
  { name: 'JavaScript', level: 95, category: 'frontend' },
  { name: 'HTML/CSS', level: 90, category: 'frontend' },
  { name: 'Tailwind CSS', level: 85, category: 'frontend' },
  { name: 'Node.js', level: 80, category: 'backend' },
  { name: 'Express', level: 75, category: 'backend' },
  { name: 'MongoDB', level: 70, category: 'backend' },
  { name: 'UI/UX Design', level: 85, category: 'design' },
  { name: 'Figma', level: 80, category: 'design' },
  { name: 'Git', level: 85, category: 'other' },
  { name: 'Jest', level: 75, category: 'other' },
];

const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-light-text dark:text-dark-text font-medium">{skill.name}</span>
        <span className="text-light-muted dark:text-dark-muted">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
          className="h-2.5 rounded-full bg-gradient-to-r from-primary-500 to-accent-pink dark:to-accent-cyan transition-all duration-700 ease-in-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const [filter, setFilter] = React.useState<string>('all');
  
  const filteredSkills = filter === 'all'
    ? skills
    : skills.filter(skill => skill.category === filter);
  
  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-dark-bg/95">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-light-text dark:text-dark-text">
            My Skills
          </h2>
          <div className="w-24 h-1 bg-accent-pink dark:bg-accent-cyan mx-auto mt-4 mb-6"></div>
          <p className="max-w-2xl mx-auto text-light-muted dark:text-dark-muted">
            A comprehensive overview of my technical skills and expertise across different domains.
          </p>
        </div>

        <div className="flex justify-center mb-8 flex-wrap gap-2">
          {['all', 'frontend', 'backend', 'design', 'other'].map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full capitalize transition-all duration-300
                ${filter === category 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-white dark:bg-dark-card text-light-text dark:text-dark-text hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredSkills.map((skill) => (
            <SkillBar key={skill.name} skill={skill} />
          ))}
        </div>

        <div className="mt-16 bg-light-card dark:bg-dark-card rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-light-text dark:text-dark-text">
            Tools & Technologies I Use
          </h3>
          <div className="flex flex-wrap gap-3">
            {['VS Code', 'GitHub', 'Webpack', 'Redux', 'Next.js', 'GraphQL', 'Docker', 'Firebase', 'Vercel'].map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm 
                  text-light-text dark:text-dark-text border border-gray-200 dark:border-gray-700"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;