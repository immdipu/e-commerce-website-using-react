import React from "react";
import { PageHero } from "../components";
import aboutImage from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <div>
      <PageHero title="about" />
      <div className="grid grid-cols-2 p-16 gap-12 max-md:grid-cols-1">
        <img
          src={aboutImage}
          alt="aboutimage"
          className="h-[450px] w-full object-cover"
        />
        <div>
          <h1 className="font-bold text-5xl text-neutral-700 mb-5">
            Our Story
          </h1>
          <p className="font-medium leading-loose text-neutral-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            officia doloremque delectus illum, iusto fugiat sunt corrupti,
            voluptas repudiandae recusandae impedit doloribus architecto,
            dolorem labore quas expedita alias explicabo! Iste. Repudiandae hic
            ad cum ex quo numquam, sint rem animi? Fugiat ipsam maiores natus
            alias ratione facere fugit voluptatibus illo dicta, magni
            exercitationem enim necessitatibus itaque ut voluptas odio facilis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
