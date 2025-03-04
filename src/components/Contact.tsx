import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const inputVariants = {
    focus: { 
      scale: 1.02,
      boxShadow: "0px 10px 25px rgba(99, 102, 241, 0.2)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 transition-colors duration-1000 bg-gradient-to-b from-light-surface dark:from-dark-surface to-transparent overflow-hidden"
    >
      {/* Decorative Blobs */}
      <div className="absolute top-[-50px] left-[-50px] w-64 h-64 bg-secondary opacity-20 rounded-full mix-blend-multiply filter blur-3xl animate-blob pointer-events-none"></div>
      <div className="absolute bottom-[-50px] right-[-50px] w-64 h-64 bg-primary opacity-20 rounded-full mix-blend-multiply filter blur-3xl animate-blob pointer-events-none"></div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-12 gradient-text relative inline-block"
          >
            Get in Touch
            <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div 
              variants={itemVariants} 
              className="p-8 rounded-2xl neumorph-light bg-light-surface dark:bg-dark-surface shadow-neumorph-light dark:shadow-neumorph-dark"
            >
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="p-4 rounded-full neumorph-inset bg-light-darker dark:bg-dark-lighter">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold gradient-text">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300 transition-colors duration-700">
                      dagidaniel00@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-4 rounded-full neumorph-inset bg-light-darker dark:bg-dark-lighter">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold gradient-text">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300 transition-colors duration-700">
                      +25196107598
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-4 rounded-full neumorph-inset bg-light-darker dark:bg-dark-lighter">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold gradient-text">Location</h3>
                    <p className="text-gray-600 dark:text-gray-300 transition-colors duration-700">
                      Addis Ababa, Ethiopia
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form 
              variants={itemVariants}
              onSubmit={handleSubmit} 
              className="space-y-6 p-8 rounded-2xl neumorph-light bg-light-surface dark:bg-dark-surface shadow-neumorph-light dark:shadow-neumorph-dark"
            >
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-300 transition-colors duration-700"
                >
                  Name
                </label>
                <motion.div whileFocus="focus" variants={inputVariants}>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg neumorph-inset bg-transparent outline-none transition-all duration-500 text-gray-600 dark:text-gray-300"
                    required
                  />
                </motion.div>
              </div>
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-300 transition-colors duration-700"
                >
                  Email
                </label>
                <motion.div whileFocus="focus" variants={inputVariants}>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg neumorph-inset bg-transparent outline-none transition-all duration-500 text-gray-600 dark:text-gray-300"
                    required
                  />
                </motion.div>
              </div>
              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-300 transition-colors duration-700"
                >
                  Message
                </label>
                <motion.div whileFocus="focus" variants={inputVariants}>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg neumorph-inset bg-transparent outline-none transition-all duration-500 text-gray-600 dark:text-gray-300 resize-none"
                    required
                  ></textarea>
                </motion.div>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg flex items-center justify-center space-x-2 transition-all duration-500 shadow-lg hover:shadow-xl"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
