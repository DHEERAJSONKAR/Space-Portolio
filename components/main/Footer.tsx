import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Community</div>
                    <a href="https://github.com/DHEERAJSONKAR" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer hover:text-white transition-colors">
                        <FaGithub />
                        <span className="text-[15px] ml-[6px]">Github</span>    
                    </a>
                    <a href="https://www.linkedin.com/in/dheeraj-sonkar-304b982b7" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer hover:text-blue-500 transition-colors">
                        <FaLinkedin />
                        <span className="text-[15px] ml-[6px]">LinkedIn</span>    
                    </a>
                </div>
                {/* <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Social Media</div>
                    <a href="https://www.instagram.com/dheerajsonkar454/?hl=en" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer hover:text-pink-500 transition-colors">
                        <FaInstagram />
                        <span className="text-[15px] ml-[6px]">Instagram</span>    
                    </a>
                    <a href="https://github.com/DHEERAJSONKAR" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer hover:text-white transition-colors">
                        <FaGithub />
                        <span className="text-[15px] ml-[6px]">Github</span>    
                    </a>
                    <a href="https://www.linkedin.com/in/dheeraj-sonkar-304b982b7" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer hover:text-blue-500 transition-colors">
                        <FaLinkedin />
                        <span className="text-[15px] ml-[6px]">LinkedIn</span>    
                    </a>
                </div> */}
                {/* <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">About</div>
                   <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <span className="text-[15px] ml-[6px]">Become developer</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <span className="text-[15px] ml-[6px]">Learning And Practices</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <span className="text-[15px] ml-[6px]">dheerajsonkarmy@gmail.com</span>    
                    </p>
                </div> */}
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy; 2025 Made, By Dheeraj Sonkar
            </div>
        </div>
    </div>
  );
};

export default Footer;