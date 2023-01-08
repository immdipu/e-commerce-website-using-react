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
    <div>
      <div>
        <img src={image} alt={name} />
      </div>
      <div>
        <h5>{name}</h5>
        <p>
          color : <span style={{ background: color }}></span>
        </p>
        <h5>{formatPrice(price)}</h5>
      </div>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <h5>{formatPrice(price * amount)}</h5>
      <button type="button" onClick={() => removeItem(id)}>
        <FaTrash />
      </button>
    </div>
  );
};

export default CartItem;
