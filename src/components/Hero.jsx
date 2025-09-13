import { motion } from 'motion/react';

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden bg-[#faf3dd] dark:bg-[#5e6472]">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" fill="none" stroke="currentColor">
          <circle cx="10%" cy="20%" r="100" strokeWidth="2" />
          <circle cx="80%" cy="70%" r="150" strokeWidth="2" />
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, staggerChildren: 0.1 }}
        className="text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold text-[#5e6472] dark:text-[#b8f2e6] mb-4"
        >
          {'John Doe'.split('').map((char, i) => (
            <motion.span key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.05 }}>
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-[#5e6472] dark:text-[#aed9e0] mb-8"
        >
          Full-Stack Developer & Creative Thinker
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-[#ffa69e] dark:bg-[#b8f2e6] text-[#5e6472] dark:text-[#5e6472] rounded-lg"
        >
          Get in Touch
        </motion.button>
      </motion.div>
    </section>
  );
}

export default Hero;