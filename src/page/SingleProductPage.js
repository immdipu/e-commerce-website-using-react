import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductContext } from "../context/products_context";
import { single_product_url as url } from "../utils/constants";
import { formatPrice } from "../utils/helpers";
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from "../components";
import { Link } from "react-router-dom";

const SingleProductPage = () => {
  const { id } = useParams();

  let navigate = useNavigate();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductContext();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
  } = product;

  return (
    <main className="mb-4">
      <PageHero title={name} product />
      <div>
        <div className="h-fit my-10 px-10 ">
          <Link
            to="/products"
            className="bg-slate-700 px-2 py-2 text-neutral-100 h-fit rounded-md cursor-pointer hover:bg-slate-500"
          >
            Back to products
          </Link>
        </div>
        <div className="grid grid-cols-2 max-md:grid-cols-1 justify-center px-20 max-md:px-7 max-md:items-center gap-10 max-md:w-full">
          <ProductImages images={images} />
          <section className="w-fit flex flex-col gap-3 ">
            <h2 className="capitalize font-bold text-4xl text-slate-800">
              {name}
            </h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className="font-medium text-xl text-orange-800">
              {formatPrice(price)}
            </h5>
            <p className="font-normal text-slate-700 leading-7">
              {description}
            </p>
            <p className="text-slate-700 font-normal">
              <span className="font-semibold text-lg text-slate-800">
                Available :{" "}
              </span>
              {stock > 0 ? "In stock" : "out of stock"}
            </p>
            <p className="text-slate-700 font-normal">
              <span className="font-semibold text-lg text-slate-800">
                SKU :{" "}
              </span>
              {sku}
            </p>
            <p className="text-slate-700 font-normal">
              <span className="font-semibold text-lg text-slate-800">
                Brand :{" "}
              </span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart product={product} />}
          </section>
        </div>
      </div>
    </main>
  );
};

export default SingleProductPage;
