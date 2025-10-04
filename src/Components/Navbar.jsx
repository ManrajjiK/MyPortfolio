import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Achievements", path: "/achievements" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide text-gray-800 hover:text-blue-600 transition duration-300">
          <Link to="/home">Manraj Kewat</Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          {navLinks.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              className="relative text-gray-700 hover:text-blue-600 transition duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-600 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX className="text-3xl text-gray-800" /> : <HiMenu className="text-3xl text-gray-800" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md shadow-md absolute w-full left-0 top-full px-6 py-4">
          <div className="flex flex-col space-y-4">
            {navLinks.map((item, i) => (
              <Link
                key={i}
                to={item.path}
                className="text-gray-700 hover:text-blue-600 font-medium text-lg"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
