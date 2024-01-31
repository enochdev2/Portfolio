import Link from "next/link";
import React from "react";
import MainContent from "./MainContent";
import { motion } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
// import cardsvideo from "../public/assets/cardsvideo.webm";

const Main = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 hidden md:block sm:absolute top-[-340px]  h-full w-full left-0 z-[1] object-cover "
      >
        <source src="/cardsvideo.webm" type="video/webm" />
      </video>
      <MainContent />
    </div>

    // <div id="home" className="w-full h-screen text-center">
    //   <div className="max-w-[1240px] w-full h-full mx-auto pt-4 p-2 flex justify-center items-center">
    //     <div>
    //       <p className="uppercase text-sm mb-6 tracking-widest text-gray-600">
    //         LET&#39;S BUILD SOMETHING TOGETHER
    //       </p>
    //       <h1 className="py-4 text-gray-700">
    //         Hi, I&#39;m <span className="text-[#5651e5]"> Enoch Promise</span>
    //       </h1>
    //       <h1 className="py-2 text-gray-700">A Full-Stack Web Developer</h1>
    //       <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
    //         Highly motivated and a goal-oriented web developer with significant
    //         knowledge and skills in building and maintaining web application.
    //         I focus on building ful-stack web applications. I&#39;m proficient  TAiLWIND-CSS
    //         JAVASCRIPT, TYPESCRIPT, REACT, NEXTJS, EXPRESS, and MONGO_DB .
    //         Seeking to join a dynamic team where I can utilize my skills to help
    //         drive the success of the organization.
    //       </p>
    //       <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
    //         <a
    //           href="https://www.linkedin.com/in/enoch-akhabue-01b991269/"
    //           target="_blank"
    //           rel="noreferrer"
    //         >
    //           <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
    //             <FaLinkedinIn />
    //           </div>
    //         </a>
    //         <a
    //           href="https://github.com/enochdev2"
    //           target="_blank"
    //           rel="noreferrer"
    //         >
    //           <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
    //             <FaGithub />
    //           </div>
    //         </a>

    //         <Link href="/#contact">
    //           <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
    //             <AiOutlineMail />
    //           </div>
    //         </Link>
    //         <Link href="/resume">
    //           <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
    //             <BsFillPersonLinesFill />
    //           </div>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Main;
