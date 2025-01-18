import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/Image/Logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-bgColor text-white sm:px-15 px-10 py-4 fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* LOGO */}
        <Link to="/">
          <img src={logo} alt="AT Logo" className="sm:h-[50px] h-[34px]" />
        </Link>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden md:flex space-x-6 font-medium text-sm">
          <li>
            <Link to="/" className="hover:text-gray-300">
              SERVICES
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-gray-300">
              ABOUT US
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-gray-300">
              CONTACT US
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-gray-300">
              CAREERS
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Side Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-white text-black w-64 transform transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-black"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul className="flex flex-col space-y-6 mt-6 px-6 font-medium text-sm">
          <li>
            <Link
              to="/"
              className="hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              SERVICES
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT US
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT US
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)}
            >
              CAREERS
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
