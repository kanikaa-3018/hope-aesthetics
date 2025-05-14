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

// //yaha se changed hai
// import React from "react";
// import {
//   FaFacebook,
//   FaInstagram,
//   FaTwitter,
//   FaLinkedin,
// } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-[#1B1833] text-gray-300 pt-12 pb-6">
//       <div className="container mx-auto px-6">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
//           {/* Contact Info */}
//           <div>
//             <h3 className="text-xl font-semibold text-[#F5EFFF] mb-4">Contact Us</h3>
//             <p className="mb-2">IIIE-144, Nehru Nagar, Ghaziabad</p>
//             <p className="mb-2">Phone: <a href="tel:+917838890618" className="hover:text-white">+91 78388 90618</a></p>
//             <p className="mb-2">Email: <a href="mailto:hopeaestheticss@gmail.com" className="hover:text-white">hopeaestheticss@gmail.com</a></p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-xl font-semibold text-[#F5EFFF] mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               {[
//                 { label: "Home", href: "#home" },
//                 { label: "Gallery", href: "#gallery" },
//                 { label: "What We Offer", href: "#facilities" },
//                 { label: "About Me", href: "#aboutMe" },
//               ].map(({ label, href }) => (
//                 <li key={label}>
//                   <a
//                     href={href}
//                     className="hover:text-white transition-colors duration-200"
//                   >
//                     {label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Social Media */}
//           <div>
//             <h3 className="text-xl font-semibold text-[#F5EFFF] mb-4">Follow Us</h3>
//             <div className="flex space-x-5" aria-label="Social media links">
//               <a
//                 href="https://facebook.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Facebook"
//               >
//                 <FaFacebook className="text-2xl hover:text-white transition-transform duration-300 hover:scale-110" />
//               </a>
//               <a
//                 href="https://instagram.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Instagram"
//               >
//                 <FaInstagram className="text-2xl hover:text-white transition-transform duration-300 hover:scale-110" />
//               </a>
//               <a
//                 href="https://twitter.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="Twitter"
//               >
//                 <FaTwitter className="text-2xl hover:text-white transition-transform duration-300 hover:scale-110" />
//               </a>
//               <a
//                 href="https://linkedin.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="LinkedIn"
//               >
//                 <FaLinkedin className="text-2xl hover:text-white transition-transform duration-300 hover:scale-110" />
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="border-t border-gray-600 my-4"></div>

//         {/* Footer Bottom */}
//         <div className="text-center text-sm text-gray-400">
//           <p>&copy; {new Date().getFullYear()} Hope Aesthetics. All Rights Reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
