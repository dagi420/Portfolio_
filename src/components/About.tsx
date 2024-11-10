import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Terminal } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: <Code2 className="w-6 h-6" />, title: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS'] },
    { icon: <Terminal className="w-6 h-6" />, title: 'Backend', items: ['Node.js', 'Python', 'Mongodb'] },
    { icon: <Palette className="w-6 h-6" />, title: 'Design', items: ['Figma',  'UI/UX'] },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          
          <div className="mb-12">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              I'm a passionate developer with a keen eye for design and a love for creating beautiful, functional web applications. With years of experience in both frontend and backend development, I bring ideas to life through clean code and intuitive user experiences.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies or collaborating on open-source projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-6 rounded-lg bg-white dark:bg-dark-lighter shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {skill.icon}
                  <h3 className="text-xl font-semibold ml-2">{skill.title}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-gray-600 dark:text-gray-300">
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