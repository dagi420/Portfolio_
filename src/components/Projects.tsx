import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import erpSystemImage from '../assets/img/car1.jpg';
import budgetTrackingAppImage from '../assets/img/budget.jpg';
import bekurArchitecturalFirmImage from '../assets/img/bekue.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'ERP System for Driving Institution',
      description: 'A full-featured platform built with PHP and MySQL.',
      image: erpSystemImage,
      tags: ['Php', 'CSS/HTML', 'Mysql'],
      liveUrl: 'https://github.com/dagi420',
      githubUrl: 'https://github.com/dagi420',
    },
    {
      title: 'Budget Tracking App',
      description: 'A budget tracking app with detailed reporting on financial health.',
      image: budgetTrackingAppImage,
      tags: ['Tailwind', 'MongoDB', 'TypeScript'],
      liveUrl: 'https://github.com/dagi420',
      githubUrl: 'https://github.com/dagi420',
    },
    {
      title: 'Website Portal for Bekur Architectural Firm',
      description: 'A simple landing page that displays projects and company info.',
      image: bekurArchitecturalFirmImage,
      tags: ['HTML/CSS', 'JavaScript'],
      liveUrl: 'https://bekur.vercel.app',
      githubUrl: 'https://github.com/dagi420',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="projects"
        className="py-20 transition-colors duration-1000 bg-gradient-to-b from-gray-50 dark:from-gray-900 to-transparent"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="max-w-6xl mx-auto text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold mb-12 gradient-text relative inline-block"
          >
            Projects
            <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.3 },
                }}
                className="rounded-2xl overflow-hidden neumorph-light bg-light-surface dark:bg-dark-surface shadow-neumorph-light dark:shadow-neumorph-dark transition-all duration-700 hover:shadow-lg"
              >
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center space-x-4 bg-black bg-opacity-10">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full neumorph-light text-primary hover:text-secondary transition-colors duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full neumorph-light text-primary hover:text-secondary transition-colors duration-300"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
                <div className="p-6 text-left">
                  <h3 className="text-xl font-semibold mb-2 gradient-text">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-700">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm rounded-full neumorph-inset text-primary dark:text-primary-light transition-all duration-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
