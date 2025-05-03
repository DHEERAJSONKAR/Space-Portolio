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
            Portfolio
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex h-full items-center justify-center">
          <div className="flex items-center justify-between w-auto h-auto border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer hover:text-purple-500 transition-colors mx-4">
              About
            </a>
            <a href="#skills" className="cursor-pointer hover:text-purple-500 transition-colors mx-4">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer hover:text-purple-500 transition-colors mx-4">
              Projects
            </a>
          </div>
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

          {/* Mobile Menu - Circular Style */}
          {mobileMenuOpen && (
            <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fadeIn">
              <div className="relative bg-[#030014] border border-purple-500/30 rounded-full w-64 h-64 flex items-center justify-center animate-scaleIn">
                {/* Inner circle with gradient border */}
                <div className="absolute inset-1 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-50"></div>
                
                {/* Navigation Links */}
                <div className="relative flex flex-col items-center">
                  <a 
                    href="#about-me" 
                    onClick={handleNavLinkClick}
                    className="absolute top-8 left-4 text-gray-200 hover:text-purple-500 transition-colors text-sm"
                  >
                    About<br />me
                  </a>
                  
                  <a 
                    href="#skills" 
                    onClick={handleNavLinkClick}
                    className="absolute top-16 text-gray-200 hover:text-purple-500 transition-colors text-sm"
                  >
                    Skills
                  </a>
                  
                  <a 
                    href="#projects" 
                    onClick={handleNavLinkClick}
                    className="absolute top-8 right-4 text-gray-200 hover:text-purple-500 transition-colors text-sm"
                  >
                    Projects
                  </a>
                  
                  {/* Close button */}
                  <button 
                    onClick={() => setMobileMenuOpen(false)}
                    className="absolute bottom-8 text-gray-300 hover:text-white transition-colors"
                    aria-label="Close menu"
                  >
                    Close
                  </button>
                </div>
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
