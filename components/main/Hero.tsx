import React from "react";
import HeroContent from "../sub/HeroContent";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative flex flex-col h-screen w-full" id="hero-section">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] h-full w-full left-0 z-[1] object-cover"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <div className="absolute top-0 z-[5] w-full h-full flex items-center justify-center">
        <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between">
          <HeroContent />
          <div className="md:w-1/3 flex items-center justify-center mt-8 md:mt-0 z-[10]">
            <Image 
              src="/profile-photo.png" 
              alt="Your Profile" 
              width={300} 
              height={300} 
              className="rounded-full border-4 border-purple-500 animate-pulse-slow shadow-xl shadow-purple-500/50"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
