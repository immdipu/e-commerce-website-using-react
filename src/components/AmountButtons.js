import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const AmountButtons = ({ increase, decrease, amount }) => {
  return (
    <div className="flex items-center gap-8">
      <button onClick={decrease}>
        <FaMinus />
      </button>
      <h2 className="text-3xl min-w-[20px] text-center font-semibold">
        {amount}
      </h2>
      <button onClick={increase}>
        <FaPlus />
      </button>
    </div>
  );
};

export default AmountButtons;
