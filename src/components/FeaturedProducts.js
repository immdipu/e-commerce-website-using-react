import React from "react";
import { useProductContext } from "../context/products_context";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import Product from "./Product";
import Error from "./Error";

const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductContext();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className="w-full py-14">
      <div className="flex flex-col justify-center items-center gap-3 mb-14">
        <h1 className="font-bold text-4xl text-center">Featured Products</h1>
        <div className="block bg-slate-700 h-1 w-28"></div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] w-full justify-center gap-10 px-20">
        {featured.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </div>
  );
};

export default FeaturedProducts;
