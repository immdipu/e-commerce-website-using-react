import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import AmountButtons from "./AmountButtons";
import { useCartContext } from "../context/cart_context";

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const { id, stock, colors } = product;

  const [mainColor, setMainColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const increase = () => {
    setAmount((prev) => {
      let tempAmount = prev + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
      }
      return tempAmount;
    });
  };
  const decrease = () => {
    setAmount((prev) => {
      let tempAmount = prev - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-5">
        <span className="font-semibold text-lg text-slate-800 pb-1">
          colors :
        </span>
        <div className="leading-none flex items-center">
          {colors.map((color, index) => {
            return (
              <button
                style={{ background: color }}
                key={index}
                className={
                  "w-6 h-6 rounded-full mr-3 " +
                  (mainColor === color ? "opacity-100" : "opacity-50")
                }
                onClick={() => setMainColor(color)}
              >
                {mainColor === color ? (
                  <FaCheck className="invert w-full scale-75" />
                ) : null}
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <AmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
        />
        <Link
          to="/cart"
          className="uppercase font-medium text-lg bg-slate-500 px-3 py-1 text-slate-200 rounded-lg w-fit"
          onClick={() => addToCart(id, mainColor, amount, product)}
        >
          Add to carts
        </Link>
      </div>
    </div>
  );
};

export default AddToCart;
