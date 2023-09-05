import React from 'react';
import { FaHome, FaTools, FaInfoCircle, FaPhone, FaMoneyBillWave } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-6 md:py-4">
        <div className="flex items-center">
          <Link to="/SriDhanalakshmiJothidam.com/" className="flex items-center">
            <img
              src="images/logo1.png"
              alt="Sri Dhanalakshmi Jothidam Logo"
              className="h-12 w-12 md:h-20 md:w-20 mr-2"
            />
            <h1 className="text-xl md:text-3xl font-semibold text-red-500">
              Sri Dhanalakshmi Jothidam
            </h1>
          </Link>
        </div>
        <nav className="flex mt-4 md:mt-0 space-x-2 md:space-x-4 md:ml-4">
          <NavLink to="/SriDhanalakshmiJothidam.com/" text="Home" icon={<FaHome />} />
          <NavLink to="/SriDhanalakshmiJothidam.com/services" text="Services" icon={<FaTools />} />
          <NavLink to="/SriDhanalakshmiJothidam.com/about" text="About" icon={<FaInfoCircle />} />
          <NavLink to="/SriDhanalakshmiJothidam.com/payment" text="Payment" icon={<FaMoneyBillWave />} />
          <NavLink to="/SriDhanalakshmiJothidam.com/contact" text="Contact" icon={<FaPhone />} />
        </nav>
      </div>
    </header>
  );
};

const NavLink = ({ to, text, icon }) => {
  const location = useLocation();

  return (
    <Link
      to={to}
      className={`text-base md:text-lg text-blue-500 hover:text-red-500 flex items-center ${
        location.pathname === to ? 'underline' : ''
      }`}
    >
      {icon && <span className="mr-1">{icon}</span>}
      {text}
    </Link>
  );
};

export default Header;
