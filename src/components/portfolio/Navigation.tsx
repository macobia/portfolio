import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useThemeStore } from '../../stores/ThemeStore';
import { Menu, X, Download, Sun, Moon } from 'lucide-react';
import { Button } from '../ui/button';

const Navigation: React.FC = () => {
  const { isDark, toggleTheme } = useThemeStore();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#blog', label: 'Blog' },
    { href: '#contact', label: 'Contact' }
  ];

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=16pCJO_kHf_AIuigYW774FBZTREF4YxOK';
    link.setAttribute('download', 'Macben-Resume.pdf'); // optional, forces file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handleScrollToSection = (href: string) => {
    const id = href.replace('#', '');
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[hsl(var(--background))]/80 backdrop-blur-md shadow-lg border-b border-[hsl(var(--border))]' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="relative">
              <motion.div
                className="w-8 h-8 rounded-lg bg-gradient-to-br from-[hsl(var(--primary))] via-[hsl(var(--accent))] to-[hsl(var(--secondary))]"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute inset-0 w-8 h-8 rounded-lg bg-gradient-to-br from[hsl(var(--primary))]/80 to-[hsl(var(--secondary))]/80 opacity-75"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.75, 0.5, 0.75]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
            <span className="my-soul-regular text-xl font-bold bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] bg-clip-text text-transparent">
              Mac.<span className='text-red-500'>Dev </span>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="relative text-[hsl(var(--foreground))]/80 hover:text-[hsl(var(--foreground))] transition-colors duration-200 font-medium cursor-pointer"
                whileHover={{ y: -2 }}
              >
                {link.label}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))]"
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>
            ))}

            {/* Download Resume Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={handleDownloadResume}
                className="bg-[hsl(var(--primary))]  hover:bg-[hsl(var(--primary))]/90 text-[var(--textRev)] px-4 py-2 rounded-lg flex items-center space-x-2 shadow-lg cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </Button>
            </motion.div>

            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-[hsl(var(--card))]/50  backdrop-blur-sm border border-[hsl(var(--border))] hover:bg-[hsl(var(--card))]  transition-colors cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                initial={false}
                animate={{ rotate: isDark ? 0 : 180 }}
                transition={{ duration: 0.3 }}
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-white" />
                ) : (
                  <Moon className="w-5 h-5 text-black" />
                )}
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Mobile Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-[hsl(var(--card))]/50 backdrop-blur-sm border border-[hsl(var(--border))] "
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-white" />
              ) : (
                <Moon className="w-5 h-5 text-black" />
              )}
            </motion.button>

            {/* Hamburger Menu */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-[hsl(var(--card))]/50 backdrop-blur-sm border border-[hsl(var(--border))]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? (
                  <X className="w-6 h-6 text-[hsl(var(--foreground))]" />
                ) : (
                  <Menu className="w-6 h-6 text-[hsl(var(--foreground))]" />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-[hsl(var(--card))]/90 backdrop-blur-md rounded-lg mt-2 border border-[hsl(var(--border))]"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.href}
                    onClick={() => handleScrollToSection(link.href)}
                    className="block w-full text-left px-6 py-3 text-[hsl(var(--foreground))]/80 hover:text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))]/50 transition-colors duration-200 font-medium cursor-pointer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {link.label}
                  </motion.button>
                ))}
                
                <motion.div
                  className="px-6 py-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                >
                  <Button
                    onClick={handleDownloadResume}
                    className="w-full bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/90 text-[var(--textRev)] px-4 py-2 rounded-lg flex items-center justify-center space-x-2 hover:shadow-xl transition-all duration-300"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Resume</span>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
