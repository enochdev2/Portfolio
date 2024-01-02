"use client";

import React, { useState } from "react";
import Link from "next/link";
// import { NavBarItem } from "@/utils/types";

const SideBar = ({ handleMenu }) => {
  const [openSideBar, setOpenSideBar] = useState(true);

  const item = [
    {
      id: 1,
      name: "HOME",
      link: "/",
    },
    {
      id: 2,
      name: "BLOG",
      link: "/blog",
    },
    {
      id: 3,
      name: " SERVICE",
      link: "/service",
    },
    {
      id: 4,
      name: " PROFILE",
      link: "/profile",
    },
  ];

  return (
    <>
      <div
        className="sm:hidden flex flex-col  absolute  top-[70px] bg-slate-900/80 text-white left-0 w-screen h-screen justify-between items-center py-12  z-[30] gap-5"
        onClick={() => handleMenu()}
      >
        <div className="flex  h-full flex-col w-full gap-3">
          <ul className=" gap-5  flex flex-col items-center justify-between sm:text-[1rem] text-xl w-full h-auto">
            <Link href="/">
              <li
                onClick={() => handleMenu()}
                className="cursor-pointer bg-gray-500 w-[70%] px-3 py-3 text-center rounded-lg"
              >
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li onClick={() => handleMenu()}  className="cursor-pointer bg-gray-500 w-[70%] px-3 py-3 text-center rounded-lg">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li onClick={() => handleMenu()}  className="cursor-pointer bg-gray-500 w-[70%] px-3 py-3 text-center rounded-lg">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li onClick={() => handleMenu()}  className="cursor-pointer bg-gray-500 w-[70%] px-3 py-3 text-center rounded-lg">
                Projects
              </li>
            </Link>
            {/* <Link href="/resume">
                <li onClick={() => setNav(false)} className="cursor-pointer">
                  Resume
                </li>
              </Link> */}
            <Link href="/#contact">
              <li onClick={() => handleMenu()}  className="cursor-pointer bg-gray-500 w-[70%] px-3 py-3 text-center rounded-lg">
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
