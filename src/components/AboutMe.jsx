import { motion } from 'motion/react';

function AboutMe() {
  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden bg-[#faf3dd] dark:bg-[#5e6472]">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" fill="none" stroke="currentColor">
          <rect x="20%" y="10%" width="200" height="200" strokeWidth="2" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="w-64 h-64 bg-[#aed9e0] dark:bg-[#b8f2e6] rounded-lg mx-auto"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-4xl font-bold text-[#5e6472] dark:text-[#b8f2e6] mb-4">About Me</h2>
          <p className="text-[#5e6472] dark:text-[#aed9e0]">
            I'm a passionate developer with a knack for building clean, efficient, and user-friendly applications. 
            I love exploring new technologies and solving complex problems with creative solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutMe;