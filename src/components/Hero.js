import React from "react";
import { Link } from "react-router-dom";
import HeroBcg from "../assets/hero-bcg.jpeg";
import HeroBcg2 from "../assets/hero-bcg-2.jpeg";

const Hero = () => {
  return (
    <div className="grid grid-cols-[0.8fr,1fr] max-md:grid-cols-1 justify-center items-center gap-x-24 w-full px-14 max-sm:px-4 max-sm:mt-7">
      <div className="flex flex-col gap-8 mt-10 mx-9">
        <h1 className="font-bold text-5xl leading-none max-sm:text-3xl">
          Design Your <br />
          Comfort Zone
        </h1>
        <p className="leading-8 text-inherit font-normal max-sm:text-base">
          Discover the perfect blend of comfort and style at Comfy Furniture.
          Our online store offers a wide array of furniture pieces designed to
          transform your living spaces into cozy havens. From plush sofas to
          elegant tables and everything in between, we have the furnishings that
          match your vision.
        </p>
        <button className="bg-neutral-600 text-white font-medium px-3 rounded-md text-xl py-2 w-fit max-sm:text-sm">
          <Link to="/products">SHOP NOW</Link>
        </button>
      </div>
      <div className="mt-9 relative mb-8 ml-20 h-[35rem] max-md:hidden">
        <div className=" h-full before:absolute before:bg-orange-200 before:w-12 before:-z-10 before:h-5/6 before:-left-10 before:rounded-sm before:bottom-0">
          <img
            src={HeroBcg}
            alt="image1"
            className="w-full h-full object-cover"
          />
          <img
            src={HeroBcg2}
            alt="HeroBcg2"
            className="w-64 absolute bottom-0 rounded-md -left-44 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
