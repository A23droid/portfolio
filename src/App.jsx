import React, { createContext, useState, useEffect } from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import AboutMe from './components/AboutMe.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import { th } from 'motion/react-m';

export const ThemeContext = createContext();

function App() {
  // TODO: Add good bg
  // TODO: Make Navbar responsive
  // DONE: Make Contacts functional (Edge cases + setup)
  // DONE: Make theme toggler
  // TODO: Add hover effects
  // TODO: ga4 testing + more setup
  // TODO: All external link opens up in new tab
  // TODO: Animated cursor-follow background (particles, blobs, or subtle grid)

  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
    document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme)
    }, [theme]);

  const toggleTheme = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#1c1c1c]">
      <ThemeContext.Provider value={{theme, toggleTheme}}>
      <Navbar />
      <Hero />
      <Projects />
      <AboutMe />
      <Skills />
      <Contact  />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;