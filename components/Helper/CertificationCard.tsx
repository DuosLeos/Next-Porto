import { CheckIcon } from "@heroicons/react/16/solid";
import React from "react";

interface Props {
  plane: string;
  skill: string;
  bg: string;
  items: string[]; 
}

const PriceCard = ({ bg, plane, skill, items }: Props) => {
  return (
    <div className="text-center rounded-lg bg-gray-900">
      <div className={`p-6 rounded-t-lg ${bg}`}>
        <h1 className="text-white text-[30px]">{plane}</h1>
        <div className="flex justify-center items-end mt-[1rem] space-x-1">
          <h1 className="text-[30px] font-bold text-green-400">{skill}</h1>
        </div>
      </div>
      <div className="p-6">
        {items.map((item, index) => (
          <div key={index} className="flex items-center space-x-3">
            <CheckIcon className="w-[1.4rem] h-[1.4rem] text-green-400" />
            <p className="text-[17px] text-white opacity-80">{item}</p>
          </div>
        ))}
      </div>
      <button
        className="mt-[1.5rem] px-8 py-4 bg-blue-600 text-white block w-[100%] hover:bg-blue-800 
      transition-all duration-300 "
      >
        {" "}
        See Certification
      </button>
    </div>
  );
};

export default PriceCard;
