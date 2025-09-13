import React from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import AboutMe from './components/AboutMe.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="min-h-screen bg-[#faf3dd] dark:bg-[#5e6472]">
      <Navbar />
      <Hero />
      <Projects />
      <AboutMe />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;