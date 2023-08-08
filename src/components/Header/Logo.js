import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <div class="flex flex-shrink-0 items-center mr-20  cursor-pointer">
        <Link to='/'>
        <img
          class="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
          alt="Your Company"
        />
        </Link>
      </div>
    </>
  );
};

export default Logo;
