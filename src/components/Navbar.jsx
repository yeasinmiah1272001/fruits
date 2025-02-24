import React from "react";
import { NavLink } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Product", path: "/product" },
    { name: "Services", path: "/services" },
    { name: "Contact us", path: "/contact" },
    { name: "All product", path: "all" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Nature's Platter" className="h-8 w-8" />
          <span className="text-green-600 font-bold text-xl">
            nature's platter
          </span>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition duration-300 ${
                    isActive
                      ? "text-green-600"
                      : "text-gray-600 hover:text-green-600"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <FaSearch className="text-gray-600 text-lg cursor-pointer hover:text-green-600" />
          <FaShoppingCart className="text-gray-600 text-lg cursor-pointer hover:text-green-600" />
          <button className="border border-green-600 text-green-600 px-4 py-1 rounded-md hover:bg-green-600 hover:text-white transition">
            Login
          </button>
          <button className="bg-green-600 text-white px-4 py-1 rounded-md hover:bg-green-700 transition">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
