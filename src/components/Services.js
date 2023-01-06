import React from "react";
import { services } from "../utils/constants";

const Services = () => {
  return (
    <div className="px-16 max-md:px-7 bg-neutral-200 pt-14">
      <article className="flex justify-end items-center gap-7 max-md:flex-col text-center">
        <h2 className="font-bold text-3xl whitespace-nowrap w-4/5 tracking-wider max-md:text-xl max-md:whitespace-normal">
          Custom Furniture <br />
          Built Only For You
        </h2>
        <p className=" text-amber-800 text-start max-md:text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus culpa
          explicabo corporis saepe temporibus repellat odit repellendus tempore
          excepturi doloremque ex vel, impedit suscipit provident sapiente
          labore debitis. Voluptas, dicta!
        </p>
      </article>
      <div className="grid grid-cols-3 gap-x-11 translate-y-24 max-md:grid-cols-1 max-md:gap-y-9 justify-items-center max-md:translate-y-0 max-md:mt-10">
        {services.map(({ id, icon, title, text }) => {
          return (
            <div
              key={id}
              className="bg-neutral-300 flex flex-col items-center rounded-md p-8 gap-5"
            >
              <div className="bg-neutral-200 p-4 rounded-full text-orange-900 text-4xl">
                {icon}
              </div>
              <h2 className="font-bold tracking-wider text-2xl capitalize text-amber-800">
                {title}
              </h2>
              <p className="text-center text-amber-800 ">{text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
