import React from "react";

const Footer = () => {
  return (
    <div className="bg-neutral-800 text-neutral-200 flex flex-col items-center justify-center py-2">
      <h5>
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-sm text-orange-400">ComfySloth</span>{" "}
      </h5>
      <h5>All right reserved</h5>
    </div>
  );
};

export default Footer;
