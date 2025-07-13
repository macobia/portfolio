import React, { useState, useEffect } from 'react';
// import { ThemeProvider } from '../../contexts/ThemeContext';
import Preloader from './Preloader';
import ThreeBackground from './ThreeBackground';
// import ThemeToggle from './ThemeToggle';
import Hero from './Hero';
import Navigation from './Navigation';
import Bio from './Bio';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import WhatIDo from './WhatIDo';
import { useThemeStore } from '../../stores/ThemeStore';


const Portfolio :React.FC = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  // const [isDark, setDark] = useState<boolean>(() => {
  //   const saved = localStorage.getItem("theme");
  //   return saved === "dark" || saved === null;
  // });

  const isDark = useThemeStore((state) => state.isDark);
  const setDark = useThemeStore((state) => state.setDark);


 

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const defaultDark = saved === "dark" || saved === null;
    setDark(defaultDark);
  }, [setDark]);


  const handlePreloaderComplete = () => {
    setShowPreloader(false);
  };



  return (
    // <ThemeProvider>
    
      <div className={`min-h-screen bg-white ${
        isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      } transition-colors duration-300`} >
        {showPreloader && <Preloader onComplete={handlePreloaderComplete} />}
        
        {!showPreloader && (
          <>
            <ThreeBackground />
            <Navigation />
            {/* <ThemeToggle /> */}
            <Hero />
            <Bio />
            <WhatIDo />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </>
        )}
      </div>
      
    //  </ThemeProvider> 
 
  );
};

export default Portfolio;