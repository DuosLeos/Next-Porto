import React from "react";
import ProjectCard from "./Helper/ProjectCard";

const Project = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-[#0d2c73] " id="project">
      <div className="text-center">
        <p className="heading__mini"></p>
        <h1 className="heading__primary">
          My Best <span className="text-green-400">Projects</span>
        </h1>
      </div>
      <ProjectCard
        title="Portofolio Website"
        tech1="React"
        tech2="Next Js"
        tech3="Tailwind"
        tech4="TypeScript"
        image="/images/p1.png"
      />
      <ProjectCard
        title="MERN Food Delivery"
        tech1="React"
        tech2="Next Js"
        tech3="Tailwind"
        tech4="TypeScript"
        image="/images/p2.png"
      />
      <ProjectCard
        title="E-commerce Expired date detection"
        tech1="React"
        tech2="Next Js"
        tech3="Node Js"
        tech4="MongoDB"
        image="/images/p3.png"
      />
      <ProjectCard
        title="Travel website"
        tech1="React"
        tech2="Next Js"
        tech3="Tailwind"
        tech4="TypeScript"
        image="/images/p4.png"
      />
    </div>
  );
};

export default Project;
