import React from "react";
import logo from "../assets/logo.svg";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { useProductContext } from "../context/products_context";

const Navbar = () => {
  const { openSiderbar } = useProductContext();

  return (
    <nav className="mt-2">
      <div className="grid grid-cols-[auto_1fr_auto] mx-8 max-md:grid-cols-[1fr]">
        <div className="flex justify-between">
          <Link to="/">
            <img src={logo} alt="comfy sloth" className="w-44" />
          </Link>
          <button type="button" className="md:hidden" onClick={openSiderbar}>
            <FaBars />
          </button>
        </div>
        <ul className="flex items-center justify-center gap-8 font-semibold capitalize max-md:hidden">
          {links.map((link, index) => {
            const { text, url } = link;
            return (
              <li key={index}>
                <NavLink to={url}>{text}</NavLink>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center max-md:hidden">
          <CartButtons />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
