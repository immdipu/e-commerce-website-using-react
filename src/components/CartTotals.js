import React from "react";
import { useCartContext } from "../context/cart_context";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/user_context";

const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext();
  const { myUser, loginWithRedirect } = useUserContext();
  return (
    <div className="bg-neutral-100 w-72   ml-12 rounded-md px-4 my-14 ">
      <div>
        <article className="flex flex-col gap-2 pt-4">
          <h5 className="font-medium text-xl">
            subtotal : <span>{formatPrice(total_amount)}</span>
          </h5>
          <p className="font-medium text-xl">
            shipping fee : <span>{formatPrice(shipping_fee)}</span>
          </p>
          <hr />
          <h4 className="font-medium text-xl">
            order total :{" "}
            <span>{formatPrice(total_amount + shipping_fee)}</span>
          </h4>
        </article>
        {myUser ? (
          <Link to="/checkout">proceed to checkout</Link>
        ) : (
          <button
            type="button"
            className="bg-amber-700 text-white w-full rounded-md mt-3"
            onClick={loginWithRedirect}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default CartTotals;
