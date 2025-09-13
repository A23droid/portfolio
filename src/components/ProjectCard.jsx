import { motion } from 'motion/react';

function ProjectCard({ title, description, tags }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, rotate: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#faf3dd]/50 dark:bg-[#5e6472]/50 backdrop-blur-sm p-6 rounded-lg shadow-lg relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" fill="none" stroke="currentColor">
          <path d="M0 0L200 200M200 0L0 200" strokeWidth="2" />
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-[#5e6472] dark:text-[#b8f2e6] mb-2">{title}</h3>
      <p className="text-[#5e6472] dark:text-[#aed9e0] mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="px-3 py-1 bg-[#b8f2e6] dark:bg-[#aed9e0] text-[#5e6472] dark:text-[#5e6472] rounded-full text-sm"
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default ProjectCard;