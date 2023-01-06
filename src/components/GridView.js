import React from "react";
import Product from "./Product";

const GridView = ({ products }) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(218px,1fr))] w-full justify-center gap-10">
      {products.map((product) => {
        return <Product key={product.id} {...product}></Product>;
      })}
    </div>
  );
};

export default GridView;
