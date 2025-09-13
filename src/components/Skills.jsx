import { motion } from 'motion/react';

function Skills() {
  const skills = ['React', 'JavaScript', 'Tailwind CSS', 'Node.js'];

  return (
    <section id="skills" className="py-20 px-6 bg-[#b8f2e6]/10 dark:bg-[#5e6472]/10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" fill="none" stroke="currentColor">
          <circle cx="90%" cy="10%" r="100" strokeWidth="2" />
        </svg>
      </div>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-[#5e6472] dark:text-[#b8f2e6] text-center mb-12"
      >
        Skills
      </motion.h2>
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            whileHover={{ scale: 1.1 }}
            className="flex items-center justify-center p-4 bg-[#aed9e0] dark:bg-[#b8f2e6] rounded-lg shadow-md"
          >
            <span className="text-[#5e6472] dark:text-[#5e6472] font-medium">{skill}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;