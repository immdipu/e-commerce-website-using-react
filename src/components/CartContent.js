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
      {cart.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      <hr />
      <div>
        <Link to="/products">continue shopping</Link>
        <button type="button" onClick={clearCart}>
          clear shopping cart
        </button>
      </div>
      <CartTotals />
    </div>
  );
};

export default CartContent;
