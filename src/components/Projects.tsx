import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import erpSystemImage from '../assets/img/car1.jpg';
import budgetTrackingAppImage from '../assets/img/budget.jpg';
import bekurArchitecturalFirmImage from '../assets/img/bekue.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'ERP system for Driving institution',
      description: 'A full-featured platform built with PHP and mysql',
      image: erpSystemImage,
      tags: ['Php', 'CSS/html', 'Mysql'],
      liveUrl: 'https://github.com/dagi420',
      githubUrl: 'https://github.com/dagi420',
    },
    {
      title: 'Budget Tracking app',
      description: 'A Budget tracking app with detailed report about financial health',
      image: budgetTrackingAppImage,
      tags: ['Tailwind', 'mongodb', 'typescript'],
      liveUrl: 'https://github.com/dagi420',
      githubUrl: 'https://github.com/dagi420',
    },
    {
      title: 'Website Portal for Bekur Architectural firm',
      description: 'Simple Landing page that displays Projects and Company info',
      image:bekurArchitecturalFirmImage,
      tags: ['html/css', 'js',],
      liveUrl: 'bekur.vercel.app',
      githubUrl: 'https://github.com/dagi420',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="py-20 transition-colors duration-1000">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-12 gradient-text"
          >
            Projects
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
                className="rounded-2xl overflow-hidden neumorph-light transition-all duration-700"
              >
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center space-x-4">
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
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 gradient-text">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-700">{project.description}</p>
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