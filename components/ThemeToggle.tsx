"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '@/context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === 'light';

  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative flex items-center justify-center w-12 h-12 rounded-full border-2 overflow-hidden focus:outline-none shadow-md ${
        isLight 
          ? 'border-purple-300 shadow-purple-200/50' 
          : 'border-[#7042f861] shadow-purple-900/30'
      }`}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      aria-label={`Switch to ${isLight ? 'dark' : 'light'} mode`}
    >
      <div 
        className={`absolute inset-0 rounded-full transition-colors duration-500 ease-in-out ${
          isLight
            ? 'bg-gradient-to-br from-blue-50 to-purple-50' 
            : 'bg-[#0300145e]'
        }`}
      />
      
      <motion.div
        animate={{ rotate: isLight ? 180 : 0, scale: [1, 1.2, 1] }}
        transition={{ duration: 0.7, type: 'spring', bounce: 0.5 }}
        className="relative z-10"
      >
        {isLight ? (
          <FaMoon className="w-5 h-5 text-purple-700" />
        ) : (
          <FaSun className="w-5 h-5 text-yellow-300" />
        )}
      </motion.div>
      
      {/* Enhanced effects for light/dark modes */}
      {isLight ? (
        // Stars animation for moon icon in light mode
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0"
        >
          <div className="absolute top-1 right-2 w-1 h-1 bg-purple-500 rounded-full animate-pulse" />
          <div className="absolute bottom-2 left-2 w-1 h-1 bg-purple-500 rounded-full animate-pulse-slow" />
          <div className="absolute top-3 left-3 w-0.5 h-0.5 bg-purple-400 rounded-full animate-pulse" />
        </motion.div>
      ) : (
        // Sun rays animation for light mode
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-full h-full bg-yellow-400/10 rounded-full animate-pulse" />
          <div className="absolute w-10 h-10 border border-yellow-300/30 rounded-full animate-ping opacity-70" />
        </motion.div>
      )}
    </motion.button>
  );
};

export default ThemeToggle;
