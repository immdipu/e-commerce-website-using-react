import React from "react";
import { FaShoppingCart, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useProductContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";

const CartButtons = () => {
  const { closeSiderbar } = useProductContext();
  const { total_items } = useCartContext();
  const { loginWithRedirect, myUser, logout } = useUserContext();
  return (
    <div className="flex items-center gap-10">
      <Link
        to="/cart"
        className="flex items-center gap-2 text-xl font-semibold"
        onClick={closeSiderbar}
      >
        Cart
        <span className="relative">
          <FaShoppingCart />
          <span className="absolute -top-4 -right-6 bg-orange-200 text-lg scale-75 font-normal px-2 rounded-full">
            {total_items}
          </span>
        </span>
      </Link>
      {myUser ? (
        <button
          type="button"
          className="flex gap-2 items-center font-semibold text-xl"
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Logout <FaUserMinus />
        </button>
      ) : (
        <button
          type="button"
          className="flex gap-2 items-center font-semibold text-xl"
          onClick={loginWithRedirect}
        >
          Login <FaUserPlus />
        </button>
      )}
    </div>
  );
};

export default CartButtons;
