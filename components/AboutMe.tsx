import { CheckIcon } from "@heroicons/react/16/solid";
import React from "react";

const AboutMe = () => {
  return (
    <div className="mt-[-4rem] bg-[#001a73] pb-[3rem]" id="aboutMe">
      <div
        className="w-[80%] pt-[5rem] sm:pt-[7rem] md:pt-[10rem] mx-auto grid items-center grid-cols-1
   lg:grid-cols-2 gap-[2rem]"
      >
        <div>
          <p className="heading__mini">About Me</p>
          <h1 className="heading__primary">
            Proffesional{" "}
            <span className="text-green-400">Website and Data Intelegent</span>{" "}
            for your business
          </h1>
          <p className="text-[15px] mt-[1.3rem] text-white opacity-75">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            aspernatur? Necessitatibus ut praesentium eveniet dignissimos in,
            laudantium ratione? Nemo minima accusantium velit in eaque eveniet
            impedit exercitationem alias mollitia assumenda!
          </p>
          <div className="mt-[2rem] space-y-3">
            <div className="flex items-center space-x-4">
              <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
              <p className="text-[18px] text-white">
                Machine Learning Engineer
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
              <p className="text-[18px] text-white">Data Scientist</p>
            </div>
            <div className="flex items-center space-x-4">
              <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
              <p className="text-[18px] text-white">Front End Developer</p>
            </div>
            <div className="flex items-center space-x-4">
              <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400" />
              <p className="text-[18px] text-white">Back End Developer</p>
            </div>
          </div>
        </div>
        <div className="lg:ml-auto">
          <h2 className="text-center text-2xl text-white font-bold mb-6 ">
            My Portofolio.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-[2rem]">
            <div
              data-aos="zoom-in"
              daya-aos-anchor-placement="top-center"
              className="p-6 text-center bg-green-500"
            >
              <p className="text-[20px] text-black font-bold">
                Machine Learning Engineering
              </p>
            </div>

            <div
              data-aos="zoom-in"
              daya-aos-anchor-placement="top-center"
              data-aos-delay="200"
              className="p-6 text-center bg-green-500"
            >
              <p className="text-[20px] text-black font-bold">
                Data Science and Data Analyst
              </p>
            </div>

            <div
              data-aos="zoom-in"
              daya-aos-anchor-placement="top-center"
              data-aos-delay="400"
              className="p-6 text-center bg-green-500"
            >
              <p className="text-[20px] text-black font-bold">
                Front End Developer
              </p>
            </div>

            <div
              data-aos="zoom-in"
              daya-aos-anchor-placement="top-center"
              data-aos-delay="600"
              className="p-6 text-center bg-green-500"
            >
              <p className="text-[20px] text-black font-bold">
                Back End Developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
