import React from "react";
import { formatPrice } from "../utils/helpers";
import AmountButtons from "./AmountButtons";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";

const CartItem = ({ id, image, name, color, price, amount }) => {
  const { removeItem, toggleAmount } = useCartContext();
  const increase = () => {
    toggleAmount(id, "inc");
  };
  const decrease = () => {
    toggleAmount(id, "dec");
  };

  return (
    <div className="flex justify-around">
      <div className="flex gap-3 items-center">
        <img
          src={image}
          alt={name}
          className="w-28 h-24 rounded-md object-cover"
        />
        <div>
          <h5 className="font-medium  capitalize text-lg">{name}</h5>
          <div className="flex items-center mt-2 gap-2">
            color :
            <div className="w-4 h-4" style={{ backgroundColor: color }}></div>
          </div>
        </div>
      </div>
      <div className=" font-medium text-lg -translate-x-14 items-center flex">
        <h5>{formatPrice(price)}</h5>
      </div>
      <div className=" mr-20 flex items-center">
        <AmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
        />
      </div>

      <div className="flex justify-around items-center gap-5">
        <h5 className="text-xl mr-4 font-medium ">
          {formatPrice(price * amount)}
        </h5>
        <button type="button" onClick={() => removeItem(id)}>
          <FaTrash className="text-red-500" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
