import React from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaAward, FaCertificate } from "react-icons/fa";

const achievements = [
  {
    icon: <FaTrophy className="text-yellow-500 text-3xl" />,
    title: "Participated in Smart India Hackathon 2024",
    description: "Secured 14th rank among 15 competitive teams, contributing solutions as part of a collaborative project team.",
  },
  {
    icon: <FaAward className="text-blue-500 text-3xl" />,
    title: "Top Performer",
    description: "Recognized as top performer during MERN stack internship.",
  },
  {
    icon: <FaCertificate className="text-green-500 text-3xl" />,
    title: "Volunteering Experience",
    description: "Actively contributed at college fest by managing event logistics and hospitality, showcasing strong teamwork, coordination, and organizational skills.",
  },
];

function Achievements() {
  return (
    <section
      className="p-12 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
      id="achievements"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Achievements</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center hover:shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            {item.icon}
            <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
