import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div class="hidden sm:ml-6 sm:block">
        <div class="flex space-x-4">
          <NavLink
            to="/"
            className=" text-white rounded-md px-3 py-2 text-sm font-medium"
            aria-current="page"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
          >
            About
          </NavLink>
          <NavLink
            to="/products"
            className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
          >
            Products
          </NavLink>
          <NavLink
            to="/contact"
            className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Nav;
