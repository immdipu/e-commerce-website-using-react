import React from "react";
import { Filters, ProductList, Sort, PageHero } from "../components";

const ProductsPage = () => {
  return (
    <main>
      <PageHero title="products" />
      <div>
        <div className="grid grid-cols-8 px-28">
          <Filters />
          <div className="col-start-2 col-end-9">
            <Sort />
            <ProductList />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;
