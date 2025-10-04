import React from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaAward, FaCertificate } from "react-icons/fa";
import { Link } from "react-router-dom";

export const achievements = [
  {
    icon: <FaTrophy className="text-yellow-500 text-4xl" />,
    title: "Smart India Hackathon 2024",
    description: "Secured 14th rank among 15 competitive teams, contributing solutions as part of a collaborative project team.",
  },
  {
    icon: <FaAward className="text-blue-500 text-4xl" />,
    title: "Top Performer",
    description: "Recognized as top performer during MERN stack internship.",
  },
  {
    icon: <FaCertificate className="text-green-500 text-4xl" />,
    title: "Volunteering Experience",
    description: "Actively contributed at college fest by managing event logistics and hospitality, showcasing strong teamwork, coordination, and organizational skills.",
  },
];

function Achievements() {
  return (
    <section className="relative p-12 pt-24 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
      <motion.h2
        className="text-4xl font-extrabold mb-12 text-center"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Achievements
      </motion.h2>

      {/* Achievements Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transform transition-all cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            {item.icon}
            <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{item.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Bottom Horizontal Buttons */}
      <motion.div
        className="flex flex-wrap justify-center gap-6"
        initial={{ opacity: 0, y: 30 }}
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

export default Achievements;

