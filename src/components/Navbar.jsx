import React, { useState } from "react";
import Logo from "../Assets/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-10 w-full shadow-md bg-opacity-60 bg-white/30 backdrop-blur-md">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 no-underline">
            <img className="w-10 h-10" src={Logo} alt="logo" />
            <h1 className="mt-2 text-base font-bold text-black no-underline">
              RIVOT MOTORS
            </h1>
          </Link>
          <div className="hidden space-x-4 md:flex">
            <a
              href="#"
              className="font-bold text-black no-underline bg-gradient-to-r hover:text-gray-700"
            >
              Home
            </a>
            <a
              href="#about"
              className="font-bold text-black no-underline bg-gradient-to-r hover:text-gray-700"
            >
              About
            </a>
            <a
              href="#model"
              className="font-bold text-black no-underline bg-gradient-to-r hover:text-gray-700"
            >
              Models
            </a>
            <a
              href="#"
              className="font-bold text-black no-underline bg-gradient-to-r hover:text-gray-700"
            >
              Contact
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:text-gray-300 focus:outline-none"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  className="mr-3"
                >
                  <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6 mr-3 text-black"
                  fill="none"
                  height="300x"
                  width="300px"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute w-full px-2 pt-2 pb-4 shadow-md md:hidden backdrop-blur-md bg-slate-100">
          <a
            href="#"
            className="block py-1 text-black no-underline hover:text-gray-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="block py-1 text-black no-underline hover:text-gray-300"
          >
            About us
          </a>
          <a
            href="#model"
            className="block py-1 text-black no-underline hover:text-gray-300"
          >
            Models
          </a>
          <a
            href="#"
            className="block py-1 text-black no-underline hover:text-gray-300"
          >
            Contact us
          </a>
        </div>
      )}
    </nav>
  );
}
