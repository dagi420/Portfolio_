import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, Download } from 'lucide-react';
import CV from '../assets/DagimDaniel2025Cv.pdf';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Services', 'Projects', 'Contact'];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <nav className={`fixed w-full backdrop-blur-md z-50 py-4 transition-all duration-700 ${
      scrolled ? 'bg-light/90 dark:bg-dark/90 shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-2xl font-bold gradient-text"
          >
            Portfolio
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={navVariants}
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors duration-500"
              >
                {item}
              </motion.a>
            ))}
            <motion.a
              href={CV}
              download="XD_CV.pdf"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="group p-3 rounded-full neumorph-light neumorph-button flex items-center justify-center space-x-2 transition-all duration-300 ease-in-out bg-gray-100 dark:bg-gray-800 hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 hover:text-white hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5 text-primary group-hover:text-white" />
              <span className="text-gray-600 dark:text-gray-300 group-hover:text-white">
                Download CV
              </span>
            </motion.a>
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              onClick={() => setIsDark(!isDark)}
              className="p-3 rounded-full neumorph-light neumorph-button transition-all duration-300 ease-in-out"
              whileHover={{ rotate: 15 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-300" />
              ) : (
                <Moon className="w-5 h-5 text-primary" />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              onClick={() => setIsDark(!isDark)}
              className="p-3 mr-2 rounded-full neumorph-light neumorph-button transition-all duration-300 ease-in-out"
              whileHover={{ rotate: 15 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-300" />
              ) : (
                <Moon className="w-5 h-5 text-primary" />
              )}
            </motion.button>
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-full neumorph-light neumorph-button transition-all duration-300 ease-in-out"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? (
                <X className="w-6 h-6 text-primary" />
              ) : (
                <Menu className="w-6 h-6 text-primary" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="md:hidden overflow-hidden mt-4 rounded-xl neumorph-light p-4"
            >
              <div className="py-2 space-y-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="block text-center text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors duration-500 py-2 px-4 rounded-lg hover:bg-gray-100/50 dark:hover:bg-dark-lighter/50"
                  >
                    {item}
                  </motion.a>
                ))}
                <motion.a
                  href={CV}
                  download="cv.pdf"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="group flex w-full justify-center items-center p-3 rounded-full neumorph-light neumorph-button transition-all duration-300 ease-in-out bg-gray-100 dark:bg-gray-800 hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600 hover:text-white hover:shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-5 h-5 text-primary group-hover:text-white" />
                  <span className="ml-2 text-gray-600 dark:text-gray-300 group-hover:text-white">
                    Download CV
                  </span>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
