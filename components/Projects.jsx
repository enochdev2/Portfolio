// import React from "react";
import dashboard from "../public/assets/projects/full_stack_dashboard.png";
import realEstateImg from "../public/assets/projects/real_estate.png";

import ai_image from "../public/assets/projects/ai_image.png";
import blog1Img from "../public/assets/projects/blog1.png";
import communityhub from "../public/assets/projects/communityhub.png";
import foodOderdering from "../public/assets/projects/foodOrdering.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full px-5 bg-[#030014]">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase font-bold underline text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4 text-slate-100">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="CommunityHub Application"
            backgroundImg={communityhub}
            projectUrl="/Communityhub"
            tech="Next JS"
          />
          <ProjectItem
            title="Real-Estate Webapp"
            backgroundImg={realEstateImg}
            projectUrl="/property"
            tech="Mern-Stack"
          />
          <ProjectItem
            title="Mern_App Admin_Dashboard"
            backgroundImg={dashboard}
            projectUrl="/dashboard"
            tech="MERN-STACK"
          />
          <ProjectItem
            title="Dev-Noch Blog"
            backgroundImg={blog1Img}
            projectUrl="/blog"
            tech="Next JS"
          />

          <ProjectItem
            title="Food-Ordering web application"
            backgroundImg={foodOderdering}
            projectUrl="/FoodOrdering"
            tech="Next JS"
          />
          <ProjectItem
            title="AI_IMAGE TRANSFORMATION"
            backgroundImg={ai_image}
            projectUrl="/AiImage"
            tech="Next JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
