import { useState } from 'react';
import logo from "../assets/svgviewer-png-output.png";
import Hamburger from 'hamburger-react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "Crypto Taxes", link: "#" },
    { name: "Free Tools", link: "#" },
    { name: "Resource Center", link: "#" },
  ];

  const renderMenuItems = (className) => (
    menuItems.map((item, index) => (
      <div key={index} className={`cursor-pointer ${className}`}>
        {item.name}
      </div>
    ))
  );

  return (
    <nav className="lg:h-20 h-16 flex items-center justify-between shadow-md bg-white w-screen px-4 lg:px-14">
      {/* Logo */}
      <div>
        <img src={logo} alt="Logo" className="w-24 h-6" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center">
        {renderMenuItems("text-lg font-semibold text-[#0F1629] mr-6")}
        <button className="bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] px-8 py-2 text-white rounded-lg">
          Get Started
        </button>
      </div>

      {/* Hamburger Icon */}
      <div className="lg:hidden">
        <Hamburger toggled={isOpen} toggle={toggleMenu} />
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="lg:hidden absolute top-20 right-0 mt-2 mr-2 bg-white rounded-md shadow-md py-5"
          aria-label="Mobile menu"
        >
          {renderMenuItems("text-lg font-semibold text-[#0F1629] px-4 py-2 mb-2")}
          <button className="bg-gradient-to-r from-[#2870EA] to-[#1B4AEF] px-8 py-2 text-white rounded-lg mx-4 mt-4">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}

export default Header;
