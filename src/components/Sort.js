import React from "react";
import { useFilterContext } from "../context/filter_context";
import { BsFillGridFill, BsList } from "react-icons/bs";

const Sort = () => {
  const {
    filtered_products: products,
    grid_view,
    setGridView,
    setListView,
    sort,
    updateSort,
  } = useFilterContext();
  return (
    <div className="flex items-center gap-5">
      <div className="flex items-center gap-2 my-7">
        <button
          type="button"
          className={
            "border p-1 rounded-[4px] border-neutral-900 " +
            (grid_view ? "bg-black text-white" : null)
          }
          onClick={setGridView}
        >
          <BsFillGridFill />
        </button>
        <button
          className={
            "border p-1 rounded-[4px] border-neutral-900 " +
            (!grid_view ? "bg-black text-white" : null)
          }
          onClick={setListView}
        >
          <BsList />
        </button>
      </div>
      <p className="w-fit whitespace-pre text-slate-700 text-lg ml-4">
        {products.length} products found
      </p>
      <hr className="w-full" />
      <form className="whitespace-pre">
        <label htmlFor="sort" className="">
          Sort by
        </label>
        <select name="sort" id="sort" value={sort} onChange={updateSort}>
          <option value="price-lowest">price (lowest)</option>
          <option value="price-highest">price (highest)</option>
          <option value="name-a">name (a-z)</option>
          <option value="name-z">name (z-a)</option>
        </select>
      </form>
    </div>
  );
};

export default Sort;
