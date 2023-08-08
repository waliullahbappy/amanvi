import React from "react";
import { NavLink } from "react-router-dom";

const MobilMenu = () => {
  return (
    <>
      <div className="sm:hidden" id="mobile-menu">
        <div class="space-y-1 px-2 pb-3 pt-2">
          <NavLink
            to="/"
            className=" text-white block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            About
          </NavLink>
          <NavLink
            to="/products"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Products
          </NavLink>
          <NavLink
            to="/contact"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Contact
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default MobilMenu;
