import React from "react";
import { useFilterContext } from "../context/filter_context";
import { getUniquesValues, formatPrice } from "../utils/helpers";
import { FaCheck } from "react-icons/fa";

const Filters = () => {
  const {
    filters: {
      text,
      category,
      company,
      color,
      min_price,
      price,
      max_price,
      shipping,
    },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext();

  const categories = getUniquesValues(all_products, "category");
  const companies = getUniquesValues(all_products, "company");
  const colors = getUniquesValues(all_products, "colors");

  return (
    <section>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          {/* search input */}
          <div>
            <input
              type="text"
              name="text"
              placeholder="Search"
              value={text}
              onChange={updateFilters}
            />
          </div>
          {/* categories */}
          <div>
            <h4>Categories</h4>
            <div className="grid grid-cols-1 justify-center align-middle gap-y-1">
              {categories.map((c, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilters}
                    name="category"
                    type="button"
                    className={
                      "capitalize font-semibold text-slate-700 w-fit " +
                      (category === c.toLowerCase() ? " border-b-2" : null)
                    }
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>
          <div>
            <h1>Company</h1>
            <select name="company" value={company} onChange={updateFilters}>
              {companies.map((c, index) => {
                return (
                  <option key={index} value={c}>
                    {c}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <h2>Colors</h2>
            <div>
              {colors.map((c, index) => {
                if (c === "all") {
                  return (
                    <button
                      key={index}
                      name="color"
                      onClick={updateFilters}
                      data-color="all"
                      className={
                        "capitalize font-semibold text-slate-700 mx-1 " +
                        (color === c ? "border-b-2 border-slate-400" : null)
                      }
                    >
                      All
                    </button>
                  );
                }

                return (
                  <button
                    style={{ background: c }}
                    key={index}
                    name="color"
                    className={
                      "w-4 h-4 rounded-full mr-2 bg-black " +
                      (color === c ? " opacity-100" : " opacity-70")
                    }
                    data-color={c}
                    onClick={updateFilters}
                  >
                    {color === c ? (
                      <FaCheck className="invert w-full scale-75" />
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>
          <div>
            <h5>price</h5>
            <p>{formatPrice(price)}</p>
            <input
              type="range"
              name="price"
              onChange={updateFilters}
              min={min_price}
              max={max_price}
              value={price}
            />
          </div>
          <div>
            <label htmlFor="shipping">free shipping</label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              onChange={updateFilters}
              checked={shipping}
            />
          </div>
        </form>
        <button type="button" onClick={clearFilters}>
          clear filters
        </button>
      </div>
    </section>
  );
};

export default Filters;
