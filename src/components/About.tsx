import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Terminal, Download } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: <Code2 className="w-6 h-6 text-primary" />, title: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS'] },
    { icon: <Terminal className="w-6 h-6 text-primary" />, title: 'Backend', items: ['Node.js', 'Python', 'MongoDB'] },
    { icon: <Palette className="w-6 h-6 text-primary" />, title: 'Design', items: ['Figma', 'UI/UX'] },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="py-20 transition-colors duration-1000 bg-gradient-to-b from-gray-50 dark:from-gray-900 to-transparent"
    >
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
            className="text-3xl font-bold text-center mb-12 gradient-text relative inline-block"
          >
            About Me
            <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></span>
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="mb-12 p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-md dark:shadow-lg neumorph-light transition-all duration-500 hover:scale-105"
          >
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 transition-colors duration-700">
              I am a full-stack developer with experience in various projects, primarily focused on web development. However, I plan to broaden my knowledge and experience in mobile app development. I am a computer enthusiast and a passionate developer dedicated to creating solutions for real-world problems, while enhancing user interaction in the process.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {skills.map((skill) => (
              <motion.div
                key={skill.title}
                variants={itemVariants}
                className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-s dark:shadow-md neumorph-light transition-all duration-500 hover:scale-105 hover:shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full neumorph-inset mr-3 bg-white dark:bg-gray-900">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold gradient-text">{skill.title}</h3>
                </div>
                <ul className="space-y-3">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center transition-colors duration-700 text-gray-700 dark:text-gray-300"
                    >
                      <span className="w-2 h-2 rounded-full bg-primary mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
