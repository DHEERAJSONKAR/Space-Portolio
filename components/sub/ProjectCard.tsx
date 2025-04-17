import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="relative h-full group">
      <div className="h-[200px] relative overflow-hidden">
        {/* Animated gradient overlay on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 bg-gradient-to-b from-purple-500/20 via-transparent to-blue-500/20"></div>
        
        {/* Pulsing effect for the card */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 animate-pulse-slow z-5"></div>
        
        {/* Project image */}
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
        
        {/* "View Details" badge */}
        <div className="absolute top-2 right-2 bg-purple-600/80 text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg shadow-purple-600/20">
          View Details
        </div>
      </div>

      <div className="relative p-4 bg-[#0a0a1a] border-t border-purple-500/20">
        {/* Title with hover effect */}
        <h1 className="text-xl font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
          {title}
        </h1>
        
        {/* Description */}
        <p className="mt-1 text-gray-300 text-sm line-clamp-2 group-hover:text-gray-200 transition-colors duration-300">
          {description}
        </p>
        
        {/* Animated "Click to explore" text */}
        <div className="mt-3 text-purple-400 text-sm flex items-center">
          <span className="bg-purple-500 w-2 h-2 rounded-full mr-2 animate-pulse"></span>
          <span className="relative overflow-hidden">
            <span className="inline-block transform group-hover:translate-x-0 translate-x-0 transition-transform duration-300">
              Click to explore
            </span>
            <span className="absolute top-0 left-0 w-full h-full flex items-center transform translate-x-full group-hover:translate-x-0 transition-transform duration-300">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                View project →
              </span>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
