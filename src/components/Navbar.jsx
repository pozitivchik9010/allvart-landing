import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <div className="text-xl font-bold">Мій Сайт</div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-gray-300 transition">
            Головна
          </a>
          <a href="#" className="hover:text-gray-300 transition">
            Про нас
          </a>
          <a href="#" className="hover:text-gray-300 transition">
            Контакти
          </a>
        </div>

        {/* Burger icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="relative w-8 h-8 focus:outline-none"
          >
            {/* Line 1 */}
            <span
              className={`absolute h-0.5 w-8 bg-white transition-transform duration-300 ${
                isOpen ? "rotate-45 top-3.5" : "top-2"
              }`}
            ></span>

            {/* Line 2 */}
            <span
              className={`absolute h-0.5 w-8 bg-white transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "top-3.5"
              }`}
            ></span>

            {/* Line 3 */}
            <span
              className={`absolute h-0.5 w-8 bg-white transition-transform duration-300 ${
                isOpen ? "-rotate-45 bottom-2" : "bottom-2"
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 px-4 pb-4" : "max-h-0"
        }`}
      >
        <a href="#" className="block py-2 hover:text-gray-300 transition">
          Головна
        </a>
        <a href="#" className="block py-2 hover:text-gray-300 transition">
          Про нас
        </a>
        <a href="#" className="block py-2 hover:text-gray-300 transition">
          Контакти
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
