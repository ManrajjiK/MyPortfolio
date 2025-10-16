import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const projectList = [
  { 
    name: "Food Delivery App", 
    description: "A complete MERN stack food delivery platform with user authentication, cart management, order tracking, and secure payment gateway integration.", 
    link: "https://github.com/ManrajjiK/FoodFleet", 
    category: "MERN",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT Auth", "REST APIs"] 
  },
  { 
    name: "Portfolio Website", 
    description: "A personal portfolio website showcasing my skills, achievements, and projects with smooth animations and responsive UI.", 
    link: "https://github.com/ManrajjiK/MyPortfolio", 
    category: "React",
    tech: ["React.js", "Tailwind CSS", "Framer Motion"] 
  },
  { 
    name: "AyurHeaven", 
    description: "An interactive web app offering searchable profiles of medicinal plants, including their uses, preparation methods, and precautions. Built for SIH 2024 problem statement.", 
    link: "https://github.com/ManrajjiK/AyurHeaven", 
    category: "React",
    tech: ["React.js", "Tailwind CSS", "REST APIs", "Vercel Deployment"] 
  },
  { 
    name: "Smart Irrigation System", 
    description: "An IoT-based automation project to optimize water usage in agriculture. Used sensors & microcontrollers to automate irrigation.", 
    link: "#", 
    category: "ACADEMIC",
    tech: ["IoT", "Arduino/NodeMCU", "Sensors", "C++/Embedded C"] 
  },
];

export const techFilters = ["All", "MERN", "React", "ACADEMIC"];

function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projectList.filter(
    (p) => filter === "All" || p.category === filter
  );

  return (
    <section className="relative p-12 pt-24 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      {/* Page Title */}
      <motion.h2
        className="text-4xl font-extrabold mb-10 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>

      {/* Filter Buttons */}
      <div className="flex justify-center flex-wrap gap-4 mb-12">
        {techFilters.map((tech) => (
          <motion.button
            key={tech}
            onClick={() => setFilter(tech)}
            className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
              filter === tech
                ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {tech}
          </motion.button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg cursor-pointer
                       hover:shadow-2xl transform transition-all duration-500 relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Category Badge */}
            <span className="absolute top-4 right-4 bg-gradient-to-r from-green-400 to-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow">
              {project.category}
            </span>

            <h3 className="text-2xl font-bold mb-3">{project.name}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">{project.description}</p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((techItem, i) => (
                <span
                  key={i}
                  className="bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-blue-200 text-xs font-semibold px-2 py-1 rounded-full"
                >
                  {techItem}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold hover:from-purple-500 hover:to-indigo-500 shadow-lg transition-transform transform hover:scale-105"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>

      {/* Bottom Navigation Buttons */}
      <motion.div
        className="mt-16 flex flex-wrap justify-center gap-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Link
          to="/about"
          className="px-6 py-3 rounded-full bg-blue-500 text-white font-semibold hover:bg-blue-600 transition transform hover:scale-105 shadow-lg"
        >
          About
        </Link>
        <Link
          to="/projects"
          className="px-6 py-3 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600 transition transform hover:scale-105 shadow-lg"
        >
          Projects
        </Link>
        <Link
          to="/achievements"
          className="px-6 py-3 rounded-full bg-yellow-500 text-white font-semibold hover:bg-yellow-600 transition transform hover:scale-105 shadow-lg"
        >
          Achievements
        </Link>
        <Link
          to="/contact"
          className="px-6 py-3 rounded-full bg-purple-500 text-white font-semibold hover:bg-purple-600 transition transform hover:scale-105 shadow-lg"
        >
          Contact
        </Link>
      </motion.div>
    </section>
  );
}

export default Projects;
