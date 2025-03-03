import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Code, Smartphone, Globe } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Layout className="w-8 h-8 text-primary" />,
      title: 'Web Design',
      description: 'Creating beautiful, responsive websites that provide an excellent user experience across all devices.',
    },
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: 'Web Development',
      description: 'Building robust web applications using modern technologies and best practices.',
    },
    {
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: 'Mobile Development',
      description: 'Developing cross-platform mobile applications that work seamlessly on iOS and Android.',
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: 'SEO Optimization',
      description: 'Optimizing websites for search engines to improve visibility and organic traffic.',
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
    <section id="services" className="py-20 bg-light-surface dark:bg-dark-surface transition-colors duration-1000">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-12 gradient-text"
          >
            Services
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                className="p-8 rounded-2xl neumorph-light transition-all duration-700"
              >
                <div className="mb-6 p-4 rounded-full neumorph-inset inline-block">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 gradient-text">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-700">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;