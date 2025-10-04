import React from 'react';
import { FaLaptopCode, FaDatabase, FaLightbulb } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const skills = [
  {
    icon: <FaLaptopCode className="text-5xl mb-4 text-blue-400 mx-auto" />,
    title: "Frontend",
    desc: "React, TailwindCSS, HTML, CSS, JavaScript",
    color: "from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-700"
  },
  {
    icon: <FaDatabase className="text-5xl mb-4 text-green-400 mx-auto" />,
    title: "Backend",
    desc: "Node.js, Express, MongoDB, REST APIs",
    color: "from-green-100 to-green-200 dark:from-green-800 dark:to-green-700"
  },
  {
    icon: <FaLightbulb className="text-5xl mb-4 text-yellow-400 mx-auto" />,
    title: "Problem Solving",
    desc: "Data Structures, Algorithms, Logic & Creativity",
    color: "from-yellow-100 to-yellow-200 dark:from-yellow-700 dark:to-yellow-600"
  }
];

function About() {
  return (
    <section
      className="relative p-16 bg-gradient-to-r from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-gray-100 overflow-hidden"
      id="about"
    >
      {/* Animated Background Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] animate-[floatBG_20s_linear_infinite]"></div>

      {/* Title */}
      <motion.h2
        className="text-4xl font-extrabold mb-14 text-center relative z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Text Section */}
        <motion.div
          className="space-y-6 text-lg leading-relaxed"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p>
            Hi! I'm <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Manraj Kewat</span>, a passionate{" "}
            <span className="font-semibold text-indigo-500">Web Developer</span> and{" "}
            <span className="font-semibold text-green-500">Mechatronics Engineer</span>.  
            I love turning complex problems into elegant digital experiences.
          </p>
          <p>
            My core strength is <span className="font-bold text-green-500">MERN Stack</span> development, 
            but I constantly experiment with new tools and technologies 
            to create modern, scalable and impactful solutions.
          </p>
          <p className="italic text-gray-600 dark:text-gray-400">
            “For me, coding isn’t just work — it’s creativity meeting logic.” 🚀
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-2xl shadow-lg cursor-pointer bg-white/20 backdrop-blur-lg border border-white/30 hover:border-gradient-to-r from-purple-400 to-pink-500 transform transition-all text-center`}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.08, rotate: 1, boxShadow: "0px 20px 50px rgba(0,0,0,0.3)" }}
            >
              <motion.div animate={{ rotate: [0, 5, -5, 0] }} transition={{ repeat: Infinity, duration: 4 }}>
                {skill.icon}
              </motion.div>
              <h3 className="font-bold text-xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">{skill.title}</h3>
              <p className="text-gray-700 dark:text-gray-200">{skill.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Buttons Section */}
      <motion.div
        className="mt-16 flex flex-wrap justify-center gap-6 relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Link
          to="/about"
          className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:shadow-2xl transition transform hover:scale-110"
        >
          About
        </Link>
        <Link
          to="/projects"
          className="px-6 py-3 rounded-full bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold shadow-lg hover:shadow-2xl transition transform hover:scale-110"
        >
          Projects
        </Link>
        <Link
          to="/achievements"
          className="px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-semibold shadow-lg hover:shadow-2xl transition transform hover:scale-110"
        >
          Achievements
        </Link>
        <Link
          to="/contact"
          className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:shadow-2xl transition transform hover:scale-110"
        >
          Contact
        </Link>
      </motion.div>
    </section>
  );
}

export default About;

