"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGraduationCap, FaBriefcase, FaRegLightbulb, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { Skill_data } from "@/constants"; // Import the Skill_data from constants
import TypewriterText from "@/components/animations/TypewriterText";

const About = () => {
  // Define slideInFromBottom locally
  const slideInFromBottom = (delay: number) => {
    return {
      hidden: { y: 100, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          delay: delay,
          duration: 0.5,
        },
      },
    };
  };

  // Use a direct path to the image to avoid import issues
  const profileImagePath = "/dkphoto.jpg"; // Update this with your actual image path in the public folder

  return (
    <section 
      id="about-me" 
      className="flex flex-col items-center justify-center min-h-screen w-full py-20 mt-[65px] relative overflow-hidden"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        className="max-w-7xl w-full px-4 md:px-8 z-[30]"
      >
        <motion.div 
          variants={slideInFromTop()}
          className="flex justify-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            About me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Photo and contact information */}
          <motion.div 
            variants={slideInFromLeft(0.5)}
            className="flex flex-col items-center md:items-start"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mb-6 rounded-2xl overflow-hidden border-4 border-purple-500/50 shadow-xl shadow-purple-500/30 group">
              <Image
                src={profileImagePath} // Use the direct path instead of the imported image
                alt="Dheeraj Sonkar"
                width={320}
                height={320}
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                priority // Add priority to ensure it loads quickly
              />
              
              {/* Enhanced animated name with visual effects */}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                {/* Shimmer effect background */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent shimmer"></div>
                
                {/* Typewriter text with enhanced styling */}
                <div className="relative z-10 py-3">
                  <TypewriterText 
                    text="Dheeraj Sonkar" 
                    className="text-2xl font-bold"
                    speed={100}
                    delayBeforeDelete={3000}
                    delayBeforeType={800}
                    gradientColors="from-purple-400 via-pink-500 to-blue-400"
                  />
                  
                  {/* Subtitle that appears with a slight delay */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="text-sm text-gray-300 mt-1 italic"
                  >
                    Fullstack Developer
                  </motion.div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#0300145e] border border-[#7042f861] p-6 rounded-xl w-full mt-6">
              <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300 hover:text-purple-400 transition-colors">
                  <FaPhone className="mr-3" />
                  <a href="tel:+919876543210">+91 7392012757</a>
                </div>
                <div className="flex items-center text-gray-300 hover:text-purple-400 transition-colors">
                  <FaEnvelope className="mr-3" />
                  <a href="mailto:contact@example.com">dheerajsonkarmy@gmail.com</a>
                </div>
                <div className="flex items-center text-gray-300">
                  <FaMapMarkerAlt className="mr-3" />
                  <span>Jaunpur, Uttar Pradesh</span>
                </div>
              </div>
            </div>

            {/* Moved Interests section to the left side */}
            <div className="bg-[#0300145e] border border-[#7042f861] p-6 rounded-xl w-full mt-6">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-3 flex items-center">
                <FaRegLightbulb className="mr-2" /> Interests
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Web Development</li>
                <li>UI/UX Design</li>
                <li>Open Source Contribution</li>
              </ul>
            </div>
          </motion.div>

          {/* About text content */}
          <motion.div 
            variants={slideInFromRight(0.5)}
            className="flex flex-col space-y-6"
          >
            <div className="bg-[#0300145e] border border-[#7042f861] p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-3">
                Who I Am
              </h3>
              <p className="text-gray-300">
                Hi, I&apos;m Dheeraj Sonkar, a passionate Full Stack Developer with expertise in creating innovative web solutions. 
                I specialize in building responsive, user-friendly websites and applications using modern technologies like Html, Css, JavaScript, React, 
                Next.js, and Node.js, Java Language. I love solving complex problems and continuously learning new skills to enhance my craft.
              </p>
            </div>

            <div className="bg-[#0300145e] border border-[#7042f861] p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-3 flex items-center">
                <FaGraduationCap className="mr-2" /> Education
              </h3>
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-white">Master Of Computer Application (MCA)</h4>
                <p className="text-gray-400">St. Andrews Institute Of Technology And Management, 
                Gurgaon • 2024-2026</p>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-white">Bachelor Of Computer Application (BCA)</h4>
                <p className="text-gray-400">Veer Bahadur Singh Purvanchal University, Jaunpur • 2021-2024</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">Intermediate</h4>
                <p className="text-gray-400">R.S.K.D Inter College • 2021</p>
              </div>
            </div>

            <div className="bg-[#0300145e] border border-[#7042f861] p-6 rounded-xl">
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-3 flex items-center">
                <FaBriefcase className="mr-2" />Training Certificate
              </h3>
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-white">Java Language</h4>
                <p className="text-gray-400">St. Andrews Institute Of Technology And Management • 2025</p>
                <p className="text-gray-300 mt-1">Completed 50-Hours Of Vocational Training In CORE JAVA, OOPS and DSA </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">MERN Stack</h4>
                <p className="text-gray-400">St. Andrews Institute Of Technology And Management • 2025</p>
                <p className="text-gray-300 mt-1">completed Training In MONGODB, REACT, Express, NODE.JS.</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          variants={slideInFromBottom(0.7)}
          className="mt-12 flex justify-center"
        >
          <a 
            href="https://drive.google.com/file/d/1d_apQ9E70CnuGR4WvwCU5OMC45DVjREj/view?usp=drive_link" 
            target="_blank"
            className="py-3 px-8 button-primary text-center text-white rounded-full text-lg font-semibold transition-all hover:scale-105"
          >
            Download Resume
          </a>
        </motion.div>
      </motion.div>

      {/* Background effect */}
      <div className="w-full h-full absolute top-0 z-[10]">
        <div className="w-full h-full opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
