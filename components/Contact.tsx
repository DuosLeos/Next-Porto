import React from "react";

const Contact = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-[#0d2c73]" id="contact">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center w-[80%] mx-auto">
        <div>
          <p className="heading__mini">Out in Touch</p>
          <h1 className="heading__primary">
            Lets make Your <span className="text-green-400">Brand</span>{" "}
            brilliant
          </h1>
          <p className="text-[15px] text-white mt-[1rem] opacity-65">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eaque
            dicta ullam voluptate architecto facilis vel modi illum corporis
            dolores?
          </p>
          <h1 className="mt-[2rem] mb-[2rem] text-[30px] text-green-300 underline font-bold">
            +6289 998 514 46
          </h1>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1em] items-center">
            <input
              type="text"
              placeholder="Name"
              className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
            />
            <input
              type="email"
              placeholder="Email"
              className="py-[0.7rem] outline-none text-white
               bg-gray-800 rounded-md px-4"
            />
          </div>
          <input
            type="text"
            placeholder="subject"
            className="py-[0.7rem] mt-[1.5rem] mb-[1.5rem] w-full outline-none text-white
             bg-gray-800 rounded-md px-4"
          />
          <textarea
            placeholder="Message"
            className="pu-[0.7rem] mb-[1.5rem] w-full outline-none text-white
          bg-gray-800 rounded-md px-4"
            rows={4}
          ></textarea>
          <button
            className="py-[0.7rem]  mt-[1.5rem] mb-[1.5rem] w-full outline-none text-white
             bg-blue-700 hover:bg-blue-800 rounded-md px-4"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
