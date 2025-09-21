import { motion } from 'framer-motion';
import { ThemeContext } from './../App';
import { useContext, useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = ['Home', 'Projects', 'About', 'Contact'];

  const navVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
  };

  const linkVariants = {
    hover: {
      scale: 1.05,
      y: -2,
      transition: { duration: 0.2, ease: 'easeOut' },
    },
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-lg shadow-sm transition-all duration-300 
        ${theme === 'dark' ? 'bg-gray-900/90' : 'bg-white/90'}`}
        // style={{ background: 'transparent', zIndex: 0 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className={`text-2xl font-bold tracking-tight ${
              theme === 'dark' ? 'text-[#b8f2e6]' : 'text-[#5e6472]'
            }`}
            whileHover={{ scale: 1.05 }}
          >
            Portfolio
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                variants={linkVariants}
                whileHover="hover"
                className={`text-base font-medium transition-colors duration-200 ${
                  theme === 'dark'
                    ? 'text-[#b8f2e6]'
                    : 'text-[#5e6472]'
                }`}
              >
                {item}
              </motion.a>
            ))}
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className={`p-2 rounded-full ${
                theme === 'dark' ? 'text-cyan-100 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'
              } transition-colors duration-200`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className={`p-2 rounded-full mr-2 ${
                theme === 'dark' ? 'text-cyan-100 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'
              } transition-colors duration-200`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${
                theme === 'dark' ? 'text-cyan-100 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'
              }`}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className={`md:hidden overflow-hidden ${
            theme === 'dark' ? 'bg-gray-900' : 'bg-white'
          }`}
        >
          <div className="flex flex-col space-y-4 py-4">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                variants={linkVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-base font-medium px-4 py-2 ${
                  theme === 'dark'
                    ? 'text-cyan-100 hover:bg-gray-800'
                    : 'text-gray-700 hover:bg-gray-100'
                } transition-colors duration-200`}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}

export default Navbar;