"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center md:items-start justify-center px-6 md:px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop()}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] animate-pulse"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-4xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Creating
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 animate-gradient">
              {" "}
              innovative{" "}
            </span>
            web experiences
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Full Stack Software Engineer with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
        </motion.p>
        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-row gap-4"
        >
          <a
            href="#projects"
            className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg transition-all hover:scale-105"
          >
            My Projects
          </a>
          <a
            href="https://instagram.com/your_username"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-4 border border-purple-500 text-center text-white cursor-pointer rounded-lg transition-all hover:bg-purple-500/20"
          >
            Follow me
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroContent;
