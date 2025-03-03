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

  const inputVariants = {
    focus: { 
      scale: 1.02,
      boxShadow: "0px 10px 25px rgba(99, 102, 241, 0.2)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="contact" className="py-20 bg-light-surface dark:bg-dark-surface transition-colors duration-1000">
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
            Get in Touch
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants} className="neumorph-light p-8 rounded-2xl">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="p-4 rounded-full neumorph-inset">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold gradient-text">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300 transition-colors duration-700">your.email@example.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-4 rounded-full neumorph-inset">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold gradient-text">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300 transition-colors duration-700">+1 234 567 890</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-4 rounded-full neumorph-inset">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold gradient-text">Location</h3>
                    <p className="text-gray-600 dark:text-gray-300 transition-colors duration-700">City, Country</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.form 
              variants={itemVariants}
              onSubmit={handleSubmit} 
              className="space-y-6 neumorph-light p-8 rounded-2xl"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-300 transition-colors duration-700">
                  Name
                </label>
                <motion.div
                  whileFocus="focus"
                  variants={inputVariants}
                >
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
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-300 transition-colors duration-700">
                  Email
                </label>
                <motion.div
                  whileFocus="focus"
                  variants={inputVariants}
                >
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
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-600 dark:text-gray-300 transition-colors duration-700">
                  Message
                </label>
                <motion.div
                  whileFocus="focus"
                  variants={inputVariants}
                >
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