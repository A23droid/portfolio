import { motion } from 'motion/react';
import { ThemeContext } from '../App';
import { useContext } from 'react';
function Hero() {
  
    const handleResume = () => {
      console.log("Resume dekha :)");
      
        window.open(
        "https://drive.google.com/file/d/1b7_xr5SbCWuRyOd_We0x1UAxb0btyLfl/view?usp=sharing",
        "_blank",
        "noopener,noreferrer"
      );
    }

    const {theme, toggleTheme} = useContext(ThemeContext);
  return (
    <section
  id="home"
  className={`min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden transition-colors duration-300 
    ${theme === "dark" ? "bg-[#1c1c1c]" : "bg-[#fafafa]"}`}
>
  {/* background circles */}
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
    {/* Name */}
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`text-5xl md:text-7xl font-bold mb-4 
        ${theme === "dark" ? "text-[#b8f2e6]" : "text-[#5e6472]"}`}
    >
      {"John Doe".split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: i * 0.05 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.h1>

    {/* Tagline */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`text-xl mb-8 
        ${theme === "dark" ? "text-[#aed9e0]" : "text-[#5e6472]"}`}
    >
      Full-Stack Developer & Creative Thinker
    </motion.p>

    {/* Resume button */}
    <motion.button
    onClick={handleResume}
      whileHover={{ scale: 1.05, boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}
      whileTap={{ scale: 0.95 }}
      className={`px-6 py-3 rounded-lg font-medium transition-colors duration-300
        ${theme === "dark" ? "bg-[#b8f2e6] text-[#1c1c1c]" : "bg-[#ffa69e] text-[#5e6472]"}`}
    >
      View my resume
    </motion.button>
  </motion.div>
</section>

  );
}

export default Hero;