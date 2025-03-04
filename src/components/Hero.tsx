import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import Background from './Background';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-5 flex items-center relative overflow-hidden">
      
      <Background />
      
      {/* Animated Blobs */}
      <div 
        className="absolute top-1/4 -left-4 w-48 h-48 md:w-72 md:h-72 bg-primary/30 dark:bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
        style={{ animationDelay: '0s', zIndex: 1 }}
      />
      <div 
        className="absolute top-1/3 -right-4 w-48 h-48 md:w-72 md:h-72 bg-secondary/30 dark:bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
        style={{ animationDelay: '2s', zIndex: 1 }}
      />
      <div 
        className="absolute -bottom-8 left-1/2 w-48 h-48 md:w-72 md:h-72 bg-primary-light/30 dark:bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"
        style={{ animationDelay: '4s', zIndex: 1 }}
      />
      <div 
        className="absolute top-2/3 left-1/4 w-32 h-32 md:w-56 md:h-56 bg-secondary-light/30 dark:bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-6000"
        style={{ animationDelay: '6s', zIndex: 1 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="neumorph-light p-6 md:p-10 rounded-2xl"
          >
            <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 transition-all duration-700">
              Hi, I'm{' '}
              <span className="gradient-text">
                Dagim Daniel
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 mb-6 md:mb-8 transition-all duration-700">
              Full Stack Developer & UI/UX Designer
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex justify-center space-x-4 md:space-x-6 mb-8 md:mb-12"
            >
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 md:p-4 rounded-full neumorph-light neumorph-button hover:shadow-lg dark:hover:shadow-dark"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 md:p-4 rounded-full neumorph-light neumorph-button hover:shadow-lg dark:hover:shadow-dark"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </motion.a>
              <motion.a
                href="mailto:your.email@example.com"
                className="p-3 md:p-4 rounded-full neumorph-light neumorph-button hover:shadow-lg dark:hover:shadow-dark"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex justify-center"
            >
              <motion.a
                href="#about"
                className="p-3 md:p-4 rounded-full neumorph-light neumorph-button hover:shadow-lg dark:hover:shadow-dark"
              >
                <ArrowDown className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;