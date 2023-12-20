import Image from "next/image";
import React from "react";
import Html from "../public/assets/skills/html.png";
import Css from "../public/assets/skills/css.png";
import Javascript from "../public/assets/skills/javascript.png";
import ReactImg from "../public/assets/skills/react.png";
import MuiImg from "../public/assets/skills/mui.png";
import TypescriptImg from "../public/assets/skills/typescript.png";
import MongoImg from "../public/assets/skills/mongo.png";
import expressImg from "../public/assets/skills/express.png";
import ReduxImg from "../public/assets/skills/redux.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import Github from "../public/assets/skills/github1.png";
import Firebase from "../public/assets/skills/firebase.png";
import NextJS from "../public/assets/skills/nextjs.png";
import AWS from "../public/assets/skills/aws.png";
import SkillText from "./SkillText";
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { slideInFromLeft, slideInFromRight } from "../utils/motion";


const Skills = () => {

  const {ref, inView} = useInView({
    triggerOnce: false
})

const imageVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.5,
    },
  },
}

  const animationDelay = 0.6
  return (
    <motion.div
    ref={ref}
    initial="hidden"
    variants={imageVariants}
    animate={inView ? "visible" : "hidden"}
    custom={2}
    transition={{delay: 2 * animationDelay}}
    >
       <motion.div
        variants={slideInFromLeft(0.5)}
        className=' text-white  mt-[10px] text-center mb-[15px]'
        >
    <div id="skills" className="w-full lg:h-screen p-2 text-white">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <SkillText />
        <p className="text-xl tracking-widest mb-4 font-bold uppercase text-[#5651e5]">
          Skills
        </p>
       
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="py-4 px-3 shadow-xl border border-white rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-3 justify-center items-center">
              <div className="m-auto">
                <Image src={Html} width="36px" height="36px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="py-4 px-3 shadow-xl border border-white rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Css} width="36px" height="36px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="py-4 px-3 shadow-xl border border-white rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Javascript} width="36px" height="36px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className="py-4 px-3 shadow-xl border border-white rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={TypescriptImg} width="36px" height="36px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>TypeScript</h3>
              </div>
            </div>
          </div>
          <div className="py-4 px-3 shadow-xl border border-white rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={ReactImg} width="36px" height="36px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>



          <div className="py-4 px-3 shadow-xl border border-white rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={expressImg} width="36px" height="36px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Express</h3>
              </div>
            </div>
          </div>
          <div className="py-4 px-3 shadow-xl border border-white rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={MuiImg} width="36px" height="36px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>MUI</h3>
              </div>
            </div>
          </div>
          <div className="py-4 px-3 shadow-xl border border-white rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={MongoImg} width="36px" height="36px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Nongo db</h3>
              </div>
            </div>
          </div>
          <div className="py-4 px-3 shadow-xl border border-white rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={ReduxImg} width="36px" height="36px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Redux</h3>
              </div>
            </div>
          </div>
          <div className="py-4 px-3 shadow-xl border border-white rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Tailwind} width="36px" height="36px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className="py-4 px-3 shadow-xl border border-white rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Firebase} width="36px" height="36px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
          <div className="py-4 px-3 shadow-xl border border-white rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto  bg-slate-400 rounded-full">
                <Image src={Github} width="36px" height="36px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl border border-white rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto bg-slate-400 rounded-full">
                <Image src={NextJS} width="36px" height="36px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Next</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-full absolute">
          <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
            <video
              className="w-full h-auto"
              preload="false"
              playsInline
              loop
              muted
              autoPlay
              src="/cardsvideo.webm"
            />
          </div>
        </div>
        
      </div>
    </div>
    </motion.div>
    </motion.div>
  );
};

export default Skills;
