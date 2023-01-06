import React, { useState } from "react";

const ProductImages = ({ images = [{ url: "" }] }) => {
  const [main, setMain] = useState(images[0]);
  return (
    <section className="w-fit max-md:w-full">
      <img
        src={main.url}
        alt="mainImage"
        className="h-[500px] w-full object-cover"
      />
      <div className="grid grid-flow-col auto-cols-fr gap-5 mt-5 ">
        {images.map((image, index) => {
          return (
            <img
              src={image.url}
              key={index}
              alt={image.filename}
              onClick={() => setMain(images[index])}
              className={
                "object-cover h-16 rounded-md cursor-pointer max-md:h-full " +
                (image.url === main.url
                  ? " border-2 border-orange-400"
                  : "border-none")
              }
            />
          );
        })}
      </div>
    </section>
  );
};

export default ProductImages;
