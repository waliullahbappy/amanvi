import React from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaWindowClose } from "@react-icons/all-files/fa/FaWindowClose";
import Nav from "./Nav";
import Logo from "./Logo";
import MobilMenu from "./MobilMenu";

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <nav class="bg-gray-800 sticky">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="relative flex h-16 items-center justify-between">
        
            <div className="">
              <Logo />
            </div>
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
              {/* <input placeholder="Search Products"type="search" id="search" name="search" class="w-full  placeholder:Search Products bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/> */}
              <Nav />
            </div>
            <div class="absolute  right-0 flex items-center sm:hidden">
              <button
                type="button"
                onClick={() => setShow(!show)}
                class="relative inline-flex text-lg items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                {show ? <FaWindowClose /> : <FaBars />}
              </button>
            </div>
            <div class="relative mb-4"></div>
          </div>
        </div>

        {show && <MobilMenu />}
      </nav>
    </div>
  );
};

export default Header;
