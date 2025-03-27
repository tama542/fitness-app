import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white py-8 mt-40  flex flex-col justify-between">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left flex-grow">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold mb-3">PUMP FITNESS</h2>
          <p className="text-gray-400">Stay Healthy and Fit.</p>
        </div>
        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li><Link to="/homepage" className="text-gray-400 hover:text-orange-500">Home</Link></li>
            <li><Link to="/about.html" className="text-gray-400 hover:text-orange-500">About</Link></li>
            <li><Link to="/contactForm" className="text-gray-400 hover:text-orange-500">Contact</Link></li>
          </ul>
        </div>
        {/* Social Media Links */}
        <div>
          <h2 className="text-xl font-bold mb-3">Follow Us</h2>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-gray-400 hover:text-orange-500"><FaFacebook size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-orange-500"><FaTwitter size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-orange-500"><FaLinkedin size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-orange-500"><FaInstagram size={24} /></a>
          </div>
        </div>
      </div>
      {/* Copyright Section */}
      <div className="text-center mt-8 text-gray-500 text-sm py-4">
        &copy; {new Date().getFullYear()} Pump Fitness. All rights reserved.
      </div>
    </footer>
  );
};
export default Footer;