import React from "react";

const Contact = () => {
  return (
    <div className="bg-slate-400 pt-52 px-16 flex items-center pb-28 max-md:flex-col max-md:px-5 gap-20">
      <div className="w-2/4 flex flex-col gap-4 max-md:w-full">
        <h1 className="font-bold tracking-wider text-3xl">
          Join our newsletter and get 20% off
        </h1>
        <p className="mt-5 text-lg text-gray-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ducimus
          facere necessitatibus, autem facilis placeat sequi, nisi pariatur
          dolorum fuga est fugiat nostrum voluptates exercitationem ad vitae,
          ipsa aperiam quo.
        </p>
      </div>
      <div className="w-2/4 flex h-9 max-md:w-full">
        <input
          type="text"
          placeholder="Enter Email"
          className="w-full outline-none border-2 border-gray-600 rounded-l-md px-5 text-xl py-1"
        />
        <button
          type="button"
          className="border-2 border-gray-600 rounded-r-md px-2 tracking-wide text-lg font-medium"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Contact;
