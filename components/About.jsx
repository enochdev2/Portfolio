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
            I am a seasoned Full-Stack Developer with a passion for crafting
            innovative web solutions that not only meet but exceed expectations.
            With a solid foundation in both front-end and back-end technologies,
            I bring a wealth of experience and expertise to every project I
            undertake.
            <br />
            My proficiency spans a wide spectrum of front-end and back-end
            technologies, including HTML, CSS, JavaScript, React.js, Next.js, Node.js,
            Express.js, MongoDB, and more. I possess a keen eye for design
            coupled with a passion for writing clean, maintainable code. Whether
            it&#39;s architecting scalable server-side solutions, optimizing
            performance, or creating intuitive user interfaces, I excel at
            turning technical requirements into seamless user experiences.
          </p>
          <p className="py-2 text-gray-100 text-justify">
            I maintain an unwavering commitment to excellence, backed by a track
            record of delivering projects on time and within budget, often
            exceeding set objectives. My dedication to clear communication,
            transparency, and building strong relationships ensures that client
            needs are not only met but exceeded.
            <br />
            Driven by a passion for innovation and a relentless pursuit of
            excellence, I am eager to explore how my skills and expertise can
            contribute to your project&#39;s success. Please don&#39;t hesitate to reach
            out to me to discuss your requirements further. I am excited about
            the prospect of collaborating with you and am confident in my
            ability to deliver exceptional results.
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
