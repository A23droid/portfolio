import { motion } from 'motion/react';
import { useContext } from 'react';
import { ThemeContext } from '../App';


function AboutMe() {
    const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <section
      id="about"
      className={`py-20 px-6 relative overflow-hidden ${
        theme === "dark" ? "bg-[#1c1c1c]" : "bg-[#fafafa]"
      }`}
      style={{ background: 'transparent', zIndex: 0 }}
    >
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      <svg width="100%" height="100%" fill="none" stroke={theme === "dark" ? "#b8f2e6" : "#5e6472"}>
        <rect x="20%" y="10%" width="200" height="200" strokeWidth="2" />
      </svg>
    </div>
    <div 
    className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-1/2"
        >
          <motion.div
      whileHover={{ scale: 1.05 }}
      className={`w-64 h-64 rounded-lg mx-auto overflow-hidden border-2 ${
        theme === "dark"
          ? "border-[#b8f2e6] bg-[#1c1c1c]"
          : "border-[#5e6472] bg-white"
      }`}
    >
      <img
        src="/../../public/profile.jpg"
        alt="My Photo"
        className="w-full h-full object-cover"
      />
    </motion.div>
  
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-1/2"
      >
        <h2
          className={`text-4xl font-bold mb-4 ${
            theme === "dark" ? "text-[#b8f2e6]" : "text-[#5e6472]"
          }`}
        >
          About Me
        </h2>
        <p className={`${theme === "dark" ? "text-[#aed9e0]" : "text-[#5e6472]"}`}>
          I'm a passionate developer with a knack for building clean, efficient, and user-friendly applications. 
          I love exploring new technologies and solving complex problems with creative solutions.
        </p>
      </motion.div>
    </div>
    </section>
  );
}

export default AboutMe;