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

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-dark-lighter">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-6 rounded-lg bg-white dark:bg-dark shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;