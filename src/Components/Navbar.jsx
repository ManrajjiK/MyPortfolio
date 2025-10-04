import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo / Name */}
        <div className="text-2xl font-extrabold tracking-wide text-gray-800 hover:text-blue-600 transition duration-300">
          <Link to="/home">Manraj Kewat</Link>
        </div>

        {/* Links */}
        <div className="flex space-x-8 text-lg font-medium">
          {[
            { name: "About", path: "/about" },
            { name: "Projects", path: "/projects" },
            { name: "Achievements", path: "/achievements" },
            { name: "Contact", path: "/contact" },
          ].map((item, i) => (
            <Link
              key={i}
              to={item.path}
              className="relative text-gray-700 hover:text-blue-600 transition duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-blue-600 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
