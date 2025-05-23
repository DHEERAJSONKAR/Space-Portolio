"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";


const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when a link is clicked
  const handleNavLinkClick = () => {
    setMobileMenuOpen(false);
  };

  // Handle body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto">
        {/* Logo */}
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/dkphoto.jpg"
            alt="Dheeraj Sonkar"
            width={50}
            height={50}
            className="cursor-pointer rounded-full border-2 border-purple-500 hover:border-cyan-500 transition-all"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            Dheeraj Sonkar
          </span>
        </a>

        {/* Desktop Navigation - Removed from box and added directly to navbar */}
        <div className="hidden md:flex h-full items-center">
          <nav className="flex space-x-8">
            <a href="#about-me" className="text-gray-200 hover:text-purple-500 transition-colors font-medium">
              About
            </a>
            <a href="#skills" className="text-gray-200 hover:text-purple-500 transition-colors font-medium">
              Skills
            </a>
            <a href="#projects" className="text-gray-200 hover:text-purple-500 transition-colors font-medium">
              Projects
            </a>
          </nav>
        </div>

        {/* Mobile Circular Navigation Menu */}
        <div className="md:hidden flex items-center justify-center">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative w-12 h-12 rounded-full border border-purple-500/50 bg-[#0300145e] flex items-center justify-center z-50"
            aria-label="Toggle navigation menu"
          >
            <div className="w-5 h-5 flex flex-col items-center justify-center">
              <span className={`block w-5 h-0.5 bg-white mb-1 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5 transition-transform duration-300' : 'transition-transform duration-300'}`}></span>
              <span className={`block w-5 h-0.5 bg-white mb-1 ${mobileMenuOpen ? 'opacity-0 transition-opacity duration-300' : 'opacity-100 transition-opacity duration-300'}`}></span>
              <span className={`block w-5 h-0.5 bg-white ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5 transition-transform duration-300' : 'transition-transform duration-300'}`}></span>
            </div>
          </button>

          {/* Mobile Menu - Full Screen Style for Better Responsiveness */}
          {mobileMenuOpen && (
            <div className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black/90 backdrop-blur-sm animate-fadeIn">
              <div className="w-full max-w-sm flex flex-col items-center space-y-8">
                {/* Navigation Links - Simplified and more direct */}
                <a 
                  href="#about-me" 
                  onClick={handleNavLinkClick}
                  className="text-gray-200 hover:text-purple-500 transition-colors text-xl font-medium"
                >
                  About me
                </a>
                
                <a 
                  href="#skills" 
                  onClick={handleNavLinkClick}
                  className="text-gray-200 hover:text-purple-500 transition-colors text-xl font-medium"
                >
                  Skills
                </a>
                
                <a 
                  href="#projects" 
                  onClick={handleNavLinkClick}
                  className="text-gray-200 hover:text-purple-500 transition-colors text-xl font-medium"
                >
                  Projects
                </a>
                
                {/* Social links in mobile menu */}
                <div className="flex space-x-6 mt-4">
                  <a href="https://www.instagram.com/dheerajsonkar454/?hl=en" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-pink-500 transition-colors">
                    <FaInstagram size={28} />
                  </a>
                  <a href="https://github.com/DHEERAJSONKAR" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white transition-colors">
                    <FaGithub size={28} />
                  </a>
                  <a href="https://www.linkedin.com/in/dheeraj-sonkar-304b982b7/" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-blue-500 transition-colors">
                    <FaLinkedin size={28} />
                  </a>
                </div>
                
                {/* Close button */}
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-8 text-gray-300 hover:text-white transition-colors border border-purple-500/30 px-6 py-2 rounded-full"
                  aria-label="Close menu"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Social Media Icons */}
        <div className="flex flex-row gap-5">
          <a href="https://www.instagram.com/dheerajsonkar454/?hl=en" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-pink-500 transition-colors">
            <FaInstagram size={24} />
          </a>
          <a href="https://github.com/DHEERAJSONKAR" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white transition-colors">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/dheeraj-sonkar-304b982b7/" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-blue-500 transition-colors">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
