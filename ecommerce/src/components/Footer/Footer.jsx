import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">

        {/* Info & Contact */}
        <div>
          <div className="flex items-center mb-3">
            <span className="text-lg font-semibold">ENLACES</span>
          </div>
          <ul className="space-y-0.5">
            <li><a href="/home" className="hover:text-[#bdabef]">Inicio</a></li>
            <li><a href="/items" className="hover:text-[#bdabef]">Productos</a></li>
            <li><a href="/chatbot" className="hover:text-[#bdabef]">Chatbot</a></li>
            
          </ul>
          <div className="mt-3 space-y-1">
            <p className="flex items-center"><FaPhone className="mr-2 text-xs" /> 641-754-0072</p>
            <p className="flex items-center"><FaEnvelope className="mr-2 text-xs" /> Gwendoolin@rhyta.com</p>
            <p className="flex items-center"><FaMapMarkerAlt className="mr-2 text-xs" /> 1718 Park Blvd, Marshalltown, IA</p>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">REDES SOCIALES</h3>
          <div className="flex space-x-3 text-lg">
            <a href="#" className="hover:text-[#bdabef]"><FaFacebookF /></a>
            <a href="#" className="hover:text-[#bdabef]"><FaTwitter /></a>
            <a href="#" className="hover:text-[#bdabef]"><FaWhatsapp /></a>
            <a href="#" className="hover:text-[#bdabef]"><FaInstagram /></a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">WEEKLY NEWSLETTER</h3>
          <form className="space-y-2">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-2 py-1.5 bg-gray-800 text-white border border-gray-700 focus:outline-none text-sm cursor-pointer transition-transform hover:scale-105"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-2 py-1.5 bg-gray-800 text-white border border-gray-700 focus:outline-none text-sm cursor-pointer transition-transform hover:scale-105"
            />
            <button
              type="submit"
              className="w-full bg-[#6D4FC2] hover:bg-[#5c42a4] text-white py-1.5 text-sm font-medium cursor-pointer transition-transform hover:scale-105"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      <div className="text-center mt-6 text-xs text-gray-400 border-t border-gray-700 pt-3">
        © All rights reserved 2025
      </div>
    </footer>
  );
};

export default Footer;
