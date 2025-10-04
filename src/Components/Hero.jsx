import { Link } from "react-router-dom";
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaLinkedin, FaGithub, FaTrophy } from 'react-icons/fa';
import { motion } from 'framer-motion';
import profilePic from '../assets/img.png';

function Hero() {
  return (
    <section
      className="relative overflow-hidden min-h-screen flex flex-col md:flex-row items-center justify-center 
      bg-gradient-to-br from-[#e0f7fa] via-[#bbdefb] to-[#c8e6c9] 
      dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
      text-gray-900 dark:text-gray-100 px-6 pt-24 pb-12"
      id="home"
    >
      {/* Light overlay for vibe */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none"></div>

      {/* Left Text Content */}
      <motion.div
        className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
          Hey there, I'm <span className="text-blue-600 dark:text-blue-400">Manraj</span> 👋
        </h1>
        <span className="text-xl md:text-2xl mb-6 font-medium text-gray-700 dark:text-gray-300">
          <Typewriter
            words={[
              "A Web Developer ",
              "MERN Stack Explorer ",
              "A Mechatronics Engineer ",
            ]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>

        <p className="max-w-md text-gray-700 dark:text-gray-400 mb-8 leading-relaxed">
          Crafting digital experiences that blend <span className="font-semibold text-green-600 dark:text-green-400">technology</span> and <span className="font-semibold text-blue-600 dark:text-blue-400">creativity</span>.  
          I build modern web apps with a touch of innovation and precision.
        </p>

        {/* Stylish Buttons */}
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          {[
            { path: "/about", label: "🚀 About", color: "from-purple-500 to-pink-500" },
            { path: "/projects", label: "💻 Projects", color: "from-blue-500 to-cyan-500" },
            { path: "/achievements", label: "🏆 Achievements", color: "from-green-500 to-lime-500" },
            { path: "/contact", label: "📩 Contact", color: "from-orange-500 to-red-500" },
          ].map((btn, idx) => (
            <motion.div key={idx} whileHover={{ y: -3 }}>
              <Link
                to={btn.path}
                className={`block px-6 py-3 bg-gradient-to-r ${btn.color}
                            text-white font-semibold rounded-xl shadow-lg
                            hover:scale-110 hover:shadow-2xl transition duration-300 ease-in-out text-center`}
              >
                {btn.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right Profile Section */}
      <motion.div
        className="md:w-1/2 flex flex-col items-center mt-12 md:mt-0 z-10"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Profile Pic with aura glow */}
        <motion.div
          className="relative"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-green-400 blur-2xl opacity-30"></div>
          <img
            src={profilePic}
            alt="Manraj"
            className="relative w-52 h-52 md:w-64 md:h-64 rounded-full border-4 border-blue-500 shadow-lg object-cover"
          />
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex space-x-6 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.a
            href="https://github.com/ManrajjiK"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-gray-200 hover:text-black dark:hover:text-white"
            whileHover={{ scale: 1.3 }}
          >
            <FaGithub size={32} />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/manraj-kewat-802b85280/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-400"
            whileHover={{ scale: 1.3 }}
          >
            <FaLinkedin size={32} />
          </motion.a>
        </motion.div>

        {/* Education / Highlight Card */}
        <motion.div
          className="mt-10 bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-6 w-80 text-center border border-gray-200 dark:border-gray-700 backdrop-blur-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold flex items-center justify-center mb-4">
            <FaTrophy className="text-yellow-500 mr-2" /> Education
          </h2>
          <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
            <li>🎓 B.Tech (Mechatronics Engineering)</li>
            <li>🏫 Jabalpur Engineering College</li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;


