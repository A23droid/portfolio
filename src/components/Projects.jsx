import { motion } from 'motion/react';
import ProjectCard from './ProjectCard';

function Projects() {
  const projects = [
    { title: 'Project 1', description: 'A web app built with modern technologies.', tags: ['React', 'Node.js', 'Tailwind'] },
    { title: 'Project 2', description: 'E-commerce platform with seamless UX.', tags: ['Next.js', 'GraphQL', 'MongoDB'] },
    { title: 'Project 3', description: 'Data visualization dashboard.', tags: ['D3.js', 'Express', 'PostgreSQL'] },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-[#b8f2e6]/10 dark:bg-[#5e6472]/10">
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-[#5e6472] dark:text-[#b8f2e6] text-center mb-12"
      >
        Projects
      </motion.h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;