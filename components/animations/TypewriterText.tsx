"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterTextProps {
  text: string;
  className?: string;
  speed?: number;
  delayBeforeDelete?: number;
  delayBeforeType?: number;
  gradientColors?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  className = "",
  speed = 150,
  delayBeforeDelete = 2000,
  delayBeforeType = 500,
  gradientColors = "from-purple-400 via-pink-500 to-cyan-400"
}) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isWaiting) {
      timeout = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(!isDeleting);
      }, isDeleting ? delayBeforeType : delayBeforeDelete);
      return () => clearTimeout(timeout);
    }

    if (isDeleting) {
      if (displayText === "") {
        setIsDeleting(false);
        setIsWaiting(true);
      } else {
        timeout = setTimeout(() => {
          setDisplayText(text.substring(0, displayText.length - 1));
        }, speed / 2);
      }
    } else {
      if (displayText === text) {
        setIsWaiting(true);
      } else {
        timeout = setTimeout(() => {
          setDisplayText(text.substring(0, displayText.length + 1));
        }, speed);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, isWaiting, text, speed, delayBeforeDelete, delayBeforeType]);

  return (
    <div className={`relative ${className}`}>
      <motion.div 
        className="inline-flex items-center"
        animate={{ y: [0, -2, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut"
        }}
      >
        <motion.span 
          className={`text-transparent bg-clip-text bg-gradient-to-r ${gradientColors} animate-gradient`}
          animate={{ 
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity,
            repeatType: "loop" 
          }}
        >
          {displayText}
        </motion.span>
        <motion.span
          animate={{
            opacity: [1, 0, 1],
            height: ["100%", "80%", "100%"]
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="inline-block w-1 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-cyan-500 ml-1 rounded-full"
        />
      </motion.div>
    </div>
  );
};

export default TypewriterText;
