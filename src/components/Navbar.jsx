import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { navLinks, contactInfo } from '../constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-50">
      <div>
        <a href="/" className="text-2xl font-bold text-pink-600">TK</a>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a href={`#${link.id}`} className="px-4 cursor-pointer hover:text-pink-600 duration-200">
              {link.title}
            </a>
          </li>
        ))}
      </ul>

      {/* Hamburger Icon */}
      <div onClick={toggleMenu} className="md:hidden z-10 cursor-pointer">
        {!isOpen ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          isOpen
            ? 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
            : 'hidden'
        }
      >
        {navLinks.map((link) => (
          <li key={link.id} className="py-6 text-4xl">
            <a onClick={toggleMenu} href={`#${link.id}`} className="hover:text-pink-600 duration-200">
              {link.title}
            </a>
          </li>
        ))}
      </ul>

      {/* Social Icons (Fixed on side for desktop) */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href={`mailto:${contactInfo.email}`}
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;