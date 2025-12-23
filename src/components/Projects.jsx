import { motion } from 'motion/react';
import ProjectCard from './ProjectCard';
import { useContext } from 'react';
import { ThemeContext } from '../App';

function Projects() {
    const {theme, toggleTheme} = useContext(ThemeContext)
  const projects = [
  {
    title: 'Budget Buddy',
    description: 'Developed a responsive personal finance web application that enables users to set monthly budgets, track categorized expenses, and monitor spending in real time.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    link: 'https://my-budget-buddy-app.netlify.app/', 
    github: 'https://github.com/A23droid/budget-buddy' 
  },
  {
    title: 'Quick Talk',
    description: 'A sleek, responsive real-time chat app built with React and TailwindCSS. Supports light/dark themes, smooth animations, and keyboard shortcuts.',
    tags: ['React', 'TailwindCSS'],
    link: 'https://quick-talk-red.vercel.app/', 
    github: 'https://github.com/A23droid/quick-talk'
  },
  {
    title: 'The LogBook',
    description: 'Built a developer-focused blog featuring dynamic routing, tag-based filtering, and Markdown-driven content.Implemented a consistent dark-theme UI and deployed the production build on Vercel.',
    tags: ['Astro', 'React', 'TailwindCSS'],
    link: 'https://the-logbook-seven.vercel.app/',
    github: 'https://github.com/A23droid/the-logbook'
  }
];

  return (
    <section
      id="projects"
      className={`py-20 px-6 ${
        theme === "dark" ? "bg-[#1c1c1c]" : "bg-[#fafafa]"
      }`}
      style={{ background: 'transparent', zIndex: 0 }}
    >
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`text-4xl font-bold text-center mb-12 ${
          theme === "dark" ? "text-[#b8f2e6]" : "text-[#5e6472]"
        }`}
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