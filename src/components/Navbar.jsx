import { motion } from 'motion/react';
import {ThemeContext} from "./../App"
import { useContext, useEffect, useState } from 'react';

function Navbar() {
  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 backdrop-blur-md transition-all duration-300 
        ${theme === "dark" ? "bg-[#1c1c1c]/80" : "bg-[#fafafa]/80"}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div
          className={`text-2xl font-bold ${
            theme === "dark" ? "text-[#b8f2e6]" : "text-[#5e6472]"
          }`}
        >
          Logo
        </div>

        {/* Links */}
        <div className="flex space-x-8">
          {["Home", "Projects", "About", "Contact"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{
                scale: 1.1,
                color: theme === "dark" ? "#aed9e0" : "#5e6472",
              }}
              transition={{ duration: 0.2 }}
              className={`${
                theme === "dark"
                  ? "text-[#b8f2e6] hover:text-[#aed9e0]"
                  : "text-[#5e6472] hover:text-[#ffa69e]"
              }`}
            >
              {item}
            </motion.a>
          ))}

          {/* Theme toggle button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className={`${theme === "dark" ? "text-[#b8f2e6]" : "text-[#5e6472]"}`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  theme === "dark"
                    ? "M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
                    : "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                }
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;