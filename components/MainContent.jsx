"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const MainContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center sm:px-8 md:px-20   px-8 mt-36 w-full z-[20]"
    >
      <div className="h-full md:w-full  flex flex-col  md:gap-5 justify-center m-auto text-start">
        <div>
          <h2 className="py-4 text-gray-200 sm:text-gray-400">
            Hi, I&#39;m{" "}
            <span className="sm:text-transparent sm:bg-clip-text sm:bg-gradient-to-r sm:from-purple-500 sm:to-cyan-500 text-white">
              {" "}
              Enoch Promise
            </span>
          </h2>{" "}
        </div>
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">A Fullstack Developer</h1>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-8 text-5xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              you with the best{" "}
            </span>
            digital experiences
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="md:text-lg sm:text-base text-gray-300 text-justify mt-14 my-5 md:max-w-[800px] sm:w-full"
        >
          {/* I&apos; */}
          As a seasoned Full-Stack Web and Blockchain Developer, I specialize in crafting cutting-edge applications that address critical business needs. My track record includes boosting revenue, driving traffic, and generating leads for clients through scalable, secure, and visually captivating software solutions. Explore my portfolio and discover how I can elevate your digital presence! 
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          href="#about"
        >
          Learn More!
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default MainContent;
