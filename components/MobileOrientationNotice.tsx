"use client";

import React, { useState, useEffect } from 'react';
import { FaMobileAlt } from "react-icons/fa";

const MobileOrientationNotice = () => {
  const [isPortrait, setIsPortrait] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
    };

    // Check orientation
    const checkOrientation = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    setIsMobile(checkMobile());
    checkOrientation();

    // Listen for orientation changes
    window.addEventListener('resize', checkOrientation);
    
    return () => {
      window.removeEventListener('resize', checkOrientation);
    };
  }, []);

  // Only show notice on mobile devices in portrait mode
  if (!isMobile || !isPortrait) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#0a0a1a]/90 backdrop-blur-md text-white py-3 px-4 text-center text-sm z-50 border-t border-purple-500/20 transform transition-all duration-500 animate-slideUp">
      <div className="flex items-center justify-center">
        <FaMobileAlt className="mr-2 text-purple-400 animate-pulse" size={18} />
        <span>Rotate your device for a better experience</span>
      </div>
    </div>
  );
};

export default MobileOrientationNotice;
