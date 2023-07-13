import React from "react";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import CartColumns from "./CartColumn";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";

const CartContent = () => {
  const { cart, clearCart } = useCartContext();

  return (
    <div>
      <CartColumns />
      <div className="flex flex-col gap-3 py-5">
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
        <hr className="" />
      </div>

      <div className="justify-between flex px-28 mt-10 ">
        <Link
          to="/products"
          className="bg-amber-700 px-2 text-white pb-1  rounded-md"
        >
          continue shopping
        </Link>
        <button
          type="button"
          onClick={clearCart}
          className="bg-neutral-700 px-2 text-white pb-1  rounded-md"
        >
          clear shopping cart
        </button>
      </div>

      <CartTotals />
    </div>
  );
};

export default CartContent;
