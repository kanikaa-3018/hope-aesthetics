import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"; // Importing social media icons

const Footer = () => {
  return (
    <footer className="bg-[#1B1833] text-gray-200 py-12">
      <div className="container mx-auto px-4">
        {/* Footer Top Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#F5EFFF]">Contact Us</h3>
            <p className="mb-2">IIIE-144, Nehru Nagar,Ghaziabad</p>
            <p className="mb-2">Phone: +91 78388 90618</p>
            <p className="mb-2">Email: hopeaestheticss@gmail.com</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#F5EFFF]">Quick Links</h3>
            <ul>
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#gallery" className="hover:text-white">Gallery</a></li>
              <li><a href="#facilities" className="hover:text-white">What We Offer</a></li>
              <li><a href="#aboutMe" className="hover:text-white">About Me</a></li>
              {/* <li><a href="#terms" className="hover:text-white">Terms of Service</a></li> */}
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#F5EFFF]">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-2xl hover:text-white transition duration-300" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl hover:text-white transition duration-300" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-2xl hover:text-white transition duration-300" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl hover:text-white transition duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Hope Aesthetics. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
