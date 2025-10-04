import { Link } from "react-router-dom";
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaLinkedin, FaGithub, FaTrophy } from 'react-icons/fa';
import { motion } from 'framer-motion';
import profilePic from '../assets/img.png';

function Hero() {
  return (
    <section 
      className="min-h-screen flex flex-col md:flex-row items-center justify-center 
      bg-blue-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6 pt-24 pb-12" 
      id="home"
    >
      {/* Text Content */}
      <motion.div 
        className="md:w-1/2 flex flex-col items-center md:items-start mb-6 md:mb-0"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Manraj!</h1>
        <span className="text-xl mb-6 text-center md:text-left">
          <Typewriter
            words={['Web Developer', 'MERN Stack Enthusiast', 'Mechatronics Engineer']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>

        {/* Stylish Buttons */}
        <div className="flex flex-col space-y-4 w-full md:w-auto">
          <motion.a
            href="/about"
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 
                       text-white font-semibold rounded-xl shadow-lg
                       hover:from-pink-500 hover:to-purple-500 
                       transform hover:scale-110 hover:shadow-2xl 
                       transition duration-300 ease-in-out text-center"
            whileHover={{ y: -3 }}
          >
            🚀 About
          </motion.a>

          <motion.a
            href="/projects"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 
                       text-white font-semibold rounded-xl shadow-lg
                       hover:from-cyan-500 hover:to-blue-500 
                       transform hover:scale-110 hover:shadow-2xl 
                       transition duration-300 ease-in-out text-center"
            whileHover={{ y: -3 }}
          >
            💻 Projects
          </motion.a>

          <motion.a
            href="/achievements"
            className="px-6 py-3 bg-gradient-to-r from-green-500 to-lime-500 
                       text-white font-semibold rounded-xl shadow-lg
                       hover:from-lime-500 hover:to-green-500 
                       transform hover:scale-110 hover:shadow-2xl 
                       transition duration-300 ease-in-out text-center"
            whileHover={{ y: -3 }}
          >
            🏆 Achievements
          </motion.a>

          <motion.a
            href="/contact"
            className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 
                       text-white font-semibold rounded-xl shadow-lg
                       hover:from-red-500 hover:to-orange-500 
                       transform hover:scale-110 hover:shadow-2xl 
                       transition duration-300 ease-in-out text-center"
            whileHover={{ y: -3 }}
          >
            📩 Contact
          </motion.a>
        </div>
      </motion.div>

      {/* Profile Photo + Social Icons + Achievements */}
      <motion.div 
        className="md:w-1/2 flex flex-col items-center"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.img 
          src={profilePic}
          alt="Manraj"
          className="w-48 h-48 md:w-60 md:h-60 rounded-full border-4 border-blue-500 
                     shadow-lg object-cover"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        />

        {/* Social Icons */}
        <motion.div 
          className="flex space-x-6 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {/* GitHub */}
          <motion.a 
            href="https://github.com/ManrajjiK" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-gray-200"
            whileHover={{ scale: 1.3 }}
          >
            <FaGithub size={30} />
          </motion.a>

          {/* LinkedIn */}
          <motion.a 
            href="https://www.linkedin.com/in/manraj-kewat-802b85280/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600"
            whileHover={{ scale: 1.3 }}
          >
            <FaLinkedin size={30} />
          </motion.a>
        </motion.div>

        {/* Achievements Section */}
        <motion.div 
          className="mt-8 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 w-72 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold flex items-center justify-center mb-4">
            <FaTrophy lassName="text-yellow-500 mr-2" /> Education
          </h2>
          <ul className="text-sm space-y-2 text-gray-700 dark:text-gray-300">
            <li>🎓 B.Tech (Mechatronics Engineering), Jabalpur Engineering College</li>
          
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
