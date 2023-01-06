import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/helpers";

const Product = ({ image, name, price, id }) => {
  return (
    <div className="h-48 rounded-md overflow-hidden">
      <div className="h-4/5 w-full relative group">
        <img src={image} alt={name} className="object-cover h-full w-full " />
        <div className="absolute flex opacity-0 z-20 group-hover:opacity-100 duration-200 transition-all ear# inset-0 w-full items-center justify-center bg-[#4c4c4c9e] text-3xl">
          <Link
            to={`/products/${id}`}
            className="w-fit bg-zinc-300 p-3 rounded-full"
          >
            <FaSearch />
          </Link>
        </div>
      </div>
      <footer className="h-fit flex items-center justify-between px-2 py-2">
        <h3 className="font-medium text-lg capitalize">{name}</h3>
        <p>{formatPrice(price)}</p>
      </footer>
    </div>
  );
};

export default Product;
