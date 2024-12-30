import React from "react";
import logo from "../../public/logo.jpg";

const Navbar = () => {
  return (
    <nav className="bg-black shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex gap-2 items-center">
          <img
            src={logo}
            alt="Clinic Hope Aesthetics Logo"
            className="w-10 h-10 object-cover"
          />
          <div className="text-lg font-bold text-gray-200">
            Hope Aesthetics
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8">
          <li>
            <a
              href="#home" // Target the section with id="home"
              className="text-gray-200 hover:text-white relative inline-block transition duration-300"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-300 transition-all duration-300 ease-out hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              href="#gallery" // Target the section with id="gallery"
              className="text-gray-200 hover:text-white relative inline-block transition duration-300"
            >
              Gallery
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-300 transition-all duration-300 ease-out hover:w-full"></span>
            </a>
          </li>
          <li>
            <a
              href="#facilities" // Target the section with id="facilities"
              className="text-gray-200 hover:text-white relative inline-block transition duration-300"
            >
              What we Offer
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-300 transition-all duration-300 ease-out hover:w-full"></span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
