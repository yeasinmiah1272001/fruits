import React from "react";
import { NavLink } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Product", path: "/product" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "All product", path: "all" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="bg-white border border-gray-300 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          {/* <img src="/logo.png" alt="Nature's Platter" className="h-8" /> */}
          <h1 className="text-2xl uppercase tracking-wide text-green-700 font-semibold">Nature's Platter</h1>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition duration-300 ${isActive
                    ? "text-green-600 text-[18px]"
                    : "text-gray-600 hover:text-green-600 text-[18px]"
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
          <FaSearch size={20} className="text-gray-600 text-lg cursor-pointer hover:text-green-600" />
          <FaShoppingCart size={20} className="text-gray-600 text-lg cursor-pointer hover:text-green-600" />
          <button className="border border-green-600 text-green-600 px-4 py-1 rounded-md hover:bg-green-600 hover:text-white transition">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
