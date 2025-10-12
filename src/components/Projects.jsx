import { motion } from 'motion/react';
import ProjectCard from './ProjectCard';
import { useContext } from 'react';
import { ThemeContext } from '../App';

function Projects() {
    const {theme, toggleTheme} = useContext(ThemeContext)
  const projects = [
  {
    title: '💸 Budget Buddy',
    description: 'A minimal, aesthetic budget tracker for students, semi-responsible adults, and everyone in between. Track spending, save smart, and live soft.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    link: 'https://my-budget-buddy-app.netlify.app/', 
    github: 'https://github.com/A23droid/budget-buddy' 
  },
  {
    title: '💬 Quick Talk',
    description: 'A sleek, responsive real-time chat app built with React and TailwindCSS. Supports light/dark themes, smooth animations, and keyboard shortcuts.',
    tags: ['React', 'TailwindCSS'],
    link: 'https://quick-talk-red.vercel.app/', 
    github: 'https://github.com/A23droid/quick-talk'
  },
  {
    title: '🎮 Terminal Tic-Tac-Toe',
    description: 'A terminal-based Tic-Tac-Toe game with Player vs Player and 3 levels of bot difficulty. Built in C for a retro CLI experience.',
    tags: ['C', 'CLI Game', 'Bots'],
    github: 'https://github.com/A23droid/tic-tac-toe'
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