import React from "react";
import PriceCard from "./Helper/CertificationCard";

const Price = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-[#001f66] ">
      <div className="text-center">
        <p className="heading__mini">My Certification</p>
        <h1 className="heading__primary">
          My <span className="text-green-400">Certification</span> For My Project
        </h1>
      </div>
      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 items-center pt-[4rem]
      md:pt-[7rem]">
         <PriceCard plane="Machine Larning" skill="Skill Contained" bg="bg-red-900 " items={["Mathematical Foundation", "Proficiency in Programming", 
         "Expertise in ML Algorithms","Data Prepro and Feature Engineer","Model Eva and Optimization"]}/>
         <PriceCard plane="Data Science" skill="Skill Contained" bg="bg-yellow-900 " items={["Statistical Understanding",
         "Programming Proficiency","Machine Learning Algorithms","Data Processing Skills","Effective Communication Skills" ]}/>
         <PriceCard plane="Web Developer" skill="Skill Contained" bg="bg-blue-900 " items={["HTML/CSS", "JavaScript", "Responsive Design", "Version Control (e.g., Git)", "Web Performance Optimization"]}
/>
      </div>
    </div>
  );
};

export default Price;
