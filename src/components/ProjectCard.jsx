import { motion } from 'motion/react';
import { FaGithub } from 'react-icons/fa'; // Make sure react-icons is installed
import {useContext} from 'react';
import { ThemeContext } from '../App';


function ProjectCard({ title, description, tags, link, github }) {
    const {theme, toggleTheme} = useContext(ThemeContext)
      return (
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05, rotate: 1 }}
        transition={{ duration: 0.5 }}
        className={`backdrop-blur-sm p-6 rounded-lg shadow-lg relative overflow-hidden ${
            theme === "dark" ? "bg-[#5e6472]/50" : "bg-[#faf3dd]/50"
        }`}
        >
        <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" fill="none" stroke="currentColor">
            <path d="M0 0L200 200M200 0L0 200" strokeWidth="2" />
            </svg>
        </div>

        <h3
            className={`text-2xl font-bold mb-2 ${
            theme === "dark" ? "text-[#b8f2e6]" : "text-[#5e6472]"
            }`}
        >
            {title}
        </h3>
        <p
            className={`mb-4 ${
            theme === "dark" ? "text-[#aed9e0]" : "text-[#5e6472]"
            }`}
        >
            {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, i) => (
            <motion.span
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                theme === "dark"
                    ? "bg-[#aed9e0] text-[#5e6472]"
                    : "bg-[#b8f2e6] text-[#5e6472]"
                }`}
            >
                {tag}
            </motion.span>
            ))}
        </div>

        {/* Links */}
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 flex gap-4 items-center"
        >
            {link && (
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-medium hover:underline ${
                theme === "dark" ? "text-blue-300" : "text-blue-500"
                }`}
            >
                View Live
            </a>
            )}
            {github && (
            <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors hover:text-blue-500 ${
                theme === "dark" ? "text-[#b8f2e6]" : "text-[#5e6472]"
                }`}
            >
                <FaGithub size={20} />
            </a>
            )}
        </motion.div>
    </motion.div>
  );
}

export default ProjectCard;
