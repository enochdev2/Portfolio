import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:min-h-screen px-6 sm:px-8 flex items-center py-16 text-slate-200"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 space-y-2">
          <p className="uppercase text-xl tracking-widest font-bold text-[#433dac]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 md:text-lg text-gray-100  w-full text-justify font-serif">
          I am a seasoned Full-Stack Web and Blockchain Developer passionate about crafting innovative solutions that drive business success. With expertise in both web and blockchain technologies, I deliver robust, scalable solutions tailored to meet your unique business needs.
            <br />
            My proficiency spans a wide spectrum of front-end and back-end
            technologies, including HTML, CSS, JavaScript, Typescript, React.js, Next.js, Node.js,
            Express.js, MongoDB, Solidity, Web3, Rust, Anchor and more. I possess a keen eye for design
            coupled with a passion for writing clean, maintainable code. Whether
            it&#39;s architecting scalable server-side solutions, optimizing
            performance, or creating intuitive user interfaces, I excel at
            turning technical requirements into seamless user experiences.
          </p>
          <p className="py-2 font-serif text-gray-100 md:text-lg text-justify">
          My commitment to excellence is backed by a proven track record of delivering projects on time and within budget, often exceeding client expectations. Clear communication, transparency, and strong client relationships are at the heart of my approach, ensuring that your business objectives are not just met but surpassed.
            <br />

            Driven by a passion for innovation and a relentless pursuit of excellence, I am ready to leverage my skills to provide you with cutting-edge solutions. Let&#39;s discuss how I can help your business thrive. I am excited about the opportunity to collaborate and confident in my ability to deliver exceptional results.
      {/* &#39; */}
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
