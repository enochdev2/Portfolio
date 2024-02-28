import Image from "next/image";
import React from "react";
import communityhub from "../public/assets/projects/communityhub.png";

import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const Communityhub = () => {
  return (
    <div className="w-full bg-slate-200">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={communityhub}
          alt="communityhub"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 px-4">
          <h2 className="py-2">CommunityHub Application</h2>
          <h3>
            Next JS / TypeScript / Tailwind / Shadcn Ui / Clerk / Mongo DB
          </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto pl-8 px-4 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <div className="text-black text-justify text-lg space-y-4">
            <h3>
              Project description Project - <br /> Community Engagement Platform
              Project
            </h3>
            <div>
              <h3>Overview:</h3>{" "}
              <p>
                Recognizing the growing need for a centralized platform
                facilitating community engagement, I spearheaded the conception
                of a solution addressing this gap. Current social media
                platforms often fail to cater adequately to diverse community
                needs, prompting the development of a comprehensive platform
                empowering users to connect seamlessly within their respective
                communities.{" "}
              </p>
            </div>
            <div>
              <h3>Responsibilities and Achievements:</h3>
              <p>
                1. Conceptualized and led the development of a community
                engagement platform, prioritizing user-centric design and
                scalability.
              </p>
              <p>
                2. Implemented a suite of tools and functionalities aimed at
                facilitating effortless community interaction, including user
                profile management, community creation and administration, and
                thread creation and interaction.
              </p>
              <p>
                3. Utilized cutting-edge technologies and industry best
                practices to ensure optimal user experience and community-driven
                content moderation.
              </p>
              <p>
                4. Integrated advanced search and discovery features, enabling
                users to explore and join relevant communities easily.
              </p>
              <p>
                {" "}
                5. Implemented real-time updates and notifications, enhancing
                user engagement and platform responsiveness.
              </p>
              <p>
                6. Established robust community moderation and administration
                mechanisms, ensuring a safe and welcoming environment for all
                users.
              </p>
            </div>
            <div>
              {" "}
              <h3>Project Outcome:</h3>
              This platform empowers users to create, discover, and engage
              within their communities seamlessly, fostering meaningful
              interactions and connections across diverse interest groups.
            </div>
          </div>
          <a
            href="https://github.com/enochdev2/trend"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://communityhub-full-stack.vercel.app/"
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
                <RiRadioButtonFill className="pr-1" /> Shandcn UI
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

export default Communityhub;
