import React from "react";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import { CartContent, PageHero } from "../components";

const CartPage = () => {
  const { cart } = useCartContext();
  if (cart.length < 1) {
    return (
      <div className="border flex justify-center min-h-[80vh] items-center">
        <div className="flex flex-col gap-5 items-center">
          <h2 className="text-3xl font-bold">Your cart is empty</h2>
          <Link
            to="/products"
            className="bg-amber-700 px-4 py-1 tracking-wide rounded-md text-white font-light  text-lg"
          >
            Fill it
          </Link>
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
