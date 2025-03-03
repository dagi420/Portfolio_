import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Terminal } from 'lucide-react';

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
      transition: {
        staggerChildren: 0.3
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
    <section id="about" className="py-20 transition-colors duration-1000">
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
            About Me
          </motion.h2>
          
          <motion.div 
            variants={itemVariants}
            className="mb-12 neumorph-light p-8 rounded-2xl"
          >
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 transition-colors duration-700">
            I am a full-stack developer with experience in various projects, primarily focused on web development. However, I plan to broaden my knowledge and experience in mobile app development. I am a computer enthusiast and a passionate developer dedicated to creating solutions for real-world problems, while enhancing user interaction in the process.
            </p>
          
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                variants={itemVariants}
                className="p-6 rounded-2xl neumorph-light transition-all duration-700 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full neumorph-inset mr-3">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold gradient-text">{skill.title}</h3>
                </div>
                <ul className="space-y-3">
                  {skill.items.map((item) => (
                    <li key={item} className="text-gray-600 dark:text-gray-300 transition-colors duration-700 flex items-center">
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