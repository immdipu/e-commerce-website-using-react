import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { useProductContext } from "../context/products_context";
import { FaTimes } from "react-icons/fa";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";

const Sidebar = () => {
  const { isSidebarOpen, closeSiderbar } = useProductContext();

  return (
    <div>
      <div
        className={
          "fixed top-0 w-full h-full z-40 hidden transition-all duration-200 ease-linear bg-white max-md:block px-6 py-5 " +
          (isSidebarOpen ? " left-0" : " -left-[50rem]")
        }
      >
        <div className="flex justify-between">
          <img src={logo} alt="comf sloth" className="w-28" />
          <button
            type="button"
            className="text-2xl text-red-600"
            onClick={closeSiderbar}
          >
            <FaTimes />
          </button>
        </div>
        <ul className="flex flex-col gap-4 mt-7 mx-2">
          {links.map(({ id, text, url }, index) => {
            return (
              <li key={index} className="capitalize font-semibold">
                <Link to={url} onClick={closeSiderbar}>
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex mt-16 justify-center">
          <CartButtons />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
