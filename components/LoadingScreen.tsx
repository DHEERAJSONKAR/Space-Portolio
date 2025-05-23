"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 100);

    // Set a timeout to hide the loading screen after 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  if (!loading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: loading ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030014] text-white"
    >
      <div className="relative flex flex-col items-center px-4">
        {/* Animated background elements */}
        <div className="absolute w-full h-full">
          <motion.div
            className="absolute top-[-100px] left-[10%] w-[100px] h-[100px] md:w-[150px] md:h-[150px] bg-purple-600/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-[-150px] right-[20%] w-[120px] h-[120px] md:w-[180px] md:h-[180px] bg-blue-600/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </div>

        {/* Logo Animation */}
        <motion.div
          className="relative mb-6 border-2 border-purple-500/30 rounded-full p-1 overflow-hidden"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-24 h-24 md:w-32 md:h-32 relative rounded-full overflow-hidden">
            <Image
              src="/dkphoto.jpg"
              alt="Dheeraj Sonkar"
              fill
              className="object-cover"
            />
            {/* Animated border */}
            <motion.div
              className="absolute inset-0 border-2 border-purple-500/50 rounded-full"
              animate={{
                boxShadow: [
                  "0 0 10px 0px rgba(139, 92, 246, 0.3)",
                  "0 0 20px 5px rgba(139, 92, 246, 0.5)",
                  "0 0 10px 0px rgba(139, 92, 246, 0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>

        {/* Main name animation */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-center mb-4 relative z-10"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
            DHEERAJ SONKAR
          </span>
        </motion.h1>

        {/* Loading bar with percentage */}
        <div className="w-[280px] md:w-[350px] relative mt-4 mb-2">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1, ease: "linear" }}
            className="h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full"
          />
          <div className="absolute -right-8 -top-0.5 text-sm text-gray-400">
            {progress}%
          </div>
        </div>

        {/* Loading text with typing effect */}
        <div className="h-6 mt-2">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-gray-400 text-sm md:text-base font-mono"
          >
            {progress < 25 ? (
              "Loading assets..."
            ) : progress < 50 ? (
              "Initializing portfolio..."
            ) : progress < 75 ? (
              "Preparing projects..."
            ) : (
              "Almost ready..."
            )}
          </motion.p>
        </div>

        {/* Mobile-specific message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-8 text-gray-500 text-xs md:text-sm text-center max-w-[280px] md:max-w-[350px]"
        >
          Welcome to my portfolio. For the best experience, please rotate your
          device to landscape mode if you&apos;re on mobile.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
