import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Splash() {
  const navigate = useNavigate();
  const [dragged, setDragged] = useState(false);

  const handleDragEnd = (event, info) => {
    // Agar user ne upar swipe kiya (negative y direction)
    if (info.offset.y < -100) {  
      setDragged(true);
      navigate("/home"); // Hero page
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 flex flex-col justify-center items-center text-white p-6 z-50"
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      onDragEnd={handleDragEnd}
      style={{ touchAction: "pan-y" }}
    >
      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-6 text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Thanks for visiting!
      </motion.h1>

      <motion.p
        className="text-xl md:text-2xl mb-10 text-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Swipe up to enter my Portfolio 👆
      </motion.p>

      <motion.div className="animate-bounce mt-6">
        <span className="text-4xl">⬆️</span>
      </motion.div>
    </motion.div>
  );
}

export default Splash;
