import Image from "next/image";
import Link from "next/link";
import SideBar from "./SideBar";
import React, { useState } from "react";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");

  const handleMenu = () => {
    setNav(!nav);
  };

  return (
    <div className=" w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-3">
      <div className="relative w-full h-full flex flex-row items-center justify-between m-auto px-[5px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <span className="font-bold ml-[5px]  sm:block text-lg md:text-xl text-gray-300">
            Dev-Noch
          </span>
        </a>

        <div className="w-[600px] md:w-[500px] hidden h-full sm:flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <ul className=" flex justify-between text-[0.8rem] w-full h-auto">
              <Link href="/">
                <li onClick={() => setNav(false)} className="cursor-pointer">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="cursor-pointer">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="cursor-pointer">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="cursor-pointer">
                  Projects
                </li>
              </Link>
              {/* <Link href="/resume">
                <li onClick={() => setNav(false)} className="cursor-pointer">
                  Resume
                </li>
              </Link> */}
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="cursor-pointer">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          <div className="flex items-center justify-between max-w-[330px] m-auto py-3">
            <a
              href="https://www.facebook.com/prince.ikponmwosa.7?mibextid=ZbWKwL"
              target="_blank"
              rel="noreferrer"
            >
              <div className="mx-2 text-sky-600">
                <FaFacebook size={26} />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/enoch-akhabue-01b991269/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="mx-3 text-sky-600">
                <FaLinkedinIn size={26} />
              </div>
            </a>
            <a
              href="https://github.com/enochdev2"
              target="_blank"
              rel="noreferrer"
            >
              <div className="text-slate-300">
                <FaGithub size={26} />
              </div>
            </a>
          </div>
        </div>
        <div className="ml-4 cursor-pointer sm:hidden text-slate-300">
          <BiMenu size={30} onClick={handleMenu} />
        </div>
        {nav && (
          <div className="sm:hidden absolute top-0  left-0">
            <SideBar handleMenu={handleMenu} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
