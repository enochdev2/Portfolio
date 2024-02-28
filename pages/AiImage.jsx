import Image from "next/image";
import React from "react";
import ai_image from "../public/assets/projects/ai_image.png";

import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const AiImage = () => {
  return (
    <div className="w-full bg-slate-200">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={ai_image}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 px-4">
          <h2 className="py-2">AI_IMAGE TRANSFORMATION APPLICATION</h2>
          <h3>
            {" "}
            Next JS / TypeScript / Tailwind / Shadcn Ui / Clerk / Mongo DB
          </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto pl-8 px-4 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <div className="text-black text-justify text-lg space-y-4">
            <h3>
              Project description Project - <br /> AI_Image tranformtion
              Platform Project
            </h3>
            <div>
              <h3>Experience:</h3>
              <p>
                1. Spearheaded the development and implementation of innovative
                image management solutions within the AI Image Application, a
                cutting-edge platform designed to revolutionize image
                organization and optimization.
              </p>
              <p>
                2. Collaborated closely with cross-functional teams including
                software engineers, UI/UX designers, and data scientists to
                drive product development initiatives from concept to
                deployment, ensuring alignment with strategic objectives and
                user requirements
              </p>
              <p>
                3. Played a pivotal role in designing and refining user
                workflows, enhancing user experiences through intuitive
                interfaces, seamless navigation, and efficient task execution.
              </p>
              <p>
                4. Leveraged artificial intelligence technologies to develop
                intelligent features such as automated image tagging, content
                analysis, and trend detection, providing users with actionable
                insights to optimize image content.
              </p>
              <p>
                5. Contributed to the integration of cloud services including
                Cloudinary, enabling scalable storage solutions and seamless
                image hosting capabilities for enhanced accessibility and
                reliability.
              </p>
              <p>
                6. Managed user transactions and credits system, facilitating
                secure and transparent exchanges between users while ensuring
                compliance with payment regulations and data protection
                standards.
              </p>
              <p>
                7. Engaged in continuous learning and professional development
                to stay abreast of emerging technologies, industry trends, and
                best practices in image management and artificial intelligence.
              </p>
            </div>
            <div>
              {" "}
              <h3>Key Achievements:</h3>
              <p>
                1. Successfully launched multiple product features, resulting in
                a significant improvement in user engagement and satisfaction
                metrics.
              </p>
              <p>
                {" "}
                2. Outstanding contributions to project milestones and delivery
                timelines. 3. Played a key role in driving adoption of AI-driven
                image management solutions, contributing to a measurable
                increase in platform usage.
              </p>
            </div>
          </div>
          <a
            href="https://github.com/enochdev2/AI_Image_Tools"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://ai-image-tools.vercel.app/"
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
                <RiRadioButtonFill className="pr-1" /> Shadcn Ui 
              </p>
              <p className="text-black py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Clerk
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

export default AiImage;
