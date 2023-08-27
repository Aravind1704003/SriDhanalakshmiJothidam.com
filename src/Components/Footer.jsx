import React from 'react';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-lg mb-2 text-yellow-400">© 2023 Sri Dhanalakshmi Jothidam. All rights reserved.</p>
        <p className="text-sm text-yellow-300">Website designed by Aravind</p>
        <p className="text-sm text-yellow-300"><FaWhatsapp className="inline-block ml-2 text-green-400" /> 8610172242 </p>
        <p className="text-sm text-yellow-300"><FaEnvelope className="inline-block ml-2 text-blue-400" /> aravind1704003@gmail.com </p>
      </div>
    </footer>
  );
};

export default Footer;
