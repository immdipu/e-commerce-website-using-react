import React from "react";
import { Link } from "react-router-dom";

const PageHero = ({ title, product }) => {
  return (
    <div className="bg-neutral-500 font-medium tracking-wider px-16 py-8 mt-3 p">
      <h3 className="text-3xl ">
        <Link
          to="/"
          className="text-gray-800 hover:text-gray-900 transition-all duration-150 ease-linear"
        >
          Home
        </Link>{" "}
        {product && (
          <Link
            to="/products"
            className="text-gray-800 hover:text-gray-900 transition-all duration-150 ease-linear"
          >
            / Products
          </Link>
        )}
        / {title}
      </h3>
    </div>
  );
};

export default PageHero;
