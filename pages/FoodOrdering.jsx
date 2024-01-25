import Image from "next/image";
import React from "react";
import foodOderdering from "../public/assets/projects/foodOrdering.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const FoodOrdering = () => {
  return (
    <div className="w-full bg-slate-200">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={foodOderdering}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 px-4">
          <h2 className="py-2">Food-Ordering App</h2>
          <h3>Next JS / Tailwind / Next-auth/ Firebase / Mongo DB</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Developed a scalable web application with intuitive User interface,
            high performance and reusable code structure. Designed and
            implemented database schemas for data integrity and optimal
            performance. Ensured a smooth integration of a payment system using
            Stripe. Delivered high-quality web application on time and on
            budget.
          </p>
          <a
            href="https://github.com/enochdev2/food-Ordering-App"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://food-ordering-app-seven-mu.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="px-2 py-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-black py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next js
              </p>
              <p className="text-black py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind
              </p>
              <p className="text-black py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-black py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Firebase
              </p>
              <p className="text-black py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Mongo DB
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

export default FoodOrdering;
