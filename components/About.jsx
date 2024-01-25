import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:min-h-screen px-10 sm:px-8 flex items-center py-16 text-slate-200"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 space-y-2">
          <p className="uppercase text-xl tracking-widest font-bold text-[#433dac]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-100 text-justify">
            I&#39;m Highly motivated and a goal-oriented web developer with the
            wealth of expertise in designing and implementing scalable,
            resilient and secure web applications. I&#39;m proficient in crafting
            seamless and intuitive user interface that drive exceptional user
            experiences. Seeking to join a dynamic team where I can utilize my
            skills to help drive for the success of the organization. {" "}
          </p>
          <p className="py-2 text-gray-100 text-justify">
            I&#39;m Experienced in full-stack development and having a
            sufficient knowledge of front-end and back-end framework; proficient
            with TAiLWIND, CSS, JAVASCRIPT, TYPESCRIPT, REACT, NEXTJS, NODE Js,
            EXPRESS, SOLIDITY and MONGO_DB. I specializes in crafting stunning,
            intuitive and mobile responsive user interface applications that
            seamlessly integrate with back-end APIs and other backend
            technologies.  I am a quick
            learner and can pick up new tech stacks as needed. Skilled in
            problem-solving, team collaboration, and staying current with
            industrial trends. Committed to achieving Client satisfaction through
            technology driven solutions.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-100 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
