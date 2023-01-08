import React from "react";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import { CartContent, PageHero } from "../components";

const CartPage = () => {
  const { cart } = useCartContext();
  if (cart.length < 1) {
    return (
      <div>
        <div>
          <h2>Your cart is empty</h2>
          <Link to="/products">fill it</Link>
        </div>
      </div>
    );
  }
  return (
    <main>
      <PageHero title="cart" />
      <div>
        <CartContent />
      </div>
    </main>
  );
};

export default CartPage;
