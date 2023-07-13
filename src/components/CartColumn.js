import React from "react";

const CartColumns = () => {
  return (
    <div className="">
      <div className="flex justify-around ">
        <h5 className="font-medium text-xl capitalize py-4">item</h5>
        <h5 className="font-medium text-xl capitalize py-4">price</h5>
        <h5 className="font-medium text-xl capitalize py-4">quantity</h5>
        <h5 className="font-medium text-xl capitalize py-4">subtotal</h5>
      </div>
      <div className="w-full h-[1px] bg-opacity-25 bg-neutral-600" />
    </div>
  );
};

export default CartColumns;
