import React from 'react';
import { FaLaptopCode, FaDatabase, FaLightbulb } from 'react-icons/fa';
import { motion } from 'framer-motion';

const skills = [
  {
    icon: <FaLaptopCode className="text-4xl mb-3 text-blue-500 mx-auto" />,
    title: "Frontend",
    desc: "React, TailwindCSS, HTML, CSS, JavaScript"
  },
  {
    icon: <FaDatabase className="text-4xl mb-3 text-green-500 mx-auto" />,
    title: "Backend",
    desc: "Node.js, Express, MongoDB, REST APIs"
  },
  {
    icon: <FaLightbulb className="text-4xl mb-3 text-yellow-500 mx-auto" />,
    title: "Problem Solving",
    desc: "Data Structures, Algorithms, Logic & Creativity"
  }
];

function About() {
  return (
    <section className="p-12 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100" id="about">
      <motion.h2 
        className="text-3xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          className="space-y-6 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p>
            Hi! I'm <span className="font-bold text-blue-500">Manraj Kewat</span>, a passionate Web Developer and Mechatronics Engineer. I love building interactive web applications and exploring new technologies.
          </p>
          <p>
            My main focus is on <span className="font-bold text-green-500">MERN Stack Development</span>, but I also enjoy working with other modern web technologies to create efficient and scalable solutions.
          </p>
        </motion.div>

        {/* Skills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all text-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              {skill.icon}
              <h3 className="font-semibold text-xl mb-2">{skill.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
