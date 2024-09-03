import React from "react";

const Header = () => {
  return (
    <nav className="h-[10vh] flex item-center justify-between">
      <h2 className="text-2xl font-mono ">Store</h2>
      <input
        className="px-5 py-2 border border-solid  border-blue-200 rounded-md "
        type="text"
        placeholder="search the product"
      />
    </nav>
  );
};

export default Header;
