"use client";

import React, { useState, useEffect, useMemo } from "react";
import ProjectCard from "../sub/ProjectCard";
import { motion, AnimatePresence } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { FaGithub, FaExternalLinkAlt, FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

// Updated ProjectCard interface to include live links and technologies
interface Project {
  id: number;
  src: string;
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  images?: string[]; // Array of additional images for the project
}

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // New project data with the provided links
  const projects = useMemo(() => [
    {
      id: 1,
      src: "/kodebase.png",
      title: "KodeBase",
      description: "A comprehensive coding platform with user authentication and collaborative features for developers.",
      technologies: ["Next.js", "React", "TailwindCSS", "Authentication"],
      demo: "https://kodebase.vercel.app/",
      images: ["/kodebase1.jpg", "/kodebase2.jpg", "/kodebase3.jpg"]
    },
    {
      id: 2,
      src: "/gym.png",
      title: "Fitness Website",
      description: "A modern gym and fitness website with membership plans, workout schedules and trainer profiles.",
      technologies: ["React", "CSS", "JavaScript", "Responsive Design"],
      demo: "https://dheeraj-gym.vercel.app/",
      images: ["/gym1.jpg", "/gym2.jpg", "/gym3.jpg"]
    },
    {
      id: 3,
      src: "/ai.png",
      title: "Shipra AI",
      description: "An AI-powered platform offering intelligent solutions for various tasks and queries.",
      technologies: ["AI", "React", "API Integration", "UI/UX"],
      demo: "https://shipra-ai.vercel.app/",
      images: ["/ai1.jpg", "/ai2.jpg", "/ai3.jpg"]
    },
    {
      id: 4,
      src: "/tictac.png",
      title: "Tic-Tac-Toe Game",
      description: "A classic Tic-Tac-Toe game built with modern web technologies for an engaging user experience.",
      technologies: ["JavaScript", "HTML", "CSS", "Game Logic"],
      demo: "https://tic-tac-sooty.vercel.app/",
      images: ["/tictac1.jpg", "/tictac2.jpg", "/tictac3.jpg"]
    },
    {
      id: 5,
      src: "/sales.png",
      title: "SalesForce Clone",
      description: "A comprehensive CRM platform with sales tracking, customer management, and reporting features.",
      technologies: ["React", "CRM", "Dashboard", "Data Visualization"],
      demo: "https://salesfource.vercel.app/",
      images: ["/sales1.jpg", "/sales2.jpg", "/sales3.jpg"]
    },
    {
      id: 6,
      src: "/card.png",
      title: "Card Hover Effects",
      description: "A collection of interactive card components with innovative hover effects and animations.",
      technologies: ["CSS3", "HTML5", "JavaScript", "Animation"],
      demo: "https://cardhover-flax.vercel.app/",
      images: ["/card1.jpg", "/card2.jpg", "/card3.jpg"]
    }
  ], []);

  // Auto rotate images when project modal is open
  useEffect(() => {
    if (activeProject !== null) {
      const project = projects.find(p => p.id === activeProject);
      if (project?.images && project.images.length > 1) {
        const interval = setInterval(() => {
          setCurrentImageIndex(prev => (prev + 1) % project.images!.length);
        }, 3000);
        
        return () => clearInterval(interval);
      }
    }
  }, [activeProject, projects]);

  // Handle keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
      if (isModalOpen && activeProject !== null) {
        const project = projects.find(p => p.id === activeProject);
        if (project?.images && project.images.length > 1) {
          if (e.key === 'ArrowRight') {
            nextImage(project.images.length);
          } else if (e.key === 'ArrowLeft') {
            prevImage(project.images.length);
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, activeProject, projects]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  const handleProjectClick = (id: number) => {
    setActiveProject(id);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setActiveProject(null), 300);
  };

  const nextImage = (totalImages: number) => {
    setCurrentImageIndex(prev => (prev + 1) % totalImages);
  };

  const prevImage = (totalImages: number) => {
    setCurrentImageIndex(prev => (prev - 1 + totalImages) % totalImages);
  };

  // Handle touch events for swiping through images
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (totalImages: number) => {
    if (touchStart - touchEnd > 75) {
      // Swipe left
      nextImage(totalImages);
    } else if (touchEnd - touchStart > 75) {
      // Swipe right
      prevImage(totalImages);
    }
  };

  // Get the active project data
  const activeProjectData = activeProject ? projects.find(p => p.id === activeProject) : null;

  return (
    <div
      className="flex flex-col items-center justify-center py-12 sm:py-20"
      id="projects"
    >
      {/* Decorative elements */}
      <div className="absolute left-5 top-1/4 w-24 h-24 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute right-10 bottom-1/3 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <motion.h1 
        variants={slideInFromTop()}
        initial="hidden"
        animate="visible"
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-6 sm:py-10 px-4 text-center"
      >
        My Projects
      </motion.h1>
      
      <motion.p
        variants={slideInFromLeft(0.5)}
        initial="hidden"
        animate="visible"
        className="text-gray-300 text-center max-w-[900px] mb-8 sm:mb-10 px-4 sm:px-6 text-sm sm:text-base"
      >
        Here are some of my recent projects showcasing my skills in web development. 
        Click on any project to see more details including technologies used.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-10 max-w-[1400px]">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={index % 2 === 0 ? slideInFromLeft(0.3 * (index + 1)) : slideInFromRight(0.3 * (index + 1))}
            initial="hidden"
            animate="visible"
            className="relative group"
            whileHover={{ 
              y: -10, 
              transition: { duration: 0.3 } 
            }}
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-70 transition duration-300"></div>
            <div 
              onClick={() => handleProjectClick(project.id)}
              className="relative cursor-pointer transition-all duration-300 bg-[#0a0a1a] rounded-lg overflow-hidden shadow-lg shadow-purple-500/10 group-hover:shadow-purple-500/40 transform-gpu group-hover:scale-[1.02]"
            >
              <ProjectCard
                src={project.src}
                title={project.title}
                description={project.description}
                link={project.demo} // Pass the project's demo URL as the link prop
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Full screen modal for project details */}
      <AnimatePresence>
        {isModalOpen && activeProjectData && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-[#0a0a1a] border border-purple-500/50 rounded-xl shadow-2xl shadow-purple-500/30 max-w-4xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-transparent to-blue-600/10 rounded-xl"></div>
              
              <div className="relative p-4 sm:p-6 z-10">
                <button 
                  className="absolute top-4 right-4 text-gray-400 hover:text-white z-10 bg-[#1a1a2e] rounded-full p-2.5 shadow-md hover:shadow-purple-500/50 transition-all duration-300 hover:rotate-90"
                  onClick={closeModal}
                  aria-label="Close modal"
                >
                  <FaTimes />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    {/* Image gallery */}
                    <div className="rounded-lg overflow-hidden border border-purple-500/30 shadow-lg shadow-purple-500/20 aspect-video relative"
                      onTouchStart={handleTouchStart}
                      onTouchMove={handleTouchMove}
                      onTouchEnd={() => activeProjectData.images && handleTouchEnd(activeProjectData.images.length)}
                    >
                      {activeProjectData.images && activeProjectData.images.length > 0 ? (
                        <div className="relative h-full">
                          <div className="flex transition-transform duration-700 h-full" 
                            style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
                            {activeProjectData.images.map((img, idx) => (
                              <div key={idx} className="min-w-full h-full relative flex-shrink-0">
                                <Image 
                                  src={img || activeProjectData.src} 
                                  alt={`${activeProjectData.title} screenshot ${idx+1}`}
                                  fill
                                  className="object-cover object-top"
                                />
                              </div>
                            ))}
                          </div>
                          
                          {/* Image navigation arrows */}
                          {activeProjectData.images.length > 1 && (
                            <>
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  prevImage(activeProjectData.images!.length);
                                }}
                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white/80 hover:text-white transition-all duration-300 focus:outline-none"
                                aria-label="Previous image"
                              >
                                <FaArrowLeft />
                              </button>
                              
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  nextImage(activeProjectData.images!.length);
                                }}
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white/80 hover:text-white transition-all duration-300 focus:outline-none"
                                aria-label="Next image"
                              >
                                <FaArrowRight />
                              </button>
                            </>
                          )}
                          
                          {/* Image navigation dots */}
                          {activeProjectData.images.length > 1 && (
                            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                              {activeProjectData.images.map((_, idx) => (
                                <button
                                  key={idx}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentImageIndex(idx);
                                  }}
                                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                                    currentImageIndex === idx 
                                      ? 'bg-purple-500 scale-125 shadow-md shadow-purple-500/50' 
                                      : 'bg-gray-500/50 hover:bg-gray-400'
                                  }`}
                                  aria-label={`View image ${idx + 1}`}
                                />
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Image 
                          src={activeProjectData.src} 
                          alt={activeProjectData.title}
                          width={600}
                          height={340}
                          className="object-cover w-full h-full"
                        />
                      )}
                    </div>
                    
                    {/* Technology tags */}
                    <div className="bg-[#0f0f23]/50 p-4 rounded-lg border border-purple-500/20">
                      <h4 className="text-sm font-semibold text-purple-400 mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {activeProjectData.technologies.map((tech, i) => (
                          <span 
                            key={i} 
                            className="text-xs bg-purple-900/50 text-purple-200 px-3 py-1.5 rounded-full border border-purple-500/20 hover:bg-purple-800/50 transition-colors shadow-sm shadow-purple-500/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-[#0f0f23]/50 p-4 rounded-lg border border-purple-500/20">
                      <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{activeProjectData.title}</h3>
                      <p className="text-gray-300 mt-2">{activeProjectData.description}</p>
                    </div>
                    
                    <div className="bg-[#0f0f23]/50 p-4 rounded-lg border border-purple-500/20">
                      <h4 className="text-sm font-semibold text-purple-400 mb-3">Key Features:</h4>
                      <ul className="space-y-2 text-gray-300 list-disc pl-5 text-sm">
                        <li className="animate-fade-in" style={{animationDelay: '100ms'}}>
                          Responsive design for all devices
                        </li>
                        <li className="animate-fade-in" style={{animationDelay: '200ms'}}>
                          Modern UI/UX with smooth animations
                        </li>
                        <li className="animate-fade-in" style={{animationDelay: '300ms'}}>
                          High performance and optimization
                        </li>
                        <li className="animate-fade-in" style={{animationDelay: '400ms'}}>
                          User-friendly interface and navigation
                        </li>
                      </ul>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                      {activeProjectData.github && (
                        <a 
                          href={activeProjectData.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 text-white bg-[#24292e] px-5 py-2.5 rounded-lg text-sm hover:bg-[#333] transition-all shadow-md hover:shadow-gray-700/50 transform hover:-translate-y-1 duration-300"
                        >
                          <FaGithub className="text-xl" /> View Code
                        </a>
                      )}
                      {activeProjectData.demo && (
                        <a 
                          href={activeProjectData.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 text-white bg-gradient-to-r from-purple-600 to-purple-800 px-5 py-2.5 rounded-lg text-sm hover:from-purple-700 hover:to-purple-900 transition-all shadow-md hover:shadow-purple-600/50 transform hover:-translate-y-1 duration-300"
                        >
                          <FaExternalLinkAlt /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
