import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between relative h-[15%] w-full my-3 items-center">
      <img className="ml-8 h-12 rounded-md " src="humming.svg" alt="logo" />
      <nav className="flex ml-72 mr-[10%]  justify-start ">
        <NavLink
          to="/accordian"
          className="mr-2 text-xl text-stone-600  focus:text-blue-300 "
        >
          Accordian
        </NavLink>
        <NavLink
          to="/carousel"
          className="mr-2 text-xl text-stone-600  focus:text-blue-300"
        >
          Carousel
        </NavLink>
        <NavLink
          to="/pagination"
          className="mr-2 text-xl text-stone-600  focus:text-blue-300"
        >
          Pagination
        </NavLink>
        <NavLink
          to="/star"
          className="mr-2 text-xl text-stone-600  focus:text-blue-300"
        >
          Star
        </NavLink>
        <NavLink
          to="/infinite"
          className="mr-2 text-xl text-stone-600  focus:text-blue-300"
        >
          Infinite
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
