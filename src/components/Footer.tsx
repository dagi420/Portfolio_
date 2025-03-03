import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, url: "https://github.com" },
    { icon: <Linkedin className="w-5 h-5" />, url: "https://linkedin.com" },
    { icon: <Mail className="w-5 h-5" />, url: "mailto:dagidaniel00@gmail.com" },
  ];

  return (
    <footer className="py-8 bg-light dark:bg-dark transition-colors duration-1000">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-gray-600 dark:text-gray-300 mb-4 md:mb-0 transition-colors duration-700"
          >
            © {new Date().getFullYear()} Dagim XD. All rights reserved.
          </motion.p>
          
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full neumorph-light text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-all duration-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 5,
                  boxShadow: "0px 10px 25px rgba(99, 102, 241, 0.3)"
                }}
                whileTap={{ scale: 0.9 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;