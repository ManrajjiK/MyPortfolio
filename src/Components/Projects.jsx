import React, { useState } from 'react';
import { motion } from 'framer-motion';

const projectList = [
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
    link: "#", 
    category: "React",
    tech: ["React.js", "Tailwind CSS", "Framer Motion"] 
  },
  { 
    name: "AyurHeaven", 
    description: "An interactive web app offering searchable profiles of medicinal plants, including their uses, preparation methods, and precautions. Built for SIH 2024 problem statement.", 
    link: "https://ayur-heaven.vercel.app/", 
    category: "React",
    tech: ["React.js", "Tailwind CSS", "REST APIs", "Vercel Deployment"] 
  },
  { 
    name: "Academic Project – Smart Irrigation System", 
    description: "An IoT-based automation project to optimize water usage in agriculture. Used soil moisture sensors and microcontrollers to automate irrigation, ensuring sustainable farming practices.", 
    link: "#", 
    category: "ACADEMIC",
    tech: ["IoT", "Arduino/NodeMCU", "Soil Moisture Sensor", "Temperature Sensor", "C++/Embedded C"] 
  },
];

const techFilters = ["All", "MERN", "React", "ACADEMIC"];

function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projectList.filter(
    (p) => filter === "All" || p.category === filter
  );

  return (
    <section className="p-12 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100" id="projects">
      <motion.h2 
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>

      {/* Filter Buttons */}
      <div className="flex justify-center space-x-4 mb-10">
        {techFilters.map((tech) => (
          <motion.button
            key={tech}
            onClick={() => setFilter(tech)}
            className={`px-4 py-2 rounded font-medium transition-colors ${
              filter === tech 
                ? "bg-blue-500 text-white shadow-lg" 
                : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {tech}
          </motion.button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">{project.description}</p>
            <p className="text-sm mb-3">
              <span className="font-semibold">Tech Stack:</span> {project.tech.join(", ")}
            </p>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline font-medium"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;


