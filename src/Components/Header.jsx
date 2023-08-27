import React from 'react';
import { FaHome, FaTools, FaInfoCircle, FaPhone } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation

const Header = () => {
  const location = useLocation(); // Get the current location

  return (
    <header className="bg-gray-900 text-white"> 
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-6">
        <div className="flex items-center">
          <Link to="/" className="flex items-center"> 
            <img src="/logo1.png" alt="Sri Dhanalakshmi Jothidam Logo" className="h-25 w-20 lg:h-25 lg:w-25 mr-2" />
            <h1 className="text-4xl lg:text-4xl font-semibold mb-4 lg:mb-0 lg:mr-8 text-red-500">Sri Dhanalakshmi Jothidam</h1>
          </Link>
        </div>
        <nav className="flex space-x-4">
          <Link to="/SriDhanalakshmiJothidam.com/" className={`text-lg lg:text-xl text-blue-500 hover:text-red-500 flex items-center ${location.pathname === '/' ? 'underline' : ''}`}>
            <FaHome className="mr-2" />Home
          </Link>
          <Link to="/SriDhanalakshmiJothidam.com/services" className={`text-lg lg:text-xl text-blue-500 hover:text-red-500 flex items-center ${location.pathname === '/services' ? 'underline' : ''}`}>
            <FaTools className="mr-2" />Services
          </Link>
          <Link to="/SriDhanalakshmiJothidam.com/about" className={`text-lg lg:text-xl text-blue-500 hover:text-red-500 flex items-center ${location.pathname === '/about' ? 'underline' : ''}`}>
            <FaInfoCircle className="mr-2" />About
          </Link>
          <Link to="/SriDhanalakshmiJothidam.com/contact" className={`text-lg lg:text-xl text-blue-500 hover:text-red-500 flex items-center ${location.pathname === '/contact' ? 'underline' : ''}`}>
            <FaPhone className="mr-2" />Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
