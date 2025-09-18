import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      className="p-12 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
      id="contact"
    >
      <motion.h2 
        className="text-3xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>

      <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <motion.div 
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 rounded border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="p-3 rounded border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
            />
            <motion.button
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div 
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-center space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-center md:text-left">Reach Me At</h3>

          <div className="flex items-center space-x-4 hover:scale-105 transition transform cursor-pointer">
            <FaEnvelope className="text-blue-500 text-2xl" />
            <a href="mailto:kewatmanraj797@gmail.com" className="hover:underline">
              kewatmanraj797@gmail.com
            </a>
          </div>

          <div className="flex items-center space-x-4 hover:scale-105 transition transform cursor-pointer">
            <FaLinkedin className="text-blue-700 text-2xl" />
            <a href="https://www.linkedin.com/in/manraj-kewat" target="_blank" className="hover:underline">
              LinkedIn Profile
            </a>
          </div>

          <div className="flex items-center space-x-4 hover:scale-105 transition transform cursor-pointer">
            <FaGithub className="text-gray-800 dark:text-gray-100 text-2xl" />
            <a href="https://github.com/ManrajjiK" target="_blank" className="hover:underline">
              My Repos
            </a>
          </div>

          <div className="flex items-center space-x-4 hover:scale-105 transition transform cursor-pointer">
            <FaPhone className="text-green-500 text-2xl" />
            <span>+91 7974827245</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
