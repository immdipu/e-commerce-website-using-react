import React from "react";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";

const ListView = ({ products }) => {
  return (
    <section className="flex flex-col gap-16 my-12">
      {products.map((product) => {
        const { id, image, name, price, description } = product;
        return (
          <article key={id} className="grid grid-cols-4 gap-6">
            <img
              src={image}
              alt={name}
              className="h-44 w-full object-cover rounded-md"
            />
            <div className="col-start-2 col-span-5 flex flex-col gap-2">
              <h4 className="capitalize text-slate-800 font-bold text-2xl">
                {name}
              </h4>
              <h5 className="text-orange-800 text-base font-bold">
                {formatPrice(price)}
              </h5>
              <p className="text-slate-700 font-normal">
                {description.substring(0, 150)}...
              </p>
              <Link
                to={`/products/${id}`}
                className="mt-1 bg-slate-500 hover:bg-slate-600 text-neutral-200 uppercase text-xs py-1 w-fit tracking-widest px-2 rounded-md"
              >
                Details
              </Link>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default ListView;
