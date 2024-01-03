import Image from "next/image";
import React from "react";
import blogImg from "../public/assets/projects/blog1.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const Blog = () => {
  return (
    <div className="w-full bg-slate-200">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={blogImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Dev-Noch Blog</h2>
          <h3>Next JS / Tailwind/ Mongo_db / Next Auth</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This appplication was built using NEXT.JS and is styled with
            Tailwind CSS. The application is hosted using Vercel. This is a
            mobile responsive Blog web application and features Next/Auth.js for
            authentication. Users may choose like and share blog post, comment
            on blog post and be authenticated with either an Email account or a
            Google account. A few features to note with this project are lazy
            loading images using the Image component, built in routing, and
            Next/Auth Context.
          </p>
          <a
            href="https://get-insight.vercel.app/blog"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </a>
          <a
            href="https://github.com/enochdev2/get-insight"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Code</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-900 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next.JS
              </p>
              <p className="text-gray-900 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-gray-900 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-900 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Typescript
              </p>
              <p className="text-gray-900 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next Auth
              </p>
              <p className="text-gray-900 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next-Theme
              </p>
              <p className="text-gray-900 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Google Auth
              </p>
              <p className="text-gray-900 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Mongo_db
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
